"use strict";
/* 치치의 브레인롯 털이 — 세이브/영구상태. 스키마 바뀌면 version 올리고 마이그레이션 추가.
   칸 slots[i] = null | { row, r, pend, t? } — row = 원작 표 줄(data.js) · r = 희귀도 번호 · pend = 칸에 쌓인 돈 · t = 럭키 박스 남은 초 */
const SAVE_KEY = "brainrotheist_v1";   // 키는 그대로 — 옛 세이브(version 3)는 새 판으로 바꿔 준다(생물 8종 → 32종이라 옮길 수 없다)
const SLOT_N = CONFIG.slotsPerFloor * CONFIG.floors;

function newState(){
  return { version: 4, cash: CONFIG.startCash, mult: 1, task: 0, cool: CONFIG.lockBase,
    slots: Array(SLOT_N).fill(null), open: Array.from({ length: SLOT_N }, (_, i) => i < CONFIG.slotsPerFloor),
    items: [], shop: { next: 0, offers: [] }, dex: [], book: [], lockUntil: 0, evClaim: {},
    bought: 0, plays: 0, raids: 0, raidWins: 0, raidReadyAt: 0, muted: false, lastSeen: Date.now(), tut: 0 };
}
function loadState(){
  try{
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    if(s && s.version === 4){
      const st = { ...newState(), ...s };
      while(st.slots.length < SLOT_N) st.slots.push(null);
      while(st.open.length < SLOT_N) st.open.push(false);
      return st;
    }
  }catch(e){}
  return newState();
}
let state = loadState();

function saveState(){
  state.lastSeen = Date.now();
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }catch(e){}
  // 앱(Capacitor) 네이티브 미러 — OS 캐시청소에도 세이브 생존
  try{
    const P = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Preferences;
    if(P) P.set({ key: SAVE_KEY, value: JSON.stringify(state) });
  }catch(e){}
}
