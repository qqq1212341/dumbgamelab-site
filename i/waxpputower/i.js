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
function osOf(ua, touch) {
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touch > 1)) return 'ios';
  return /Android/.test(ua) ? 'android' : 'web';
}
function readInvite(search) {
  const c = (/[?&]c=([0-9a-z]{6})(?:&|$)/i.exec(search || '') || [])[1] || '';
  const r = (/[?&]r=([a-z]{4})(?:&|$)/i.exec(search || '') || [])[1] || '';
  const code = c.toUpperCase();
  return { code: /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{6}$/.test(code) ? code : '', room: r.toUpperCase() };
}
function inviteLinks(cfg, code, room) {
  const ref = 'utm_source=invite&utm_medium=friend&utm_content=' + code + (room ? '&dgl_room=' + room : '');
  const play = 'https://play.google.com/store/apps/details?id=' + cfg.pkg + '&referrer=' + encodeURIComponent(ref);
  const ios = cfg.ios ? 'https://apps.apple.com/app/id' + cfg.ios + '?ct=' + encodeURIComponent('invite_' + code) + '&mt=8' : '';
  const q = '?c=' + code + (room ? '&r=' + room : '');
  const intent = 'intent://i' + q + '#Intent;scheme=' + cfg.scheme + ';package=' + cfg.pkg + ';S.browser_fallback_url=' + encodeURIComponent(play) + ';end';
  return { play, ios, intent, clip: code + (room ? '-' + room : '') };
}
var C=window.DGLI,doc=document,$=function(id){return doc.getElementById(id);};
var lang=pickLang(navigator.languages||[navigator.language]),t=C.T[lang]||C.T.en,g=C.titles[lang]||C.titles.en;
var v=readInvite(location.search),os=osOf(navigator.userAgent,navigator.maxTouchPoints||0),L=inviteLinks(C,v.code,v.room);doc.documentElement.lang=lang;
function ga(n,p){try{gtag('event',n,p);}catch(e){}}
function txt(id,s){var e=$(id);if(e)e.textContent=s;}
txt('gt',g.title);txt('gl',g.line);txt('cl',t.code);txt('rl',t.room);txt('go',os==='android'?t.open:t.go);txt('cp',t.copy);txt('s1',t.s1);txt('s2',t.s2);txt('s3',t.s3);
$('pl').href=L.play;if(L.ios)$('as').href=L.ios;else $('as').style.display='none';
if(!v.code){doc.body.className='none';ga('i_view',{i_room:'none',i_found:'no'});return;}
function cells(s){var h='';for(var i=0;i<s.length;i++)h+='<b>'+s[i]+'</b>';return h;}
$('code').innerHTML=cells(v.code);if(v.room)$('room').innerHTML=cells(v.room);else $('rr').style.display='none';
doc.title=g.title+' · '+v.code;ga('i_view',{i_room:v.room?'yes':'no',i_found:'yes'});
function copy(){var done=function(){txt('cp',t.copied);};try{navigator.clipboard.writeText(L.clip).then(done,function(){});}catch(e){}
var a=doc.createElement('textarea');a.value=L.clip;a.setAttribute('readonly','');a.style.position='fixed';a.style.opacity='0';doc.body.appendChild(a);a.select();try{doc.execCommand('copy');done();}catch(e){}doc.body.removeChild(a);}
$('cp').onclick=function(){copy();ga('i_click',{i_store:'copy'});};
$('pl').onclick=function(){copy();ga('i_click',{i_store:'play'});};
$('as').onclick=function(){copy();ga('i_click',{i_store:'ios'});};
$('go').onclick=function(ev){ev.preventDefault();copy();ga('i_click',{i_store:os==='android'?'app':(os==='ios'?'ios':'play')});
if(os==='android'){location.href=L.intent;setTimeout(function(){if(!doc.hidden)location.href=L.play;},1600);}
else location.href=os==='ios'&&L.ios?L.ios:L.play;};})();
