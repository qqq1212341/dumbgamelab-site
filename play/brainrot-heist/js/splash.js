"use strict";
(function() {
  if (window.__dglSplashShown) return;
  window.__dglSplashShown = true;
  if (window.DGL_AUDIO && window.DGL_AUDIO.local && !/[?&]splash=1(&|$)/.test(location.search)) return;
  try {
    if (sessionStorage.getItem("dgl-splash-seen") === "1") return;
    sessionStorage.setItem("dgl-splash-seen", "1");
  } catch (e) {
  }
  var SILENT = false;
  var muted = SILENT;
  if (!muted) {
    try {
      muted = localStorage.getItem("dgl_mute") === "1";
    } catch (e) {
    }
  }
  if (window.DGL_AUDIO) muted = SILENT || window.DGL_AUDIO.muted(muted);
  var BASE = "assets/dgl-splash/", AUDIO = "assets/audio/", BG = "#021029";
  var PIECES = [
    { n: "dumb_D", x: 0.0579, y: 0.1232, w: 0.2505, r: -6.2 },
    { n: "dumb_U", x: 0.2769, y: 0.113, w: 0.2234, r: -1.8 },
    { n: "dumb_M", x: 0.4687, y: 0.0939, w: 0.2875, r: 1.6 },
    { n: "dumb_B", x: 0.7247, y: 0.1271, w: 0.2086, r: 3.8 },
    { n: "game_G", x: 0.2302, y: 0.3807, w: 0.1585, r: -6.2 },
    { n: "game_A", x: 0.3685, y: 0.3679, w: 0.1389, r: -1.8 },
    { n: "game_M", x: 0.4873, y: 0.3562, w: 0.192, r: 1.6 },
    { n: "game_E", x: 0.6592, y: 0.3809, w: 0.1298, r: 3.8 },
    { n: "lab", x: 0.1646, y: 0.5223, w: 0.5959, r: 0 },
    { n: "flask", x: 0.7113, y: 0.5423, w: 0.13, r: 0 },
    { n: "tag", x: 0.1922, y: 0.7528, w: 0.6451, r: 0 }
  ];
  var STAGGER = 54, DUR = 520, HOLD = 650, FADE = 460;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ov = document.createElement("div");
  ov.id = "dgl-splash";
  ov.style.cssText = "position:fixed;inset:0;z-index:2147483646;background:" + BG + ";display:grid;place-items:center;pointer-events:none;transition:opacity " + FADE + "ms ease;opacity:1;";
  var box = document.createElement("div");
  box.style.cssText = "position:relative;width:min(80vmin,560px);aspect-ratio:1/1;transform-origin:50% 50%;will-change:transform;";
  ov.appendChild(box);
  (document.body || document.documentElement).appendChild(ov);
  var AC = null, buf = {}, brand = null;
  if (!muted) {
    try {
      AC = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
    }
  }
  function loadBuf(name, file) {
    if (!AC) return;
    fetch(AUDIO + file).then(function(r) {
      return r.arrayBuffer();
    }).then(function(ab) {
      return AC.decodeAudioData(ab);
    }).then(function(b) {
      buf[name] = b;
    }).catch(function() {
    });
  }
  loadBuf("pop", "dgl-splash-pop.mp3");
  loadBuf("whoosh", "dgl-splash-whoosh.mp3");
  loadBuf("chime", "dgl-splash-chime.mp3");
  loadBuf("blub", "dgl-splash-blub.mp3");
  function sfx(name, rate, gain, when) {
    if (!AC || AC.state !== "running" || !buf[name]) return;
    try {
      var s = AC.createBufferSource();
      s.buffer = buf[name];
      s.playbackRate.value = rate || 1;
      var g = AC.createGain();
      g.gain.value = gain == null ? 1 : gain;
      s.connect(g).connect(AC.destination);
      s.start(AC.currentTime + Math.max(0, when || 0));
    } catch (e) {
    }
  }
  function playBrand() {
    if (muted) return;
    try {
      brand = new Audio(AUDIO + "dgl-splash.mp3");
      brand.volume = 0.85;
      var p = brand.play();
      if (p && p.catch) p.catch(function() {
        var once = function() {
          try {
            brand.currentTime = 0;
            brand.play().catch(function() {
            });
          } catch (e) {
          }
          window.removeEventListener("pointerdown", once);
          window.removeEventListener("touchend", once);
        };
        window.addEventListener("pointerdown", once);
        window.addEventListener("touchend", once);
      });
    } catch (e) {
    }
  }
  if (AC && AC.state === "suspended") {
    AC.resume().catch(function() {
    });
  }
  var wraps = [], imgs = [], loaded = 0, started = false;
  PIECES.forEach(function(p) {
    var wrap = document.createElement("div");
    wrap.style.cssText = "position:absolute;left:" + p.x * 100 + "%;top:" + p.y * 100 + "%;width:" + p.w * 100 + "%;transform-origin:50% 50%;transform:rotate(" + p.r + "deg);will-change:transform;";
    var img = document.createElement("img");
    img.decoding = "async";
    img.alt = "";
    img.style.cssText = "display:block;width:100%;opacity:" + (reduce ? "1" : "0") + ";transform-origin:50% 50%;will-change:transform,opacity;";
    img.onload = function() {
      if (++loaded === PIECES.length) ready();
    };
    img.onerror = function() {
      fail();
    };
    img.src = BASE + p.n + ".png";
    wrap.appendChild(img);
    box.appendChild(wrap);
    wraps.push(wrap);
    imgs.push({ el: img, wrap, p });
  });
  var shine = document.createElement("div");
  shine.style.cssText = "position:absolute;inset:-4% -30%;pointer-events:none;opacity:0;mix-blend-mode:screen;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.5) 50%,transparent 60%);";
  box.appendChild(shine);
  var failed = false;
  function fail() {
    if (failed || started) return;
    failed = true;
    box.innerHTML = "";
    var logo = document.createElement("img");
    logo.src = "assets/dgl-splash.png";
    logo.style.cssText = "width:100%;height:auto;opacity:0;transition:opacity 350ms ease;";
    box.appendChild(logo);
    playBrand();
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        logo.style.opacity = "1";
      });
    });
    setTimeout(dismiss, 350 + 1200);
  }
  var readyTimer = setTimeout(function() {
    if (!started && !failed) ready();
  }, 1500);
  function ready() {
    if (started || failed) return;
    started = true;
    clearTimeout(readyTimer);
    playBrand();
    reduce ? runReduced() : runScatter();
    setTimeout(function() {
      window.addEventListener("pointerdown", skip, { once: true });
    }, 200);
  }
  function anim(el, kf, opts) {
    try {
      return el.animate(kf, Object.assign({ fill: "both" }, opts));
    } catch (e) {
    }
  }
  function runScatter() {
    var r = box.getBoundingClientRect(), cx = r.width / 2, cy = r.height / 2, D = Math.max(r.width, r.height) * 1.15;
    sfx("whoosh", 1, 0.5, 0.02);
    imgs.forEach(function(o, i) {
      var wr = o.wrap.getBoundingClientRect();
      var dx = wr.left - r.left + wr.width / 2 - cx, dy = wr.top - r.top + wr.height / 2 - cy;
      var L = Math.hypot(dx, dy) || 1, fx = dx / L * D, fy = dy / L * D;
      var rot = (i % 2 ? 1 : -1) * (16 + i * 13 % 26), delay = i * STAGGER;
      anim(o.el, [
        { transform: "translate(" + fx.toFixed(0) + "px," + fy.toFixed(0) + "px) rotate(" + rot + "deg) scale(.5)", opacity: 0, offset: 0, easing: "cubic-bezier(.2,.7,.3,1)" },
        { transform: "translate(0,0) rotate(2deg) scale(1.13)", opacity: 1, offset: 0.72, easing: "cubic-bezier(.3,1.5,.6,1)" },
        { transform: "scale(.95)", opacity: 1, offset: 0.87 },
        { transform: "none", opacity: 1, offset: 1 }
      ], { delay, duration: DUR });
      var land = (delay + DUR * 0.72) / 1e3;
      if (o.p.n === "flask") sfx("blub", 1, 0.55, land);
      else sfx("pop", 0.92 + i * 0.035, 0.42, land);
    });
    finale(PIECES.length * STAGGER + DUR);
  }
  function runReduced() {
    box.style.opacity = "0";
    box.style.transition = "opacity 380ms ease";
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        box.style.opacity = "1";
      });
    });
    setTimeout(dismiss, 380 + HOLD);
  }
  function finale(totalMs) {
    var at = Math.max(0, totalMs - 120);
    sfx("chime", 1, 0.5, at / 1e3);
    setTimeout(function() {
      anim(box, [
        { transform: "none" },
        { transform: "translate(-6px,0) rotate(-1.6deg)", offset: 0.22 },
        { transform: "translate(5px,0) rotate(1.2deg)", offset: 0.5 },
        { transform: "translate(-2px,0) rotate(-.6deg)", offset: 0.74 },
        { transform: "none" }
      ], { duration: 520, easing: "ease-out" });
      anim(shine, [{ transform: "translateX(-70%)", opacity: 0, offset: 0 }, { opacity: 0.85, offset: 0.25 }, { transform: "translateX(75%)", opacity: 0, offset: 1 }], { duration: 720, easing: "cubic-bezier(.3,.1,.3,1)" });
    }, at);
    setTimeout(dismiss, totalMs + HOLD);
  }
  function skip() {
    if (AC && AC.state === "suspended") AC.resume().catch(function() {
    });
    imgs.forEach(function(o) {
      try {
        o.el.getAnimations().forEach(function(a) {
          a.finish();
        });
      } catch (e) {
        o.el.style.opacity = "1";
        o.el.style.transform = "none";
      }
    });
    dismiss(true);
  }
  var closing = false;
  function dismiss(fast) {
    if (closing) return;
    closing = true;
    if (fast) ov.style.transition = "opacity 220ms ease";
    ov.style.opacity = "0";
    if (brand) {
      try {
        var v = brand.volume, t = setInterval(function() {
          v -= 0.12;
          brand.volume = Math.max(0, v);
          if (v <= 0) {
            clearInterval(t);
            brand.pause();
          }
        }, 40);
      } catch (e) {
      }
    }
    setTimeout(function() {
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      if (AC) {
        try {
          AC.close();
        } catch (e) {
        }
      }
    }, (fast ? 220 : FADE) + 60);
  }
})();
