"use strict";
/* 잠입 한 판 — «무궁화 꽃이 피었습니다». 누르고 있으면 치치가 걷고, 경비가 돌아볼 때 움직이면 들킨다.
 * 원작의 «남의 기지에서 들고 뛰기»(멀티)를 싱글 한 판으로 옮긴 자리(컨셉서 5% 트위스트):
 *   ① 걸어 들어간다(go) → ② 꾹 눌러 1초 집는다(grab · 원작 hold 1초) → ③ 들고 돌아온다(back · 원작: 들면 이동 속도 ½)
 * 아이템: 포털 총(들고 즉시 귀환) · 복제 튜브(5초 미끼) · 투명 물약(15초) · 맞바꾸기 총(들켰을 때 한 번 모면). */
const RAID = (() => {
  let r = null; // { row, r2, tier, slot, p, holding, phase, phaseT, phaseLen, result, resultT, steps, stage, grab, decoy, ghost, swap }

  function rand([a, b]){ return a + Math.random() * (b - a); }
  function setPhase(ph){
    const tc = CONFIG.raid.tiers[r.tier];
    r.phase = ph; r.phaseT = 0;
    r.phaseLen = ph === "away" ? rand(tc.away) : ph === "turn" ? CONFIG.raid.turnWarn : rand(tc.look);
    if(ph === "turn") SFX.warn();
  }
  function geo(){
    const pathX = W * 0.64, top = H * 0.33, bottom = H * 0.82;
    return { pathX, top, bottom, pedY: H * 0.27, guardX: W * 0.26, guardY: H * 0.47 };
  }
  const safe = () => r.decoy > now || r.ghost > now;

  return {
    get active(){ return !!r; },
    get phase(){ return r ? (r.result || r.phase) : null; },
    get stage(){ return r ? r.stage : null; },
    start(row, r2, tier, slot, meta){
      r = { row, r2, tier, slot, meta: meta || null, p: 0, holding: false, result: null, resultT: 0, steps: 0, stage: "go", grab: 0, decoy: 0, ghost: 0, swap: false, flash: "" };
      setPhase("away"); r.phaseLen = Math.max(r.phaseLen, 2.2); // 첫 «무궁화»는 넉넉히 — 규칙을 읽을 시간
      state.raids++; saveState();
      track("raid_start", { row, r: r2, tier });
      refreshItemBar();
    },
    down(){ if(r && !r.result) r.holding = true; },
    up(){ if(r){ r.holding = false; if(r.stage === "grab") r.grab = 0; } },
    useItem(id){
      if(!r || r.result) return;
      const fx = ITEM_FX[id]; if(!fx || fx.kind !== "raid") return;
      if(fx.fx === "portal" && r.stage !== "back") return;   // 들기 전엔 쓸 수 없다
      if(!useItem(id)) return;
      SFX.zap();
      if(fx.fx === "portal"){ r.p = 0; refreshItemBar(); return this.finish(true); }
      if(fx.fx === "clone"){ r.decoy = now + fx.sec; r.flash = T("decoy"); r.flashT = now + 2; }
      if(fx.fx === "invis"){ r.ghost = now + fx.sec; r.flash = T("ghost"); r.flashT = now + 2; }
      if(fx.fx === "swap"){ r.swap = true; r.flash = T("armed", { name: T("item_24") }); r.flashT = now + 2; }
      saveState(); refreshItemBar();
    },
    update(dt){
      if(!r) return;
      if(r.result){ r.resultT += dt; return; }
      r.phaseT += dt;
      if(r.phaseT >= r.phaseLen) setPhase(r.phase === "away" ? "turn" : r.phase === "turn" ? "look" : "away");
      const tc = CONFIG.raid.tiers[r.tier];
      if(r.holding){
        if(r.stage === "grab"){
          r.grab += dt;
          if(r.phase === "look" && r.phaseT > CONFIG.raid.grace && !safe()) return this.caught();
          if(r.grab >= CONFIG.raid.grabHold){ r.stage = "back"; SFX.land(); r.holding = false; }
        } else {
          const sp = CONFIG.raid.speed / tc.dist * (r.stage === "back" ? CONFIG.raid.carrySlow : 1);
          r.p = r.stage === "go" ? Math.min(1, r.p + dt * sp) : Math.max(0, r.p - dt * sp);
          r.steps += dt; if(r.steps > (r.stage === "back" ? 0.34 : 0.22)){ r.steps = 0; SFX.step(); }
          if(r.phase === "look" && r.phaseT > CONFIG.raid.grace && !safe()) return this.caught();
          if(r.stage === "go" && r.p >= 1){ r.stage = "grab"; r.holding = false; r.grab = 0; }
          else if(r.stage === "back" && r.p <= 0) return this.finish(true);
        }
      }
    },
    caught(){
      if(r.swap){ r.swap = false; r.holding = false; r.flash = T("saved"); r.flashT = now + 2; setPhase("away"); r.phaseLen += 1.2; SFX.zap(); return; }
      this.finish(false);
    },
    finish(win){
      r.result = win ? "win" : "lose"; r.holding = false; r.resultT = 0;
      if(win){
        SFX.win();
        if(!r.meta){ addCreature(r.row, r.r2, 0, r.slot); state.raidWins++; window.__bookNew != null && announceBook(); }   // 진짜 기지면 서버가 허락해야 얻는다(onRaidResult)
      } else { SFX.caught(); try{ navigator.vibrate && navigator.vibrate(200); }catch(e){} }
      state.raidReadyAt = Date.now() + CONFIG.raid.cooldown * 1000;
      saveState();
      track(win ? "raid_win" : "raid_fail", { row: r.row, r: r.r2, tier: r.tier });
      const done = r; setTimeout(() => onRaidResult(win, done.row, done.r2, done.meta, done.slot), 900);
    },
    retry(){ if(r){ const { row, r2, tier, slot, meta } = r; r = null; this.start(row, r2, tier, slot, meta); state.raids--; } },
    end(){ r = null; refreshItemBar(); },
    draw(){
      if(!r) return;
      const g = geo();
      drawGrass(0.55);
      // 이웃 기지 받침대 + 목표
      const ped = spr("props/pedestal");
      if(ped){ const pw = 150, ph = pw * ped.height / ped.width; ctx.drawImage(ped, g.pathX - pw / 2, g.pedY - ph * 0.55, pw, ph); }
      const glow = 0.5 + Math.sin(now * 4) * 0.2;
      ctx.fillStyle = `rgba(255,220,120,${glow * 0.3})`; ctx.beginPath(); ctx.ellipse(g.pathX, g.pedY - 40, 70, 70, 0, 0, Math.PI * 2); ctx.fill();
      if(r.meta) text(T("raidOwner", { nick: r.meta.nick }), g.pathX, g.pedY + H * 0.075, 14, "#fff", { stroke: 4, strokeColor: "#1b1222" });
      const carrying = r.stage === "back" || r.result === "win";
      const tid = rowOf(r.row).id;
      if(!carrying){ drawAura(r.r2, g.pathX, g.pedY, H * 0.15, now); drawCreature(tid, g.pathX, g.pedY, H * 0.15, Math.sin(now * 3) * 0.02); }
      // 길 — 점선
      ctx.strokeStyle = "rgba(255,255,255,.25)"; ctx.lineWidth = 6; ctx.setLineDash([4, 16]); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(g.pathX, g.bottom); ctx.lineTo(g.pathX, g.top); ctx.stroke(); ctx.setLineDash([]);
      // 경비 — 등 보임 / 돌아보는 중(흔들림) / 앞 + 손전등 빛
      const looking = r.phase === "look" || r.result === "lose";
      const cy = g.bottom - (g.bottom - g.top) * r.p;
      if(looking){
        ctx.fillStyle = safe() ? "rgba(140,200,255,.18)" : "rgba(255,236,140,.28)";
        ctx.beginPath(); ctx.moveTo(g.guardX + 40, g.guardY - H * 0.12);
        ctx.lineTo(W + 20, g.top - 40); ctx.lineTo(W + 20, g.bottom + 40); ctx.closePath(); ctx.fill();
      }
      shadow(g.guardX, g.guardY, H * 0.12, 0.4);
      const wob = r.phase === "turn" ? Math.sin(now * 40) * 0.04 : 0;
      drawSprite(looking ? "raid/guard-front" : "raid/guard-back", g.guardX, g.guardY, H * 0.22, wob);
      if(r.phase === "turn" && !r.result){ text("!", g.guardX + 46, g.guardY - H * 0.24, 40, "#ffd24a", { stroke: 6, strokeColor: "#5a1a1a" }); }
      // 미끼(복제) — 치치 옆에 하나 더
      if(r.decoy > now){ ctx.globalAlpha = 0.55; drawSprite("raid/chichi-run", g.pathX - 70, g.bottom - (g.bottom - g.top) * 0.1, H * 0.11, 0, false); ctx.globalAlpha = 1; }
      // 치치
      const bob = r.holding ? Math.abs(Math.sin(now * 12)) * 6 : 0;
      shadow(g.pathX, cy, 70, 0.4);
      const pose = r.result === "lose" ? "raid/chichi-shock" : r.result === "win" ? "raid/chichi-cheer" : "raid/chichi-run";
      if(r.ghost > now) ctx.globalAlpha = 0.4;
      drawSprite(pose, g.pathX, cy - bob, H * 0.13, 0, false);
      ctx.globalAlpha = 1;
      if(carrying){ const k = r.result === "win" ? Math.min(1, r.resultT / 0.5) * 20 : 0; drawAura(r.r2, g.pathX + 38, cy - H * 0.06 - k, H * 0.1, now); drawCreature(tid, g.pathX + 38, cy - H * 0.06 - k, H * 0.1, Math.sin(now * 8) * 0.03); }
      // 집기 링
      if(r.stage === "grab" && !r.result){
        const k = Math.min(1, r.grab / CONFIG.raid.grabHold), cxp = g.pathX, cyp = g.pedY - H * 0.07;
        ctx.strokeStyle = "rgba(0,0,0,.45)"; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(cxp, cyp, 38, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = "#7dff8a"; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(cxp, cyp, 38, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * k); ctx.stroke();
      }
      // 진행 막대
      const bx = W - 22, bt = g.top, bb = g.bottom;
      ctx.fillStyle = "rgba(0,0,0,.4)"; rr(bx - 7, bt, 14, bb - bt, 7); ctx.fill();
      ctx.fillStyle = r.stage === "back" ? "#ffd24a" : "#7dff8a"; rr(bx - 5, bb - (bb - bt) * r.p, 10, (bb - bt) * r.p + 0.01, 5); ctx.fill();
      // 위 띠 — 구호 / 멈춰
      const bandY = H * 0.08;
      ctx.fillStyle = "rgba(10,10,30,.6)"; rr(16, bandY - 26, W - 32, 52, 18); ctx.fill();
      if(r.result === "lose") text(T("caught"), W / 2, bandY, 26, "#ff6b6b", { stroke: 5, strokeColor: "#2a0a0a" });
      else if(r.result === "win") text(T("got", { name: creatureName(tid) }), W / 2, bandY, 22, "#7dff8a", { stroke: 5, strokeColor: "#0a2a10" });
      else if(r.phase === "look" && !safe()) text(T("look"), W / 2, bandY, 28, "#ff6b6b", { stroke: 5, strokeColor: "#2a0a0a" });
      else if(r.phase === "look") text(r.decoy > now ? T("decoy") : T("ghost"), W / 2, bandY, 20, "#9fe8ff", { stroke: 4, strokeColor: "#0a2a44" });
      else {
        const chant = [...T("chant")], k = r.phase === "turn" ? 1 : Math.min(1, r.phaseT / r.phaseLen);
        text(chant.slice(0, Math.max(1, Math.ceil(chant.length * k))).join(""), W / 2, bandY, 20, "#fff", { stroke: 4, strokeColor: "#1b1222" });
      }
      // 아래 — 누르기 안내
      if(!r.result){
        const hy = H * 0.9;
        const label = r.stage === "grab" ? T("holdToGrab") : r.stage === "back" ? T("carryBack") : T("holdToMove");
        ctx.fillStyle = r.holding ? "rgba(125,255,138,.9)" : "rgba(255,255,255,.85)"; rr(W / 2 - 120, hy - 22, 240, 44, 22); ctx.fill();
        text(label, W / 2, hy, 16, "#1b1222");
      }
      if(r.flash){ text(r.flash, W / 2, H * 0.16 + 26, 16, "#cfe8ff", { stroke: 4, strokeColor: "#0a2a44" }); if(now > r.flashT) r.flash = ""; }
      text(T("diff" + r.tier), 24, H * 0.16, 16, ["#7dff8a", "#ffd24a", "#ff8a6b"][r.tier], { align: "left", stroke: 4, strokeColor: "#1b1222" });
    },
  };
})();
