"use strict";
(function() {
  if (window.DGL && window.DGL.__ready) return;
  var MEASUREMENT_ID = "G-07WLGFMQDD";
  var GAME = "brainrotheist";
  var configured = !!MEASUREMENT_ID && MEASUREMENT_ID.indexOf("G-XXXX") !== 0;
  if (GAME === "CHANGEME") {
    console.error(
      "[DGL.analytics] \u2605 GAME \uC2AC\uB7EC\uADF8\uB97C \uC548 \uBC14\uAFE8\uB2E4 \u2014 public/js/analytics.js \uC758 GAME \uC744 \uC774 \uAC8C\uC784 \uC2AC\uB7EC\uADF8\uB85C \uAD50\uCCB4\uD574\uB77C. \uC9C0\uAE08 \uC0C1\uD0DC\uB85C \uCD9C\uC2DC\uD558\uBA74 \uC9C0\uD45C\uB97C \uAD6C\uBD84\uD560 \uC218 \uC5C6\uB2E4."
    );
  }
  var DEBUG = /[?&]dglDebug=1/.test(location.search) || detectPlatform() === "web" && ["localhost", "127.0.0.1", "[::1]", ""].indexOf(location.hostname) >= 0;
  function detectPlatform() {
    try {
      var C = window.Capacitor;
      if (C && C.isNativePlatform && C.isNativePlatform()) return C.getPlatform && C.getPlatform() || "app";
    } catch (e) {
    }
    return "web";
  }
  var PLATFORM = detectPlatform();
  var LOCAL_HOSTS = ["localhost", "127.0.0.1", "[::1]", "0.0.0.0", ""];
  var isLocalWeb = PLATFORM === "web" && LOCAL_HOSTS.indexOf(location.hostname) >= 0;
  var SEND = !isLocalWeb || /[?&]dglSend=1/.test(location.search);
  var SESSION = "s" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  if (configured && SEND) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    (document.head || document.documentElement).appendChild(s);
    gtag("js", /* @__PURE__ */ new Date());
    gtag("config", MEASUREMENT_ID, { debug_mode: DEBUG, send_page_view: true });
  }
  function _faParams(params) {
    var out = {};
    for (var k in params || {}) {
      var v = params[k];
      out[k] = k !== "value" && (typeof v === "number" || typeof v === "boolean") ? String(v) : v;
    }
    return out;
  }
  function _send(name, params) {
    try {
      var C = window.Capacitor;
      if (C && C.isNativePlatform && C.isNativePlatform()) {
        if (name === "session_start" || name === "first_open") return;
        var FA = C.Plugins && C.Plugins.FirebaseAnalytics;
        if (FA && FA.logEvent) {
          var pr = FA.logEvent({ name, params: _faParams(params) });
          if (pr && typeof pr.catch === "function") pr.catch(function() {
          });
        }
        return;
      }
    } catch (e) {
    }
    if (configured && SEND) {
      try {
        gtag("event", name, params);
      } catch (e) {
      }
    }
  }
  function track(name, params) {
    var p = params || {};
    p.game = GAME;
    p.platform = PLATFORM;
    p.session_id = SESSION;
    if (DEBUG) {
      try {
        console.debug("[DGL.track]", name, p);
      } catch (e) {
      }
    }
    _send(name, p);
  }
  window.DGL = window.DGL || {};
  window.DGL.track = track;
  window.DGL.configured = configured;
  window.DGL.sending = SEND;
  window.DGL.__ready = true;
  window.DGL.ctx = null;
  track("app_open", {});
  var _closed = false;
  function closeOnce() {
    if (_closed) return;
    _closed = true;
    var p = {};
    try {
      if (typeof window.DGL.ctx === "function") p = window.DGL.ctx() || {};
    } catch (e) {
      p = {};
    }
    track("app_close", p);
  }
  window.addEventListener("pagehide", closeOnce);
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") closeOnce();
    else _closed = false;
  });
  if (!configured) {
    try {
      console.info("[DGL] analytics \uC900\uBE44\uB428 \u2014 \uCE21\uC815 ID \uBBF8\uC124\uC815(\uCF58\uC194 \uB85C\uADF8\uB9CC). MEASUREMENT_ID \uCC44\uC6B0\uBA74 GA4 \uC804\uC1A1 \uC2DC\uC791.");
    } catch (e) {
    }
  }
})();
