"use strict";
/* 옛 서비스워커 청소기 — site 배포가 `sw.js` 자리에 올린다.
 * 폐기된 prototype 은 같은 경로(`<site>/sw.js`)에 캐시 이름 `pcbang-vNNN` 의 프리캐시 SW 를 깔았다. 그 SW 가 살아 있으면
 * 같은 파일 이름의 새 에셋을 옛 캐시에서 내준다. 새 판은 SW 를 쓰지 않으므로, 이 파일이 옛 SW 를 대체해 자기 접두사
 * 캐시만 비우고 스스로 등록을 해제한다. 같은 오리진의 다른 캐시는 건드리지 않는다(check-sw-cache-scope).
 */
const CACHE_SCOPE = "pcbang-";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith(CACHE_SCOPE)).map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((cs) => cs.forEach((c) => c.navigate(c.url)))
  );
});
