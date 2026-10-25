"use strict";
/* 치치의 브레인롯 털이 — 기지 화면: 컨베이어 → 구매 → 칸 수익 → 탭 수거 · 도둑 쫓기 · 잠금 · 이벤트 손님.
   규칙(돈·뽑기·환생·합성·도감) = econ.js · 창 = ui.js · 잠입 = raid.js · 말 = i18n.js · 광고·계측 = ads.js · 그리기 도구 = draw.js */
window.addEventListener("resize", resize);

/* ---------- 배치 (화면 비율로만 정한다 — 폰마다 같은 구도) ---------- */
function layout(){
  const dock = document.getElementById("dock"), dockH = dock && dock.offsetHeight ? dock.offsetHeight : 84;
  const hudH = Math.max(64, Math.min(84, H * 0.095));
  const beltY = hudH + 56, beltH = Math.min(132, Math.max(96, H * 0.15));
  const baseTop = beltY + beltH + 22, baseBot = H - dockH - 4;
  const cols = 4, rows = floor2On() ? 4 : 2, inX = 16;
  const cellW = (W - inX * 2) / cols, avail = baseBot - baseTop - 40;
  const cellH = Math.min(cellW * 1.32, avail / rows), gridH = cellH * rows;
  const gy = baseTop + 34 + Math.max(0, (avail - gridH) / 2);
  const pads = [];
  for(let i = 0; i < SLOT_N; i++){
    const c = i % cols, r = Math.floor(i / cols);
    pads.push({ x: inX + cellW * (c + .5), y: gy + cellH * (r + .74), w: cellW, h: cellH, vis: r < rows });
  }
  return { hudH, beltY, beltH, baseTop, baseBot, pads, cellW, cellH, rows, gy, gridH };
}

/* ---------- 상태 ---------- */
let mode = "title";  // title | base | raid
let walkers = [], flyers = [], pops = [], sparks = [];
let spawnT = 0, beltScroll = 0, cashBump = 0, saveTimer = 0, saveTicks = 0, secT = 0, wid = 0;
let thief = null, thiefT = 0, thiefNext = CONFIG.thief.first, armed = 0;
let evSpawnAt = {}, evDebug = (/[?&]ev=(\w+)/.exec(location.search) || [])[1] || "";
let lastLock = 0;
const shake = {};

function pop(x, y, text, color){ pops.push({ x, y, text, color, t: now }); }
function reservedSlots(){ return flyers.map(f => f.slot); }
function nextWalker(){
  // 첫 판은 공짜 손님부터 — 첫 구매까지 몇 초(원작 튜토리얼: 행 0 일반 = 0원)
  if(state.bought === 0 && !walkers.length) return { row: 0, r: 0 };
  return pickSpawn();
}
function addWalker(row, r, ev = null){
  const L = layout();
  walkers.push({ id: ++wid, row, r, x: -L.beltH * 0.5, born: now, ev });
}

function startGame(){
  SFX.unlock();
  document.getElementById("titleOverlay").classList.remove("show");
  resize(); mode = "base"; state.plays++;
  document.getElementById("app").classList.add("playing");
  track("business_start", { plays: state.plays });
  const away = settleOffline(); saveState();
  walkers = []; spawnT = CONFIG.spawnEvery - 1.2;
  refreshChrome();
  if(away >= 1) showAway(away);
}

/* ---------- 입력 ---------- */
cv.addEventListener("pointerdown", e => {
  const r = cv.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  if(mode === "raid"){ RAID.down(x, y); return; }
  if(mode !== "base" || sheetOpen()) return;
  const L = layout();
  // 0) 도둑 — 먼저 맞힌다
  if(thief && !thief.fleeing && thief.state !== "gone" && Math.hypot(x - thief.x, y - (thief.y - L.cellH * 0.3)) < L.cellW * 0.75){ hitThief(L); return; }
  // 1) 컨베이어 위 생물 — 사기
  if(y >= L.beltY - L.beltH * 0.4 && y <= L.beltY + L.beltH * 1.2){
    let best = null, bd = 1e9;
    for(const w of walkers){ const d = Math.abs(w.x - x); if(d < bd){ bd = d; best = w; } }
    if(best && bd < L.beltH * 0.6){ buy(best, L); return; }
  }
  // 2) 기지 칸
  L.pads.forEach((p, i) => {
    if(p.vis && Math.abs(x - p.x) < p.w / 2 && y > p.y - p.h * 0.78 && y < p.y + p.h * 0.26) tapPad(i, p);
  });
});
window.addEventListener("pointerup", () => RAID.up());
window.addEventListener("pointercancel", () => RAID.up());

function buy(w, L){
  const price = priceOf(w.row, w.r);
  if(state.cash < price){ shake.cash = now; SFX.deny(); pop(w.x, L.beltY, T("noCash"), "#ff6b6b"); return; }
  const free = freeSlotIdx(reservedSlots());
  if(free < 0){ shake.base = now; SFX.deny(); pop(w.x, L.beltY, T("noSlot"), "#ff6b6b"); return; }
  state.cash -= price; state.bought++;
  walkers = walkers.filter(o => o !== w);
  if(w.ev) state.evClaim[w.ev] = (eventWindow(DATA.events.find(e => e.id === w.ev)).cur || { start: 1 }).start;
  flyers.push({ row: w.row, r: w.r, slot: free, t: now, from: { x: w.x, y: L.beltY + L.beltH * 0.85 } });
  pop(w.x, L.beltY + L.beltH * 0.2, price ? "-" + fmt(price) : T("free"), "#ffd24a");
  SFX.buy();
  track("buy", { row: w.row, r: w.r, n: state.bought });
  if(state.tut < 1) state.tut = 1;
  saveState(); refreshChrome();
}
function tapPad(i, p){
  const sl = state.slots[i];
  if(!sl){
    if(!state.open[i]) openUnlockSheet(i);
    return;
  }
  if(sl.row === LUCKY_ROW){
    if(sl.t > 0){ shake["pad" + i] = now; SFX.deny(); return; }
    const got = openBox(i);
    if(got){ SFX.open(); shake["pad" + i] = now; pop(p.x, p.y - p.h * 0.7, T("boxOpened", { name: creatureName(rowOf(got.row).id) }), RARITY_COLORS[got.r].color); announceBook(); saveState(); refreshChrome(); }
    return;
  }
  if(sl.pend >= 1){
    const got = collectSlot(i); cashBump = now; shake["pad" + i] = now;
    pop(p.x, p.y - p.h * 0.75, "+" + fmt(got), "#7dff8a");
    SFX.coin(); if(state.tut < 2) state.tut = 2; saveState(); return;
  }
  openInfoSheet(i);
}
function collectAllNow(){
  const L = layout(); let tot = 0;
  for(let i = 0; i < SLOT_N; i++){ const g = collectSlot(i); if(g > 0){ tot += g; const p = L.pads[i]; pop(p.x, p.y - p.h * 0.7, "+" + fmt(g), "#7dff8a"); shake["pad" + i] = now; } }
  if(tot > 0){ cashBump = now; SFX.coin(); if(state.tut < 2) state.tut = 2; saveState(); }
}
function announceBook(){
  if(window.__bookNew != null){ const p = window.__bookNew; window.__bookNew = null; SFX.rebirth(); pop(W / 2, layout().beltY + 20, T("bkDone") + " " + T("rarity_" + RARITY_COLORS[p].id), "#ffe27a"); }
}

/* ---------- 도둑 — 가끔 너구리가 제일 비싼 놈을 노린다. 막대·총으로 쫓는다. 기지를 잠그면 못 들어온다 ---------- */
function bestSlot(){
  let best = -1, bi = -1;
  state.slots.forEach((sl, i) => { if(sl && sl.row !== LUCKY_ROW && usableSlot(i)){ const v = incomeOf(sl.row, sl.r); if(v > bi){ bi = v; best = i; } } });
  return best;
}
function spawnThief(L){
  const best = bestSlot(); if(best < 0) return;
  const p = L.pads[best];
  thief = { slot: best, x: W + 60, y: p.y, taps: 0, t: 0, fleeing: false, carry: null, hitT: -1, hp: CONFIG.thief.hp, state: "in", until: {} };
  SFX.warn(); track("thief_spawn", {});
}
function hitThief(L){
  let fx = { dmg: 1 };
  if(armed && ownedCount(armed) && ITEM_FX[armed] && ITEM_FX[armed].kind === "thief"){
    fx = ITEM_FX[armed]; useItem(armed); if(!ownedCount(armed)) armed = 0; refreshItemBar(); saveState();
  }
  thief.hitT = now; thief.hp -= fx.dmg; SFX.hit();
  thief.x = Math.min(W + 40, thief.x + L.cellW * 0.32 * Math.min(2.2, fx.dmg));
  if(fx.stall) thief.until.stall = now + fx.stall;
  if(fx.slow) thief.until.slow = now + fx.slow;
  if(fx.shrink) thief.until.slow = now + fx.shrink;
  if(fx.freeze) thief.until.freeze = now + fx.freeze;
  if(fx.pin) thief.until.pin = now + fx.pin;
  if(fx.dmg >= 4){ SFX.boom(); burst(thief.x, thief.y - 30, "#ffd24a"); }
  if(thief.hp <= 0) chaseOff(L);
}
function chaseOff(L){
  const sl = state.slots[thief.slot];
  const bonus = Math.max(20, (sl ? incomeOf(sl.row, sl.r) : 5) * 15) * state.mult;
  state.cash += bonus; cashBump = now; thief.fleeing = true;
  pop(thief.x, thief.y - L.cellH * 0.6, T("thiefGone", { v: fmt(bonus) }), "#7dff8a");
  SFX.coin(); track("thief_chased", {}); saveState();
}
function updateThief(dt, L){
  if(!thief){
    const n = creatureCount();
    if(n >= CONFIG.thief.minCreatures && !sheetOpen() && lockLeft() <= 0){
      thiefT += dt;
      if(thiefT >= thiefNext){ thiefT = 0; thiefNext = CONFIG.thief.every[0] + Math.random() * (CONFIG.thief.every[1] - CONFIG.thief.every[0]); spawnThief(L); }
    }
    return;
  }
  thief.t += dt;
  if(lockLeft() > 0 && !thief.fleeing){ thief.fleeing = true; pop(thief.x, thief.y - L.cellH * 0.5, T("lockedMsg"), "#9fe8ff"); }
  const p = L.pads[thief.slot];
  if(thief.fleeing){ thief.x += dt * W * 0.9; if(thief.x > W + 120) thief = null; return; }
  const u = thief.until;
  if(u.freeze > now || u.pin > now) return;
  let speed = (W + 60 - p.x) / CONFIG.thief.walk;
  if(u.slow > now) speed *= 0.4;
  if(u.stall > now){ thief.x += Math.sin(now * 9) * dt * 40; return; }   // 헷갈려 제자리 비틀
  thief.x -= dt * speed; thief.y = p.y;
  if(thief.x <= p.x + 6){
    const sl = state.slots[thief.slot];
    if(sl){
      thief.carry = rowOf(sl.row).id; state.slots[thief.slot] = null;
      pop(p.x, p.y - L.cellH * 0.7, T("thiefStole", { name: creatureName(rowOf(sl.row).id) }), "#ff6b6b");
      SFX.caught(); track("thief_stole", { row: sl.row }); saveState(); refreshChrome();
    }
    thief.fleeing = true;
  }
}

/* ---------- 이벤트 손님 — 원작 이벤트 일정(UTC)에 맞춰 컨베이어로 찾아오는 공짜 손님 ---------- */
function updateEvents(){
  for(const ev of DATA.events){
    const w = eventWindow(ev).cur;
    const on = w || (evDebug === ev.id ? { start: Math.floor(Date.now() / 20000) * 20000 } : null);
    if(!on || state.evClaim[ev.id] === on.start) continue;
    if(walkers.some(x => x.ev === ev.id)) continue;
    if(now - (evSpawnAt[ev.id] || -999) < CONFIG.eventGraceSec) continue;
    evSpawnAt[ev.id] = now;
    const r = eventPick(ev);
    walkers.push({ id: ++wid, row: ev.row, r, x: -layout().beltH * 0.5, born: now, ev: ev.id });
    pop(W / 2, layout().beltY + 18, T(ev.id === "dragon" ? "evDragon" : "evToto"), "#ffe27a"); SFX.warn();
  }
}
function eventLine(){
  let best = null;
  for(const ev of DATA.events){
    const { cur, next } = eventWindow(ev);
    if(cur) return T("evNow", { name: T("evName_" + ev.id) }) + " " + clock((cur.end - Date.now()) / 1000);
    if(!best || next < best.next) best = { ev, next };
  }
  return best ? T("evIn", { name: T("evName_" + best.ev.id), t: clock((best.next - Date.now()) / 1000) }) : "";
}
function clock(sec){ sec = Math.max(0, Math.floor(sec)); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0"); }

/* ---------- 갱신 ---------- */
function update(dt){
  const L = layout();
  beltScroll = (beltScroll + dt * (W + L.beltH) / CONFIG.walkSeconds) % 100000;
  spawnT += dt;
  if(spawnT >= CONFIG.spawnEvery){ spawnT = 0; const n = nextWalker(); addWalker(n.row, n.r); }
  for(const w of walkers) w.x += dt * (W + L.beltH) / CONFIG.walkSeconds;
  walkers = walkers.filter(w => w.x < W + L.beltH * 0.6);
  for(const f of flyers) if(now - f.t >= 0.55){
    if(!state.slots[f.slot]) addCreature(f.row, f.r, 0, f.slot);
    f.done = true; shake["pad" + f.slot] = now; SFX.land();
    if(f.r >= 3) burst(L.pads[f.slot].x, L.pads[f.slot].y - L.cellH * 0.4, RARITY_COLORS[f.r].color);
    announceBook();
  }
  if(flyers.some(f => f.done)){ flyers = flyers.filter(f => !f.done); saveState(); refreshChrome(); }
  updateThief(dt, L);
  secT += dt;
  if(secT >= 1){
    secT = 0; refreshChrome(); updateEvents();
    const ll = lockLeft(); if(lastLock > 0 && ll <= 0) pop(W / 2, L.beltY + 18, T("unlockedMsg"), "#ffd0d0"); lastLock = ll;
  }
  saveTimer += dt; if(saveTimer > 5){ saveTimer = 0; saveState(); }
  sparks = sparks.filter(s => now - s.t < 0.9);
}
function burst(x, y, color){ for(let k = 0; k < 14; k++) sparks.push({ x, y, a: Math.random() * 6.28, v: 60 + Math.random() * 120, color, t: now }); }

/* ---------- 그리기 ---------- */
function wobble(key, amp){ const t = shake[key]; if(t == null) return 0; const k = now - t; return k < 0.3 ? Math.sin(k * 50) * amp * (1 - k / 0.3) : 0; }
function drawBelt(L){
  const y = L.beltY, h = L.beltH, top = y + h * 0.5, bandH = h * 0.5;
  const im = spr("belt");
  ctx.fillStyle = "rgba(30,50,10,.28)"; rr(-10, top + 7, W + 20, bandH, 6); ctx.fill();
  if(im){
    const tw = bandH * im.width / im.height, off = beltScroll % tw;
    ctx.save(); rr(-6, top, W + 12, bandH, 6); ctx.clip();
    for(let x = -tw + off; x < W + tw; x += tw - 1) ctx.drawImage(im, x, top, tw, bandH);
    ctx.restore();
  } else { ctx.fillStyle = "#c8323a"; ctx.fillRect(0, top, W, bandH); }
}
function drawFloor(L){
  const x = 8, y = L.baseTop, w = W - 16, h = L.baseBot - L.baseTop, bw = wobble("base", 6);
  ctx.save(); ctx.translate(bw, 0);
  ctx.fillStyle = "rgba(30,50,10,.3)"; rr(x, y + 8, w, h, 22); ctx.fill();
  const skin = [0, 1, 4, 7, 9, 11].filter(l => state.task >= l).length - 1;
  const rim = ["#7a4a26", "#3f6f99", "#8a3f6f", "#4f7f2a", "#6a4a99", "#a8842a"][skin];
  ctx.fillStyle = rim; rr(x, y, w, h, 22); ctx.fill();
  ctx.save(); rr(x + 7, y + 7, w - 14, h - 14, 16); ctx.clip();
  const fl = spr("floor-wood");
  if(fl){ const ts = Math.max(160, w / 2.4); for(let py = y; py < y + h; py += ts) for(let px = x; px < x + w; px += ts) ctx.drawImage(fl, px, py, ts, ts); }
  else { ctx.fillStyle = "#d39a5b"; ctx.fillRect(x, y, w, h); }
  if(skin > 0){ ctx.globalCompositeOperation = "multiply"; ctx.fillStyle = ["#fff", "#9fd2ff", "#ffa6d6", "#c5ff8f", "#cdaaff", "#ffe48f"][skin]; ctx.fillRect(x, y, w, h); ctx.globalCompositeOperation = "source-over"; }
  ctx.fillStyle = "rgba(255,255,255,.14)"; ctx.fillRect(x, y + 7, w, 5);
  // 2층 구분선
  if(L.rows > 2){ const ly = L.gy + L.cellH * 2; ctx.fillStyle = "rgba(60,30,10,.35)"; ctx.fillRect(x, ly - 3, w, 6); ctx.fillStyle = "rgba(255,230,160,.25)"; ctx.fillRect(x, ly + 3, w, 2); }
  ctx.restore();
  const sw = 168;
  ctx.fillStyle = "#4a2a12"; rr(W / 2 - sw / 2, y - 12, sw, 32, 12); ctx.fill();
  ctx.fillStyle = "#ffcf3f"; rr(W / 2 - sw / 2 + 3, y - 9, sw - 6, 26, 10); ctx.fill();
  text(T("base"), W / 2, y + 4, 15, "#4a2a12");
  ctx.restore();
}
function drawPads(L){
  const bw = wobble("base", 6);
  L.pads.forEach((p, i) => {
    if(!p.vis) return;
    const sl = state.slots[i], px = p.x + bw + wobble("pad" + i, 3), open = state.open[i];
    const ped = spr(open ? "props/pedestal" : "props/pedestal-locked"), pw = Math.min(p.w * 0.94, p.h * 0.9);
    if(ped){ const ph = pw * ped.height / ped.width; ctx.drawImage(ped, px - pw / 2, p.y - ph * 0.62, pw, ph); }
    else { ctx.fillStyle = "#aab1c0"; ctx.beginPath(); ctx.ellipse(px, p.y, pw * 0.42, pw * 0.15, 0, 0, Math.PI * 2); ctx.fill(); }
    if(!open){
      const cost = unlockCost(i);
      text(ADS.ready() ? T("slotUnlockAd") : T("slotUnlockCash", { v: fmt(cost) }), px, p.y + pw * 0.2, 11, "#fff", { stroke: 3.5, strokeColor: "#1b1222" });
      return;
    }
    if(!sl){ return; }
    const rc = RARITY_COLORS[sl.r];
    const ch = Math.min(p.h * 0.62, p.w * 1.0);
    if(sl.row === LUCKY_ROW){
      const bx = spr("props/luckybox"), bs = ch * 0.8, hop = sl.t <= 0 ? Math.abs(Math.sin(now * 5)) * 10 : 0;
      drawAura(sl.r, px, p.y + 4, ch, now);
      if(bx) ctx.drawImage(bx, px - bs / 2, p.y - bs * 0.9 - hop, bs, bs * bx.height / bx.width);
      const lbl = sl.t > 0 ? T("boxWait", { s: Math.ceil(sl.t) }) : T("boxOpen");
      text(lbl, px, p.y + pw * 0.2, 13, sl.t > 0 ? "#fff" : "#ffe27a", { stroke: 4, strokeColor: "#1b1222" });
      rarityTag(sl.r, px, p.y - ch - 6, 11);
      return;
    }
    drawAura(sl.r, px, p.y + pw * 0.04, ch, now);
    drawCreature(rowOf(sl.row).id, px, p.y + pw * 0.04, ch, Math.sin(now * 3 + i) * 0.025);
    text("+" + fmt(incomeOf(sl.row, sl.r)), px, p.y + pw * 0.2, 11, "#fff", { stroke: 3.5, strokeColor: hexA(rc.color === "#1b1b1b" ? "#000000" : rc.outline, 1) });
    if(sl.r >= 1) ctx.fillStyle = rc.color === "#1b1b1b" ? "#ffffff" : rc.color, ctx.fillRect(px - pw * 0.3, p.y + pw * 0.27, pw * 0.6, 3);
    if(sl.pend >= 1){
      const by = p.y - ch - 8 + Math.sin(now * 4 + i) * 2, s = fmt(sl.pend * state.mult);
      ctx.font = `900 12px "ONE Mobile POP", sans-serif`;
      const bw2 = Math.max(40, ctx.measureText(s).width + 18), full = sl.pend >= CONFIG.slotCap;
      ctx.fillStyle = full ? "#ff8a3a" : "#ffd24a"; rr(px - bw2 / 2, by - 11, bw2, 22, 11); ctx.fill();
      ctx.strokeStyle = "#a8701a"; ctx.lineWidth = 2; ctx.stroke();
      text(s, px, by + 0.5, 12, "#5a3505");
    }
  });
}
function drawWalkers(L){
  const foot = L.beltY + L.beltH * 0.86, ch = L.beltH * 0.78;
  for(const w of walkers){
    const rc = RARITY_COLORS[w.r], price = priceOf(w.row, w.r), id = rowOf(w.row).id;
    const bob = Math.abs(Math.sin((now - w.born) * 7)) * ch * 0.05;
    shadow(w.x, foot, ch * 0.62);
    drawAura(w.r, w.x, foot - bob, ch, now);
    if(w.row === LUCKY_ROW){
      const bx = spr("props/luckybox"), bs = ch * 0.8; if(bx) ctx.drawImage(bx, w.x - bs / 2, foot - bob - bs * 0.95, bs, bs * bx.height / bx.width);
    } else drawCreature(id, w.x, foot - bob, ch, Math.sin((now - w.born) * 14) * 0.02);
    const nm = creatureName(id);
    rarityTag(w.r, w.x, L.beltY - L.beltH * 0.2, 11);
    text(nm, w.x, L.beltY - L.beltH * 0.06, 12, "#fff", { stroke: 4, strokeColor: "#1b1222" });
    text("+" + fmt(incomeOf(w.row, w.r)) + "/s", w.x, L.beltY + L.beltH * 0.08, 11, "#9bffa6", { stroke: 3.5, strokeColor: "#0e3a16" });
    const can = state.cash >= price, pw = 66, py = foot + 7;
    ctx.fillStyle = can ? "#2fbf4a" : "#5b5f6e"; rr(w.x - pw / 2, py, pw, 21, 10.5); ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 2; ctx.stroke();
    text(price ? fmt(price) : T("free"), w.x, py + 11, 13, "#fff", { stroke: 3, strokeColor: can ? "#17642a" : "#2c2e38" });
    if(w.ev){ ctx.fillStyle = "#ff3e96"; rr(w.x - 28, L.beltY - L.beltH * 0.42, 56, 17, 8); ctx.fill(); text("EVENT", w.x, L.beltY - L.beltH * 0.42 + 9, 11, "#fff"); }
    // 첫 구매 전 — 살 수 있는 놈 둘레가 숨 쉰다
    if(state.bought === 0 && can){ ctx.strokeStyle = `rgba(255,236,120,${0.5 + Math.sin(now * 6) * 0.4})`; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(w.x, foot - ch * 0.45, ch * 0.5, ch * 0.6, 0, 0, Math.PI * 2); ctx.stroke(); }
  }
}
function drawFlyers(L){
  for(const f of flyers){
    const k = Math.min(1, (now - f.t) / 0.55), e = k * k * (3 - 2 * k), p = L.pads[f.slot];
    const x = f.from.x + (p.x - f.from.x) * e, y = f.from.y + (p.y - f.from.y) * e - Math.sin(k * Math.PI) * L.beltH * 0.9;
    drawAura(f.r, x, y, L.beltH * 0.7, now);
    drawCreature(rowOf(f.row).id, x, y, L.beltH * 0.7, Math.sin(k * Math.PI) * -0.08);
  }
}
function drawThief(L){
  if(!thief) return;
  const h = L.cellH * 0.62, bob = Math.abs(Math.sin(thief.t * 10)) * 4, hit = now - thief.hitT < 0.15 ? 0.12 : 0;
  const u = thief.until, frozen = u.freeze > now, pinned = u.pin > now;
  shadow(thief.x, thief.y, h * 0.6, 0.35);
  if(thief.carry) drawCreature(thief.carry, thief.x + 10, thief.y - h * 0.7 - bob, h * 0.6);
  drawSprite("raid/thief", thief.x, thief.y - (frozen || pinned ? 0 : bob), h * (u.slow > now ? 0.72 : 1), hit, !thief.fleeing);
  if(frozen){ ctx.fillStyle = "rgba(150,220,255,.5)"; rr(thief.x - h * 0.4, thief.y - h, h * 0.8, h, 12); ctx.fill(); }
  if(pinned){ ctx.strokeStyle = "#cfd6e6"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(thief.x - 24, thief.y + 2); ctx.lineTo(thief.x + 24, thief.y + 2); ctx.stroke(); }
  if(u.stall > now) text("?", thief.x, thief.y - h - 8, 22, "#ffe27a", { stroke: 4, strokeColor: "#4a2a12" });
  if(!thief.fleeing){
    for(let k = 0; k < CONFIG.thief.hp; k++){
      ctx.fillStyle = k >= thief.hp ? "#5b5f6e" : "#ff4f4f";
      ctx.beginPath(); ctx.arc(thief.x - 21 + k * 14, thief.y - h - 14, 5, 0, Math.PI * 2); ctx.fill();
    }
    const by = L.baseTop + 48;
    ctx.fillStyle = `rgba(200,30,40,${0.8 + Math.sin(now * 10) * 0.15})`; rr(W / 2 - 110, by - 16, 220, 32, 16); ctx.fill();
    text(T("thiefCome"), W / 2, by, 16, "#fff", { stroke: 3, strokeColor: "#5a0a0a" });
  }
}
function drawLockFence(L){
  const ll = lockLeft(); if(ll <= 0) return;
  const x = 8, y = L.baseTop, w = W - 16, h = L.baseBot - L.baseTop;
  ctx.save(); ctx.strokeStyle = `rgba(120,220,255,${0.65 + Math.sin(now * 6) * 0.2})`; ctx.lineWidth = 6; ctx.setLineDash([14, 8]); ctx.lineDashOffset = -now * 40;
  rr(x + 2, y + 2, w - 4, h - 4, 22); ctx.stroke(); ctx.restore();
  ctx.fillStyle = "rgba(120,220,255,.1)"; rr(x, y, w, h, 22); ctx.fill();
  const lk = spr("ui/ico-lock");
  if(lk) ctx.drawImage(lk, W - 52, y + 14, 34, 34 * lk.height / lk.width);
  text(ll + "s", W - 35, y + 62, 15, "#bfeaff", { stroke: 4, strokeColor: "#0a2a44" });
}
function drawHud(L){
  const top = 8;
  ctx.fillStyle = "rgba(25,30,45,.55)"; rr(10, top, W - 20, L.hudH - 8, 18); ctx.fill();
  const av = spr("chichi"), ar = (L.hudH - 20) / 2;
  if(av){ ctx.save(); ctx.beginPath(); ctx.arc(14 + ar + 4, top + (L.hudH - 8) / 2, ar, 0, Math.PI * 2); ctx.clip();
    ctx.drawImage(av, 14 + 4, top + (L.hudH - 8) / 2 - ar, ar * 2, ar * 2); ctx.restore(); }
  const bump = now - cashBump < 0.2 ? 1 + (0.2 - (now - cashBump)) * 0.8 : 1;
  const cx = 14 + ar * 2 + 18, cy = top + (L.hudH - 8) / 2;
  ctx.save(); ctx.translate(cx + wobble("cash", 5), cy - 8); ctx.scale(bump, bump);
  text(fmt(state.cash), 0, 0, 26, "#ffd24a", { align: "left", stroke: 5, strokeColor: "#3a2306" });
  ctx.restore();
  text(T("perSec", { v: fmt(incomePerSec() * state.mult) }), cx, cy + 16, 13, "#bff7c4", { align: "left", stroke: 3, strokeColor: "#1b1222" });
  // 배율 · 환생 단계 — «초당» 글자 바로 오른쪽
  if(state.mult > 1 || state.task > 0){
    ctx.font = `900 13px "ONE Mobile POP", sans-serif`;
    let bx = cx + ctx.measureText(T("perSec", { v: fmt(incomePerSec() * state.mult) })).width + 10;
    const tag = (label, bg) => { ctx.font = `900 12px "ONE Mobile POP", sans-serif`; const w = ctx.measureText(label).width + 14; ctx.fillStyle = bg; rr(bx, cy + 7, w, 19, 9.5); ctx.fill(); text(label, bx + w / 2, cy + 16.5, 12, "#fff"); bx += w + 5; };
    if(state.mult > 1) tag("x" + state.mult, "#ff3e96");
    if(state.task > 0) tag(T("rbTitle", { n: state.task }), "#8a5cff");
  }
  // 이벤트 알림 줄
  const ev = eventLine();
  if(ev){
    ctx.font = `900 12px "ONE Mobile POP", sans-serif`;
    const ew = Math.min(W - 24, ctx.measureText(ev).width + 24);
    ctx.fillStyle = "rgba(25,30,45,.62)"; rr(W / 2 - ew / 2, L.hudH + 2, ew, 20, 10); ctx.fill();
    text(ev, W / 2, L.hudH + 12.5, 12, ev.indexOf(clock(0)) >= 0 ? "#ffe27a" : "#cfd6ff");
  }
}
function drawTutorial(L){
  let k = null;
  if(state.bought === 0) k = "tut1"; else if(state.tut < 2 && state.slots.some(sl => sl && sl.pend >= 1)) k = "tut2"; else if(state.tut < 3 && creatureCount() >= 2 && state.task === 0 && state.tut >= 2) k = "tut3";
  if(!k) return;
  const by = L.baseTop - 4;
  ctx.fillStyle = "rgba(25,30,45,.82)"; rr(16, by - 14, W - 32, 28, 14); ctx.fill();
  text(T(k), W / 2, by + 0.5, 14, "#fff");
  if(k === "tut3" && now % 20 < 0.1) state.tut = 3;
}
function drawPops(){
  for(const p of pops){
    const k = (now - p.t) / 1.3;
    ctx.globalAlpha = Math.max(0, 1 - k * k);
    text(p.text, p.x, p.y - k * 40, 16, p.color, { stroke: 4, strokeColor: "#1b1222" });
    ctx.globalAlpha = 1;
  }
  pops = pops.filter(p => now - p.t < 1.3);
  for(const s of sparks){
    const k = (now - s.t) / 0.9; ctx.globalAlpha = Math.max(0, 1 - k);
    ctx.fillStyle = s.color === "#1b1b1b" ? "#fff" : s.color; ctx.beginPath(); ctx.arc(s.x + Math.cos(s.a) * s.v * k, s.y + Math.sin(s.a) * s.v * k + 40 * k * k, 3.2, 0, 6.28); ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let last = performance.now();
function frame(t){
  const dt = Math.min(0.1, (t - last) / 1000); last = t; now += dt;
  if(mode !== "title") tickIncome(dt);   // 잠입 중에도 기지는 번다
  if(mode === "base"){
    update(dt);
    const L = layout();
    drawGrass(); drawBelt(L); drawFloor(L); drawPads(L); drawWalkers(L); drawFlyers(L); drawThief(L); drawLockFence(L); drawHud(L); drawTutorial(L); drawPops();
  } else if(mode === "raid"){ RAID.update(dt); RAID.draw(); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- 시작 ---------- */
function onReady(){
  refreshTitle();
  track("title_view", {});
  loadAssets();
  if(document.fonts) ['900 16px "ONE Mobile POP"', '400 13px "NEXON Lv1 Gothic"', '700 13px "NEXON Lv1 Gothic"'].forEach(f => document.fonts.load(f));
  if(/[?&]autostart/.test(location.search)) startGame();
}

// 촬영·QA 훅 — 규칙은 안 건드리고 들여다보기만 한다(qa/shoot.scenario.js 가 쓴다)
window.__bh = {
  get state(){ return state; }, set state(v){ state = v; },
  walkers: () => walkers, layout, started: () => mode !== "title", mode: () => mode,
  canvasPoint(x, y){ const r = cv.getBoundingClientRect(); return { clientX: r.left + x, clientY: r.top + y }; },
  spawnThief: () => spawnThief(layout()), thief: () => thief, raid: RAID, onRaidResult: (...a) => onRaidResult(...a), ui: { openShopSheet: () => openShopSheet(), openRebirthSheet: () => openRebirthSheet(), openFuseSheet: () => openFuseSheet(), openBookSheet: () => openBookSheet(), openRaidSheet: () => openRaidSheet() },
  addWalker, refresh: () => { refreshChrome(); }, rows: () => DATA.rows, tickIncome, econ: { doRebirth, rebirthTask, doFuse, addCreature, addItem, shopBuy, restockShop, lockBase },
};
