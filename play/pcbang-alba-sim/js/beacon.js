/* 나라별 접속 계측기 드롭인 — 서버 = core/tools/beacon (t.dumbgamelab.com). 설명서 = 그 README.
 *
 * GA 가 막힌 중국 본토에서도 «몇 번 열었나» 를 센다. 나라는 서버가 요청에서 잡는다 — 여기선 게임·이벤트 이름만 보낸다.
 * ★ 안 보내는 곳: 로컬(localhost·127.*·사설 IP·file)·앱(Capacitor)·포털 빌드(`__DGL_PORTAL_NAME` — 외부 분석 금지).
 *   `analytics-send-guard` 와 같은 규칙이다(개발 트래픽이 지표를 오염시킨 2026-08-11 사고).
 * ★ 켜는 건 게임 선언(`dgl.game.json` `beacon:true`) — index.html 에 `<script src="js/beacon.js" data-game="<slug>">`.
 *   쉼(포털)이 `__DGL_PORTAL_NAME` 을 먼저 세우도록 analytics.js 태그 «뒤» 에 둔다.
 * ★ 저장하는 건 서버의 (날짜·나라·게임·이벤트) 횟수 뿐. 여기선 쿠키·기기 ID 를 만들지 않는다.
 *   first_open 은 localStorage 표식 하나로 한 번만(지워지면 한 번 더 — 근사치).
 */
(function () {
  'use strict';
  var ENDPOINT = 'https://t.dumbgamelab.com/b';

  function isLocalHost(h) {
    h = String(h || '');
    return !h || h === 'localhost' || h === '[::1]' || h === '0.0.0.0' || /^127\./.test(h) || /^10\./.test(h) ||
      /^192\.168\./.test(h) || /^172\.(1[6-9]|2\d|3[01])\./.test(h) || /\.local$/.test(h);
  }

  /** 보낼 곳인가 — 시험표가 이 함수를 직접 부른다 */
  function shouldSend(env) {
    if (isLocalHost(env.hostname)) return false;
    if (env.protocol && env.protocol !== 'https:' && env.protocol !== 'http:') return false;
    if (env.native) return false;
    if (env.portal) return false;
    return true;
  }

  function fire(game, event) {
    var url = ENDPOINT + '?g=' + encodeURIComponent(game) + '&e=' + event;
    try { if (navigator.sendBeacon && navigator.sendBeacon(url)) return; } catch (e) {}
    try { fetch(url, { method: 'POST', keepalive: true, mode: 'no-cors' }); } catch (e) {}
  }

  var api = { shouldSend: shouldSend, isLocalHost: isLocalHost, fire: fire };
  window.DGL_BEACON = api;

  var tag = document.currentScript;
  var game = tag && tag.getAttribute && tag.getAttribute('data-game');
  if (!game) return;
  var C = window.Capacitor, native = false;
  try { native = !!(C && C.isNativePlatform && C.isNativePlatform()); } catch (e) {}
  var env = { hostname: location.hostname, protocol: location.protocol, native: native, portal: !!(window.__DGL_PORTAL_NAME || (window.__DGL_WEB && window.__DGL_WEB.portal)) };
  if (!shouldSend(env) && !/[?&]dglSend=1/.test(location.search)) return;
  var first = false;
  try {
    var K = 'dgl_beacon_seen';
    if (!localStorage.getItem(K)) { localStorage.setItem(K, '1'); first = true; }
  } catch (e) {}
  if (first) fire(game, 'first_open');
  fire(game, 'session_start');
})();
