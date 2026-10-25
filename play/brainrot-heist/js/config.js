"use strict";
/* 치치의 브레인롯 털이 — 게임 상수. 수치의 SOT = data.js(원작 해부 표) · 여기는 «규칙 상수»와 이 판에서만 다른 값.
   생물 그림은 전부 우리 것(art/raw/creatures-sheet*.png → tools/slice_creatures.py). 원작 캐릭터 이름·그림 금지(core/concepts/roblox-port/README.md).
   원작과 다른 값은 «이 판 값»이라고 적어 뒀다 — 해부 문서 §차이표. */

/* 희귀도 7단(원작 8단 중 핼러윈 «으스스» 제외) — 색은 원작 표시색 */
const RARITY_COLORS = [
  { id: "common",    color: "#46e043", outline: "#0b3a0a" },
  { id: "rare",      color: "#4b9eff", outline: "#0a2a55" },
  { id: "epic",      color: "#b762ff", outline: "#2c0a55" },
  { id: "legendary", color: "#ff9b00", outline: "#5a3200" },
  { id: "mythic",    color: "#ff3e96", outline: "#5a0a2e" },
  { id: "god",       color: "#1b1b1b", outline: "#ffffff" },
  { id: "celestial", color: "#e5ff00", outline: "#ff00ea" },
  { id: "spooky",    color: "#ff7a1a", outline: "#2b0a3a" },   // 8단째 «으스스» — 핼러윈 이벤트로만 나온다(원작 7번 희귀도)
];
const ROW_BY_ROW = Object.fromEntries(DATA.rows.map(r => [r.row, r]));
const ROW_BY_ID = Object.fromEntries(DATA.rows.map(r => [r.id, r]));
const LUCKY_ROW = 20;
const LUCKY_TIME = [30, 30, 30, 60, 90, 150, 90];   // 6번째 = 핼러윈 호박 상자(원작 Pumpky Block 90초)   // 원작: 박스 희귀도별 열리는 데 걸리는 초

const CONFIG = {
  startCash: 0,                 // 원작: 0 — 첫 손님이 공짜(행 0 · 일반 = 0원)
  slotsPerFloor: 8,             // 칸 8 + 8(2층)
  floors: 2,
  floor2Task: 9,                // 환생 9단계를 깨면 2층이 열린다
  slotCap: 1e6,                 // 칸 하나가 쌓는 돈 상한
  spawnEvery: 8,                // 초 — 원작 1인 모드 8초에 한 마리
  walkSeconds: 26,              // 이 판 값: 원작 ~54초(U자 길) → 폰 한 화면 가로 한 줄이라 줄였다
  sellHold: 0.9,                // 초 — 원작 «1초 꾹»
  sellGet: 0.5,                 // 판 값 = 칸에 쌓인 돈 + 값/2
  lockBase: 30,                 // 기지 잠금 = 30 + 2×환생 단계 초 (보상으로 덮어쓴다)
  offlineCapSec: 0,             // 0 = 상한 없음(칸 상한 1e6 만 지킨다) — 원작과 같다
  unlockCostMult: 1e7,          // 이 판 값: 원작은 칸 하나당 보상형 광고. 광고가 없으면 (n번째 칸) × 1천만 원
  restockSec: 300,              // 이 판 값(원작 서버 값 미공개): 상점 입고 주기
  eventGraceSec: 60,            // 이벤트 손님이 놓치면 다시 오는 간격
  raid: {
    unlockBought: 2,
    cooldown: 40,
    tiers: [
      { dist: 1.0, away: [1.6, 3.0], look: [1.0, 1.4] },
      { dist: 1.3, away: [1.1, 2.4], look: [1.1, 1.6] },
      { dist: 1.6, away: [0.8, 1.9], look: [1.2, 1.8] },
    ],
    speed: 0.16,
    carrySlow: 0.5,             // 원작: 훔쳐 들면 이동 속도 ½
    grabHold: 1.0,              // 원작: 꾹 누르기 1초로 집는다
    turnWarn: 0.45,
    grace: 0.12,
  },
  thief: { first: 70, every: [90, 160], walk: 7.5, hp: 4, minCreatures: 2 },
  interstitialGap: 120,
  /* 핼러윈 이벤트(10/25~11/2 · 기기 시각) — 으스스 생물 수치·호박 상자 표는 원작 37·38줄과 PumpkinLB 표 그대로(core/concepts/roblox-port/RE-steal-a-brainrot.md §11) */
  hw: { from: [10, 25], to: [11, 2], boxEvery: 75, boxPerDay: 6, candyEvery: 50, candyCoins: 6, candyMult: 0.3, candyMin: 100 },
  /* 멀티(비동기 훔치기) — 서버 = core/tools/brainrot-api */
  net: { api: "https://dgl-brainrot-api.iap-validator.workers.dev", syncEvery: 45, timeout: 4500, maxNick: 12 },
};

/* 아이템 효과(이 판 값) — 원작 기능을 «도둑 쫓기»·«잠입» 두 자리로 옮겼다. 내구도 = 원작 값(data.js items[6]) */
const ITEM_FX = {
  15: { kind: "thief", dmg: 2 },                  // 때리기 막대 — 멀리 밀어낸다
  16: { kind: "thief", dmg: 2, slow: 4 },         // 가시 막대 — 어지럽혀 느려진다
  10: { kind: "thief", dmg: 1, stall: 5 },        // 벌 — 5초 헷갈린다(원작 confuse 5초)
  14: { kind: "thief", dmg: 4 },                  // 풍선 — 하늘로 날려 보낸다
  18: { kind: "thief", dmg: 2, slow: 3 },         // 사탕 — 눈이 부셔 느려진다
  17: { kind: "thief", dmg: 99 },                 // 무지개 사탕 — 아무 데로나 순간이동
  11: { kind: "thief", dmg: 1, shrink: 8 },       // 개미 총 — 작아져 느려진다
  12: { kind: "thief", dmg: 1, freeze: 5 },       // 얼음 총 — 5초 얼린다
  21: { kind: "thief", dmg: 1, pin: 4 },          // 닻 — 4초 붙잡는다
  20: { kind: "thief", dmg: 99 },                 // 갈고리 — 끌어당겨 잡는다
  22: { kind: "thief", dmg: 99 },                 // TNT
  19: { kind: "base" },                           // 기지 리모컨 — 어디서든 잠근다
  13: { kind: "raid", fx: "portal" },             // 포털 총 — 훔쳐 들고 순간이동으로 귀환
  23: { kind: "raid", fx: "clone", sec: 5 },      // 복제 튜브 — 5초 미끼(원작 teleportTime 5)
  25: { kind: "raid", fx: "invis", sec: 15 },     // 투명 물약 — 15초(원작 duration 15)
  24: { kind: "raid", fx: "swap" },               // 맞바꾸기 총 — 들켰을 때 한 번 모면
};
