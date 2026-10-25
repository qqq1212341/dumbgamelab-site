"use strict";
/* 치치의 브레인롯 털이 — DOM 쪽: 하단 메뉴 · 아이템 줄 · 창(상점·환생·합성·도감·팔기·잠입 고르기·결과·자리 비운 동안).
   규칙은 econ.js 가 쥔다 — 여기는 부르고 보여 주기만 한다. */
const $ = (id) => document.getElementById(id);
function sheetOpen(){ return $("sheet").classList.contains("show"); }
function openSheet(html, wide = false){ const c = $("sheetBody"); c.innerHTML = html; c.classList.toggle("wide", wide); c.scrollTop = 0; $("sheet").classList.add("show"); }
function closeSheet(){ $("sheet").classList.remove("show"); refreshChrome(); }
const cimg = (row, cls = "") => `<img class="sh-img ${cls}" src="assets/creatures/${rowOf(row).id}.png" alt="">`;
const rchip = (r) => { const c = RARITY_COLORS[r]; return `<span class="chip" style="--c:${c.color === "#1b1b1b" ? "#444" : c.color}">${rarityName(r)}</span>`; };
const rframe = (r) => { const c = RARITY_COLORS[r]; return c.color === "#1b1b1b" ? "#2b2b2b" : c.color; };
function slotImg(row){ return row === LUCKY_ROW ? "assets/props/luckybox.png" : `assets/creatures/${rowOf(row).id}.png`; }
function tile(row, r, label, ok = true){
  return `<div class="tile${ok ? "" : " dim"}" style="--c:${rframe(r)}"><img src="${slotImg(row)}" alt=""><b>${label}</b></div>`;
}

/* ---------- 하단 메뉴 · 아이템 줄 · 털러 가기 버튼 ---------- */
function refreshChrome(){
  const base = mode === "base";
  const rb = $("raidBtn");
  if(rb){
    rb.classList.toggle("hide", !base);
    const need = CONFIG.raid.unlockBought - state.bought, wait = Math.ceil((state.raidReadyAt - Date.now()) / 1000);
    rb.disabled = need > 0 || wait > 0;
    $("raidSub").textContent = need > 0 ? T("raidLocked", { n: need }) : wait > 0 ? T("raidWait", { s: wait }) : "";
    $("raidSub").classList.toggle("hide", !$("raidSub").textContent);
  }
  $("dock").classList.toggle("hide", !base);
  if(!base){ refreshItemBar(); return; }
  const t = rebirthTask(), ll = lockLeft();
  $("dotRebirth").classList.toggle("hide", !(t && rebirthReady(t) && state.cash >= t.money));
  $("dotFuse").classList.toggle("hide", !DATA.fusion.some(canFuse));
  $("dotBook").classList.toggle("hide", !(state.book.length > (state.bookSeen || 0)));
  $("dotShop").classList.toggle("hide", !(state.shop.offers.some(o => o.stock > 0 && itemDef(o.id) && state.task >= itemDef(o.id).level && state.cash >= itemDef(o.id).price)));
  $("lbLock").textContent = ll > 0 ? T("locked", { s: ll }) : T("mLock");
  $("mLock").classList.toggle("on", ll > 0);
  refreshItemBar();
}
function refreshItemBar(){
  const bar = $("itemBar"); if(!bar) return;
  const raid = mode === "raid";
  const groups = {};
  for(const it of state.items){ const fx = ITEM_FX[it.id]; if(!fx) continue; if(raid ? fx.kind !== "raid" : fx.kind === "raid") continue; (groups[it.id] = groups[it.id] || []).push(it); }
  const ids = Object.keys(groups).map(Number);
  const show = ids.length && (mode === "base" || (raid && RAID.active));
  bar.classList.toggle("hide", !show);
  if(!show){ bar.innerHTML = ""; return; }
  bar.innerHTML = ids.map(id => `<button class="ib${armed === id ? " on" : ""}" data-item="${id}"><img src="assets/items/${id}.png" alt=""><i>${groups[id].length}</i><u style="width:${Math.round(100 * groups[id][0].dur / itemDef(id).uses)}%"></u></button>`).join("");
}
$("itemBar").addEventListener("click", e => {
  const b = e.target.closest("[data-item]"); if(!b) return;
  const id = +b.dataset.item, fx = ITEM_FX[id];
  if(mode === "raid"){ RAID.useItem(id); refreshItemBar(); return; }
  if(fx.kind === "base"){ if(useItem(id)){ if(lockBase()){ SFX.lock(); saveState(); } refreshChrome(); } return; }
  armed = armed === id ? 0 : id; SFX.zap(); pop(W / 2, layout().baseTop + 8, armed ? T("armed", { name: T("item_" + id) }) : "", "#cfe8ff"); refreshItemBar();
});

/* ---------- 눌러 확인 버튼 — 원작 «1초 꾹»(실수로 팔지 않게) ---------- */
let holdT = null;
document.addEventListener("pointerdown", e => {
  const b = e.target.closest("[data-hold]"); if(!b || b.disabled) return;
  b.classList.add("holding"); b.style.setProperty("--hold", CONFIG.sellHold + "s");
  clearTimeout(holdT); holdT = setTimeout(() => { b.classList.remove("holding"); b.dispatchEvent(new CustomEvent("holddone", { bubbles: true })); }, CONFIG.sellHold * 1000);
});
for(const ev of ["pointerup", "pointercancel", "pointerleave"]) document.addEventListener(ev, () => { clearTimeout(holdT); document.querySelectorAll(".holding").forEach(b => b.classList.remove("holding")); }, true);

/* ---------- 칸 창 ---------- */
function openInfoSheet(i){
  const sl = state.slots[i], r = rarityOf(sl.r), v = sellValue(sl);
  openSheet(`${cimg(sl.row)}<div class="sh-title">${creatureName(rowOf(sl.row).id)}</div>
    <div class="sh-row">${rchip(sl.r)}<span class="chip">${T("income", { v: fmt(incomeOf(sl.row, sl.r)) })}</span></div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button><button class="btn primary holdbtn" data-hold="sell" data-i="${i}"><span class="fill"></span><span class="lb">${T("holdSell", { v: fmt(v) })}</span></button></div>`);
}
function openUnlockSheet(i){
  const cost = unlockCost(i), ad = ADS.ready();
  openSheet(`<img class="sh-img sm" src="assets/props/pedestal-locked.png" alt=""><div class="sh-title">${T("slotLocked")}</div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button>
    ${ad ? `<button class="btn ad" data-act="unlock-ad" data-i="${i}">${T("slotUnlockAd")}</button>` : ""}
    <button class="btn primary" data-act="unlock-cash" data-i="${i}" ${state.cash < cost ? "disabled" : ""}>${T("slotUnlockCash", { v: fmt(cost) })}</button></div>`);
}
function doUnlock(i){ state.open[i] = true; SFX.open(); pop(W / 2, layout().baseTop + 8, T("slotUnlocked"), "#7dff8a"); track("slot_unlock", { i }); saveState(); closeSheet(); }

/* ---------- 상점 ---------- */
function openShopSheet(){
  if(Date.now() >= state.shop.next || !state.shop.offers.length) restockShop();
  const left = Math.max(0, Math.ceil((state.shop.next - Date.now()) / 1000)), ad = ADS.ready();
  const cards = DATA.items.map(([id]) => {
    const d = itemDef(id), o = state.shop.offers.find(x => x.id === id), locked = state.task < d.level;
    const st = o && o.stock > 0;
    return `<div class="shcard${locked ? " lock" : ""}${st ? "" : " none"}"><img src="assets/items/${id}.png" alt="">
      <b>${T("item_" + id)}</b><span class="d">${T("id_" + id)}</span><span class="n">${T("uses", { n: d.uses })}${ownedCount(id) ? " · " + T("shOwned") + " " + ownedCount(id) : ""}</span>
      ${locked ? `<em>${T("shLevel", { n: d.level })}</em>` : st ? `<button class="btn primary sm" data-act="buy" data-id="${id}" ${state.cash < d.price ? "disabled" : ""}>${fmt(d.price)} <small>${T("shStock", { n: o.stock })}</small></button>` : `<em>${T("shNone")}</em>`}</div>`;
  }).join("");
  openSheet(`<div class="sh-title">${T("shTitle")}</div><div class="sh-sub">${T("shRestock", { t: clock(left) })}</div>
    <div class="shgrid">${cards}</div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button>${ad ? `<button class="btn ad" data-act="restock-ad">${T("shRestockAd")}</button>` : ""}</div>`, true);
}

/* ---------- 환생 ---------- */
function openRebirthSheet(){
  const t = rebirthTask();
  if(!t){ openSheet(`<img class="sh-img sm" src="assets/ui/ico-rebirth.png" alt=""><div class="sh-title">${T("rbAll")}</div><div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`); return; }
  const prog = rebirthProgress(t), ok = rebirthReady(t), cash = state.cash >= t.money, ad = ADS.ready();
  const req = prog.map(p => tile(p.row, p.r, `${p.have}/${p.need}`, p.have >= p.need) ).join("");
  const rw = t.rw.map(([k, v]) => k === "mult" ? `<span class="chip big">${T("rbMult", { v })}</span>` : k === "cooldown" ? `<span class="chip big">${T("rbCool", { s: v })}</span>` : `<span class="chip big"><img class="mini" src="assets/items/${v}.png" alt=""> ${T("item_" + v)}</span>`).join("");
  const pct = Math.min(100, Math.floor(state.cash / t.money * 100));
  openSheet(`<img class="sh-img sm" src="assets/ui/ico-rebirth.png" alt=""><div class="sh-title">${T("rbTitle", { n: state.task + 1 })}</div>
    <div class="sh-sub">${T("rbNeed")}</div><div class="tiles">${req}</div>
    <div class="sh-sub">${T("rbMoney")}</div><div class="bar${cash ? " full" : ""}"><i style="width:${pct}%"></i><b>${fmt(state.cash)} / ${fmt(t.money)}</b></div>
    <div class="sh-sub">${T("rbReward")}</div><div class="sh-row">${rw}</div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button>
    ${ad ? `<button class="btn ad" data-act="rebirth-ad">${T("rbSkipAd")}</button>` : ""}
    <button class="btn primary" data-act="rebirth" ${ok && cash ? "" : "disabled"}>${ok ? (cash ? T("rbDo") : T("rbNeedCash")) : T("rbNeedMore")}</button></div>`, true);
}
function afterRebirth(){
  SFX.rebirth(); track("rebirth", { task: state.task }); saveState(); armed = 0;
  pop(W / 2, layout().baseTop + 8, T("rbDone"), "#ffe27a"); burst(W / 2, layout().baseTop + 80, "#ffe27a"); burst(W / 3, layout().baseTop + 120, "#ff3e96");
  closeSheet(); refreshChrome();
}

/* ---------- 합성 ---------- */
function openFuseSheet(msg = ""){
  const cards = DATA.fusion.map((f, k) => {
    const prog = fuseProgress(f), ok = canFuse(f), rid = rowOf(f.res[0]).id;
    return `<div class="fucard${ok ? " ready" : ""}"><div class="fures" style="--c:${rframe(f.res[1])}"><img src="assets/creatures/${rid}.png" alt=""><b>${creatureName(rid)}</b>${rchip(f.res[1])}<small>${T("income", { v: fmt(incomeOf(f.res[0], f.res[1])) })}</small></div>
      <div class="fuing">${prog.map(p => tile(p.row, p.r, T("fuHave", { a: p.have, b: p.need }), p.have >= p.need)).join("")}</div>
      <button class="btn primary sm" data-act="fuse" data-k="${k}" ${ok ? "" : "disabled"}>${T("fuDo")}</button></div>`;
  }).join("");
  openSheet(`<img class="sh-img sm" src="assets/ui/ico-fuse.png" alt=""><div class="sh-title">${T("fuTitle")}</div>${msg ? `<div class="sh-big sm">${msg}</div>` : ""}
    <div class="fugrid">${cards}</div><div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`, true);
}

/* ---------- 도감 ---------- */
let bookPage = 0;
function openBookSheet(p = bookPage){
  bookPage = p; state.bookSeen = state.book.length; saveState();
  const tabs = DATA.book.map((_, i) => `<button class="tab${i === p ? " on" : ""}${pageDone(i) ? " done" : ""}" data-act="book" data-p="${i}" style="--c:${rframe(i)}">${rarityName(i)}</button>`).join("");
  const rows = pageRows(p).map(row => { const got = pageHas(p, row), id = rowOf(row).id;
    return `<div class="bk${got ? "" : " unk"}" style="--c:${rframe(p)}"><img src="${slotImg(row)}" alt=""><b>${got ? creatureName(id) : "???"}</b></div>`; }).join("");
  openSheet(`<div class="sh-title">${T("bkTitle")} <small>${state.dex.length}/${dexTotal()}</small></div>
    <div class="tabs">${tabs}</div>
    <div class="sh-sub">${rarityName(p)} ${pageCount(p)}/${pageRows(p).length}${pageDone(p) ? " · " + T("bkDone") : ""}</div>
    <div class="bkgrid">${rows}</div><div class="sh-sub">${T("bkReward")} · ${T("bkWing", { n: state.book.length })}</div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`, true);
}

/* ---------- 털러 가기 · 결과 · 자리 비운 동안 ---------- */
function raidTargets(){
  let best = 0; for(const sl of state.slots) if(sl && sl.row !== LUCKY_ROW) best = Math.max(best, sl.r);
  return [0, 1, 2].map(tier => {
    let r = Math.min(6, best + tier), list = DATA.pool[r];
    while((!list || !list.length) && r > 0){ r--; list = DATA.pool[r]; }
    const cand = list.filter(row => row !== LUCKY_ROW && incomeOf(row, r) > 0);
    return { tier, row: cand[Math.floor(Math.random() * cand.length)], r };
  });
}
function openRaidSheet(){
  const free = freeSlotIdx(reservedSlots());
  const cards = raidTargets().map(t => `<button class="raid-card" data-act="raid" data-row="${t.row}" data-r="${t.r}" data-tier="${t.tier}" ${free < 0 ? "disabled" : ""}>
      ${cimg(t.row, "sm")}<span class="rc-name">${creatureName(rowOf(t.row).id)}</span>${rchip(t.r)}
      <span class="rc-inc">${T("income", { v: fmt(incomeOf(t.row, t.r)) })}</span><span class="rc-diff d${t.tier}">${T("diff" + t.tier)}</span></button>`).join("");
  openSheet(`<div class="sh-title">${T("raidTitle")}</div>${free < 0 ? `<div class="sh-warn">${T("raidNoSlot")}</div>` : ""}
    <div class="raid-cards">${cards}</div><div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`);
}
function startRaid(row, r, tier){
  const slot = freeSlotIdx(reservedSlots()); if(slot < 0) return;
  closeSheet(); mode = "raid"; thief = null; armed = 0; refreshChrome();
  RAID.start(row, r, tier, slot);
}
/* raid.js 가 판이 끝나면 부른다 */
function onRaidResult(win, row, r){
  const ad = !win && ADS.ready();
  openSheet(`<img class="sh-img" src="assets/raid/${win ? "chichi-cheer" : "chichi-shock"}.png" alt="">
    <div class="sh-title ${win ? "good" : "bad"}">${win ? T("got", { name: creatureName(rowOf(row).id) }) : T("caught")}</div>
    ${win ? cimg(row, "sm") + rchip(r) : ""}
    <div class="sh-btns">${ad ? `<button class="btn ad" data-act="retry">${T("retryAd")}</button>` : ""}<button class="btn primary" data-act="home">${T("back")}</button></div>`);
}
function showAway(v){
  const ad = ADS.ready();
  openSheet(`<img class="sh-img" src="assets/raid/chichi-cheer.png" alt="">
    <div class="sh-title">${T("away")}</div><div class="sh-big">+${fmt(v)}</div>
    <div class="sh-btns">${ad ? `<button class="btn ad" data-act="away2" data-v="${Math.floor(v)}">${T("claim2")}</button>` : ""}<button class="btn primary" data-act="close">${T("claim")}</button></div>`);
}

/* ---------- 클릭 처리 ---------- */
$("sheet").addEventListener("holddone", e => {
  const b = e.target.closest("[data-hold]"); if(!b) return;
  const i = +b.dataset.i, sl = state.slots[i]; if(!sl) return;
  const v = sellValue(sl);
  sellSlot(i); cashBump = now; SFX.coin(); track("sell", { row: sl.row, r: sl.r }); saveState(); closeSheet();
  const p = layout().pads[i]; pop(p.x, p.y - p.h * 0.5, "+" + fmt(v), "#7dff8a");
});
$("sheet").addEventListener("click", async e => {
  const b = e.target.closest("[data-act]"); if(!b || b.disabled) return;
  const act = b.dataset.act;
  if(act === "close") closeSheet();
  if(act === "raid") startRaid(+b.dataset.row, +b.dataset.r, +b.dataset.tier);
  if(act === "home"){ closeSheet(); RAID.end(); mode = "base"; refreshChrome(); await ADS.afterRaid(); }
  if(act === "retry"){ b.disabled = true; if(await ADS.rewarded("raid_retry")){ closeSheet(); RAID.retry(); } else b.disabled = false; }
  if(act === "away2"){ b.disabled = true; if(await ADS.rewarded("offline_x2")){ state.cash += +b.dataset.v; cashBump = now; SFX.coin(); saveState(); closeSheet(); } else b.disabled = false; }
  if(act === "unlock-cash"){ const i = +b.dataset.i, c = unlockCost(i); if(state.cash >= c){ state.cash -= c; doUnlock(i); } }
  if(act === "unlock-ad"){ b.disabled = true; if(await ADS.rewarded("slot_unlock")) doUnlock(+b.dataset.i); else b.disabled = false; }
  if(act === "buy"){
    const id = +b.dataset.id, res = shopBuy(id);
    if(res === "ok"){ SFX.buy(); track("item_buy", { id }); saveState(); refreshChrome(); const sc = $("sheetBody").scrollTop; openShopSheet(); $("sheetBody").scrollTop = sc; }
    else { SFX.deny(); }
  }
  if(act === "restock-ad"){ b.disabled = true; if(await ADS.rewarded("shop_restock")){ restockShop(); saveState(); openShopSheet(); } else b.disabled = false; }
  if(act === "rebirth"){ if(doRebirth()) afterRebirth(); }
  if(act === "rebirth-ad"){ b.disabled = true; if(await ADS.rewarded("rebirth_skip")){ doRebirth(true); afterRebirth(); } else b.disabled = false; }
  if(act === "fuse"){
    const f = DATA.fusion[+b.dataset.k], res = doFuse(f);
    if(res >= 0){ SFX.fuse(); track("fuse", { row: f.res[0] }); saveState(); refreshChrome(); announceBook(); openFuseSheet(T("fuDone", { name: creatureName(rowOf(f.res[0]).id) })); }
    else SFX.deny();
  }
  if(act === "book") openBookSheet(+b.dataset.p);
});
$("raidBtn").onclick = () => { if(mode === "base" && !sheetOpen()) openRaidSheet(); };
$("mShop").onclick = () => { if(!sheetOpen()) openShopSheet(); };
$("mRebirth").onclick = () => { if(!sheetOpen()) openRebirthSheet(); };
$("mFuse").onclick = () => { if(!sheetOpen()) openFuseSheet(); };
$("mBook").onclick = () => { if(!sheetOpen()) openBookSheet(); };
$("mCollect").onclick = () => { if(!sheetOpen()) collectAllNow(); };
$("mLock").onclick = () => {
  if(sheetOpen()) return;
  if(lockBase()){ SFX.lock(); pop(W / 2, layout().baseTop + 8, T("lockedMsg"), "#9fe8ff"); track("base_lock", {}); saveState(); refreshChrome(); }
  else { SFX.deny(); }
};

/* ---------- 타이틀 ---------- */
function refreshTitle(){
  $("titleMain").innerHTML = T("title");
  $("startBtn").textContent = T("start");
  $("resetBtn").textContent = T("reset");
  $("raidLabel").textContent = T("raidBtn");
  $("soundBtn").textContent = `${T("sound")} ${state.muted ? T("off") : T("on")}`;
  $("titleStats").textContent = state.bought ? T("stats", { n: creatureCount(), d: state.dex.length, t: dexTotal() }) : "";
  for(const [id, k] of [["lbShop", "mShop"], ["lbRebirth", "mRebirth"], ["lbFuse", "mFuse"], ["lbBook", "mBook"], ["lbCollect", "mCollect"]]) $(id).textContent = T(k);
  $("lbLock").textContent = T("mLock");
}
$("startBtn").onclick = startGame;
$("resetBtn").onclick = () => { if(confirm(T("resetAsk"))){ state = newState(); saveState(); refreshTitle(); } };
$("soundBtn").onclick = () => { state.muted = !state.muted; window.DGL_AUDIO && window.DGL_AUDIO.setOverride(state.muted); saveState(); refreshTitle(); };
document.addEventListener("visibilitychange", () => {
  if(document.hidden) saveState();
  else if(mode !== "title"){ const v = settleOffline(); saveState(); if(v >= 1 && mode === "base" && !sheetOpen()) showAway(v); }
});
onReady();
