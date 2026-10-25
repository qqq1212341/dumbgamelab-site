"use strict";
/* 멀티(비동기 훔치기) — 서버(core/tools/brainrot-api)와 말하는 곳. 화면을 모른다(창은 social.js).
 * 실시간이 아니다: 내 기지 스냅샷을 올려 두고(sync), 털러 갈 남의 기지를 받아 오고(targets), 한 칸을 훔치고(steal), 털린 일은 다음 sync 때 받는다.
 * 서버가 안 되거나 로컬(미리보기·촬영)이면 조용히 꺼진다 — 게임은 가짜 기지(연습)로 그대로 돈다. 주소 바꾸기·로컬에서 켜기 = ?api=1 · ?api=<주소> · 끄기 = ?api=0 */
const NET = (() => {
  const q = (/[?&]api=([^&]*)/.exec(location.search) || [])[1];
  const local = /^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname) || location.protocol === "file:";
  const base = q && q !== "0" && q !== "1" ? decodeURIComponent(q) : CONFIG.net.api;
  const enabled = q === "0" ? false : (q ? true : !local);
  let busy = false, ack = [], lastOk = 0, fails = 0, serverNow = 0, skew = 0;

  async function req(method, path, body){
    if(!enabled) return null;
    const ac = new AbortController(), to = setTimeout(() => ac.abort(), CONFIG.net.timeout);
    try{
      const res = await fetch(base + path, { method, signal: ac.signal, keepalive: method === "POST",
        headers: method === "POST" ? { "content-type": "text/plain" } : undefined, body: body ? JSON.stringify(body) : undefined });
      const j = await res.json().catch(() => null);
      if(j && typeof j.now === "number") skew = j.now - Date.now();
      if(res.ok || (j && j.error)){ lastOk = Date.now(); fails = 0; }
      return j ? { ...j, status: res.status } : null;
    }catch(e){ fails++; return null; }
    finally{ clearTimeout(to); }
  }

  function snapshot(){
    const slots = [];
    for(let i = 0; i < SLOT_N; i++){ const sl = state.slots[i]; slots.push(sl ? [sl.row, sl.r] : 0); }
    return { task: state.task, mult: state.mult, skin: state.skin.base, cskin: state.skin.cr, slots };
  }
  function myNick(){ return state.nick || ("치치" + (parseInt(state.pid.slice(0, 5), 36) % 9000 + 1000)); }

  /* 털린 일을 내 화면에 반영 — 칸에서 빼고, 돌아올 시각을 적고, 알림함에 넣는다 */
  function applyThefts(list){
    let n = 0;
    for(const t of list){
      ack.push(t.id);
      if(state.seen.includes(t.id)) continue;
      state.seen.push(t.id); if(state.seen.length > 60) state.seen.shift();
      let i = state.slots[t.slot] && state.slots[t.slot].row === t.row && state.slots[t.slot].r === t.r ? t.slot : -1;
      if(i < 0) i = state.slots.findIndex(sl => sl && sl.row === t.row && sl.r === t.r);
      if(i >= 0) state.slots[i] = null;
      const at = Date.now() + Math.max(0, t.backAt - (Date.now() + skew));
      state.owed.push({ row: t.row, r: t.r, at, nick: t.nick, id: t.id });
      state.inbox.push({ id: t.id, pid: t.thief, nick: t.nick, row: t.row, r: t.r, ts: t.ts, at });
      state.log.unshift({ nick: t.nick, row: t.row, r: t.r, ts: t.ts }); if(state.log.length > 8) state.log.pop();
      state.stolenFrom++; n++;
    }
    if(list.length){ saveState(); refreshChrome(); }
    return n;
  }

  return {
    enabled, base,
    get online(){ return enabled && fails < 3 && lastOk > 0; },
    get skew(){ return skew; },
    /* 내 기지 올리기 + 털린 일 받기. 같은 때 두 번 부르면 한 번만 */
    async sync(){
      if(!enabled || busy || !state.bought) return null;
      busy = true;
      try{
        const sent = ack.slice(); ack = [];
        const r = await req("POST", "/v1/sync", { pid: state.pid, key: state.key, nick: myNick(), power: Math.round(incomePerSec() * state.mult), snap: snapshot(), lockLeft: Math.min(150, lockLeft()), ack: sent });
        if(!r || !r.ok){ ack = sent.concat(ack); return r; }
        if(r.nick && r.nick !== state.nick){ state.nick = r.nick; }
        if(r.thefts && r.thefts.length) applyThefts(r.thefts);
        return r;
      } finally { busy = false; }
    },
    async targets(){
      if(!enabled) return [];
      const r = await req("GET", `/v1/targets?pid=${state.pid}&n=3&power=${Math.round(incomePerSec() * state.mult)}`);
      return r && r.ok ? r.targets : [];
    },
    async baseOf(pid){ const r = await req("GET", `/v1/base?pid=${encodeURIComponent(pid)}`); return r && r.ok ? r.base : null; },
    async steal(victim, slot){
      const r = await req("POST", "/v1/steal", { pid: state.pid, key: state.key, victim, slot });
      if(!r) return { ok: false, error: "net" };
      return r;
    },
    /* 닉네임을 서버에 알려 걸러진 이름을 돌려받는다(못 쓰는 이름이면 서버가 임시 이름을 준다) */
    async setNick(n){ state.nick = n; saveState(); const r = await this.sync(); return r && r.nick || n; },
    myNick,
    _applyThefts: applyThefts,
  };
})();

/* 털려서 «돌아올 몫» — 시각이 되면 빈 칸으로 돌아온다(빈 칸이 없으면 팔았을 때의 돈으로) */
function settleOwed(){
  if(!state.owed.length) return 0;
  const t = Date.now(); let n = 0;
  state.owed = state.owed.filter(o => {
    if(o.at > t) return true;
    const i = freeSlotIdx(typeof reservedSlots === "function" ? reservedSlots() : []);
    if(i >= 0) addCreature(o.row, o.r, 0, i); else state.cash += Math.floor(priceOf(o.row, o.r) * CONFIG.sellGet);
    n++; return false;
  });
  if(n){ saveState(); refreshChrome(); if(typeof pop === "function" && mode === "base") pop(W / 2, layout().beltY + 20, T("backHome"), "#9fe8ff"); if(typeof announceBook === "function") announceBook(); }
  return n;
}
