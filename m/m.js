(function(){function pickLang(langs) {
  for (const raw of langs || []) {
    const l = String(raw || '').toLowerCase();
    if (l.startsWith('zh')) return /hant|tw|hk|mo/.test(l) ? 'zh-Hant' : 'zh-Hans';
    const b = l.split('-')[0];
    if (b === 'in') return 'id';
    if (['ko', 'en', 'ja', 'id', 'th', 'vi', 'tr'].includes(b)) return b;
  }
  return 'en';
}
function readCode(pathname, search) {
  const m = /^\/m\/([0-9a-z]{7})\/?$/i.exec(pathname || '');
  const q = /[?&]c=([0-9a-z]{7})/i.exec(search || '');
  const c = ((m && m[1]) || (q && q[1]) || '').toUpperCase();
  return /^[23456789BCDFGHJKMNPQRSTVWXYZ]{7}$/.test(c) ? c : '';
}
function readInv(search) {
  const q = /[?&]i=([0-9a-z]{6})(?:&|$)/i.exec(search || '');
  const c = ((q && q[1]) || '').toUpperCase();
  return /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{6}$/.test(c) ? c : '';
}
function storeLinks(cfg, code, inv) {
  const ref = (inv ? 'utm_source=invite&utm_medium=friend&utm_content=' + inv : 'utm_source=maplink&utm_medium=share&utm_content=' + (code || 'none')) + (code ? '&dgl_map=' + code : '');
  const play = 'https://play.google.com/store/apps/details?id=' + cfg.pkg + '&referrer=' + encodeURIComponent(ref);
  const ios = cfg.ios ? 'https://apps.apple.com/app/id' + cfg.ios + '?ct=' + encodeURIComponent(inv ? 'invite_' + inv : 'map_' + (code || 'none')) + '&mt=8' : '';
  const deep = cfg.scheme + '://m/' + code + (inv ? '?i=' + inv : '');
  const intent = 'intent://m/' + code + (inv ? '?i=' + inv : '') + '#Intent;scheme=' + cfg.scheme + ';package=' + cfg.pkg + ';S.browser_fallback_url=' + encodeURIComponent(play) + ';end';
  return { play, ios, deep, intent };
}
function osOf(ua, touch) {
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touch > 1)) return 'ios';
  return /Android/.test(ua) ? 'android' : 'web';
}
function mapName(names, name, lang) {
  const t = names && names[lang];
  if (!t || !Array.isArray(name) || name.length < 2) return '';
  const a = t.adj[name[0]], n = t.noun[name[1]];
  if (a == null || n == null) return '';
  return t.order === 'na' ? n + t.sep + a : a + t.sep + n;
}
function rateOf(row) {
  return row && row.plays > 0 ? Math.round((100 * row.clears) / row.plays) : -1;
}
var C=window.DGLM,doc=document,$=function(id){return doc.getElementById(id);};
var lang=pickLang(navigator.languages||[navigator.language]),t=C.T[lang]||C.T.en,g=C.titles[lang]||C.titles.en;
var code=readCode(location.pathname,location.search),inv=readInv(location.search),os=osOf(navigator.userAgent,navigator.maxTouchPoints||0);
var L=storeLinks(C,code,inv);doc.documentElement.lang=lang;
function ga(n,p){try{gtag('event',n,p);}catch(e){}}
function txt(id,v){var e=$(id);if(e)e.textContent=v;}
txt('gt',g.title);txt('gl',g.line);txt('go',t.go);txt('cp',t.copy);
$('pl').href=L.play;if(L.ios)$('as').href=L.ios;else $('as').style.display='none';
function intro(){doc.body.className='intro';ga('m_view',{m_code:code||'none',m_found:'no'});}
function copy(){var done=function(){txt('cp',t.copied);};try{navigator.clipboard.writeText(code).then(done,function(){});}catch(e){}
var r=doc.createRange();r.selectNodeContents($('code'));var s=getSelection();s.removeAllRanges();s.addRange(r);try{doc.execCommand('copy');done();}catch(e){}}
$('cp').onclick=function(){copy();ga('m_click',{m_code:code,m_store:'copy'});};
$('pl').onclick=function(){ga('m_click',{m_code:code,m_store:'play'});};
$('as').onclick=function(){ga('m_click',{m_code:code,m_store:'ios'});};
$('go').onclick=function(ev){ev.preventDefault();if(code)copy();ga('m_click',{m_code:code,m_store:'app'});
location.href=os==='android'?L.intent:(os==='ios'&&L.ios?L.ios:L.play);};
if(!code){intro();return;}
var cells='';for(var i=0;i<7;i++)cells+='<b>'+code[i]+'</b>';$('code').innerHTML=cells;
Promise.all([fetch(C.api+'/maps/'+code).then(function(r){return r.json();}),fetch('/m/names.json').then(function(r){return r.json();}).catch(function(){return null;})]).then(function(a){
var m=a[0];if(!m||!m.ok){intro();return;}
var nm=mapName(a[1],m.name,C.nameLang[lang]||lang)||mapName(a[1],m.name,'en');if(nm){txt('nm',nm);doc.title=nm+' · '+code+' — '+g.title;}
var r=rateOf(m);txt('rt',r<0?'':t.rate.replace('{n}',r));$('rt').style.display=r<0?'none':'';
if(m.env&&C.envs.indexOf(m.env)>=0)$('art').src='/m/img/'+m.env+'.jpg';doc.body.className='map';ga('m_view',{m_code:code,m_found:'yes'});
},function(){doc.body.className='map';});})();
