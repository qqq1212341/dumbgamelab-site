/* ref.js — /ref/ 의존성 없는 작은 스크립트: 허브 검색·장르 필터 · 화면 필터 · 라이트박스(←→·Esc·스와이프) · 캐러셀 화살표 · 목차 강조 · 영상 재생.
 * JS 가 없어도 모든 게임·화면은 그대로 보인다(필터는 덧붙는 기능). */
(function () {
  'use strict';
  var d = document;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var ICON = { x: '<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z"/>', l: '<path d="m14.6 5 1.4 1.4L10.4 12l5.6 5.6-1.4 1.4L7.6 12z"/>', r: '<path d="m9.4 5 7 7-7 7-1.4-1.4 5.6-5.6L8 6.4z"/>' };
  var svg = function (k) { return '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">' + ICON[k] + '</svg>'; };
  var lang = d.documentElement.lang || 'en';

  /* 칩 한 묶음 = 하나만 켜진다(라디오처럼) */
  function chipGroup(box, attr, onChange) {
    if (!box) return;
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-' + attr + ']'); if (!b) return;
      $$('button', box).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      onChange(b.getAttribute('data-' + attr));
    });
  }

  /* ── 허브: 검색 + 장르 ── */
  var grid = $('[data-rf-grid]');
  if (grid) {
    var q = $('[data-rf-search]'); var genre = ''; var empty = $('[data-rf-empty]');
    var cards = $$('.rf-card', grid);
    var apply = function () {
      var t = (q.value || '').trim().toLowerCase(); var n = 0;
      cards.forEach(function (c) {
        var ok = (!genre || c.getAttribute('data-genre') === genre) && (!t || c.getAttribute('data-q').indexOf(t) >= 0);
        c.hidden = !ok; if (ok) n++;
      });
      empty.hidden = n > 0;
    };
    q.addEventListener('input', apply);
    chipGroup($('[data-rf-genres]'), 'genre', function (v) { genre = v; apply(); });
    d.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((d.activeElement || {}).tagName || '') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); q.focus(); }
    });
  }

  /* ── 화면 모음: 종류 × 게임 ── */
  var tilesBox = $('[data-rf-tiles]');
  if (tilesBox) {
    var tiles = $$('.rf-tile', tilesBox); var kind = ''; var game = '';
    var showing = $('[data-rf-showing]'); var emptyS = $('[data-rf-empty]');
    /* 패싯: 칩 숫자 = 다른 쪽 필터를 건 채 몇 장인가 · 0장 칩은 잠근다(빈 화면으로 가는 길을 막는다) */
    var facet = function (box, attr, other, otherVal) {
      if (!box) return;
      $$('button[data-' + attr + ']', box).forEach(function (b) {
        var v = b.getAttribute('data-' + attr); var c = 0;
        tiles.forEach(function (t) { if ((!v || t.getAttribute('data-' + attr) === v) && (!otherVal || t.getAttribute('data-' + other) === otherVal)) c++; });
        var sm = $('small', b); if (sm) sm.textContent = c;
        b.disabled = !!v && c === 0 && b.getAttribute('aria-pressed') !== 'true';
      });
    };
    var pick = function () {
      var n = 0;
      if (game && kind && !tiles.some(function (t) { return t.getAttribute('data-kind') === kind && t.getAttribute('data-game') === game; })) {
        game = ''; $$('button', $('[data-rf-games]')).forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-game') === '' ? 'true' : 'false'); });
      }
      facet($('[data-rf-kinds]'), 'kind', 'game', game); facet($('[data-rf-games]'), 'game', 'kind', kind);
      tiles.forEach(function (t) { var ok = (!kind || t.getAttribute('data-kind') === kind) && (!game || t.getAttribute('data-game') === game); t.hidden = !ok; if (ok) n++; });
      showing.textContent = showing.getAttribute('data-tpl').replace('{n}', n).replace('{t}', tiles.length);
      emptyS.hidden = n > 0;
      try { var u = new URL(location.href); kind ? u.searchParams.set('kind', kind) : u.searchParams.delete('kind'); game ? u.searchParams.set('game', game) : u.searchParams.delete('game'); history.replaceState(null, '', u); } catch (e) { /* 주소 갱신은 덤 */ }
    };
    chipGroup($('[data-rf-kinds]'), 'kind', function (v) { kind = v; pick(); });
    chipGroup($('[data-rf-games]'), 'game', function (v) { game = v; pick(); });
    try { var sp = new URL(location.href).searchParams; var pre = function (box, attr, v) { var b = v && $('button[data-' + attr + '="' + v.replace(/"/g, '') + '"]', box); if (b) b.click(); }; pre($('[data-rf-kinds]'), 'kind', sp.get('kind')); pre($('[data-rf-games]'), 'game', sp.get('game')); } catch (e) { /* 무시 */ }
    pick();
  }

  /* ── 캐러셀 화살표(마우스용) ── */
  var track = $('.rf-track');
  if (track && $('.rf-car-h')) {
    var box = d.createElement('div'); box.className = 'rf-arrows';
    var mk = function (k, dir, label) { var b = d.createElement('button'); b.type = 'button'; b.className = 'rf-arrow'; b.setAttribute('aria-label', label); b.innerHTML = svg(k); b.addEventListener('click', function () { track.scrollBy({ left: dir * Math.max(300, track.clientWidth * 0.7), behavior: 'smooth' }); }); return b; };
    box.appendChild(mk('l', -1, lang === 'ko' ? '이전 화면' : 'Previous screens')); box.appendChild(mk('r', 1, lang === 'ko' ? '다음 화면' : 'Next screens'));
    $('.rf-car-h').appendChild(box);
  }

  /* ── 목차 강조 ── */
  var toc = $('.rf-toc');
  if (toc && 'IntersectionObserver' in window) {
    var links = $$('a', toc); var map = {};
    links.forEach(function (a) { var el = d.getElementById(a.getAttribute('href').slice(1)); if (el) map[el.id] = a; });
    var cur = null;
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { var a = map[en.target.id]; if (a && a !== cur) { if (cur) cur.classList.remove('rf-on'); a.classList.add('rf-on'); cur = a; if (getComputedStyle(toc).overflowX === 'auto') { toc.scrollTo({ left: Math.max(0, a.offsetLeft - 24), behavior: 'smooth' }); } } } });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { io.observe(d.getElementById(id)); });
  }

  /* ── 영상: 누르면 그 자리에서 유튜브 ── */
  d.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('button[data-yt]'); if (!b) return;
    var f = d.createElement('iframe'); f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-yt') + '?autoplay=1&rel=0';
    f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true; f.title = b.getAttribute('data-title') || 'video';
    b.parentNode.replaceChild(f, b);
  });

  /* ── 라이트박스 ── */
  var items = []; var idx = 0; var lb = null; var lastFocus = null;
  var T = lang === 'ko' ? { close: '닫기', prev: '이전 화면', next: '다음 화면', dlg: '화면 보기' } : { close: 'Close', prev: 'Previous screen', next: 'Next screen', dlg: 'Screen viewer' };
  function build() {
    lb = d.createElement('div'); lb.id = 'rf-lb'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', T.dlg);
    lb.innerHTML = '<button type="button" class="rf-lb-b rf-lb-x" aria-label="' + T.close + '">' + svg('x') + '</button><button type="button" class="rf-lb-b rf-lb-p" aria-label="' + T.prev + '">' + svg('l') + '</button><button type="button" class="rf-lb-b rf-lb-nx" aria-label="' + T.next + '">' + svg('r') + '</button><figure><img alt="" decoding="async"><figcaption class="rf-lb-info"><p class="rf-lb-cap"></p><div class="rf-lb-row"><span class="rf-kc"><i></i><span class="rf-lb-kind"></span></span><span class="rf-lb-n"></span><a class="rf-btn rf-btn-y rf-lb-go" href="#"></a></div></figcaption></figure>';
    d.body.appendChild(lb);
    $('.rf-lb-x', lb).addEventListener('click', close); $('.rf-lb-p', lb).addEventListener('click', function () { go(-1); }); $('.rf-lb-nx', lb).addEventListener('click', function () { go(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.tagName === 'FIGURE') close(); });
    var x0 = null, y0 = 0;
    lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener('touchend', function (e) { if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null; if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? 1 : -1); else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.4) close(); }, { passive: true });
  }
  function show() {
    var a = items[idx]; var im = $('img', lb);
    im.src = a.getAttribute('href'); im.alt = a.getAttribute('data-alt') || ''; im.width = +a.getAttribute('data-w'); im.height = +a.getAttribute('data-h');
    $('.rf-lb-cap', lb).textContent = a.getAttribute('data-cap') || '';
    $('.rf-lb-kind', lb).textContent = a.getAttribute('data-kind') || '';
    $('.rf-lb-n', lb).textContent = (idx + 1) + ' / ' + items.length;
    var go_ = $('.rf-lb-go', lb); go_.href = a.getAttribute('data-url'); go_.textContent = a.getAttribute('data-open') || '';
    $('.rf-lb-p', lb).hidden = $('.rf-lb-nx', lb).hidden = items.length < 2;
    // 이웃 화면을 미리 받아 둔다
    [idx - 1, idx + 1].forEach(function (i) { if (items[i]) { var p = new Image(); p.src = items[i].getAttribute('href'); } });
  }
  function go(n) { if (items.length < 2) return; idx = (idx + n + items.length) % items.length; show(); }
  function open(a) {
    if (!lb) build();
    var scope = a.closest('[data-lb-group]') || d;
    items = $$('a[data-lb]', scope).filter(function (x) { var t = x.closest('.rf-tile'); return !(t && t.hidden); });
    idx = Math.max(0, items.indexOf(a)); lastFocus = d.activeElement;
    show(); lb.hidden = false; d.body.classList.add('rf-lock');
    requestAnimationFrame(function () { lb.classList.add('rf-open'); $('.rf-lb-x', lb).focus(); });
  }
  function close() { if (!lb || lb.hidden) return; lb.classList.remove('rf-open'); lb.hidden = true; d.body.classList.remove('rf-lock'); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  d.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-lb]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault(); open(a);
  });
  d.addEventListener('keydown', function (e) {
    if (!lb || lb.hidden) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') go(-1); else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'Tab') { var f = $$('button:not([hidden]),a[href]', lb); if (!f.length) return; var i = f.indexOf(d.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
  });
})();
