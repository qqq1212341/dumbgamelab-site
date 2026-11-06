"use strict";
const BGM = (() => {
  const FILES = { base: "assets/audio/bgm_base.mp3", raid: "assets/audio/bgm_raid.mp3" };
  const VOL = 0.32;
  const FADE = 1.2;
  let ac = null, bus = null, want = null, cur = null, ducked = false;
  const buffers = {}, loading = {};
  const muted = () => window.DGL_AUDIO ? window.DGL_AUDIO.muted(state.muted) : state.muted;
  function ctx() {
    if (!ac) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ac = new C();
      bus = ac.createGain();
      bus.gain.value = 0;
      bus.connect(ac.destination);
    }
    if (ac.state === "suspended") ac.resume().catch(() => {
    });
    return ac;
  }
  function load(key) {
    if (buffers[key] || loading[key]) return loading[key];
    const a = ctx();
    if (!a) return null;
    loading[key] = fetch(FILES[key]).then((r) => r.arrayBuffer()).then((b) => new Promise((ok, no) => a.decodeAudioData(b, ok, no))).then((buf) => {
      buffers[key] = buf;
      if (want === key) start(key);
    }).catch(() => {
      delete loading[key];
    });
    return loading[key];
  }
  function start(key) {
    const a = ctx();
    if (!a || !buffers[key]) return;
    const t = a.currentTime;
    if (cur && cur.key === key) {
      cur.g.gain.cancelScheduledValues(t);
      cur.g.gain.setTargetAtTime(1, t, FADE / 4);
      return;
    }
    if (cur) {
      const old = cur;
      old.g.gain.setTargetAtTime(0, t, FADE / 4);
      setTimeout(() => {
        try {
          old.src.stop();
        } catch (e) {
        }
      }, FADE * 1e3 + 200);
    }
    const src = a.createBufferSource(), g = a.createGain();
    src.buffer = buffers[key];
    src.loop = true;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(1, t + FADE);
    src.connect(g).connect(bus);
    src.start(t);
    cur = { key, src, g };
  }
  function level() {
    if (!ac) return;
    bus.gain.setTargetAtTime(muted() || ducked ? 0 : VOL, ac.currentTime, 0.15);
  }
  document.addEventListener("pointerdown", () => {
    if (ac && ac.state === "suspended") ac.resume().catch(() => {
    });
  }, true);
  return {
    /** 매 프레임 불러도 된다 — 바뀔 때만 움직인다. 첫 터치(SFX.unlock) 전엔 컨텍스트를 안 만든다. */
    set(mode) {
      const key = mode === "raid" ? "raid" : mode === "base" ? "base" : null;
      if (key === want) return;
      want = key;
      if (!key) {
        if (cur && ac) {
          cur.g.gain.setTargetAtTime(0, ac.currentTime, FADE / 4);
        }
        return;
      }
      if (!ctx()) return;
      level();
      if (buffers[key]) start(key);
      else load(key);
      load(key === "base" ? "raid" : "base");
    },
    /** 설정의 소리 켜기/끄기 뒤에 부른다 */
    refresh() {
      level();
    },
    /** 광고 중엔 내린다 */
    duck(on) {
      ducked = !!on;
      level();
    }
  };
})();
