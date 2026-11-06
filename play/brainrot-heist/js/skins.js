"use strict";
const SKINS = /* @__PURE__ */ (() => {
  const BASE = [
    { id: "wood", tex: "floor-wood", rim: "#7a4a26", unlock: { t: "free" } },
    { id: "cloud", tex: "floor-cloud", rim: "#3f6f99", unlock: { t: "rebirth", n: 1 } },
    { id: "candy", tex: "floor-candy", rim: "#c45a8a", unlock: { t: "cash", v: 3e6 } },
    { id: "gold", tex: "floor-wood", rim: "#d19a1a", tint: "#e8b020", mode: "color", unlock: { t: "book", n: 3 } },
    { id: "space", tex: "floor-space", rim: "#4a3a99", unlock: { t: "rebirth", n: 9 } },
    { id: "haunt", tex: "floor-wood", rim: "#2b0a3a", tint: "#7a3fe0", mode: "color", unlock: { t: "event", ev: "halloween" } }
  ];
  const CR = [
    { id: "", unlock: { t: "free" } },
    { id: "bow", w: 0.36, up: 0.04, unlock: { t: "cash", v: 5e4 } },
    { id: "shades", w: 0.4, up: 0.02, tilt: -0.12, unlock: { t: "cash", v: 3e5 } },
    { id: "party", w: 0.3, up: 0.06, unlock: { t: "rebirth", n: 2 } },
    { id: "crown", w: 0.36, up: 0.04, unlock: { t: "rebirth", n: 5 } },
    { id: "halo", w: 0.4, up: 0.14, unlock: { t: "book", n: 5 } },
    { id: "witch", w: 0.4, up: 0.04, unlock: { t: "event", ev: "halloween" } }
  ];
  const find = (kind, id) => (kind === "base" ? BASE : CR).find((s) => s.id === id);
  function cond(s) {
    const u = s.unlock;
    if (u.t === "free") return true;
    if (u.t === "rebirth") return state.task >= u.n;
    if (u.t === "book") return state.book.length >= u.n;
    if (u.t === "event") return !!(state.hw && state.hw.opened >= 1) || state.dex.some((k) => /_7$/.test(k));
    return false;
  }
  const key = (kind, id) => kind + ":" + id;
  function sync() {
    let n = 0;
    for (const [kind, list] of [["base", BASE], ["cr", CR]]) for (const s of list) if (s.unlock.t !== "cash" && cond(s) && !state.skin.own.includes(key(kind, s.id))) {
      state.skin.own.push(key(kind, s.id));
      n++;
    }
    return n;
  }
  const owned = (kind, id) => {
    const s = find(kind, id);
    return !!s && (s.unlock.t === "free" || state.skin.own.includes(key(kind, id)));
  };
  function equip(kind, id) {
    if (!owned(kind, id)) return false;
    state.skin[kind === "base" ? "base" : "cr"] = id;
    saveState();
    return true;
  }
  function buy(kind, id) {
    const s = find(kind, id);
    if (!s || s.unlock.t !== "cash" || owned(kind, id) || state.cash < s.unlock.v) return false;
    state.cash -= s.unlock.v;
    state.skin.own.push(key(kind, id));
    saveState();
    return true;
  }
  function grant(kind, id) {
    if (!owned(kind, id)) state.skin.own.push(key(kind, id));
    saveState();
  }
  function lockedReason(s) {
    const u = s.unlock;
    return u.t === "event" && !HW.on() ? "hwOff" : u.t;
  }
  const anchors = {};
  function anchorOf(id) {
    if (anchors[id]) return anchors[id];
    const im = spr("creatures/" + id);
    if (!im) return null;
    const N = 64, c = document.createElement("canvas");
    c.width = c.height = N;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(im, 0, 0, N, N);
    const d = g.getImageData(0, 0, N, N).data;
    let top = -1, sx = 0, n = 0;
    for (let y = 0; y < N && (top < 0 || y < top + 7); y++) for (let x = 0; x < N; x++) if (d[(y * N + x) * 4 + 3] > 80) {
      if (top < 0) top = y;
      sx += x;
      n++;
    }
    if (top < 0) return anchors[id] = { x: 0.5, y: 0.1 };
    return anchors[id] = { x: sx / n / N, y: top / N };
  }
  function dress(id, cx, footY, h) {
    const cr = state.skin.cr;
    if (!cr) return;
    const def = find("cr", cr), im = spr("skins/" + cr), a = anchorOf(id);
    if (!def || !im || !a) return;
    const sp = spr("creatures/" + id), sw = h * sp.width / sp.height;
    const aw = h * def.w, ah = aw * im.height / im.width;
    const x = cx - sw / 2 + a.x * sw, yTop = footY - h + a.y * h;
    ctx.save();
    ctx.translate(x, yTop + h * (def.up || 0));
    if (def.tilt) ctx.rotate(def.tilt);
    ctx.drawImage(im, -aw / 2, -ah, aw, ah);
    ctx.restore();
  }
  function floor() {
    const s = find("base", state.skin.base) || BASE[0];
    return s;
  }
  return { BASE, CR, find, sync, owned, equip, buy, grant, cond, lockedReason, dress, floor, key, anchorOf };
})();
