"use strict";
/* ═══ i18n.js — DGL 공용 다국어 드롭인 (의존성 0) ══════════════════════════════
 * 배선: <head> 안, splash.js 다음 · 나머지 게임 스크립트보다 **먼저**.
 *   <script src="js/i18n.js"></script>
 *
 * 게임 코드에서는 __t() 하나만 쓴다(같은 한국어가 자리마다 뜻이 다를 때만 __tx):
 *   __t('준비됐습니다')                → "Ready!"        (en)
 *   __t('남은 {0}초', sec)             → "残り{0}秒"      (ja)
 *   __t('동전 {0}개', n)               → n=1 "1 coin" · n=3 "3 coins"   (사전 값이 복수형 객체일 때)
 *   __tx('보석', '수정')               → "Crystal"  ·  __tx('고치기', '수정') → "Edit"
 *
 * ★ 원본은 엔진 하나다 — genres/tycoon/engine/base/public/js/i18n.js.
 *   게임 사본은 `node core/tools/i18n/sync-mirrors.js --runtime` 이 맞추고(게임의 SUPPORTED 줄만 남긴다),
 *   어긋나면 `core/tools/check-i18n-mirrors.mjs` 가 빨개진다. 사본을 손으로 고치지 마라.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ★ 왜 document.write 인가 (구식으로 보이지만 여기선 이게 맞다)
 *   index.html 의 스크립트는 전부 defer/async 없는 동기 로딩이고, 게임 코드가
 *   **모듈 최상위에서** t() 를 부른다(barks.js 의 대사 표, config.js 의 라벨 표…).
 *   즉 사전이 첫 줄 실행 전에 이미 메모리에 있어야 한다. fetch 는 비동기라
 *   그 시점을 못 맞추고, 맞추려면 게임 파일 23개를 전부 async 로 바꿔야 한다.
 *   파싱 중 document.write 로 <script> 를 끼워 넣으면 브라우저가 그 자리에서
 *   동기로 받아 실행한다 — 원하는 순서가 공짜로 보장된다.
 *   (파싱이 끝난 뒤 부르면 문서를 날리지만, 이 파일은 파싱 중에만 실행된다.)
 *
 * ★ 사전을 .json 이 아니라 .js 로 굽는 이유
 *   json 은 fetch/XHR 이 필요해 위 순서 문제를 되살린다. .js 는 <script> 로
 *   그냥 실행되고 file:// 에서도 CORS 에 안 걸린다(웹·Capacitor·shoot 하니스가
 *   전부 같은 경로로 동작).
 *
 * ★ 번역이 없으면 한국어가 나온다 — 절대 빈칸·날 키가 안 나온다.
 *   키가 곧 한국어 원문이라(gettext msgid 방식) 사전 조회가 실패해도 화면은 멀쩡하다.
 *
 * ★ window 노출을 명시적으로 한다.
 *   드롭인 스크립트의 최상위 const 는 window 에 안 붙는다. 예전에 ADS 가
 *   `window.ADS &&` 가드에 영원히 false 로 걸려 광고가 7일간 0회 노출된 적이 있다.
 * ────────────────────────────────────────────────────────────────────────────*/

(function () {
  /* 출시 로케일. 새 언어를 추가하면 여기 + locales/<코드>.js + i18n-fonts.css 3곳. */
  var SUPPORTED = ["ko", "en", "ja", "zh-Hans", "zh-Hant", "id", "th", "vi"];
  /* 지원하지 않는 언어의 기기(포르투갈어·터키어 …)가 보는 언어 = 영어.
   * ★ 전에는 "ko" 였다 — 브라질·튀르키예 사람이 게임을 열면 **한국어**가 떴다(2026-10-11, 그 나라 스토어
   *   등록정보를 현지어로 만들다 발견). 한국어 기기는 SUPPORTED 에서 먼저 잡히므로 여기까지 오지 않는다. */
  var FALLBACK = "en";
  var KEY = "dgl.lang";

  /* navigator.language 는 'ja', 'ja-JP', 'zh-TW', 'zh-Hant-HK' 등 제각각이다.
   * 중국어만 특별 취급 — 지역이 대만·홍콩·마카오면 번체, 나머지는 간체.
   * (zh 만 오면 간체가 압도적 다수라 간체로 본다.) */
  function normalize(tag) {
    if (!tag) return null;
    tag = String(tag).replace("_", "-");
    var low = tag.toLowerCase();
    if (low.indexOf("zh") === 0) {
      var zh = /hant|\-(tw|hk|mo)\b/.test(low) ? "zh-Hant" : "zh-Hans";
      /* 사전이 없는 중국어 기기는 영어로 — 404 면 화면이 통째로 한국어다 */
      return SUPPORTED.indexOf(zh) >= 0 ? zh : null;
    }
    var base = low.split("-")[0];
    /* 포르투갈어는 한 벌(pt-BR)이다 — pt-PT 기기도 여기로. SUPPORTED 에 있을 때만 맞는다
     * (2026-10-28 한 번뿐인 인생 «Quero em português» · 게이트 = core/tools/i18n/device-locale.js) */
    if (base === "pt") low = "pt-br";
    var hit = SUPPORTED.filter(function (s) {
      return s.toLowerCase() === low || s.toLowerCase() === base;
    })[0];
    return hit || null;
  }

  function detect() {
    /* 1) ?lang=ja — QA·눈검증 하니스가 언어를 강제할 때 쓴다(최우선) */
    var m = /[?&]lang=([\w-]+)/.exec(location.search);
    var forced = m && normalize(decodeURIComponent(m[1]));
    if (forced) return forced;
    /* 2) 사용자가 게임 안에서 고른 값 */
    try {
      var saved = normalize(localStorage.getItem(KEY));
      if (saved) return saved;
    } catch (e) {
      /* 사파리 프라이빗 모드 등 — 무시하고 기기 설정으로 */
    }
    /* 3) 기기 설정 */
    var langs = navigator.languages || [navigator.language];
    for (var i = 0; i < langs.length; i++) {
      var n = normalize(langs[i]);
      if (n) return n;
    }
    return FALLBACK;
  }

  var locale = detect();

  /* ── 사전 로드 (한국어는 키가 곧 값이라 사전이 필요 없다 = 다운로드 0) */
  if (locale !== "ko" && typeof document.write === "function") {
    document.write(
      '<script src="locales/' +
        locale +
        '.js" onerror="window.__DGL_L_FAIL=1"><\/script>',
    );
  }

  /* ── 치환: '남은 {0}초' + [12] → '남은 12초'
   * 자리표시자가 번역에서 사라졌거나 순서가 바뀌어도 죽지 않는다.
   * 값이 없는 {n} 은 지우지 않고 그대로 둔다 — 화면에 {0} 이 보이면 번역 버그가
   * 눈에 띄어 고칠 수 있다. 조용히 빈칸이 되면 아무도 모른다. */
  function fill(str, args) {
    if (!args.length) return str;
    return str.replace(/\{(\d+)\}/g, function (whole, i) {
      var v = args[+i];
      return v === undefined || v === null ? whole : String(v);
    });
  }

  /* ── 복수형: 사전 값이 객체 {one, other, …}(CLDR 범주)면 첫 숫자 인자로 고른다.
   * 한국어 키는 그대로다(키 = 원문). 영어 «1 coins»·러시아어식 범주를 문장 조각 없이 쓴다.
   * 고를 범주가 없으면 other — other 도 없으면 사전에 없는 것으로 보고 원문으로 떨어진다. */
  var rules = null;
  function category(n) {
    try {
      if (!rules) rules = new Intl.PluralRules(locale);
      return rules.select(n);
    } catch (e) {
      return n === 1 ? "one" : "other"; /* Intl 이 없는 낡은 웹뷰 */
    }
  }
  function countOf(args) {
    for (var i = 0; i < args.length; i++) {
      var a = args[i];
      if (typeof a === "number" && isFinite(a)) return a;
      /* 이미 천 단위로 찍은 수(«3,700»)도 센다 — 구분자를 걷고 정수만 */
      if (typeof a === "string" && /^[+-]?\d[\d.,\u00a0\u202f ]*$/.test(a)) return Number(a.replace(/[^\d-]/g, ""));
    }
    return null;
  }
  function pick(val, args) {
    if (val == null || val === "") return null;
    if (typeof val !== "object") return String(val);
    var n = countOf(args);
    var cat = n == null ? "other" : category(Math.abs(n));
    var hit = val[cat] != null && val[cat] !== "" ? val[cat] : val.other;
    return hit == null || hit === "" ? null : String(hit);
  }
  function lookup(key, args) {
    var dict = window.__DGL_STRINGS;
    if (!dict || !Object.prototype.hasOwnProperty.call(dict, key)) return null;
    return pick(dict[key], args);
  }

  function t(ko) {
    var args = Array.prototype.slice.call(arguments, 1);
    var hit = lookup(ko, args);
    return fill(hit == null ? ko : hit, args);
  }

  /* ── 문맥 구분자(gettext msgctxt): 같은 한국어가 자리마다 다른 뜻일 때만 쓴다.
   *   __tx('보석', '수정')  → 사전 키 «수정‖보석»
   * 문맥 키가 사전에 없으면 원문 키(«수정»)의 번역으로 떨어진다 — 갈라 쓰기 전과 같은 화면이다.
   * 구분 문자 ‖(U+2016)는 스캐너(core/tools/i18n/scan.js)·verify·qa 와 같은 값이어야 한다. */
  var CTX_SEP = "\u2016";
  function tx(ctx, ko) {
    var args = Array.prototype.slice.call(arguments, 2);
    var hit = lookup(ko + CTX_SEP + ctx, args);
    if (hit == null) hit = lookup(ko, args);
    return fill(hit == null ? ko : hit, args);
  }

  var I18N = {
    get locale() {
      return locale;
    },
    supported: SUPPORTED.slice(),
    t: t,
    tx: tx,
    ctxSep: CTX_SEP,
    /** 언어 전환 — 사전이 스크립트로 굽혀 있어 재적용은 새로고침이 가장 안전하다.
     *  (이미 그려진 DOM·캔버스 텍스트를 전부 다시 칠하는 것보다 확실하다) */
    setLocale: function (loc) {
      var n = normalize(loc);
      if (!n || n === locale) return false;
      try {
        localStorage.setItem(KEY, n);
      } catch (e) {}
      location.reload();
      return true;
    },
    /** 사전이 실제로 붙었나 — QA 게이트가 본다 */
    ready: function () {
      return locale === "ko" || !!window.__DGL_STRINGS;
    },
    applyDom: applyDom,
  };

  /* ── index.html 안의 정적 한글을 사전으로 바꾼다.
   * ★ 왜 필요한가: 코드모드는 .js 만 고친다. 타이틀 버튼('영업 시작')처럼 HTML 에
   *   직접 박힌 문자열은 아무도 t() 로 감싸주지 않아, 다른 건 다 번역됐는데 그
   *   버튼만 한국어로 남는다(실제로 그렇게 보였다).
   * ★ 안전 장치 두 가지:
   *   1. **정확히 일치**할 때만 바꾼다. 부분 치환을 하면 게임이 나중에 채워 넣는
   *      동적 텍스트까지 건드려 예측 불가가 된다.
   *   2. DOMContentLoaded 시점에 **한 번만** 돈다. 이후 화면은 전부 t() 를 쓰는
   *      JS 가 그리므로 다시 훑을 필요가 없다(매 프레임 DOM 순회는 재앙이다). */
  var ATTRS = ["placeholder", "title", "alt", "aria-label"];
  function applyDom(root) {
    var dict = window.__DGL_STRINGS;
    if (!dict) return 0;
    root = root || document.body;
    if (!root) return 0;
    var n = 0;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node, texts = [];
    while ((node = walker.nextNode())) texts.push(node);
    for (var i = 0; i < texts.length; i++) {
      var t0 = texts[i];
      /* <script>·<style> 안의 텍스트는 코드다 — 건드리면 안 된다 */
      var pn = t0.parentNode && t0.parentNode.nodeName;
      if (pn === "SCRIPT" || pn === "STYLE") continue;
      var raw = t0.nodeValue, key = raw.trim();
      if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) continue;
      var lead = raw.slice(0, raw.indexOf(key));
      var tail = raw.slice(raw.indexOf(key) + key.length);
      t0.nodeValue = lead + (pick(dict[key], []) || key) + tail;
      n++;
    }
    var els = root.querySelectorAll("[" + ATTRS.join("],[") + "]");
    for (var j = 0; j < els.length; j++)
      for (var a = 0; a < ATTRS.length; a++) {
        var v = els[j].getAttribute(ATTRS[a]);
        if (v && Object.prototype.hasOwnProperty.call(dict, v.trim())) {
          els[j].setAttribute(ATTRS[a], pick(dict[v.trim()], []) || v.trim());
          n++;
        }
      }
    return n;
  }

  /* ── 로케일별 로고 이미지로 교체.
   * 메인 로고는 구운 PNG 라 t() 로 번역이 안 된다(루브릭 T10 — 한글 로고를 이미지
   * 생성에 맡기면 획이 깨지므로 폰트로 조판해 굽는다). 그래서 로케일마다 PNG 를
   * 따로 굽고 여기서 src 만 갈아끼운다. 조판 소스 = art/logo/logo-<코드>.html
   * ★ 파일이 없으면 원래 src(한국어)를 그대로 둔다 — onerror 로 폴백해 깨진
   *   이미지 아이콘이 뜨는 일이 없게 한다. */
  function applyLogo() {
    var imgs = document.querySelectorAll("img[data-i18n-logo]");
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i], orig = el.getAttribute("src");
      if (!orig) continue;
      var swapped = orig.replace(/logo\.png$/, "logo-" + locale + ".png");
      if (swapped === orig) continue;
      el.onerror = (function (o) {
        return function () { this.onerror = null; this.src = o; };
      })(orig);
      el.src = swapped;
    }
  }

  if (locale !== "ko") {
    var boot = function () { applyDom(); applyLogo(); };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", boot);
    else boot();
  }

  /* ★ 명시 노출 — 최상위 var 는 window 에 안 붙는다 */
  window.DGLI18N = I18N;
  /* ★ 전역 이름이 t 가 아니라 __t 인 이유 (실제로 터진 버그다)
   *   이 코드베이스는 t 를 지역 변수로 아주 많이 쓴다 — facilities.js 한 파일에만
   *   27곳. 그중 facilities.js 의 facBuyBlock(t) 는 인자 이름이 t 라서,
   *   전역을 t 로 두면 `t('놓을 자리가 없어요')` 가 i18n 이 아니라 **그 인자를**
   *   호출한다("t is not a function"). 스코프마다 가려지는지를 코드모드가 알려면
   *   파서가 필요한데, 이름 하나만 바꾸면 문제 자체가 사라진다.
   *   __t 는 사람이 지역 변수로 쓸 일이 없는 이름이라 충돌이 원천 봉쇄된다. */
  window.__t = t;
  window.__tx = tx;

  /* <html lang> 을 실제 로케일로 — CSS 의 폰트 스택 전환(html[lang=…])과
   * 스크린리더·브라우저 자동번역 판단이 전부 여기에 물린다. */
  document.documentElement.setAttribute("lang", locale);
})();
