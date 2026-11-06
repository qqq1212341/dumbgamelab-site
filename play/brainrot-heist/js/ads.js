"use strict";
function track(name, params) {
  try {
    window.DGL && window.DGL.track(name, params || {});
  } catch (e) {
  }
}
const ADS = /* @__PURE__ */ (() => {
  const portal = () => window.__DGL_PORTAL && window.__DGL_PORTAL.ads || window.DGL_ADS || null;
  let lastInter = 0;
  return {
    ready() {
      const a = portal();
      return !!a && (a.isRewardedReady ? a.isRewardedReady() : true);
    },
    async rewarded(place) {
      const a = portal();
      if (!a) return false;
      track("ad_rewarded_request", { place });
      BGM.duck(true);
      const ok = await a.showRewarded(place).catch(() => false);
      BGM.duck(false);
      track(ok ? "ad_rewarded_done" : "ad_rewarded_fail", { place });
      saveState();
      return ok;
    },
    async afterRaid() {
      const a = portal(), now = Date.now() / 1e3;
      if (!a || state.raids <= 1 || now - lastInter < CONFIG.interstitialGap) return false;
      lastInter = now;
      track("ad_interstitial_request", { place: "raid" });
      BGM.duck(true);
      const shown = !!await a.showInterstitial("raid").catch(() => false);
      BGM.duck(false);
      return shown;
    }
  };
})();
