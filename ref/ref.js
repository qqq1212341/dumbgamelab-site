/* ref.js — /ref/ 의존성 없는 작은 스크립트: 허브 탭·필터·검색·정렬·모바일 시트 · 라이트박스(←→·Esc·스와이프) · 영상 재생.
 * JS 가 없어도 모든 게임·화면은 그대로 보인다(필터는 덧붙는 기능). */
(function () {
  'use strict';
  var d = document;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var ICON = { x: '<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z"/>', l: '<path d="m14.6 5 1.4 1.4L10.4 12l5.6 5.6-1.4 1.4L7.6 12z"/>', r: '<path d="m9.4 5 7 7-7 7-1.4-1.4 5.6-5.6L8 6.4z"/>' };
  var svg = function (k) { return '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">' + ICON[k] + '</svg>'; };
  var lang = d.documentElement.lang || 'en';

  /* ── 허브·화면 모음: 탭(화면·게임) · 필터(종류·장르·게임 체크) · 검색 · 정렬 · 모바일 시트 ── */
  var lay = $('.rf-lay');
  if (lay) {
    d.documentElement.classList.add('rf-js');
    var tiles = $$('.rf-tile', lay); var cards = $$('.rf-card', lay);
    tiles.forEach(function (el, i) { el._i = i; }); cards.forEach(function (el, i) { el._i = i; });
    var q = $('[data-rf-search]'); var empty = $('[data-rf-empty]'); var count = $('[data-rf-count]');
    var sel = { kind: {}, genre: {}, game: {} }; var tab = 'screens'; var sort = 'new';
    var has = function (o) { return Object.keys(o).length > 0; };
    var apply = function () {
      var t = (q.value || '').trim().toLowerCase(); var n = 0;
      var inTxt = function (el) { return !t || el.getAttribute('data-q').indexOf(t) >= 0; };
      var inGenre = function (el) { return !has(sel.genre) || sel.genre[el.getAttribute('data-genre')]; };
      tiles.forEach(function (el) { var ok = (!has(sel.kind) || sel.kind[el.getAttribute('data-kind')]) && inGenre(el) && (!has(sel.game) || sel.game[el.getAttribute('data-game')]) && inTxt(el); el.hidden = !ok; if (ok && tab === 'screens') n++; });
      cards.forEach(function (el) { var ok = inGenre(el) && inTxt(el); el.hidden = !ok; if (ok && tab === 'games') n++; });
      empty.hidden = n > 0;
      count.textContent = count.getAttribute(tab === 'games' ? 'data-tpl-g' : 'data-tpl-s').replace('{n}', n).replace('{t}', (tab === 'games' ? cards : tiles).length);
    };
    var reorder = function () {
      [tiles, cards].forEach(function (list) {
        if (!list.length) return; var box = list[0].parentNode;
        list.slice().sort(function (a, b) { return sort === 'name' ? (a.getAttribute('data-name') < b.getAttribute('data-name') ? -1 : a.getAttribute('data-name') > b.getAttribute('data-name') ? 1 : a._i - b._i) : a._i - b._i; }).forEach(function (el) { box.appendChild(el); });
      });
    };
    var setTab = function (v, push) {
      tab = v; lay.setAttribute('data-tab', v);
      $$('[data-panel]', lay).forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== v; });
      $$('[data-tab]', d).forEach(function (a) { if (a.tagName === 'A') { if (a.getAttribute('data-tab') === v) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); } });
      if (push) { try { history.replaceState(null, '', '#' + v); } catch (e) { /* 주소 갱신은 덤 */ } }
      $$('[data-navtab]', d).forEach(function (a) { if (a.getAttribute('data-navtab') === v) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      apply();
    };
    $$('.rf-tabs a', lay).forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); setTab(a.getAttribute('data-tab'), true); }); });
    [['kind', '[data-rf-kinds]'], ['genre', '[data-rf-genres]'], ['game', '[data-rf-games]']].forEach(function (p) {
      var box = $(p[1], lay); if (!box) return;
      box.addEventListener('change', function (e) { var c = e.target; if (c.checked) sel[p[0]][c.value] = 1; else delete sel[p[0]][c.value]; apply(); });
    });
    $$('[data-rf-reset]', lay).forEach(function (b) { b.addEventListener('click', function () { sel = { kind: {}, genre: {}, game: {} }; $$('.rf-opt input', lay).forEach(function (c) { c.checked = false; }); apply(); }); });
    $$('.rf-sort button', lay).forEach(function (b) { b.addEventListener('click', function () { sort = b.getAttribute('data-sort'); $$('.rf-sort button', lay).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); reorder(); }); });
    q.addEventListener('input', apply);
    q.form.addEventListener('submit', function (e) { e.preventDefault(); apply(); });
    d.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((d.activeElement || {}).tagName || '') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); q.focus(); }
    });
    /* 폰 시트 */
    var fab = $('[data-rf-sheet]'); var scrim = $('.rf-scrim');
    var sheet = function (on) { d.body.classList.toggle('rf-sheet-open', on); scrim.hidden = !on; fab.setAttribute('aria-expanded', on ? 'true' : 'false'); if (on) { var f = $('.rf-opt input', lay); if (f) f.focus({ preventScroll: true }); } else fab.focus({ preventScroll: true }); };
    fab.addEventListener('click', function () { sheet(true); });
    $$('[data-rf-close]', d).forEach(function (b) { b.addEventListener('click', function () { sheet(false); }); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && d.body.classList.contains('rf-sheet-open')) sheet(false); });
    try { var sp = new URL(location.href).searchParams; if (sp.get('q')) q.value = sp.get('q'); } catch (e) { /* 무시 */ }
    var fromHash = function () { setTab(location.hash === '#games' ? 'games' : 'screens', false); requestAnimationFrame(function () { window.scrollTo(0, 0); }); };
    window.addEventListener('hashchange', fromHash);
    fromHash();
  } else {
    var q2 = $('[data-rf-search]');
    if (q2) d.addEventListener('keydown', function (e) { if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((d.activeElement || {}).tagName || '') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); q2.focus(); } });
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
    lb.innerHTML = '<button type="button" class="rf-lb-b rf-lb-x" aria-label="' + T.close + '">' + svg('x') + '</button><button type="button" class="rf-lb-b rf-lb-p" aria-label="' + T.prev + '">' + svg('l') + '</button><button type="button" class="rf-lb-b rf-lb-nx" aria-label="' + T.next + '">' + svg('r') + '</button><figure><img alt="" decoding="async"><figcaption class="rf-lb-info"><p class="rf-lb-cap"></p><div class="rf-lb-row"><span class="rf-kc"><i></i><span class="rf-lb-kind"></span></span><span class="rf-lb-n"></span><a class="rf-btn rf-btn-w rf-lb-go" href="#"></a></div></figcaption></figure>';
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
    items = $$('a[data-lb]', scope).filter(function (x) { return !x.closest('[hidden]'); });
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
