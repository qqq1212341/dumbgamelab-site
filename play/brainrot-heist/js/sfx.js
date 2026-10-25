"use strict";
/* 효과음 — WebAudio 로 합성(파일 0개). 소리를 낼지는 audio-env.js(DGL_AUDIO)가 정한다: 로컬은 무음 · 배포는 유음. */
const SFX = (() => {
  let ac = null;
  const muted = () => (window.DGL_AUDIO ? window.DGL_AUDIO.muted(state.muted) : state.muted);
  function ctx(){
    if(!ac){ const C = window.AudioContext || window.webkitAudioContext; if(!C) return null; ac = new C(); }
    if(ac.state === "suspended") ac.resume();
    return ac;
  }
  function tone(freq, dur, { type = "square", vol = 0.08, slide = 0, delay = 0 } = {}){
    if(muted()) return;
    const a = ctx(); if(!a) return;
    const t = a.currentTime + delay, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if(slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  return {
    buy(){ tone(660, 0.08, { type: "triangle" }); tone(990, 0.12, { type: "triangle", delay: 0.07 }); },
    coin(){ tone(1320, 0.07, { type: "square", vol: 0.05 }); tone(1760, 0.1, { type: "square", vol: 0.05, delay: 0.06 }); },
    deny(){ tone(180, 0.15, { type: "sawtooth", vol: 0.05 }); },
    land(){ tone(300, 0.1, { type: "sine", vol: 0.12, slide: -120 }); },
    step(){ tone(220, 0.04, { type: "triangle", vol: 0.04 }); },
    warn(){ tone(880, 0.09, { vol: 0.06 }); tone(880, 0.09, { vol: 0.06, delay: 0.14 }); },
    caught(){ tone(400, 0.5, { type: "sawtooth", vol: 0.08, slide: -300 }); },
    win(){ [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.16, { type: "triangle", vol: 0.08, delay: i * 0.09 })); },
    hit(){ tone(150, 0.08, { type: "square", vol: 0.08, slide: -60 }); },
    unlock(){ ctx(); },
    open(){ [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, { type: "triangle", vol: 0.07, delay: i * 0.06 })); },
    lock(){ tone(200, 0.1, { type: "square", vol: 0.07 }); tone(140, 0.2, { type: "square", vol: 0.07, delay: 0.09 }); },
    fuse(){ tone(220, 0.5, { type: "sawtooth", vol: 0.05, slide: 600 }); [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.14, { type: "triangle", vol: 0.08, delay: 0.5 + i * 0.08 })); },
    rebirth(){ [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.18, { type: "triangle", vol: 0.08, delay: i * 0.08 })); },
    boom(){ tone(120, 0.4, { type: "sawtooth", vol: 0.1, slide: -80 }); tone(70, 0.5, { type: "square", vol: 0.08, slide: -30, delay: 0.05 }); },
    zap(){ tone(900, 0.12, { type: "square", vol: 0.06, slide: -600 }); },
  };
})();
