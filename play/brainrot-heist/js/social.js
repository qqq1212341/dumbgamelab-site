"use strict";
/* 멀티·스킨·이벤트의 창 — 규칙은 net.js(서버)·skins.js·event.js, 여기는 보여 주고 누르면 부른다.
 * 털러 가기: 진짜 기지(서버) → 기지 보기(칸 하나 고르기) → 잠입 → 서버가 허락하면 내 칸에 든다. 서버가 없으면 연습 기지(가짜)로 폴백. */
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const tierFor = (r) => r >= 4 ? 2 : r >= 2 ? 1 : 0;
let raidList = [], raidReq = 0;

/* ---------- 털러 가기: 기지 고르기 ---------- */
function practiceTargets(){
  let best = 0; for(const sl of state.slots) if(sl && sl.row !== LUCKY_ROW) best = Math.max(best, sl.r);
  return [0, 1, 2].map(tier => {
    let r = Math.min(6, best + tier), list = DATA.pool[r];
    while((!list || !list.length) && r > 0){ r--; list = DATA.pool[r]; }
    const cand = list.filter(row => row !== LUCKY_ROW && incomeOf(row, r) > 0);
    return { tier, row: cand[Math.floor(Math.random() * cand.length)], r };
  });
}
function bestOf(slots){
  let b = null;
  slots.forEach((c, i) => { if(c && c[0] !== LUCKY_ROW){ const v = incomeOf(c[0], c[1]); if(!b || v > b.v) b = { row: c[0], r: c[1], v, i }; } });
  return b;
}
const practiceCard = (t, free) => `<button class="raid-card" data-act="raid" data-row="${t.row}" data-r="${t.r}" data-tier="${t.tier}" ${free < 0 ? "disabled" : ""}>
    ${cimg(t.row, "sm")}<span class="rc-name">${creatureName(rowOf(t.row).id)}</span>${rchip(t.r)}
    <span class="rc-inc">${T("income", { v: fmt(incomeOf(t.row, t.r)) })}</span><span class="rc-diff d${t.tier}">${T("diff" + t.tier)}</span><i class="rc-tag">${T("raidPractice")}</i></button>`;
const realCard = (b, i, free) => {
  const best = bestOf(b.slots), n = b.slots.filter(c => c && c[0] !== LUCKY_ROW).length;
  return `<button class="raid-card real" data-act="base-view" data-i="${i}" ${free < 0 || !best ? "disabled" : ""}>
    ${best ? cimg(best.row, "sm") : ""}<span class="rc-name">${esc(b.nick)}</span>${best ? rchip(best.r) : ""}
    <span class="rc-inc">${T("raidPower", { v: fmt(b.power) })}</span><span class="rc-inc">${T("raidCount", { n })}</span><i class="rc-tag live">${T("raidReal")}</i></button>`;
};
async function openRaidSheet(){
  const my = ++raidReq, free = freeSlotIdx(reservedSlots());
  const shell = (cards, sub = "") => `<div class="sh-title">${T("raidTitle")}</div>${free < 0 ? `<div class="sh-warn">${T("raidNoSlot")}</div>` : ""}${sub ? `<div class="sh-sub">${sub}</div>` : ""}
    <div class="raid-cards">${cards}</div><div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`;
  const prac = practiceTargets();
  if(!NET.enabled){ openSheet(shell(prac.map(t => practiceCard(t, free)).join("")), false, "raid"); return; }
  openSheet(shell("", T("raidSearching")), false, "raid");
  raidList = await NET.targets();
  if(my !== raidReq || $("sheetBody").dataset.k !== "raid") return;
  const cards = raidList.map((b, i) => realCard(b, i, free)).concat(prac.slice(0, Math.max(0, 3 - raidList.length)).map(t => practiceCard(t, free)));
  openSheet(shell(cards.join("")), false, "raid");
}

/* ---------- 남의 기지 보기 — 훔칠 칸 고르기 ---------- */
let viewBase = null, viewRevenge = false;
function openBaseView(b, revenge = false){
  viewBase = b; viewRevenge = revenge;
  const locked = b.lockLeft > 0, shield = b.shieldLeft > 0, n = b.task >= CONFIG.floor2Task ? SLOT_N : CONFIG.slotsPerFloor;
  const cells = b.slots.slice(0, n).map((c, i) => {
    if(!c) return `<div class="bv empty"><b>${T("bvEmpty")}</b></div>`;
    const [row, r] = c, box = row === LUCKY_ROW, ok = !locked && !shield && !box;
    return `<button class="bv${ok ? "" : " off"}" style="--c:${rframe(r)}" data-act="steal-cell" data-slot="${i}" ${ok ? "" : "disabled"}>
      <img src="${slotImg(row, r)}" alt=""><b>${box ? T("bvBox") : "+" + fmt(incomeOf(row, r))}</b></button>`;   // 이름은 길어 줄이 꺾인다 — 칸에는 그림(테두리색 = 희귀도)과 초당 수입만
  }).join("");
  const warn = locked ? T("bvLocked", { s: b.lockLeft }) : shield ? T("bvShield") : "";
  openSheet(`<div class="sh-title">${T("bvTitle", { nick: esc(b.nick) })}</div>
    ${warn ? `<div class="sh-warn lockwarn"><img class="mini" src="assets/ui/ico-lock.png" alt=""> ${warn}</div>` : `<div class="sh-sub">${T("bvPick")}</div>`}
    <div class="bvgrid">${cells}</div>
    <div class="sh-btns"><button class="btn" data-act="${revenge ? "close" : "raid-back"}">${revenge ? T("close") : T("bvOther")}</button></div>`, true, "base");
}
function startRealRaid(slot){
  const b = viewBase; if(!b) return;
  const c = b.slots[slot]; if(!c) return;
  const tier = Math.max(0, tierFor(c[1]) - (viewRevenge ? 1 : 0));
  startRaid(c[0], c[1], tier, { pid: b.pid, nick: b.nick, slot });
}
function startRaid(row, r, tier, meta){
  const slot = freeSlotIdx(reservedSlots()); if(slot < 0) return;
  closeSheet(); mode = "raid"; thief = null; armed = 0; refreshChrome();
  RAID.start(row, r, tier, slot, meta || null);
}

/* ---------- 잠입이 끝났다 — 진짜 기지면 서버가 허락해야 가진다 ---------- */
async function onRaidResult(win, row, r, meta, slot){
  const ad = !win && ADS.ready();
  if(win && meta){
    openSheet(`<img class="sh-img" src="assets/raid/chichi-cheer.png" alt=""><div class="sh-title">${T("stealChecking")}</div>`, false, "check");
    const res = await NET.steal(meta.pid, meta.slot);
    if(res.ok){
      const i = state.slots[slot] ? freeSlotIdx(reservedSlots()) : slot;
      if(i >= 0) addCreature(row, r, 0, i); else state.cash += Math.floor(priceOf(row, r) * CONFIG.sellGet);
      state.raidWins++; track("steal_real", { row, r }); saveState(); announceBook(); NET.sync(); refreshChrome();
      openSheet(`<img class="sh-img" src="assets/raid/chichi-cheer.png" alt=""><div class="sh-title good">${T("got", { name: creatureName(rowOf(row).id) })}</div>
        ${cimg(row, "sm")}${rchip(r)}<div class="sh-sub">${T("stealBack", { nick: esc(meta.nick), m: Math.round((res.backMs || 900000) / 60000) })}</div>
        <div class="sh-btns"><button class="btn primary" data-act="home">${T("back")}</button></div>`);
    } else {
      const k = { locked: "stealLocked", shield: "stealShield", cool: "stealCool", empty: "stealEmpty", "daily limit": "stealLimit", gone: "stealGone" }[res.error] || "stealNet";
      track("steal_fail", { why: res.error || "net" });
      openSheet(`<img class="sh-img" src="assets/raid/chichi-shock.png" alt=""><div class="sh-title bad">${T(k)}</div>
        <div class="sh-btns"><button class="btn primary" data-act="home">${T("back")}</button></div>`);
    }
    return;
  }
  openSheet(`<img class="sh-img" src="assets/raid/${win ? "chichi-cheer" : "chichi-shock"}.png" alt="">
    <div class="sh-title ${win ? "good" : "bad"}">${win ? T("got", { name: creatureName(rowOf(row).id) }) : T("caught")}</div>
    ${win ? cimg(row, "sm") + rchip(r) : ""}
    <div class="sh-btns">${ad ? `<button class="btn ad" data-act="retry">${T("retryAd")}</button>` : ""}<button class="btn primary" data-act="home">${T("back")}</button></div>`);
}

/* ---------- 털렸다는 알림 · 복수 ---------- */
function pollInbox(){ if(state.inbox.length && mode === "base" && !sheetOpen()) openTheftSheet(); }
function minLeft(at){ return Math.max(0, Math.ceil((at - Date.now()) / 60000)); }
function openTheftSheet(){
  const list = state.inbox.slice(0, 4), more = state.inbox.length - list.length;
  const rows = list.map(m => `<div class="theft"><img src="${slotImg(m.row, m.r)}" alt=""><div><b>${T("theftLine", { nick: esc(m.nick), name: creatureName(rowOf(m.row).id) })}</b>
    <small>${m.at > Date.now() ? T("comesBack", { m: minLeft(m.at) }) : T("backDone")}</small></div></div>`).join("");
  openSheet(`<img class="sh-img" src="assets/raid/chichi-shock.png" alt=""><div class="sh-title bad">${T("theftTitle")}</div><div class="theftlist">${rows}</div>${more > 0 ? `<div class="sh-sub">+${more}</div>` : ""}
    <div class="sh-btns"><button class="btn" data-act="inbox-close">${T("gotIt")}</button><button class="btn primary" data-act="revenge" data-pid="${list[0].pid}">${T("revenge")}</button></div>`, false, "theft");
  SFX.caught();
}

/* ---------- 내 기지 (닉네임 · 기록) ---------- */
function openMeSheet(msg = ""){
  const log = state.log.slice(0, 5).map(l => { const m = Math.max(1, Math.round((Date.now() - l.ts) / 60000)); return `<div class="theft sm"><img src="${slotImg(l.row, l.r)}" alt=""><div><b>${esc(l.nick)}</b> <small>${creatureName(rowOf(l.row).id)} · ${m >= 90 ? T("agoH", { h: Math.round(m / 60) }) : T("ago", { m })}</small></div></div>`; }).join("");
  openSheet(`<div class="sh-title">${T("meTitle")}</div>
    <div class="sh-sub ${NET.online ? "on" : ""}">${NET.enabled ? T(NET.online ? "netOn" : "netOff") : T("netOff")}</div>
    <label class="nick"><span>${T("nickLabel")}</span><input id="nickIn" maxlength="${CONFIG.net.maxNick}" value="${esc(NET.myNick())}" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"><button class="btn primary sm" data-act="nick-save">${T("nickSave")}</button></label>
    <div class="sh-sub">${msg || T("nickHint")}</div>
    <div class="sh-row"><span class="chip">${T("robbed", { n: state.stolenFrom })}</span><span class="chip">${T("stoleCount", { n: state.raidWins })}</span></div>
    <div class="sh-sub">${T("logTitle")}</div>${log || `<div class="sh-sub">${T("logNone")}</div>`}
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`, true, "me");
}

/* ---------- 꾸미기 ---------- */
let skinTab = "base";
function openSkinSheet(tab = skinTab){
  skinTab = tab; SKINS.sync(); state.skin.seen = state.skin.own.length; saveState();
  const kind = tab, list = kind === "base" ? SKINS.BASE : SKINS.CR, cur = state.skin[kind === "base" ? "base" : "cr"], ad = ADS.ready();
  const cards = list.map(s => {
    const has = SKINS.owned(kind, s.id), on = cur === s.id, u = s.unlock;
    const prev = kind === "base" ? `<div class="skprev" style="background-image:url(assets/${s.tex}.jpg)">${s.tint ? `<i style="background:${s.tint};mix-blend-mode:${s.mode || "multiply"}"></i>` : ""}</div>`
      : s.id ? `<div class="skprev cr"><img src="assets/skins/${s.id}.png" alt=""></div>` : `<div class="skprev cr none">${T("skNone")}</div>`;
    let act;
    if(on) act = `<span class="skon">${T("skUsing")}</span>`;
    else if(has) act = `<button class="btn primary sm" data-act="skin-eq" data-k="${kind}" data-id="${s.id}">${T("skUse")}</button>`;
    else if(u.t === "cash") act = `<button class="btn primary sm" data-act="skin-buy" data-k="${kind}" data-id="${s.id}" ${state.cash < u.v ? "disabled" : ""}>${T("skBuy", { v: fmt(u.v) })}</button>${ad ? `<button class="btn ad sm" data-act="skin-ad" data-k="${kind}" data-id="${s.id}">${T("skAd")}</button>` : ""}`;
    else if(u.t === "event" && !HW.on()) act = `<em>${T("skReq_over")}</em>`;
    else act = `<em>${T("skReq_" + u.t, { n: u.n })}</em>${ad && u.t !== "event" ? `<button class="btn ad sm" data-act="skin-ad" data-k="${kind}" data-id="${s.id}">${T("skAd")}</button>` : ""}`;
    return `<div class="skcard${on ? " on" : ""}${has ? "" : " lock"}">${prev}<b>${T((kind === "base" ? "sk_" : "cr_") + s.id)}</b>${act}</div>`;
  }).join("");
  openSheet(`<div class="sh-title">${T("skTitle")}</div>
    <div class="tabs"><button class="tab${kind === "base" ? " on" : ""}" data-act="skin-tab" data-k="base">${T("skBase")}</button><button class="tab${kind === "cr" ? " on" : ""}" data-act="skin-tab" data-k="cr">${T("skCr")}</button></div>
    <div class="skgrid">${cards}</div><div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button></div>`, true, "skin");
}

/* ---------- 상자 기다리는 시간 건너뛰기(원작 유료 자리 = 광고) ---------- */
function openBoxSkipSheet(i){
  const sl = state.slots[i]; if(!sl) return;
  openSheet(`<img class="sh-img sm" src="${slotImg(LUCKY_ROW, sl.r)}" alt=""><div class="sh-title">${T("boxSkipTitle")}</div><div class="sh-sub">${T("boxSkipAsk", { s: Math.ceil(sl.t) })}</div>
    <div class="sh-btns"><button class="btn" data-act="close">${T("close")}</button><button class="btn ad" data-act="box-skip" data-i="${i}">${T("boxSkipAd")}</button></div>`, false, "boxskip");
}

/* ---------- 눌렀을 때 ---------- */
$("sheet").addEventListener("click", async e => {
  const b = e.target.closest("[data-act]"); if(!b || b.disabled) return;
  const act = b.dataset.act;
  if(act === "base-view" && raidList[+b.dataset.i]) openBaseView(raidList[+b.dataset.i]);
  if(act === "raid-back") openRaidSheet();
  if(act === "steal-cell") startRealRaid(+b.dataset.slot);
  if(act === "inbox-close"){ state.inbox = []; saveState(); closeSheet(); }
  if(act === "revenge"){
    const pid = b.dataset.pid; state.inbox = []; saveState();
    b.disabled = true; const base = await NET.baseOf(pid);
    if(base) openBaseView(base, true); else openSheet(`<div class="sh-title bad">${T("stealGone")}</div><div class="sh-btns"><button class="btn primary" data-act="close">${T("close")}</button></div>`);
  }
  if(act === "nick-save"){
    const v = $("nickIn").value.trim(); b.disabled = true;
    const before = state.nick; const got = await NET.setNick(v);
    if(NET.enabled && got === v || !NET.enabled) openMeSheet(); else { openMeSheet(T("nickBad")); if(!before) state.nick = ""; }
  }
  if(act === "skin-tab") openSkinSheet(b.dataset.k);
  if(act === "skin-eq"){ SKINS.equip(b.dataset.k, b.dataset.id); NET.sync(); openSkinSheet(); }
  if(act === "skin-buy"){ if(SKINS.buy(b.dataset.k, b.dataset.id)){ SKINS.equip(b.dataset.k, b.dataset.id); SFX.buy(); track("skin_buy", { id: b.dataset.id }); cashBump = now; NET.sync(); openSkinSheet(); } else SFX.deny(); }
  if(act === "skin-ad"){ b.disabled = true; if(await ADS.rewarded("skin_unlock")){ SKINS.grant(b.dataset.k, b.dataset.id); SKINS.equip(b.dataset.k, b.dataset.id); SFX.buy(); NET.sync(); openSkinSheet(); } else b.disabled = false; }
  if(act === "box-skip"){ b.disabled = true; if(await ADS.rewarded("box_skip")){ const sl = state.slots[+b.dataset.i]; if(sl) sl.t = 0; saveState(); closeSheet(); } else b.disabled = false; }
});
$("skinBtn").onclick = () => { if(mode === "base" && !sheetOpen()) openSkinSheet(); };
$("meBtn").onclick = () => { if(mode === "base" && !sheetOpen()) openMeSheet(); };

/* 틀 가장자리의 둥근 버튼 둘 — 꾸미기(왼쪽) · 내 기지(오른쪽). 초반(구매 3번 전)엔 숨겨 화면을 비워 둔다 */
function placeFabs(){
  const show = mode === "base" && state.bought >= 3, L = layout();
  for(const id of ["skinBtn", "meBtn"]){ const el = $(id); el.classList.toggle("hide", !show); if(show) el.style.top = `calc(${Math.round(L.baseTop - 24)}px + env(safe-area-inset-top,0px))`; }
}
window.addEventListener("resize", placeFabs);
