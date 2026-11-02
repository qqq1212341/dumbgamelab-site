"use strict";
/* 매너 고사 — 한 장면에 하나를 고른다 → 엄격한 매너 강사가 바로 도장(매너 OK / 실례입니다) → 5장마다 교시 성적 → 30장 끝에 등급 카드.
 * 기획 = core/concepts/manner-game/REVIEW.md · 장면 = js/scenes.js */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var M = window.MANNER, S = M.scenes;
  var WEB = window.__DGL_WEB || {};
  var PORTAL = !!WEB.portal;
  var URL_BASE = 'https://dumbgamelab.com/play/manner/';
  var NS = 'http://www.w3.org/2000/svg';

  var GRADES = [
    [30, '매너 강사 자격증', '틀린 게 하나도 없네요. 다음 특강은 당신이 하세요.'],
    [26, '비서실 발령', '임원 모시고 다녀도 되겠습니다. 한두 개만 다시 보세요.'],
    [20, '무난한 3년차', '크게 실수는 안 합니다. 회식 자리만 조심하세요.'],
    [13, '수습 연장', '아직 배울 게 많습니다. 다음 주에 다시 보죠.'],
    [6, '인사팀 면담', '내일 아침 인사팀에서 잠깐 보자고 합니다.'],
    [0, '매너 빌런', '오늘 특강, 처음부터 다시 듣겠습니다.']];

  var hints = 3, idx = 0, score = 0, chScore = 0, locked = false, order = [], wrong = [], shareText = '', timer = 0, lastGrade = '';

  /* 소리 — 로컬(파일·localhost)은 무음, 배포 주소에서만 낸다(공장 규칙 «로컬 무음·배포 유음»). 도장 «쿵» · 정답 두 음 · 오답 낮은 부저 */
  var LOUD = /^https:/.test(location.protocol) && !/^(localhost|127\.)/.test(location.hostname), AC = null;
  function tone(f, t0, dur, type, vol) {
    var o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.setValueAtTime(f, AC.currentTime + t0);
    g.gain.setValueAtTime(vol, AC.currentTime + t0); g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + t0 + dur);
    o.connect(g); g.connect(AC.destination); o.start(AC.currentTime + t0); o.stop(AC.currentTime + t0 + dur);
  }
  function sfx(kind) {
    if (!LOUD || document.hidden) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      tone(90, 0, 0.12, 'sine', 0.5);
      if (kind === 'ok') { tone(784, 0.06, 0.14, 'triangle', 0.18); tone(1046, 0.16, 0.22, 'triangle', 0.18); }
      else { tone(196, 0.06, 0.32, 'square', 0.08); tone(185, 0.06, 0.32, 'square', 0.06); }
    } catch (e) {}
  }
  document.addEventListener('visibilitychange', function () { try { if (AC) document.hidden ? AC.suspend() : AC.resume(); } catch (e) {} });

  function track(n, p) { try { if (window.DGL) window.DGL.track(n, p || {}); } catch (e) {} }
  function show(id) { ['s-start', 's-play', 's-ch', 's-result'].forEach(function (s) { $(s).classList.toggle('on', s === id); }); }
  function shuffle(a, seed) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { seed = (seed * 9301 + 49297) % 233280; var j = Math.floor(seed / 233280 * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* 강사 얼굴 — 올림머리·안경·지시봉. mood: 'ok' | 'no' | '' */
  function teacher(mood) {
    var mouth = mood === 'ok' ? '<path d="M24 46 q8 7 16 0" stroke="#2b2f36" stroke-width="3" fill="none" stroke-linecap="round"/>'
      : mood === 'no' ? '<path d="M24 50 q8 -6 16 0" stroke="#2b2f36" stroke-width="3" fill="none" stroke-linecap="round"/>'
      : '<path d="M25 48 h14" stroke="#2b2f36" stroke-width="3" stroke-linecap="round"/>';
    var brow = mood === 'no' ? '<path d="M17 28 l9 4 M47 28 l-9 4" stroke="#2b2f36" stroke-width="3" stroke-linecap="round"/>' : '';
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="9" r="8" fill="#2b2f36"/><circle cx="32" cy="36" r="22" fill="#f6dcc4"/>' +
      '<path d="M10 34 q2 -22 22 -22 q20 0 22 22 q-6 -12 -22 -12 q-16 0 -22 12z" fill="#2b2f36"/>' +
      '<rect x="16" y="32" width="13" height="10" rx="3" fill="none" stroke="#2b2f36" stroke-width="2.5"/><rect x="35" y="32" width="13" height="10" rx="3" fill="none" stroke="#2b2f36" stroke-width="2.5"/>' +
      '<path d="M29 36 h6" stroke="#2b2f36" stroke-width="2.5"/>' + brow + mouth + '</svg>';
  }

  function paintScene() {
    var sc = S[idx], st = $('stage');
    locked = false;
    $('count').textContent = (idx + 1) + ' / ' + S.length;
    $('chap').textContent = M.chapters[sc.ch];
    $('q').textContent = sc.q;
    $('prog').style.transform = 'scaleX(' + (idx / S.length) + ')';
    $('judge').className = 'judge';
    order = shuffle(sc.opts.map(function (o, i) { return i; }), idx * 131 + 7);
    var pins = '';
    order.forEach(function (oi, n) {
      var o = sc.opts[oi];
      pins += '<g class="pin" data-i="' + oi + '" id="pin' + oi + '"><circle class="hit" cx="' + o.x + '" cy="' + o.y + '" r="24"/>' +
        '<circle class="ring" cx="' + o.x + '" cy="' + o.y + '" r="15"/><text x="' + o.x + '" y="' + (o.y + 5) + '" text-anchor="middle">' + (n + 1) + '</text></g>';
    });
    st.innerHTML = '<svg viewBox="0 0 360 280" xmlns="' + NS + '" font-family="inherit">' + sc.draw() + pins + '</svg>';
    var box = $('opts'); box.innerHTML = '';
    order.forEach(function (oi, n) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'opt'; b.dataset.i = oi;
      b.innerHTML = '<b>' + (n + 1) + '</b><span></span>';
      b.lastChild.textContent = sc.opts[oi].t;
      box.appendChild(b);
    });
    st.querySelectorAll('.pin').forEach(function (g) { g.addEventListener('click', function () { pick(+g.dataset.i); }); });
    box.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { pick(+b.dataset.i); }); });
    $('t-face').innerHTML = teacher('');
    paintHint();
  }

  /* 강사 귀띔 — 한 판 3번, 오답 하나를 지운다(앱화 때 보상형 광고 자리) */
  function paintHint() { $('hint-n').textContent = hints; $('hint').disabled = !hints || locked || !$('s-play').classList.contains('on'); }
  function useHint() {
    if (locked || !hints) return;
    var sc = S[idx], left = order.filter(function (i) { return !sc.opts[i].ok && !document.querySelector('.opt.gone[data-i="' + i + '"]'); });
    if (!left.length) return;
    var i = left[left.length - 1]; hints--;
    var b = document.querySelector('.opt[data-i="' + i + '"]'); b.classList.add('gone'); b.disabled = true;
    var p = $('pin' + i); if (p) p.classList.add('dim');
    $('say').textContent = ''; track('hint_use', { scene: idx + 1, left: hints });
    if (left.length <= 1) $('hint').disabled = true;
    paintHint();
  }

  function pick(i) {
    if (locked) return; locked = true;
    var sc = S[idx], o = sc.opts[i], ok = !!o.ok;
    if (document.querySelector('.opt.gone[data-i="' + i + '"]')) { locked = false; return; }
    if (ok) { score++; chScore++; } else wrong.push(idx);
    $('hint').disabled = true;
    track('scene_answer', { scene: idx + 1, ok: ok ? 1 : 0 });
    document.querySelectorAll('.opt').forEach(function (b) {
      var bi = +b.dataset.i; b.disabled = true;
      if (sc.opts[bi].ok) b.classList.add('right'); else if (bi === i) b.classList.add('bad');
    });
    sc.opts.forEach(function (op, k) { var p = $('pin' + k); if (p) p.classList.add(op.ok ? 'right' : (k === i ? 'bad' : 'dim')); });
    $('stamp').textContent = ok ? '매너 OK' : '실례입니다!';
    $('say').textContent = o.say;
    $('t-face').innerHTML = teacher(ok ? 'ok' : 'no');
    $('judge').className = 'judge on ' + (ok ? 'ok' : 'no');
    sfx(ok ? 'ok' : 'no');
    try { if (!ok && navigator.vibrate) navigator.vibrate(60); } catch (e) {}
    clearTimeout(timer);
    timer = setTimeout(next, ok ? 1500 : 2300);
  }

  function next() {
    clearTimeout(timer);
    if (!$('judge').classList.contains('on')) return;
    var ended = idx;
    idx++;
    if (idx >= S.length) return finish();
    if (S[idx].ch !== S[ended].ch) return chapterCard(S[ended].ch);
    paintScene();
  }

  function chapterCard(ch) {
    var n = S.filter(function (s) { return s.ch === ch; }).length;
    $('c-name').textContent = M.chapters[ch];
    $('c-score').textContent = chScore + ' / ' + n;
    $('c-say').textContent = chScore === n ? '이 교시는 완벽합니다.' : chScore >= n - 1 ? '거의 다 왔어요.' : chScore >= 2 ? '절반은 했네요. 다음 교시 갑니다.' : '이 교시는 처음부터 다시 듣는 걸로.';
    $('c-face').innerHTML = teacher(chScore >= n - 1 ? 'ok' : 'no');
    chScore = 0;
    track('chapter_end', { chapter: ch + 1, score: score });
    show('s-ch');
  }

  function gradeOf(s) { for (var i = 0; i < GRADES.length; i++) if (s >= GRADES[i][0]) return GRADES[i]; return GRADES[GRADES.length - 1]; }

  function finish() {
    var g = gradeOf(score); lastGrade = g[1];
    track('game_end', { score: score, grade: g[1] });
    if (PORTAL) track('business_end', {});
    paintResult(); show('s-result');
  }

  function paintResult() {
    var g = gradeOf(score);
    $('r-score').textContent = score;
    $('r-grade').textContent = g[1];
    $('r-say').textContent = g[2];
    $('r-face').innerHTML = teacher(score >= 20 ? 'ok' : 'no');
    var w = wrong.slice(0, 3).map(function (k) { return S[k].q; });
    $('r-wrong').innerHTML = '';
    w.forEach(function (q) { var li = document.createElement('li'); li.textContent = q; $('r-wrong').appendChild(li); });
    $('r-wrong-k').style.display = w.length ? '' : 'none';
    shareText = '매너 고사 30문제 중 ' + score + '개 맞음\n【' + g[1] + '】\n너는 몇 개? ' +
      (PORTAL ? '' : URL_BASE + '?utm_source=share&utm_medium=result&utm_campaign=manner');
  }

  function share() {
    var done = function (m) { $('copy').textContent = '복사했어요'; track('share_result', { score: score, grade: lastGrade, method: m }); setTimeout(function () { $('copy').textContent = '결과 공유하기'; }, 1800); };
    if (navigator.share && !PORTAL) { navigator.share({ text: shareText }).then(function () { done('share'); }, function () {}); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(shareText).then(function () { done('copy'); }, fb); else fb();
    function fb() { var ta = document.createElement('textarea'); ta.value = shareText; ta.style.cssText = 'position:fixed;opacity:0;left:-999px'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done('copy'); }
  }

  function start() {
    idx = 0; score = 0; chScore = 0; wrong = []; hints = 3;
    track('game_start', {});
    if (PORTAL) track('business_start', {});
    show('s-play'); paintScene();
  }

  $('go').addEventListener('click', start);
  $('hint').addEventListener('click', useHint);
  $('judge').addEventListener('click', next);
  $('c-next').addEventListener('click', function () { show('s-play'); paintScene(); });
  $('copy').addEventListener('click', share);
  $('again').addEventListener('click', function () {
    var go = function () { show('s-start'); };
    var ads = PORTAL && window.__DGL_PORTAL && window.__DGL_PORTAL.ads;
    if (!ads) return go();
    var fin = function () { if (fin.d) return; fin.d = 1; go(); };
    setTimeout(fin, 8000);
    try { Promise.resolve(ads.showInterstitial('again')).then(fin, fin); } catch (e) { fin(); }
  });
  $('s-face').innerHTML = teacher('no');
  if (PORTAL) { $('brand').style.display = 'none'; track('title_view', {}); }
  // 촬영·디버그: ?scene=12 장면 바로 · ?fake=24 결과 바로
  var qs = /[?&]scene=(\d+)/.exec(location.search), fk = /[?&]fake=(\d+)/.exec(location.search);
  if (qs) { idx = Math.min(S.length - 1, +qs[1] - 1); show('s-play'); paintScene(); }
  if (fk) { score = Math.min(30, +fk[1]); wrong = [0, 15, 22]; paintResult(); show('s-result'); }
})();
