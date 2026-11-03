const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ai-v3-BLoGGM_b.js","./data-BmKDG5tR.js","./sim-D2-sf1X1.js"])))=>i.map(i=>d[i]);
import{_ as xp,s as vp}from"./ai-v3-BLoGGM_b.js";import{M as Nd,B as Ur,C as Jn,a as Or,t as ro,T as Lh,l as yp,s as Mp,r as Sp,n as bp}from"./data-BmKDG5tR.js";import{v as Xi,O as wp,h as Ep,b as Tp,m as Ap,i as Ih,j as Rp,a as Cp,t as Dh,k as Eo}from"./sim-D2-sf1X1.js";import{m as Pp}from"./aimacro-Omnj5zUI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="169",Lp=0,Nh=1,Ip=2,Ud=1,Od=2,Xn=3,ti=0,Kt=1,un=2,Mi=0,Cs=1,Pl=2,Uh=3,Oh=4,Dp=5,Bi=100,Np=101,Up=102,Op=103,Fp=104,kp=200,Bp=201,zp=202,Hp=203,Ll=204,Il=205,Vp=206,Gp=207,Wp=208,Xp=209,qp=210,Yp=211,$p=212,Kp=213,jp=214,Dl=0,Nl=1,Ul=2,Ds=3,Ol=4,Fl=5,kl=6,Bl=7,Hc=0,Zp=1,Jp=2,Qn=0,Qp=1,em=2,tm=3,nm=4,im=5,sm=6,rm=7,Fh="attached",am="detached",Fd=300,Ns=301,Us=302,zl=303,Hl=304,ao=306,Os=1e3,xi=1001,Xa=1002,Ot=1003,kd=1004,ur=1005,Yt=1006,Pa=1007,Kn=1008,ni=1009,Bd=1010,zd=1011,br=1012,Vc=1013,$i=1014,bn=1015,Fr=1016,Gc=1017,Wc=1018,Fs=1020,Hd=35902,Vd=1021,Gd=1022,pn=1023,Wd=1024,Xd=1025,Ps=1026,ks=1027,Xc=1028,qc=1029,qd=1030,Yc=1031,$c=1033,La=33776,Ia=33777,Da=33778,Na=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,$l=37496,Kl=37808,jl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,ac=37819,oc=37820,lc=37821,Ua=36492,cc=36494,hc=36495,Yd=36283,uc=36284,dc=36285,fc=36286,$d=2200,om=2201,lm=2202,wr=2300,Er=2301,To=2302,Ss=2400,bs=2401,qa=2402,Kc=2500,cm=2501,hm=0,Kd=1,pc=2,um=3200,dm=3201,oo=0,fm=1,gi="",mt="srgb",Pt="srgb-linear",jc="display-p3",lo="display-p3-linear",Ya="linear",ut="srgb",$a="rec709",Ka="p3",ts=7680,kh=519,pm=512,mm=513,gm=514,jd=515,_m=516,xm=517,vm=518,ym=519,mc=35044,Bh="300 es",jn=2e3,ja=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const fr=Math.PI/180,Bs=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Zc(s,e){return(s%e+e)%e}function Mm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sm(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function bm(s,e,t,n){return pr(s,e,1-Math.exp(-t*n))}function wm(s,e=1){return e-Math.abs(Zc(s,e*2)-e)}function Em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Am(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rm(s,e){return s+Math.random()*(e-s)}function Cm(s){return s*(.5-Math.random())}function Pm(s){s!==void 0&&(zh=s);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lm(s){return s*fr}function Im(s){return s*Bs}function Dm(s){return(s&s-1)===0&&s!==0}function Nm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Om(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:fr,RAD2DEG:Bs,generateUUID:gn,clamp:Rt,euclideanModulo:Zc,mapLinear:Mm,inverseLerp:Sm,lerp:pr,damp:bm,pingpong:wm,smoothstep:Em,smootherstep:Tm,randInt:Am,randFloat:Rm,randFloatSpread:Cm,seededRandom:Pm,degToRad:Lm,radToDeg:Im,isPowerOfTwo:Dm,ceilPowerOfTwo:Nm,floorPowerOfTwo:Um,setQuaternionFromProperEuler:Om,normalize:lt,denormalize:Sn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],x=i[4],y=i[7],R=i[2],S=i[5],w=i[8];return r[0]=a*_+o*M+l*R,r[3]=a*g+o*x+l*S,r[6]=a*p+o*y+l*w,r[1]=c*_+h*M+u*R,r[4]=c*g+h*x+u*S,r[7]=c*p+h*y+u*w,r[2]=d*_+f*M+m*R,r[5]=d*g+f*x+m*S,r[8]=d*p+f*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new qe;function Zd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fm(){const s=Tr("canvas");return s.style.display="block",s}const Hh={};function Oa(s){s in Hh||(Hh[s]=!0,console.warn(s))}function km(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vh=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Pt]:{transfer:Ya,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mt]:{transfer:ut,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[lo]:{transfer:Ya,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Gh),fromReference:s=>s.applyMatrix3(Vh)},[jc]:{transfer:ut,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gh),fromReference:s=>s.applyMatrix3(Vh).convertLinearToSRGB()}},Hm=new Set([Pt,lo]),Je={enabled:!0,_workingColorSpace:Pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Hm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=js[e].toReference,i=js[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return js[s].primaries},getTransfer:function(s){return s===gi?Ya:js[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(js[e].luminanceCoefficients)}};function Ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ns;class Vm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Tr("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gm=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Co(i[a].image)):r.push(Co(i[a]))}else r=Co(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;class wt extends Ji{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=xi,i=xi,r=Yt,a=Kn,o=pn,l=ni,c=wt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=gn(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Fd;wt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,R=(p+1)/2,S=(h+d)/4,w=(u+_)/4,P=(m+g)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=w/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=P/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Xm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qd extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),S=Math.atan2(R,p*M);g=Math.sin(g*S)/R,o=Math.sin(o*S)/R}const y=o*M;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new I,Wh=new Vt;class Dn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),qr.subVectors(this.max,Zs),is.subVectors(e.a,Zs),ss.subVectors(e.b,Zs),rs.subVectors(e.c,Zs),ai.subVectors(ss,is),oi.subVectors(rs,ss),Ai.subVectors(is,rs);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ai.z,Ai.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ai.z,0,-Ai.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ai.y,Ai.x,0];return!Lo(t,is,ss,rs,qr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,is,ss,rs,qr))?!1:(Yr.crossVectors(ai,oi),t=[Yr.x,Yr.y,Yr.z],Lo(t,is,ss,rs,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,Xr=new Dn,is=new I,ss=new I,rs=new I,ai=new I,oi=new I,Ai=new I,Zs=new I,qr=new I,Yr=new I,Ri=new I;function Lo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ri.fromArray(s,r);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ym=new Dn,Js=new I,Io=new I;class Nn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ym.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Io)),this.expandByPoint(Js.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new I,Do=new I,$r=new I,li=new I,No=new I,Kr=new I,Uo=new I;class co{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Do.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=li.dot(this.direction),l=-li.dot($r),c=li.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Do).addScaledVector($r,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){No.subVectors(t,e),Kr.subVectors(n,e),Uo.crossVectors(No,Kr);let a=this.direction.dot(Uo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(Kr.crossVectors(li,Kr));if(l<0)return null;const c=o*this.direction.dot(No.cross(li));if(c<0||l+c>a)return null;const h=-o*li.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Km)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ci.crossVectors(n,Jt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ci.crossVectors(n,Jt)),ci.normalize(),jr.crossVectors(Jt,ci),i[0]=ci.x,i[4]=jr.x,i[8]=Jt.x,i[1]=ci.y,i[5]=jr.y,i[9]=Jt.y,i[2]=ci.z,i[6]=jr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],x=n[7],y=n[11],R=n[15],S=i[0],w=i[4],P=i[8],C=i[12],v=i[1],b=i[5],N=i[9],D=i[13],F=i[2],X=i[6],B=i[10],q=i[14],V=i[3],he=i[7],re=i[11],le=i[15];return r[0]=a*S+o*v+l*F+c*V,r[4]=a*w+o*b+l*X+c*he,r[8]=a*P+o*N+l*B+c*re,r[12]=a*C+o*D+l*q+c*le,r[1]=h*S+u*v+d*F+f*V,r[5]=h*w+u*b+d*X+f*he,r[9]=h*P+u*N+d*B+f*re,r[13]=h*C+u*D+d*q+f*le,r[2]=m*S+_*v+g*F+p*V,r[6]=m*w+_*b+g*X+p*he,r[10]=m*P+_*N+g*B+p*re,r[14]=m*C+_*D+g*q+p*le,r[3]=M*S+x*v+y*F+R*V,r[7]=M*w+x*b+y*X+R*he,r[11]=M*P+x*N+y*B+R*re,r[15]=M*C+x*D+y*q+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],M=u*g*c-_*d*c+_*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,y=h*_*c-m*u*c+m*o*f-a*_*f-h*o*p+a*u*p,R=m*u*l-h*_*l-m*o*d+a*_*d+h*o*g-a*u*g,S=t*M+n*x+i*y+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=M*w,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*w,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*w,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*w,e[4]=x*w,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*w,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*w,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*w,e[8]=y*w,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*w,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*w,e[12]=R*w,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*w,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*g-t*o*g)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,M=l*c,x=l*h,y=l*u,R=n.x,S=n.y,w=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+y)*R,i[2]=(m-x)*R,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(d+p))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+x)*w,i[9]=(g-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=as.set(i[0],i[1],i[2]).length();const a=as.set(i[4],i[5],i[6]).length(),o=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/r,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=jn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===jn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ja)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=jn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let m,_;if(o===jn)m=(a+r)*u,_=-2*u;else if(o===ja)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new I,vn=new Fe,$m=new I(0,0,0),Km=new I(1,1,1),ci=new I,jr=new I,Jt=new I,Xh=new Fe,qh=new Vt;class En{constructor(e=0,t=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jm=0;const Yh=new I,os=new Vt,Hn=new Fe,Zr=new I,Qs=new I,Zm=new I,Jm=new Vt,$h=new I(1,0,0),Kh=new I(0,1,0),jh=new I(0,0,1),Zh={type:"added"},Qm={type:"removed"},ls={type:"childadded",child:null},Oo={type:"childremoved",child:null};class pt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new I,t=new En,n=new Vt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new qe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Qs,Zr,this.up):Hn.lookAt(Zr,Qs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Hn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new I(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new I,Vn=new I,Fo=new I,Gn=new I,cs=new I,hs=new I,Jh=new I,ko=new I,Bo=new I,zo=new I,Ho=new it,Vo=new it,Go=new it;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yn.subVectors(i,t),Vn.subVectors(n,t),Fo.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Vn),l=yn.dot(Fo),c=Vn.dot(Vn),h=Vn.dot(Fo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ho.setScalar(0),Vo.setScalar(0),Go.setScalar(0),Ho.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,n),Go.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ho,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Vn.subVectors(e,t),yn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;cs.subVectors(i,n),hs.subVectors(r,n),ko.subVectors(e,n);const l=cs.dot(ko),c=hs.dot(ko);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,i);const h=cs.dot(Bo),u=hs.dot(Bo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(cs,a);zo.subVectors(e,r);const f=cs.dot(zo),m=hs.dot(zo);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(hs,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Jh.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Jh,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Wo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Zc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Je.fromWorkingColorSpace(It.copy(this),e),Math.round(Rt(It.r*255,0,255))*65536+Math.round(Rt(It.g*255,0,255))*256+Math.round(Rt(It.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=mt){Je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Jr);const n=pr(hi.h,Jr.h,t),i=pr(hi.s,Jr.s,t),r=pr(hi.l,Jr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new we;we.NAMES=tf;let eg=0;class nn extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Cs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ft extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Qr=new se;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class nf extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sf extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tg=0;const on=new Fe,Xo=new pt,us=new I,Qt=new Dn,er=new Dn,At=new I;class vt extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?sf:nf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Qt.min,er.min),Qt.expandByPoint(At),At.addVectors(Qt.max,er.max),Qt.expandByPoint(At)):(Qt.expandByPoint(er.min),Qt.expandByPoint(er.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),At.add(us)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,d=new se,f=new se,m=new se,_=new I,g=new I;function p(P,C,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const b=1/(f.x*m.y-m.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(b),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(b),o[P].add(_),o[C].add(_),o[v].add(_),l[P].add(g),l[C].add(g),l[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,C=M.length;P<C;++P){const v=M[P],b=v.start,N=v.count;for(let D=b,F=b+N;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new I,y=new I,R=new I,S=new I;function w(P){R.fromBufferAttribute(i,P),S.copy(R);const C=o[P];x.copy(C),x.sub(R.multiplyScalar(R.dot(C))).normalize(),y.crossVectors(S,C);const b=y.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,C=M.length;P<C;++P){const v=M[P],b=v.start,N=v.count;for(let D=b,F=b+N;D<F;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Fe,Ci=new co,ea=new Nn,eu=new I,ta=new I,na=new I,ia=new I,qo=new I,sa=new I,tu=new I,ra=new I;class Ke extends pt{constructor(e=new vt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,e),a?sa.addScaledVector(qo,h):sa.addScaledVector(qo.sub(t),h))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(ea.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ea,eu)===null||Ci.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,R=x;y<R;y+=3){const S=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);i=aa(this,p,e,n,c,h,u,S,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=aa(this,a,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,R=x;y<R;y+=3){const S=y,w=y+1,P=y+2;i=aa(this,p,e,n,c,h,u,S,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=g,x=g+1,y=g+2;i=aa(this,a,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function ng(s,e,t,n,i,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ti,o),l===null)return null;ra.copy(o),ra.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:s}}function aa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ta),s.getVertexPosition(l,na),s.getVertexPosition(c,ia);const h=ng(s,e,t,n,ta,na,ia,tu);if(h){const u=new I;dn.getBarycoord(tu,ta,na,ia,u),i&&(h.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new se)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(ta,na,ia,d.normal),h.face=d,h.barycoord=u}return h}class si extends vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function m(_,g,p,M,x,y,R,S,w,P,C){const v=y/w,b=R/P,N=y/2,D=R/2,F=S/2,X=w+1,B=P+1;let q=0,V=0;const he=new I;for(let re=0;re<B;re++){const le=re*b-D;for(let Ue=0;Ue<X;Ue++){const ke=Ue*v-N;he[_]=ke*M,he[g]=le*x,he[p]=F,c.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[p]=S>0?1:-1,h.push(he.x,he.y,he.z),u.push(Ue/w),u.push(1-re/P),q+=1}}for(let re=0;re<P;re++)for(let le=0;le<w;le++){const Ue=d+le+X*re,ke=d+le+X*(re+1),Y=d+(le+1)+X*(re+1),ne=d+(le+1)+X*re;l.push(Ue,ke,ne),l.push(ke,Y,ne),V+=6}o.addGroup(f,V,C),f+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=zs(s[t]);for(const i in n)e[i]=n[i]}return e}function ig(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const sg={clone:zs,merge:kt};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class af extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,nu=new se,iu=new se;class qt extends af{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class og extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ds,fs,e,t);i.layers=this.layers,this.add(i);const r=new qt(ds,fs,e,t);r.layers=this.layers,this.add(r);const a=new qt(ds,fs,e,t);a.layers=this.layers,this.add(a);const o=new qt(ds,fs,e,t);o.layers=this.layers,this.add(o);const l=new qt(ds,fs,e,t);l.layers=this.layers,this.add(l);const c=new qt(ds,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class of extends wt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lg extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new of(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new si(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Mi});r.uniforms.tEquirect.value=t;const a=new Ke(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Yt),new og(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Yo=new I,cg=new I,hg=new qe;class Oi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yo.subVectors(n,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hg.getNormalMatrix(e),i=this.coplanarPoint(Yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Nn,oa=new I;class Jc{constructor(e=new Oi,t=new Oi,n=new Oi,i=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,g-f,y-p).normalize(),n[1].setComponents(l+r,d+c,g+f,y+p).normalize(),n[2].setComponents(l+a,d+h,g+m,y+M).normalize(),n[3].setComponents(l-a,d-h,g-m,y-M).normalize(),n[4].setComponents(l-o,d-u,g-_,y-x).normalize(),t===jn)n[5].setComponents(l+o,d+u,g+_,y+x).normalize();else if(t===ja)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ug(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class tn extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<c;x++){const y=x*u-r;m.push(y,-M,0),_.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),S=M+1+c*p;f.push(x,y,S),f.push(y,R,S)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:dg,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:yg,batching_vertex:Mg,begin_vertex:Sg,beginnormal_vertex:bg,bsdfs:wg,iridescence_fragment:Eg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Ig,color_pars_vertex:Dg,color_vertex:Ng,common:Ug,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Fg,displacementmap_pars_vertex:kg,displacementmap_vertex:Bg,emissivemap_fragment:zg,emissivemap_pars_fragment:Hg,colorspace_fragment:Vg,colorspace_pars_fragment:Gg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:qg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:s0,envmap_vertex:$g,fog_vertex:Kg,fog_pars_vertex:jg,fog_fragment:Zg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:x0,map_pars_fragment:v0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:b0,morphinstance_vertex:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:k0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:H0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:$0,shadowmap_vertex:K0,shadowmask_pars_fragment:j0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:a_,uv_pars_fragment:o_,uv_pars_vertex:l_,uv_vertex:c_,worldpos_vertex:h_,background_vert:u_,background_frag:d_,backgroundCube_vert:f_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:__,depth_frag:x_,distanceRGBA_vert:v_,distanceRGBA_frag:y_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:b_,linedashed_frag:w_,meshbasic_vert:E_,meshbasic_frag:T_,meshlambert_vert:A_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:P_,meshnormal_vert:L_,meshnormal_frag:I_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:O_,meshtoon_vert:F_,meshtoon_frag:k_,points_vert:B_,points_frag:z_,shadow_vert:H_,shadow_frag:V_,sprite_vert:G_,sprite_frag:W_},fe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Rn={basic:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:kt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:kt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:kt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:kt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:kt([fe.lights,fe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Rn.physical={uniforms:kt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const la={r:0,b:0,g:0},Li=new En,X_=new Fe;function q_(s,e,t,n,i,r,a){const o=new we(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=m(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===ao)?(h===void 0&&(h=new Ke(new si(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:zs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(Li)),h.material.toneMapped=Je.getTransfer(y.colorSpace)!==ut,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ke(new tn(2,2),new ii({name:"BackgroundMaterial",uniforms:zs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(la,rf(s)),n.buffers.color.setClear(la.r,la.g,la.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:g}}function Y_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,b,N,D,F){let X=!1;const B=u(D,N,b);r!==B&&(r=B,c(r.object)),X=f(v,D,N,F),X&&m(v,D,N,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(v,b,N,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,b,N){const D=N.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let X=F[b.id];X===void 0&&(X={},F[b.id]=X);let B=X[D];return B===void 0&&(B=d(l()),X[D]=B),B}function d(v){const b=[],N=[],D=[];for(let F=0;F<t;F++)b[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,b,N,D){const F=r.attributes,X=b.attributes;let B=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){const re=F[V];let le=X[V];if(le===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function m(v,b,N,D){const F={},X=b.attributes;let B=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){let re=X[V];re===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),F[V]=le,B++}r.attributes=F,r.attributesNum=B,r.index=D}function _(){const v=r.newAttributes;for(let b=0,N=v.length;b<N;b++)v[b]=0}function g(v){p(v,0)}function p(v,b){const N=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;N[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),F[v]!==b&&(s.vertexAttribDivisor(v,b),F[v]=b)}function M(){const v=r.newAttributes,b=r.enabledAttributes;for(let N=0,D=b.length;N<D;N++)b[N]!==v[N]&&(s.disableVertexAttribArray(N),b[N]=0)}function x(v,b,N,D,F,X,B){B===!0?s.vertexAttribIPointer(v,b,N,F,X):s.vertexAttribPointer(v,b,N,D,F,X)}function y(v,b,N,D){_();const F=D.attributes,X=N.getAttributes(),B=b.defaultAttributeValues;for(const q in X){const V=X[q];if(V.location>=0){let he=F[q];if(he===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){const re=he.normalized,le=he.itemSize,Ue=e.get(he);if(Ue===void 0)continue;const ke=Ue.buffer,Y=Ue.type,ne=Ue.bytesPerElement,de=Y===s.INT||Y===s.UNSIGNED_INT||he.gpuType===Vc;if(he.isInterleavedBufferAttribute){const oe=he.data,be=oe.stride,Oe=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be,oe.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<V.locationSize;Be++)g(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Be=0;Be<V.locationSize;Be++)x(V.location+Be,le/V.locationSize,Y,re,be*ne,(Oe+le/V.locationSize*Be)*ne,de)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,he.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,le/V.locationSize,Y,re,le*ne,le/V.locationSize*oe*ne,de)}}else if(B!==void 0){const re=B[q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}M()}function R(){P();for(const v in n){const b=n[v];for(const N in b){const D=b[N];for(const F in D)h(D[F].object),delete D[F];delete b[N]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const N in b){const D=b[N];for(const F in D)h(D[F].object),delete D[F];delete b[N]}delete n[v.id]}function w(v){for(const b in n){const N=n[b];if(N[v.id]===void 0)continue;const D=N[v.id];for(const F in D)h(D[F].object),delete D[F];delete N[v.id]}}function P(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function $_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<d.length;_++)t.update(m,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function K_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==pn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:S}}function j_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Oi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,x=M*4;let y=p.clippingState||null;l.value=y,y=h(m,d,x,f);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Z_(s){let e=new WeakMap;function t(a,o){return o===zl?a.mapping=Ns:o===Hl&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zl||o===Hl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kr extends af{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,su=[.125,.215,.35,.446,.526,.582],zi=20,$o=new kr,ru=new we;let Ko=null,jo=0,Zo=0,Jo=!1;const Fi=(1+Math.sqrt(5))/2,ps=1/Fi,au=[new I(-Fi,ps,0),new I(Fi,ps,0),new I(-ps,0,Fi),new I(ps,0,Fi),new I(0,Fi,-ps),new I(0,Fi,ps),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Fr,format:pn,colorSpace:Pt,depthBuffer:!1},i=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J_(r)),this._blurMaterial=Q_(r,e,t)}return i}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=Qn,h.autoClear=!1;const f=new ft({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Ke(new si,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(ru),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ca(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ns||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=au[(i-r-1)%au.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let M=0;for(let w=0;w<zi;++w){const P=w/_,C=Math.exp(-P*P/2);p.push(C),w===0?M+=C:w<g&&(M+=2*C)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-ws?i-x+ws:0),S=4*(this._cubeSize-y);ca(t,R,S,3*y,2*y),l.setRenderTarget(t),l.render(u,$o)}}function J_(s){const e=[],t=[],n=[];let i=s;const r=s-ws+1+su.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ws?l=su[a-s+ws-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let S=0;S<f;S++){const w=S%3*2/3-1,P=S>2?0:-1,C=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(C,_*m*S),x.set(d,g*m*S);const v=[S,S,S,S,S,S];y.set(v,p*m*S)}const R=new vt;R.setAttribute("position",new bt(M,_)),R.setAttribute("uv",new bt(x,g)),R.setAttribute("faceIndex",new bt(y,p)),e.push(R),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lu(s,e,t){const n=new bi(s,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Q_(s,e,t){const n=new Float32Array(zi),i=new I(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function cu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function hu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zl||l===Hl,h=l===Ns||l===Us;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ou(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ou(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Oa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nx(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){const R=M[x+0],S=M[x+1],w=M[x+2];d.push(R,S,S,w,w,R)}}else if(m!==void 0){const M=m.array;_=m.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const R=x+0,S=x+1,w=x+2;d.push(R,S,S,w,w,R)}}else return;const g=new(Zd(d)?sf:nf)(d,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ix(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M];for(let M=0;M<_.length;M++)t.update(p,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rx(s,e,t){const n=new WeakMap,i=new it;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let C=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*R*4*u),w=new Qd(S,y,R,u);w.type=bn,w.needsUpdate=!0;const P=x*4;for(let v=0;v<u;v++){const b=g[v],N=p[v],D=M[v],F=y*R*4*v;for(let X=0;X<b.count;X++){const B=X*P;f===!0&&(i.fromBufferAttribute(b,X),S[F+B+0]=i.x,S[F+B+1]=i.y,S[F+B+2]=i.z,S[F+B+3]=0),m===!0&&(i.fromBufferAttribute(N,X),S[F+B+4]=i.x,S[F+B+5]=i.y,S[F+B+6]=i.z,S[F+B+7]=0),_===!0&&(i.fromBufferAttribute(D,X),S[F+B+8]=i.x,S[F+B+9]=i.y,S[F+B+10]=i.z,S[F+B+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new se(y,R)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ax(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class cf extends wt{constructor(e,t,n,i,r,a,o,l,c,h=Ps){if(h!==Ps&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=$i),n===void 0&&h===ks&&(n=Fs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hf=new wt,uu=new cf(1,1),uf=new Qd,df=new qm,ff=new of,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=du[i];if(r===void 0&&(r=new Float32Array(i),du[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ho(s,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ox(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function ux(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;gu.set(n),s.uniformMatrix2fv(this.addr,!1,gu),Tt(t,n)}}function dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;mu.set(n),s.uniformMatrix3fv(this.addr,!1,mu),Tt(t,n)}}function fx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;pu.set(n),s.uniformMatrix4fv(this.addr,!1,pu),Tt(t,n)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function Sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(uu.compareFunction=jd,r=uu):r=hf,t.setTexture2D(e||r,i)}function bx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||df,i)}function wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ff,i)}function Ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function Tx(s){switch(s){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Ax(s,e){s.uniform1fv(this.addr,e)}function Rx(s,e){const t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function Cx(s,e){const t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function Px(s,e){const t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function Lx(s,e){const t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ix(s,e){const t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dx(s,e){const t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nx(s,e){s.uniform1iv(this.addr,e)}function Ux(s,e){s.uniform2iv(this.addr,e)}function Ox(s,e){s.uniform3iv(this.addr,e)}function Fx(s,e){s.uniform4iv(this.addr,e)}function kx(s,e){s.uniform1uiv(this.addr,e)}function Bx(s,e){s.uniform2uiv(this.addr,e)}function zx(s,e){s.uniform3uiv(this.addr,e)}function Hx(s,e){s.uniform4uiv(this.addr,e)}function Vx(s,e,t){const n=this.cache,i=e.length,r=ho(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||hf,r[a])}function Gx(s,e,t){const n=this.cache,i=e.length,r=ho(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||df,r[a])}function Wx(s,e,t){const n=this.cache,i=e.length,r=ho(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ff,r[a])}function Xx(s,e,t){const n=this.cache,i=e.length,r=ho(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uf,r[a])}function qx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Lx;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Ox;case 35669:case 35673:return Fx;case 5125:return kx;case 36294:return Bx;case 36295:return zx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tx(t.type)}}class $x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qx(t.type)}}class Kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function _u(s,e){s.seq.push(e),s.map[e.id]=e}function jx(s,e,t){const n=s.name,i=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),a=Qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_u(t,c===void 0?new Yx(o,s,e):new $x(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Kx(o),_u(t,u)),t=u}}}class Fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);jx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Zx=37297;let Jx=0;function Qx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ev(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===Ka&&t===$a?n="LinearDisplayP3ToLinearSRGB":e===$a&&t===Ka&&(n="LinearSRGBToLinearDisplayP3"),s){case Pt:case lo:return[n,"LinearTransferOETF"];case mt:case jc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function vu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qx(s.getShaderSource(e),a)}else return i}function tv(s,e){const t=ev(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nv(s,e){let t;switch(e){case Qp:t="Linear";break;case em:t="Reinhard";break;case tm:t="Cineon";break;case nm:t="ACESFilmic";break;case sm:t="AgX";break;case rm:t="Neutral";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ha=new I;function iv(){Je.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function rv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function av(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function dr(s){return s!==""}function yu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(s){return s.replace(ov,cv)}const lv=new Map;function cv(s,e){let t=Xe[e];if(t===void 0){const n=lv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(s){return s.replace(hv,uv)}function uv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function fv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function mv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case Jp:e="ENVMAP_BLENDING_ADD";break}return e}function gv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _v(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dv(t),c=fv(t),h=pv(t),u=mv(t),d=gv(t),f=sv(t),m=rv(r),_=i.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=gc(a),a=yu(a,t),a=Mu(a,t),o=gc(o),o=yu(o,t),o=Mu(o,t),a=Su(a),o=Su(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+g+a,y=M+p+o,R=xu(i,i.VERTEX_SHADER,x),S=xu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(b){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(S).trim();let X=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,S);else{const q=vu(i,R,"vertex"),V=vu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(B=!1);B&&(b.diagnostics={runnable:X,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(R),i.deleteShader(S),P=new Fa(i,_),C=av(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Zx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}let xv=0;class vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yv(e),t.set(e,n)),n}}class yv{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}}function Mv(s,e,t,n,i,r,a){const o=new ef,l=new vv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,N,D,F){const X=D.fog,B=F.geometry,q=v.isMeshStandardMaterial?D.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),he=V&&V.mapping===ao?V.image.height:null,re=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ue=le!==void 0?le.length:0;let ke=0;B.morphAttributes.position!==void 0&&(ke=1),B.morphAttributes.normal!==void 0&&(ke=2),B.morphAttributes.color!==void 0&&(ke=3);let Y,ne,de,oe;if(re){const Xt=Rn[re];Y=Xt.vertexShader,ne=Xt.fragmentShader}else Y=v.vertexShader,ne=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const be=s.getRenderTarget(),Oe=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,Te=!!v.map,J=!!v.matcap,T=!!V,H=!!v.aoMap,ie=!!v.lightMap,Q=!!v.bumpMap,ee=!!v.normalMap,Le=!!v.displacementMap,me=!!v.emissiveMap,L=!!v.metalnessMap,E=!!v.roughnessMap,z=v.anisotropy>0,K=v.clearcoat>0,Z=v.dispersion>0,j=v.iridescence>0,Ae=v.sheen>0,ue=v.transmission>0,ge=z&&!!v.anisotropyMap,Ye=K&&!!v.clearcoatMap,ae=K&&!!v.clearcoatNormalMap,_e=K&&!!v.clearcoatRoughnessMap,He=j&&!!v.iridescenceMap,Ve=j&&!!v.iridescenceThicknessMap,ye=Ae&&!!v.sheenColorMap,Ce=Ae&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,Qe=!!v.specularColorMap,U=!!v.specularIntensityMap,Me=ue&&!!v.transmissionMap,$=ue&&!!v.thicknessMap,te=!!v.gradientMap,xe=!!v.alphaMap,Se=v.alphaTest>0,je=!!v.alphaHash,Mt=!!v.extensions;let Wt=Qn;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Wt=s.toneMapping);const et={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:ne,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Pt,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:J,envMap:T,envMapMode:T&&V.mapping,envMapCubeUVHeight:he,aoMap:H,lightMap:ie,bumpMap:Q,normalMap:ee,displacementMap:f&&Le,emissiveMap:me,normalMapObjectSpace:ee&&v.normalMapType===fm,normalMapTangentSpace:ee&&v.normalMapType===oo,metalnessMap:L,roughnessMap:E,anisotropy:z,anisotropyMap:ge,clearcoat:K,clearcoatMap:Ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:Z,iridescence:j,iridescenceMap:He,iridescenceThicknessMap:Ve,sheen:Ae,sheenColorMap:ye,sheenRoughnessMap:Ce,specularMap:Ne,specularColorMap:Qe,specularIntensityMap:U,transmission:ue,transmissionMap:Me,thicknessMap:$,gradientMap:te,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:je,combine:v.combine,mapUv:Te&&g(v.map.channel),aoMapUv:H&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:Q&&g(v.bumpMap.channel),normalMapUv:ee&&g(v.normalMap.channel),displacementMapUv:Le&&g(v.displacementMap.channel),emissiveMapUv:me&&g(v.emissiveMap.channel),metalnessMapUv:L&&g(v.metalnessMap.channel),roughnessMapUv:E&&g(v.roughnessMap.channel),anisotropyMapUv:ge&&g(v.anisotropyMap.channel),clearcoatMapUv:Ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(v.sheenRoughnessMap.channel),specularMapUv:Ne&&g(v.specularMap.channel),specularColorMapUv:Qe&&g(v.specularColorMap.channel),specularIntensityMapUv:U&&g(v.specularIntensityMap.channel),transmissionMapUv:Me&&g(v.transmissionMap.channel),thicknessMapUv:$&&g(v.thicknessMap.channel),alphaMapUv:xe&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Te||xe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Mt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&v.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function M(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(b,v),y(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const b=_[v.type];let N;if(b){const D=Rn[b];N=sg.clone(D.uniforms)}else N=v.uniforms;return N}function S(v,b){let N;for(let D=0,F=h.length;D<F;D++){const X=h[D];if(X.cacheKey===b){N=X,++N.usedTimes;break}}return N===void 0&&(N=new _v(s,b,v,r),h.push(N)),N}function w(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:R,acquireProgram:S,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:C}}function Sv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function bv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||bv),n.length>1&&n.sort(d||wu),i.length>1&&i.sort(d||wu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function wv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Eu,s.set(n,[a])):i>=r.length?(a=new Eu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ev(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new we};break;case"SpotLight":t={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Tv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Av=0;function Rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cv(s){const e=new Ev,t=Tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Fe,a=new Fe;function o(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,x=0,y=0,R=0,S=0,w=0;c.sort(Rv);for(let C=0,v=c.length;C<v;C++){const b=c[C],N=b.color,D=b.intensity,F=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*D,u+=N.g*D,d+=N.b*D;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],D);w++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=b.shadow.matrix,M++}n.directional[f]=B,f++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(N).multiplyScalar(D),B.distance=F,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[_]=B;const q=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,q.updateMatrices(b),b.castShadow&&S++),n.spotLightMatrix[_]=q.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,y++}_++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(N).multiplyScalar(D),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=B,g++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const q=b.shadow,V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=b.shadow.matrix,x++}n.point[m]=B,m++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(D),B.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=w,n.version=Av++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Tu(s){const e=new Cv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Tu(s),e.set(i,[o])):r>=a.length?(o=new Tu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Lv extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uv(s,e,t){let n=new Jc;const i=new se,r=new se,a=new it,o=new Lv({depthPacking:dm}),l=new Iv,c={},h=t.maxTextureSize,u={[ti]:Kt,[Kt]:ti,[un]:un},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Dv,fragmentShader:Nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new vt;m.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let p=this.type;this.render=function(S,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Mi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==Xn&&this.type===Xn,F=p===Xn&&this.type!==Xn;for(let X=0,B=S.length;X<B;X++){const q=S[X],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const he=V.getFrameExtents();if(i.multiply(he),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,V.mapSize.y=r.y)),V.map===null||D===!0||F===!0){const le=this.type!==Xn?{minFilter:Ot,magFilter:Ot}:{};V.map!==null&&V.map.dispose(),V.map=new bi(i.x,i.y,le),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let le=0;le<re;le++){const Ue=V.getViewport(le);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(a),V.updateMatrices(q,le),n=V.getFrustum(),y(w,P,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Xn&&M(V,P),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(C,v,b)};function M(S,w){const P=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,P,f,_,null)}function x(S,w,P,C){let v=null;const b=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)v=b;else if(v=P.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=v.uuid,D=w.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let X=F[D];X===void 0&&(X=v.clone(),F[D]=X,w.addEventListener("dispose",R)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,C===Xn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=P}return v}function y(S,w,P,C,v){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Xn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const D=e.update(S),F=S.material;if(Array.isArray(F)){const X=D.groups;for(let B=0,q=X.length;B<q;B++){const V=X[B],he=F[V.materialIndex];if(he&&he.visible){const re=x(S,he,C,v);S.onBeforeShadow(s,S,w,P,D,re,V),s.renderBufferDirect(P,null,D,re,S,V),S.onAfterShadow(s,S,w,P,D,re,V)}}}else if(F.visible){const X=x(S,F,C,v);S.onBeforeShadow(s,S,w,P,D,X,null),s.renderBufferDirect(P,null,D,X,S,null),S.onAfterShadow(s,S,w,P,D,X,null)}}const N=S.children;for(let D=0,F=N.length;D<F;D++)y(N[D],w,P,C,v)}function R(S){S.target.removeEventListener("dispose",R);for(const P in c){const C=c[P],v=S.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const Ov={[Dl]:Nl,[Ul]:kl,[Ol]:Bl,[Ds]:Fl,[Nl]:Dl,[kl]:Ul,[Bl]:Ol,[Fl]:Ds};function Fv(s){function e(){let U=!1;const Me=new it;let $=null;const te=new it(0,0,0,0);return{setMask:function(xe){$!==xe&&!U&&(s.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){U=xe},setClear:function(xe,Se,je,Mt,Wt){Wt===!0&&(xe*=Mt,Se*=Mt,je*=Mt),Me.set(xe,Se,je,Mt),te.equals(Me)===!1&&(s.clearColor(xe,Se,je,Mt),te.copy(Me))},reset:function(){U=!1,$=null,te.set(-1,0,0,0)}}}function t(){let U=!1,Me=!1,$=null,te=null,xe=null;return{setReversed:function(Se){Me=Se},setTest:function(Se){Se?de(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(Se){$!==Se&&!U&&(s.depthMask(Se),$=Se)},setFunc:function(Se){if(Me&&(Se=Ov[Se]),te!==Se){switch(Se){case Dl:s.depthFunc(s.NEVER);break;case Nl:s.depthFunc(s.ALWAYS);break;case Ul:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Ol:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case Bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Se}},setLocked:function(Se){U=Se},setClear:function(Se){xe!==Se&&(s.clearDepth(Se),xe=Se)},reset:function(){U=!1,$=null,te=null,xe=null}}}function n(){let U=!1,Me=null,$=null,te=null,xe=null,Se=null,je=null,Mt=null,Wt=null;return{setTest:function(et){U||(et?de(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(et){Me!==et&&!U&&(s.stencilMask(et),Me=et)},setFunc:function(et,Xt,kn){($!==et||te!==Xt||xe!==kn)&&(s.stencilFunc(et,Xt,kn),$=et,te=Xt,xe=kn)},setOp:function(et,Xt,kn){(Se!==et||je!==Xt||Mt!==kn)&&(s.stencilOp(et,Xt,kn),Se=et,je=Xt,Mt=kn)},setLocked:function(et){U=et},setClear:function(et){Wt!==et&&(s.clearStencil(et),Wt=et)},reset:function(){U=!1,Me=null,$=null,te=null,xe=null,Se=null,je=null,Mt=null,Wt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,g=null,p=null,M=null,x=null,y=null,R=null,S=new we(0,0,0),w=0,P=!1,C=null,v=null,b=null,N=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=B>=2);let V=null,he={};const re=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ue=new it().fromArray(re),ke=new it().fromArray(le);function Y(U,Me,$,te){const xe=new Uint8Array(4),Se=s.createTexture();s.bindTexture(U,Se),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<$;je++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Me+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return Se}const ne={};ne[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(s.DEPTH_TEST),r.setFunc(Ds),ie(!1),Q(Nh),de(s.CULL_FACE),T(Mi);function de(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function oe(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function be(U,Me){return h[U]!==Me?(s.bindFramebuffer(U,Me),h[U]=Me,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Me),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Oe(U,Me){let $=d,te=!1;if(U){$=u.get(Me),$===void 0&&($=[],u.set(Me,$));const xe=U.textures;if($.length!==xe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,je=xe.length;Se<je;Se++)$[Se]=s.COLOR_ATTACHMENT0+Se;$.length=xe.length,te=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,te=!0);te&&s.drawBuffers($)}function Be(U){return f!==U?(s.useProgram(U),f=U,!0):!1}const Te={[Bi]:s.FUNC_ADD,[Np]:s.FUNC_SUBTRACT,[Up]:s.FUNC_REVERSE_SUBTRACT};Te[Op]=s.MIN,Te[Fp]=s.MAX;const J={[kp]:s.ZERO,[Bp]:s.ONE,[zp]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[qp]:s.SRC_ALPHA_SATURATE,[Wp]:s.DST_COLOR,[Vp]:s.DST_ALPHA,[Hp]:s.ONE_MINUS_SRC_COLOR,[Il]:s.ONE_MINUS_SRC_ALPHA,[Xp]:s.ONE_MINUS_DST_COLOR,[Gp]:s.ONE_MINUS_DST_ALPHA,[Yp]:s.CONSTANT_COLOR,[$p]:s.ONE_MINUS_CONSTANT_COLOR,[Kp]:s.CONSTANT_ALPHA,[jp]:s.ONE_MINUS_CONSTANT_ALPHA};function T(U,Me,$,te,xe,Se,je,Mt,Wt,et){if(U===Mi){m===!0&&(oe(s.BLEND),m=!1);return}if(m===!1&&(de(s.BLEND),m=!0),U!==Dp){if(U!==_||et!==P){if((g!==Bi||x!==Bi)&&(s.blendEquation(s.FUNC_ADD),g=Bi,x=Bi),et)switch(U){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.ONE,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,M=null,y=null,R=null,S.set(0,0,0),w=0,_=U,P=et}return}xe=xe||Me,Se=Se||$,je=je||te,(Me!==g||xe!==x)&&(s.blendEquationSeparate(Te[Me],Te[xe]),g=Me,x=xe),($!==p||te!==M||Se!==y||je!==R)&&(s.blendFuncSeparate(J[$],J[te],J[Se],J[je]),p=$,M=te,y=Se,R=je),(Mt.equals(S)===!1||Wt!==w)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Wt),S.copy(Mt),w=Wt),_=U,P=!1}function H(U,Me){U.side===un?oe(s.CULL_FACE):de(s.CULL_FACE);let $=U.side===Kt;Me&&($=!$),ie($),U.blending===Cs&&U.transparent===!1?T(Mi):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){C!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),C=U)}function Q(U){U!==Lp?(de(s.CULL_FACE),U!==v&&(U===Nh?s.cullFace(s.BACK):U===Ip?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),v=U}function ee(U){U!==b&&(X&&s.lineWidth(U),b=U)}function Le(U,Me,$){U?(de(s.POLYGON_OFFSET_FILL),(N!==Me||D!==$)&&(s.polygonOffset(Me,$),N=Me,D=$)):oe(s.POLYGON_OFFSET_FILL)}function me(U){U?de(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function L(U){U===void 0&&(U=s.TEXTURE0+F-1),V!==U&&(s.activeTexture(U),V=U)}function E(U,Me,$){$===void 0&&(V===null?$=s.TEXTURE0+F-1:$=V);let te=he[$];te===void 0&&(te={type:void 0,texture:void 0},he[$]=te),(te.type!==U||te.texture!==Me)&&(V!==$&&(s.activeTexture($),V=$),s.bindTexture(U,Me||ne[U]),te.type=U,te.texture=Me)}function z(){const U=he[V];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){Ue.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function ye(U){ke.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function Ce(U,Me){let $=l.get(Me);$===void 0&&($=new WeakMap,l.set(Me,$));let te=$.get(U);te===void 0&&(te=s.getUniformBlockIndex(Me,U.name),$.set(U,te))}function Ne(U,Me){const te=l.get(Me).get(U);o.get(Me)!==te&&(s.uniformBlockBinding(Me,te,U.__bindingPointIndex),o.set(Me,te))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,he={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,g=null,p=null,M=null,x=null,y=null,R=null,S=new we(0,0,0),w=0,P=!1,C=null,v=null,b=null,N=null,D=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:de,disable:oe,bindFramebuffer:be,drawBuffers:Oe,useProgram:Be,setBlending:T,setMaterial:H,setFlipSided:ie,setCullFace:Q,setLineWidth:ee,setPolygonOffset:Le,setScissorTest:me,activeTexture:L,bindTexture:E,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:_e,texImage3D:He,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:ae,texSubImage2D:j,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ve,viewport:ye,reset:Qe}}function Au(s,e,t,n){const i=kv(n);switch(t){case Vd:return s*e;case Wd:return s*e;case Xd:return s*e*2;case Xc:return s*e/i.components*i.byteLength;case qc:return s*e/i.components*i.byteLength;case qd:return s*e*2/i.components*i.byteLength;case Yc:return s*e*2/i.components*i.byteLength;case Gd:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case $c:return s*e*4/i.components*i.byteLength;case La:case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(s,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(s,8)*Math.max(e,8)/2;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ua:case cc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yd:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kv(s){switch(s){case ni:case Bd:return{byteLength:1,components:1};case br:case zd:case Fr:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case $i:case Vc:case bn:return{byteLength:4,components:1};case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,E){return f?new OffscreenCanvas(L,E):Tr("canvas")}function _(L,E,z){let K=1;const Z=me(L);if((Z.width>z||Z.height>z)&&(K=z/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(K*Z.width),Ae=Math.floor(K*Z.height);u===void 0&&(u=m(j,Ae));const ue=E?m(j,Ae):u;return ue.width=j,ue.height=Ae,ue.getContext("2d").drawImage(L,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Ae+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Ot&&L.minFilter!==Yt}function p(L){s.generateMipmap(L)}function M(L,E,z,K,Z=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=E;if(E===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),E===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),E===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),E===s.RGBA){const Ae=Z?Ya:Je.getTransfer(K);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=Ae===ut?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(L,E){let z;return L?E===null||E===$i||E===Fs?z=s.DEPTH24_STENCIL8:E===bn?z=s.DEPTH32F_STENCIL8:E===br&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$i||E===Fs?z=s.DEPTH_COMPONENT24:E===bn?z=s.DEPTH_COMPONENT32F:E===br&&(z=s.DEPTH_COMPONENT16),z}function y(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ot&&L.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&h.delete(E)}function S(L){const E=L.target;E.removeEventListener("dispose",S),C(E)}function w(L){const E=n.get(L);if(E.__webglInit===void 0)return;const z=L.source,K=d.get(z);if(K){const Z=K[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(L),Object.keys(K).length===0&&d.delete(z)}n.remove(L)}function P(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const z=L.source,K=d.get(z);delete K[E.__cacheKey],a.memory.textures--}function C(L){const E=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Z=0;Z<E.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=L.textures;for(let K=0,Z=z.length;K<Z;K++){const j=n.get(z[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[K])}n.remove(L)}let v=0;function b(){v=0}function N(){const L=v;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),v+=1,L}function D(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function F(L,E){const z=n.get(L);if(L.isVideoTexture&&ee(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(z,L,E);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function X(L,E){const z=n.get(L);if(L.version>0&&z.__version!==L.version){ke(z,L,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function B(L,E){const z=n.get(L);if(L.version>0&&z.__version!==L.version){ke(z,L,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function q(L,E){const z=n.get(L);if(L.version>0&&z.__version!==L.version){Y(z,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const V={[Os]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[Xa]:s.MIRRORED_REPEAT},he={[Ot]:s.NEAREST,[kd]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},re={[pm]:s.NEVER,[ym]:s.ALWAYS,[mm]:s.LESS,[jd]:s.LEQUAL,[gm]:s.EQUAL,[vm]:s.GEQUAL,[_m]:s.GREATER,[xm]:s.NOTEQUAL};function le(L,E){if(E.type===bn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===Pa||E.magFilter===ur||E.magFilter===Kn||E.minFilter===Yt||E.minFilter===Pa||E.minFilter===ur||E.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,V[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,V[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,V[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,he[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ot||E.minFilter!==ur&&E.minFilter!==Kn||E.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(L,E){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const K=E.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const j=D(E);if(j!==L.__cacheKey){Z[j]===void 0&&(Z[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[j].usedTimes++;const Ae=Z[L.__cacheKey];Ae!==void 0&&(Z[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(E)),L.__cacheKey=j,L.__webglTexture=Z[j].texture}return z}function ke(L,E,z){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Ue(L,E),j=E.source;t.bindTexture(K,L.__webglTexture,s.TEXTURE0+z);const Ae=n.get(j);if(j.version!==Ae.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const ue=Je.getPrimaries(Je.workingColorSpace),ge=E.colorSpace===gi?null:Je.getPrimaries(E.colorSpace),Ye=E.colorSpace===gi||ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ae=_(E.image,!1,i.maxTextureSize);ae=Le(E,ae);const _e=r.convert(E.format,E.colorSpace),He=r.convert(E.type);let Ve=M(E.internalFormat,_e,He,E.colorSpace,E.isVideoTexture);le(K,E);let ye;const Ce=E.mipmaps,Ne=E.isVideoTexture!==!0,Qe=Ae.__version===void 0||Z===!0,U=j.dataReady,Me=y(E,ae);if(E.isDepthTexture)Ve=x(E.format===ks,E.type),Qe&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Ve,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ae.width,ae.height,0,_e,He,null));else if(E.isDataTexture)if(Ce.length>0){Ne&&Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,Ce[0].width,Ce[0].height);for(let $=0,te=Ce.length;$<te;$++)ye=Ce[$],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(s.TEXTURE_2D,$,Ve,ye.width,ye.height,0,_e,He,ye.data);E.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,ae.width,ae.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,He,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,ae.width,ae.height,0,_e,He,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ve,Ce[0].width,Ce[0].height,ae.depth);for(let $=0,te=Ce.length;$<te;$++)if(ye=Ce[$],E.format!==pn)if(_e!==null)if(Ne){if(U)if(E.layerUpdates.size>0){const xe=Au(ye.width,ye.height,E.format,E.type);for(const Se of E.layerUpdates){const je=ye.data.subarray(Se*xe/ye.data.BYTES_PER_ELEMENT,(Se+1)*xe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,Se,ye.width,ye.height,1,_e,je,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ae.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ve,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ae.depth,_e,He,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ve,ye.width,ye.height,ae.depth,0,_e,He,ye.data)}else{Ne&&Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,Ce[0].width,Ce[0].height);for(let $=0,te=Ce.length;$<te;$++)ye=Ce[$],E.format!==pn?_e!==null?Ne?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(s.TEXTURE_2D,$,Ve,ye.width,ye.height,0,_e,He,ye.data)}else if(E.isDataArrayTexture)if(Ne){if(Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ve,ae.width,ae.height,ae.depth),U)if(E.layerUpdates.size>0){const $=Au(ae.width,ae.height,E.format,E.type);for(const te of E.layerUpdates){const xe=ae.data.subarray(te*$/ae.data.BYTES_PER_ELEMENT,(te+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,_e,He,xe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(E.isData3DTexture)Ne?(Qe&&t.texStorage3D(s.TEXTURE_3D,Me,Ve,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(E.isFramebufferTexture){if(Qe)if(Ne)t.texStorage2D(s.TEXTURE_2D,Me,Ve,ae.width,ae.height);else{let $=ae.width,te=ae.height;for(let xe=0;xe<Me;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ve,$,te,0,_e,He,null),$>>=1,te>>=1}}else if(Ce.length>0){if(Ne&&Qe){const $=me(Ce[0]);t.texStorage2D(s.TEXTURE_2D,Me,Ve,$.width,$.height)}for(let $=0,te=Ce.length;$<te;$++)ye=Ce[$],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,_e,He,ye):t.texImage2D(s.TEXTURE_2D,$,Ve,_e,He,ye);E.generateMipmaps=!1}else if(Ne){if(Qe){const $=me(ae);t.texStorage2D(s.TEXTURE_2D,Me,Ve,$.width,$.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,He,ae)}else t.texImage2D(s.TEXTURE_2D,0,Ve,_e,He,ae);g(E)&&p(K),Ae.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Y(L,E,z){if(E.image.length!==6)return;const K=Ue(L,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+z);const j=n.get(Z);if(Z.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+z);const Ae=Je.getPrimaries(Je.workingColorSpace),ue=E.colorSpace===gi?null:Je.getPrimaries(E.colorSpace),ge=E.colorSpace===gi||Ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Ye&&!ae?_e[te]=_(E.image[te],!0,i.maxCubemapSize):_e[te]=ae?E.image[te].image:E.image[te],_e[te]=Le(E,_e[te]);const He=_e[0],Ve=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Ce=M(E.internalFormat,Ve,ye,E.colorSpace),Ne=E.isVideoTexture!==!0,Qe=j.__version===void 0||K===!0,U=Z.dataReady;let Me=y(E,He);le(s.TEXTURE_CUBE_MAP,E);let $;if(Ye){Ne&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ce,He.width,He.height);for(let te=0;te<6;te++){$=_e[te].mipmaps;for(let xe=0;xe<$.length;xe++){const Se=$[xe];E.format!==pn?Ve!==null?Ne?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Se.width,Se.height,Ve,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Se.width,Se.height,Ve,ye,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ce,Se.width,Se.height,0,Ve,ye,Se.data)}}}else{if($=E.mipmaps,Ne&&Qe){$.length>0&&Me++;const te=me(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ce,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ve,ye,_e[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,_e[te].width,_e[te].height,0,Ve,ye,_e[te].data);for(let xe=0;xe<$.length;xe++){const je=$[xe].image[te].image;Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,je.width,je.height,Ve,ye,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ce,je.width,je.height,0,Ve,ye,je.data)}}else{Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ve,ye,_e[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,Ve,ye,_e[te]);for(let xe=0;xe<$.length;xe++){const Se=$[xe];Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ve,ye,Se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ce,Ve,ye,Se.image[te])}}}g(E)&&p(s.TEXTURE_CUBE_MAP),j.__version=Z.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ne(L,E,z,K,Z,j){const Ae=r.convert(z.format,z.colorSpace),ue=r.convert(z.type),ge=M(z.internalFormat,Ae,ue,z.colorSpace);if(!n.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>j),_e=Math.max(1,E.height>>j);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ge,ae,_e,E.depth,0,Ae,ue,null):t.texImage2D(Z,j,ge,ae,_e,0,Ae,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Q(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(z).__webglTexture,0,ie(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(z).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(L,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const K=E.depthTexture,Z=K&&K.isDepthTexture?K.type:null,j=x(E.stencilBuffer,Z),Ae=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=ie(E);Q(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,j,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,j,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,L)}else{const K=E.textures;for(let Z=0;Z<K.length;Z++){const j=K[Z],Ae=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),ge=M(j.internalFormat,Ae,ue,j.colorSpace),Ye=ie(E);z&&Q(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ge,E.width,E.height):Q(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const K=n.get(E.depthTexture).__webglTexture,Z=ie(E);if(E.depthTexture.format===Ps)Q(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(E.depthTexture.format===ks)Q(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(L){const E=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=K}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,L)}else if(z){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),de(E.__webglDepthbuffer[K],L,!1);else{const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),de(E.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(L,E,z){const K=n.get(L);E!==void 0&&ne(K.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&be(L)}function Be(L){const E=L.texture,z=n.get(L),K=n.get(E);L.addEventListener("dispose",S);const Z=L.textures,j=L.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let ge=0;ge<E.mipmaps.length;ge++)z.__webglFramebuffer[ue][ge]=s.createFramebuffer()}else z.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)z.__webglFramebuffer[ue]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ue=0,ge=Z.length;ue<ge;ue++){const Ye=n.get(Z[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Q(L)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ge=Z[ue];z.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Ye=r.convert(ge.format,ge.colorSpace),ae=r.convert(ge.type),_e=M(ge.internalFormat,Ye,ae,ge.colorSpace,L.isXRRenderTarget===!0),He=ie(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,_e,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),de(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),le(s.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(z.__webglFramebuffer[ue][ge],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ne(z.__webglFramebuffer[ue],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,ge=Z.length;ue<ge;ue++){const Ye=Z[ue],ae=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),le(s.TEXTURE_2D,Ye),ne(z.__webglFramebuffer,L,Ye,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),g(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),le(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(z.__webglFramebuffer[ge],L,E,s.COLOR_ATTACHMENT0,ue,ge);else ne(z.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,ue,0);g(E)&&p(ue),t.unbindTexture()}L.depthBuffer&&be(L)}function Te(L){const E=L.textures;for(let z=0,K=E.length;z<K;z++){const Z=E[z];if(g(Z)){const j=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ae=n.get(Z).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const J=[],T=[];function H(L){if(L.samples>0){if(Q(L)===!1){const E=L.textures,z=L.width,K=L.height;let Z=s.COLOR_BUFFER_BIT;const j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(L),ue=E.length>1;if(ue)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Ye=n.get(E[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,Z,s.NEAREST),l===!0&&(J.length=0,T.length=0,J.push(s.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(J.push(j),T.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,T)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Ye=n.get(E[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ie(L){return Math.min(i.maxSamples,L.samples)}function Q(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ee(L){const E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Le(L,E){const z=L.colorSpace,K=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Pt&&z!==gi&&(Je.getTransfer(z)===ut?(K!==pn||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Oe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Q}function zv(s,e){function t(n,i=gi){let r;const a=Je.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return s.BYTE;if(n===zd)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===Vc)return s.INT;if(n===$i)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Fr)return s.HALF_FLOAT;if(n===Vd)return s.ALPHA;if(n===Gd)return s.RGB;if(n===pn)return s.RGBA;if(n===Wd)return s.LUMINANCE;if(n===Xd)return s.LUMINANCE_ALPHA;if(n===Ps)return s.DEPTH_COMPONENT;if(n===ks)return s.DEPTH_STENCIL;if(n===Xc)return s.RED;if(n===qc)return s.RED_INTEGER;if(n===qd)return s.RG;if(n===Yc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===La||n===Ia||n===Da||n===Na)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kl||n===jl||n===Zl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ql)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===cc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yd||n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Hv extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vv={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:Gv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qv extends Ji{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new Xv,g=t.getContextAttributes();let p=null,M=null;const x=[],y=[],R=new se;let S=null;const w=new qt;w.layers.enable(1),w.viewport=new it;const P=new qt;P.layers.enable(2),P.viewport=new it;const C=[w,P],v=new Hv;v.layers.enable(1),v.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new el,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new el,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new el,x[Y]=ne),ne.getHandSpace()};function D(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,x[Y].disconnect(ne))}b=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new bi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,de=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?ks:Ps,de=g.stencil?Fs:$i);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new bi(d.textureWidth,d.textureHeight,{format:pn,type:ni,depthTexture:new cf(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let ne=0;ne<Y.removed.length;ne++){const de=Y.removed[ne],oe=y.indexOf(de);oe>=0&&(y[oe]=null,x[oe].disconnect(de))}for(let ne=0;ne<Y.added.length;ne++){const de=Y.added[ne];let oe=y.indexOf(de);if(oe===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=y.length){y.push(de),oe=Oe;break}else if(y[Oe]===null){y[Oe]=de,oe=Oe;break}if(oe===-1)break}const be=x[oe];be&&be.connect(de)}}const B=new I,q=new I;function V(Y,ne,de){B.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const oe=B.distanceTo(q),be=ne.projectionMatrix.elements,Oe=de.projectionMatrix.elements,Be=be[14]/(be[10]-1),Te=be[14]/(be[10]+1),J=(be[9]+1)/be[5],T=(be[9]-1)/be[5],H=(be[8]-1)/be[0],ie=(Oe[8]+1)/Oe[0],Q=Be*H,ee=Be*ie,Le=oe/(-H+ie),me=Le*-H;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(me),Y.translateZ(Le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const L=Be+Le,E=Te+Le,z=Q-me,K=ee+(oe-me),Z=J*Te/E*L,j=T*Te/E*L;Y.projectionMatrix.makePerspective(z,K,Z,j,L,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ne=Y.near,de=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),v.near=P.near=w.near=ne,v.far=P.far=w.far=de,(b!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far);const oe=Y.parent,be=v.cameras;he(v,oe);for(let Oe=0;Oe<be.length;Oe++)he(be[Oe],oe);be.length===2?V(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),re(Y,v,oe)};function re(Y,ne,de){de===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let le=null;function Ue(Y,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let oe=!1;de.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Oe=0;Oe<de.length;Oe++){const Be=de[Oe];let Te=null;if(f!==null)Te=f.getViewport(Be);else{const T=u.getViewSubImage(d,Be);Te=T.viewport,Oe===0&&(e.setRenderTargetTextures(M,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(M))}let J=C[Oe];J===void 0&&(J=new qt,J.layers.enable(Oe),J.viewport=new it,C[Oe]=J),J.matrix.fromArray(Be.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Be.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Te.x,Te.y,Te.width,Te.height),Oe===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(J)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Oe=u.getDepthInformation(de[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let de=0;de<x.length;de++){const oe=y[de],be=x[de];oe!==null&&be!==void 0&&be.update(oe,ne,c||a)}le&&le(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const ke=new lf;ke.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const Ii=new En,Yv=new Fe;function $v(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(Ii)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",g));const R=x.program;n.updateUBOMapping(M,R);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){const x=u();M.__bindingPointIndex=x;const y=s.createBuffer(),R=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,w=y.length;S<w;S++){const P=Array.isArray(y[S])?y[S]:[y[S]];for(let C=0,v=P.length;C<v;C++){const b=P[C];if(f(b,S,C,R)===!0){const N=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let F=0;for(let X=0;X<D.length;X++){const B=D[X],q=_(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+F,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,y,R){const S=M.value,w=x+"_"+y;if(R[w]===void 0)return typeof S=="number"||typeof S=="boolean"?R[w]=S:R[w]=S.clone(),!0;{const P=R[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return R[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(M){const x=M.uniforms;let y=0;const R=16;for(let w=0,P=x.length;w<P;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=C.length;v<b;v++){const N=C[v],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,X=D.length;F<X;F++){const B=D[F],q=_(B),V=y%R,he=V%q.boundary,re=V+he;y+=he,re!==0&&R-re<q.storage&&(y+=R-re),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=q.storage}}}const S=y%R;return S>0&&(y+=R-S),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class jv{constructor(e={}){const{canvas:t=Fm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let y=!1,R=0,S=0,w=null,P=-1,C=null;const v=new it,b=new it;let N=null;const D=new we(0);let F=0,X=t.width,B=t.height,q=1,V=null,he=null;const re=new it(0,0,X,B),le=new it(0,0,X,B);let Ue=!1;const ke=new Jc;let Y=!1,ne=!1;const de=new Fe,oe=new Fe,be=new I,Oe=new it,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function J(){return w===null?q:1}let T=n;function H(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),T===null){const O="webgl2";if(T=H(O,A),T===null)throw H(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,Q,ee,Le,me,L,E,z,K,Z,j,Ae,ue,ge,Ye,ae,_e,He,Ve,ye,Ce,Ne,Qe,U;function Me(){ie=new tx(T),ie.init(),Ne=new zv(T,ie),Q=new K_(T,ie,e,Ne),ee=new Fv(T),Q.reverseDepthBuffer&&ee.buffers.depth.setReversed(!0),Le=new sx(T),me=new Sv,L=new Bv(T,ie,ee,me,Q,Ne,Le),E=new Z_(x),z=new ex(x),K=new ug(T),Qe=new Y_(T,K),Z=new nx(T,K,Le,Qe),j=new ax(T,Z,K,Le),Ve=new rx(T,Q,L),ae=new j_(me),Ae=new Mv(x,E,z,ie,Q,Qe,ae),ue=new $v(x,me),ge=new wv,Ye=new Pv(ie),He=new q_(x,E,z,ee,j,d,l),_e=new Uv(x,j,Q),U=new Kv(T,Le,Q,ee),ye=new $_(T,ie,Le),Ce=new ix(T,ie,Le),Le.programs=Ae.programs,x.capabilities=Q,x.extensions=ie,x.properties=me,x.renderLists=ge,x.shadowMap=_e,x.state=ee,x.info=Le}Me();const $=new qv(x,T);this.xr=$,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(X,B,!1))},this.getSize=function(A){return A.set(X,B)},this.setSize=function(A,O,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,B=O,t.width=Math.floor(A*q),t.height=Math.floor(O*q),G===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*q,B*q).floor()},this.setDrawingBufferSize=function(A,O,G){X=A,B=O,q=G,t.width=Math.floor(A*G),t.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,O,G,W){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,G,W),ee.viewport(v.copy(re).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,O,G,W){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,O,G,W),ee.scissor(b.copy(le).multiplyScalar(q).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){ee.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(A=!0,O=!0,G=!0){let W=0;if(A){let k=!1;if(w!==null){const ce=w.texture.format;k=ce===$c||ce===Yc||ce===qc}if(k){const ce=w.texture.type,ve=ce===ni||ce===$i||ce===br||ce===Fs||ce===Gc||ce===Wc,Re=He.getClearColor(),Pe=He.getClearAlpha(),Ge=Re.r,We=Re.g,Ie=Re.b;ve?(f[0]=Ge,f[1]=We,f[2]=Ie,f[3]=Pe,T.clearBufferuiv(T.COLOR,0,f)):(m[0]=Ge,m[1]=We,m[2]=Ie,m[3]=Pe,T.clearBufferiv(T.COLOR,0,m))}else W|=T.COLOR_BUFFER_BIT}O&&(W|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ge.dispose(),Ye.dispose(),me.dispose(),E.dispose(),z.dispose(),j.dispose(),Qe.dispose(),U.dispose(),Ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",bh),$.removeEventListener("sessionend",wh),Ti.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Le.autoReset,O=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,k=_e.type;Me(),Le.autoReset=A,_e.enabled=O,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=k}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const O=A.target;O.removeEventListener("dispose",je),Mt(O)}function Mt(A){Wt(A),me.remove(A)}function Wt(A){const O=me.get(A).programs;O!==void 0&&(O.forEach(function(G){Ae.releaseProgram(G)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,W,k,ce){O===null&&(O=Be);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Re=pp(A,O,G,W,k);ee.setMaterial(W,ve);let Pe=G.index,Ge=1;if(W.wireframe===!0){if(Pe=Z.getWireframeAttribute(G),Pe===void 0)return;Ge=2}const We=G.drawRange,Ie=G.attributes.position;let ot=We.start*Ge,ht=(We.start+We.count)*Ge;ce!==null&&(ot=Math.max(ot,ce.start*Ge),ht=Math.min(ht,(ce.start+ce.count)*Ge)),Pe!==null?(ot=Math.max(ot,0),ht=Math.min(ht,Pe.count)):Ie!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,Ie.count));const _t=ht-ot;if(_t<0||_t===1/0)return;Qe.setup(k,W,Re,G,Pe);let jt,st=ye;if(Pe!==null&&(jt=K.get(Pe),st=Ce,st.setIndex(jt)),k.isMesh)W.wireframe===!0?(ee.setLineWidth(W.wireframeLinewidth*J()),st.setMode(T.LINES)):st.setMode(T.TRIANGLES);else if(k.isLine){let De=W.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*J()),k.isLineSegments?st.setMode(T.LINES):k.isLineLoop?st.setMode(T.LINE_LOOP):st.setMode(T.LINE_STRIP)}else k.isPoints?st.setMode(T.POINTS):k.isSprite&&st.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)st.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Ct=k._multiDrawCounts,rt=k._multiDrawCount,_n=Pe?K.get(Pe).bytesPerElement:1,es=me.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)es.setValue(T,"_gl_DrawID",Zt),st.render(De[Zt]/_n,Ct[Zt])}else if(k.isInstancedMesh)st.renderInstances(ot,_t,k.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ct=Math.min(G.instanceCount,De);st.renderInstances(ot,_t,Ct)}else st.render(ot,_t)};function et(A,O,G){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,Wr(A,O,G),A.side=ti,A.needsUpdate=!0,Wr(A,O,G),A.side=un):Wr(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),g=Ye.get(G),g.init(O),M.push(g),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Re=ce[ve];et(Re,G,k),W.add(Re)}else et(ce,G,k),W.add(ce)}),M.pop(),g=null,W},this.compileAsync=function(A,O,G=null){const W=this.compile(A,O,G);return new Promise(k=>{function ce(){if(W.forEach(function(ve){me.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){k(A);return}setTimeout(ce,10)}ie.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Xt=null;function kn(A){Xt&&Xt(A)}function bh(){Ti.stop()}function wh(){Ti.start()}const Ti=new lf;Ti.setAnimationLoop(kn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Xt=A,$.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},$.addEventListener("sessionstart",bh),$.addEventListener("sessionend",wh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,w),g=Ye.get(A,M.length),g.init(O),M.push(g),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(oe),ne=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,ne),_=ge.get(A,p.length),_.init(),p.push(_),$.enabled===!0&&$.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Mo(ce,O,-1/0,x.sortObjects)}Mo(A,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,he),Te=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Te&&He.addToRenderList(_,A),this.info.render.frame++,Y===!0&&ae.beginShadows();const G=g.state.shadowsArray;_e.render(G,A,O),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,k=_.transmissive;if(g.setupLights(),O.isArrayCamera){const ce=O.cameras;if(k.length>0)for(let ve=0,Re=ce.length;ve<Re;ve++){const Pe=ce[ve];Th(W,k,A,Pe)}Te&&He.render(A);for(let ve=0,Re=ce.length;ve<Re;ve++){const Pe=ce[ve];Eh(_,A,Pe,Pe.viewport)}}else k.length>0&&Th(W,k,A,O),Te&&He.render(A),Eh(_,A,O);w!==null&&(L.updateMultisampleRenderTarget(w),L.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,O),Qe.resetDefaultState(),P=-1,C=null,M.pop(),M.length>0?(g=M[M.length-1],Y===!0&&ae.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Mo(A,O,G,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){W&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const ve=j.update(A),Re=A.material;Re.visible&&_.push(A,ve,Re,G,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const ve=j.update(A),Re=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Re)){const Pe=ve.groups;for(let Ge=0,We=Pe.length;Ge<We;Ge++){const Ie=Pe[Ge],ot=Re[Ie.materialIndex];ot&&ot.visible&&_.push(A,ve,ot,G,Oe.z,Ie)}}else Re.visible&&_.push(A,ve,Re,G,Oe.z,null)}}const ce=A.children;for(let ve=0,Re=ce.length;ve<Re;ve++)Mo(ce[ve],O,G,W)}function Eh(A,O,G,W){const k=A.opaque,ce=A.transmissive,ve=A.transparent;g.setupLightsView(G),Y===!0&&ae.setGlobalState(x.clippingPlanes,G),W&&ee.viewport(v.copy(W)),k.length>0&&Gr(k,O,G),ce.length>0&&Gr(ce,O,G),ve.length>0&&Gr(ve,O,G),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Th(A,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new bi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Fr:ni,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=g.state.transmissionRenderTarget[W.id],ve=W.viewport||v;ce.setSize(ve.z,ve.w);const Re=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Te&&He.render(G);const Pe=x.toneMapping;x.toneMapping=Qn;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),Y===!0&&ae.setGlobalState(x.clippingPlanes,W),Gr(A,G,W),L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce),ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ie=0,ot=O.length;Ie<ot;Ie++){const ht=O[Ie],_t=ht.object,jt=ht.geometry,st=ht.material,De=ht.group;if(st.side===un&&_t.layers.test(W.layers)){const Ct=st.side;st.side=Kt,st.needsUpdate=!0,Ah(_t,G,W,jt,st,De),st.side=Ct,st.needsUpdate=!0,We=!0}}We===!0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce))}x.setRenderTarget(Re),x.setClearColor(D,F),Ge!==void 0&&(W.viewport=Ge),x.toneMapping=Pe}function Gr(A,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ce=A.length;k<ce;k++){const ve=A[k],Re=ve.object,Pe=ve.geometry,Ge=W===null?ve.material:W,We=ve.group;Re.layers.test(G.layers)&&Ah(Re,O,G,Pe,Ge,We)}}function Ah(A,O,G,W,k,ce){A.onBeforeRender(x,O,G,W,k,ce),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,O,G,W,A,ce),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,x.renderBufferDirect(G,O,W,k,A,ce),k.side=ti,k.needsUpdate=!0,x.renderBufferDirect(G,O,W,k,A,ce),k.side=un):x.renderBufferDirect(G,O,W,k,A,ce),A.onAfterRender(x,O,G,W,k,ce)}function Wr(A,O,G){O.isScene!==!0&&(O=Be);const W=me.get(A),k=g.state.lights,ce=g.state.shadowsArray,ve=k.state.version,Re=Ae.getParameters(A,k.state,ce,O,G),Pe=Ae.getProgramCacheKey(Re);let Ge=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?z:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",je),Ge=new Map,W.programs=Ge);let We=Ge.get(Pe);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===ve)return Ch(A,Re),We}else Re.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Re,x),We=Ae.acquireProgram(Re,Pe),Ge.set(Pe,We),W.uniforms=Re.uniforms;const Ie=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),Ch(A,Re),W.needsLights=gp(A),W.lightsStateVersion=ve,W.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=We,W.uniformsList=null,We}function Rh(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Fa.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ch(A,O){const G=me.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function pp(A,O,G,W,k){O.isScene!==!0&&(O=Be),L.resetTextureUnits();const ce=O.fog,ve=W.isMeshStandardMaterial?O.environment:null,Re=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Pt,Pe=(W.isMeshStandardMaterial?z:E).get(W.envMap||ve),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,ot=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let _t=Qn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=x.toneMapping);const jt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=jt!==void 0?jt.length:0,De=me.get(W),Ct=g.state.lights;if(Y===!0&&(ne===!0||A!==C)){const an=A===C&&W.id===P;ae.setState(W,A,an)}let rt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ct.state.version||De.outputColorSpace!==Re||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Pe||W.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==Ge||De.vertexTangents!==We||De.morphTargets!==Ie||De.morphNormals!==ot||De.morphColors!==ht||De.toneMapping!==_t||De.morphTargetsCount!==st)&&(rt=!0):(rt=!0,De.__version=W.version);let _n=De.currentProgram;rt===!0&&(_n=Wr(W,O,k));let es=!1,Zt=!1,So=!1;const yt=_n.getUniforms(),ri=De.uniforms;if(ee.useProgram(_n.program)&&(es=!0,Zt=!0,So=!0),W.id!==P&&(P=W.id,Zt=!0),es||C!==A){Q.reverseDepthBuffer?(de.copy(A.projectionMatrix),Bm(de),zm(de),yt.setValue(T,"projectionMatrix",de)):yt.setValue(T,"projectionMatrix",A.projectionMatrix),yt.setValue(T,"viewMatrix",A.matrixWorldInverse);const an=yt.map.cameraPosition;an!==void 0&&an.setValue(T,be.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&yt.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Zt=!0,So=!0)}if(k.isSkinnedMesh){yt.setOptional(T,k,"bindMatrix"),yt.setOptional(T,k,"bindMatrixInverse");const an=k.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),yt.setValue(T,"boneTexture",an.boneTexture,L))}k.isBatchedMesh&&(yt.setOptional(T,k,"batchingTexture"),yt.setValue(T,"batchingTexture",k._matricesTexture,L),yt.setOptional(T,k,"batchingIdTexture"),yt.setValue(T,"batchingIdTexture",k._indirectTexture,L),yt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(T,"batchingColorTexture",k._colorsTexture,L));const bo=G.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&Ve.update(k,G,_n),(Zt||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,yt.setValue(T,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ri.envMap.value=Pe,ri.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),Zt&&(yt.setValue(T,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&mp(ri,So),ce&&W.fog===!0&&ue.refreshFogUniforms(ri,ce),ue.refreshMaterialUniforms(ri,W,q,B,g.state.transmissionRenderTarget[A.id]),Fa.upload(T,Rh(De),ri,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fa.upload(T,Rh(De),ri,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(T,"center",k.center),yt.setValue(T,"modelViewMatrix",k.modelViewMatrix),yt.setValue(T,"normalMatrix",k.normalMatrix),yt.setValue(T,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const an=W.uniformsGroups;for(let wo=0,_p=an.length;wo<_p;wo++){const Ph=an[wo];U.update(Ph,_n),U.bind(Ph,_n)}}return _n}function mp(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function gp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,G){me.get(A.texture).__webglTexture=O,me.get(A.depthTexture).__webglTexture=G;const W=me.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const G=me.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){w=A,R=O,S=G;let W=!0,k=null,ce=!1,ve=!1;if(A){const Pe=me.get(A);if(Pe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(T.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Pe.__hasExternalTextures)L.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&me.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ve=!0);const We=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[O])?k=We[O][G]:k=We[O],ce=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?k=me.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[G]:k=We,v.copy(A.viewport),b.copy(A.scissor),N=A.scissorTest}else v.copy(re).multiplyScalar(q).floor(),b.copy(le).multiplyScalar(q).floor(),N=Ue;if(ee.bindFramebuffer(T.FRAMEBUFFER,k)&&W&&ee.drawBuffers(A,k),ee.viewport(v),ee.scissor(b),ee.setScissorTest(N),ce){const Pe=me.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,G)}else if(ve){const Pe=me.get(A.texture),Ge=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pe.__webglTexture,G||0,Ge)}P=-1},this.readRenderTargetPixels=function(A,O,G,W,k,ce,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){ee.bindFramebuffer(T.FRAMEBUFFER,Re);try{const Pe=A.texture,Ge=Pe.format,We=Pe.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k&&T.readPixels(O,G,W,k,Ne.convert(Ge),Ne.convert(We),ce)}finally{const Pe=w!==null?me.get(w).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,W,k,ce,ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){const Pe=A.texture,Ge=Pe.format,We=Pe.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k){ee.bindFramebuffer(T.FRAMEBUFFER,Re);const Ie=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.bufferData(T.PIXEL_PACK_BUFFER,ce.byteLength,T.STREAM_READ),T.readPixels(O,G,W,k,Ne.convert(Ge),Ne.convert(We),0);const ot=w!==null?me.get(w).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,ot);const ht=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await km(T,ht,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ce),T.deleteBuffer(Ie),T.deleteSync(ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(Oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(A.image.width*W),ce=Math.floor(A.image.height*W),ve=O!==null?O.x:0,Re=O!==null?O.y:0;L.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,G,0,0,ve,Re,k,ce),ee.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,W=null,k=0){A.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let ce,ve,Re,Pe,Ge,We;G!==null?(ce=G.max.x-G.min.x,ve=G.max.y-G.min.y,Re=G.min.x,Pe=G.min.y):(ce=A.image.width,ve=A.image.height,Re=0,Pe=0),W!==null?(Ge=W.x,We=W.y):(Ge=0,We=0);const Ie=Ne.convert(O.format),ot=Ne.convert(O.type);L.setTexture2D(O,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const ht=T.getParameter(T.UNPACK_ROW_LENGTH),_t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),jt=T.getParameter(T.UNPACK_SKIP_PIXELS),st=T.getParameter(T.UNPACK_SKIP_ROWS),De=T.getParameter(T.UNPACK_SKIP_IMAGES),Ct=A.isCompressedTexture?A.mipmaps[k]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Ct.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ct.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Ge,We,ce,ve,Ie,ot,Ct.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Ge,We,Ct.width,Ct.height,Ie,Ct.data):T.texSubImage2D(T.TEXTURE_2D,k,Ge,We,ce,ve,Ie,ot,Ct),T.pixelStorei(T.UNPACK_ROW_LENGTH,ht),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,jt),T.pixelStorei(T.UNPACK_SKIP_ROWS,st),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De),k===0&&O.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,W=null,k=0){A.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0);let ce,ve,Re,Pe,Ge,We,Ie,ot,ht;const _t=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(ce=G.max.x-G.min.x,ve=G.max.y-G.min.y,Re=G.max.z-G.min.z,Pe=G.min.x,Ge=G.min.y,We=G.min.z):(ce=_t.width,ve=_t.height,Re=_t.depth,Pe=0,Ge=0,We=0),W!==null?(Ie=W.x,ot=W.y,ht=W.z):(Ie=0,ot=0,ht=0);const jt=Ne.convert(O.format),st=Ne.convert(O.type);let De;if(O.isData3DTexture)L.setTexture3D(O,0),De=T.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)L.setTexture2DArray(O,0),De=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const Ct=T.getParameter(T.UNPACK_ROW_LENGTH),rt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),_n=T.getParameter(T.UNPACK_SKIP_PIXELS),es=T.getParameter(T.UNPACK_SKIP_ROWS),Zt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,_t.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ge),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(De,k,Ie,ot,ht,ce,ve,Re,jt,st,_t.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(De,k,Ie,ot,ht,ce,ve,Re,jt,_t.data):T.texSubImage3D(De,k,Ie,ot,ht,ce,ve,Re,jt,st,_t),T.pixelStorei(T.UNPACK_ROW_LENGTH,Ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,rt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_n),T.pixelStorei(T.UNPACK_SKIP_ROWS,es),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Zt),k===0&&O.generateMipmaps&&T.generateMipmap(De),ee.unbindTexture()},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){R=0,S=0,w=null,ee.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===lo?"display-p3":"srgb"}}class pf extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new I;class Ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uo extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const tr=new I,gs=new I,_s=new I,xs=new se,nr=new se,gf=new Fe,ua=new I,ir=new I,da=new I,Ru=new se,tl=new se,Cu=new se;class eh extends pt{constructor(e=new uo){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mf(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Ar(n,3,0,!1)),ms.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=ms,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;fa(ua.set(-.5,-.5,0),_s,a,gs,i,r),fa(ir.set(.5,-.5,0),_s,a,gs,i,r),fa(da.set(.5,.5,0),_s,a,gs,i,r),Ru.set(0,0),tl.set(1,0),Cu.set(1,1);let o=e.ray.intersectTriangle(ua,ir,da,!1,tr);if(o===null&&(fa(ir.set(-.5,.5,0),_s,a,gs,i,r),tl.set(0,1),o=e.ray.intersectTriangle(ua,da,ir,!1,tr),o===null))return;const l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:dn.getInterpolation(tr,ua,ir,da,Ru,tl,Cu,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fa(s,e,t,n,i,r){xs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(nr.x=r*xs.x-i*xs.y,nr.y=i*xs.x+r*xs.y):nr.copy(xs),s.copy(e),s.x+=nr.x,s.y+=nr.y,s.applyMatrix4(gf)}const Pu=new I,Lu=new it,Iu=new it,Zv=new I,Du=new Fe,pa=new I,nl=new Nn,Nu=new Fe,il=new co;class Jv extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(i),e.ray.intersectsSphere(nl)!==!1&&(Nu.copy(i).invert(),il.copy(e.ray).applyMatrix4(Nu),!(this.boundingBox!==null&&il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===am?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lu.fromBufferAttribute(i.attributes.skinIndex,e),Iu.fromBufferAttribute(i.attributes.skinWeight,e),Pu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Iu.getComponent(r);if(a!==0){const o=Lu.getComponent(r);Du.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zv.copy(Pu).applyMatrix4(Du),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _f extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class th extends wt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ot,h=Ot,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new Fe,Qv=new Fe;class nh{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Qv;Uu.multiplyMatrices(o,t[r]),Uu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new th(t,e,e,pn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _f),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _c extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Fe,Ou=new Fe,ma=[],Fu=new Dn,ey=new Fe,sr=new Ke,rr=new Nn;class fo extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ey)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),Fu.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),rr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),Ou.multiplyMatrices(n,vs),sr.matrixWorld=Ou,sr.raycast(e,ma);for(let a=0,o=ma.length;a<o;a++){const l=ma[a];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(i*this.count),i,this.count,Xc,bn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xf extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new I,Ja=new I,ku=new Fe,ar=new co,ga=new Nn,sl=new I,Bu=new I;class ih extends pt{constructor(e=new vt,t=new xf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Za.fromBufferAttribute(t,i-1),Ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;ku.copy(i).invert(),ar.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),M=h.getX(_+1),x=_a(this,e,ar,l,p,M);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=_a(this,e,ar,l,_,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=_a(this,e,ar,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=_a(this,e,ar,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _a(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Za.fromBufferAttribute(a,i),Ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Za,Ja,sl,Bu)>n)return;sl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(sl);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const zu=new I,Hu=new I;class ty extends ih{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zu.distanceTo(Hu);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ny extends ih{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vf extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new Fe,xc=new co,xa=new Nn,va=new I;class iy extends pt{constructor(e=new vt,t=new vf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;Vu.copy(i).invert(),xc.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);va.fromBufferAttribute(u,g),Gu(va,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)va.fromBufferAttribute(u,m),Gu(va,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gu(s,e,t,n,i,r,a){const o=xc.distanceSqToPoint(s);if(o<t){const l=new I;xc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qs extends wt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new Fe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Rt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Rt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sh extends Un{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sy extends sh{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ya=new I,rl=new rh,al=new rh,ol=new rh;class ry extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ya.subVectors(i[0],i[1]).add(i[0]),c=ya);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ya.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),rl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),al.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),al.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(rl.calc(l),al.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function ay(s,e){const t=1-s;return t*t*e}function oy(s,e){return 2*(1-s)*s*e}function ly(s,e){return s*s*e}function mr(s,e,t,n){return ay(s,e)+oy(s,t)+ly(s,n)}function cy(s,e){const t=1-s;return t*t*t*e}function hy(s,e){const t=1-s;return 3*t*t*s*e}function uy(s,e){return 3*(1-s)*s*s*e}function dy(s,e){return s*s*s*e}function gr(s,e,t,n,i){return cy(s,e)+hy(s,t)+uy(s,n)+dy(s,i)}class yf extends Un{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,r.x,a.x,o.x),gr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fy extends Un{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,r.x,a.x,o.x),gr(e,i.y,r.y,a.y,o.y),gr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mf extends Un{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class py extends Un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sf extends Un{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,i.x,r.x,a.x),mr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends Un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,i.x,r.x,a.x),mr(e,i.y,r.y,a.y),mr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bf extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Wu(o,l.x,c.x,h.x,u.x),Wu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:sy,CatmullRomCurve3:ry,CubicBezierCurve:yf,CubicBezierCurve3:fy,EllipseCurve:sh,LineCurve:Mf,LineCurve3:py,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:my,SplineCurve:bf});class gy extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vc[i.type]().fromJSON(i))}return this}}class yc extends gy{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mf(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Sf(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new yf(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new sh(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hs extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class po extends vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function M(){const y=new I,R=new I;let S=0;const w=(t-e)/n;for(let P=0;P<=r;P++){const C=[],v=P/r,b=v*(t-e)+e;for(let N=0;N<=i;N++){const D=N/i,F=D*l+o,X=Math.sin(F),B=Math.cos(F);R.x=b*X,R.y=-v*n+g,R.z=b*B,u.push(R.x,R.y,R.z),y.set(X,w,B).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-v),C.push(m++)}_.push(C)}for(let P=0;P<i;P++)for(let C=0;C<r;C++){const v=_[C][P],b=_[C+1][P],N=_[C+1][P+1],D=_[C][P+1];e>0&&(h.push(v,b,D),S+=3),t>0&&(h.push(b,N,D),S+=3)}c.addGroup(p,S,0),p+=S}function x(y){const R=m,S=new se,w=new I;let P=0;const C=y===!0?e:t,v=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;const b=m;for(let N=0;N<=i;N++){const F=N/i*l+o,X=Math.cos(F),B=Math.sin(F);w.x=C*B,w.y=g*v,w.z=C*X,u.push(w.x,w.y,w.z),d.push(0,v,0),S.x=X*.5+.5,S.y=B*.5*v+.5,f.push(S.x,S.y),m++}for(let N=0;N<i;N++){const D=R+N,F=b+N;y===!0?h.push(F,F+1,D):h.push(F+1,F,D),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ah extends po{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oh extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new I,y=new I,R=new I;for(let S=0;S<t.length;S+=3)f(t[S+0],x),f(t[S+1],y),f(t[S+2],R),l(x,y,R,M)}function l(M,x,y,R){const S=R+1,w=[];for(let P=0;P<=S;P++){w[P]=[];const C=M.clone().lerp(y,P/S),v=x.clone().lerp(y,P/S),b=S-P;for(let N=0;N<=b;N++)N===0&&P===S?w[P][N]=C:w[P][N]=C.clone().lerp(v,N/b)}for(let P=0;P<S;P++)for(let C=0;C<2*(S-P)-1;C++){const v=Math.floor(C/2);C%2===0?(d(w[P][v+1]),d(w[P+1][v]),d(w[P][v])):(d(w[P][v+1]),d(w[P+1][v+1]),d(w[P+1][v]))}}function c(M){const x=new I;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const M=new I;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=g(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(y,1-R)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],y=a[M+2],R=a[M+4],S=Math.max(x,y,R),w=Math.min(x,y,R);S>.9&&w<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){const M=new I,x=new I,y=new I,R=new I,S=new se,w=new se,P=new se;for(let C=0,v=0;C<r.length;C+=9,v+=6){M.set(r[C+0],r[C+1],r[C+2]),x.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),S.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),R.copy(M).add(x).add(y).divideScalar(3);const b=g(R);_(S,v+0,M,b),_(w,v+2,x,b),_(P,v+4,y,b)}}function _(M,x,y,R){R<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=R/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.vertices,e.indices,e.radius,e.details)}}class wf extends yc{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new yc().fromJSON(i))}return this}}const _y={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ef(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Sy(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Rr(r,a,t,o,l,f,0),a}};function Ef(s,e,t,n,i){let r,a;if(i===Dy(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Xu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xu(r,s[r],s[r+1],a);return a&&mo(a,a.next)&&(Pr(a),a=a.next),a}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(mo(t,t.next)||gt(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Ay(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?vy(s,n,i,r):xy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Pr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=yy(Ki(s),e,t),Rr(s,e,t,n,i,r,2)):a===2&&My(s,e,t,n,i,r):Rr(Ki(s),e,t,n,i,r,1);break}}}function xy(s){const e=s.prev,t=s,n=s.next;if(gt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Es(i,o,r,l,a,c,m.x,m.y)&&gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vy(s,e,t,n){const i=s.prev,r=s,a=s.next;if(gt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Mc(f,m,e,t,n),M=Mc(_,g,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Es(o,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Es(o,h,l,u,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Es(o,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Es(o,h,l,u,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!mo(i,r)&&Tf(i,n,n.next,r)&&Cr(i,r)&&Cr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Pr(n),Pr(n.next),n=s=r),n=n.next}while(n!==s);return Ki(n)}function My(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Py(a,o)){let l=Af(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Rr(a,e,t,n,i,r,0),Rr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sy(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Ef(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Cy(c));for(i.sort(by),r=0;r<i.length;r++)t=wy(i[r],t);return t}function by(s,e){return s.x-e.x}function wy(s,e){const t=Ey(s,e);if(!t)return e;const n=Af(t,s);return Ki(n,n.next),Ki(t,t.next)}function Ey(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Es(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Cr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Ty(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Ty(s,e){return gt(s.prev,s,e.prev)<0&&gt(e.next,s,s.next)<0}function Ay(s,e,t,n){let i=s;do i.z===0&&(i.z=Mc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ry(i)}function Ry(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Mc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Cy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Es(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Py(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ly(s,e)&&(Cr(s,e)&&Cr(e,s)&&Iy(s,e)&&(gt(s.prev,s,e.prev)||gt(s,e.prev,e))||mo(s,e)&&gt(s.prev,s,s.next)>0&&gt(e.prev,e,e.next)>0)}function gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function mo(s,e){return s.x===e.x&&s.y===e.y}function Tf(s,e,t,n){const i=Sa(gt(s,e,t)),r=Sa(gt(s,e,n)),a=Sa(gt(t,n,s)),o=Sa(gt(t,n,e));return!!(i!==r&&a!==o||i===0&&Ma(s,t,e)||r===0&&Ma(s,n,e)||a===0&&Ma(t,s,n)||o===0&&Ma(t,e,n))}function Ma(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Sa(s){return s>0?1:s<0?-1:0}function Ly(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Tf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Cr(s,e){return gt(s.prev,s,s.next)<0?gt(s,e,s.next)>=0&&gt(s,s.prev,e)>=0:gt(s,e,s.prev)<0||gt(s,s.next,e)<0}function Iy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Af(s,e){const t=new Sc(s.i,s.x,s.y),n=new Sc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xu(s,e,t,n){const i=new Sc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dy(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class _r{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return _r.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];qu(e),Yu(n,e);let a=e.length;t.forEach(qu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Yu(n,t[l]);const o=_y.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function qu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Yu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class lh extends vt{constructor(e=new wf([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new at(i,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ny;let x,y=!1,R,S,w,P;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),S=new I,w=new I,P=new I),d||(g=0,f=0,m=0,_=0);const C=o.extractPoints(c);let v=C.shape;const b=C.holes;if(!_r.isClockWise(v)){v=v.reverse();for(let J=0,T=b.length;J<T;J++){const H=b[J];_r.isClockWise(H)&&(b[J]=H.reverse())}}const D=_r.triangulateShape(v,b),F=v;for(let J=0,T=b.length;J<T;J++){const H=b[J];v=v.concat(H)}function X(J,T,H){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(T,H)}const B=v.length,q=D.length;function V(J,T,H){let ie,Q,ee;const Le=J.x-T.x,me=J.y-T.y,L=H.x-J.x,E=H.y-J.y,z=Le*Le+me*me,K=Le*E-me*L;if(Math.abs(K)>Number.EPSILON){const Z=Math.sqrt(z),j=Math.sqrt(L*L+E*E),Ae=T.x-me/Z,ue=T.y+Le/Z,ge=H.x-E/j,Ye=H.y+L/j,ae=((ge-Ae)*E-(Ye-ue)*L)/(Le*E-me*L);ie=Ae+Le*ae-J.x,Q=ue+me*ae-J.y;const _e=ie*ie+Q*Q;if(_e<=2)return new se(ie,Q);ee=Math.sqrt(_e/2)}else{let Z=!1;Le>Number.EPSILON?L>Number.EPSILON&&(Z=!0):Le<-Number.EPSILON?L<-Number.EPSILON&&(Z=!0):Math.sign(me)===Math.sign(E)&&(Z=!0),Z?(ie=-me,Q=Le,ee=Math.sqrt(z)):(ie=Le,Q=me,ee=Math.sqrt(z/2))}return new se(ie/ee,Q/ee)}const he=[];for(let J=0,T=F.length,H=T-1,ie=J+1;J<T;J++,H++,ie++)H===T&&(H=0),ie===T&&(ie=0),he[J]=V(F[J],F[H],F[ie]);const re=[];let le,Ue=he.concat();for(let J=0,T=b.length;J<T;J++){const H=b[J];le=[];for(let ie=0,Q=H.length,ee=Q-1,Le=ie+1;ie<Q;ie++,ee++,Le++)ee===Q&&(ee=0),Le===Q&&(Le=0),le[ie]=V(H[ie],H[ee],H[Le]);re.push(le),Ue=Ue.concat(le)}for(let J=0;J<g;J++){const T=J/g,H=f*Math.cos(T*Math.PI/2),ie=m*Math.sin(T*Math.PI/2)+_;for(let Q=0,ee=F.length;Q<ee;Q++){const Le=X(F[Q],he[Q],ie);oe(Le.x,Le.y,-H)}for(let Q=0,ee=b.length;Q<ee;Q++){const Le=b[Q];le=re[Q];for(let me=0,L=Le.length;me<L;me++){const E=X(Le[me],le[me],ie);oe(E.x,E.y,-H)}}}const ke=m+_;for(let J=0;J<B;J++){const T=d?X(v[J],Ue[J],ke):v[J];y?(w.copy(R.normals[0]).multiplyScalar(T.x),S.copy(R.binormals[0]).multiplyScalar(T.y),P.copy(x[0]).add(w).add(S),oe(P.x,P.y,P.z)):oe(T.x,T.y,0)}for(let J=1;J<=h;J++)for(let T=0;T<B;T++){const H=d?X(v[T],Ue[T],ke):v[T];y?(w.copy(R.normals[J]).multiplyScalar(H.x),S.copy(R.binormals[J]).multiplyScalar(H.y),P.copy(x[J]).add(w).add(S),oe(P.x,P.y,P.z)):oe(H.x,H.y,u/h*J)}for(let J=g-1;J>=0;J--){const T=J/g,H=f*Math.cos(T*Math.PI/2),ie=m*Math.sin(T*Math.PI/2)+_;for(let Q=0,ee=F.length;Q<ee;Q++){const Le=X(F[Q],he[Q],ie);oe(Le.x,Le.y,u+H)}for(let Q=0,ee=b.length;Q<ee;Q++){const Le=b[Q];le=re[Q];for(let me=0,L=Le.length;me<L;me++){const E=X(Le[me],le[me],ie);y?oe(E.x,E.y+x[h-1].y,x[h-1].x+H):oe(E.x,E.y,u+H)}}}Y(),ne();function Y(){const J=i.length/3;if(d){let T=0,H=B*T;for(let ie=0;ie<q;ie++){const Q=D[ie];be(Q[2]+H,Q[1]+H,Q[0]+H)}T=h+g*2,H=B*T;for(let ie=0;ie<q;ie++){const Q=D[ie];be(Q[0]+H,Q[1]+H,Q[2]+H)}}else{for(let T=0;T<q;T++){const H=D[T];be(H[2],H[1],H[0])}for(let T=0;T<q;T++){const H=D[T];be(H[0]+B*h,H[1]+B*h,H[2]+B*h)}}n.addGroup(J,i.length/3-J,0)}function ne(){const J=i.length/3;let T=0;de(F,T),T+=F.length;for(let H=0,ie=b.length;H<ie;H++){const Q=b[H];de(Q,T),T+=Q.length}n.addGroup(J,i.length/3-J,1)}function de(J,T){let H=J.length;for(;--H>=0;){const ie=H;let Q=H-1;Q<0&&(Q=J.length-1);for(let ee=0,Le=h+g*2;ee<Le;ee++){const me=B*ee,L=B*(ee+1),E=T+ie+me,z=T+Q+me,K=T+Q+L,Z=T+ie+L;Oe(E,z,K,Z)}}}function oe(J,T,H){l.push(J),l.push(T),l.push(H)}function be(J,T,H){Be(J),Be(T),Be(H);const ie=i.length/3,Q=M.generateTopUV(n,i,ie-3,ie-2,ie-1);Te(Q[0]),Te(Q[1]),Te(Q[2])}function Oe(J,T,H,ie){Be(J),Be(T),Be(ie),Be(T),Be(H),Be(ie);const Q=i.length/3,ee=M.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);Te(ee[0]),Te(ee[1]),Te(ee[3]),Te(ee[1]),Te(ee[2]),Te(ee[3])}function Be(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Te(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Uy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vc[i.type]().fromJSON(i)),new lh(n,e.options)}}const Ny={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-m),new se(_,1-p)]:[new se(o,1-l),new se(h,1-u),new se(f,1-m),new se(g,1-p)]}};function Uy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class go extends oh{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new go(e.radius,e.detail)}}class Lr extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new I,m=new se;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const M=p+g,x=M,y=M+n+1,R=M+n+2,S=M+1;o.push(x,y,S),o.push(y,R,S)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ch extends vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,M=(i+1)*f+m;a.push(_,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hh extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends hh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $u extends nn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class _i extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ba(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Rf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ky extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ss,endingEnd:Ss}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case bs:r=e,o=2*t-n;break;case qa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bs:a=e,l=2*n-t;break;case qa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+M*a[c+R]+x*a[l+R]+y*a[u+R];return r}}class Cf extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class By extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new By(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ky(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Oy(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===To,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Er;class Ys extends Fn{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=wr;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Pf extends Fn{}Pf.prototype.ValueTypeName="color";class Vs extends Fn{}Vs.prototype.ValueTypeName="number";class zy extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Vt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Gs extends Fn{InterpolantFactoryMethodLinear(e){return new zy(this.times,this.values,this.getValueSize(),e)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Fn{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=wr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Fn{}Ws.prototype.ValueTypeName="vector";class Qa{constructor(e="",t=-1,n=[],i=Kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Vy(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Fy(l);l=Ku(l,1,h),c=Ku(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];Rf(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Vs(".morphTargetInfluence["+_+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ws,f+".position",d,"pos",i),n(Gs,f+".quaternion",d,"rot",i),n(Ws,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return Pf;case"quaternion":return Gs;case"bool":case"boolean":return Ys;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hy(s.type);if(s.times===void 0){const t=[],n=[];Rf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gy{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Wy=new Gy;class Ks{constructor(e){this.manager=e!==void 0?e:Wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Xy extends Error{constructor(e,t){super(e),this.response=t}}class Lf extends Ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let S=0,w=h.length;S<w;S++){const P=h[S];P.onProgress&&P.onProgress(R)}p.enqueue(y),M()}},x=>{p.error(x)})}}});return new Response(g)}else throw new Xy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{vi.add(e,c);const h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qy extends Ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Tr("img");function l(){h(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class If extends Ks{constructor(e){super(e)}load(e,t,n,i){const r=new wt,a=new qy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class _o extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yy extends _o{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ll=new Fe,ju=new I,Zu=new I;class uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $y extends uh{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ky extends _o{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $y}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ju=new Fe,or=new I,cl=new I;class jy extends uh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),cl.copy(n.position),cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cl),n.updateMatrixWorld(),i.makeTranslation(-or.x,-or.y,-or.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}}class Zy extends _o{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jy extends uh{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Df extends _o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qy extends Ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,l),r.manager.itemStart(e)}}class eM{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Vt.multiplyQuaternionsFlat(e,a,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const dh="\\[\\]\\.:\\/",tM=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",nM="[^"+dh.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",fh),sM=/(WCOD+)?/.source.replace("WCOD",nM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),aM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),oM=new RegExp("^"+iM+sM+rM+aM+"$"),lM=["material","materials","bones","map"];class cM{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){const t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);lM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=cM;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hM{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ss,endingEnd:Ss};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=om,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case cm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Kc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===lm;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===$d){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=bs,i.endingEnd=bs):(e?i.endingStart=this.zeroSlopeAtStart?bs:Ss:i.endingStart=qa,t?i.endingEnd=this.zeroSlopeAtEnd?bs:Ss:i.endingEnd=qa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const uM=new Float32Array(1);class dM extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new eM(nt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Cf(new Float32Array(2),new Float32Array(2),1,uM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Qa.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Kc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new hM(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Qa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const qi={rimDark:3111484,wallSide:13924916,blue:3711999,red:16730698,gem:11820287,gemGlow:14725375},ka=new Map;function Nf(s,e={}){const t=s+JSON.stringify(e);if(ka.has(t)&&!e.unique)return ka.get(t);const n=new _i({color:s,...e.vc?{vertexColors:!0}:{},...e.map?{map:e.map}:{}});return e.emissive&&(n.emissive.setHex(e.emissive),n.emissiveIntensity=e.ei??1),e.opacity!==void 0&&(n.transparent=!0,n.opacity=e.opacity,n.depthWrite=!1),e.unique||ka.set(t,n),n}const fM=s=>[...ka.values()].includes(s);function hl(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t);const a=new qs(n);return a.colorSpace=mt,a}function sn(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function xo(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new vt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Qu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=Qu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Qu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new bt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ed(s,e){if(e===hm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pc||e===Kd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===pc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Uf extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new IM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=xr.extractUrlBase(e);a=xr.resolveURL(c,this.path)}else a=xr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Of){try{a[$e.KHR_BINARY_GLTF]=new DM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new gM;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new NM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new UM;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new OM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function pM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Df(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zy(h),c.distance=u;break;case"spot":c=new Ky(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class gM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}}class _M{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class yM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Pt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],Pt),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],Pt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class CM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class IM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new Fe,g=new I,p=new Vt,M=new I(1,1,1),x=new fo(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(g,p,M));for(const y in l)if(y==="_COLOR_0"){const R=l[y];x.instanceColor=new _c(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);pt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Of="glTF",lr=12,td={JSON:1313821514,BIN:5130562};class DM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-lr,r=new DataView(e,lr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===td.JSON){const c=new Uint8Array(e,lr+a,o);this.content=n.decode(c)}else if(l===td.BIN){const c=lr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=bc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=bc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Is[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(f)},o,c,Pt,d)})})}}class UM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Ff extends Br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,M=1-g,x=p-d+u;for(let y=0;y!==o;y++){const R=a[_+y+o],S=a[_+y+l]*h,w=a[m+y+o],P=a[m+y]*h;r[y]=M*R+x*S+g*w+p*P}return r}}const FM=new Vt;class kM extends Ff{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return FM.fromArray(r).normalize().toArray(r),r}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nd={9728:Ot,9729:Yt,9984:kd,9985:Pa,9986:ur,9987:Kn},id={33071:xi,33648:Xa,10497:Os},ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:Er,STEP:wr},dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new hh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function Di(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function VM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fl(t.attributes):e=s.indices+":"+fl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+fl(s.targets[n]);return e}function fl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const XM=new Fe;class qM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new If(this.options.manager):this.textureLoader=new Qy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Di(r,o,i),qn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(xr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ul[i.type],o=Is[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new bt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ul[i.type],c=Is[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(M);x||(_=new c(o,p*f,i.count*f/h),x=new mf(_,f/h),t.cache.add(M,x)),g=new Ar(x,l,d%f/h,m)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),g=new bt(_,l,m);if(i.sparse!==void 0){const p=ul.SCALAR,M=Is[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(a[1],x,i.sparse.count*p),S=new c(a[2],y,i.sparse.count*l);o!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,P=R.length;w<P;w++){const C=R[w];if(g.setX(C,S[w*l]),l>=2&&g.setY(C,S[w*l+1]),l>=3&&g.setZ(C,S[w*l+2]),l>=4&&g.setW(C,S[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=nd[d.magFilter]||Yt,h.minFilter=nd[d.minFilter]||Kn,h.wrapS=id[d.wrapS]||Os,h.wrapT=id[d.wrapT]||Os,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new wt(_);g.needsUpdate=!0,d(g)}),t.load(xr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),qn(u,a),u.userData.mimeType=a.mimeType||WM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new vf,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new xf,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Pt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=un);const h=r.alphaMode||dl.OPAQUE;if(h===dl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===dl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ft){const u=r.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],Pt)}return r.emissiveTexture!==void 0&&a!==ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Di(i,u,r),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return sd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=GM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=sd(new vt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?zM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=a[f];let p;const M=c[f];if(g.mode===cn.TRIANGLES||g.mode===cn.TRIANGLE_STRIP||g.mode===cn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Jv(_,M):new Ke(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===cn.TRIANGLE_STRIP?p.geometry=ed(p.geometry,Kd):g.mode===cn.TRIANGLE_FAN&&(p.geometry=ed(p.geometry,pc));else if(g.mode===cn.LINES)p=new ty(_,M);else if(g.mode===cn.LINE_STRIP)p=new ih(_,M);else if(g.mode===cn.LINE_LOOP)p=new ny(_,M);else if(g.mode===cn.POINTS)p=new iy(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&VM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qn(p,r),g.extensions&&Di(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Di(i,u[0],r),u[0];const d=new Ht;r.extensions&&Di(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Cn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nh(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let M=0,x=d.length;M<x;M++){const y=d[M],R=f[M],S=m[M],w=_[M],P=g[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const C=n._createAnimationTracks(y,R,S,w,P);if(C)for(let v=0;v<C.length;v++)p.push(C[v])}return new Qa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,XM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new _f:c.length>1?h=new Ht:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),qn(h,r),r.extensions&&Di(n,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ht;n.name&&(r.name=i.createUniqueName(n.name)),qn(r,n),n.extensions&&Di(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof nn||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(di[r.path]){case di.weights:c=Vs;break;case di.rotation:c=Gs;break;case di.position:case di.scale:c=Ws;break;default:switch(n.itemSize){case 1:c=Vs;break;case 2:case 3:default:c=Ws;break}break}const h=i.interpolation!==void 0?BM[i.interpolation]:Er,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gs?kM:Ff;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YM(s,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=wc(Is[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=wc(Is[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Nn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function sd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=bc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),qn(s,e),YM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HM(s,e.targets,t):s})}const wa={tip:"#c8ee5a",body:"#8fd24a",root:"#5e9e35"},Ec={value:[new se(999,999),new se(999,999),new se(999,999)]},pl={r:1.5,alpha:.35,edge:.3},kf={value:0};function $M(){const t=document.createElement("canvas");t.width=128,t.height=160;const n=t.getContext("2d"),i=()=>{n.beginPath(),n.moveTo(128*.5,160),n.bezierCurveTo(128*.3,160*.8,0,160*.7,0,160*.4),n.bezierCurveTo(0,160*.1,128*.22,0,128*.5,0),n.bezierCurveTo(128*.78,0,128,160*.1,128,160*.4),n.bezierCurveTo(128,160*.7,128*.7,160*.8,128*.5,160),n.closePath()};i();const r=n.createLinearGradient(0,160,0,0);r.addColorStop(0,wa.root),r.addColorStop(.5,wa.body),r.addColorStop(.86,wa.body),r.addColorStop(1,wa.tip),n.fillStyle=r,n.fill(),n.save(),i(),n.clip(),n.strokeStyle="rgba(255,255,220,0.32)",n.lineWidth=4,n.beginPath(),n.moveTo(128*.5,160*.94),n.lineTo(128*.5,160*.1),n.stroke(),n.strokeStyle="rgba(40,90,20,0.3)",n.lineWidth=3,n.stroke(),n.restore(),i(),n.strokeStyle="rgba(60,120,30,0.55)",n.lineWidth=3,n.stroke();const a=new qs(t);return a.colorSpace=mt,a.anisotropy=4,a}function KM(s,e){const t=new ft({map:e,alphaTest:.5,side:un,color:15269808}),n=new tn(.13,.17),i=[];for(let a=0;a<24;a++){const o=new Ke(n,t);o.visible=!1,s.add(o),i.push({m:o,life:0,vx:0,vy:0,vz:0,spin:0})}let r=0;return{burst(a,o,l=5){for(let c=0;c<l;c++){const h=i[r++%i.length],u=Math.random()*6.28;h.life=.6,h.vx=Math.cos(u)*1.1,h.vz=Math.sin(u)*1.1,h.vy=2+Math.random()*1.2,h.spin=(Math.random()-.5)*12,h.m.position.set(a+(Math.random()-.5)*.5,.5,o+(Math.random()-.5)*.5),h.m.rotation.set(-.6,u,0),h.m.visible=!0}},update(a){for(const o of i)if(!(o.life<=0)){if(o.life-=a,o.life<=0){o.m.visible=!1;continue}o.vy-=7*a,o.m.position.x+=o.vx*a,o.m.position.z+=o.vz*a,o.m.position.y=Math.max(.05,o.m.position.y+o.vy*a),o.m.rotation.z+=o.spin*a,o.m.scale.setScalar(Math.min(1,o.life*4))}},dispose(){n.dispose(),t.dispose()}}}const Tc="./art/env/kaykit/",jM={bushL:["Bush_4_C_Color1","f"],bushM:["Bush_4_B_Color1","f"],bushW:["Bush_4_D_Color1","f"],tree1:["Tree_1_A_Color1","f"],tree1b:["Tree_1_B_Color1","f"],tree2:["Tree_2_A_Color1","f"],tree3:["Tree_3_A_Color1","f"],tree4:["Tree_4_A_Color1","f"],rockA:["Rock_1_A_Color1","f"],rockB:["Rock_2_B_Color1","f"],rockC:["Rock_3_C_Color1","f"],block:["barrier_1x1x1","p"],crate:["platform_wood_1x1x1","p"],rail:["railing_straight_double_yellow","p"],flagRed:["flag_A_red","p"],flagBlue:["flag_A_blue","p"]},Ac={};let ml=null,vr=null,Bf=null,Ba=null,zf=null;const rd=s=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("이미지 "+s)),n.src=s});async function ZM(){const[s,e]=await Promise.all([rd(Tc+"forest_texture.png"),rd(Tc+"platformer_texture.png")]),t=document.createElement("canvas");t.width=1024,t.height=2048;const n=t.getContext("2d");n.drawImage(s,0,0,1024,1024),n.drawImage(e,0,1024,1024,1024);const i=new qs(t);return i.flipY=!1,i.colorSpace=mt,i.anisotropy=4,i.userData.shared=!0,i}function JM(s,e,t){return[e,(t+1)/2]}function QM(s,e=16777215,t=.74){s.computeBoundingBox();const n=s.boundingBox.max.y||1,i=s.attributes.position,r=new Float32Array(i.count*3),a=new we(e);for(let o=0;o<i.count;o++){const l=Cn.smoothstep(i.getY(o)/n,0,.4),c=t+(1-t)*l;r[o*3]=c*a.r,r[o*3+1]=c*a.g,r[o*3+2]=c*a.b}return s.setAttribute("color",new bt(r,3)),s}function Hf(s){s.computeBoundingBox();const e=s.boundingBox;return s.translate(-(e.min.x+e.max.x)/2,-e.min.y,-(e.min.z+e.max.z)/2)}async function eS(s,[e,t]){const n=await s.loadAsync(`${Tc}${e}.gltf`);n.scene.updateMatrixWorld(!0);const i=[];n.scene.traverse(o=>{if(o.isMesh){const l=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);i.push(l)}});const r=i.length>1?xo(i):i[0],a=r.attributes.uv;for(let o=0;o<a.count;o++)a.setY(o,t==="f"?a.getY(o)/2:(a.getY(o)+1)/2);return r.userData.shared=!0,Hf(r)}async function tS(){if(ml)return;ml=await ZM();const s=new Uf;await Promise.all(Object.entries(jM).map(async([l,c])=>{Ac[l]=await eS(s,c)}));const e=await s.loadAsync("./models/forest/cat.glb");let t;e.scene.traverse(l=>{l.isMesh&&!t&&(l.updateWorldMatrix(!0,!1),t=l.geometry.clone().applyMatrix4(l.matrixWorld))});for(const l of Object.keys(t.attributes))["position","normal"].includes(l)||t.deleteAttribute(l);const[n,i]=JM("p",.5,.5),r=t.attributes.position.count,a=new Float32Array(r*2);for(let l=0;l<r;l++)a[l*2]=n,a[l*2+1]=i;t.setAttribute("uv",new bt(a,2)),t.userData.shared=!0,Ac.cat=Hf(t);const o=new th(new Uint8Array([96,96,96,255,176,176,176,255,255,255,255,255]),3,1);o.minFilter=o.magFilter=Ot,o.needsUpdate=!0,o.userData.shared=!0,vr=new $u({map:ml,vertexColors:!0,gradientMap:o}),vr.userData.shared=!0,Bf=ad(vr),Ba=new $u({vertexColors:!0,gradientMap:o}),Ba.userData.shared=!0,zf=ad(Ba)}const gl=new Map;function Bt(s,{w:e,h:t,d:n,tint:i,lo:r,key:a}={}){const o=a||[s,e,t,n,i,r].join("|");if(!gl.has(o)){const l=Ac[s].clone();l.computeBoundingBox();const c=l.boundingBox,h=e?e/(c.max.x-c.min.x):1;l.scale(h,t?t/(c.max.y-c.min.y):h,n?n/(c.max.z-c.min.z):h),QM(l,i,r),l.userData.shared=!0,gl.set(o,l)}return gl.get(o)}const nS=()=>vr,iS=()=>Bf,sS=()=>Ba,rS=()=>zf;function ad(s){const e=s.clone();return e.transparent=!0,e.userData.shared=!0,e.onBeforeCompile=t=>{t.uniforms.uWind=kf,t.uniforms.uAlly=Ec,t.uniforms.uAllyR={value:[pl.r,pl.alpha,pl.edge]},t.fragmentShader=`uniform vec2 uAlly[3]; uniform vec3 uAllyR; varying vec2 vWxz;
`+t.fragmentShader.replace("#include <opaque_fragment>",`
      { float k = 1.0; for (int i = 0; i < 3; i++) k = min(k, mix(uAllyR.y, 1.0, smoothstep(uAllyR.x - uAllyR.z, uAllyR.x, distance(vWxz, uAlly[i])))); diffuseColor.a *= k; }
      #include <opaque_fragment>`),t.vertexShader=`uniform float uWind; varying vec2 vWxz;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      { float hgt = clamp(position.y / 0.7, 0.0, 1.0); vec4 wp = modelMatrix * vec4(transformed, 1.0);
        transformed.x += sin(uWind * 1.7 + wp.x * 1.3 + wp.z * 0.9) * 0.03 * hgt * hgt;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.7 + wp.z * 1.1) * 0.02 * hgt * hgt; vWxz = (modelMatrix * vec4(transformed, 1.0)).xz; }`)},e}function Mn(s,e,t,{shadow:n=!0,material:i=vr}={}){if(!t.length)return null;const r=new fo(e,i,t.length),a=new Fe,o=new Vt,l=new I(0,1,0);return t.forEach((c,h)=>{o.setFromAxisAngle(l,c.turn||0),a.compose(new I(c.x,c.y||0,c.z),o,new I(c.sx??1,c.sy??c.sx??1,c.sx??1)),r.setMatrixAt(h,a)}),r.castShadow=n,r.receiveShadow=!0,s.add(r),r}const cr=new I;function ln(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;cr.copy(e),cr[n]=0,cr.normalize();const c=.5*a/(a+o),h=1-cr.angleTo(s)/l;return Math.sign(cr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class aS extends si{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new I,_=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=ln(m,l,"z","y",r,n),d[p+1]=1-ln(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-ln(m,l,"z","y",r,n),d[p+1]=1-ln(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-ln(m,l,"x","z",r,e),d[p+1]=ln(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-ln(m,l,"x","z",r,e),d[p+1]=1-ln(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-ln(m,l,"x","y",r,e),d[p+1]=1-ln(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=ln(m,l,"x","y",r,e),d[p+1]=1-ln(m,l,"y","x",r,t);break}}}const ei=!(typeof location<"u"&&new URLSearchParams(location.search).get("env")==="r25"),Vf={w:.96,h:1.06,bevel:.1,rim:.07},oS={stone:{rim:"#f3ecd6",top:"#d8cfb6",side:"#b5ab94",base:"#6f6753"},clay:{rim:"#efc190",top:"#d49c69",side:"#b87a4c",base:"#6a3d26"}},fi={root:"#1c4a24",body:"#388f36",tip:"#6fbd40",count:45,span:1.13},Rc=(s,e)=>{const t=s.attributes.position,n=s.attributes.normal,i=new Float32Array(t.count*3),r=new we;for(let a=0;a<t.count;a++)e(r,t.getX(a),t.getY(a),t.getZ(a),n?n.getY(a):0),i[a*3]=r.r,i[a*3+1]=r.g,i[a*3+2]=r.b;return s.setAttribute("color",new bt(i,3)),s};function od(s="stone"){const{w:e,h:t,bevel:n,rim:i}=Vf,r=oS[s],a=new we(r.rim),o=new we(r.side),l=new we(r.base),c=new aS(e,t,e,3,n).translate(0,t/2,0).toNonIndexed();c.computeVertexNormals(),Rc(c,(f,m,_,g,p)=>{const M=_/t;f.copy(o).lerp(l,1-Cn.smoothstep(M,.04,.34)),f.lerp(a,Cn.smoothstep(M,.86,.97)*.9+Cn.smoothstep(p,.2,.85)*.5)});const h=new si(e-i*2,.02,e-i*2).translate(0,t+0,0).toNonIndexed();h.computeVertexNormals();const u=new we(r.top);Rc(h,f=>f.copy(u));const d=xo([c,h]);return d.userData.shared=!0,d}function lS(s,e){const t=sn(s*7919+13),n=fi.count,i=7,r=[],a=new we(fi.root),o=new we(fi.body),l=new we(fi.tip),c=fi.span/i,h=[];for(let d=0;d<i;d++)for(let f=0;f<i;f++)h.push([d,f]);h.sort(()=>t()-.5).length=n;for(const[d,f]of h){const m=(d+.5)*c-fi.span/2+(t()-.5)*c*.7,_=(f+.5)*c-fi.span/2+(t()-.5)*c*.7,g=Math.max(Math.abs(m),Math.abs(_))/(fi.span/2),p=e*(.86+t()*.14)*(1-.1*g*g),M=c*(.95+t()*.2),x=new ah(M,p,6,1,!0).translate(0,p/2,0).toNonIndexed();x.rotateZ((t()-.5)*.22),x.rotateX((t()-.5)*.22),x.rotateY(t()*6.28),x.translate(m,0,_),x.computeVertexNormals();const y=.95+t()*.1;Rc(x,(R,S,w)=>{const P=Cn.clamp(w/p,0,1);R.copy(a).lerp(o,Cn.smoothstep(P,0,.45)).lerp(l,Cn.smoothstep(P,.55,1)).multiplyScalar(y)}),r.push(x)}const u=xo(r);return u.userData.shared=!0,u}const ys={};async function cS(){ys.block=Bt("block",{w:.96,h:.98,d:.96,tint:12892835,key:"wall-block"}),ys.crate=Bt("crate",{w:.96,h:.98,d:.96,key:"wall-crate"}),ei&&(ys.block=od("stone"),ys.crate=od("clay")),ys.cat=Bt("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"})}function hS(s,e,t){const n=s.length,i=s[0].length,r=(h,u)=>h>=0&&u>=0&&h<i&&u<n&&s[u][h]==="#",a=r(e-1,t)+r(e+1,t),o=r(e,t-1)+r(e,t+1),l=sn(e*7919+Math.min(t,n-1-t)*104729)(),c=Math.floor(l*4)*Math.PI/2;return a+o===0?{kind:"cat",turn:0}:a+o===1&&l<.3?{kind:"cat",turn:0}:{kind:l<.62?"block":"crate",turn:c}}function uS(s,e){const{W:t,H:n,map:i}=e,r={block:[],crate:[],cat:[]},a=new Map;for(let f=0;f<n;f++)for(let m=0;m<t;m++)if(i[f][m]==="#"){const _=hS(i,m,f);r[_.kind].push([m,f]),a.set(f*t+m,_.turn)}const o=new Map,l=new Fe,c=new Vt,h=new I(0,1,0);for(const[f,m]of Object.entries(r)){if(!m.length)continue;const _=new fo(ys[f],ei&&f!=="cat"?sS():nS(),m.length);_.castShadow=!0,_.receiveShadow=!0,s.add(_),m.forEach(([g,p],M)=>{const x=sn(g*31+p*17+5),y=a.get(p*t+g),R=.97+x()*.06;o.set(p*t+g,{m:_,k:M,x:g+.5,z:p+.5,turn:y,sy:R,t:9,dir:0}),u(_,M,g+.5,p+.5,y,R,1,0,0)})}function u(f,m,_,g,p,M,x,y,R){c.setFromAxisAngle(h,p),l.compose(new I(_+y,0,g+R),c,new I(1+(1-x)*.5,M*x,1+(1-x)*.5)),f.setMatrixAt(m,l)}const d=new Set;return{hit(f,m,_=0,g=0){const p=o.get(Math.floor(m)*t+Math.floor(f));if(!p)return;const M=Math.hypot(_,g)||1;p.t=0,p.dx=_/M,p.dz=g/M,d.add(p)},update(f){for(const m of d){m.t+=f;const _=.12,g=Math.min(1,m.t/_),p=Math.sin(g*Math.PI)*(1-g*.3);u(m.m,m.k,m.x,m.z,m.turn,m.sy,1-.07*p,m.dx*.035*p,m.dz*.035*p),m.m.instanceMatrix.needsUpdate=!0,g>=1&&(d.delete(m),u(m.m,m.k,m.x,m.z,m.turn,m.sy,1,0,0),m.m.instanceMatrix.needsUpdate=!0)}},remove(f,m){const _=o.get(m*t+f);return _?(d.delete(_),o.delete(m*t+f),_.m.setMatrixAt(_.k,new Fe().makeScale(0,0,0)),_.m.instanceMatrix.needsUpdate=!0,!0):!1},peek:(f,m)=>o.get(m*t+f),kinds:()=>Object.entries(r).filter(([,f])=>f.length).map(([f])=>f),count:()=>r}}function dS(s){const{W:e,H:t,map:n}=s,i=new Ht,r=sn(9090),a=[],o=[],l=Math.ceil(t/2);for(let c=0;c<l;c++)for(let h=0;h<e;h++){if(n[c][h]!==".")continue;const u=[[1,0],[-1,0],[0,1],[0,-1]].some(([x,y])=>n[c+y]?.[h+x]==="#"),d=h===0||h===e-1,f=r();if(!(u&&f<.06||d&&f<.08))continue;const m=(r()-.5)*.5,_=(r()-.5)*.5,g=r()*6.28,p=.8+r()*.4,M=r()<.5;for(const x of c===t-1-c?[c]:[c,t-1-c])(M?a:o).push({x:h+.5+m,z:x+.5+(x===c?_:-_),turn:g,sx:p})}return Mn(i,Bt("rockB",{w:.34}),a,{shadow:!1}),Mn(i,Bt("rockA",{w:.4}),o,{shadow:!1}),i}const za=1.35,fS=1.4;function pS(s,e,t,n){const i=(o,l,c,h,u)=>{const d=new wf;return d.moveTo(o+u,l),d.lineTo(c-u,l),d.quadraticCurveTo(c,l,c,l+u),d.lineTo(c,h-u),d.quadraticCurveTo(c,h,c-u,h),d.lineTo(o+u,h),d.quadraticCurveTo(o,h,o,h-u),d.lineTo(o,l+u),d.quadraticCurveTo(o,l,o+u,l),d},r=i(-t,-t,s+t,e+t,n),a=i(0,0,s,e,.001);return r.holes.push(new yc(a.getPoints(1).reverse())),r}function mS(s){const{W:e,H:t}=s,n=.22,i=new lh(pS(e,t,fS,.9),{depth:za-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:10});i.rotateX(Math.PI/2),i.translate(0,za-n,0),i.computeVertexNormals();const r=new we(ei?3111484:4892730),a=new we(ei?3877408:5913126),o=new we(ei?1839629:2890772),l=i.attributes.position,c=i.attributes.normal,h=new Float32Array(l.count*3),u=new we;for(let f=0;f<l.count;f++){const m=Cn.smoothstep(c.getY(f),.55,.9);u.copy(a).lerp(o,1-Cn.clamp(l.getY(f)/za,0,1)).lerp(r,m),h.set([u.r,u.g,u.b],f*3)}i.setAttribute("color",new bt(h,3));const d=new Ke(i,new _i({vertexColors:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}async function gS(){}function _S(s){const{W:e,H:t}=s,n=new Ht,i=sn(91),r=.55,a=za-.12,o=[],l=[],c=[],h=[],u=[],d=[],f=[[],[],[],[],[]],m=M=>Math.abs(M-e/2)<1.6,_=(M,x,y)=>{const R=y%3,S={x:M+(i()-.5)*.25,y:a,z:x+(i()-.5)*.15,turn:i()*6.28,sx:.85+i()*.3};(R===0?o:R===1?c:l).push(S)};let g=0;for(let M=.5;M<e;M+=.9)m(M)||(_(M,-r,g++),_(M,t+r,g++));for(let M=.5;M<t;M+=.9)_(-r,M,g++),_(e+r,M,g++);for(const[M,x]of[[-r,-r],[e+r,-r],[-r,t+r],[e+r,t+r],[e/2-1.9,-r],[e/2+1.9,-r],[e/2-1.9,t+r],[e/2+1.9,t+r]])h.push({x:M,y:a,z:x,turn:0,sx:1.05});u.push({x:e/2-2.9,y:a,z:-r,turn:0},{x:e/2+2.9,y:a,z:-r,turn:0}),d.push({x:e/2-2.9,y:a,z:t+r,turn:0},{x:e/2+2.9,y:a,z:t+r,turn:0});const p=(M,x,y,R)=>{const S=Math.floor(i()*5),w=x>t?.38:1,P=((R?.5:.42)+i()*.14)*w;f[S].push({x:M+(i()-.5)*.4,y,z:x+(i()-.5)*.4,turn:i()*6.28,sx:P,sy:P*(.9+i()*.25)})};for(let M=-1.2;M<e+1.4;M+=1.3)for(const x of[-1.7,t+1.7])p(M,x,a-.1,!1);for(let M=-.2;M<t+1;M+=1.3)for(const x of[-1.7,e+1.7])p(x,M,a-.1,!1);for(let M=-3;M<e+3;M+=1.6)for(const x of[-3.2,t+3.2,-4.6,t+4.6])p(M,x,0,!0);for(let M=-2;M<t+2;M+=1.6)for(const x of[-3.2,e+3.2,-4.6,e+4.6])p(x,M,0,!0);return Mn(n,Bt("rockA",{w:.45}),o.filter((M,x)=>x%3===0)),Mn(n,Bt("rockB",{w:.4}),l.filter((M,x)=>x%3===0)),Mn(n,Bt("bushM",{w:.7}),c),Mn(n,Bt("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"}),h),Mn(n,Bt("flagRed",{h:1.6}),u),Mn(n,Bt("flagBlue",{h:1.6}),d),["tree1","tree1b","tree2","tree3","tree4"].forEach((M,x)=>Mn(n,Bt(M,{tint:9414800}),f[x])),n}const xS=["map","alphaMap","aoMap","emissiveMap","lightMap","normalMap","bumpMap","roughnessMap","metalnessMap"];function vS(s){const e=new Set,t=n=>{!n||e.has(n)||(e.add(n),n.dispose())};s.traverse(n=>{n.geometry?.userData?.shared||t(n.geometry),t(n.skeleton),n.isInstancedMesh&&n.dispose();for(const i of[].concat(n.material||[]))if(!(fM(i)||i.userData?.shared)){for(const r of xS)t(i[r]);t(i)}}),s.removeFromParent()}function yS(s,e,t,n,i){s.fillStyle=i,s.beginPath(),s.ellipse(e,t+.18*n,.5*n,.4*n,0,0,7),s.fill();for(const[r,a,o]of[[-.62,-.28,.2],[-.22,-.62,.22],[.22,-.62,.22],[.62,-.28,.2]])s.beginPath(),s.ellipse(e+r*n,t+a*n,o*n,o*1.2*n,0,0,7),s.fill()}function MS(s,e,t){const{W:n,H:i,map:r,mine:a}=e,o=a.x*t,l=a.z*t,c=3.3*t,h=sn(5),u=Math.floor(i/2),d=[];for(let f=2.4;f<u-3.4;f+=1.15)d.push([n/2,f],[n/2,i-f]);for(const[f,m]of d){if(r[Math.floor(m)]?.[Math.floor(f)]!==".")continue;const _=(f+(h()-.5)*.3)*t,g=m*t,p=t*(.34+h()*.08),M=p*.76;s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.ellipse(_+2,g+4,p,M,0,0,7),s.fill(),s.fillStyle="#a39e84",s.beginPath(),s.ellipse(_,g,p,M,0,0,7),s.fill(),s.fillStyle="#c9c4a8",s.beginPath(),s.ellipse(_-p*.1,g-M*.18,p*.8,M*.7,0,0,7),s.fill()}s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.arc(o+3,l+6,c+4,0,7),s.fill(),s.fillStyle="#8e8a70",s.beginPath(),s.arc(o,l,c,0,7),s.fill(),s.fillStyle="#b3ae92",s.beginPath(),s.arc(o,l,c-.16*t,0,7),s.fill();for(let f=0;f<24;f++){const m=f/24*6.2832;s.save(),s.translate(o+Math.cos(m)*(c-.38*t),l+Math.sin(m)*(c-.38*t)),s.rotate(m),s.fillStyle=f%2?"#aaa58b":"#d8d3b8",s.fillRect(-.2*t,-.1*t,.4*t,.2*t),s.restore()}s.fillStyle="#c4bfa3",s.beginPath(),s.arc(o,l,c*.74,0,7),s.fill(),yS(s,o,l+.2*t,2.1*t,"rgba(120,114,92,0.55)")}const pi={a:"#3a7a47",b:"#3d7d4a",seam:"rgba(52,108,66,0.9)",mine:"#33703f",water:"#4cc0e6",rim:"#e8f7ff",leaf:"#7fbf6e",chip:"#d8e6c2"};function SS(s){const{W:e,H:t,map:n}=s,i=48,r=document.createElement("canvas");r.width=e*i,r.height=t*i;const a=r.getContext("2d");for(let f=0;f<t;f++)for(let m=0;m<e;m++)a.fillStyle=m+f&1?pi.b:pi.a,a.fillRect(m*i,f*i,i,i);if(ei){const f=e*i/2,m=t*i/2,_=Math.hypot(e,t)*i/2;a.fillStyle="rgba(6,24,14,1)";for(const[g,p]of[[.9,.34],[.72,.22],[.52,.1]])a.globalAlpha=p,a.beginPath(),a.rect(0,0,e*i,t*i),a.arc(f,m,_*g*.62,0,7,!0),a.fill("evenodd");a.globalAlpha=1}if(ei){a.fillStyle="rgba(4,22,12,0.34)",a.filter="blur(5px)";for(let f=0;f<t;f++)for(let m=0;m<e;m++)n[f][m]==="#"&&(a.beginPath(),a.roundRect(m*i-3,f*i+5,i+6,i+6,10),a.fill());a.filter="none"}a.fillStyle=pi.mine,a.beginPath(),a.arc(s.mine.x*i,s.mine.z*i,2.5*i,0,7),a.fill(),MS(a,s,i);const o=new Set;for(let f=0;f<t;f++)for(let m=0;m<e;m++)n[f][m]==="W"&&o.add(m+","+f);const l=(f,m,_,g,p,M)=>{a.fillStyle=p,a.beginPath(),a.roundRect(f,m,_,g,M),a.fill()};for(const f of o){const[m,_]=f.split(",").map(Number);l(m*i-.5,_*i-.5,i+1,i+1,pi.rim,0)}for(const f of o){const[m,_]=f.split(",").map(Number),g=.12*i,p=o.has(m-1+","+_),M=o.has(m+1+","+_),x=o.has(m+","+(_-1)),y=o.has(m+","+(_+1));l(m*i+(p?0:g),_*i+(x?0:g),i-(p?0:g)-(M?0:g),i-(x?0:g)-(y?0:g),pi.water,0)}a.strokeStyle=pi.seam,a.lineWidth=1,a.beginPath();for(let f=1;f<e;f++)for(let m=0;m<t;m++)!o.has(f+","+m)&&!o.has(f-1+","+m)&&(a.moveTo(f*i+.5,m*i),a.lineTo(f*i+.5,(m+1)*i));for(let f=1;f<t;f++)for(let m=0;m<e;m++)!o.has(m+","+f)&&!o.has(m+","+(f-1))&&(a.moveTo(m*i,f*i+.5),a.lineTo((m+1)*i,f*i+.5));a.stroke();for(const f of["blue","red"])for(const m of s.spawns[f]){const _=m.x*i,g=m.z*i,p=i*.5;a.fillStyle="rgba(30,80,45,0.55)",a.beginPath(),a.ellipse(_,g,p,p*.92,0,0,7),a.fill(),a.strokeStyle="rgba(210,240,200,0.5)",a.lineWidth=2,a.beginPath(),a.ellipse(_,g+1.5,p,p*.92,0,.15*Math.PI,.85*Math.PI),a.stroke()}const c=sn(2501),h=[],u=(f,m)=>n[m]&&n[m][f]===".";for(let f=0;f<400&&h.length<5;f++){const m=1+Math.floor(c()*(e-2)),_=1+Math.floor(c()*(Math.floor(t/2)-2));u(m,_)&&!h.some(g=>Math.abs(g[0]-m)+Math.abs(g[1]-_)<4)&&h.push([m,_,h.length<3?"leaf":"chip"])}for(const[f,m,_]of[...h,...h.map(([g,p,M])=>[g,t-1-p,M])]){const g=(f+.5)*i,p=(m+.5)*i;if(_==="leaf"){a.fillStyle=pi.leaf;for(const[M,x]of[[-.6,.18],[.5,.2],[2.1,.16]])a.save(),a.translate(g+Math.cos(M)*x*i,p+Math.sin(M)*x*i),a.rotate(M),a.beginPath(),a.ellipse(0,0,i*.14,i*.06,0,0,7),a.fill(),a.restore()}else{a.fillStyle=pi.chip;for(const[M,x,y]of[[-.15,.05,.12],[.1,-.08,.09],[.16,.12,.07]])a.beginPath(),a.ellipse(g+M*i,p+x*i,i*y,i*y*.75,.3,0,7),a.fill()}}const d=new qs(r);return d.colorSpace=mt,d.anisotropy=8,d}function bS(s,e){const{W:t,H:n,map:i}=e,r=new Ht;s.add(r);const a=new Ke(new tn(t,n),new _i({map:SS(e)}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),a.receiveShadow=!0,r.add(a);const o=new Ke(new tn(t+60,n+60),new _i({color:qi.rimDark}));o.rotation.x=-Math.PI/2,o.position.set(t/2,-.02,n/2),o.receiveShadow=!0,r.add(o),r.add(mS(e)),r.add(_S(e)),r.add(dS(e));const l=uS(r,e);{const S=[];for(let w=0;w<n;w++)for(let P=0;P<t;P++)i[w][P]==="N"&&S.push({x:P+.5,z:w+.5});Mn(r,Bt("rail",{w:.98,h:.5,d:.2,key:"fence-rail"}),S)}const c=[],h=$M(),u=ei?rS():iS(),d=KM(r,h),f=ei?[0,1,2].map(S=>lS(S+1,Vf.h*.89)):[0,1,2].map(S=>{const w=Bt(S===1?"bushW":"bushL",{w:S===1?1.5:1.22,h:.82,key:"bush-big"+S}),P=Bt("bushM",{w:.62,h:.5,key:"bush-small"+S}).clone();P.translate(S===0?.26:S===1?-.3:.12,0,S===0?.22:S===1?.25:-.3);const C=xo([w.clone(),P]);return C.userData.shared=!0,C});for(let S=0;S<n;S++)for(let w=0;w<t;w++)if(i[S][w]==="B"){const P=new Ke(f[(w*3+S*5)%3],u);P.position.set(w+.5,0,S+.5),P.rotation.y=sn(w*17+S*5)()*6.28,P.castShadow=!0,P.receiveShadow=!0,r.add(P),c.push({m:P,i:w,j:S,phase:sn(w*31+S)()*6.28,shake:0})}{const S=[];for(let v=0;v<n;v++)for(let b=0;b<t;b++)(i[v][b]==="#"||i[v][b]==="B")&&S.push({x:b+.5,y:.012,z:v+.58});const w=new tn(1.7,1.7).rotateX(-Math.PI/2),P=new ft({map:hl("rgba(10,36,22,0.72)","rgba(14,48,28,0)",128),transparent:!0,depthWrite:!1}),C=Mn(r,w,S,{shadow:!1,material:P});C&&(C.receiveShadow=!1,C.renderOrder=1)}const m=new Ke(new Hs(.9,32),new ft({map:hl("rgba(30,14,48,1)","rgba(30,14,48,0)",128),transparent:!0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(e.mine.x,.03,e.mine.z),r.add(m);const _=new Ke(new tn(3.4,3.4),new ft({map:hl("rgba(200,120,255,0.8)","rgba(200,120,255,0)"),transparent:!0,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(e.mine.x,.05,e.mine.z),r.add(_);const g=new Ke(new ch(.92,.13,10,32),new _i({color:10123952}));g.rotation.x=-Math.PI/2,g.position.set(e.mine.x,.09,e.mine.z),g.castShadow=!0,g.receiveShadow=!0,r.add(g);const p=sn(3);for(let S=0;S<5;S++){const w=S/5*6.28+.4,P=new Ke(new go(.16+p()*.08,0),Nf(12880639,{emissive:8006352,ei:.5}));P.scale.y=1.7,P.position.set(e.mine.x+Math.cos(w)*1.05,.2,e.mine.z+Math.sin(w)*1.05),P.rotation.y=w,P.castShadow=!0,r.add(P)}let M=0;const x=new _i({color:11901546}),y=new _i({color:4160042});function R(S,w,P){const C=(v,b,N,D,F=.05)=>{const X=new Ke(v,b);return X.position.set(N,F,D),X.receiveShadow=!0,r.add(X),X};if(P==="B"){const v=c.find(b=>b.i===S&&b.j===w);if(!v||v.gone)return;v.gone=!0,r.remove(v.m),d.burst(S+.5,w+.5,10),C(new po(.3,.34,.04,14),y,S+.5,w+.5,.02)}else{if(!l.remove(S,w))return;for(let v=0;v<5;v++)C(new si(.14+v%3*.05,.1,.12),x,S+.2+v*37%60/100,w+.2+v*53%60/100);d.burst(S+.5,w+.5,6)}}return{root:r,glow:_,walls:l,destroy:R,hitWall(S){l.hit(S.x,S.z,S.vx,S.vz)},dispose(){vS(r),d.dispose(),h.dispose()},update(S,w,P,C=[]){const v=Math.min(.1,Math.max(0,S-M));M=S,d.update(v),l.update(v),_.material.opacity=.75+Math.sin(S*3)*.2,kf.value=S;let b=0;for(const D of w)D.alive&&D.team===P&&b<3&&i[Math.floor(D.z)]?.[Math.floor(D.x)]==="B"&&Ec.value[b++].set(D.x,D.z);for(;b<3;b++)Ec.value[b].set(999,999);const N=new Set;for(const D of C)D.dead||N.add(Math.floor(D.z)*t+Math.floor(D.x));for(const D of c){if(D.gone)continue;let F=!1;for(const q of w)q.alive&&Math.floor(q.x)===D.i&&Math.floor(q.z)===D.j&&(F=!0);const X=N.has(D.j*t+D.i);X&&!D.hit&&(D.shake=1,d.burst(D.i+.5,D.j+.5,4+(D.i+D.j)%3)),D.hit=X,F?D.shake=Math.min(1,D.shake+.2):D.shake*=.92;const B=Math.sin(S*9+D.phase)*.05*D.shake;D.m.rotation.set(B,0,B*.7),D.m.scale.setScalar(1+Math.sin(S*11+D.phase)*.03*D.shake)}}}}async function wS(s,e,{base:t="./art/",prefix:n="b3"}={}){const i={},r=new Map,a=o=>(r.has(o)||r.set(o,e(o)),r.get(o));for(const[o,l]of Object.entries(s)){if(l.atlas){const d=(_,g,p,M)=>{const x=y=>g.dirs.indexOf(l.src?l.src[y]:y);return Array.from({length:l.dirs},(y,R)=>Array.from({length:p},(S,w)=>{const P=_.clone();return P.repeat.set(1/p,1/M),P.offset.set(w/p,1-(x(R)+1)/M),P.needsUpdate=!0,P}))},f=await a(`${t}${n}_${o}.webp`),m=l.shAtlas&&await a(`${t}${n}sh_${l.shn}.webp`);i[o]={...l,dirs:d(f,l.atlas,l.n,l.atlas.rows),shDirs:m&&d(m,l.shAtlas,l.n,l.shAtlas.rows)};continue}const c={},h=d=>c[d]||=Promise.all(Array.from({length:l.n},(f,m)=>a(`${t}${n}_${o}_d${d}_f${m}.png`))),u=d=>l.src?l.src[d]:d;i[o]={...l,dirs:await Promise.all(Array.from({length:l.dirs},(d,f)=>h(u(f)))),shDirs:l.sh&&await Promise.all(Array.from({length:l.dirs},(d,f)=>Promise.all(Array.from({length:l.n},(m,_)=>a(`${t}${n}sh_${l.shn}_d${u(f)}_f${_}.png`)))))}}return i}function ES(s){return s.userData.f={value:0},s.onBeforeCompile=e=>{e.uniforms.uFlash=s.userData.f,e.fragmentShader=`uniform float uFlash;
`+e.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uFlash);
#include <dithering_fragment>`)},s}const Cc={flash:.12,flashPeak:.85,shadowAlpha:.34},Qi=55,Gf=Qi*Math.PI/180,Wf=Math.sin(Gf),vo=Math.cos(Gf),Pc=Math.PI/180,zr=.91,ld=Cc.shadowAlpha,cd=.35,TS=4,AS=new tn(1,1),RS=new tn(1,1).rotateX(-Math.PI/2),CS=new I(0,vo,-Wf),PS=new I(0,Wf,vo);let Yn=null;const LS=new If,IS=s=>new Promise((e,t)=>LS.load(s,n=>{n.colorSpace=mt,n.generateMipmaps=!1,n.minFilter=n.magFilter=Yt,e(n)},void 0,t));let Xf=null;const DS=s=>{Xf=s},ph=()=>Math.cos((Xf??(Yn&&Yn.dealer?Yn.dealer.elev:Qi))*Pc)/vo,NS=s=>s.height*zr*ph()+.2/vo;async function US(){const s=await(await fetch("./art/bake3d.json")).json();Yn=await wS(s,IS,{base:"./art/",prefix:"b3"})}const OS=(s,e)=>s.speed*(s.h/s.bodyPx)*s.cycle*e,FS=(s,e)=>{const t=s.dirs.length,n=Math.atan2(Math.cos(e),Math.sin(e));return(Math.round(n/(2*Math.PI/t))%t+t)%t};function kS(s,e){const t=e.team==="red"&&Yn[e.c.rig+"R"]?e.c.rig+"R":e.c.rig,n=e.c.height*zr,i={walk:Yn[t],shoot:Yn[t+"_shoot"],idle:Yn[t+"_idle"],die:Yn[t+"_die"]},r=new Ht;s.add(r);const a=ES(new ft({transparent:!0,depthWrite:!1,toneMapped:!1}));a.map=i.walk.dirs[0][0];const o=new Ke(AS,a);o.frustumCulled=!1,o.renderOrder=5,s.add(o);const l=new ft({color:0,transparent:!0,opacity:ld,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.walk.shDirs&&(l.map=i.walk.shDirs[0][0]);const c=new Ke(RS,l);c.frustumCulled=!1,c.renderOrder=2,s.add(c);const h=e.team==="blue"?qi.blue:qi.red,u=new Ke(new Lr(.5,.7,40),new ft({color:h,transparent:!0,opacity:e.isPlayer?.95:.85,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,u.renderOrder=3,r.add(u);const d=new Ke(new Hs(.5,40),new ft({color:h,transparent:!0,opacity:.22,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.025,d.renderOrder=3,r.add(d);const f=new Ke(new Lr(.66,.76,40),new ft({color:16765498,transparent:!0,opacity:0,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.035,f.renderOrder=3,r.add(f),{u:e,root:r,body:o,ring:u,superRing:f,mats:[a],x:e.x,z:e.z,face:e.face,kick:0,flash:0,pop:1,lastMoved:e.moved,clock:0,phase:0,shotT:-99,dieT:null,bodyScale:1,state:"idle",onShot(){this.shotT=this.clock},update(_,g,p,M){const x=this.u;this.clock+=_;const y=p&&(x.alive||this.dieT!=null&&this.clock-this.dieT<(i.die?i.die.cycle:.9)+cd);r.visible=o.visible=c.visible=y,x.alive&&this.dieT!=null&&(this.dieT=null,this.pop=0),x.alive?(this.x+=(x.x-this.x)*Math.min(1,_*20),this.z+=(x.z-this.z)*Math.min(1,_*20)):this.dieT==null&&(this.dieT=this.clock),r.position.set(this.x,0,this.z);let R=x.face-this.face;R=Math.atan2(Math.sin(R),Math.cos(R)),this.face+=R*Math.min(1,_*18);const S=x.moved-this.lastMoved,w=S/Math.max(_,1e-4);this.lastMoved=x.moved;const P=x.alive&&w>.3;let C=i.idle||i.walk,v=0,b=1,N="idle";if(!x.alive&&i.die){C=i.die;const Y=this.clock-this.dieT;v=Math.min(C.n-1,Math.floor(Y/C.cycle*C.n)),b=Y<C.cycle?1:Math.max(0,1-(Y-C.cycle)/cd),N="die"}else if(x.alive){const Y=i.shoot,ne=this.clock-this.shotT+(Y?Y.hit*Y.cycle:0);P?this.run=Math.min(1,(this.run||0)+_*8):this.run=Math.max(0,(this.run||0)-_*8),this.run>.5?(C=i.walk,this.phase=(this.phase+S/OS(C,n))%1,v=Math.floor(this.phase*C.n)%C.n,N="walk"):Y&&ne<Y.cycle*.96?(C=Y,v=Math.min(C.n-1,Math.floor(ne/C.cycle*C.n)),N="shoot"):i.idle?(C=i.idle,v=Math.floor(this.clock/C.cycle%1*C.n)%C.n):(C=i.walk,v=0)}this.state=N;const D=FS(C,this.face),F=C.dirs[D][v];a.map!==F&&(a.map=F),this.flash=Math.max(0,this.flash-_/Cc.flash),a.userData.f.value=this.flash*Cc.flashPeak,this.pop=Math.min(1,this.pop+_*TS);const X=this.pop,q=(X<1?1+Math.sin(X*Math.PI)*.22:1)*(x.dash?1.1:1)*this.bodyScale,V=(X<1?.6+.4*X:1)*(x.dash?.92:1)*this.bodyScale,he=Math.sin(C.elev*Pc),re=n*Math.cos(C.elev*Pc)/C.bodyPx,le=C.w*re*q,Ue=C.h*re*V;o.scale.set(le,Ue,1),o.quaternion.copy(s.userData.cam.quaternion);const ke=(C.ay-C.h/2)*re*V;if(o.position.set(this.x,0,this.z).addScaledVector(CS,ke).addScaledVector(PS,.45),a.opacity=M*b,C.shDirs&&C.sh){const Y=C.shDirs[D][v];l.map!==Y&&(l.map=Y);const[ne,de,oe,be]=C.sh;c.scale.set(oe*re*q,1,be*re*V/he),c.position.set(this.x+(ne+oe/2-C.w/2)*re*q,.02,this.z+(de+be/2-C.ay)*re*V/he),l.opacity=ld*M*b,c.visible=y}else c.visible=!1;f.material.opacity=x.superCharge>=1&&x.alive?.55+Math.sin(g*8)*.35:0,u.material.opacity=(x.isPlayer?.95:.7)*(x.alive?1:0),this.bodyScale=1},dispose(){s.remove(o),s.remove(c),s.remove(r),a.dispose(),l.dispose()}}}function BS(s){const e=new Map,t=new Map,n=s.clone();return qf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function qf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)qf(s.children[n],e.children[n],t)}const yr={sat:2.4,lift:1};{const s=new URLSearchParams(location.search).get("lk");if(s){const[e,t]=s.split(",").map(Number);Object.assign(yr,{sat:e??yr.sat,lift:t??yr.lift})}}function zS(s){s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    { vec3 c = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2));
      float l = dot(c, vec3(0.299, 0.587, 0.114)); c = clamp(mix(vec3(l), c, ${yr.sat.toFixed(3)}), 0., 1.);
      c = mix(c, 1. - (1. - c) * (1. - c), ${yr.lift.toFixed(3)});
      diffuseColor.rgb = pow(c, vec3(2.2)); }`)}const _l={frac:.0019,minPx:1.3,color:1315356},Yf=1,$f=2,HS="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",VS=`varying vec2 vUv; uniform sampler2D tMask; uniform vec2 uTexel; uniform float uRad; uniform vec3 uColor;
void main(){
  float m = texture2D(tMask, vUv).r, d = m;
  for (int i = 0; i < 8; i++) { float a = float(i) * 0.7853982; vec2 o = vec2(cos(a), sin(a)) * uTexel;
    d = max(d, texture2D(tMask, vUv + o * uRad).r); d = max(d, texture2D(tMask, vUv + o * uRad * 0.5).r); }
  float k = clamp(d - m, 0., 1.); if (k < 0.01) discard; gl_FragColor = vec4(uColor, k); }`;function GS(s,e){const t=[];for(let a=0;a<e.H;a++)for(let o=0;o<e.W;o++)e.map[a][o]==="#"&&t.push([o,a]);const n=new si(1,.95,1).translate(0,.475,0),i=new fo(n,new ft,Math.max(1,t.length)),r=new Fe;return t.forEach(([a,o],l)=>{r.setPosition(a+.5,0,o+.5),i.setMatrixAt(l,r)}),i.count=t.length,i.layers.set($f),i.frustumCulled=!1,s.add(i),{mesh:i,dispose(){s.remove(i),n.dispose(),i.material.dispose(),i.dispose()}}}function WS(s,e,t){const n=new bi(2,2,{samples:4,depthBuffer:!0}),i=new ft({color:16777215}),r=new ft({colorWrite:!1}),a=new ii({vertexShader:HS,fragmentShader:VS,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:n.texture},uTexel:{value:new se},uRad:{value:1},uColor:{value:new we(_l.color)}}}),o=new vt;o.setAttribute("position",new at([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new at([0,0,2,0,0,2],2));const l=new Ke(o,a);l.frustumCulled=!1;const c=new pf;c.add(l);const h=new kr(-1,1,1,-1,0,1),u=new se;return{render(){s.render(e,t),s.getDrawingBufferSize(u),(n.width!==u.x||n.height!==u.y)&&(n.setSize(u.x,u.y),a.uniforms.uTexel.value.set(1/u.x,1/u.y)),a.uniforms.uRad.value=Math.max(_l.minPx,_l.frac*u.y);const d=e.background,f=s.autoClear,m=s.shadowMap.autoUpdate,_=t.layers.mask;e.background=null,s.shadowMap.autoUpdate=!1,s.setRenderTarget(n),s.setClearColor(0,1),s.clear(!0,!0,!1),s.autoClear=!1,t.layers.set($f),e.overrideMaterial=r,s.render(e,t),t.layers.set(Yf),e.overrideMaterial=i,s.render(e,t),e.overrideMaterial=null,t.layers.mask=_,e.background=d,s.shadowMap.autoUpdate=m,s.setRenderTarget(null),s.render(c,h),s.autoClear=f},dispose(){n.dispose(),i.dispose(),r.dispose(),a.dispose(),o.dispose()}}}const eo=new URLSearchParams(location.search).get("look")==="0",Lc=20,XS=["Hips","UpLeg.L","Leg.L","Foot.L","UpLeg.R","Leg.R","Foot.R"],qS=s=>new Set((s.bones?.lower||XS).map(e=>nt.sanitizeNodeName(e))),hd=.1,YS=.04,$S=.016,KS=9,jS=22,Ea=1.1,ZS=.1,JS=.1,QS=.35,eb=.66,tb={dealer:1.6,tank:1.3,sniper:1.6},Tn={k:140,c:16,gain:.006,max:25*Math.PI/180},ud={dealer:{white:{maxSat:.16,minVal:.55},y:[.42,.97],minSat:.75},tank:{hue:[280,330],sat:.35,feather:10,minSat:.75},sniper:{hue:[280,330],sat:.35,feather:10,minSat:.75}},nb={blue:213,red:359},Kf={};async function ib(s){const e=new Uf;await Promise.all(s.map(async t=>{const[n,i]=await Promise.all([e.loadAsync(`./art/live/${t}.glb`),fetch(`./art/live/${t}.json`).then(c=>c.json())]),r=new Dn().setFromObject(n.scene),a=r.max.y-r.min.y,o=qS(i),l=c=>Object.fromEntries(n.animations.map(h=>[h.name,new Qa(h.name,h.duration,h.tracks.filter(u=>c(o.has(u.name.split(".").slice(0,-1).join(".")))))]));Kf[t]={scene:n.scene,meta:i,h:a,y0:r.min.y,lower:l(c=>c),upper:l(c=>!c),tip:sb(n.scene,i.muzzle)}})),DS(Qi-Lc)}function sb(s,e){if(!e)return null;s.updateMatrixWorld(!0);let t=null,n=-1;if(s.traverse(a=>{if(!t&&a.isSkinnedMesh){const o=a.skeleton.bones.findIndex(l=>l.name==="Gun");o>=0&&(t=a,n=o)}}),!t)return null;const i=s.getObjectByName("rig")||s,r=a=>t.worldToLocal(i.localToWorld(new I(...a)));return{name:t.name,gi:n,tip:r(e.tip),back:r(e.back)}}const rb=`
vec3 rgb2hsv(vec3 c){ vec4 K=vec4(0.,-1./3.,2./3.,-1.); vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g)); vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r)); float d=q.x-min(q.w,q.y); float e=1e-10; return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x); }
vec3 hsv2rgb(vec3 c){ vec4 K=vec4(1.,2./3.,1./3.,3.); vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www); return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y); }`;function dd(s,e,t,n){const i=new _i({map:s.map||null,color:s.color?s.color.clone():16777215}),r={uHue:{value:nb[t]/360},uY:{value:new se(...n)}};return i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),eo||zS(a),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform vec2 uY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = (position.y - uY.x) / (uY.y - uY.x);`);const o=e.white?`float w = clamp((${e.white.maxSat.toFixed(3)} - hv.y) / 0.06, 0., 1.) * clamp((hv.z - ${e.white.minVal.toFixed(3)}) / 0.1, 0., 1.) * clamp(min(vBodyY - ${e.y[0].toFixed(3)}, ${e.y[1].toFixed(3)} - vBodyY) / 0.03 + 0.5, 0., 1.);`:`float h = hv.x * 360.; float lo = ${e.hue[0].toFixed(1)}, hi = ${e.hue[1].toFixed(1)};
         float dist = min(abs(mod(h - lo + 180., 360.) - 180.), abs(mod(h - hi + 180., 360.) - 180.));
         float w = (h >= lo && h <= hi ? 1. : clamp(1. - dist / ${e.feather.toFixed(1)}, 0., 1.)) * clamp((hv.y - ${e.sat.toFixed(3)}) / 0.12, 0., 1.) * clamp((hv.z - 0.15) / 0.1, 0., 1.);`;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform float uHue;
`+rb).replace("#include <map_fragment>",`#include <map_fragment>
      { vec3 s = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2)); vec3 hv = rgb2hsv(s); ${o}
        vec3 nc = pow(hsv2rgb(vec3(uHue, max(hv.y, ${e.minSat.toFixed(2)}), hv.z)), vec3(2.2)); diffuseColor.rgb = mix(diffuseColor.rgb, nc, w); }`)},i.customProgramCacheKey=()=>`body-${eo}-${JSON.stringify(e)}`,i.userData.u=r,i}function ab(s,e){const t=Kf[e.c.rig],n=e.c.height*zr,i=n/t.h,r=new Ht;s.add(r);const a=new Ht;a.matrixAutoUpdate=!1,r.add(a);const o=Math.cos(Lc*Math.PI/180),l=Math.sin(Lc*Math.PI/180),c=T=>a.matrix.set(T,0,0,0,0,o*T,0,0,0,-l*T,T,0,0,0,0,1);c(1);const h=new Ht;a.add(h);const u=BS(t.scene);u.scale.setScalar(i),u.position.y=-t.y0*i,h.add(u);const d=[],f=[t.y0,t.y0+t.h];u.traverse(T=>{if(T.isMesh){T.material=Array.isArray(T.material)?T.material.map(H=>dd(H,ud[e.c.rig],e.team,f)):dd(T.material,ud[e.c.rig],e.team,f);for(const H of[].concat(T.material))d.push(H);T.castShadow=!1,T.receiveShadow=!1,T.frustumCulled=!1}}),eo||u.traverse(T=>{T.isMesh&&T.layers.enable(Yf)});const m={};u.traverse(T=>{T.isBone&&(m[T.name]=T)});let _=null;t.tip&&u.traverse(T=>{!_&&T.isSkinnedMesh&&T.name===t.tip.name&&(_=T)});const g=new I,p=new Fe,M={p:new I,ax:new I,q:new Vt,gp:new I,gq:new Vt,gs:new I,m:new Fe,y:new Fe,s:new Fe,g:new Fe},x=T=>{const H=M;h.updateWorldMatrix(!0,!1),P.updateWorldMatrix(!1,!1),b.updateWorldMatrix(!1,!1),H.y.copy(h.matrixWorld).invert(),H.s.multiplyMatrices(H.y,P.matrixWorld),H.g.multiplyMatrices(H.y,b.matrixWorld),H.p.setFromMatrixPosition(H.s),H.ax.setFromMatrixColumn(H.s,1).normalize(),H.q.setFromAxisAngle(H.ax,T),H.g.decompose(H.gp,H.gq,H.gs),H.gp.sub(H.p).applyQuaternion(H.q).add(H.p),H.gq.premultiply(H.q),H.m.compose(H.gp,H.gq,H.gs).premultiply(p.multiplyMatrices(H.y,b.parent.matrixWorld).invert()).decompose(b.position,b.quaternion,H.gs)},y=T=>{const H=M;h.updateWorldMatrix(!0,!1),P.parent.updateWorldMatrix(!0,!1),H.m.multiplyMatrices(H.y.copy(h.matrixWorld).invert(),P.parent.matrixWorld).decompose(H.p,H.q,H.gs),H.ax.set(0,1,0).applyQuaternion(H.q.invert()),P.quaternion.premultiply(H.q.setFromAxisAngle(H.ax,T))},R=(T,H)=>{const ie=_,Q=t.tip.gi;return p.multiplyMatrices(ie.skeleton.bones[Q].matrixWorld,ie.skeleton.boneInverses[Q]),ie.localToWorld(H.copy(T).applyMatrix4(ie.bindMatrix).applyMatrix4(p).applyMatrix4(ie.bindMatrixInverse))},S=t.meta.bones||{},w=S.twist==="up",P=m[S.spine||"Spine"],C=m[S.chest||"Chest"],v=m[S.head||"Head"],b=m[S.gun||"Gun"],N=[P,C,v,b].filter(Boolean),D=N.map(T=>[T.position.clone(),T.quaternion.clone(),T.scale.clone()]),F=()=>N.forEach((T,H)=>{T.position.copy(D[H][0]),T.quaternion.copy(D[H][1]),T.scale.copy(D[H][2])}),X=()=>N.forEach((T,H)=>{D[H][0].copy(T.position),D[H][1].copy(T.quaternion),D[H][2].copy(T.scale)}),B=new Ke(new Hs(.44*n,32),new ft({color:0,transparent:!0,opacity:.62,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.scale.set(1,.8,1),B.position.y=.025,B.renderOrder=2,r.add(B);const q={me:{disc:3989594,ring:8191886,da:.5},ally:{disc:39423,ring:6079231,da:.45},foe:{disc:16722474,ring:16743034,da:.45}},V=q[e.isPlayer?"me":e.team==="blue"?"ally":"foe"],he=V.ring,re=new Ke(new Lr(.64,.86,40),new ft({color:he,transparent:!0,depthWrite:!1}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,r.add(re);const le=eo?null:new Ke(new Hs(.64,40),new ft({color:V.disc,transparent:!0,opacity:V.da,depthWrite:!1}));le&&(le.rotation.x=-Math.PI/2,le.position.y=.028,le.renderOrder=2,r.add(le));const Ue=new dM(u),ke=t.meta,Y=e.c,ne=Y.shotEnd-Y.aim,de={lower:{},upper:{}};for(const T of["lower","upper"])for(const[H,ie]of Object.entries(t[T])){const Q=Ue.clipAction(ie.clone()),ee=ke.clips[H];ee.loop||(Q.setLoop($d,1),Q.clampWhenFinished=!0),H==="idle"&&(Q.timeScale=ee.dur/Y.idle),H==="shoot"&&(Q.timeScale=ee.dur*(1-ee.hit)/ne),de[T][H]=Q}const oe={lower:null,upper:null},be=(T,H,ie=0,Q=hd)=>{const ee=de[T][H];ee&&(oe[T]===H&&(ee.isRunning()||ee.timeScale===0&&ee.isScheduled())||(ee.reset(),ee.time=ie,ee.setEffectiveWeight(1),ee.fadeIn(Q).play(),oe[T]&&oe[T]!==H&&de[T][oe[T]].fadeOut(Q),oe[T]=H))};be("lower","idle"),be("upper","idle");const Oe=ke.speed*ke.clips.run.dur*i,Be=Math.max(Oe,Math.min(Y.cycle*Y.speed,Oe/eb)),Te={x:0,vx:0,z:0,vz:0,px:e.x,pz:e.z,pvx:0,pvz:0};return{u:e,root:r,ring:re,mats:d,x:e.x,z:e.z,face:e.face,legFace:e.face,flash:0,lastMoved:e.moved,clock:0,phase:0,shotT:-99,pushT:-99,dead:!1,bodyScale:1,state:"idle",run:0,pop:1,onShot(){const T=this.u;this.face=T.face;const H=Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace));Math.abs(H)>Ea&&(this.legFace=this.face-Math.sign(H)*Ea),this.shotT=this.clock;const ie=ke.clips.shoot;be("upper","shoot",ie.hit*ie.dur,w?$S:YS),oe.upper==="shoot"&&(de.upper.shoot.time=ie.hit*ie.dur)},update(T,H,ie,Q){const ee=this.u;if(this.clock+=T,!ee.alive){this.dead=!0,r.visible=!1;return}this.dead&&(this.dead=!1,this.x=ee.x,this.z=ee.z,this.lastMoved=ee.moved,be("lower","idle"),be("upper","idle")),r.visible=ie,this.x+=(ee.x-this.x)*Math.min(1,T*20),this.z+=(ee.z-this.z)*Math.min(1,T*20),r.position.set(this.x,0,this.z);const Le=(Ce,Ne,Qe)=>{const U=Math.atan2(Math.sin(Ne-Ce),Math.cos(Ne-Ce));return Ce+Math.sign(U)*Math.min(Math.abs(U),Qe*T)};this.face=Le(this.face,ee.face,jS);const me=ee.moved-this.lastMoved,L=me/Math.max(T,1e-4);this.lastMoved=ee.moved;const E=L>.3;this.run=E?Math.min(1,this.run+T*8):Math.max(0,this.run-T*8);const z=ke.clips.shoot;ee.queue.length&&oe.upper==="shoot"&&(this.shotT=this.clock,de.upper.shoot.time=z.hit*z.dur);const K=this.clock-this.shotT<ne*.9;this.legFace=Le(this.legFace,E&&!K?ee.face:this.face,KS),h.rotation.y=Math.atan2(Math.cos(this.legFace),Math.sin(this.legFace));let Z="idle";this.clock-this.pushT<ZS+hd?(be("lower","hit"),be("upper","hit"),Z="push"):ee.dash&&de.lower.dash?(be("lower","dash"),be("upper","dash"),Z="dash"):(this.run>.5?(be("lower","run"),this.phase=(this.phase+me/Be)%1,Z="walk"):be("lower","idle"),K?(oe.upper!=="shoot"&&be("upper","shoot",ke.clips.shoot.hit*ke.clips.shoot.dur),Z=Z==="walk"?"walk":"shoot"):be("upper",this.run>.5?"run":"idle")),this.state=Z;for(const Ce of["lower","upper"]){const Ne=de[Ce].run;Ne.timeScale=0,Ne.time=this.phase*ke.clips.run.dur}if(F(),Ue.update(T),X(),P){const Ce=Math.max(-Ea,Math.min(Ea,Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace))));w?y(-Ce):P.rotateY(-Ce),b&&!w&&Math.abs(Ce)>1e-4&&x(-Ce)}const Ae=(this.x-Te.px)/Math.max(T,1e-4),ue=(this.z-Te.pz)/Math.max(T,1e-4);Te.px=this.x,Te.pz=this.z;const ge=(Ae-Te.pvx)/Math.max(T,1e-4),Ye=(ue-Te.pvz)/Math.max(T,1e-4);Te.pvx=Ae,Te.pvz=ue;const ae=Math.cos(this.legFace),_e=Math.sin(this.legFace),He=ge*ae+Ye*_e,Ve=-ge*_e+Ye*ae,ye=Math.min(T,1/30);if(Te.vx+=(-140*Te.x-Tn.c*Te.vx-Tn.gain*Tn.k*He)*ye,Te.x=Math.max(-Tn.max,Math.min(Tn.max,Te.x+Te.vx*ye)),Te.vz+=(-140*Te.z-Tn.c*Te.vz-Tn.gain*Tn.k*Ve)*ye,Te.z=Math.max(-Tn.max,Math.min(Tn.max,Te.z+Te.vz*ye)),C&&(C.rotateX(-Te.x*.6),C.rotateZ(Te.z*.6)),v&&(v.rotateX(-Te.x*.4),v.rotateZ(Te.z*.4)),w&&b&&_&&K){const Ce={x:0,y:0,z:0};for(let Ne=0;Ne<3&&this.muzzle(void 0,Ce);Ne++){const Qe=Math.atan2(Math.sin(this.face-Math.atan2(Ce.z,Ce.x)),Math.cos(this.face-Math.atan2(Ce.z,Ce.x)));if(Math.abs(Qe)<.002)break;y(-Math.max(-1.2,Math.min(1.2,Qe)))}}if(b){const Ce=K?de.upper.shoot.getEffectiveWeight():0;b.scale.multiplyScalar(1+(tb[ee.c.rig]-1)*Ce)}this.flash=Math.max(0,this.flash-T/JS),c(this.bodyScale);for(const Ce of d){Ce.emissive?.setScalar(this.flash*QS);const Ne=Q<.999;Ce.transparent!==Ne&&(Ce.transparent=Ne,Ce.needsUpdate=!0),Ce.opacity=Q}re.material.opacity=ee.isPlayer?.95:.7,this.bodyScale=1},muzzle(T=new I,H=null){return!_||!r.visible?null:(r.updateMatrixWorld(!0),R(t.tip.tip,T),H&&(g.subVectors(T,R(t.tip.back,g)).normalize(),H.x=g.x,H.y=g.y,H.z=g.z),T)},onHit(){},onPush(){this.pushT=this.clock},dispose(){s.remove(r),Ue.stopAllAction(),Ue.uncacheRoot(u),u.traverse(T=>T.skeleton?.dispose());for(const T of d)T.dispose();for(const T of[B,re,le])T&&(T.geometry.dispose(),T.material.dispose())}}}const hn=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},en=s=>{const e=new qs(s);return e.colorSpace=mt,e},Hi=(s,e,t,n,i,r)=>{const a=s.createRadialGradient(e,t,n,e,t,i);for(const[o,l]of r)a.addColorStop(o,l);return a};function jf(s,e=128){const[t,n]=hn(e),i=sn(s);for(let a=0;a<7;a++){const o=i()*6.28,l=i()*.2*e,c=e/2+Math.cos(o)*l,h=e/2+Math.sin(o)*l*.8,u=(.2+i()*.1)*e;n.fillStyle=Hi(n,c,h,u*.35,u,[[0,"rgba(255,255,255,1)"],[.55,"rgba(236,246,255,1)"],[.8,"rgba(186,212,238,0.98)"],[1,"rgba(186,212,238,0)"]]),n.beginPath(),n.arc(c,h,u,0,7),n.fill()}n.globalCompositeOperation="source-atop";const r=n.createLinearGradient(e*.25,e*.15,e*.75,e*.9);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(180,200,225,0.25)"),r.addColorStop(1,"rgba(90,120,170,0.8)"),n.fillStyle=r,n.fillRect(0,0,e,e),[t,n]}function ob(){const[s,e]=jf(11,256),t=256;e.globalCompositeOperation="source-atop";const n=(i,r,a)=>{e.fillStyle="rgba(232,247,255,0.82)",e.beginPath(),e.ellipse(i,r,a,a*.95,0,0,7),e.fill(),e.fillRect(i-a*.5,r+a*.55,a,a*.65),e.fillStyle="rgba(30,60,95,0.92)";for(const o of[-.38,.38])e.beginPath(),e.ellipse(i+o*a,r,a*.24,a*.3,0,0,7),e.fill();e.beginPath(),e.moveTo(i,r+a*.25),e.lineTo(i-a*.1,r+a*.5),e.lineTo(i+a*.1,r+a*.5),e.fill();for(let o=0;o<4;o++)e.fillRect(i-a*.4+o*a*.22,r+a*.8,a*.06,a*.32)};return n(t*.5,t*.38,t*.12),n(t*.28,t*.52,t*.085),n(t*.72,t*.55,t*.085),en(s)}function lb(s=8,e=256){const[t,n]=hn(e),i=e/2;n.fillStyle=Hi(n,i,i,4,i,[[0,"rgba(255,255,255,0.9)"],[.5,"rgba(255,255,255,0.18)"],[1,"rgba(255,255,255,0)"]]),n.fillRect(0,0,e,e),n.fillStyle="#fff",n.beginPath();for(let r=0;r<s*2;r++){const a=r*Math.PI/s-Math.PI/2,o=r%2?i*.22:i*.95;n.lineTo(i+Math.cos(a)*o,i+Math.sin(a)*o)}return n.closePath(),n.fill(),en(t)}function cb(s=128){const[e,t]=hn(s),n=s/2;return t.fillStyle=Hi(t,n,n,2,n*.5,[[0,"rgba(255,255,255,0.8)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,s,s),t.fillStyle="#fff",t.beginPath(),t.moveTo(n,2),t.quadraticCurveTo(n+5,n-5,s-2,n),t.quadraticCurveTo(n+5,n+5,n,s-2),t.quadraticCurveTo(n-5,n+5,2,n),t.quadraticCurveTo(n-5,n-5,n,2),t.fill(),en(e)}function hb(s=64){const[e,t]=hn(s),n=s/2;t.fillStyle="#fff",t.beginPath();for(let i=0;i<10;i++){const r=i*Math.PI/5-Math.PI/2,a=i%2?n*.42:n*.95;t.lineTo(n+Math.cos(r)*a,n+Math.sin(r)*a)}return t.closePath(),t.fill(),en(e)}function ub(){const s={};s.puff=[1,2,3,4].map(e=>en(jf(e*17)[0])),s.skull=ob(),s.burst=lb(8),s.twinkle=cb(),s.smallStar=hb();{const[e,t]=hn(64);t.fillStyle=Hi(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.6,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.dot=en(e)}{const[e,t]=hn(64);t.fillStyle=Hi(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.82,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.disc=en(e)}{const[e,t]=hn(64,32),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"#9a6a1a"),n.addColorStop(.5,"#fff0a0"),n.addColorStop(1,"#c8962a"),t.fillStyle=n,t.fillRect(6,8,52,16),t.fillStyle="#7a5410",t.fillRect(52,8,6,16),s.shell=en(e)}{const[e,t]=hn(64),n=sn(5);t.fillStyle="#fff",t.beginPath();for(let r=0;r<7;r++){const a=r/7*6.28,o=20+n()*10;t.lineTo(32+Math.cos(a)*o,32+Math.sin(a)*o)}t.closePath(),t.fill(),t.globalCompositeOperation="source-atop";const i=t.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(90,80,70,0.7)"),t.fillStyle=i,t.fillRect(0,0,64,64),s.rock=en(e)}{const[e,t]=hn(128),n=sn(9);t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round";for(let i=0;i<5;i++){let r=i/5*6.28+n()*.5,a=64,o=64;t.lineWidth=6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<4;l++)r+=(n()-.5)*1.1,a+=Math.cos(r)*15,o+=Math.sin(r)*15,t.lineTo(a,o),t.lineWidth=6-l;t.stroke()}s.crack=en(e)}{const[e,t]=hn(128);t.fillStyle=Hi(t,64,64,0,64,[[0,"rgba(255,255,255,0)"],[.55,"rgba(255,255,255,0)"],[.74,"rgba(255,255,255,1)"],[.9,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),s.ring=en(e)}{const[e,t]=hn(128);t.fillStyle=Hi(t,64,64,0,64,[[0,"rgba(255,255,255,0.06)"],[.78,"rgba(255,255,255,0.16)"],[.92,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(64,64,44,3.5,4.5),t.stroke(),s.bubble=en(e)}{const[e,t]=hn(128,16),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.fillRect(0,0,128,16),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,16),s.dash=en(e)}return s}const dt=(s,e)=>s+Math.random()*(e-s),ze=(s,e)=>s+(Math.random()-.5)*2*e,db=new tn(1,1).rotateX(-Math.PI/2),fb={tex:null,add:!1,flat:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,dz:0,drag:0,bounce:0,fric:0,floor:!1,delay:0,life:1,size:1,s0:1,s1:1,aspect:1,a0:1,fadeIn:0,fadeOut:.3,rot:0,spin:0,spin1:null,color:16777215,color2:null,ro:0,blink:0,ease:0,kind:"",follow:null,fy:0};function pb(s,{sp:e=260,ad:t=200,fl:n=70}={}){const i={sp:[],ad:[],fl:[]},r=[],a={},o={},l=(f,m,_)=>{const g=m?new ft({transparent:!0,depthWrite:!1}):new uo({transparent:!0,depthWrite:!1,depthTest:!1,..._?{blending:Pl}:{}}),p=m?new Ke(db,g):new eh(g);p.visible=!1,p.frustumCulled=!1,p.renderOrder=m?4:8,s.add(p),i[f].push({m:p,mat:g,flat:m,list:f,gen:0,c0:new we,c1:new we,has2:!1})};for(let f=0;f<e;f++)l("sp",!1,!1);for(let f=0;f<t;f++)l("ad",!1,!0);for(let f=0;f<n;f++)l("fl",!0,!1);let c=0;function h(f){f.m.visible=!1,r.splice(r.indexOf(f),1),i[f.list].push(f),f.kind&&a[f.kind]--}function u(f){const m=f.flat?"fl":f.add?"ad":"sp",_=i[m].pop();return _?f.kind&&o[f.kind]!==void 0&&(a[f.kind]||0)>=o[f.kind]?(i[m].push(_),null):(Object.assign(_,fb,f),_.gen=++c,_.t=-_.delay,_.vis=!1,_.c0.setHex(_.color),_.has2=_.color2!=null,_.has2&&_.c1.setHex(_.color2),_.mat.map=_.tex,_.mat.color.copy(_.c0),_.mat.opacity=0,_.m.renderOrder=_.ro||(_.flat?4:8),_.flat?_.m.rotation.y=_.rot:_.mat.rotation=_.rot,_.kind&&(a[_.kind]=(a[_.kind]||0)+1),r.push(_),_):null}function d(f){const m=Math.max(1,Math.ceil(f/.0167)),_=f/m;for(let g=r.length-1;g>=0;g--){const p=r[g];if(p.t+=f,p.t<0)continue;let M=p.t/p.life;if(M>=1){h(p);continue}if(p.vis||(p.vis=!0,p.m.visible=!0),p.follow)p.x=p.follow.x,p.z=p.follow.z,p.y=p.fy;else for(let S=0;S<m;S++){if(p.vy+=p.g*_,p.dz&&p.vy>0&&(p.vy=Math.max(0,p.vy-p.dz*_)),p.drag){const w=Math.exp(-p.drag*_);p.vx*=w,p.vz*=w}p.x+=p.vx*_,p.y+=p.vy*_,p.z+=p.vz*_,p.floor&&p.y<.04&&(p.y=.04,p.vy<-.4&&p.bounce?(p.vy=-p.vy*p.bounce,p.vx*=1-p.fric,p.vz*=1-p.fric):(p.vy=0,p.vx*=1-Math.min(1,6*_),p.vz*=1-Math.min(1,6*_)))}p.ease&&(M=1-(1-M)*(1-M));const x=(p.s0+(p.s1-p.s0)*M)*p.size,y=p.t/p.life;let R=p.a0;p.fadeIn&&y<p.fadeIn&&(R*=y/p.fadeIn),p.fadeOut&&y>1-p.fadeOut&&(R*=(1-y)/p.fadeOut),p.blink&&(R*=.5+.5*Math.sin(p.t*p.blink)),p.m.position.set(p.x,p.y,p.z),p.mat.opacity=R,p.has2&&p.mat.color.lerpColors(p.c0,p.c1,y),p.spin&&(p.rot+=(p.spin1==null?p.spin:p.spin+(p.spin1-p.spin)*y)*f,p.flat?p.m.rotation.y=p.rot:p.mat.rotation=p.rot),p.flat?p.m.scale.set(x,1,x*p.aspect):p.m.scale.set(x,x*p.aspect,1)}}return{emit:u,update:d,setCap:(f,m)=>{o[f]=m},count:f=>a[f]||0,clear(){for(;r.length;)h(r[r.length-1])},get alive(){return r.length}}}const mb={dealer:{fwd:.5,up:.449},tank:{fwd:.784,up:.611},sniper:{fwd:.666,up:.416}},Ir={blue:{gas0:6742271,gas1:3385599,spark:5098751,line:23039,tint:10476799,ball:"blue"},red:{gas0:16744608,gas1:16721472,spark:16731494,line:16711769,tint:16756920,ball:"red"}},Ha=s=>s.c.height*zr*ph()*.45;function Zf(s,e){const t=mb[s.c.rig],n=s.c.height*zr;return{x:s.x+Math.cos(e)*t.fwd*n,y:t.up*n*ph(),z:s.z+Math.sin(e)*t.fwd*n}}const wi=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},Ei=s=>{const e=new qs(s);return e.colorSpace=mt,e},xl={blue:{main:"#2f7fe6",dark:"#123c86",lite:"#8fd0ff",halo:"rgba(70,190,220,0.45)",orb:"#5a5cff",orbLite:"#b8b4ff",orbDark:"#1c1a6a",slug:"#38d6ff",slugEdge:"#6a5cff",slugHalo:"rgba(28,22,110,0.55)"},red:{main:"#f0462a",dark:"#8a1408",lite:"#ffb08a",halo:"rgba(150,20,30,0.45)",orb:"#ff3a46",orbLite:"#ffc0c0",orbDark:"#6a0a14",slug:"#ff5aa8",slugEdge:"#ff6a7a",slugHalo:"rgba(110,10,30,0.55)"}};function vl(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arc(e+n-r,t+r,r,-Math.PI/2,Math.PI/2),s.lineTo(e+r,t+i),s.arc(e+r,t+r,r,Math.PI/2,Math.PI*1.5),s.closePath()}function gb(s){const[e,t]=wi(128,64);return t.fillStyle=s.halo,t.beginPath(),t.ellipse(66,32,56,30,0,0,7),t.fill(),vl(t,20,13,92,38,19),t.fillStyle=s.dark,t.fill(),vl(t,24,17,84,30,15),t.fillStyle=s.main,t.fill(),vl(t,34,20,66,9,4.5),t.fillStyle=s.lite,t.globalAlpha=.75,t.fill(),t.globalAlpha=1,t.fillStyle=s.dark,t.globalAlpha=.5,t.fillRect(52,17,4,30),t.globalAlpha=1,Ei(e)}function _b(s){const[e,t]=wi(64);t.fillStyle=s.orbDark,t.globalAlpha=.55,t.beginPath(),t.arc(32,32,31,0,7),t.fill(),t.globalAlpha=1;const n=t.createRadialGradient(27,27,2,32,32,23);return n.addColorStop(0,s.orbLite),n.addColorStop(.55,s.orb),n.addColorStop(1,s.orbDark),t.fillStyle=n,t.beginPath(),t.arc(32,32,23,0,7),t.fill(),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.ellipse(25,24,6,4,-.6,0,7),t.fill(),Ei(e)}function xb(s){const[e,t]=wi(192,64);t.fillStyle=s.slugHalo,t.beginPath(),t.ellipse(120,32,64,30,0,-Math.PI/2,Math.PI/2),t.lineTo(60,62),t.lineTo(60,2),t.closePath(),t.fill();const n=i=>{t.beginPath(),t.moveTo(40+i,18+i),t.lineTo(130,18+i),t.quadraticCurveTo(168-i,22+i*.3,178-i*1.6,32),t.quadraticCurveTo(168-i,42-i*.3,130,46-i),t.lineTo(40+i,46-i),t.closePath()};return n(0),t.fillStyle=s.slugEdge,t.fill(),n(4),t.fillStyle=s.slug,t.fill(),t.fillStyle="rgba(255,255,255,0.85)",t.beginPath(),t.moveTo(52,29),t.lineTo(150,29),t.quadraticCurveTo(160,32,150,35),t.lineTo(52,35),t.closePath(),t.fill(),t.fillStyle=s.slugEdge,t.globalAlpha=.8,t.fillRect(64,20,4,24),t.globalAlpha=1,Ei(e)}function Ta(s){const[e,t]=wi(128,32),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,s+"00"),n.addColorStop(.45,s+"70"),n.addColorStop(.8,s+"d8"),n.addColorStop(1,s),t.fillStyle=n,t.fillRect(0,0,128,32),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,32);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"rgba(0,0,0,1)"),i.addColorStop(.7,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,32),Ei(e)}function vb(){const[s,e]=wi(128),t=64;e.fillStyle="#ffb21e",e.beginPath();for(let i=0;i<14;i++){const r=i*Math.PI/7,a=i%2?t*.42:t*(.8+.18*Math.sin(i*2.3));e.lineTo(t+Math.cos(r)*a,t+Math.sin(r)*a)}e.closePath(),e.fill();const n=e.createRadialGradient(t,t,2,t,t,t*.5);return n.addColorStop(0,"#fff"),n.addColorStop(.6,"#fff6b0"),n.addColorStop(1,"rgba(255,220,90,0)"),e.fillStyle=n,e.beginPath(),e.arc(t,t,t*.5,0,7),e.fill(),Ei(s)}function yb(){const[s,e]=wi(128,32),t=(n,i)=>{e.beginPath(),e.moveTo(0,16-n),e.quadraticCurveTo(70,16-n*.6,128,16),e.quadraticCurveTo(70,16+n*.6,0,16+n),e.closePath(),e.fillStyle=i,e.fill()};return t(13,"#ff9a1a"),t(7,"#ffe866"),t(3,"#fffbe0"),Ei(s)}function Mb(){const[s,e]=wi(64);return e.fillStyle="#fff",e.beginPath(),e.arc(32,34,22,.2,Math.PI*1.7),e.arc(40,28,13,Math.PI*1.6,.4,!0),e.closePath(),e.fill(),Ei(s)}function Sb(){const[s,e]=wi(128),t=64;e.strokeStyle="#fff",e.lineWidth=5,e.beginPath(),e.arc(t,t,30,0,7),e.stroke(),e.fillStyle="rgba(255,255,255,0.18)",e.beginPath(),e.arc(t,t,28,0,7),e.fill(),e.fillStyle="#fff";for(let n=0;n<3;n++){const i=n*2*Math.PI/3-Math.PI/2,r=Math.cos(i),a=Math.sin(i);e.beginPath(),e.moveTo(t+r*26-a*9,t+a*26+r*9),e.quadraticCurveTo(t+r*40,t+a*40,t+r*62,t+a*62),e.quadraticCurveTo(t+r*40,t+a*40,t+r*26+a*9,t+a*26-r*9),e.closePath(),e.fill()}return Ei(s)}function bb(){const s={};for(const e of["blue","red"])s[e]={capsule:gb(xl[e]),orb:_b(xl[e]),slug:xb(xl[e])};return s.blue.streak=Ta("#3a8cff"),s.red.streak=Ta("#ff3a2a"),s.blue.streakSnipe=Ta("#7a6cff"),s.red.streakSnipe=Ta("#ff5a8a"),s.flash=vb(),s.jet=yb(),s.wisp=Mb(),s.thornRing=Sb(),s}const fd=Math.sin(Qi*Math.PI/180),wb=new tn(1,1).rotateX(-Math.PI/2),Eb=1.2,pd=s=>s*s*(3-2*s),Aa={dealer:{tex:"capsule",head:[.65,.36],tip:.875,back:.4,tail:[1.9,.2,1],grow:.25,sh:1.3,n:1},tank:{tex:"orb",head:[.24,.24],tip:.5,back:.08,tail:[1.6,.15,.9],grow:.4,sh:1,n:4},sniper:{tex:"slug",head:[.84,.5],tip:.93,back:.55,tail:[.6,.14,.5],grow:.1,sh:1,n:1}},Tb=[[.22,0],[0,.25],[0,-.25],[-.22,0]],Ab=.133;function Rb(s,e,t,n,i){const r=bb(),a=new Map,o={dealer:[],tank:[],sniper:[]},l=new I;e.setCap("sniperLine",8),e.setCap("sniperSmoke",8),e.setCap("sniperSpark",10);const c=(d,f,m)=>{const _=new eh(new uo({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return _.renderOrder=f,_.frustumCulled=!1,_.center.set(m,.5),s.add(_),_},h=d=>{const f=Aa[d],m=[];for(let g=0;g<f.n;g++)m.push({head:c(!1,9,f.tip),tail:c(!1,8,1)});const _=new Ke(wb,new ft({map:t.disc,color:0,transparent:!0,opacity:102/255,depthWrite:!1}));return _.renderOrder=3,_.frustumCulled=!1,s.add(_),{rig:d,parts:m,sh:_}},u=(d,f)=>{for(const m of d.parts)m.head.visible=m.tail.visible=f;d.sh.visible=f};return{update(d,f){for(const m of f.bullets){let _=a.get(m);const g=m.owner.c.rig,p=Aa[g]||Aa.dealer;if(!_){_=o[g]?.pop()||h(Aa[g]?g:"dealer"),_.acc=0,_.age=0,u(_,!0),a.set(m,_);const N=m.isSuper?1.3:1,D=Ir[m.team].ball;_.k=N,_.went0=m.went;for(const X of _.parts)X.head.material.map=r[D][p.tex],X.head.scale.set(p.head[0]*N,p.head[1]*N,1),X.tail.material.map=g==="sniper"?r[D].streakSnipe:r[D].streak,X.tail.material.opacity=p.tail[2];const F=n(m.owner,l)||Zf(m.owner,m.ang);_.ox=F.x-m.x,_.oz=F.z-m.z,_.y=F.y,_.sh.scale.set(.57*p.sh*N,1,.46*p.sh*N),i&&(i.push({k:"bullet",id:m.owner.id,rig:g,x:F.x,y:F.y,z:F.z,t:f.t}),i.length>300&&i.shift())}_.age+=d;const M=m.went-_.went0,x=1-pd(Math.min(1,M/Eb)),y=m.x+_.ox*x,R=m.z+_.oz*x,S=Math.hypot(m.vx,m.vz)||1,w=m.vx/S,P=m.vz/S,C=Math.atan2(-P*fd,w),v=Math.min(p.tail[0]*_.k*Math.min(1,_.age/p.grow),M-p.back*_.k+.3),b=pd(Math.min(1,_.age/Ab));_.parts.forEach((N,D)=>{let F=y,X=R;if(_.parts.length>1){const[q,V]=Tb[D];F+=(w*q-P*V)*b*_.k,X+=(P*q+w*V)*b*_.k}N.head.position.set(F,_.y,X),N.head.material.rotation=C;const B=p.back*_.k;N.tail.position.set(F-w*B,_.y,X-P*B),N.tail.material.rotation=C,N.tail.visible=v>.05,N.tail.scale.set(Math.max(.01,v),p.tail[1]*_.k,1)}),_.sh.position.set(y,.045,R),_.sh.rotation.y=-Math.atan2(P,w),g==="sniper"&&this.trail(_,m,y,R,d,w,P)}for(const[m,_]of a)f.bullets.includes(m)||(u(_,!1),o[_.rig].push(_),a.delete(m))},trail(d,f,m,_,g,p,M){const x=Ir[f.team],y=d.y;d.acc+=g*10;const R=Math.atan2(-M*fd,p);for(;d.acc>=1;){d.acc-=1;const S=dt(10,15);e.emit({tex:t.dash,add:!0,kind:"sniperLine",x:m,y,z:_,vx:-p*S,vz:-M*S,life:ze(.15,.02),size:1.1,s0:ze(.8,.2),aspect:.09,a0:.95,fadeOut:.5,rot:R,color:x.line}),e.emit({tex:t.puff[1],kind:"sniperSmoke",x:m,y,z:_,delay:.1,life:.28,size:.6,s0:.5,s1:.7,a0:.5,fadeIn:.3,fadeOut:.5,color:15922943}),e.emit({tex:t.twinkle,add:!0,kind:"sniperSpark",x:ze(m,.08),y:ze(y,.08),z:ze(_,.08),vy:.5,life:ze(.7,.3),size:.4,s0:.7,s1:.01,a0:.9,fadeOut:.5,spin:4,color:x.spark})}},clear(){for(const[,d]of a)u(d,!1),o[d.rig].push(d);a.clear()},tex:r}}const Cb=Math.sin(Qi*Math.PI/180),md={dealer:{cloud:1.1,jet:.75,life:.3},tank:{cloud:1.6,jet:1.1,life:.42}},gd=16052710,Pb=15257510,Lb=15790834;function Ib(s,e,t){s.setCap("hitDust",24),s.setCap("frag",60),s.setCap("rock",30),s.setCap("shell",16);const n=()=>e.puff[Math.random()*4|0];function i(o,l,c,h){s.emit({tex:e.burst,add:!0,x:o,y:l,z:c,life:ze(.045,.015),size:1.2,s0:1,s1:.25,a0:1,fadeOut:0,rot:Math.random()*6.28,color:16773296});const u=Math.random()*6.28,d=dt(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:o,y:l,z:c,vx:Math.cos(u)*d,vz:Math.sin(u)*d,g:2.1,life:ze(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:h})}function r(o,l,c,h,u,d=1){const f=l+(o.cid==="tank"?100*Math.PI/180:Math.PI/2),m=dt(2.8,4)*d;s.emit({tex:e.shell,kind:"shell",x:(c+o.x)/2,y:h,z:(u+o.z)/2,vx:Math.cos(f)*m,vz:Math.sin(f)*m,vy:dt(2.25,4.5)*d,g:-30,bounce:.65,fric:.35,floor:!0,life:ze(1.5,.5),size:.2,s0:.6,s1:.7,aspect:.5,a0:1,fadeOut:.25,rot:Math.random()*6.28,spin:dt(-14,14),color:16777215})}function a(o,l,c,h){const u=h?1.5:1,d=c.cloud*u,f=Math.cos(l),m=Math.sin(l),_=Math.atan2(-m*Cb,f),g=c.jet*u;s.emit({tex:t.flash,ro:10,x:o.x,y:o.y,z:o.z,life:.067,size:d*.7,s0:.8,s1:1.2,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16777215}),s.emit({tex:t.jet,add:!0,x:o.x+f*g*.5,y:o.y,z:o.z+m*g*.5,delay:.016,life:.067,size:g,s0:1,s1:1.1,aspect:.4,a0:1,fadeOut:.4,rot:_,color:16777215}),s.emit({tex:n(),x:o.x,y:o.y,z:o.z,vx:f*.6,vz:m*.6,vy:.3,delay:.033,life:c.life*.8,size:d,s0:.7,s1:1,a0:1,fadeOut:.35,rot:Math.random()*6.28,color:16777215,color2:12896462});for(let p=0;p<4;p++){const M=l+Math.PI*(p/2-.75)+ze(0,.3),x=dt(.8,1.6);s.emit({tex:t.wisp,x:o.x+Math.cos(M)*d*.2,y:o.y+ze(0,d*.15),z:o.z+Math.sin(M)*d*.2,vx:Math.cos(M)*x+f*.5,vz:Math.sin(M)*x+m*.5,vy:.4,delay:.09,life:ze(c.life-.09,.04),size:d*.38,s0:1,s1:.45,a0:.95,fadeOut:.5,rot:Math.random()*6.28,spin:ze(0,3),color:14343650})}for(let p=0;p<6;p++){const M=l+ze(0,.9),x=dt(3,6)*u;s.emit({tex:e.dot,add:!0,x:o.x,y:o.y,z:o.z,vx:Math.cos(M)*x,vz:Math.sin(M)*x,vy:dt(-.5,1.5),life:dt(.12,.3),size:.1*u,a0:1,fadeOut:.4,color:16754746})}}return{hit(o,l){const c=ze(o.x,.12),h=Ha(o)+dt(-.1,.2),u=ze(o.z,.1);if(l?.cid!=="sniper"||l.dash){i(c,h,u,gd);return}s.emit({tex:e.burst,add:!0,x:c,y:h,z:u,life:.05,size:.8,s0:.5,s1:1,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16769136}),s.emit({tex:t.thornRing,add:!0,x:c,y:h,z:u,delay:.05,life:.15,size:.8,s0:.55,s1:.85,a0:1,fadeOut:.6,rot:Math.random()*6.28,spin:2,color:Ir[l.team].spark});const d=Math.random()*6.28,f=dt(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:c,y:h,z:u,vx:Math.cos(d)*f,vz:Math.sin(d)*f,g:2.1,life:ze(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:gd})},wall(o){i(o.x,.5,o.z,Pb);for(let l=0;l<3;l++){const c=Math.random()*6.28,h=dt(.8,1.6);s.emit({tex:e.rock,kind:"rock",x:o.x,y:.5,z:o.z,vx:Math.cos(c)*h,vz:Math.sin(c)*h,vy:dt(2.25,4.5),g:-30,bounce:.3,fric:.4,floor:!0,life:ze(.55,.45)+.1,size:.24,s0:.75,s1:.4,a0:1,fadeOut:.3,spin:dt(-12,12),color:qi.wallSide})}},fizzle(o){const l=o.owner.cid==="tank",c=.5,h=o.isSuper?1.2:1;for(let d=0;d<(l?2:1);d++){const f=l?.5:.3;s.emit({tex:n(),x:ze(o.x,f),y:c,z:ze(o.z,f),vy:.3,life:.48,size:1.1*h,s0:.6,s1:1,a0:.85,fadeOut:.6,rot:Math.random()*6.28,color:Lb})}const u=l?3:7;for(let d=0;d<u;d++)s.emit({tex:e.rock,kind:"frag",x:o.x,y:c,z:o.z,vx:ze(0,3),vz:ze(0,3),vy:dt(8,18),g:-105,bounce:.4,fric:.3,floor:!0,life:ze(.6,.3),size:.55,s0:.4,s1:0,a0:1,fadeOut:.2,spin:7,spin1:0,color:12099696})},muzzle(o,l,c,h){if(s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.08,size:c?.8:.48,s0:.7,s1:1.5,a0:.9,fadeOut:.6,rot:Math.random()*6.28,color:o.team==="blue"?6079231:16743034}),o.cid==="sniper"){s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.1,size:c?.9:.5,s0:1,s1:2,a0:1,fadeOut:.5,rot:Math.random()*6.28,color:16773824});for(let u=0;u<7;u++){const d=l+ze(0,.7),f=dt(4,4.8);s.emit({tex:e.twinkle,add:!0,x:h.x,y:h.y,z:h.z,vx:Math.cos(d)*f,vz:Math.sin(d)*f,vy:dt(.5,2),g:-6,life:ze(.525,.225),size:.26,s0:.5,s1:.01,a0:1,fadeOut:.4,spin:6,color:16765040})}for(let u=0;u<5;u++)s.emit({tex:n(),x:ze(h.x,.1),y:h.y,z:ze(h.z,.1),vx:Math.cos(l)*.6,vz:Math.sin(l)*.6,vy:.5,life:ze(1.35,.35),size:.9,s0:.5,s1:.1,a0:.5,fadeOut:.8,rot:Math.random()*6.28,color:15659252});r(o,l,h.x,h.y,h.z,1.4)}else a(h,l,md[o.cid]||md.dealer,c),r(o,l,h.x,h.y,h.z)}}}function Db(s,e){s.setCap("gas",90),s.setCap("twinkle",60),s.setCap("dust20",60),s.setCap("crack",4),s.setCap("drock",10),s.setCap("ddust",20),s.setCap("ready",66);const t=()=>e.puff[Math.random()*4|0],n=(i,r)=>{const a=ze(0,i),o=Math.random()*6.28;return[Math.sin(a)*r*Math.cos(o),Math.cos(a)*r,Math.sin(a)*r*Math.sin(o)]};return{death(i){const r=Ir[i.team],a=i.x,o=i.z,l=Ha(i);s.emit({tex:e.skull,x:a,y:l+.45,z:o,ro:9,life:.85,size:2.5*1.425,s0:.8,s1:1.1,a0:.95,fadeOut:.45,color:12119295,color2:9427199}),s.emit({tex:e.burst,add:!0,x:a,y:l,z:o,life:.4,size:2*ze(1,.15),s0:.6,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.tint});for(let c=0;c<30;c++){const h=Math.random()*6.28,u=ze(2,1)*1.4;s.emit({tex:t(),kind:"gas",delay:Math.random()*.12,x:ze(a,.25),y:l+dt(-.2,.3),z:ze(o,.25),vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2,drag:4.4,life:ze(.45,.15),size:.7,s0:.8,s1:3.5+ze(0,.8),a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.gas0,color2:r.gas1})}for(let c=0;c<20;c++){const[h,u,d]=n(.35,ze(12,4));s.emit({tex:e.twinkle,add:!0,kind:"twinkle",x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-28,dz:12,bounce:.45,fric:.3,floor:!0,life:ze(.9,.4),size:.5,s0:ze(.7,.3),s1:0,a0:1,fadeOut:.3,spin:dt(-5,5),color:r.spark})}s.emit({tex:e.ring,flat:!0,x:a,y:.4,z:o,vy:7,dz:10,life:1.2,size:4*.35,s0:.7,s1:1.8,a0:.55,fadeOut:.6,color:16777215});for(let c=0;c<20;c++){const[h,u,d]=n(.78,2.5);s.emit({tex:e.smallStar,add:!0,kind:"dust20",delay:Math.random()**2*.35,x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-6,life:ze(.8,.05),size:.3,s0:ze(.9,.2),s1:ze(.9,.2),a0:1,fadeOut:.3,blink:38,spin:dt(-3,3),color:16777215})}},spawn(i,r){const a=Ir[i.team],o=Ha(i);s.emit({tex:e.bubble,add:!0,x:i.x,y:o,z:i.z,life:2,size:2.6,s0:0,s1:1,ease:1,a0:.85,fadeOut:.4,color:a.tint,follow:i,fy:o});const l=s.emit({tex:e.dot,add:!0,x:i.x,y:o,z:i.z,life:3,size:2,s0:1,s1:1,a0:.2,fadeOut:.15,blink:9,color:16777215,follow:i,fy:o});l&&r.set(i,{gen:l.gen,p:l,t:i.lastShot})},ready(i){const r=Ha(i);for(let a=0;a<33;a++){const o=Math.random()*6.28,l=dt(.8,1.5),c=ze(.375,.075),h=r+dt(-.5,.6);s.emit({tex:e.dot,add:!0,kind:"ready",x:i.x+Math.cos(o)*l,y:h,z:i.z+Math.sin(o)*l,vx:-Math.cos(o)*l/c,vz:-Math.sin(o)*l/c,vy:(r-h)/c,life:c,size:.3,s0:.7,s1:.01,a0:1,fadeOut:.2,color:16767050})}},dash(i,r,a){for(a.crack=(a.crack||0)+r*14.3,a.rock=(a.rock||0)+r*18,a.dust=(a.dust||0)+r*45;a.crack>=1;)a.crack--,s.emit({tex:e.crack,flat:!0,kind:"crack",x:i.x,y:.05,z:i.z,life:.7,size:1.3,s0:1,s1:1.05,a0:.8,fadeOut:.5,rot:Math.random()*6.28,color:3811866});for(;a.rock>=1;){a.rock--;const o=Math.random()*6.28,l=dt(.5,2);s.emit({tex:e.rock,kind:"drock",x:ze(i.x,.2),y:.2,z:ze(i.z,.2),vx:Math.cos(o)*l,vz:Math.sin(o)*l,vy:dt(9,22.5),g:-105,bounce:.3,fric:.4,floor:!0,life:ze(.55,.25),size:.26,s0:1,s1:.7,a0:1,fadeOut:.2,spin:dt(-12,12),color:13152392})}for(;a.dust>=1;)a.dust--,s.emit({tex:t(),kind:"ddust",x:ze(i.x,.3),y:.25,z:ze(i.z,.3),vy:.8,life:ze(.35,.15),size:.7,s0:1.5,s1:.01,a0:.9,fadeOut:.3,rot:Math.random()*6.28,color:15128240})}}}const Nb={dealer:.3,tank:.3,sniper:.4};function Ub(s,{muzzleOf:e=()=>null}={}){const t=ub(),n=pb(s),i=[],r=new I,a=[],o=Rb(s,n,t,e,i),l=Ib(n,t,o.tex),c=Db(n,t);n.setCap("walk",40);const h=new Map,u=new Map,d=new Map;let f=null;const m=new go(.22,0),_=Nf(qi.gem,{emissive:6955184,ei:.6});function g(){a.length=0,n.clear(),o.clear(),u.clear(),d.clear();for(const x of h.values())s.remove(x);h.clear()}const p=x=>{let y=u.get(x);return y||(y={step:0,moved:x.moved,ready:x.superCharge>=1},u.set(x,y)),y};return{onEvent(x){switch(x.type){case"shot":a.push([x.u,x.ang,!1]);break;case"super":x.u.cid!=="tank"&&a.push([x.u,x.ang,!0]);break;case"hit":l.hit(x.u,x.from);break;case"wall":l.wall(x.b);break;case"fizzle":l.fizzle(x.b);break;case"death":c.death(x.u);break;case"spawn":c.spawn(x.u,d);break;case"gem":n.emit({tex:t.dot,add:!0,x:x.u.x,y:.9,z:x.u.z,life:.25,size:1,s0:.5,s1:1.8,a0:.9,fadeOut:1,color:qi.gemGlow});break}},update(x,y,R){R!==f&&(g(),f=R);for(const[S,w,P]of a.splice(0)){const C=e(S,r)||Zf(S,w);l.muzzle(S,w,P,C),i.push({k:"smoke",id:S.id,rig:S.c.rig,x:C.x,y:C.y,z:C.z,t:R.t}),i.length>300&&i.shift()}o.update(x,R);for(const S of R.gems){let w=h.get(S);if(!w){w=new Ht;const P=new Ke(m,_);P.castShadow=!0,w.add(P);const C=new eh(new uo({map:t.dot,color:qi.gemGlow,transparent:!0,depthWrite:!1,opacity:.55}));C.scale.setScalar(1.1),w.add(C),s.add(w),h.set(S,w)}w.position.set(S.x,.45+Math.sin(y*4+S.x)*.08,S.z),w.children[0].rotation.y=y*2.5}for(const[S,w]of h)R.gems.includes(S)||(s.remove(w),h.delete(S));for(const S of R.units){const w=p(S);if(!S.alive){w.moved=S.moved;continue}R.t>0&&R.t<.3&&!w.born&&(w.born=!0,c.spawn(S,d));const P=S.moved-w.moved;w.moved=S.moved,S.dash?c.dash(S,x,w):P/Math.max(x,.001)>S.c.speed*.3&&Xi(R,"blue",S)?(w.step-=x,w.step<=0&&(w.step+=Nb[S.cid]??.3,n.emit({tex:t.puff[Math.random()*4|0],kind:"walk",x:S.x,y:.12,z:S.z,g:1.5,life:1.8+(Math.random()-.5)*1.2,size:.7,s0:.5,s1:1,a0:.26,fadeOut:.8,rot:Math.random()*6.28,color:15328464}))):w.step=0,S.superCharge>=1&&!w.ready&&S.team==="blue"&&c.ready(S),w.ready=S.superCharge>=1}for(const[S,w]of d){if(w.p.gen!==w.gen){d.delete(S);continue}(!S.alive||S.lastShot>w.t)&&(w.p.life=Math.min(w.p.life,w.p.t+.15),d.delete(S))}n.update(x)},dispose(){g(),f=null},log:i}}const _d=16,Ob=62;function Fb(s,e){const t={move:null,atk:null,sup:null,mx:0,mz:0,aim:null,aimKind:null,fire:null,superFire:null,keys:new Set};function n(a,o,l){const c=a.clientX-o,h=a.clientY-l,u=Math.hypot(c,h);return{dx:c,dy:h,d:u}}const i=a=>{const o=a.getBoundingClientRect();return[o.left+o.width/2,o.top+o.height/2]};s.addEventListener("pointerdown",a=>{if(!e.active())return;a.preventDefault();const[o,l]=i(e.atkBtn),[c,h]=i(e.supBtn),u=e.atkBtn.getBoundingClientRect().width*.62,d=e.supBtn.getBoundingClientRect().width*.6;Math.hypot(a.clientX-c,a.clientY-h)<d&&!t.sup?(t.sup={id:a.pointerId,cx:c,cy:h,t0:performance.now(),d:0},e.hold?.("sup",!0)):Math.hypot(a.clientX-o,a.clientY-l)<u&&!t.atk?(t.atk={id:a.pointerId,cx:o,cy:l,t0:performance.now(),d:0},e.hold?.("atk",!0)):a.clientX<innerWidth*.5&&!t.move&&(t.move={id:a.pointerId,cx:a.clientX,cy:a.clientY},e.showStick(a.clientX,a.clientY)),s.setPointerCapture?.(a.pointerId)},{passive:!1}),s.addEventListener("pointermove",a=>{for(const o of["move","atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const{dx:c,dy:h,d:u}=n(a,l.cx,l.cy),d=Math.min(u,Ob)/(u||1);if(l.d=Math.max(l.d,u),o==="move"){const f=u||1,m=Math.min(1,u/30);t.mx=c/f*m,t.mz=h/f*m,e.moveStick(c*d,h*d)}else t.aim=u>_d?Math.atan2(h,c):null,t.aimKind=o,e.moveKnob(o,c*d,h*d)}});function r(a){t.move?.id===a.pointerId&&(t.move=null,t.mx=t.mz=0,e.hideStick());for(const o of["atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const c=l.d>_d?t.aim:"auto";o==="atk"?t.fire=c:t.superFire=c,t[o]=null,t.aim=null,t.aimKind=null,e.moveKnob(o,0,0),e.hold?.(o,!1)}}return s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),addEventListener("keydown",a=>{t.keys.add(a.code),a.code==="Space"&&(t.fire="auto"),a.code==="KeyE"&&(t.superFire="auto")}),addEventListener("keyup",a=>t.keys.delete(a.code)),{st:t,move(){const a=t.keys;let o=t.mx,l=t.mz;return(a.has("KeyA")||a.has("ArrowLeft"))&&(o-=1),(a.has("KeyD")||a.has("ArrowRight"))&&(o+=1),(a.has("KeyW")||a.has("ArrowUp"))&&(l-=1),(a.has("KeyS")||a.has("ArrowDown"))&&(l+=1),[o,l]},take(){const a=t.fire,o=t.superFire;return t.fire=null,t.superFire=null,[a,o]}}}const hr=2;function kb(s){const e=[],t=new Map;for(const n of[...s].sort((i,r)=>r.y-i.y)){const i=([l,c])=>!e.some(h=>Math.abs(h.x-l)<(h.w+n.w)/2+hr&&c>h.y-h.h-hr&&c-n.h<h.y+hr),r=n.y,a=[[n.x,r]];for(const l of e){const c=(l.w+n.w)/2+hr;a.push([n.x,l.y-l.h-hr],[l.x-c,r],[l.x+c,r],[l.x-c,l.y],[l.x+c,l.y])}const o=a.filter(i).sort((l,c)=>Math.hypot(l[0]-n.x,l[1]-n.y)-Math.hypot(c[0]-n.x,c[1]-n.y))[0]||[n.x,r];e.push({x:o[0],y:o[1],w:n.w,h:n.h}),t.set(n.key,o)}return t}const Ze=(s,e=document)=>e.querySelector(s),Ts=(s,e,t="")=>{const n=document.createElement(s);return e&&(n.className=e),n.innerHTML=t,n};function Bb(s,{onOrder:e}={}){const t=Ts("div","hud");t.innerHTML=`
    <div class="top"><div class="score blue"><i class="gem"></i><b>0</b></div><div class="timer">2:00</div><div class="score red"><b>0</b><i class="gem"></i></div></div>
    <div class="league"></div>
    <div class="banner"></div>
    <div class="bars"></div><div class="nums"></div>
    <div class="stick"><div class="knob"></div></div>
    <div class="btn sup"><div class="fill"></div><div class="knob"><svg viewBox="0 0 24 24"><path fill="#2a2140" d="M12 2C6.8 2 3 5.6 3 10.4c0 2.9 1.4 4.9 3.3 6.1V20a1 1 0 0 0 1 1h2v-2.2h1.4V21h2.6v-2.2h1.4V21h2a1 1 0 0 0 1-1v-3.5c1.9-1.2 3.3-3.2 3.3-6.1C21 5.6 17.2 2 12 2z"/><circle cx="8.6" cy="11" r="2.4" fill="#fff"/><circle cx="15.4" cy="11" r="2.4" fill="#fff"/><path fill="#fff" d="M12 13.6l1.3 2.4h-2.6z"/></svg></div></div>
    <div class="btn atk"><div class="knob"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><circle cx="12" cy="12" r="7"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/></svg></div></div>
    <div class="respawn"></div>
    <div class="streak"></div>
    <div class="orders">${wp.map(l=>`<button data-o="${l}">${Ep[l]}</button>`).join("")}</div>`,s.appendChild(t);let n=null;t.querySelectorAll(".orders button").forEach(l=>l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),o.setOrder(n===l.dataset.o?null:l.dataset.o),e?.(n)}));const i=new Map,r=new Map;let a=!1;const o={hud:t,atkBtn:Ze(".atk",t),supBtn:Ze(".sup",t),active:()=>a,show(l){a=l,t.classList.toggle("on",l)},showStick(l,c){const h=Ze(".stick",t);h.style.left=l+"px",h.style.top=c+"px",h.classList.add("on")},moveStick(l,c){Ze(".stick .knob",t).style.transform=`translate(${l}px,${c}px)`},hideStick(){const l=Ze(".stick",t);l.classList.remove("on"),l.style.left=l.style.top="",o.moveStick(0,0)},moveKnob(l,c,h){Ze(`.${l} .knob`,t).style.transform=`translate(${c}px,${h}px)`},hold(l,c){Ze(`.btn.${l}`,t).classList.toggle("held",c)},setLeague(l){const c=Ze(".league",t);c.textContent=l,c.style.opacity="",clearTimeout(o._lg),o._lg=setTimeout(()=>{c.style.opacity="0"},3e3)},update(l,c,h,u){const d=l.units.reduce((y,R)=>y+(R.team==="blue"&&R.alive?R.gems:0),0),f=l.units.reduce((y,R)=>y+(R.team==="red"&&R.alive?R.gems:0),0);Ze(".score.blue b",t).textContent=d,Ze(".score.red b",t).textContent=f;const m=Math.max(0,Math.ceil(Nd.time-l.t));Ze(".timer",t).textContent=`${Math.floor(m/60)}:${String(m%60).padStart(2,"0")}`;const _=Ze(".banner",t);l.countdown?(_.className=`banner on ${l.countdown.team}`,_.innerHTML=`<small>${l.countdown.team==="blue"?"우리 팀":"상대 팀"} 승리까지</small><b>${Math.ceil(l.countdown.left)}</b>`):_.className="banner";const g=o.supBtn;g.classList.toggle("ready",c.superCharge>=1),Ze(".fill",g).style.setProperty("--p",`${Math.round(c.superCharge*100)}%`);const p=Ze(".respawn",t);c.alive?p.classList.remove("on"):(p.classList.add("on"),p.innerHTML=`다시 나가기까지 <b>${Math.ceil(c.respawnT)}</b>`);const M=[];for(const y of l.units){let R=i.get(y);R||(R=Ts("div",`bar ${y.isPlayer?"me":y.team}`,`<div class="gems"><i class="gem"></i><b></b></div><div class="nm">${y.name}</div>${y.gen!=null&&y.team==="red"?`<div class="gen">세대 ${y.gen.toLocaleString()}</div>`:""}<div class="hp"><div class="v"></div><span></span></div>${y.isPlayer?'<div class="ammo"><i></i><i></i><i></i></div>':""}`),Ze(".bars",t).appendChild(R),i.set(y,R));const S=y.alive&&u(y);if(R.style.display=S?"":"none",!S)continue;const[w,P]=h(y.x,NS(y.c),y.z);R._x=w,R._y=P,M.push(R),Ze(".v",R).style.width=`${y.hp/y.maxHp*100}%`,Ze("span",R).textContent=Math.ceil(y.hp);const C=Ze(".gems",R);C.style.display=y.gems?"":"none",Ze(".gems b",R).textContent=y.gems,y.isPlayer&&Ze(".ammo",R).querySelectorAll("i").forEach((v,b)=>v.style.setProperty("--f",Math.max(0,Math.min(1,y.ammo-b))))}const x=kb(M.map(y=>({key:y,x:y._x,y:y._y,w:y.offsetWidth,h:y.offsetHeight})));for(const y of M){const[R,S]=x.get(y),w=y._sy==null||Math.hypot(y._sx-R,y._sy-S)>80;y._sx=w?R:y._sx+(R-y._sx)*.5,y._sy=w?S:y._sy+(S-y._sy)*.5,y.style.transform=`translate(${y._sx}px,${y._sy}px) translate(-50%,-100%)`}},damage(l,c,h,u,d){const f=performance.now(),m=d&&r.get(d);if(m&&f-m.t<350&&m.d.isConnected){m.n+=h,m.t=f,m.d.textContent=String(m.n),m.d.style.left=l+"px",m.d.style.top=c+"px",m.d.style.animation="none",m.d.offsetWidth,m.d.style.animation="",clearTimeout(m.k),m.k=setTimeout(()=>m.d.remove(),800);return}for(const p of r.values())p.d.isConnected&&f-p.t<600&&Math.abs(p.x-l)<60&&Math.abs(p.y-c)<26&&(c-=24);const _=Ts("div",`num ${u?"mine":""}`,String(h));_.style.left=l+"px",_.style.top=c+"px",Ze(".nums",t).appendChild(_);const g={d:_,n:h,t:f,x:l,y:c,k:setTimeout(()=>_.remove(),800)};d&&r.set(d,g)},heal(l,c,h){const u=Ts("div","num heal","+"+h);u.style.left=l+"px",u.style.top=c+"px",Ze(".nums",t).appendChild(u),setTimeout(()=>u.remove(),800)},setOrder(l){n=l,t.querySelectorAll(".orders button").forEach(c=>c.classList.toggle("on",c.dataset.o===l))},showOrders(l){Ze(".orders",t).style.display=l?"":"none"},setStreak(l,c){const h=Ze(".streak",t);h.style.display=l>0?"":"none",h.innerHTML=l>0?`<b>${l}</b>연승${c>0?`<em>상대 +${c}</em>`:""}`:""},reset(){i.forEach(l=>l.remove()),i.clear(),r.clear()}};return o}function zb(s,{trophies:e,tierName:t,streak:n=0,mode:i,duelTier:r,onPick:a,onStart:o,onMode:l,onTier:c}){const h={hp:5e3,range:10,dps:1700},u=g=>{const p=g.attack;return(p.kind==="burst"?p.n*p.dmg:p.kind==="spread"?p.n*p.dmg*.6:p.dmg*.8)/g.reload},d=Ts("div","select");d.innerHTML=`<div class="head"><div class="tro"><i class="cup"></i><b>${e}</b></div><div class="lg">연습 리그 · ${t}${n>0?` · ${n}연승`:""}</div></div>
    <div class="mid"><div class="seg modes"><button data-m="3v3">3대3</button><button data-m="1v1">1대1</button><button data-m="quick">빠른 대전</button><button data-m="friend">친구</button></div>
      <div class="seg tiers">${Ur.map((g,p)=>`<button data-t="${p}">${g.name}</button>`).join("")}</div></div>
    <div class="cards">${Jn.map(g=>{const p=Or[g];return`<button class="card" data-id="${g}"><div class="nm">${p.name}</div><div class="role">${p.role}</div>
      <div class="st"><span>체력</span><div class="g"><i style="width:${p.hp/h.hp*100}%"></i></div></div>
      <div class="st"><span>사거리</span><div class="g"><i style="width:${p.attack.range/h.range*100}%"></i></div></div>
      <div class="st"><span>공격</span><div class="g"><i style="width:${Math.min(100,u(p)/h.dps*100)}%"></i></div></div></button>`}).join("")}</div>
    <button class="go">시작</button>`,s.appendChild(d),d.querySelectorAll(".card").forEach(g=>g.addEventListener("click",()=>{_(g.dataset.id),a(g.dataset.id)})),Ze(".go",d).addEventListener("click",()=>o());const f=g=>{d.classList.toggle("duel",g==="1v1"),d.querySelectorAll(".modes button").forEach(p=>p.classList.toggle("on",p.dataset.m===g))},m=g=>d.querySelectorAll(".tiers button").forEach(p=>p.classList.toggle("on",Number(p.dataset.t)===g));d.querySelectorAll(".modes button").forEach(g=>g.addEventListener("click",()=>{f(g.dataset.m),l(g.dataset.m)})),d.querySelectorAll(".tiers button").forEach(g=>g.addEventListener("click",()=>{m(Number(g.dataset.t)),c(Number(g.dataset.t))})),f(i),m(r);function _(g){d.querySelectorAll(".card").forEach(p=>p.classList.toggle("on",p.dataset.id===g))}return{box:d,pick:_,show(g){d.classList.toggle("on",g)},setTrophies(g,p,M=0){Ze(".tro b",d).textContent=g,Ze(".lg",d).textContent=`연습 리그 · ${p}${M>0?` · ${M}연승`:""}`}}}function Hb(s,{onAgain:e,onChange:t}){const n=Ts("div","result");return n.innerHTML=`<div class="big"></div><div class="tro"><i class="cup"></i><b></b></div><div class="stats"></div>
    <div class="row"><button class="change">챔피언 바꾸기</button><button class="again">다시 하기</button></div>`,s.appendChild(n),Ze(".again",n).addEventListener("click",e),Ze(".change",n).addEventListener("click",t),{show(i,r){n.classList.toggle("on",i),i&&(n.className=`result on ${r.kind}`,Ze(".big",n).textContent=r.kind==="win"?"승리":r.kind==="lose"?"패배":"무승부",Ze(".tro b",n).textContent=(r.delta>0?"+":"")+r.delta,Ze(".stats",n).innerHTML=`<div><span>처치</span><b>${r.kills}</b></div><div><span>모은 보석</span><b>${r.gems}</b></div><div><span>트로피</span><b>${r.total}</b></div>${r.streak>0?`<div><span>연승</span><b>${r.streak}</b></div>`:""}`)}}}function Vb(s,e){const t=(m,_)=>Number(e.get(m)??_)*Math.PI/180,n=t("ang",0),i=e.has("run")?t("run",0):null,r=Number(e.get("every")??.9),a=e.has("super")?Number(e.get("super")||2):null,o=s.units.find(m=>m.team==="blue"&&m.cid===e.get("lab"))||s.units[0],l={x:s.mine.x,z:s.mine.z},c=e.has("nofoe")?null:s.units.find(m=>m.team==="red"&&m.cid===o.cid);for(const m of s.units)m!==o&&m!==c&&(m.alive=!1,m.respawnT=1e9);if(Object.assign(o,{x:l.x,z:l.z,isPlayer:!0,face:n}),c){const m=l.x+Math.cos(n)*5,_=l.z+Math.sin(n)*5;Tp(s,Math.floor(m),Math.floor(_))?(c.alive=!1,c.respawnT=1e9):Object.assign(c,{x:m,z:_,isPlayer:!0,hp:1e9,maxHp:1e9,face:n+Math.PI})}s.mineT=1e9;let h=.4,u=1,d=0,f=null;return{me:o,tick(m){o.ammo=o.c.ammo,i!=null&&(d+=m,d>1.6&&(d=0,u=-u),o.input.mx=Math.cos(i)*u,o.input.mz=Math.sin(i)*u),h-=m,h<=0&&(h+=r,o.input.fire=n),a!=null&&(f=(f??.6)-m,f<=0&&!o.dash&&(f=a,o.superCharge=1,o.input.superFire=n)),c&&(c.hp=c.maxHp,c.input.mx=c.input.mz=0)}}}let Vi=null;const Ic=new Map;async function Gb(s="./ai/"){try{const e=await fetch(s+"ladder.json");if(!e.ok)return null;Vi=await e.json(),await Promise.all(Vi.steps.map(async t=>{Ic.has(t.net)||Ic.set(t.net,await(await fetch(s+t.net)).json())}))}catch{Vi=null}return Vi}function Wb(s){return Vi?Vi.steps.filter(e=>s>=e.from).pop()??Vi.steps[0]:null}function Xb(s,e){const t={...Ur[3],name:`세대 ${e.gen.toLocaleString()}`,think:.25,...e.hands},n=Pp(Ic.get(e.net));for(const i of s.units)i.isPlayer||(i.tier=t,i.decider=n,i.gen=e.gen);return t}const qb=new URLSearchParams(location.search).get("api")||"wss://chichibrawl-api.dumbgamelab.com",Yb="https://dumbgamelab.com/play/chichibrawl/",xd="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",vd={"no-room":"그런 방이 없어요. 코드를 다시 봐 주세요",full:"자리가 다 찼어요",playing:"지금 판이 돌고 있어요. 끝나면 들어갈 수 있어요",busy:"지금은 판을 열 수 없어요. 잠시 뒤에 다시",off:"서버 점검 중이에요",net:"연결이 끊겼어요"},$b=`
.friends { position: fixed; inset: 0; display: none; place-items: center; background: rgba(20,14,34,0.72); z-index: 20; }
.friends.on { display: grid; }
.friends .pane { width: min(560px, 92vw); padding: 16px 20px 18px; border-radius: 18px; border: 4px solid var(--ink); background: linear-gradient(#4b3d6a, #33284b); box-shadow: 0 6px 0 var(--ink); position: relative; }
.friends h2 { margin: 0 0 12px; font-size: 24px; font-weight: normal; }
.friends .x { position: absolute; top: 10px; right: 12px; min-width: 64px; height: 44px; border-radius: 12px; border: 3px solid var(--ink); background: #2b2140; color: #fff; font-family: var(--font-game); font-size: 20px; }
.friends button.y { font-family: var(--font-game); font-size: 20px; color: var(--ink); border: 4px solid var(--ink); border-radius: 14px; background: linear-gradient(#ffe46a, #f5b51d); box-shadow: 0 4px 0 var(--ink); padding: 10px 22px; min-height: 48px; }
.friends button.n { font-family: var(--font-game); font-size: 17px; color: #fff; border: 3px solid var(--ink); border-radius: 12px; background: #2b2140; box-shadow: 0 3px 0 var(--ink); padding: 8px 16px; min-height: 44px; }
.friends .row { display: flex; gap: 10px; align-items: center; }
.friends .enter input { width: 150px; height: 48px; border-radius: 12px; border: 3px solid var(--ink); background: #fff; color: var(--ink); font-family: var(--font-game); font-size: 24px; text-align: center; letter-spacing: 6px; text-transform: uppercase; -webkit-user-select: text; user-select: text; }
.friends .or { margin: 12px 0; opacity: 0.7; font-size: 14px; }
.friends .code { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.friends .code b { font-size: 38px; letter-spacing: 6px; color: var(--gold); }
.friends .teams { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
.friends .team { border: 3px solid var(--ink); border-radius: 12px; padding: 8px; background: rgba(29,21,48,0.5); }
.friends .team.blue { box-shadow: inset 0 4px 0 var(--blue); } .friends .team.red { box-shadow: inset 0 4px 0 var(--red); }
.friends .slot { display: flex; justify-content: space-between; font-size: 16px; padding: 5px 4px; min-height: 30px; }
.friends .slot.me { color: #5cff6a; } .friends .slot.empty { opacity: 0.4; } .friends .slot small { font-size: 12px; opacity: 0.8; }
.friends .msg { min-height: 20px; font-size: 14px; color: #ffb3b3; margin-top: 8px; }
.friends .wait { font-size: 15px; opacity: 0.85; }
`;function Kb({store:s,getPick:e,onMatch:t,onSnap:n,onDrop:i,onAutoErr:r}){const a=document.createElement("style");a.textContent=$b,document.head.appendChild(a);const o=document.createElement("div");o.className="friends",document.body.appendChild(o);let l=s.get("pid",null);l||(l=Math.random().toString(36).slice(2,12),s.set("pid",l));let c=s.get("nick",null);c||(c=`냥냥${100+(Math.random()*900|0)}`,s.set("nick",c));let h=null,u=null,d=null,f=!1,m=0,_="",g=0;const p=S=>{h?.readyState===1&&h.send(JSON.stringify(S))};function M(S,w,P=0){g=P,h?.close(),u=S,_="";const C=`${qb}/v1/rooms/${S}/ws?pid=${l}&name=${encodeURIComponent(c)}&champ=${e()}${w?"&create=1":""}${P?`&exp=${P}`:""}`,v=new WebSocket(C);h=v,v.onmessage=b=>{const N=JSON.parse(b.data);if(N.t==="s")return n(N);if(N.t==="hello"&&(m=0),N.t==="lobby"&&(d=N,!f&&!g&&y()),N.t==="start"&&(f=!0,o.classList.remove("on"),t(N,l)),N.t==="err"){if(g){g=0,u=null,d=null,h?.close(),r?.(N.err);return}_=vd[N.err]||N.err,N.err!=="busy"&&(u=null,d=null),y()}},v.onclose=()=>{if(h!==v)return;if(h=null,u&&m<4){m++,setTimeout(()=>u&&M(u,!1,g),600*m);return}const b=f;if(f&&(f=!1,i()),u){if(u=null,d=null,g&&b){g=0;return}if(g){g=0,r?.("net");return}_=vd.net,y()}}}const x=()=>Array.from({length:4},()=>xd[Math.random()*xd.length|0]).join("");function y(){if(o.classList.add("on"),!u||!d){o.innerHTML=`<div class="pane"><h2>친구 방</h2><button class="x">닫기</button>
        <button class="y make">방 만들기</button>
        <div class="or">친구한테 코드를 받았다면</div>
        <div class="row enter"><input maxlength="4" placeholder="코드" autocomplete="off" autocapitalize="characters"><button class="y join">들어가기</button></div>
        <div class="msg">${_}</div></div>`,o.querySelector(".make").onclick=()=>M(x(),!0);const S=o.querySelector("input");o.querySelector(".join").onclick=()=>{const w=S.value.toUpperCase().replace(/[^A-Z0-9]/g,"");w.length===4?M(w,!1):(_="코드는 네 글자예요",y())}}else{const S=d.host===l,w=C=>{const v=d.players.filter(b=>b.team===C);return[0,1,2].map(b=>{const N=v[b];return N?`<div class="slot${N.pid===l?" me":""}"><span>${N.name}${N.pid===d.host?" <small>방장</small>":""}</span><small>${Or[N.champ]?.name??""}</small></div>`:'<div class="slot empty"><span>빈 자리</span></div>'}).join("")};o.innerHTML=`<div class="pane"><h2>친구 방</h2><button class="x">닫기</button>
        <div class="code"><span>방 코드</span><b>${u}</b><button class="n share">코드 보내기</button></div>
        <div class="teams"><div class="team blue">${w("blue")}</div><div class="team red">${w("red")}</div></div>
        <div class="row"><button class="n swap">팀 바꾸기</button><span style="flex:1"></span>${S?'<button class="y go">시작</button>':'<span class="wait">방장이 시작하면 판이 열려요</span>'}</div>
        <div class="msg">${_}</div></div>`,o.querySelector(".share").onclick=async()=>{const C=`치치 난투 친구 방 코드 ${u}`,v=`${Yb}?room=${u}`;try{navigator.share?await navigator.share({text:C,url:v}):(await navigator.clipboard.writeText(`${C} ${v}`),_="코드를 복사했어요",y())}catch{}},o.querySelector(".swap").onclick=()=>{const C=d.players.find(v=>v.pid===l);p({t:"team",team:C?.team==="blue"?"red":"blue"})};const P=o.querySelector(".go");P&&(P.onclick=()=>p({t:"start"}))}o.querySelector(".x").onclick=()=>R()}function R(){g=0,u=null,d=null,f=!1;const S=h;h=null,S?.close(),o.classList.remove("on")}return{joinAuto(S,w){M(S,!0,w)},isAuto:()=>g>0,open(S){S&&!u&&M(S,!1),y()},back(){f=!1,u&&h&&p({t:"pick",champ:e()}),y()},pick(S){p({t:"pick",champ:S})},send:p,close:R,inRoom:()=>!!u,state:()=>({pid:l,code:u,lob:d,playing:f})}}const jb=new URLSearchParams(location.search).get("api")||"wss://chichibrawl-api.dumbgamelab.com",yl={off:"서버 점검 중이에요",busy:"지금은 판을 열 수 없어요. 잠시 뒤에 다시",net:"연결이 끊겼어요. 다시 눌러 주세요",playing:"판이 이미 시작됐어요. 다시 눌러 주세요",full:"자리가 다 찼어요. 다시 눌러 주세요"};function Zb({store:s,getPick:e,join:t}){const n=document.createElement("style");n.textContent=".qbar { height: 14px; border-radius: 7px; border: 3px solid var(--ink); background: #2b2140; overflow: hidden; margin-top: 4px; } .qbar i { display: block; height: 100%; background: linear-gradient(#ffe46a, #f5b51d); }",document.head.appendChild(n);const i=document.createElement("div");i.className="friends",document.body.appendChild(i);let r=null,a=null,o="",l=null,c=0,h=!1;const u=()=>{let g=s.get("pid",null);return g||(g=Math.random().toString(36).slice(2,12),s.set("pid",g)),g},d=()=>{let g=s.get("nick",null);return g||(g=`냥냥${100+(Math.random()*900|0)}`,s.set("nick",g)),g};function f(){i.classList.add("on");const g=a?.n??1,p=a?.max??6,M=Math.max(0,(a?.left??8e3)-(Date.now()-c)),x=a?.waitMs??8e3,y=o?`<div class="msg">${o}</div><div class="row" style="margin-top:12px"><button class="y again">다시 찾기</button></div>`:h?'<div class="wait">곧 시작해요</div>':`<div class="code"><b>${g}</b><span>/ ${p}명 모였어요</span></div><div class="qbar"><i style="width:${Math.round((1-M/x)*100)}%"></i></div>`;i.innerHTML=`<div class="pane"><h2>빠른 대전</h2><button class="x">닫기</button>${y}</div>`,i.querySelector(".x").onclick=()=>_();const R=i.querySelector(".again");R&&(R.onclick=()=>m())}function m(){_(!0),o="",h=!1,a=null,c=Date.now(),f();const g=new WebSocket(`${jb}/v1/quick/ws?pid=${u()}&name=${encodeURIComponent(d())}&champ=${e()}`);r=g,g.onmessage=p=>{const M=JSON.parse(p.data);M.t==="queue"&&(a=M,c=Date.now(),f()),M.t==="match"&&(h=!0,f(),t(M.code,M.n),g.close()),M.t==="err"&&(o=yl[M.err]||M.err,f())},g.onclose=()=>{r===g&&(r=null,!h&&!o&&(o=yl.net,f()))},clearInterval(l),l=setInterval(()=>{i.classList.contains("on")&&!h&&!o&&f()},250)}function _(g){clearInterval(l);const p=r;r=null;try{p?.send(JSON.stringify({t:"cancel"}))}catch{}p?.close(),g||i.classList.remove("on")}return{open:m,close:()=>{_(),h=!1},done(){clearInterval(l),i.classList.remove("on")},fail(g){h=!1,o=yl[g]||g,f()},active:()=>i.classList.contains("on")}}const An=1080,Ml=1350,Jf="dumbgamelab.com/play/chichibrawl";function yd({name:s,gen:e,kills:t,gems:n,trophies:i,date:r}){const a=document.createElement("canvas");a.width=An,a.height=Ml;const o=a.getContext("2d"),l=d=>`${d}px 'ONE Mobile POP', 'Apple SD Gothic Neo', sans-serif`,c=o.createLinearGradient(0,0,0,Ml);c.addColorStop(0,"#4b3d6a"),c.addColorStop(1,"#1d1530"),o.fillStyle=c,o.fillRect(0,0,An,Ml),o.fillStyle="rgba(255,210,58,0.10)";for(let d=0;d<14;d++)o.beginPath(),o.moveTo(An/2,470),o.arc(An/2,470,900,d*Math.PI/7,d*Math.PI/7+Math.PI/14),o.fill();const h=(d,f,m,_,g,p="center")=>{o.font=l(_),o.textAlign=p,o.lineJoin="round",o.lineWidth=_*.16,o.strokeStyle="#1d1530",o.strokeText(d,f,m),o.fillStyle=g,o.fillText(d,f,m)};h("치치 난투",An/2,150,64,"#ffffff"),h("AI를 이겼다",An/2,420,150,"#ffd23a"),h(`학습 AI · 세대 ${e.toLocaleString()}`,An/2,540,54,"#9fdcff");const u=(d,f,m)=>{o.fillStyle="rgba(29,21,48,0.75)",o.strokeStyle="#1d1530",o.lineWidth=8,o.beginPath(),o.roundRect(d,680,300,230,36),o.fill(),o.stroke(),h(f,d+150,760,44,"#ffffff"),h(String(m),d+150,870,96,"#ffffff")};return u(60,"처치",t),u(390,"보석",n),u(720,"트로피",i),h(s,An/2,1060,80,"#5cff6a"),h(r,An/2,1140,40,"rgba(255,255,255,0.75)"),h(Jf,An/2,1270,40,"#ffffff"),a}function Jb(s,{getName:e}){const t=document.createElement("button");t.className="beatcard",t.textContent="AI 이긴 인증 카드",t.style.cssText="display:none;background:linear-gradient(#9fdcff,#38a3ff)",s.appendChild(t);let n=null;return t.onclick=async()=>{if(!n)return;const i=yd({...n,name:e(),date:new Date().toLocaleDateString("ko-KR")}),r=await new Promise(l=>i.toBlob(l,"image/png")),a=new File([r],"chichibrawl-beat-ai.png",{type:"image/png"});try{if(navigator.canShare?.({files:[a]})){await navigator.share({files:[a],text:`치치 난투 학습 AI(세대 ${n.gen.toLocaleString()})를 이겼다 https://${Jf}/`});return}}catch{return}const o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=a.name,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),2e3)},{show(i,r){n=i?r:null,t.style.display=i?"":"none"},draw:yd}}const ki={kill:3,streak:2,super:1.5,superKill:3,comeback:6,death:-1.5,quiet:.2},Qf=new URLSearchParams(typeof location>"u"?"":location.search),Md=7,Qb=10,Sd=3,bd=640,Sl=30,ew=Number(Qf.get("hlbps")||18e5),bl=Qf.has("hlcopy");function tw(){if(typeof MediaRecorder>"u")return null;for(const s of["video/mp4;codecs=avc1","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"])if(MediaRecorder.isTypeSupported?.(s))return s;return null}function wd(s){let e=0,t=-99,n=0;for(const i of s)i.type==="kill"?(n=i.t-t<4?n+1:1,t=i.t,e+=ki.kill+(n>=2?ki.streak:0)+(i.super?ki.superKill:0)):i.type==="super"?e+=ki.super:i.type==="comeback"?e+=ki.comeback:i.type==="died"&&(e+=ki.death);return e}function nw(s){const e=s.filter(t=>t.type==="kill").length;return s.some(t=>t.type==="comeback")?"막판 역전":e>=3?`${e}연속 처치`:e===2?"두 번 연속 처치":s.some(t=>t.type==="kill"&&t.super)?"궁으로 처치":e===1?"처치":s.some(t=>t.type==="super")?"궁 적중":"이번 판 한 장면"}function iw(s,{now:e=()=>performance.now()/1e3}={}){const t=tw(),n=()=>Math.round(bd*s.height/s.width/2)*2,i=document.createElement("canvas"),r=i.getContext("2d");let a=null,o=null,l=[],c=null,h=!1,u=[],d=0;const f={supported:!!t&&!!i.captureStream,mime:t,start(){f.supported&&(f.stop(),l=[],u=[],h=!0,bl&&(i.width=bd,i.height=n(),r.drawImage(s,0,0,i.width,i.height)),o=bl?i.captureStream(Sl):s.captureStream(Sl),_())},frame(){if(!h)return;const x=e();x-d<1/Sl||(d=x,bl&&r.drawImage(s,0,0,i.width,i.height),c&&x-c.t0>=Md&&(!(c.evs.some(R=>R.type==="kill"||R.type==="comeback")&&x-c.lastBig<2)||x-c.t0>=Qb)&&M())},note(x,y){if(!h||!c)return;const R={type:x,t:e(),...y};c.evs.push(R),u.push(R),(x==="kill"||x==="comeback")&&(c.lastBig=R.t)},async finish(){if(!h)return null;h=!1,await p(),m();const x=l.filter(S=>S.blob&&S.blob.size>2e3);if(l=[],!x.length)return null;for(const S of x)S.score=wd(S.evs)+ki.quiet*Math.min(S.dur,Md);const y=x.reduce((S,w)=>w.score>S.score?w:S),R=y.evs.filter(S=>S.type==="super"||S.type==="kill"&&S.super).map(S=>+(S.t-y.t0).toFixed(2));return{url:URL.createObjectURL(y.blob),blob:y.blob,mime:y.mime,score:y.score,reason:nw(y.evs),dur:y.dur,slow:R,evs:y.evs.map(S=>({type:S.type,at:+(S.t-y.t0).toFixed(2)})),all:x.map(S=>({score:+S.score.toFixed(1),dur:+S.dur.toFixed(1),kb:Math.round(S.blob.size/1024)}))}},stop(){h=!1;try{a?.state!=="inactive"&&a?.stop()}catch{}a=null,c=null,m(),l=[]}};function m(){o?.getTracks().forEach(x=>x.stop()),o=null}function _(){const x={t0:e(),evs:[],chunks:[],blob:null,mime:t,dur:0,lastBig:-99},y=new MediaRecorder(o,{mimeType:t,videoBitsPerSecond:ew});y.ondataavailable=R=>{R.data?.size&&x.chunks.push(R.data)},x.done=new Promise(R=>{y.onstop=()=>{x.dur=e()-x.t0,x.blob=new Blob(x.chunks,{type:t.split(";")[0]}),x.chunks=[],R()}}),y.start(),a=y,c=x}function g(){const x=l.filter(w=>w.blob);if(x.length<=Sd+1)return;const y=x[x.length-1],R=x.slice(0,-1).map(w=>({g:w,s:wd(w.evs)})).sort((w,P)=>P.s-w.s),S=new Set([y,...R.slice(0,Sd).map(w=>w.g)]);l=l.filter(w=>!w.blob||S.has(w))}async function p(){if(!c)return;const x=c;c=null,l.push(x);try{a.state!=="inactive"&&a.stop()}catch{}await x.done}function M(){const x=c;l.push(x);const y=a;try{y.stop()}catch{}x.done.then(g),h&&_()}return f}function sw(s,{getName:e,playUrl:t="dumbgamelab.com/play/chichibrawl"}){const n=document.createElement("button");n.className="hl",n.textContent="하이라이트",n.style.cssText="display:none;background:linear-gradient(#ffb0d6,#f0609c)",s.appendChild(n);const i=document.createElement("div");i.className="hlview",i.innerHTML='<div class="hlbox"><video playsinline muted loop></video><div class="hlwhy"></div><div class="hlrow"><button class="hlshare">공유</button><button class="hlclose">닫기</button></div></div>',document.body.appendChild(i);const r=i.querySelector("video"),a=i.querySelector(".hlwhy");let o=null,l=0;const c=()=>{if(!o)return;const u=r.currentTime;r.playbackRate=o.slow.some(d=>u>=d-.3&&u<=d+1.4)?.35:1,l=requestAnimationFrame(c)},h=()=>{i.classList.remove("on"),r.pause(),cancelAnimationFrame(l)};return n.onclick=()=>{o&&(r.src=o.url,a.textContent=o.reason,i.classList.add("on"),r.currentTime=0,r.play().catch(()=>{}),cancelAnimationFrame(l),c())},i.querySelector(".hlclose").onclick=h,i.querySelector(".hlshare").onclick=async()=>{if(!o)return;const u=o.blob.type.includes("mp4")?"mp4":"webm",d=new File([o.blob],`chichibrawl-highlight.${u}`,{type:o.blob.type}),f=`치치 난투 ${o.reason} https://${t}/`;try{if(navigator.canShare?.({files:[d]})){await navigator.share({files:[d],text:f});return}const _=window.Capacitor?.Plugins;if(_?.Share&&_?.Filesystem){const g=await new Promise(M=>{const x=new FileReader;x.onload=()=>M(String(x.result).split(",")[1]),x.readAsDataURL(o.blob)}),{uri:p}=await _.Filesystem.writeFile({path:d.name,data:g,directory:"CACHE"});await _.Share.share({title:"치치 난투",text:f,files:[p],dialogTitle:"하이라이트 공유"});return}}catch{return}const m=document.createElement("a");m.href=o.url,m.download=d.name,m.click()},{btn:n,show(u){h(),o?.url&&o!==u&&URL.revokeObjectURL(o.url),o=u,n.style.display=u?"":"none"}}}const rw=2;function aw(s,e,t,n){const i=s.H,r=e.humans.find(C=>C.pid===t),a=r.team==="red",o=C=>!a||!C?C:C==="blue"?"red":C==="red"?"blue":C,l=C=>a?i-C:C,c=C=>a?-C:C,h=C=>a?-C:C,u=new Map;for(const[C,v,b]of e.ids)u.set(C,s.units.filter(N=>N.team===o(v))[b]);const d=u.get(r.id);for(const C of s.units)C.isPlayer=C===d,C.net=null;let f=0,m=0,_=[],g=null,p=null,M=0;const x=[],y=[];let R=new Map,S=new Map;function w(C,v,b,N){const D=Math.hypot(v,b);D>1&&(v/=D,b/=D);const F=C.slowT>0?Math.max(.3,C.c.speed-350/300):C.c.speed;return Ap(s,C,v*F*N,b*F*N)}function P(C){const v={type:C.y,u:u.get(C.u),from:u.get(C.f)};if(C.a!=null&&(v.ang=c(C.a)),C.d!=null&&(v.dmg=C.d),C.n!=null&&(v.n=C.n),C.b){const b=u.get(C.b[2]);v.b={x:C.b[0],z:l(C.b[1]),owner:b,team:b?.team,isSuper:!!C.b[3],vx:C.b[4],vz:h(C.b[5])}}return C.i!=null&&(v.i=C.i,v.j=a?i-1-C.j:C.j,v.kind=C.k,C.y==="destroy"&&(s.map[v.j][v.i]=".")),C.tm&&(v.team=o(C.tm)),C.w&&(v.winner=o(C.w)),C.gm!=null&&(v.gems=C.gm),v}return{me:d,flip:a,snap(C){M=0,s.t=C.now,s.over=C.over,s.winner=C.win?o(C.win):null,s.countdown=C.cd?{team:o(C.cd[0]),left:C.cd[1]}:null,m=C.ack?.[d.id]??m;for(const N of C.u){const D=u.get(N[0]);if(!D)continue;const[,F,X,B,q,V,he,re,le,Ue,ke,Y,ne,de,oe,be,Oe]=N,Be=!D.alive&&le;Object.assign(D,{hp:q,ammo:V,superCharge:he,gems:re,alive:!!le,respawnT:Ue,kills:Y,lastShot:ne,revealT:de,slowT:Oe?1:0}),D.dash=ke?D.dash||{net:!0}:null,D.net={x:F,z:l(X),vx:oe,vz:h(be)},(D!==d||D.dash||!D.alive||Be)&&(D.face=c(B)),(Be||Math.hypot(D.x-D.net.x,D.z-D.net.z)>3)&&(D.x=D.net.x,D.z=D.net.z)}for(;x.length&&x[0][0]<=m;)x.shift();if(d.alive&&!d.dash){const N=d.x,D=d.z;d.x=d.net.x,d.z=d.net.z;for(const[,B,q]of x)w(d,B,q,1/60);const F=d.x-N,X=d.z-D;Math.hypot(F,X)<.6?(d.x=N,d.z=D,d.fix={x:F,z:X}):d.fix=null}const v=new Map;for(const[N,D,F,X,B,q,V,he,re,le]of C.b){let Ue=R.get(N);if(!Ue){const ke=u.get(D);if(!ke)continue;Ue={id:N,owner:ke,team:ke.team,isSuper:!!he,size:re,range:le,hit:new Set,kind:(he?ke.c.super:ke.c.attack).kind}}Object.assign(Ue,{x:F,z:l(X),vx:B,vz:h(q),went:V,ang:Math.atan2(h(q),B)}),v.set(N,Ue)}R=v,s.bullets=[...v.values()];const b=new Map;for(const[N,D,F]of C.g){const X=S.get(N)||{id:N,vx:0,vz:0,age:1};X.x=D,X.z=l(F),b.set(N,X)}S=b,s.gems=[...b.values()];for(const N of C.e)y.push(P(N))},tick(C,v,b,N,D){if(M+=C,s.over)return;s.t+=C;const F=++f;if(d.alive&&!d.dash){const q=d.x,V=d.z;if(d.moved+=w(d,v,b,C),d.fix){const re=Math.min(1,C*12),le=d.fix.x*re,Ue=d.fix.z*re;d.x+=le,d.z+=Ue,d.fix.x-=le,d.fix.z-=Ue,Math.hypot(d.fix.x,d.fix.z)<.01&&(d.fix=null)}Math.hypot(v,b)>.1&&s.t-d.lastShot>.35&&(d.face=Math.atan2(b,v)),d.vx=(d.x-q)/C,d.vz=(d.z-V)/C,x.push([F,v,b])}N!=null&&(g=N),D!=null&&(p=D),_.push([F,v,h(b)]),_.length>=rw&&(n({t:"in",i:_,f:g==null?null:c(g),sf:p==null?null:c(p)}),_=[],g=null,p=null);const X=Math.min(M,.25),B=Math.min(1,C*14);for(const q of s.units){if(!q.net||q===d&&d.alive&&!d.dash)continue;const V=q.net.x+q.net.vx*X,he=q.net.z+q.net.vz*X,re=q.x,le=q.z;q.x+=(V-q.x)*B,q.z+=(he-q.z)*B,q.vx=q.net.vx,q.vz=q.net.vz,q.moved+=Math.hypot(q.x-re,q.z-le)}for(const q of s.bullets)q.x+=q.vx*C,q.z+=q.vz*C,q.went=Math.min(q.range,q.went+Math.hypot(q.vx,q.vz)*C)},drain(){return y.splice(0)},stats:()=>({seq:f,ack:m,pending:x.length})}}function ow(s,e){const t=s.humans.find(i=>i.pid===e)?.team==="red",n=i=>t?{blue:i.red,red:i.blue}:i;return{picks:n(s.picks),names:n(s.names),flip:t}}const lw=new URLSearchParams(location.search),ji=lw.has("ht"),ep="https://chichibrawl-ht.dumbgamelab.com",Ed="chichibrawl.htpid",tp="chichibrawl.htn",np=()=>{try{let s=localStorage.getItem(Ed);return s||(s=crypto.randomUUID().replace(/-/g,"").slice(0,16),localStorage.setItem(Ed,s)),s}catch{return"anon"}},Dc=()=>{try{return Number(localStorage.getItem(tp))||0}catch{return 0}};function cw(){const s=Dc();return s>=10?"공정 모드 · 10판 끝":`공정 모드 ${s+1}/10`}function hw(s,{kills:e=0,gen:t=0}={}){try{localStorage.setItem(tp,String(Dc()+1))}catch{}try{fetch(`${ep}/v1/result`,{method:"POST",keepalive:!0,headers:{"content-type":"application/json"},body:JSON.stringify({pid:np(),kind:s,kills:e,gen:t,n:Dc(),ua:/Mobi|Android/i.test(navigator.userAgent)?"m":"d"})}).catch(()=>{})}catch{}}function uw(s,e){const t={v:1,src:"human",seed:s,champ:e,hz:10,s:[],ev:[],en:[]},n=a=>Math.round(a*100)/100;let i=-1,r=-1;return{tick(a,o){if(a.t-i<.1||t.s.length>=1500)return;i=a.t,t.s.push([n(a.t),n(o.x),n(o.z),o.alive?1:0,Math.round(o.hp/o.maxHp*100)]);const l=a.units.find(c=>c.team!==o.team);l&&a.t-r>=.5&&(r=a.t,t.en.push([n(a.t),n(l.x),n(l.z),l.alive?1:0]))},ev(a,o,l){if(t.ev.length>=600)return;const c=n(o.t);(a.type==="shot"||a.type==="super")&&a.u===l?t.ev.push([c,a.type,n(a.ang)]):a.type==="death"&&a.u===l?t.ev.push([c,"death"]):a.type==="death"&&a.from===l?t.ev.push([c,"kill"]):a.type==="gem"&&a.u===l?t.ev.push([c,"gem"]):a.type==="hit"&&a.u===l&&t.ev.push([c,"hurt"])},done(a,o){return t.end=n(a.t),t.winner=o,t.n=a.units.length,t}}}function dw(s){try{const e=JSON.stringify({pid:np(),tr:s});e.length<8e4&&fetch(`${ep}/v1/trace`,{method:"POST",keepalive:e.length<6e4,headers:{"content-type":"application/json"},body:e}).catch(()=>{})}catch{}}const Ni=[{at:10,coins:30},{at:20,coins:40},{at:30,champ:"tank"},{at:45,coins:60},{at:60,coins:60},{at:75,gift:1},{at:90,coins:80},{at:110,champ:"sniper"},{at:130,coins:100},{at:150,coins:100},{at:175,gift:1},{at:200,coins:150},{at:230,coins:150},{at:260,coins:200},{at:300,coins:250}],wl={win:30,draw:15,lose:10,perGem:1,cap:50},Td={tank:150,sniper:300},ip=3,Ra={perDay:3,coins:20},El="dealer",fw=s=>{const e=new Date(s);return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`};function pw(s,e=()=>Date.now()){const t={coins:s.get("coins",0),owned:s.get("owned",[El]),claimed:s.get("roadClaimed",0),rent:s.get("rent",{}),gift:s.get("gift",{day:"",used:0,extra:0})};t.owned.includes(El)||t.owned.unshift(El);const n=()=>{s.set("coins",t.coins),s.set("owned",t.owned),s.set("roadClaimed",t.claimed),s.set("rent",t.rent),s.set("gift",t.gift)},i=()=>{const a=fw(e());return t.gift.day!==a&&(t.gift={day:a,used:0,extra:t.gift.extra||0}),t.gift},r={get coins(){return t.coins},owns:a=>t.owned.includes(a),rentLeft:a=>t.rent[a]||0,canPlay:a=>r.owns(a)||r.rentLeft(a)>0,unlockAt:a=>Ni.find(o=>o.champ===a)?.at??null,price:a=>Td[a]??null,claimable:a=>Ni.filter((o,l)=>l>=t.claimed&&a>=o.at).length,next(a){const o=t.claimed;if(o>=Ni.length)return null;const l=o?Ni[o-1].at:0,c=Ni[o];return{...c,index:o,from:l,ready:a>=c.at,p:Math.max(0,Math.min(1,(a-l)/(c.at-l)))}},road:a=>Ni.map((o,l)=>({...o,index:l,done:l<t.claimed,ready:l>=t.claimed&&a>=o.at})),claim(a){const o=t.claimed,l=Ni[o];return!l||a<l.at?null:(t.claimed++,l.coins&&(t.coins+=l.coins),l.champ&&!t.owned.includes(l.champ)&&(t.owned.push(l.champ),delete t.rent[l.champ]),l.gift&&(i().extra=(t.gift.extra||0)+l.gift),n(),{...l})},buy(a){const o=Td[a];return o==null||r.owns(a)||t.coins<o?!1:(t.coins-=o,t.owned.push(a),delete t.rent[a],n(),!0)},rent(a){return r.owns(a)||!Jn.includes(a)?!1:(t.rent[a]=ip,n(),!0)},giftsLeft(){const a=i();return Math.max(0,Ra.perDay-a.used)+(a.extra||0)},takeGift(){if(r.giftsLeft()<=0)return 0;const a=i();return a.used<Ra.perDay?a.used++:a.extra--,t.coins+=Ra.coins,n(),Ra.coins},finish(a,o,l){const c=Math.min(wl.cap,(wl[a]??0)+Math.max(0,o|0)*wl.perGem);return t.coins+=c,t.last=c,!r.owns(l)&&t.rent[l]>0&&(t.rent[l]--,t.rent[l]||delete t.rent[l]),n(),c},doubleLast(){const a=t.last||0;return a?(t.coins+=a,t.last=0,n(),a):0},canDouble:()=>(t.last||0)>0};return r}const Ad=new URLSearchParams(location.search),mh=(()=>{try{return Ad.has("fakead")}catch{return Ad.has("fakead")}})(),gh=()=>window.__DGL_PORTAL_NAME&&window.__DGL_PORTAL?.ads||null;let Nc=!1;const mw=()=>mh||!!gh(),gw=()=>!Nc&&(mh||gh()?.isRewardedReady?.()!==!1);function _w(){return new Promise(s=>{const e=document.createElement("div");e.className="fake-ad",e.textContent="AD",document.body.appendChild(e),setTimeout(()=>{e.remove(),s(!0)},1200)})}async function Tl(s){if(!gw())return!1;Nc=!0;try{return mh?await _w():!!await gh().showRewarded(s)}catch{return!1}finally{Nc=!1}}const tt=(s,e=document)=>e.querySelector(s),Ui=(s,e,t="")=>{const n=document.createElement(s);return e&&(n.className=e),n.innerHTML=t,n},Va='<i class="coin"></i>',Rd=s=>s.coins?`${Va}<b>${s.coins}</b>`:s.champ?`<b>${Or[s.champ].name}</b>`:`<i class="giftbox"></i><b>+${s.gift}</b>`;function xw({select:s,resultRow:e,meta:t,getTrophies:n,getPick:i,onChange:r}){const a=s.box,o=mw(),l=Ui("div","coins",`${Va}<b>0</b>`);tt(".head",a).insertBefore(l,tt(".lg",a));const c=Ui("button","roadbar",'<div class="g"><i></i></div><div class="rw"></div><div class="dot"></div>');a.appendChild(c);const h=Ui("button","gift",'<i class="giftbox"></i><b></b>');a.appendChild(h);for(const _ of Jn){const g=tt(`.card[data-id="${_}"]`,a);g.appendChild(Ui("div","lock",`<div class="at"><i class="cup"></i><b></b></div><div class="acts"><span class="buy" role="button">${Va}<b></b></span><span class="rent" role="button"><small>${o?"광고":"체험"}</small><b>${ip}판</b></span></div>`)),g.appendChild(Ui("div","rentleft")),tt(".buy",g).addEventListener("click",p=>{i()===_&&(p.stopPropagation(),t.buy(_)?r():d(tt(".buy",g)))}),tt(".rent",g).addEventListener("click",async p=>{i()===_&&(p.stopPropagation(),!(o&&!await Tl("rent"))&&(t.rent(_),r()))})}const u=Ui("div","road",'<div class="rhead"><i class="cup"></i><b>트로피 길</b></div><div class="track"></div><button class="close">닫기</button>');document.body.appendChild(u),c.addEventListener("click",()=>{f(),u.classList.add("on")}),tt(".close",u).addEventListener("click",()=>u.classList.remove("on")),tt(".track",u).addEventListener("click",_=>{_.target.closest(".node.ready .take")&&t.claim(n())&&(f(),r())}),h.addEventListener("click",async()=>{t.giftsLeft()<=0||!await Tl("gift")||(t.takeGift(),r())});function d(_){_.classList.remove("no"),_.offsetWidth,_.classList.add("no")}function f(){const _=n(),g=t.road(_);tt(".track",u).innerHTML=g.map(M=>`<div class="node ${M.done?"done":M.ready?"ready":""}"><div class="at"><i class="cup"></i><b>${M.at}</b></div><div class="rw">${Rd(M)}</div>${M.ready&&M.index===g.findIndex(x=>x.ready)?'<button class="take">받기</button>':""}</div>`).join(""),(tt(".node.ready",u)||tt(".node:not(.done)",u))?.scrollIntoView?.({inline:"center",block:"nearest"})}return{draw(){const _=n(),g=i();tt("b",l).textContent=t.coins.toLocaleString();const p=t.next(_),M=t.claimable(_);c.classList.toggle("ready",M>0),c.style.display=p?"":"none",p&&(tt(".g i",c).style.width=`${Math.round(p.p*100)}%`,tt(".rw",c).innerHTML=Rd(p),tt(".dot",c).textContent=M>0?String(M):"");const x=t.giftsLeft();h.style.display=o&&x>0?"":"none",tt("b",h).textContent=x;for(const y of Jn){const R=tt(`.card[data-id="${y}"]`,a),S=t.canPlay(y),w=t.unlockAt(y),P=t.price(y);R.classList.toggle("locked",!S),tt(".lock .at",R).style.display=w!=null?"":"none",tt(".lock .at b",R).textContent=w??"",tt(".lock .buy",R).style.display=P!=null?"":"none",tt(".lock .buy b",R).textContent=P??"",tt(".lock .buy",R).classList.toggle("poor",P!=null&&t.coins<P);const C=t.owns(y)?0:t.rentLeft(y);tt(".rentleft",R).style.display=C?"":"none",tt(".rentleft",R).textContent=`${C}판 남음`}tt(".go",a).classList.toggle("off",!t.canPlay(g))},showCoins(_){let g=tt(".mcoins",e.parentElement);g||(g=Ui("div","mcoins",`<div class="got">${Va}<b></b></div><button class="dbl"><small>광고</small><b>×2</b></button>`),e.parentElement.insertBefore(g,e),tt(".dbl",g).addEventListener("click",async()=>{if(!t.canDouble()||!await Tl("double"))return;const p=t.doubleLast();tt(".got b",g).textContent="+"+p*2,tt(".dbl",g).style.display="none"})),g.style.display=_>0?"":"none",tt(".got b",g).textContent="+"+_,tt(".dbl",g).style.display=o&&t.canDouble()?"":"none"}}}const ct=new URLSearchParams(location.search),sp=ct.get("lab"),Pn=ct.has("auto")||!!sp,_h=ct.has("sprites"),Gt={get:(s,e)=>{try{return JSON.parse(localStorage.getItem("chichibrawl."+s))??e}catch{return e}},set:(s,e)=>{try{localStorage.setItem("chichibrawl."+s,JSON.stringify(e))}catch{}}};let Ut=ct.has("tro")?Number(ct.get("tro")):Gt.get("trophies",0),zt=ct.has("streak")?Number(ct.get("streak")):Gt.get("streak",0),$t=ct.get("champ")||Gt.get("pick","dealer");Or[$t]||($t="dealer");const xh=pw(Gt),to=Pn||ji||ct.has("champ");let As=ji?"3v3":ct.get("mode")||Gt.get("mode","3v3"),no=Math.min(Ur.length-1,Number(ct.get("tier")??Gt.get("duelTier",2)));const vw=document.getElementById("stage"),rn=new jv({antialias:!0,preserveDrawingBuffer:Pn});rn.setPixelRatio(ct.has("dpr")?Number(ct.get("dpr")):Math.min(devicePixelRatio||1,2));rn.outputColorSpace=mt;rn.shadowMap.enabled=!0;rn.shadowMap.type=Od;rn.toneMapping=Qn;vw.appendChild(rn.domElement);const wn=new pf;wn.background=new we(3111484);const rp=Math.sin(Qi*Math.PI/180),yw=Math.cos(Qi*Math.PI/180),fn=new kr(-1,1,1,-1,1,220);wn.userData.cam=fn;const Uc=ct.has("view")?Number(ct.get("view")):30;let Gi=Uc;wn.add(new Yy(16777215,10066329,1.55));const In=new Df(16777215,1.6);In.castShadow=!0;In.shadow.mapSize.set(2048,2048);Object.assign(In.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:90});In.shadow.bias=-6e-4;In.shadow.normalBias=.04;In.shadow.radius=4;wn.add(In,In.target);function vh(){rn.setSize(innerWidth,innerHeight);const s=innerWidth/innerHeight;fn.left=-Gi/2,fn.right=Gi/2,fn.top=Gi/s/2,fn.bottom=-Gi/s/2,fn.updateProjectionMatrix()}addEventListener("resize",vh);vh();function Cd(s){Math.abs(s-Gi)>.001&&(Gi=s,vh())}function Pd(s,e){fn.position.set(s,rp*80,e+yw*80),fn.lookAt(s,0,e),fn.updateMatrixWorld(),In.position.set(s+.18*30,30,e-.52*30),In.target.position.set(s,0,e)}const Al=new I;function io(s,e,t){return Al.set(s,e,t).project(fn),[(Al.x+1)/2*innerWidth,(1-Al.y)/2*innerHeight]}const Mw=ct.get("look")==="0",Sw=WS(rn,wn,fn);let xt=null,Ld=null,Ee=null,Si=null,Oc=null,Ln=[],Zi=null,pe=null,Fc=null,Dt="load",Rl=0,Rs=0,Mr=28,Sr=10.5;const Nt=Bb(document.body,{onOrder:s=>{Ee&&!xt&&(Ee.orders={...Ee.orders,blue:s})}}),Ms=Fb(rn.domElement,Nt),Yi=zb(document.body,{trophies:Ut,tierName:ro(Ut,zt).name,streak:zt,mode:As,duelTier:no,onPick:s=>{$t=s,Gt.set("pick",s),op(),mn.pick(s),yo.draw()},onStart:()=>{!to&&!xh.canPlay($t)||(As==="friend"?mn.open():As==="quick"?Vr.open():Sh())},onMode:s=>{As=s,Gt.set("mode",s)},onTier:s=>{no=s,Gt.set("duelTier",s)}}),Hr=Hb(document.body,{onAgain:()=>xt?(Hr.show(!1),mn.isAuto()?(xt=null,mn.close(),so(),Vr.open()):mn.back()):Sh(),onChange:()=>{xt&&(xt=null,mn.close()),so()}}),yo=xw({select:Yi,resultRow:document.querySelector(".result .row"),meta:xh,getTrophies:()=>Ut,getPick:()=>$t,onChange:()=>yo.draw()}),bw=Jb(document.querySelector(".result .row"),{getName:()=>Gt.get("nick","냥냥")}),Zn=iw(rn.domElement),yh=sw(document.querySelector(".result .row"),{getName:()=>Gt.get("nick","냥냥")});let kc=0,Bc=-99;const mn=Kb({store:Gt,getPick:()=>$t,onMatch:(s,e)=>Rw(s,e),onSnap:s=>xt?.snap(s),onDrop:()=>{Dt==="play"&&xt&&(xt=null,so())},onAutoErr:s=>Vr.fail(s)}),Vr=Zb({store:Gt,getPick:()=>$t,join:(s,e)=>mn.joinAuto(s,e)}),ap=new ft({color:16777215,transparent:!0,opacity:.45,depthWrite:!1,side:un}),$n=new Ke(new vt,ap);$n.visible=!1;$n.renderOrder=2;$n.frustumCulled=!1;wn.add($n);const ww=(s,e)=>s.kind==="dash"?"dash":s.passWalls?"pass":e?"super":"shot",mi=.45;function Ew(s,e,t,n){const i=ww(s,n),r=[];if(s.kind==="spread"){const p=s.range;for(let x=0;x<=24;x++){const y=t+(x/24-.5)*s.arc,R=mi+Eo(Ee,e.x+Math.cos(y)*mi,e.z+Math.sin(y)*mi,y,p-mi,i);r.push(Math.cos(y)*R,Math.sin(y)*R)}const M=[];for(let x=0;x<24;x++)M.push(0,.04,0,r[x*2],.04,r[x*2+1],r[x*2+2],.04,r[x*2+3]);return new vt().setAttribute("position",new at(M,3))}const a=s.kind==="dash"?s.dist:s.range,o=s.kind==="dash"?1:s.kind==="burst"?.55:.4,l=Math.max(.3,s.kind==="dash"?Eo(Ee,e.x,e.z,t,a,i):mi+Eo(Ee,e.x+Math.cos(t)*mi,e.z+Math.sin(t)*mi,t,a-mi,i)),c=Math.cos(t),h=Math.sin(t),u=-h*o/2,d=c*o/2,f=c*l,m=h*l,_=[u,.04,d,f+u,.04,m+d,f-u,.04,m-d,u,.04,d,f-u,.04,m-d,-u,.04,-d];return new vt().setAttribute("position",new at(_,3))}function Tw(){Si&&(Si.dispose(),Si=null),Oc?.dispose(),Oc=null;for(const s of Ln)s.dispose();Ln=[],Zi&&Zi.dispose?.(),Nt.reset()}let Dr=null,yi=null;function Mh(s,e,t){Tw();const n=s.blue.length===1,i=n?Ur[no]:ro(Ut,zt),r=(l,c,h)=>l==="blue"&&c===e?"나":Or[h].name,a={blue:s.blue.map((l,c)=>r("blue",c,l)),red:s.red.map((l,c)=>r("red",c,l))};if(Ee=t?Ih({picks:s,player:-1,seed:t.seed,names:t.names}):Ih({picks:s,player:e,tier:i,seed:ct.has("seed")?Number(ct.get("seed")):Math.random()*1e9|0,names:a,brains:yi?.brains}),yi)for(const l of Ee.units)yi.brains[l.team].prep?.(l);if(Si=bS(wn,Ee),Oc=GS(wn,Ee),Zi=Zi||Ub(wn,{muzzleOf:(l,c)=>Ln.find(h=>h.u===l)?.muzzle?.(c)??null}),Ln=Ee.units.map(l=>(_h?kS:ab)(wn,l)),pe=Ee.units.find(l=>l.isPlayer)||Ee.units[0],t){Nt.setLeague(mn.isAuto()?"빠른 대전":`친구 방 · ${t.code}`),Nt.showOrders(!1),Nt.setStreak(0,0);return}const o=n||yi?null:Wb(ji?1e9:Sp(Ut,zt));o&&Xb(Ee,o),Nt.setLeague(ji?cw():n?`1대1 · ${i.name}`:`${yp(Ut)} 리그 · 트로피 ${Ut.toLocaleString()}${zt>0?` · ${zt}연승`:""}`),Nt.setStreak(n?0:zt,Mp(zt)),Ee.orders={blue:null,red:null},Nt.setOrder(null),Nt.showOrders(!n)}function op(){if(!Ee||Dt!=="select")return;const s=Ee.spawns.blue;Ee.units.forEach((e,t)=>{const n=Ln[t];if(e.team!=="blue"){n.root.visible=!1;return}e.x=s[t].x,e.z=s[t].z-1,e.face=Math.PI/2,n.x=e.x,n.z=e.z,e.isPlayer=e.cid===$t,n.ring.material.opacity=e.isPlayer?.95:.25,e.isPlayer&&(n.pop=0)}),Yi.pick($t)}function so(){Zn.stop(),yh.show(null),Dt="select",Hr.show(!1),Nt.show(!1),Mh({blue:[...Jn],red:[...Jn]},-1),Yi.setTrophies(Ut,ro(Ut,zt).name,zt),Yi.show(!0),op(),to||yo.draw(),Yi.box.classList.toggle("free",to)}function Sh(){Yi.show(!1),Hr.show(!1);const s=Jn.filter(n=>n!==$t),e=[...Jn].sort(()=>Math.random()-.5);yi&&e.splice(0,3,...[...Jn].reverse());const t=As==="1v1"?{blue:[$t],red:[e[0]]}:{blue:[$t,...s],red:e};Mh(t,Pn&&!ct.has("me")?-1:0),Pn&&(pe=Ee.units[0]),sp&&(Fc=Vb(Ee,ct),pe=Fc.me),yi&&vp(yi,(As==="1v1"?Ur[no]:ro(Ut,zt)).name),Dr=ji&&!xt&&!Pn?uw(Ee.seed??0,$t):null,Dt="play",Nt.show(!0),Mr=pe.z,Sr=pe.x,lp()}function lp(){yh.show(null),kc=0,Bc=-99,(!Pn||ct.has("hl"))&&Zn.start()}function Aw(s){if(s.type==="super"&&s.u===pe&&(Bc=Ee.t,Zn.note("super")),s.type==="death"&&(s.from===pe&&s.u.team!==pe.team?Zn.note("kill",{super:Ee.t-Bc<2.5}):s.u===pe&&Zn.note("died")),s.type==="gem"||s.type==="death"){const e=Math.sign(Dh(Ee,pe.team)-Dh(Ee,pe.team==="blue"?"red":"blue"));e>0&&kc<0&&Ee.t>Nd.time-25&&Zn.note("comeback"),e!==0&&(kc=e)}}function cp(){Dt="result";const s=Ee.winner==="draw"?"draw":Ee.winner==="blue"?"win":"lose";let e=Ee.units.length===2||xt||ji?0:Lh[s];s==="lose"&&Ut<Lh.safeUnder&&(e=0),Ut=Math.max(0,Ut+e),Gt.set("trophies",Ut),Ee.units.length>2&&!xt&&(zt=bp(zt,s),Gt.set("streak",zt)),Nt.show(!1),ji&&!xt&&Ee.units.length===6&&(hw(s,{kills:pe.kills,gen:Ee.units.find(n=>n.team==="red"&&n.gen)?.gen}),Dr&&dw(Dr.done(Ee,s))),Hr.show(!0,{kind:s,delta:e,total:Ut,streak:zt,kills:pe.kills,gems:pe.gemsTaken||0}),yo.showCoins(to?0:xh.finish(s,pe.gemsTaken||0,$t)),Zn.finish().then(n=>{window.__brawl.clip=n,Dt==="result"&&yh.show(n)});const t=Ee.units.find(n=>n.team==="red"&&n.gen)?.gen;bw.show(s==="win"&&!xt&&!!t&&Ee.units.length===6,{gen:t,kills:pe.kills,gems:pe.gemsTaken||0,trophies:Ut})}function Rw(s,e){if(xt&&Ld===s.seed&&Dt==="play")return;Yi.show(!1),Hr.show(!1);const t=ow(s,e);Mh(t.picks,-1,{seed:s.seed,names:t.names,code:s.code}),Vr.done(),xt=aw(Ee,s,e,mn.send),Ld=s.seed,pe=xt.me,Dt="play",Nt.show(!0),Mr=pe.z,Sr=pe.x,lp()}function Ca(s,e,t){if(s==null)return null;if(s!=="auto")return s;let n=null,i=1/0;const r=t.kind==="dash"?t.dist+1:(t.range??Cp(e))*1.1;for(const a of Ee.units)if(a.team!==e.team&&Xi(Ee,e.team,a)){const o=Math.hypot(a.x-e.x,a.z-e.z);o<i&&o<r&&(i=o,n=a)}return n?Math.atan2(n.z-e.z,n.x-e.x):e.face}const Wi=1/60;let Cl=0,Ga=performance.now(),Nr=0,Id=Ga/1e3;window.DGL_PAUSE?.clock(()=>Nr);function hp(s){if(Dt==="play"){if(xt){const[e,t]=pe.alive?Ms.move():[0,0],[n,i]=Ms.take();xt.tick(s,e,t,pe.alive?Ca(n,pe,pe.c.attack):null,pe.alive?Ca(i,pe,pe.c.super):null)}else if(!Pn&&pe.alive){const[e,t]=Ms.move();pe.input.mx=e,pe.input.mz=t;const[n,i]=Ms.take();pe.input.fire=Ca(n,pe,pe.c.attack),pe.input.superFire=Ca(i,pe,pe.c.super)}else Ms.take();Fc?.tick(s),xt||Rp(Ee,s),Dr?.tick(Ee,pe);for(const e of xt?xt.drain():Ee.events){if(Zi.onEvent(e),Aw(e),Dr?.ev(e,Ee,pe),e.type==="destroy"&&Si.destroy(e.i,e.j,e.kind),e.type==="wall"&&Si?.hitWall(e.b),(e.type==="super"||e.type==="death")&&window.__brawl.moments.push({t:+Nr.toFixed(2),type:e.type,who:e.u.c.name,team:e.u.team,d:pe.alive||e.u===pe?+Math.hypot(e.u.x-pe.x,e.u.z-pe.z).toFixed(1):99}),e.type==="hit"){const[t,n]=io(e.u.x,e.u.c.height+.3,e.u.z);Xi(Ee,pe.team,e.u)&&Nt.damage(t,n,e.dmg,e.u===pe,e.u);const i=Ln.find(r=>r.u===e.u);i&&(i.flash=1,i.onHit?.())}if(e.type==="shot"||e.type==="super"){const t=Ln.find(i=>i.u===e.u);t&&t.onShot();const n=window.__brawl.shots;n.push({id:e.u.id,t:Ee.t,ang:e.ang}),n.length>400&&n.shift()}if(e.type==="heal"&&e.n>0&&Xi(Ee,pe.team,e.u)){const[t,n]=io(e.u.x,e.u.c.height+.3,e.u.z);Nt.heal(t,n,e.n)}e.type==="push"&&Ln.find(t=>t.u===e.u)?.onPush?.(),(e.type==="death"||e.type==="super")&&Xi(Ee,pe.team,e.u)&&Math.hypot(e.u.x-pe.x,e.u.z-pe.z)<9&&(Rs=Math.max(Rs,e.u===pe||e.from===pe?.12:.05)),e.type==="gem"&&e.u===pe&&(pe.gemsTaken=(pe.gemsTaken||0)+1),e.type==="end"&&(Rl=1.6)}Ee.events.length=0,Ee.over&&(Rl-=s,Rl<=0&&!Pn&&cp())}}function up(s,e){if(!Ee)return;const t=pe?pe.team:"blue";for(const i of Ln){const r=i.u,a=Dt==="select"?r.team==="blue":Xi(Ee,t,r),o=r.team===t&&Ee.map[Math.floor(r.z)]?.[Math.floor(r.x)]==="B";Dt==="select"&&(i.bodyScale=r.isPlayer?1.1:.92),i.update(s,e,a,o?.6:1),Dt==="select"&&(i.root.visible=r.team==="blue")}if(Si.update(e,Ee.units,t,Ee.bullets),Zi.update(s,e,Ee),Dt==="select")Cd(10*.91/1.05),Pd(Ee.W/2,Ee.spawns.blue[1].z-1.2);else{Cd(Uc);const i=Gi/(innerWidth/innerHeight)/2/rp-.6,r=pe.team==="blue"?-1.4:1.4,a=(pe.alive?pe.z:Ee.spawns[pe.team][pe.k].z)+r;Mr+=(Math.max(i,Math.min(Ee.H-i,a))-Mr)*Math.min(1,s*5);const o=Uc/2-.4,l=pe.alive?pe.x:Ee.spawns[pe.team][pe.k].x;Sr+=((o*2>=Ee.W?Ee.W/2:Math.max(o,Math.min(Ee.W-o,l)))-Sr)*Math.min(1,s*5),Rs=Math.max(0,Rs-s);const c=(Math.random()-.5)*Rs*.8,h=(Math.random()-.5)*Rs*.8;Pd(Sr+c,Mr+h)}const n=Ms.st;if(Dt==="play"&&pe.alive&&n.aimKind&&n.aim!=null){const i=n.aimKind==="sup"?pe.c.super:pe.c.attack;$n.geometry.dispose(),$n.geometry=Ew(i,pe,n.aim,n.aimKind==="sup"),$n.position.set(pe.x,.08,pe.z),$n.visible=!0,ap.color.setHex(n.aimKind==="sup"?16765498:16777215)}else $n.visible=!1;(Dt==="play"||Dt==="result")&&Nt.update(Ee,pe,io,i=>Xi(Ee,t,i)),_h||Mw?rn.render(wn,fn):Sw.render()}const Wa=[];function dp(s){Wa.push(s-Ga),Wa.length>600&&Wa.shift();const e=Math.min(.05,(s-Ga)/1e3);Ga=s;const t=window.DGL_PAUSE?DGL_PAUSE.step(e,.05):e;if(!fp){for(Cl+=t,Id+=t;Cl>=Wi;)hp(Wi),Cl-=Wi,Nr+=Wi;up(t,Id),Zn.frame()}requestAnimationFrame(dp)}let fp=!1,Dd=0;window.__brawl={ready:!1,moments:[],shots:[],hl:Zn,clip:null,finish:()=>cp(),world:()=>Si,project:(s,e,t)=>io(s,e,t),actors:()=>Ln,fxLog:()=>Zi?.log??[],setT(s){for(fp=!0;Nr<s;)hp(Wi),Nr+=Wi;up(Math.max(Wi,s-Dd),s),Dd=s},state:()=>Ee,friends:()=>mn.state(),quick:()=>({active:Vr.active(),auto:mn.isAuto()}),net:()=>xt?.stats()??null,perf(){const s=Wa.slice(30).sort((e,t)=>e-t);return{n:s.length,avg:s.reduce((e,t)=>e+t,0)/s.length,p95:s[Math.floor(s.length*.95)],calls:rn.info.render.calls,tris:rn.info.render.triangles}}};_h?await US():await ib(["dealer","tank","sniper"]);await tS();await gS();await cS();Pn&&(ct.has("blue")||ct.has("red"))&&(yi=await(await xp(async()=>{const{loadTestBrains:s}=await import("./ai-v3-BLoGGM_b.js").then(e=>e.t);return{loadTestBrains:s}},__vite__mapDeps([0,1,2]),import.meta.url)).loadTestBrains(ct));await Gb();document.querySelector(".loading")?.remove();Pn?Sh():(ct.get("screen"),so());ct.get("room")&&mn.open(ct.get("room").toUpperCase());window.__brawl.ready=!0;requestAnimationFrame(dp);
