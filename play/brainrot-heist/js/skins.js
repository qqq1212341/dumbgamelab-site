"use strict";
/* 스킨 — 기지 바닥(base) · 생물 소품(cr). 결제 없음 — 돈 · 환생 단계 · 도감 · 이벤트로 열고, 광고가 있으면 «광고 보고 열기»도 된다(원작 유료 자리).
 * 규칙은 여기, 창은 social.js. 열린 스킨은 state.skin.own 에 남는다(조건이 나중에 풀려도 안 잃는다). */
const SKINS = (() => {
  /* unlock: free · rebirth n(환생 n단계) · cash v(돈 v 내고 산다) · book n(도감 n쪽 완성) · event(그 이벤트로 얻은 것) */
  const BASE = [
    { id: "wood",  tex: "floor-wood",  rim: "#7a4a26", unlock: { t: "free" } },
    { id: "cloud", tex: "floor-cloud", rim: "#3f6f99", unlock: { t: "rebirth", n: 1 } },
    { id: "candy", tex: "floor-candy", rim: "#c45a8a", unlock: { t: "cash", v: 3e6 } },
    { id: "gold",  tex: "floor-wood",  rim: "#d19a1a", tint: "#e8b020", mode: "color", unlock: { t: "book", n: 3 } },
    { id: "space", tex: "floor-space", rim: "#4a3a99", unlock: { t: "rebirth", n: 9 } },
    { id: "haunt", tex: "floor-wood",  rim: "#2b0a3a", tint: "#7a3fe0", mode: "color", unlock: { t: "event", ev: "halloween" } },
  ];
  /* 생물 소품 — 머리 위에 얹는다. w = 생물 높이 대비 폭 */
  const CR = [
    { id: "",      unlock: { t: "free" } },
    { id: "bow",   w: 0.36, up: 0.04, unlock: { t: "cash", v: 5e4 } },
    { id: "shades", w: 0.40, up: 0.02, tilt: -0.12, unlock: { t: "cash", v: 3e5 } },
    { id: "party", w: 0.30, up: 0.06, unlock: { t: "rebirth", n: 2 } },
    { id: "crown", w: 0.36, up: 0.04, unlock: { t: "rebirth", n: 5 } },
    { id: "halo",  w: 0.40, up: 0.14, unlock: { t: "book", n: 5 } },
    { id: "witch", w: 0.40, up: 0.04, unlock: { t: "event", ev: "halloween" } },
  ];
  const find = (kind, id) => (kind === "base" ? BASE : CR).find(s => s.id === id);

  function cond(s){
    const u = s.unlock;
    if(u.t === "free") return true;
    if(u.t === "rebirth") return state.task >= u.n;
    if(u.t === "book") return state.book.length >= u.n;
    if(u.t === "event") return !!(state.hw && state.hw.opened >= 1) || state.dex.some(k => /_7$/.test(k));   // 호박 상자를 열었거나 으스스 생물을 얻었다
    return false;
  }
  const key = (kind, id) => kind + ":" + id;
  /* 조건이 찬 스킨은 «가진 것»으로 도장 — 환생 뒤에도 안 사라진다 */
  function sync(){
    let n = 0;
    for(const [kind, list] of [["base", BASE], ["cr", CR]]) for(const s of list) if(s.unlock.t !== "cash" && cond(s) && !state.skin.own.includes(key(kind, s.id))){ state.skin.own.push(key(kind, s.id)); n++; }
    return n;
  }
  const owned = (kind, id) => { const s = find(kind, id); return !!s && (s.unlock.t === "free" || state.skin.own.includes(key(kind, id))); };
  function equip(kind, id){ if(!owned(kind, id)) return false; state.skin[kind === "base" ? "base" : "cr"] = id; saveState(); return true; }
  function buy(kind, id){ const s = find(kind, id); if(!s || s.unlock.t !== "cash" || owned(kind, id) || state.cash < s.unlock.v) return false; state.cash -= s.unlock.v; state.skin.own.push(key(kind, id)); saveState(); return true; }
  function grant(kind, id){ if(!owned(kind, id)) state.skin.own.push(key(kind, id)); saveState(); }   // 광고로 열기
  /* 이벤트 스킨은 이벤트가 끝나도 이미 가진 건 쓴다. 이벤트 중이 아니면 새로 열지 못한다 */
  function lockedReason(s){ const u = s.unlock; return u.t === "event" && !HW.on() ? "hwOff" : u.t; }

  /* ---------- 그리기 ---------- */
  const anchors = {};
  /* 생물 그림에서 «머리 꼭대기»를 찾는다 — 위쪽 12% 줄의 불투명 픽셀 가운데 */
  function anchorOf(id){
    if(anchors[id]) return anchors[id];
    const im = spr("creatures/" + id); if(!im) return null;
    const N = 64, c = document.createElement("canvas"); c.width = c.height = N; const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(im, 0, 0, N, N);
    const d = g.getImageData(0, 0, N, N).data;
    let top = -1, sx = 0, n = 0;
    for(let y = 0; y < N && (top < 0 || y < top + 7); y++) for(let x = 0; x < N; x++) if(d[(y * N + x) * 4 + 3] > 80){ if(top < 0) top = y; sx += x; n++; }
    if(top < 0) return (anchors[id] = { x: 0.5, y: 0.1 });
    return (anchors[id] = { x: sx / n / N, y: top / N });
  }
  /* 그림 안 얼굴 위치 = 캔버스 256 정사각 기준 — drawSprite 와 같은 계산(폭 = 높이 × 가로세로비) */
  function dress(id, cx, footY, h){
    const cr = state.skin.cr; if(!cr) return;
    const def = find("cr", cr), im = spr("skins/" + cr), a = anchorOf(id);
    if(!def || !im || !a) return;
    const sp = spr("creatures/" + id), sw = h * sp.width / sp.height;
    const aw = h * def.w, ah = aw * im.height / im.width;
    const x = cx - sw / 2 + a.x * sw, yTop = footY - h + a.y * h;   // 머리 꼭대기
    ctx.save(); ctx.translate(x, yTop + h * (def.up || 0)); if(def.tilt) ctx.rotate(def.tilt);
    ctx.drawImage(im, -aw / 2, -ah, aw, ah);
    ctx.restore();
  }
  function floor(){
    const s = find("base", state.skin.base) || BASE[0];
    return s;
  }
  return { BASE, CR, find, sync, owned, equip, buy, grant, cond, lockedReason, dress, floor, key, anchorOf };
})();
