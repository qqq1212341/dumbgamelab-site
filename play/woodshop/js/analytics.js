"use strict";
/* Dumb Game Lab — 트래킹/애널리틱스 (web-capacitor 게임 공용 / 드롭인)
 *
 * 플레이어 *행동* 데이터(세션·진행도·이탈·수익·리텐션)를 수집한다.
 * 그로스(9단계) '진단 렌즈' — 손님(플레이어)이 어디서 이탈하나? — 의 데이터 소스.
 * splash.js 와 동일한 "복사 한 번이면 끝" 드롭인. 의존성 0, <head>에서 splash.js 다음 로드.
 *
 * 왜 GA4(gtag)인가 (부업 = 무료·무네이티브설정 우선):
 *   • 무료(이벤트 무제한) · <script> 한 줄 → 웹 라이브 + 앱 WebView 를 한 파일로 커버.
 *   • 벤더 중립 래퍼: 게임 코드는 DGL.track(name, params) 만 부른다. 어댑터(_send)만
 *     갈아끼우면 Firebase/기타로 이전 1함수. (부업 커지면 Firebase=유저당 광고매출·Crashlytics)
 *
 * 설치(게임마다):
 *   1) 이 파일을 게임 prototype/js/ 에 복사.
 *   2) index.html <head> 의 splash.js 바로 다음에 <script src="js/analytics.js"></script>.
 *   3) 아래 MEASUREMENT_ID 를 그 게임의 GA4 측정 ID(G-XXXXXXXXXX)로 교체.
 *      analytics.google.com → 관리 → 데이터 스트림 → 웹 스트림 만들기 → 측정 ID 복사.
 *   4) 게임 이벤트 지점에 DGL.track('event_name', {...}) 삽입 (가드: typeof DGL!=='undefined').
 *
 * MEASUREMENT_ID 가 비어(placeholder)면: gtag 미주입 + DGL.track 은 콘솔 로그만(무해) →
 * ID 채우기 전에도 빌드/배포 안전, 이벤트 발화는 콘솔(?dglDebug=1)·네트워크 탭으로 검증 가능.
 * 한 페이지 1회 초기화 가드.
 */
(function () {
  if (window.DGL && window.DGL.__ready) return;

  // ▼▼▼ 게임별로 채운다 ▼▼▼ ────────────────────────────────────
  var MEASUREMENT_ID = 'G-07WLGFMQDD';   // DGL 공용 GA4 웹 스트림 측정 ID (게임 구분은 아래 GAME)
  /* ★★ 반드시 이 게임의 슬러그로 바꿔라. 안 바꾸면 **지표가 남의 게임에 섞인다.**
        측정 ID 는 DGL 공용이고 게임 구분은 오직 이 값이다 — 에러도 경고도 없이
        새 게임의 first_open·플레이 이벤트가 통째로 다른 게임 버킷에 들어간다.
        (엔진 템플릿에 실제 출시 게임 슬러그가 박혀 있던 것을 2026-08-10 검증에서 잡았다.) */
  var GAME = 'woodshop';                  // 게임 슬러그 — 모든 이벤트에 game= 로 부착
  // ▲▲▲ ────────────────────────────────────────────────────────

  // placeholder('G-XXXX…') 이면 미설정으로 간주 → 네트워크 태그 미주입, 콘솔 로그만.
  var configured = !!MEASUREMENT_ID && MEASUREMENT_ID.indexOf('G-XXXX') !== 0;

  /* 슬러그를 안 바꿨으면 **시끄럽게** 알린다. 조용히 넘어가면 출시 뒤에야
     "이 게임 지표가 왜 없지"로 발견된다(그때는 이미 데이터가 섞여 있다). */
  if (GAME === 'CHANGEME') {
    console.error(
      '[DGL.analytics] ★ GAME 슬러그를 안 바꿨다 — public/js/analytics.js 의 GAME 을 ' +
      '이 게임 슬러그로 교체해라. 지금 상태로 출시하면 지표를 구분할 수 없다.'
    );
  }
  // 로컬/명시(?dglDebug=1) = 콘솔 디버그 + GA4 DebugView.
  // ★ Capacitor 네이티브 앱은 hostname 이 'localhost'로 서빙됨 → hostname 만 보면 스토어 빌드의 모든 이벤트가
  //   debug_mode:true 로 찍혀 일반 리포트에서 빠진다. 네이티브(detectPlatform!=='web')는 명시 플래그일 때만 DEBUG.
  var DEBUG = /[?&]dglDebug=1/.test(location.search) ||
              (detectPlatform() === 'web' &&
               ['localhost', '127.0.0.1', '[::1]', ''].indexOf(location.hostname) >= 0);

  // 플랫폼 감지 (ads.js 와 동일 패턴) — 이벤트에 platform= 부착(web / ios / android)
  function detectPlatform() {
    try {
      var C = window.Capacitor;
      if (C && C.isNativePlatform && C.isNativePlatform()) return (C.getPlatform && C.getPlatform()) || 'app';
    } catch (e) {}
    return 'web';
  }
  var PLATFORM = detectPlatform();

  // ── 로컬(개발) 웹 트래픽은 GA 로 보내지 않는다 (PCAlba 와 같은 SEND 게이트) ─────────
  // 2026-08-11 실사고: 로컬을 debug_mode 로 "표시"만 하고 보냈더니 GA4 표준 리포트가 못 빼서 활성 사용자의
  // 91%가 우리 자신이었다. 로컬은 콘솔만 · 검증할 땐 `?dglSend=1` · 네이티브 앱은 localhost 라도 항상 보낸다.
  var LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]', '0.0.0.0', ''];
  var isLocalWeb = PLATFORM === 'web' && LOCAL_HOSTS.indexOf(location.hostname) >= 0;
  var SEND = !isLocalWeb || /[?&]dglSend=1/.test(location.search);
  // 세션 ID — 이번 실행 1개. 세션 단위 묶음/디버깅용.
  var SESSION = 's' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);

  // ── gtag 부트스트랩 (configured 일 때만 네트워크 태그 주입) ──
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  if (configured && SEND) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    (document.head || document.documentElement).appendChild(s);
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID, { debug_mode: DEBUG, send_page_view: true });
  }

  // ★ 앱에선 숫자·참거짓을 글자로 보낸다(2026-10-23). @capacitor-firebase/analytics 안드로이드는 JS 정수를
  //   Bundle.putInt 로 넣는데 Firebase 는 int·boolean 칸을 **버린다**(String·long·double 만 받는다) — 그래서
  //   day_complete·stage_up 의 stage·day 가 GA 에 전부 빈칸이었고, «몇 단계에서 그만두나»를 못 쟀다.
  //   GA 맞춤 측정기준은 글자로 읽으니 잃는 게 없다. 표준 금액 칸(value)만 숫자로 둔다.
  function _faParams(params) {
    var out = {};
    for (var k in (params || {})) {
      var v = params[k];
      out[k] = (k !== 'value' && (typeof v === 'number' || typeof v === 'boolean')) ? String(v) : v;
    }
    return out;
  }

  // ── 벤더 중립 어댑터 ── 트래커 이전 = 이 함수 1개만 교체.
  // 네이티브(앱) = Firebase Analytics 플러그인(first_open·리텐션·AdMob수익은 SDK가 자동) / 웹 = gtag.
  // GA/Firebase 단일 소스: 웹 스트림 + iOS/Android 앱 스트림이 같은 GA4 속성(542222163)으로 모임.
  function _send(name, params) {
    // 네이티브: Firebase Analytics.logEvent (예약어 session_start/first_open은 SDK가 자동수집 → 중복 방지 위해 스킵)
    try {
      var C = window.Capacitor;
      if (C && C.isNativePlatform && C.isNativePlatform()) {
        if (name === 'session_start' || name === 'first_open') return;   // Firebase 자동수집
        var FA = C.Plugins && C.Plugins.FirebaseAnalytics;
        if (FA && FA.logEvent) {
          /* 플러그인이 없으면 거절된 Promise 가 «잡히지 않은 오류»로 남는다 — 계측 실패가 앱 오류가 되면 안 된다 */
          var pr = FA.logEvent({ name: name, params: _faParams(params) });
          if (pr && typeof pr.catch === 'function') pr.catch(function () {});
        }
        return;
      }
    } catch (e) {}
    // 웹: gtag
    if (configured && SEND) { try { gtag('event', name, params); } catch (e) {} }
  }

  // 모든 이벤트에 game/platform/session 자동 부착.
  function track(name, params) {
    var p = params || {};
    p.game = GAME; p.platform = PLATFORM; p.session_id = SESSION;
    if (DEBUG) { try { console.debug('[DGL.track]', name, p); } catch (e) {} }
    _send(name, p);
  }

  window.DGL = window.DGL || {};
  window.DGL.track = track;
  window.DGL.configured = configured;
  window.DGL.sending = SEND;         // false = 로컬 개발 → GA 전송 안 함(?dglSend=1 로 강제 가능)
  window.DGL.__ready = true;
  /* 게임이 채워 넣는 '지금 어디' 스냅샷(선택). app_close 에만 붙는다 —
     "떠난 순간 무슨 화면이었나"가 이탈 진단의 유일한 단서인데, 그게 없으면
     first_open → 첫 게임 이벤트 사이가 통째로 깜깜이가 된다. 예: main.js 가
     DGL.ctx = () => ({ where:'business', day:3, day_pct:41 }) 로 등록. */
  window.DGL.ctx = null;

  // ── 자동 이벤트: 앱 열림/닫힘 (GA4 예약어 session_start 와 충돌 피해 app_* 사용) ──
  track('app_open', {});
  var _closed = false;
  function closeOnce() {
    if (_closed) return; _closed = true;
    var p = {};
    try { if (typeof window.DGL.ctx === 'function') p = window.DGL.ctx() || {}; } catch (e) { p = {}; }
    track('app_close', p);
  }
  window.addEventListener('pagehide', closeOnce);
  /* ★ 모바일에선 pagehide 가 안 오는 경우가 많다 — 홈 버튼·앱 전환은 visibilitychange 만
     발화하고, 그대로 OS 가 프로세스를 죽이면 pagehide 는 영영 안 온다. 그래서 화면이
     숨는 순간을 이탈로 본다(한 세션 1회). 안 그러면 app_close 가 구조적으로 과소집계돼
     "어디서 나갔나"를 셀 수 없다. */
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') closeOnce();
    else _closed = false;   // 돌아왔으면 다시 무장 — 마지막으로 손을 뗀 지점이 진짜 이탈점이다
  });

  if (!configured) {
    try { console.info('[DGL] analytics 준비됨 — 측정 ID 미설정(콘솔 로그만). MEASUREMENT_ID 채우면 GA4 전송 시작.'); } catch (e) {}
  }
})();
