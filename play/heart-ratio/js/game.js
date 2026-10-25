"use strict";
(function () {
  var URL_BASE = 'https://dumbgamelab.com/play/heart-ratio/';
  var LIMIT = 8000; // 문항당 제한(ms). 시간 초과 = 어린이 쪽(생각할 틈 없이 튀어나온 쪽)

  // w = 문항 가중치. 각 문항의 [어른 선택, 어린이 선택]
  var Q = [
    { w: 1.0,
      ko: ['쉬는 날 아침, 눈 떠 보니 10시.', '일단 씻고 오늘 할 일부터 훑는다', '이불 속에서 폰 켜고 30분 더 뒹군다'],
      ja: ['休みの朝、目が覚めたら10時。', 'まず顔を洗って今日の予定を確認する', '布団の中でスマホを見ながらあと30分ごろごろする'] },
    { w: 1.2,
      ko: ['마트에서 장난감·문구 코너가 보인다.', '필요한 것만 사고 지나간다', '일단 만져 보고 하나쯤 사 간다'],
      ja: ['スーパーでおもちゃ・文房具コーナーが目に入った。', '必要なものだけ買って通り過ぎる', 'とりあえず触ってみて、ひとつは買って帰る'] },
    { w: 1.0,
      ko: ['놀이공원, 제일 큰 놀이기구 대기 90분.', '대기 시간 보고 다른 걸 먼저 탄다', '그래도 이걸 타러 왔으니 선다'],
      ja: ['遊園地、いちばん大きな乗り物は90分待ち。', '待ち時間を見て、先に別のに乗る', 'これに乗りに来たんだから、並ぶ'] },
    { w: 1.1,
      ko: ['친구가 약속에 30분 늦는다.', '괜찮다고 하고 카페에서 할 일을 한다', '"언제 와" 를 세 번 보낸다'],
      ja: ['友だちが約束に30分遅れている。', '大丈夫と伝えて、カフェで用事を済ませる', '「いつ来る？」を3回送る'] },
    { w: 1.3,
      ko: ['치킨 마지막 한 조각이 남았다.', '"먹어" 하고 양보한다', '눈치 보다가 먼저 집는다'],
      ja: ['フライドチキンが最後の1個になった。', '「食べていいよ」と譲る', '様子をうかがってから先に取る'] },
    { w: 0.9,
      ko: ['비 온 뒤, 길에 웅덩이가 있다.', '피해서 얌전히 걷는다', '밟고 간다. 첨벙 소리가 좋으니까'],
      ja: ['雨上がり、道に水たまりがある。', 'よけておとなしく歩く', '踏んで行く。ばしゃっという音がいいから'] },
    { w: 1.2,
      ko: ['자기 전, 알람은 맞췄다.', '불 끄고 바로 잔다', '"한 편만 더" 하다가 새벽 3시'],
      ja: ['寝る前、アラームはセット済み。', '電気を消してすぐ寝る', '「あと1本だけ」と言って午前3時'] },
    { w: 1.1,
      ko: ['모임에서 누가 나를 놀렸다.', '웃어넘기고 나중에 따로 말한다', '그 자리에서 똑같이 받아친다'],
      ja: ['集まりで、誰かにからかわれた。', '笑って流して、あとで個別に話す', 'その場で同じように言い返す'] },
    { w: 1.2,
      ko: ['월급(또는 용돈)이 들어온 날.', '저축부터 빼 둔다', '먹고 싶던 걸 먼저 시킨다'],
      ja: ['給料（またはお小遣い）が入った日。', 'まず貯金を分けておく', '食べたかったものを先に注文する'] },
    { w: 0.9,
      ko: ['엘리베이터에 혼자 탔다.', '조용히 층수만 본다', '거울 보고 표정이든 춤이든 한 번 한다'],
      ja: ['エレベーターにひとりで乗った。', '静かに階数表示を見ている', '鏡に向かって変顔かダンスをひとつやる'] }
  ];

  // child% 구간 → 유형. [상한, 이름, 설명]
  var TIERS = {
    ko: [
      [15, '철근 콘크리트 어른', '감정보다 일정표가 먼저다. 가끔은 이불 속에서 뒹굴어도 세상은 안 무너진다.'],
      [30, '믿음직한 어른', '약속 5분 전에 도착하는 쪽. 속에 어린이가 아직 살고 있으니 가끔 꺼내 주자.'],
      [45, '어른 쪽으로 기운 반반', '평소엔 어른이다. 치킨 마지막 한 조각 앞에서만 빼고.'],
      [55, '정확히 반반', '낮엔 어른, 밤엔 어린이. 둘이 번갈아 운전한다.'],
      [70, '어른인 척하는 어린이', '명함은 어른인데 주머니엔 젤리가 들어 있다.'],
      [85, '만 8세 영혼', '나이는 숫자일 뿐이라는 말을 제일 진지하게 믿는 사람.'],
      [101, '영원한 초등학생', '하교 종소리를 아직 기다린다. 세상에서 제일 잘 노는 사람.']
    ],
    ja: [
      [15, '鉄筋コンクリートの大人', '感情より先に予定表。たまに布団でごろごろしても、世界は壊れない。'],
      [30, '頼れる大人', '約束の5分前に着くタイプ。中の子どもも元気なので、たまには出してあげて。'],
      [45, 'やや大人寄りの半分こ', 'ふだんは大人。フライドチキン最後の1個の前だけは別。'],
      [55, 'きっちり半分こ', '昼は大人、夜は子ども。ふたりが交代で運転している。'],
      [70, '大人のふりをした子ども', '名刺は大人なのに、ポケットにはグミが入っている。'],
      [85, '精神年齢8歳', '年齢は数字だよ、をいちばん真剣に信じている人。'],
      [101, '永遠の小学生', '下校のチャイムをまだ待っている。世界でいちばん遊び上手。']
    ]
  };

  var T = {
    ko: {
      lang: '日本語', title: '내 안의 <em>어른</em>과<br><em>어린이</em>는 몇 대 몇?', sub: '10문제, 약 1분. 생각할 시간은 8초.',
      a: '어른', c: '어린이', go: '시작', note: '가입 없음 · 결과는 공유 글로 복사돼요',
      key: '내 안의 어른 vs 어린이 비율', copy: '결과 복사해서 공유', copied: '복사했어요', again: '다시 하기',
      share: function (a, c, type, url) { return '내 안의 어른 vs 어린이 비율은: 어른 ' + a + '% vs 어린이 ' + c + '%\n【' + type + '】\n너는 몇 대 몇? ' + url; },
      tag: '#어른어린이비율'
    },
    ja: {
      lang: '한국어', title: '心の中の<em>大人</em>と<br><em>子ども</em>は何対何？', sub: '10問・約1分。考える時間は8秒。',
      a: '大人', c: '子ども', go: 'はじめる', note: '登録なし・結果は共有文としてコピーできます',
      key: '心の中の大人と子どもの比重', copy: '結果をコピーして共有', copied: 'コピーしました', again: 'もう一度',
      share: function (a, c, type, url) { return '私の心の中の大人と子どもの比重は：大人 ' + a + '% vs 子ども ' + c + '%\n【' + type + '】\nあなたは何対何？ ' + url; },
      tag: '#大人と子どもの比重'
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var lang = (/^ja/i.test(navigator.language || '') ? 'ja' : 'ko');
  try { var saved = localStorage.getItem('hr_lang'); if (saved === 'ko' || saved === 'ja') lang = saved; } catch (e) {}
  var m = /[?&]lang=(ko|ja)/.exec(location.search); if (m) lang = m[1];

  var idx = 0, childSum = 0, totalSum = 0, startAt = 0, raf = 0, locked = false, shareText = '', lastChild = 0, lastType = '';

  function show(id) {
    ['s-start', 's-play', 's-result'].forEach(function (s) { $(s).classList.toggle('on', s === id); });
  }
  function track(n, p) { try { if (window.DGL) window.DGL.track(n, p || {}); } catch (e) {} }

  function paintStatic() {
    var t = T[lang];
    document.documentElement.lang = lang;
    $('lang').textContent = t.lang;
    $('t-title').innerHTML = t.title; $('t-sub').textContent = t.sub;
    $('b-a').textContent = t.a; $('b-c').textContent = t.c;
    $('go').textContent = t.go; $('t-note').textContent = t.note;
    $('r-k').textContent = t.key; $('copy').textContent = t.copy; $('again').textContent = t.again;
    if ($('s-result').classList.contains('on')) paintResult();
    else if ($('s-play').classList.contains('on')) paintQuestion(true);
  }

  function paintQuestion(keepTimer) {
    var q = Q[idx][lang];
    $('count').textContent = (idx + 1) + ' / ' + Q.length;
    $('q-hint').textContent = '';
    $('q-text').textContent = q[0];
    // 선택지 순서는 문항마다 고정 섞기(왼쪽이 늘 어른이면 패턴이 읽힌다)
    var flip = (idx * 7 + 3) % 2 === 1;
    $('o0').textContent = flip ? q[2] : q[1];
    $('o1').textContent = flip ? q[1] : q[2];
    $('o0').dataset.kid = flip ? '1' : '0';
    $('o1').dataset.kid = flip ? '0' : '1';
    if (!keepTimer) startTimer();
  }

  function startTimer() {
    cancelAnimationFrame(raf);
    startAt = performance.now(); locked = false;
    var bar = $('bar');
    (function tick(now) {
      var p = Math.min(1, (now - startAt) / LIMIT);
      bar.style.transform = 'scaleX(' + (1 - p) + ')';
      if (p >= 1) { answer(1, true); return; }
      raf = requestAnimationFrame(tick);
    })(performance.now());
  }

  function answer(kid, timeout) {
    if (locked) return; locked = true; cancelAnimationFrame(raf);
    var el = Math.min(LIMIT, performance.now() - startAt);
    var fast = 1 - el / LIMIT;                 // 빨리 누를수록 본능 쪽 가중
    var w = Q[idx].w * (1 + 0.25 * fast);
    totalSum += w; if (kid) childSum += w;
    idx++;
    if (idx >= Q.length) return finish();
    paintQuestion(false);
  }

  function tierOf(c) { var L = TIERS[lang]; for (var i = 0; i < L.length; i++) if (c < L[i][0]) return L[i]; return L[L.length - 1]; }

  function finish() {
    lastChild = Math.round((childSum / totalSum) * 1000) / 10;
    track('game_end', { child_pct: lastChild, tier: tierOf(lastChild)[1], lang: lang });
    show('s-result'); paintResult(true);
  }

  function paintResult(animate) {
    var t = T[lang], c = lastChild, a = Math.round((100 - c) * 10) / 10, tr = tierOf(c);
    lastType = tr[1];
    $('r-type').textContent = tr[1]; $('r-desc').textContent = tr[2];
    $('r-a').innerHTML = '<small>' + t.a + '</small>' + a.toFixed(1) + '%';
    $('r-c').innerHTML = '<small>' + t.c + '</small>' + c.toFixed(1) + '%';
    var bar = $('r-bar');
    if (animate) { bar.style.width = '50%'; requestAnimationFrame(function () { requestAnimationFrame(function () { bar.style.width = a + '%'; }); }); }
    else bar.style.width = a + '%';
    shareText = t.share(a.toFixed(1), c.toFixed(1), tr[1], URL_BASE + '?utm_source=share&utm_medium=result&utm_campaign=trend-day-game&lang=' + lang) + ' ' + t.tag;
    $('copy').textContent = t.copy;
  }

  function copy() {
    var done = function () { $('copy').textContent = T[lang].copied; track('share_result', { child_pct: lastChild, tier: lastType, lang: lang, method: 'copy' }); setTimeout(function () { $('copy').textContent = T[lang].copy; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(shareText).then(done, fallback); else fallback();
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = shareText; ta.style.cssText = 'position:fixed;opacity:0;left:-999px';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done();
    }
  }

  function start() {
    idx = 0; childSum = 0; totalSum = 0;
    track('game_start', { lang: lang });
    show('s-play'); paintQuestion(false);
  }

  $('go').addEventListener('click', start);
  $('again').addEventListener('click', function () { show('s-start'); });
  $('copy').addEventListener('click', copy);
  $('o0').addEventListener('click', function () { answer(+this.dataset.kid); });
  $('o1').addEventListener('click', function () { answer(+this.dataset.kid); });
  $('lang').addEventListener('click', function () {
    lang = lang === 'ko' ? 'ja' : 'ko'; try { localStorage.setItem('hr_lang', lang); } catch (e) {}
    paintStatic();
  });
  // 디버그/촬영용: ?fake=0.62 로 결과 화면 바로 보기
  var fk = /[?&]fake=([0-9.]+)/.exec(location.search);
  paintStatic();
  if (fk) { lastChild = Math.round(parseFloat(fk[1]) * 1000) / 10; show('s-result'); paintResult(false); }
})();
