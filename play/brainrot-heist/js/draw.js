"use strict";
/* 그리기 도구 — 캔버스 한 장을 base·raid 가 같이 쓴다. */
const cv = document.getElementById("cv");
const ctx = cv.getContext("2d");
let W = 0, H = 0, now = 0;
const dpr = Math.min(2, window.devicePixelRatio || 1);

function resize(){
  const r = cv.getBoundingClientRect();
  W = r.width; H = r.height;
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function fmt(n){
  n = Math.floor(n);
  if(n >= 1e12) return (n / 1e12).toFixed(n >= 1e13 ? 0 : 1) + "T";
  if(n >= 1e9) return (n / 1e9).toFixed(n >= 1e10 ? 0 : 1) + "B";
  if(n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M";
  if(n >= 1e4) return (n / 1e3).toFixed(n >= 1e5 ? 0 : 1) + "K";
  return n.toLocaleString("en-US");
}
function rr(x, y, w, h, r){ ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
function text(s, x, y, size, color, opts = {}){
  ctx.font = `${opts.weight || 900} ${size}px "ONE Mobile POP", sans-serif`;
  ctx.textAlign = opts.align || "center"; ctx.textBaseline = "middle";
  if(opts.stroke){ ctx.lineJoin = "round"; ctx.lineWidth = opts.stroke; ctx.strokeStyle = opts.strokeColor || "#2b1a0e"; ctx.strokeText(s, x, y); }
  ctx.fillStyle = color; ctx.fillText(s, x, y);
}
function drawSprite(name, cx, footY, h, squash = 0, flip = false){
  const im = spr(name); if(!im) return;
  const w = h * im.width / im.height;
  ctx.save(); ctx.translate(cx, footY); ctx.scale((1 + squash) * (flip ? -1 : 1), 1 - squash);
  ctx.drawImage(im, -w / 2, -h, w, h); ctx.restore();
}
function drawCreature(id, cx, footY, h, squash = 0){ drawSprite("creatures/" + id, cx, footY, h, squash); }
/* 희귀도 «겉옷» — 원작은 희귀도마다 모델을 바꿔 끼운다(Render_<희귀도>). 우리는 그림 하나에 빛무리·반짝이로 입힌다. 일반은 그대로 */
function drawAura(r, cx, footY, h, t){
  if(r < 1) return;
  const col = RARITY_COLORS[r].color, a = [0, .16, .22, .3, .36, .45, .5][r];
  const rg = r === 5 ? "#ffffff" : col;
  const g = ctx.createRadialGradient(cx, footY - h * 0.45, h * 0.05, cx, footY - h * 0.45, h * 0.62);
  g.addColorStop(0, hexA(rg, a * 1.6)); g.addColorStop(1, hexA(rg, 0));
  ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx, footY - h * 0.45, h * 0.62, h * 0.66, 0, 0, Math.PI * 2); ctx.fill();
  if(r >= 4){
    const n = r >= 6 ? 6 : 4;
    for(let k = 0; k < n; k++){
      const ph = (t * (0.6 + k * 0.13) + k * 1.7) % 1, px = cx + Math.sin(k * 2.4 + t) * h * 0.4, py = footY - h * (0.1 + ph * 0.9);
      ctx.fillStyle = hexA(r === 5 ? "#ffffff" : r === 6 ? "#ff7cf2" : "#fff3a0", (1 - ph) * 0.9);
      ctx.beginPath(); ctx.moveTo(px, py - 4); ctx.lineTo(px + 1.6, py); ctx.lineTo(px, py + 4); ctx.lineTo(px - 1.6, py); ctx.fill();
    }
  }
}
function hexA(hex, a){ const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
function rarityTag(r, x, y, size = 12){
  const c = RARITY_COLORS[r];
  text(rarityName(r), x, y, size, c.color, { stroke: 4, strokeColor: c.outline });
}
function shadow(cx, y, w, a = 0.28){
  ctx.fillStyle = `rgba(20,40,10,${a})`; ctx.beginPath(); ctx.ellipse(cx, y, w / 2, w * 0.16, 0, 0, Math.PI * 2); ctx.fill();
}
function drawGrass(dark = 0){
  const bg = spr("bg-grass");
  if(bg){ const s = Math.max(W / bg.width, H / bg.height); ctx.drawImage(bg, (W - bg.width * s) / 2, (H - bg.height * s) / 2, bg.width * s, bg.height * s); }
  else { ctx.fillStyle = "#79c24a"; ctx.fillRect(0, 0, W, H); }
  if(dark){ ctx.fillStyle = `rgba(14,18,52,${dark})`; ctx.fillRect(0, 0, W, H); }
}
