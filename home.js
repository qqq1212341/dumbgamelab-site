// Dumb Game Lab home — logo assembly (same pieces & geometry as the in-game studio splash), sticky nav, scroll reveal.
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // nav: transparent over the hero, solid after scrolling
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('solid', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // logo: 11 pieces fly in and snap into the arch (geometry SOT = core/brand/splash, engine splash.js)
  var PIECES = [
    { n: 'dumb_D', x: 0.0579, y: 0.1232, w: 0.2505, r: -6.2 },
    { n: 'dumb_U', x: 0.2769, y: 0.1130, w: 0.2234, r: -1.8 },
    { n: 'dumb_M', x: 0.4687, y: 0.0939, w: 0.2875, r: 1.6 },
    { n: 'dumb_B', x: 0.7247, y: 0.1271, w: 0.2086, r: 3.8 },
    { n: 'game_G', x: 0.2302, y: 0.3807, w: 0.1585, r: -6.2 },
    { n: 'game_A', x: 0.3685, y: 0.3679, w: 0.1389, r: -1.8 },
    { n: 'game_M', x: 0.4873, y: 0.3562, w: 0.1920, r: 1.6 },
    { n: 'game_E', x: 0.6592, y: 0.3809, w: 0.1298, r: 3.8 },
    { n: 'lab', x: 0.1646, y: 0.5223, w: 0.5959, r: 0 },
    { n: 'flask', x: 0.7113, y: 0.5423, w: 0.1300, r: 0 },
    { n: 'tag', x: 0.1922, y: 0.7528, w: 0.6451, r: 0 }
  ];
  var STAGGER = 90, DUR = 760;
  var stage = document.getElementById('logo');
  var items = [];
  if (stage) {
    var loaded = 0;
    PIECES.forEach(function (p, i) {
      var w = document.createElement('div');
      w.className = 'pc';
      w.style.cssText = 'left:' + p.x * 100 + '%;top:' + p.y * 100 + '%;width:' + p.w * 100 + '%;transform:rotate(' + p.r + 'deg);--d:' + (i * -0.29).toFixed(2) + 's';
      var img = new Image();
      img.alt = ''; img.decoding = 'async';
      img.onload = img.onerror = function () { if (++loaded === PIECES.length) play(); };
      img.src = '/img/logo/' + p.n + '.webp';
      w.appendChild(img); stage.appendChild(w);
      items.push(img);
    });
    stage.addEventListener('click', function () { if (!reduce) play(); });
  }

  function play() {
    stage.classList.remove('idle');
    if (reduce || !Element.prototype.animate) { items.forEach(function (el) { el.style.opacity = 1; }); stage.classList.add('idle'); return; }
    var r = stage.getBoundingClientRect(), cx = r.width / 2, cy = r.height / 2, D = Math.max(r.width, r.height) * 1.1;
    items.forEach(function (el, i) {
      var wr = el.parentNode.getBoundingClientRect();
      var dx = wr.left - r.left + wr.width / 2 - cx, dy = wr.top - r.top + wr.height / 2 - cy;
      var L = Math.hypot(dx, dy) || 1, rot = (i % 2 ? 1 : -1) * (16 + (i * 13) % 26);
      el.animate([
        { transform: 'translate(' + (dx / L * D).toFixed(0) + 'px,' + (dy / L * D).toFixed(0) + 'px) rotate(' + rot + 'deg) scale(.5)', opacity: 0, offset: 0, easing: 'cubic-bezier(.2,.7,.3,1)' },
        { transform: 'translate(0,0) rotate(2deg) scale(1.13)', opacity: 1, offset: .72, easing: 'cubic-bezier(.3,1.5,.6,1)' },
        { transform: 'scale(.95)', opacity: 1, offset: .87 },
        { transform: 'none', opacity: 1, offset: 1 }
      ], { delay: i * STAGGER, duration: DUR, fill: 'both' });
    });
    setTimeout(function () {
      items.forEach(function (el) { el.getAnimations().forEach(function (a) { a.cancel(); }); el.style.opacity = 1; });
      stage.classList.add('idle');
    }, PIECES.length * STAGGER + DUR + 60);
  }

  // scroll reveal
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
