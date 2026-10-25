"use strict";
/* 치치의 브레인롯 털이 — 에셋 로더. 이름 = assets/<이름>.png (배경·바닥·벨트만 .jpg) */
const ITEM_IDS = DATA.items.map(a => a[0]);
const ASSET_NAMES = [
  "bg-grass", "floor-wood", "belt", "chichi",
  ...DATA.rows.filter(r => r.row !== LUCKY_ROW).map(r => `creatures/${r.id}`),
  ...ITEM_IDS.map(id => `items/${id}`),
  "floor-cloud", "floor-candy", "floor-space",
  ...["bow", "shades", "party", "crown", "halo", "witch"].map(n => `skins/${n}`),
  ...["pumpkin", "web", "bat", "tomb", "candle", "cauldron"].map(n => `deco/${n}`),
  ...["pedestal", "pedestal-locked", "luckybox", "hwbox", "candypail", "cashbag", "sign", "siren", "crate"].map(n => `props/${n}`),
  ...["ico-shop", "ico-rebirth", "ico-fuse", "ico-book", "ico-lock", "ico-mask", "ico-coins", "ico-cash"].map(n => `ui/${n}`),
  "raid/guard-back", "raid/guard-front", "raid/thief", "raid/chichi-run", "raid/chichi-shock", "raid/chichi-cheer",
];
const JPG = new Set(["bg-grass", "floor-wood", "floor-cloud", "floor-candy", "floor-space", "belt"]);
const _imgs = {};
function loadAssets(done){
  let left = ASSET_NAMES.length;
  for(const name of ASSET_NAMES){
    const im = new Image();
    im.onload = im.onerror = () => { if(--left === 0) done && done(); };
    im.src = `assets/${name}${JPG.has(name) ? ".jpg" : ".png"}`;
    _imgs[name] = im;
  }
}
function spr(name){ const im = _imgs[name]; return im && im.complete && im.naturalWidth ? im : null; }
