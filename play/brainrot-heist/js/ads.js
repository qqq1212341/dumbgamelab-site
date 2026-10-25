"use strict";
/* 광고·계측 자리 — 게임은 ADS.*·track() 만 부른다. SDK 는 모른다.
 * 웹 포털 빌드는 core/tools/web/shim/portal-shim.js 가 window.__DGL_PORTAL.ads(showRewarded·showInterstitial·isRewardedReady)를 심는다.
 * 사이트·로컬엔 그 전역이 없다 → 보상형 버튼이 숨고 전면은 건너뛴다.
 * 보상형(«시간»을 파는 자리): 자리 비운 동안 번 돈 ×2 · 잠입 실패 뒤 한 번 더. 전면: 잠입 결과 뒤에만(첫 판 제외·간격). */
function track(name, params){ try{ window.DGL && window.DGL.track(name, params || {}); }catch(e){} }
const ADS = (() => {
  const portal = () => (window.__DGL_PORTAL && window.__DGL_PORTAL.ads) || null;
  let lastInter = 0;
  return {
    ready(){ const a = portal(); return !!a && (a.isRewardedReady ? a.isRewardedReady() : true); },
    async rewarded(place){
      const a = portal(); if(!a) return false;
      track("ad_rewarded_request", { place });
      const ok = await a.showRewarded(place).catch(() => false);
      track(ok ? "ad_rewarded_done" : "ad_rewarded_fail", { place });
      saveState();
      return ok;
    },
    async afterRaid(){
      const a = portal(), now = Date.now() / 1000;
      if(!a || state.raids <= 1 || now - lastInter < CONFIG.interstitialGap) return;
      lastInter = now;
      track("ad_interstitial_request", { place: "raid" });
      await a.showInterstitial("raid").catch(() => false);
    },
  };
})();
