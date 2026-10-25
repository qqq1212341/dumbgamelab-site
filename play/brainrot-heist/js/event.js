"use strict";
/* 핼러윈 이벤트 — 10/25 ~ 11/2(기기 시각). 기간 밖이면 통째로 꺼진다. 시험용: ?event=halloween (켬) · ?event=off (끔).
 * 원작 해부(RE §11): 으스스(8단째) 생물 2종 = 37·38줄 수치(초당 2만·1.8만 — 천상 1.7만보다 위) · 호박 상자 = 90초 뒤 열림, 전설 15·신화 50·갓 20·으스스 15 ·
 * 사탕 동전 = 칸에 있는 가장 비싼 생물 값 ÷ 100 × 0.3 짜리 6개(최소 100) · 이벤트 손님은 공짜.
 * 이 판 값: 호박 상자 손님은 하루 6번까지(원작은 서버 값 미공개 — 으스스가 너무 흔해지지 않게). */
const HW = (() => {
  let force = (/[?&]event=(\w+)/.exec(location.search) || [])[1] || "";   // 시험: halloween(켬) · off(끔)
  function on(t = new Date()){
    if(force === "halloween") return true;
    if(force === "off") return false;
    const v = (t.getMonth() + 1) * 100 + t.getDate(), [fm, fd] = CONFIG.hw.from, [tm, td] = CONFIG.hw.to;
    return v >= fm * 100 + fd && v <= tm * 100 + td;
  }
  function daysLeft(){
    if(force === "halloween") return 9;
    const t = new Date(), end = new Date(t.getFullYear(), CONFIG.hw.to[0] - 1, CONFIG.hw.to[1], 23, 59, 59);
    return Math.max(1, Math.ceil((end - t) / 86400000));
  }
  const today = () => { const t = new Date(); return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate(); };
  function rollDay(){ if(state.hw.day !== today()){ state.hw.day = today(); state.hw.boxes = 0; } }
  const left = () => { rollDay(); return Math.max(0, CONFIG.hw.boxPerDay - state.hw.boxes); };

  let boxT = CONFIG.hw.boxEvery - 12, candyT = CONFIG.hw.candyEvery - 20, candy = null;

  /* 매 프레임(base 모드) */
  function update(dt, L){
    if(!on()){ candy = null; return; }
    rollDay();
    boxT += dt;
    if(boxT >= CONFIG.hw.boxEvery && left() > 0 && !walkers.some(w => w.ev === "halloween") && !sheetOpen()){
      boxT = 0;
      walkers.push({ id: ++wid, row: LUCKY_ROW, r: 6, x: -L.beltH * 0.5, born: now, ev: "halloween" });
      pop(W / 2, L.beltY + 18, T("hwBoxGuest"), "#ffb347"); SFX.warn();
    }
    candyT += dt;
    if(!candy && candyT >= CONFIG.hw.candyEvery && creatureCount() >= 1 && !sheetOpen()){
      candyT = 0; candy = { x: -40, t: 0, lane: 0.55 + Math.random() * 0.35 };
      pop(W / 2, L.beltY + 18, T("hwCandyGuest"), "#ffb347");
    }
    if(candy){ candy.t += dt; candy.x += dt * (W + 80) / 11; if(candy.x > W + 50) candy = null; }
  }
  function candyPos(L){ return candy ? { x: candy.x, y: L.baseTop + L.gridH * candy.lane - Math.abs(Math.sin(candy.t * 4)) * 22 } : null; }
  /* 사탕 통을 눌렀나 */
  function tap(x, y, L){
    const p = candyPos(L); if(!p || Math.hypot(x - p.x, y - (p.y - 26)) > 46) return false;
    let best = 0; for(const sl of state.slots) if(sl && sl.row !== LUCKY_ROW) best = Math.max(best, priceOf(sl.row, sl.r));
    const coin = Math.max(CONFIG.hw.candyMin, Math.floor(best / 100 * CONFIG.hw.candyMult)), total = coin * CONFIG.hw.candyCoins;
    state.cash += total; cashBump = now; SFX.coin(); burst(p.x, p.y - 26, "#ffb347");
    pop(p.x, p.y - 60, "+" + fmt(total), "#ffd24a"); candy = null; track("hw_candy", { v: total }); saveState();
    return true;
  }
  function drawCandy(L){
    const p = candyPos(L); if(!p) return;
    shadow(p.x, p.y + 4, 44, 0.3);
    drawSprite("props/candypail", p.x, p.y, 52, Math.sin(candy.t * 8) * 0.04);
    text(T("hwTapMe"), p.x, p.y - 62, 12, "#ffe27a", { stroke: 4, strokeColor: "#2b0a3a" });
  }
  /* 기지 장식 — 틀 가장자리에만(칸을 안 가린다) */
  function drawDeco(L){
    if(!on()) return;
    const x = 8, y = L.baseTop, w = W - 16, h = L.baseBot - L.baseTop, bw = wobble("base", 6);
    ctx.save(); ctx.translate(bw, 0);
    const web = spr("deco/web");
    if(web){ const s = Math.min(92, w * 0.24), hh = s * web.height / web.width;
      ctx.drawImage(web, x + 2, y + 2, s, hh);
      ctx.save(); ctx.translate(x + w - 2, y + 2); ctx.scale(-1, 1); ctx.drawImage(web, 0, 0, s, hh); ctx.restore(); }
    const tomb = spr("deco/tomb"); if(tomb){ const s = 54, hh = s * tomb.height / tomb.width; ctx.drawImage(tomb, x + w - s - 4, y + h - hh + 6, s, hh); }
    const pump = spr("deco/pumpkin"); if(pump){ const s = 50, hh = s * pump.height / pump.width; ctx.drawImage(pump, x - 2, y + h - hh + 8, s, hh); }
    const cand = spr("deco/candle"); if(cand){ const s = 40, hh = s * cand.height / cand.width; ctx.drawImage(cand, W / 2 - s / 2 - 70, y + h - hh + 8, s, hh); }
    const cal = spr("deco/cauldron"); if(cal){ const s = 46, hh = s * cal.height / cal.width; ctx.drawImage(cal, W / 2 + 28, y + h - hh + 8, s, hh); }
    ctx.restore();
  }
  /* 박쥐 — 화면 위쪽을 가로지른다(칸·글자 뒤) */
  function drawBats(L){
    if(!on()) return;
    const bat = spr("deco/bat"); if(!bat) return;
    for(let k = 0; k < 3; k++){
      const ph = ((now * (0.045 + k * 0.012) + k * 0.37) % 1), x = ph * (W + 80) - 40, y = L.hudH + 34 + k * 26 + Math.sin(now * 3 + k * 2) * 14;
      const flap = 1 + Math.sin(now * 14 + k) * 0.18;
      ctx.save(); ctx.translate(x, y); ctx.scale(flap, 1 / flap); const s = 32 - k * 4; ctx.drawImage(bat, -s / 2, -s * 0.35, s, s * bat.height / bat.width); ctx.restore();
    }
  }
  function line(){
    if(!on()) return "";
    return T("hwLine", { d: daysLeft(), n: left() });
  }
  return { setForce: (v) => { force = v; }, on, daysLeft, update, tap, drawCandy, drawDeco, drawBats, line, left, rollDay, candyOn: () => !!candy };
})();
