"use strict";
const SFX = (() => {
  const VOL = { buy: 0.8, coin: 0.7, deny: 0.6, land: 0.8, step: 0.35, warn: 0.7, caught: 0.8, win: 0.8, hit: 0.7, open: 0.8, lock: 0.7, fuse: 0.7, rebirth: 0.8, boom: 0.9, zap: 0.7 };
  const files = {};
  const muted = () => window.DGL_AUDIO ? window.DGL_AUDIO.muted(state.muted) : state.muted;
  function load(n) {
    if (files[n]) return files[n];
    const a = new Audio(`assets/audio/sfx_${n}.mp3`);
    a.preload = "auto";
    a.onerror = () => {
      delete files[n];
    };
    return files[n] = a;
  }
  function play(n) {
    if (muted()) return;
    try {
      const a = load(n).cloneNode();
      a.volume = VOL[n] || 0.7;
      a.play().catch(() => {
      });
    } catch (e) {
    }
  }
  const api = { unlock() {
    Object.keys(VOL).forEach(load);
  } };
  Object.keys(VOL).forEach((n) => {
    api[n] = () => play(n);
  });
  return api;
})();
