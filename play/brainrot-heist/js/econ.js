"use strict";
function rarityOf(r) {
  return RARITY_COLORS[r] || RARITY_COLORS[0];
}
function rarityName(r) {
  return T("rarity_" + rarityOf(r).id);
}
function rowOf(row) {
  return ROW_BY_ROW[row];
}
function priceOf(row, r) {
  return rowOf(row).price[r] || 0;
}
function incomeOf(row, r) {
  return rowOf(row).income[r] || 0;
}
function creatureName(id) {
  return T(id);
}
const rk = (row, r) => row + "_" + r;
function floor2On() {
  return state.task >= CONFIG.floor2Task;
}
function visibleSlots() {
  const n = floor2On() ? SLOT_N : CONFIG.slotsPerFloor;
  return Array.from({ length: n }, (_, i) => i);
}
function usableSlot(i) {
  return state.open[i] && (i < CONFIG.slotsPerFloor || floor2On());
}
function freeSlotIdx(reserved = []) {
  for (let i = 0; i < SLOT_N; i++) if (usableSlot(i) && !state.slots[i] && !reserved.includes(i)) return i;
  return -1;
}
function unlockCost(i) {
  const n = Math.max(1, i - CONFIG.slotsPerFloor + 1);
  return n * CONFIG.unlockCostMult;
}
function creatureCount() {
  return state.slots.filter(Boolean).length;
}
function incomePerSec() {
  let s = 0;
  for (const sl of state.slots) if (sl && sl.row !== LUCKY_ROW) s += incomeOf(sl.row, sl.r);
  return s;
}
function addCreature(row, r, pend = 0, i = freeSlotIdx()) {
  var _a;
  if (i < 0) return -1;
  const sl = { row, r, pend };
  if (row === LUCKY_ROW) sl.t = (_a = LUCKY_TIME[r]) != null ? _a : 30;
  state.slots[i] = sl;
  discover(row, r);
  return i;
}
function removeCreature(i) {
  const sl = state.slots[i];
  state.slots[i] = null;
  return sl;
}
function tickIncome(dt) {
  for (const sl of state.slots) {
    if (!sl) continue;
    if (sl.row === LUCKY_ROW) {
      if (sl.t > 0) sl.t = Math.max(0, sl.t - dt);
      continue;
    }
    sl.pend = Math.min(CONFIG.slotCap, sl.pend + incomeOf(sl.row, sl.r) * dt);
  }
}
function collectSlot(i) {
  const sl = state.slots[i];
  if (!sl || sl.pend < 1) return 0;
  const got = Math.floor(sl.pend) * state.mult;
  sl.pend -= Math.floor(sl.pend);
  state.cash += got;
  return got;
}
function collectAll() {
  let t = 0;
  for (let i = 0; i < SLOT_N; i++) t += collectSlot(i);
  return t;
}
function sellValue(sl) {
  return Math.floor(sl.pend) + Math.floor(priceOf(sl.row, sl.r) * CONFIG.sellGet);
}
function sellSlot(i) {
  const sl = state.slots[i];
  if (!sl) return 0;
  const v = sellValue(sl);
  state.cash += v;
  state.slots[i] = null;
  return v;
}
function settleOffline() {
  const sec = Math.max(0, (Date.now() - (state.lastSeen || Date.now())) / 1e3);
  if (sec < 30) return 0;
  let got = 0;
  for (const sl of state.slots) {
    if (!sl) continue;
    if (sl.row === LUCKY_ROW) {
      sl.t = Math.max(0, sl.t - sec);
      continue;
    }
    const v = Math.min(CONFIG.slotCap - sl.pend, incomeOf(sl.row, sl.r) * sec);
    sl.pend += v;
    got += v;
  }
  return got * state.mult;
}
function weighted(rates) {
  let total = 0;
  for (const k in rates) total += rates[k];
  let x = Math.random() * total;
  for (const k in rates) {
    x -= rates[k];
    if (x < 0) return +k;
  }
  return +Object.keys(rates)[0];
}
function pickSpawn() {
  const rates = Object.fromEntries(DATA.rates.map((v, i) => [i, v]));
  const r = weighted(rates), list = DATA.pool[r] || DATA.pool[0];
  return { row: list[Math.floor(Math.random() * list.length)], r };
}
function rollLucky(boxR) {
  const t = DATA.lucky[DATA.boxTables[boxR] || "common"];
  const r = weighted(t.rates), list = t.pool[r];
  if (!list || !list.length) return { row: 0, r: 0 };
  return { row: list[Math.floor(Math.random() * list.length)], r };
}
function openBox(i) {
  const sl = state.slots[i];
  if (!sl || sl.row !== LUCKY_ROW || sl.t > 0) return null;
  const got = rollLucky(sl.r);
  state.slots[i] = null;
  addCreature(got.row, got.r, 0, i);
  return got;
}
function discover(row, r) {
  const k = rk(row, r);
  if (!state.dex.includes(k)) {
    state.dex.push(k);
    checkBook();
    return true;
  }
  return false;
}
function bookPages() {
  return DATA.book.length + (HW.on() || state.dex.some((k) => /_7$/.test(k)) ? 1 : 0);
}
function pageRows(p) {
  return p >= DATA.book.length ? DATA.eventBook : DATA.book[p] || [];
}
function pageHas(p, row) {
  return state.dex.includes(rk(row, p));
}
function pageCount(p) {
  return pageRows(p).filter((row) => pageHas(p, row)).length;
}
function pageDone(p) {
  return pageRows(p).length > 0 && pageCount(p) >= pageRows(p).length;
}
function checkBook() {
  for (let p = 0; p < bookPages(); p++) if (pageDone(p) && !state.book.includes(p)) {
    state.book.push(p);
    window.__bookNew = p;
  }
}
function dexTotal() {
  let n = 0;
  for (let p = 0; p < bookPages(); p++) n += pageRows(p).length;
  return n;
}
function rebirthTask() {
  return DATA.rebirth[state.task] || null;
}
function baseCount(row, r) {
  let n = 0;
  for (const sl of state.slots) if (sl && sl.row === row && (r < 0 || sl.r === r)) n++;
  return n;
}
function rebirthProgress(t) {
  return t.req.map(([row, r, n]) => ({ row, r, need: n, have: Math.min(n, baseCount(row, r)) }));
}
function rebirthReady(t) {
  return rebirthProgress(t).every((p) => p.have >= p.need);
}
function giveRewards(t) {
  for (const [kind, v] of t.rw) {
    if (kind === "mult") state.mult = v;
    else if (kind === "cooldown") state.cool = v;
    else if (kind === "item") addItem(v);
  }
}
function doRebirth(skipAd = false) {
  const t = rebirthTask();
  if (!t) return false;
  if (!skipAd && !(rebirthReady(t) && state.cash >= t.money)) return false;
  giveRewards(t);
  state.task++;
  state.cash = 0;
  return true;
}
function fuseProgress(f) {
  const need = {};
  for (const [row, r, n] of f.ing) {
    const k = rk(row, r);
    need[k] = (need[k] || 0) + n;
  }
  return f.ing.map(([row, r, n]) => ({ row, r, need: n, have: Math.min(baseCount(row, r), need[rk(row, r)]) }));
}
function canFuse(f) {
  return fuseProgress(f).every((p) => p.have >= p.need);
}
function doFuse(f) {
  if (!canFuse(f)) return -2;
  const used = [];
  for (const [row, r, n] of f.ing) for (let k = 0; k < n; k++) {
    const idx = state.slots.findIndex((sl, i) => sl && sl.row === row && sl.r === r && !used.includes(i));
    if (idx < 0) return -2;
    used.push(idx);
  }
  let pend = 0;
  for (const i of used) {
    pend += state.slots[i].pend || 0;
    state.slots[i] = null;
  }
  state.cash += Math.floor(pend) * state.mult;
  return addCreature(f.res[0], f.res[1], 0, used[0]);
}
function itemDef(id) {
  const a = DATA.items.find((x) => x[0] === id);
  return a ? { id: a[0], key: a[1], price: a[2], chance: a[3], maxStock: a[4], level: a[5], uses: a[6] } : null;
}
function addItem(id) {
  const d = itemDef(id);
  if (!d) return false;
  state.items.push({ id, dur: d.uses });
  return true;
}
function ownedCount(id) {
  return state.items.filter((x) => x.id === id).length;
}
function useItem(id) {
  const k = state.items.findIndex((x) => x.id === id);
  if (k < 0) return false;
  if (--state.items[k].dur <= 0) state.items.splice(k, 1);
  return true;
}
function restockShop() {
  const offers = [];
  for (const [id, , , chance, maxStock] of DATA.items) if (Math.random() * 100 < chance) offers.push({ id, stock: 1 + Math.floor(Math.random() * maxStock) });
  if (!offers.length) offers.push({ id: DATA.items[0][0], stock: 1 });
  state.shop = { next: Date.now() + CONFIG.restockSec * 1e3, offers };
}
function shopBuy(id) {
  const d = itemDef(id), o = state.shop.offers.find((x) => x.id === id);
  if (!d || !o || o.stock <= 0) return "none";
  if (state.task < d.level) return "level";
  if (state.cash < d.price) return "cash";
  if (state.items.length >= 24) return "full";
  state.cash -= d.price;
  o.stock--;
  addItem(id);
  return "ok";
}
function lockLeft() {
  return Math.max(0, Math.ceil((state.lockUntil - Date.now()) / 1e3));
}
function lockBase() {
  if (lockLeft() > 0) return false;
  state.lockUntil = Date.now() + state.cool * 1e3;
  return true;
}
function eventWindow(ev, t = Date.now()) {
  const d = new Date(t), day0 = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  let cur = null, next = Infinity;
  for (const off of [-864e5, 0, 864e5]) for (const hhmm of ev.times) {
    const [h, m] = hhmm.split(":").map(Number), s = day0 + off + (h * 60 + m) * 6e4, e = s + ev.dur * 1e3;
    if (t >= s && t < e) cur = { start: s, end: e };
    if (s > t && s < next) next = s;
  }
  return { cur, next };
}
function eventPick(ev) {
  const row = rowOf(ev.row), ok = row.income.map((v, i) => v > 0 ? i : -1).filter((i) => i >= 0);
  const w = ev.id === "dragon" ? { 0: 40, 1: 25, 2: 15, 3: 10, 4: 7, 5: 3 } : { 0: 55, 1: 25, 2: 8, 3: 6, 4: 6 };
  const rates = {};
  for (const i of ok) if (w[i]) rates[i] = w[i];
  return weighted(rates);
}
