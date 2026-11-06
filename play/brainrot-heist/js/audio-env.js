"use strict";
(function() {
  if (window.DGL_AUDIO) return;
  var LOCAL_HOST = /^(localhost|0\.0\.0\.0|127(\.\d{1,3}){3}|\[?::1\]?|[^.]+\.local|[^.]+\.localhost|10(\.\d{1,3}){3}|192\.168(\.\d{1,3}){2}|172\.(1[6-9]|2\d|3[01])(\.\d{1,3}){2})$/i;
  function isNative() {
    try {
      var C = window.Capacitor;
      if (!C) return false;
      if (typeof C.isNativePlatform === "function") return !!C.isNativePlatform();
      return !!C.platform && C.platform !== "web";
    } catch (e) {
      return false;
    }
  }
  function isLocalUrl(href) {
    var u;
    try {
      u = new URL(String(href));
    } catch (e) {
      return false;
    }
    if (u.protocol === "file:") return true;
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    if (!u.port) return false;
    return LOCAL_HOST.test(u.hostname);
  }
  function urlForced(search) {
    try {
      var v = new URLSearchParams(search).get("mute");
      return v === null ? null : v !== "0";
    } catch (e) {
      return null;
    }
  }
  var forced = urlForced(location.search);
  var local = !isNative() && isLocalUrl(location.href);
  var override = null;
  function hardMute() {
    try {
      var M = window.HTMLMediaElement && window.HTMLMediaElement.prototype;
      if (M && M.play && !M.play.__dgl) {
        var play = M.play;
        M.play = function() {
          try {
            this.muted = true;
            this.volume = 0;
          } catch (e) {
          }
          return Promise.resolve();
        };
        M.play.__dgl = play;
      }
      var N = window.AudioNode && window.AudioNode.prototype;
      if (N && N.connect && !N.connect.__dgl) {
        var connect = N.connect;
        N.connect = function(dest) {
          try {
            if (dest && dest.context && dest === dest.context.destination) return dest;
          } catch (e) {
          }
          return connect.apply(this, arguments);
        };
        N.connect.__dgl = connect;
      }
    } catch (e) {
    }
  }
  if (local) hardMute();
  var pauseBus = /* @__PURE__ */ function() {
    var reasons = {};
    var subs = [];
    var clockFn = null;
    var reasonSubs = [];
    function list() {
      return Object.keys(reasons);
    }
    function paused() {
      return list().length > 0;
    }
    function log(tag) {
      if (!clockFn) return;
      try {
        console.log("DGL_CLOCK " + tag + " t=" + Number(clockFn()).toFixed(3));
      } catch (e) {
      }
    }
    function set(reason, on) {
      reason = String(reason || "ui");
      on = !!on;
      if (!!reasons[reason] === on) return;
      var was = paused();
      if (on) reasons[reason] = true;
      else delete reasons[reason];
      if (reason === "app") {
        if (on) log("out");
        else {
          log("in");
          setTimeout(function() {
            log("after");
          }, 1e3);
        }
      }
      reasonSubs.forEach(function(fn) {
        try {
          fn(reason, on);
        } catch (e) {
        }
      });
      var now = paused();
      if (was === now) return;
      subs.slice().forEach(function(fn) {
        try {
          fn(now, list());
        } catch (e) {
        }
      });
    }
    return {
      /** 멈춤 이유 켜기/끄기 — 'app' 은 이 파일이 쥔다. 게임 안 탭·창은 'ui'(또는 다른 이름) */
      set,
      /** 지금 하나라도 멈춤 이유가 있나 */
      paused,
      /** 켜진 이유 목록 */
      reasons: list,
      /** 멈춤이 바뀔 때 fn(paused, reasons) — 해제 함수를 돌려준다 */
      on: function(fn) {
        subs.push(fn);
        return function() {
          var i = subs.indexOf(fn);
          if (i >= 0) subs.splice(i, 1);
        };
      },
      /** 이유 하나가 바뀔 때마다 fn(reason, on) — 멈춤 여부가 그대로여도 부른다 */
      onReason: function(fn) {
        reasonSubs.push(fn);
      },
      /** 게임 루프의 dt — 멈춤이면 0, 아니면 max 로 자른다(단위는 부르는 쪽 것 그대로) */
      step: function(dt, max) {
        if (paused()) return 0;
        dt = Number(dt) || 0;
        if (dt < 0) return 0;
        return max != null && dt > max ? max : dt;
      },
      /** 재는 자가 읽을 게임 시간(초) — 전투·판이 흐른 시간을 돌려주는 함수 */
      clock: function(fn) {
        clockFn = typeof fn === "function" ? fn : null;
      }
    };
  }();
  window.DGL_PAUSE = pauseBus;
  (function installAppAudioLifecycle() {
    if (typeof document === "undefined" || !document.addEventListener) return;
    var contexts = [];
    var suspended = [];
    var pausedMedia = [];
    var knownMedia = [];
    var inactive = false;
    function quietRejections(context) {
      ["resume", "suspend"].forEach(function(method) {
        var native = context[method];
        if (typeof native !== "function") return;
        context[method] = function() {
          var promise = native.apply(context, arguments);
          if (promise && typeof promise.catch === "function") promise.catch(function() {
          });
          return promise;
        };
      });
    }
    function holdWhileInactive(context) {
      var nativeResume = context.resume;
      if (typeof nativeResume !== "function") return;
      context.resume = function() {
        if (inactive) {
          if (suspended.indexOf(context) < 0) suspended.push(context);
          return Promise.resolve();
        }
        return nativeResume.apply(context, arguments);
      };
    }
    if (window.HTMLMediaElement && window.HTMLMediaElement.prototype.play) {
      var nativePlay = window.HTMLMediaElement.prototype.play;
      window.HTMLMediaElement.prototype.play = function() {
        if (knownMedia.indexOf(this) < 0) knownMedia.push(this);
        if (inactive) {
          if (pausedMedia.indexOf(this) < 0) pausedMedia.push(this);
          return Promise.resolve();
        }
        return nativePlay.apply(this, arguments);
      };
    }
    ["AudioContext", "webkitAudioContext"].forEach(function(name) {
      var NativeContext = window[name];
      if (!NativeContext) return;
      function TrackedContext(options) {
        var context = new NativeContext(options);
        quietRejections(context);
        holdWhileInactive(context);
        contexts.push(context);
        if (inactive && context.suspend) context.suspend().catch(function() {
        });
        if (context.addEventListener) {
          context.addEventListener("statechange", function() {
            if (!inactive || context.state !== "running") return;
            if (suspended.indexOf(context) < 0) suspended.push(context);
            context.suspend().catch(function() {
            });
          });
        }
        return context;
      }
      TrackedContext.prototype = NativeContext.prototype;
      window[name] = TrackedContext;
    });
    var holds = {};
    function hold(reason, on) {
      if (!!holds[reason] === on) return;
      if (on) holds[reason] = true;
      else delete holds[reason];
      if (reason === "app") pauseBus.set("app", on);
      var want = Object.keys(holds).length > 0;
      if (want && !inactive) silence();
      else if (!want && inactive) wake();
    }
    pauseBus.onReason(function(reason, on) {
      if (reason === "ad") hold("ad", on);
    });
    function stop() {
      hold("app", true);
    }
    function resume() {
      if (!document.hidden) hold("app", false);
    }
    function silence() {
      inactive = true;
      contexts.forEach(function(context) {
        if (context.state === "running") {
          suspended.push(context);
          context.suspend().catch(function() {
          });
        }
      });
      var media = knownMedia.slice();
      document.querySelectorAll("audio,video").forEach(function(m) {
        if (media.indexOf(m) < 0) media.push(m);
      });
      media.forEach(function(m) {
        if (!m.paused) {
          m.__dglWasConnected = !!m.isConnected;
          pausedMedia.push(m);
          m.pause();
        }
      });
      knownMedia = knownMedia.filter(function(m) {
        return !m.ended;
      });
    }
    function wake() {
      inactive = false;
      suspended.splice(0).forEach(function(context) {
        if (context.state === "suspended") context.resume().catch(function() {
        });
      });
      pausedMedia.splice(0).forEach(function(media) {
        if (media.isConnected || !media.__dglWasConnected) media.play().catch(function() {
        });
      });
    }
    document.addEventListener("visibilitychange", function() {
      if (document.hidden) stop();
      else resume();
    });
    window.addEventListener("pagehide", stop);
    window.addEventListener("pageshow", resume);
    window.addEventListener("blur", stop);
    window.addEventListener("focus", resume);
    document.addEventListener("pause", stop);
    document.addEventListener("resume", resume);
    if (document.hidden) stop();
  })();
  window.DGL_AUDIO = {
    /** 지금 여기가 로컬 개발 서버인가 */
    local,
    /** `?mute=` 로 강제된 값 (없으면 null) */
    forced,
    /** 최종 판정 — `saved` 는 게임이 저장해 둔 음소거 값 */
    muted: function(saved) {
      if (forced !== null) return forced;
      if (local) return true;
      if (override !== null) return override;
      return !!saved;
    },
    /**
     * 사람이 게임 안에서 토글했다 — **배포에서만** 의미가 있다(로컬은 위에서 이미 잠긴다).
     * 저장소가 아니라 메모리에 둔다: 이 값이 남으면 다음 부팅이 또 시끄럽다.
     */
    setOverride: function(v) {
      override = !!v;
    },
    /** 테스트용 순수 함수 */
    isLocalUrl,
    /** 안전망이 실제로 걸렸나 — 진단·테스트용 */
    hardMuted: local && !!(window.HTMLMediaElement && window.HTMLMediaElement.prototype.play.__dgl)
  };
})();
