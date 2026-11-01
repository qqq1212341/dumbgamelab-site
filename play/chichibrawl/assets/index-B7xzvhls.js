const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ai-v3-C-HvLQxP.js","./data-r69UShqo.js","./sim-Dg-ZCbir.js"])))=>i.map(i=>d[i]);
import{_ as Jd,s as Qd}from"./ai-v3-C-HvLQxP.js";import{M as gf,B as Lr,C as bs,a as Za,t as Ja,T as ep,s as tp,r as np,n as ip}from"./data-r69UShqo.js";import{v as Hi,O as sp,h as rp,b as ap,m as op,i as _h,j as lp,a as cp,t as xh,k as _o}from"./sim-Dg-ZCbir.js";import{m as hp}from"./aimacro-CUHaVwwG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="169",up=0,vh=1,fp=2,_f=1,xf=2,Gn=3,Jn=0,Xt=1,ln=2,xi=0,Es=1,yl=2,yh=3,Mh=4,dp=5,Ui=100,pp=101,mp=102,gp=103,_p=104,xp=200,vp=201,yp=202,Mp=203,Ml=204,Sl=205,Sp=206,bp=207,Ep=208,wp=209,Tp=210,Ap=211,Rp=212,Cp=213,Pp=214,bl=0,El=1,wl=2,Rs=3,Tl=4,Al=5,Rl=6,Cl=7,Pc=0,Lp=1,Ip=2,jn=0,Dp=1,Np=2,Up=3,Op=4,Fp=5,kp=6,Bp=7,Sh="attached",zp="detached",vf=300,Cs=301,Ps=302,Pl=303,Ll=304,Qa=306,Ls=1e3,mi=1001,Fa=1002,Nt=1003,yf=1004,or=1005,Wt=1006,Ea=1007,Yn=1008,Qn=1009,Mf=1010,Sf=1011,vr=1012,Lc=1013,Gi=1014,Mn=1015,Ir=1016,Ic=1017,Dc=1018,Is=1020,bf=35902,Ef=1021,wf=1022,fn=1023,Tf=1024,Af=1025,ws=1026,Ds=1027,Nc=1028,Uc=1029,Rf=1030,Oc=1031,Fc=1033,wa=33776,Ta=33777,Aa=33778,Ra=33779,Il=35840,Dl=35841,Nl=35842,Ul=35843,Ol=36196,Fl=37492,kl=37496,Bl=37808,zl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Kl=37817,$l=37818,jl=37819,Zl=37820,Jl=37821,Ca=36492,Ql=36494,ec=36495,Cf=36283,tc=36284,nc=36285,ic=36286,Pf=2200,Hp=2201,Vp=2202,yr=2300,Mr=2301,xo=2302,gs=2400,_s=2401,ka=2402,kc=2500,Gp=2501,Wp=0,Lf=1,sc=2,Xp=3200,qp=3201,eo=0,Yp=1,di="",pt="srgb",Ct="srgb-linear",Bc="display-p3",to="display-p3-linear",Ba="linear",ht="srgb",za="rec709",Ha="p3",$i=7680,bh=519,Kp=512,$p=513,jp=514,If=515,Zp=516,Jp=517,Qp=518,em=519,rc=35044,Eh="300 es",Kn=2e3,Va=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const cr=Math.PI/180,Ns=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function zc(s,e){return(s%e+e)%e}function tm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function nm(s,e,t){return s!==e?(t-s)/(e-s):0}function hr(s,e,t){return(1-t)*s+t*e}function im(s,e,t,n){return hr(s,e,1-Math.exp(-t*n))}function sm(s,e=1){return e-Math.abs(zc(s,e*2)-e)}function rm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function om(s,e){return s+Math.floor(Math.random()*(e-s+1))}function lm(s,e){return s+Math.random()*(e-s)}function cm(s){return s*(.5-Math.random())}function hm(s){s!==void 0&&(wh=s);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function um(s){return s*cr}function fm(s){return s*Ns}function dm(s){return(s&s-1)===0&&s!==0}function pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:cr,RAD2DEG:Ns,generateUUID:pn,clamp:At,euclideanModulo:zc,mapLinear:tm,inverseLerp:nm,lerp:hr,damp:im,pingpong:sm,smoothstep:rm,smootherstep:am,randInt:om,randFloat:lm,randFloatSpread:cm,seededRandom:hm,degToRad:um,radToDeg:fm,isPowerOfTwo:dm,ceilPowerOfTwo:pm,floorPowerOfTwo:mm,setQuaternionFromProperEuler:gm,normalize:ot,denormalize:yn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],x=i[4],y=i[7],R=i[2],S=i[5],E=i[8];return r[0]=a*_+o*M+l*R,r[3]=a*g+o*x+l*S,r[6]=a*p+o*y+l*E,r[1]=c*_+h*M+u*R,r[4]=c*g+h*x+u*S,r[7]=c*p+h*y+u*E,r[2]=f*_+d*M+m*R,r[5]=f*g+d*x+m*S,r[8]=f*p+d*y+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new qe;function Df(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _m(){const s=Sr("canvas");return s.style.display="block",s}const Th={};function Pa(s){s in Th||(Th[s]=!0,console.warn(s))}function xm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ym(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ah=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[Ct]:{transfer:Ba,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[pt]:{transfer:ht,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[to]:{transfer:Ba,primaries:Ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Rh),fromReference:s=>s.applyMatrix3(Ah)},[Bc]:{transfer:ht,primaries:Ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Rh),fromReference:s=>s.applyMatrix3(Ah).convertLinearToSRGB()}},Mm=new Set([Ct,to]),Je={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=qs[e].toReference,i=qs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qs[s].primaries},getTransfer:function(s){return s===di?Ba:qs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(qs[e].luminanceCoefficients)}};function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ji;class Sm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Sr("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bm=0;class Nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Mo(i[a].image)):r.push(Mo(i[a]))}else r=Mo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Em=0;class bt extends qi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=mi,i=mi,r=Wt,a=Yn,o=fn,l=Qn,c=bt.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=pn(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=vf;bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,R=(p+1)/2,S=(h+f)/4,E=(u+_)/4,L=(m+g)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=E/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=L/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=1-o;const p=l*f+c*d+h*m+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),S=Math.atan2(R,p*M);g=Math.sin(g*S)/R,o=Math.sin(o*S)/R}const y=o*M;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-o*d,e[t+2]=c*m+h*d+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new I,Ch=new zt;class Ln{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Hr.subVectors(this.max,Ys),Zi.subVectors(e.a,Ys),Ji.subVectors(e.b,Ys),Qi.subVectors(e.c,Ys),ii.subVectors(Ji,Zi),si.subVectors(Qi,Ji),wi.subVectors(Zi,Qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!bo(t,Zi,Ji,Qi,Hr)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,Zi,Ji,Qi,Hr))?!1:(Vr.crossVectors(ii,si),t=[Vr.x,Vr.y,Vr.z],bo(t,Zi,Ji,Qi,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,zr=new Ln,Zi=new I,Ji=new I,Qi=new I,ii=new I,si=new I,wi=new I,Ys=new I,Hr=new I,Vr=new I,Ti=new I;function bo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ti.fromArray(s,r);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Am=new Ln,Ks=new I,Eo=new I;class In{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Am.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Eo)),this.expandByPoint(Ks.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new I,wo=new I,Gr=new I,ri=new I,To=new I,Wr=new I,Ao=new I;class no{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wo.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=ri.dot(this.direction),l=-ri.dot(Gr),c=ri.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wo).addScaledVector(Gr,f),d}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){To.subVectors(t,e),Wr.subVectors(n,e),Ao.crossVectors(To,Wr);let a=this.direction.dot(Ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(ri,Wr));if(l<0)return null;const c=o*this.direction.dot(To.cross(ri));if(c<0||l+c>a)return null;const h=-o*ri.dot(Ao);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,g){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ai.crossVectors(n,$t),ai.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ai.crossVectors(n,$t)),ai.normalize(),Xr.crossVectors($t,ai),i[0]=ai.x,i[4]=Xr.x,i[8]=$t.x,i[1]=ai.y,i[5]=Xr.y,i[9]=$t.y,i[2]=ai.z,i[6]=Xr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],x=n[7],y=n[11],R=n[15],S=i[0],E=i[4],L=i[8],C=i[12],v=i[1],b=i[5],N=i[9],D=i[13],F=i[2],X=i[6],B=i[10],q=i[14],V=i[3],he=i[7],re=i[11],le=i[15];return r[0]=a*S+o*v+l*F+c*V,r[4]=a*E+o*b+l*X+c*he,r[8]=a*L+o*N+l*B+c*re,r[12]=a*C+o*D+l*q+c*le,r[1]=h*S+u*v+f*F+d*V,r[5]=h*E+u*b+f*X+d*he,r[9]=h*L+u*N+f*B+d*re,r[13]=h*C+u*D+f*q+d*le,r[2]=m*S+_*v+g*F+p*V,r[6]=m*E+_*b+g*X+p*he,r[10]=m*L+_*N+g*B+p*re,r[14]=m*C+_*D+g*q+p*le,r[3]=M*S+x*v+y*F+R*V,r[7]=M*E+x*b+y*X+R*he,r[11]=M*L+x*N+y*B+R*re,r[15]=M*C+x*D+y*q+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+g*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],M=u*g*c-_*f*c+_*l*d-o*g*d-u*l*p+o*f*p,x=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,y=h*_*c-m*u*c+m*o*d-a*_*d-h*o*p+a*u*p,R=m*u*l-h*_*l-m*o*f+a*_*f+h*o*g-a*u*g,S=t*M+n*x+i*y+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=M*E,e[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*E,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*E,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=x*E,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*E,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*E,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=y*E,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*E,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*E,e[12]=R*E,e[13]=(h*_*i-m*u*i+m*n*f-t*_*f-h*n*g+t*u*g)*E,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*g-t*o*g)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,_=a*h,g=a*u,p=o*u,M=l*c,x=l*h,y=l*u,R=n.x,S=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+y)*R,i[2]=(m-x)*R,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+x)*E,i[9]=(g-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=es.set(i[0],i[1],i[2]).length();const a=es.set(i[4],i[5],i[6]).length(),o=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Kn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(o===Kn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Va)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Kn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let m,_;if(o===Kn)m=(a+r)*u,_=-2*u;else if(o===Va)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new I,_n=new Fe,Rm=new I(0,0,0),Cm=new I(1,1,1),ai=new I,Xr=new I,$t=new I,Ph=new Fe,Lh=new zt;class En{constructor(e=0,t=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const Ih=new I,ts=new zt,Bn=new Fe,qr=new I,$s=new I,Lm=new I,Im=new zt,Dh=new I(1,0,0),Nh=new I(0,1,0),Uh=new I(0,0,1),Oh={type:"added"},Dm={type:"removed"},ns={type:"childadded",child:null},Ro={type:"childremoved",child:null};class dt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new En,n=new zt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new qe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt($s,qr,this.up):Bn.lookAt(qr,$s,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Bn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,zn=new I,Co=new I,Hn=new I,is=new I,ss=new I,Fh=new I,Po=new I,Lo=new I,Io=new I,Do=new nt,No=new nt,Uo=new nt;class cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),zn.subVectors(n,t),Co.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(zn),l=xn.dot(Co),c=zn.dot(zn),h=zn.dot(Co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Do.setScalar(0),No.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(e,t),No.fromBufferAttribute(e,n),Uo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(No,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;is.subVectors(i,n),ss.subVectors(r,n),Po.subVectors(e,n);const l=is.dot(Po),c=ss.dot(Po);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,i);const h=is.dot(Lo),u=ss.dot(Lo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(is,a);Io.subVectors(e,r);const d=is.dot(Io),m=ss.dot(Io);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ss,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Fh.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Fh,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Oo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=zc(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Oo(a,r,e+1/3),this.g=Oo(a,r,e),this.b=Oo(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=Ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(At(Lt.r*255,0,255))*65536+Math.round(At(Lt.g*255,0,255))*256+Math.round(At(Lt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=pt){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Yr);const n=hr(oi.h,Yr.h,t),i=hr(oi.s,Yr.s,t),r=hr(oi.l,Yr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ee;Ee.NAMES=Ff;let Nm=0;class Qt extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Es,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ft extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,Kr=new se;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class kf extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bf extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Um=0;const sn=new Fe,Fo=new dt,rs=new I,jt=new Ln,js=new Ln,Tt=new I;class xt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Bf:kf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(jt.min,js.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,js.max),jt.expandByPoint(Tt)):(jt.expandByPoint(js.min),jt.expandByPoint(js.max))}jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Tt.add(rs)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,f=new se,d=new se,m=new se,_=new I,g=new I;function p(L,C,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(b),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(b),o[L].add(_),o[C].add(_),o[v].add(_),l[L].add(g),l[C].add(g),l[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,C=M.length;L<C;++L){const v=M[L],b=v.start,N=v.count;for(let D=b,F=b+N;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new I,y=new I,R=new I,S=new I;function E(L){R.fromBufferAttribute(i,L),S.copy(R);const C=o[L];x.copy(C),x.sub(R.multiplyScalar(R.dot(C))).normalize(),y.crossVectors(S,C);const b=y.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,b)}for(let L=0,C=M.length;L<C;++L){const v=M[L],b=v.start,N=v.count;for(let D=b,F=b+N;D<F;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new St(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new Fe,Ai=new no,$r=new In,Bh=new I,jr=new I,Zr=new I,Jr=new I,ko=new I,Qr=new I,zh=new I,ea=new I;class $e extends dt{constructor(e=new xt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ko.fromBufferAttribute(u,e),a?Qr.addScaledVector(ko,h):Qr.addScaledVector(ko.sub(t),h))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!($r.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere($r,Bh)===null||Ai.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(kh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,R=x;y<R;y+=3){const S=o.getX(y),E=o.getX(y+1),L=o.getX(y+2);i=ta(this,p,e,n,c,h,u,S,E,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=ta(this,a,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,R=x;y<R;y+=3){const S=y,E=y+1,L=y+2;i=ta(this,p,e,n,c,h,u,S,E,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=g,x=g+1,y=g+2;i=ta(this,a,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Om(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Jn,o),l===null)return null;ea.copy(o),ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:s}}function ta(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,jr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Jr);const h=Om(s,e,t,n,jr,Zr,Jr,zh);if(h){const u=new I;cn.getBarycoord(zh,jr,Zr,Jr,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new se)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};cn.getNormal(jr,Zr,Jr,f.normal),h.face=f,h.barycoord=u}return h}class ti extends xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function m(_,g,p,M,x,y,R,S,E,L,C){const v=y/E,b=R/L,N=y/2,D=R/2,F=S/2,X=E+1,B=L+1;let q=0,V=0;const he=new I;for(let re=0;re<B;re++){const le=re*b-D;for(let Ue=0;Ue<X;Ue++){const ke=Ue*v-N;he[_]=ke*M,he[g]=le*x,he[p]=F,c.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[p]=S>0?1:-1,h.push(he.x,he.y,he.z),u.push(Ue/E),u.push(1-re/L),q+=1}}for(let re=0;re<L;re++)for(let le=0;le<E;le++){const Ue=f+le+X*re,ke=f+le+X*(re+1),Y=f+(le+1)+X*(re+1),ne=f+(le+1)+X*re;l.push(Ue,ke,ne),l.push(ke,Y,ne),V+=6}o.addGroup(d,V,C),d+=V,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=Us(s[t]);for(const i in n)e[i]=n[i]}return e}function Fm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const km={clone:Us,merge:Ot};var Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hf extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Hh=new se,Vh=new se;class Gt extends Hf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Vh),t.subVectors(Vh,Hh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,os=1;class Hm extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(as,os,e,t);i.layers=this.layers,this.add(i);const r=new Gt(as,os,e,t);r.layers=this.layers,this.add(r);const a=new Gt(as,os,e,t);a.layers=this.layers,this.add(a);const o=new Gt(as,os,e,t);o.layers=this.layers,this.add(o);const l=new Gt(as,os,e,t);l.layers=this.layers,this.add(l);const c=new Gt(as,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Vf extends bt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vm extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:xi});r.uniforms.tEquirect.value=t;const a=new $e(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Wt),new Hm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Bo=new I,Gm=new I,Wm=new qe;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bo.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new In,na=new I;class Hc{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,a=new Ii){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,g-d,y-p).normalize(),n[1].setComponents(l+r,f+c,g+d,y+p).normalize(),n[2].setComponents(l+a,f+h,g+m,y+M).normalize(),n[3].setComponents(l-a,f-h,g-m,y-M).normalize(),n[4].setComponents(l-o,f-u,g-_,y-x).normalize(),t===Kn)n[5].setComponents(l+o,f+u,g+_,y+x).normalize();else if(t===Va)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(na.x=i.normal.x>0?e.max.x:e.min.x,na.y=i.normal.y>0?e.max.y:e.min.y,na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xm(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Jt extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*f-a;for(let x=0;x<c;x++){const y=x*u-r;m.push(y,-M,0),_.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),S=M+1+c*p;d.push(x,y,S),d.push(y,R,S)}this.setIndex(d),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.widthSegments,e.heightSegments)}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`
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
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
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
#endif`,Wg=`struct PhysicalMaterial {
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
}`,Xg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,d_=`#define PHONG
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
}`,p_=`#define PHONG
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
}`,m_=`#define STANDARD
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
}`,g_=`#define STANDARD
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
}`,__=`#define TOON
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
}`,x_=`#define TOON
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
}`,v_=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Km,alphamap_pars_fragment:$m,alphatest_fragment:jm,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:ag,clipping_planes_fragment:og,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:xg,displacementmap_vertex:vg,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:bg,envmap_fragment:Eg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:kg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Lg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:x0,opaque_fragment:v0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:E0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:I0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:k0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:K0,cube_vert:$0,cube_frag:j0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:a_,meshlambert_vert:o_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:f_,meshphong_vert:d_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:x_,points_vert:v_,points_frag:y_,shadow_vert:M_,shadow_frag:S_,sprite_vert:b_,sprite_frag:E_},de={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ot([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ot([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ot([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ot([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ot([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ot([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ot([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ot([de.lights,de.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:Ot([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ia={r:0,b:0,g:0},Ci=new En,w_=new Fe;function T_(s,e,t,n,i,r,a){const o=new Ee(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=m(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===Qa)?(h===void 0&&(h=new $e(new ti(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Us(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(x.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(Ci)),h.material.toneMapped=Je.getTransfer(y.colorSpace)!==ht,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $e(new Jt(2,2),new ei({name:"BackgroundMaterial",uniforms:Us(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(ia,zf(s)),n.buffers.color.setClear(ia.r,ia.g,ia.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:g}}function A_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(v,b,N,D,F){let X=!1;const B=u(D,N,b);r!==B&&(r=B,c(r.object)),X=d(v,D,N,F),X&&m(v,D,N,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(v,b,N,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,b,N){const D=N.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let X=F[b.id];X===void 0&&(X={},F[b.id]=X);let B=X[D];return B===void 0&&(B=f(l()),X[D]=B),B}function f(v){const b=[],N=[],D=[];for(let F=0;F<t;F++)b[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,b,N,D){const F=r.attributes,X=b.attributes;let B=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){const re=F[V];let le=X[V];if(le===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function m(v,b,N,D){const F={},X=b.attributes;let B=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){let re=X[V];re===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),F[V]=le,B++}r.attributes=F,r.attributesNum=B,r.index=D}function _(){const v=r.newAttributes;for(let b=0,N=v.length;b<N;b++)v[b]=0}function g(v){p(v,0)}function p(v,b){const N=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;N[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),F[v]!==b&&(s.vertexAttribDivisor(v,b),F[v]=b)}function M(){const v=r.newAttributes,b=r.enabledAttributes;for(let N=0,D=b.length;N<D;N++)b[N]!==v[N]&&(s.disableVertexAttribArray(N),b[N]=0)}function x(v,b,N,D,F,X,B){B===!0?s.vertexAttribIPointer(v,b,N,F,X):s.vertexAttribPointer(v,b,N,D,F,X)}function y(v,b,N,D){_();const F=D.attributes,X=N.getAttributes(),B=b.defaultAttributeValues;for(const q in X){const V=X[q];if(V.location>=0){let he=F[q];if(he===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){const re=he.normalized,le=he.itemSize,Ue=e.get(he);if(Ue===void 0)continue;const ke=Ue.buffer,Y=Ue.type,ne=Ue.bytesPerElement,fe=Y===s.INT||Y===s.UNSIGNED_INT||he.gpuType===Lc;if(he.isInterleavedBufferAttribute){const oe=he.data,be=oe.stride,Oe=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be,oe.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<V.locationSize;Be++)g(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Be=0;Be<V.locationSize;Be++)x(V.location+Be,le/V.locationSize,Y,re,be*ne,(Oe+le/V.locationSize*Be)*ne,fe)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,he.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,le/V.locationSize,Y,re,le*ne,le/V.locationSize*oe*ne,fe)}}else if(B!==void 0){const re=B[q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}M()}function R(){L();for(const v in n){const b=n[v];for(const N in b){const D=b[N];for(const F in D)h(D[F].object),delete D[F];delete b[N]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const N in b){const D=b[N];for(const F in D)h(D[F].object),delete D[F];delete b[N]}delete n[v.id]}function E(v){for(const b in n){const N=n[b];if(N[v.id]===void 0)continue;const D=N[v.id];for(const F in D)h(D[F].object),delete D[F];delete N[v.id]}}function L(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function R_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<f.length;_++)t.update(m,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==fn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mn&&!L)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:S}}function P_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ii,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,x=M*4;let y=p.clippingState||null;l.value=y,y=h(m,f,x,d);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function L_(s){let e=new WeakMap;function t(a,o){return o===Pl?a.mapping=Cs:o===Ll&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pl||o===Ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vm(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Dr extends Hf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,Gh=[.125,.215,.35,.446,.526,.582],Oi=20,zo=new Dr,Wh=new Ee;let Ho=null,Vo=0,Go=0,Wo=!1;const Di=(1+Math.sqrt(5))/2,ls=1/Di,Xh=[new I(-Di,ls,0),new I(Di,ls,0),new I(-ls,0,Di),new I(ls,0,Di),new I(0,Di,-ls),new I(0,Di,ls),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Vo,Go),this._renderer.xr.enabled=Wo,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ir,format:fn,colorSpace:Ct,depthBuffer:!1},i=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=D_(r,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wh),h.toneMapping=jn,h.autoClear=!1;const d=new ft({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new $e(new ti,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Wh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;sa(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xh[(i-r-1)%Xh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Oi;g>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const p=[];let M=0;for(let E=0;E<Oi;++E){const L=E/_,C=Math.exp(-L*L/2);p.push(C),E===0?M+=C:E<g&&(M+=2*C)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-xs?i-x+xs:0),S=4*(this._cubeSize-y);sa(t,R,S,3*y,2*y),l.setRenderTarget(t),l.render(u,zo)}}function I_(s){const e=[],t=[],n=[];let i=s;const r=s-xs+1+Gh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-xs?l=Gh[a-s+xs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*d),x=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,L=S>2?0:-1,C=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(C,_*m*S),x.set(f,g*m*S);const v=[S,S,S,S,S,S];y.set(v,p*m*S)}const R=new xt;R.setAttribute("position",new St(M,_)),R.setAttribute("uv",new St(x,g)),R.setAttribute("faceIndex",new St(y,p)),e.push(R),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(s,e,t){const n=new Mi(s,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function D_(s,e,t){const n=new Float32Array(Oi),i=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Kh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function $h(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function N_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pl||l===Ll,h=l===Cs||l===Ps;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new qh(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new qh(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function U_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,y=M.length;x<y;x+=3){const R=M[x+0],S=M[x+1],E=M[x+2];f.push(R,S,S,E,E,R)}}else if(m!==void 0){const M=m.array;_=m.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const R=x+0,S=x+1,E=x+2;f.push(R,S,S,E,E,R)}}else return;const g=new(Df(f)?Bf:kf)(f,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function F_(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M];for(let M=0;M<_.length;M++)t.update(p,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function B_(s,e,t){const n=new WeakMap,i=new nt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let C=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*R*4*u),E=new Uf(S,y,R,u);E.type=Mn,E.needsUpdate=!0;const L=x*4;for(let v=0;v<u;v++){const b=g[v],N=p[v],D=M[v],F=y*R*4*v;for(let X=0;X<b.count;X++){const B=X*L;d===!0&&(i.fromBufferAttribute(b,X),S[F+B+0]=i.x,S[F+B+1]=i.y,S[F+B+2]=i.z,S[F+B+3]=0),m===!0&&(i.fromBufferAttribute(N,X),S[F+B+4]=i.x,S[F+B+5]=i.y,S[F+B+6]=i.z,S[F+B+7]=0),_===!0&&(i.fromBufferAttribute(D,X),S[F+B+8]=i.x,S[F+B+9]=i.y,S[F+B+10]=i.z,S[F+B+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new se(y,R)},n.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function z_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Wf extends bt{constructor(e,t,n,i,r,a,o,l,c,h=ws){if(h!==ws&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ws&&(n=Gi),n===void 0&&h===Ds&&(n=Is),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xf=new bt,jh=new Wf(1,1),qf=new Uf,Yf=new Tm,Kf=new Vf,Zh=[],Jh=[],Qh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Zh[i];if(r===void 0&&(r=new Float32Array(i),Zh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function io(s,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function H_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),wt(t,n)}}function q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),wt(t,n)}}function Y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Qh.set(n),s.uniformMatrix4fv(this.addr,!1,Qh),wt(t,n)}}function K_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function J_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=If,r=jh):r=Xf,t.setTexture2D(e||r,i)}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yf,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kf,i)}function rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qf,i)}function ax(s){switch(s){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return Q_;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(s,e){s.uniform1fv(this.addr,e)}function lx(s,e){const t=Hs(e,this.size,2);s.uniform2fv(this.addr,t)}function cx(s,e){const t=Hs(e,this.size,3);s.uniform3fv(this.addr,t)}function hx(s,e){const t=Hs(e,this.size,4);s.uniform4fv(this.addr,t)}function ux(s,e){const t=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fx(s,e){const t=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dx(s,e){const t=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function px(s,e){s.uniform1iv(this.addr,e)}function mx(s,e){s.uniform2iv(this.addr,e)}function gx(s,e){s.uniform3iv(this.addr,e)}function _x(s,e){s.uniform4iv(this.addr,e)}function xx(s,e){s.uniform1uiv(this.addr,e)}function vx(s,e){s.uniform2uiv(this.addr,e)}function yx(s,e){s.uniform3uiv(this.addr,e)}function Mx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){const n=this.cache,i=e.length,r=io(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xf,r[a])}function bx(s,e,t){const n=this.cache,i=e.length,r=io(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yf,r[a])}function Ex(s,e,t){const n=this.cache,i=e.length,r=io(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kf,r[a])}function wx(s,e,t){const n=this.cache,i=e.length,r=io(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qf,r[a])}function Tx(s){switch(s){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return wx}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function Px(s,e,t){const n=s.name,i=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nu(t,c===void 0?new Ax(o,s,e):new Rx(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Cx(o),nu(t,u)),t=u}}}class La{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Px(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function iu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Lx=37297;let Ix=0;function Dx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Nx(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===Ha&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===Ha&&(n="LinearSRGBToLinearDisplayP3"),s){case Ct:case to:return[n,"LinearTransferOETF"];case pt:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function su(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dx(s.getShaderSource(e),a)}else return i}function Ux(s,e){const t=Nx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ox(s,e){let t;switch(e){case Dp:t="Linear";break;case Np:t="Reinhard";break;case Up:t="Cineon";break;case Op:t="ACESFilmic";break;case kp:t="AgX";break;case Bp:t="Neutral";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ra=new I;function Fx(){Je.getLuminanceCoefficients(ra);const s=ra.x.toFixed(4),e=ra.y.toFixed(4),t=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Bx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function lr(s){return s!==""}function ru(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(s){return s.replace(Hx,Gx)}const Vx=new Map;function Gx(s,e){let t=Xe[e];if(t===void 0){const n=Vx.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(s){return s.replace(Wx,Xx)}function Xx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function qx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function $x(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function jx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qx(t),c=Yx(t),h=Kx(t),u=$x(t),f=jx(t),d=kx(t),m=Bx(r),_=i.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(g=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==jn?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=ac(a),a=ru(a,t),a=au(a,t),o=ac(o),o=ru(o,t),o=au(o,t),a=ou(a),o=ou(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+g+a,y=M+p+o,R=iu(i,i.VERTEX_SHADER,x),S=iu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(b){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(S).trim();let X=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,S);else{const q=su(i,R,"vertex"),V=su(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(B=!1);B&&(b.diagnostics={runnable:X,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(R),i.deleteShader(S),L=new La(i,_),C=zx(i,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Lx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}let Jx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ev(e),t.set(e,n)),n}}class ev{constructor(e){this.id=Jx++,this.code=e,this.usedTimes=0}}function tv(s,e,t,n,i,r,a){const o=new Of,l=new Qx,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,N,D,F){const X=D.fog,B=F.geometry,q=v.isMeshStandardMaterial?D.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),he=V&&V.mapping===Qa?V.image.height:null,re=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ue=le!==void 0?le.length:0;let ke=0;B.morphAttributes.position!==void 0&&(ke=1),B.morphAttributes.normal!==void 0&&(ke=2),B.morphAttributes.color!==void 0&&(ke=3);let Y,ne,fe,oe;if(re){const Vt=An[re];Y=Vt.vertexShader,ne=Vt.fragmentShader}else Y=v.vertexShader,ne=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const be=s.getRenderTarget(),Oe=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,Te=!!v.map,J=!!v.matcap,T=!!V,H=!!v.aoMap,ie=!!v.lightMap,Q=!!v.bumpMap,ee=!!v.normalMap,Le=!!v.displacementMap,pe=!!v.emissiveMap,P=!!v.metalnessMap,w=!!v.roughnessMap,z=v.anisotropy>0,$=v.clearcoat>0,Z=v.dispersion>0,j=v.iridescence>0,Ae=v.sheen>0,ue=v.transmission>0,ge=z&&!!v.anisotropyMap,Ye=$&&!!v.clearcoatMap,ae=$&&!!v.clearcoatNormalMap,_e=$&&!!v.clearcoatRoughnessMap,He=j&&!!v.iridescenceMap,Ve=j&&!!v.iridescenceThicknessMap,ye=Ae&&!!v.sheenColorMap,Ce=Ae&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,Qe=!!v.specularColorMap,U=!!v.specularIntensityMap,Me=ue&&!!v.transmissionMap,K=ue&&!!v.thicknessMap,te=!!v.gradientMap,xe=!!v.alphaMap,Se=v.alphaTest>0,je=!!v.alphaHash,yt=!!v.extensions;let Ht=jn;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const et={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:ne,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ct,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:J,envMap:T,envMapMode:T&&V.mapping,envMapCubeUVHeight:he,aoMap:H,lightMap:ie,bumpMap:Q,normalMap:ee,displacementMap:d&&Le,emissiveMap:pe,normalMapObjectSpace:ee&&v.normalMapType===Yp,normalMapTangentSpace:ee&&v.normalMapType===eo,metalnessMap:P,roughnessMap:w,anisotropy:z,anisotropyMap:ge,clearcoat:$,clearcoatMap:Ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:Z,iridescence:j,iridescenceMap:He,iridescenceThicknessMap:Ve,sheen:Ae,sheenColorMap:ye,sheenRoughnessMap:Ce,specularMap:Ne,specularColorMap:Qe,specularIntensityMap:U,transmission:ue,transmissionMap:Me,thicknessMap:K,gradientMap:te,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:je,combine:v.combine,mapUv:Te&&g(v.map.channel),aoMapUv:H&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:Q&&g(v.bumpMap.channel),normalMapUv:ee&&g(v.normalMap.channel),displacementMapUv:Le&&g(v.displacementMap.channel),emissiveMapUv:pe&&g(v.emissiveMap.channel),metalnessMapUv:P&&g(v.metalnessMap.channel),roughnessMapUv:w&&g(v.roughnessMap.channel),anisotropyMapUv:ge&&g(v.anisotropyMap.channel),clearcoatMapUv:Ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(v.sheenRoughnessMap.channel),specularMapUv:Ne&&g(v.specularMap.channel),specularColorMapUv:Qe&&g(v.specularColorMap.channel),specularIntensityMapUv:U&&g(v.specularIntensityMap.channel),transmissionMapUv:Me&&g(v.transmissionMap.channel),thicknessMapUv:K&&g(v.thicknessMap.channel),alphaMapUv:xe&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Te||xe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ln,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function M(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(b,v),y(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const b=_[v.type];let N;if(b){const D=An[b];N=km.clone(D.uniforms)}else N=v.uniforms;return N}function S(v,b){let N;for(let D=0,F=h.length;D<F;D++){const X=h[D];if(X.cacheKey===b){N=X,++N.usedTimes;break}}return N===void 0&&(N=new Zx(s,b,v,r),h.push(N)),N}function E(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function L(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:R,acquireProgram:S,releaseProgram:E,releaseShaderCache:L,programs:h,dispose:C}}function nv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function iv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,_,g){const p=a(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||iv),n.length>1&&n.sort(f||cu),i.length>1&&i.sort(f||cu)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function sv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new hu,s.set(n,[a])):i>=r.length?(a=new hu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function rv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function av(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ov=0;function lv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cv(s){const e=new rv,t=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Fe,a=new Fe;function o(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,x=0,y=0,R=0,S=0,E=0;c.sort(lv);for(let C=0,v=c.length;C<v;C++){const b=c[C],N=b.color,D=b.intensity,F=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*D,u+=N.g*D,f+=N.b*D;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],D);E++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=b.shadow.matrix,M++}n.directional[d]=B,d++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(N).multiplyScalar(D),B.distance=F,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[_]=B;const q=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,q.updateMatrices(b),b.castShadow&&S++),n.spotLightMatrix[_]=q.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,y++}_++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(N).multiplyScalar(D),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=B,g++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const q=b.shadow,V=t.get(b);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=b.shadow.matrix,x++}n.point[m]=B,m++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(D),B.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=E,n.version=ov++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function uu(s){const e=new cv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new uu(s),e.set(i,[o])):r>=a.length?(o=new uu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class uv extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fv extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(s,e,t){let n=new Hc;const i=new se,r=new se,a=new nt,o=new uv({depthPacking:qp}),l=new fv,c={},h=t.maxTextureSize,u={[Jn]:Xt,[Xt]:Jn,[ln]:ln},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new xt;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let p=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),N=s.state;N.setBlending(xi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==Gn&&this.type===Gn,F=p===Gn&&this.type!==Gn;for(let X=0,B=S.length;X<B;X++){const q=S[X],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const he=V.getFrameExtents();if(i.multiply(he),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,V.mapSize.y=r.y)),V.map===null||D===!0||F===!0){const le=this.type!==Gn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new Mi(i.x,i.y,le),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let le=0;le<re;le++){const Ue=V.getViewport(le);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(a),V.updateMatrices(q,le),n=V.getFrustum(),y(E,L,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Gn&&M(V,L),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(C,v,b)};function M(S,E){const L=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,L,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,L,d,_,null)}function x(S,E,L,C){let v=null;const b=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)v=b;else if(v=L.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,D=E.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let X=F[D];X===void 0&&(X=v.clone(),F[D]=X,E.addEventListener("dispose",R)),v=X}if(v.visible=E.visible,v.wireframe=E.wireframe,C===Gn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=L}return v}function y(S,E,L,C,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Gn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const D=e.update(S),F=S.material;if(Array.isArray(F)){const X=D.groups;for(let B=0,q=X.length;B<q;B++){const V=X[B],he=F[V.materialIndex];if(he&&he.visible){const re=x(S,he,C,v);S.onBeforeShadow(s,S,E,L,D,re,V),s.renderBufferDirect(L,null,D,re,S,V),S.onAfterShadow(s,S,E,L,D,re,V)}}}else if(F.visible){const X=x(S,F,C,v);S.onBeforeShadow(s,S,E,L,D,X,null),s.renderBufferDirect(L,null,D,X,S,null),S.onAfterShadow(s,S,E,L,D,X,null)}}const N=S.children;for(let D=0,F=N.length;D<F;D++)y(N[D],E,L,C,v)}function R(S){S.target.removeEventListener("dispose",R);for(const L in c){const C=c[L],v=S.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const gv={[bl]:El,[wl]:Rl,[Tl]:Cl,[Rs]:Al,[El]:bl,[Rl]:wl,[Cl]:Tl,[Al]:Rs};function _v(s){function e(){let U=!1;const Me=new nt;let K=null;const te=new nt(0,0,0,0);return{setMask:function(xe){K!==xe&&!U&&(s.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){U=xe},setClear:function(xe,Se,je,yt,Ht){Ht===!0&&(xe*=yt,Se*=yt,je*=yt),Me.set(xe,Se,je,yt),te.equals(Me)===!1&&(s.clearColor(xe,Se,je,yt),te.copy(Me))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function t(){let U=!1,Me=!1,K=null,te=null,xe=null;return{setReversed:function(Se){Me=Se},setTest:function(Se){Se?fe(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(Se){K!==Se&&!U&&(s.depthMask(Se),K=Se)},setFunc:function(Se){if(Me&&(Se=gv[Se]),te!==Se){switch(Se){case bl:s.depthFunc(s.NEVER);break;case El:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Tl:s.depthFunc(s.EQUAL);break;case Al:s.depthFunc(s.GEQUAL);break;case Rl:s.depthFunc(s.GREATER);break;case Cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Se}},setLocked:function(Se){U=Se},setClear:function(Se){xe!==Se&&(s.clearDepth(Se),xe=Se)},reset:function(){U=!1,K=null,te=null,xe=null}}}function n(){let U=!1,Me=null,K=null,te=null,xe=null,Se=null,je=null,yt=null,Ht=null;return{setTest:function(et){U||(et?fe(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(et){Me!==et&&!U&&(s.stencilMask(et),Me=et)},setFunc:function(et,Vt,On){(K!==et||te!==Vt||xe!==On)&&(s.stencilFunc(et,Vt,On),K=et,te=Vt,xe=On)},setOp:function(et,Vt,On){(Se!==et||je!==Vt||yt!==On)&&(s.stencilOp(et,Vt,On),Se=et,je=Vt,yt=On)},setLocked:function(et){U=et},setClear:function(et){Ht!==et&&(s.clearStencil(et),Ht=et)},reset:function(){U=!1,Me=null,K=null,te=null,xe=null,Se=null,je=null,yt=null,Ht=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,g=null,p=null,M=null,x=null,y=null,R=null,S=new Ee(0,0,0),E=0,L=!1,C=null,v=null,b=null,N=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=B>=2);let V=null,he={};const re=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ue=new nt().fromArray(re),ke=new nt().fromArray(le);function Y(U,Me,K,te){const xe=new Uint8Array(4),Se=s.createTexture();s.bindTexture(U,Se),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<K;je++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Me+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return Se}const ne={};ne[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(Rs),ie(!1),Q(vh),fe(s.CULL_FACE),T(xi);function fe(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function oe(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function be(U,Me){return h[U]!==Me?(s.bindFramebuffer(U,Me),h[U]=Me,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Me),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Oe(U,Me){let K=f,te=!1;if(U){K=u.get(Me),K===void 0&&(K=[],u.set(Me,K));const xe=U.textures;if(K.length!==xe.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,je=xe.length;Se<je;Se++)K[Se]=s.COLOR_ATTACHMENT0+Se;K.length=xe.length,te=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,te=!0);te&&s.drawBuffers(K)}function Be(U){return d!==U?(s.useProgram(U),d=U,!0):!1}const Te={[Ui]:s.FUNC_ADD,[pp]:s.FUNC_SUBTRACT,[mp]:s.FUNC_REVERSE_SUBTRACT};Te[gp]=s.MIN,Te[_p]=s.MAX;const J={[xp]:s.ZERO,[vp]:s.ONE,[yp]:s.SRC_COLOR,[Ml]:s.SRC_ALPHA,[Tp]:s.SRC_ALPHA_SATURATE,[Ep]:s.DST_COLOR,[Sp]:s.DST_ALPHA,[Mp]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[wp]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[Ap]:s.CONSTANT_COLOR,[Rp]:s.ONE_MINUS_CONSTANT_COLOR,[Cp]:s.CONSTANT_ALPHA,[Pp]:s.ONE_MINUS_CONSTANT_ALPHA};function T(U,Me,K,te,xe,Se,je,yt,Ht,et){if(U===xi){m===!0&&(oe(s.BLEND),m=!1);return}if(m===!1&&(fe(s.BLEND),m=!0),U!==dp){if(U!==_||et!==L){if((g!==Ui||x!==Ui)&&(s.blendEquation(s.FUNC_ADD),g=Ui,x=Ui),et)switch(U){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yl:s.blendFunc(s.ONE,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,M=null,y=null,R=null,S.set(0,0,0),E=0,_=U,L=et}return}xe=xe||Me,Se=Se||K,je=je||te,(Me!==g||xe!==x)&&(s.blendEquationSeparate(Te[Me],Te[xe]),g=Me,x=xe),(K!==p||te!==M||Se!==y||je!==R)&&(s.blendFuncSeparate(J[K],J[te],J[Se],J[je]),p=K,M=te,y=Se,R=je),(yt.equals(S)===!1||Ht!==E)&&(s.blendColor(yt.r,yt.g,yt.b,Ht),S.copy(yt),E=Ht),_=U,L=!1}function H(U,Me){U.side===ln?oe(s.CULL_FACE):fe(s.CULL_FACE);let K=U.side===Xt;Me&&(K=!K),ie(K),U.blending===Es&&U.transparent===!1?T(xi):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){C!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),C=U)}function Q(U){U!==up?(fe(s.CULL_FACE),U!==v&&(U===vh?s.cullFace(s.BACK):U===fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),v=U}function ee(U){U!==b&&(X&&s.lineWidth(U),b=U)}function Le(U,Me,K){U?(fe(s.POLYGON_OFFSET_FILL),(N!==Me||D!==K)&&(s.polygonOffset(Me,K),N=Me,D=K)):oe(s.POLYGON_OFFSET_FILL)}function pe(U){U?fe(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function P(U){U===void 0&&(U=s.TEXTURE0+F-1),V!==U&&(s.activeTexture(U),V=U)}function w(U,Me,K){K===void 0&&(V===null?K=s.TEXTURE0+F-1:K=V);let te=he[K];te===void 0&&(te={type:void 0,texture:void 0},he[K]=te),(te.type!==U||te.texture!==Me)&&(V!==K&&(s.activeTexture(K),V=K),s.bindTexture(U,Me||ne[U]),te.type=U,te.texture=Me)}function z(){const U=he[V];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){Ue.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function ye(U){ke.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function Ce(U,Me){let K=l.get(Me);K===void 0&&(K=new WeakMap,l.set(Me,K));let te=K.get(U);te===void 0&&(te=s.getUniformBlockIndex(Me,U.name),K.set(U,te))}function Ne(U,Me){const te=l.get(Me).get(U);o.get(Me)!==te&&(s.uniformBlockBinding(Me,te,U.__bindingPointIndex),o.set(Me,te))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,he={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,g=null,p=null,M=null,x=null,y=null,R=null,S=new Ee(0,0,0),E=0,L=!1,C=null,v=null,b=null,N=null,D=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:fe,disable:oe,bindFramebuffer:be,drawBuffers:Oe,useProgram:Be,setBlending:T,setMaterial:H,setFlipSided:ie,setCullFace:Q,setLineWidth:ee,setPolygonOffset:Le,setScissorTest:pe,activeTexture:P,bindTexture:w,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:_e,texImage3D:He,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:ae,texSubImage2D:j,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ve,viewport:ye,reset:Qe}}function fu(s,e,t,n){const i=xv(n);switch(t){case Ef:return s*e;case Tf:return s*e;case Af:return s*e*2;case Nc:return s*e/i.components*i.byteLength;case Uc:return s*e/i.components*i.byteLength;case Rf:return s*e*2/i.components*i.byteLength;case Oc:return s*e*2/i.components*i.byteLength;case wf:return s*e*3/i.components*i.byteLength;case fn:return s*e*4/i.components*i.byteLength;case Fc:return s*e*4/i.components*i.byteLength;case wa:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(s,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(s,8)*Math.max(e,8)/2;case Ol:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Ql:case ec:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cf:case tc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(s){switch(s){case Qn:case Mf:return{byteLength:1,components:1};case vr:case Sf:case Ir:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Gi:case Lc:case Mn:return{byteLength:4,components:1};case bf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function vv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return d?new OffscreenCanvas(P,w):Sr("canvas")}function _(P,w,z){let $=1;const Z=pe(P);if((Z.width>z||Z.height>z)&&($=z/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor($*Z.width),Ae=Math.floor($*Z.height);u===void 0&&(u=m(j,Ae));const ue=w?m(j,Ae):u;return ue.width=j,ue.height=Ae,ue.getContext("2d").drawImage(P,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Ae+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Nt&&P.minFilter!==Wt}function p(P){s.generateMipmap(P)}function M(P,w,z,$,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),w===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),w===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),w===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),w===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),w===s.RGBA){const Ae=Z?Ba:Je.getTransfer($);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=Ae===ht?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(P,w){let z;return P?w===null||w===Gi||w===Is?z=s.DEPTH24_STENCIL8:w===Mn?z=s.DEPTH32F_STENCIL8:w===vr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===Is?z=s.DEPTH_COMPONENT24:w===Mn?z=s.DEPTH_COMPONENT32F:w===vr&&(z=s.DEPTH_COMPONENT16),z}function y(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nt&&P.minFilter!==Wt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&h.delete(w)}function S(P){const w=P.target;w.removeEventListener("dispose",S),C(w)}function E(P){const w=n.get(P);if(w.__webglInit===void 0)return;const z=P.source,$=f.get(z);if($){const Z=$[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(P),Object.keys($).length===0&&f.delete(z)}n.remove(P)}function L(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const z=P.source,$=f.get(z);delete $[w.__cacheKey],a.memory.textures--}function C(P){const w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let Z=0;Z<w.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)s.deleteFramebuffer(w.__webglFramebuffer[$]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=P.textures;for(let $=0,Z=z.length;$<Z;$++){const j=n.get(z[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(P)}let v=0;function b(){v=0}function N(){const P=v;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),v+=1,P}function D(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function F(P,w){const z=n.get(P);if(P.isVideoTexture&&ee(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(z,P,w);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+w)}function X(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){ke(z,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+w)}function B(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){ke(z,P,w);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+w)}function q(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Y(z,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+w)}const V={[Ls]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},he={[Nt]:s.NEAREST,[yf]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[Ea]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},re={[Kp]:s.NEVER,[em]:s.ALWAYS,[$p]:s.LESS,[If]:s.LEQUAL,[jp]:s.EQUAL,[Qp]:s.GEQUAL,[Zp]:s.GREATER,[Jp]:s.NOTEQUAL};function le(P,w){if(w.type===Mn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wt||w.magFilter===Ea||w.magFilter===or||w.magFilter===Yn||w.minFilter===Wt||w.minFilter===Ea||w.minFilter===or||w.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,V[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,V[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,V[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,he[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nt||w.minFilter!==or&&w.minFilter!==Yn||w.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const $=w.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const j=D(w);if(j!==P.__cacheKey){Z[j]===void 0&&(Z[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[j].usedTimes++;const Ae=Z[P.__cacheKey];Ae!==void 0&&(Z[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&L(w)),P.__cacheKey=j,P.__webglTexture=Z[j].texture}return z}function ke(P,w,z){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);const Z=Ue(P,w),j=w.source;t.bindTexture($,P.__webglTexture,s.TEXTURE0+z);const Ae=n.get(j);if(j.version!==Ae.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const ue=Je.getPrimaries(Je.workingColorSpace),ge=w.colorSpace===di?null:Je.getPrimaries(w.colorSpace),Ye=w.colorSpace===di||ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ae=_(w.image,!1,i.maxTextureSize);ae=Le(w,ae);const _e=r.convert(w.format,w.colorSpace),He=r.convert(w.type);let Ve=M(w.internalFormat,_e,He,w.colorSpace,w.isVideoTexture);le($,w);let ye;const Ce=w.mipmaps,Ne=w.isVideoTexture!==!0,Qe=Ae.__version===void 0||Z===!0,U=j.dataReady,Me=y(w,ae);if(w.isDepthTexture)Ve=x(w.format===Ds,w.type),Qe&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Ve,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ae.width,ae.height,0,_e,He,null));else if(w.isDataTexture)if(Ce.length>0){Ne&&Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,Ce[0].width,Ce[0].height);for(let K=0,te=Ce.length;K<te;K++)ye=Ce[K],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(s.TEXTURE_2D,K,Ve,ye.width,ye.height,0,_e,He,ye.data);w.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,ae.width,ae.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,He,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,ae.width,ae.height,0,_e,He,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ve,Ce[0].width,Ce[0].height,ae.depth);for(let K=0,te=Ce.length;K<te;K++)if(ye=Ce[K],w.format!==fn)if(_e!==null)if(Ne){if(U)if(w.layerUpdates.size>0){const xe=fu(ye.width,ye.height,w.format,w.type);for(const Se of w.layerUpdates){const je=ye.data.subarray(Se*xe/ye.data.BYTES_PER_ELEMENT,(Se+1)*xe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Se,ye.width,ye.height,1,_e,je,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ae.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Ve,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ae.depth,_e,He,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Ve,ye.width,ye.height,ae.depth,0,_e,He,ye.data)}else{Ne&&Qe&&t.texStorage2D(s.TEXTURE_2D,Me,Ve,Ce[0].width,Ce[0].height);for(let K=0,te=Ce.length;K<te;K++)ye=Ce[K],w.format!==fn?_e!==null?Ne?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(s.TEXTURE_2D,K,Ve,ye.width,ye.height,0,_e,He,ye.data)}else if(w.isDataArrayTexture)if(Ne){if(Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ve,ae.width,ae.height,ae.depth),U)if(w.layerUpdates.size>0){const K=fu(ae.width,ae.height,w.format,w.type);for(const te of w.layerUpdates){const xe=ae.data.subarray(te*K/ae.data.BYTES_PER_ELEMENT,(te+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,_e,He,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(w.isData3DTexture)Ne?(Qe&&t.texStorage3D(s.TEXTURE_3D,Me,Ve,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(w.isFramebufferTexture){if(Qe)if(Ne)t.texStorage2D(s.TEXTURE_2D,Me,Ve,ae.width,ae.height);else{let K=ae.width,te=ae.height;for(let xe=0;xe<Me;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ve,K,te,0,_e,He,null),K>>=1,te>>=1}}else if(Ce.length>0){if(Ne&&Qe){const K=pe(Ce[0]);t.texStorage2D(s.TEXTURE_2D,Me,Ve,K.width,K.height)}for(let K=0,te=Ce.length;K<te;K++)ye=Ce[K],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,_e,He,ye):t.texImage2D(s.TEXTURE_2D,K,Ve,_e,He,ye);w.generateMipmaps=!1}else if(Ne){if(Qe){const K=pe(ae);t.texStorage2D(s.TEXTURE_2D,Me,Ve,K.width,K.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,He,ae)}else t.texImage2D(s.TEXTURE_2D,0,Ve,_e,He,ae);g(w)&&p($),Ae.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Y(P,w,z){if(w.image.length!==6)return;const $=Ue(P,w),Z=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const j=n.get(Z);if(Z.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+z);const Ae=Je.getPrimaries(Je.workingColorSpace),ue=w.colorSpace===di?null:Je.getPrimaries(w.colorSpace),ge=w.colorSpace===di||Ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Ye&&!ae?_e[te]=_(w.image[te],!0,i.maxCubemapSize):_e[te]=ae?w.image[te].image:w.image[te],_e[te]=Le(w,_e[te]);const He=_e[0],Ve=r.convert(w.format,w.colorSpace),ye=r.convert(w.type),Ce=M(w.internalFormat,Ve,ye,w.colorSpace),Ne=w.isVideoTexture!==!0,Qe=j.__version===void 0||$===!0,U=Z.dataReady;let Me=y(w,He);le(s.TEXTURE_CUBE_MAP,w);let K;if(Ye){Ne&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ce,He.width,He.height);for(let te=0;te<6;te++){K=_e[te].mipmaps;for(let xe=0;xe<K.length;xe++){const Se=K[xe];w.format!==fn?Ve!==null?Ne?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Se.width,Se.height,Ve,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Se.width,Se.height,Ve,ye,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ce,Se.width,Se.height,0,Ve,ye,Se.data)}}}else{if(K=w.mipmaps,Ne&&Qe){K.length>0&&Me++;const te=pe(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ce,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ve,ye,_e[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,_e[te].width,_e[te].height,0,Ve,ye,_e[te].data);for(let xe=0;xe<K.length;xe++){const je=K[xe].image[te].image;Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,je.width,je.height,Ve,ye,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ce,je.width,je.height,0,Ve,ye,je.data)}}else{Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ve,ye,_e[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,Ve,ye,_e[te]);for(let xe=0;xe<K.length;xe++){const Se=K[xe];Ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ve,ye,Se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ce,Ve,ye,Se.image[te])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),j.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ne(P,w,z,$,Z,j){const Ae=r.convert(z.format,z.colorSpace),ue=r.convert(z.type),ge=M(z.internalFormat,Ae,ue,z.colorSpace);if(!n.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>j),_e=Math.max(1,w.height>>j);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ge,ae,_e,w.depth,0,Ae,ue,null):t.texImage2D(Z,j,ge,ae,_e,0,Ae,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Q(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,n.get(z).__webglTexture,0,ie(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,n.get(z).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,w,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const $=w.depthTexture,Z=$&&$.isDepthTexture?$.type:null,j=x(w.stencilBuffer,Z),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=ie(w);Q(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,j,w.width,w.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,P)}else{const $=w.textures;for(let Z=0;Z<$.length;Z++){const j=$[Z],Ae=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),ge=M(j.internalFormat,Ae,ue,j.colorSpace),Ye=ie(w);z&&Q(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ge,w.width,w.height):Q(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ge,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture,Z=ie(w);if(w.depthTexture.format===ws)Q(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(w.depthTexture.format===Ds)Q(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function be(P){const w=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=$}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(w.__webglFramebuffer,P)}else if(z){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=s.createRenderbuffer(),fe(w.__webglDepthbuffer[$],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),fe(w.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(P,w,z){const $=n.get(P);w!==void 0&&ne($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&be(P)}function Be(P){const w=P.texture,z=n.get(P),$=n.get(w);P.addEventListener("dispose",S);const Z=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[ue][ge]=s.createFramebuffer()}else z.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)z.__webglFramebuffer[ue]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ue=0,ge=Z.length;ue<ge;ue++){const Ye=n.get(Z[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Q(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ge=Z[ue];z.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Ye=r.convert(ge.format,ge.colorSpace),ae=r.convert(ge.type),_e=M(ge.internalFormat,Ye,ae,ge.colorSpace,P.isXRRenderTarget===!0),He=ie(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,_e,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),le(s.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ne(z.__webglFramebuffer[ue][ge],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ne(z.__webglFramebuffer[ue],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,ge=Z.length;ue<ge;ue++){const Ye=Z[ue],ae=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),le(s.TEXTURE_2D,Ye),ne(z.__webglFramebuffer,P,Ye,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),g(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),le(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ne(z.__webglFramebuffer[ge],P,w,s.COLOR_ATTACHMENT0,ue,ge);else ne(z.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,ue,0);g(w)&&p(ue),t.unbindTexture()}P.depthBuffer&&be(P)}function Te(P){const w=P.textures;for(let z=0,$=w.length;z<$;z++){const Z=w[z];if(g(Z)){const j=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ae=n.get(Z).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const J=[],T=[];function H(P){if(P.samples>0){if(Q(P)===!1){const w=P.textures,z=P.width,$=P.height;let Z=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(P),ue=w.length>1;if(ue)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Ye=n.get(w[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,z,$,0,0,z,$,Z,s.NEAREST),l===!0&&(J.length=0,T.length=0,J.push(s.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(j),T.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,T)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Ye=n.get(w[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ie(P){return Math.min(i.maxSamples,P.samples)}function Q(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ee(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Le(P,w){const z=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Ct&&z!==di&&(Je.getTransfer(z)===ht?($!==fn||Z!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Oe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Q}function yv(s,e){function t(n,i=di){let r;const a=Je.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return s.BYTE;if(n===Sf)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Ir)return s.HALF_FLOAT;if(n===Ef)return s.ALPHA;if(n===wf)return s.RGB;if(n===fn)return s.RGBA;if(n===Tf)return s.LUMINANCE;if(n===Af)return s.LUMINANCE_ALPHA;if(n===ws)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===Nc)return s.RED;if(n===Uc)return s.RED_INTEGER;if(n===Rf)return s.RG;if(n===Oc)return s.RG_INTEGER;if(n===Fc)return s.RGBA_INTEGER;if(n===wa||n===Ta||n===Aa||n===Ra)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Fl||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Fl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===$l||n===jl||n===Zl||n===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ca)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cf||n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Mv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:bv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends qi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=new wv,g=t.getContextAttributes();let p=null,M=null;const x=[],y=[],R=new se;let S=null;const E=new Gt;E.layers.enable(1),E.viewport=new nt;const L=new Gt;L.layers.enable(2),L.viewport=new nt;const C=[E,L],v=new Mv;v.layers.enable(1),v.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new qo,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new qo,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new qo,x[Y]=ne),ne.getHandSpace()};function D(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,x[Y].disconnect(ne))}b=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Mi(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,fe=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ds:ws,fe=g.stencil?Is:Gi);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Mi(f.textureWidth,f.textureHeight,{format:fn,type:Qn,depthTexture:new Wf(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let ne=0;ne<Y.removed.length;ne++){const fe=Y.removed[ne],oe=y.indexOf(fe);oe>=0&&(y[oe]=null,x[oe].disconnect(fe))}for(let ne=0;ne<Y.added.length;ne++){const fe=Y.added[ne];let oe=y.indexOf(fe);if(oe===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=y.length){y.push(fe),oe=Oe;break}else if(y[Oe]===null){y[Oe]=fe,oe=Oe;break}if(oe===-1)break}const be=x[oe];be&&be.connect(fe)}}const B=new I,q=new I;function V(Y,ne,fe){B.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const oe=B.distanceTo(q),be=ne.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,Be=be[14]/(be[10]-1),Te=be[14]/(be[10]+1),J=(be[9]+1)/be[5],T=(be[9]-1)/be[5],H=(be[8]-1)/be[0],ie=(Oe[8]+1)/Oe[0],Q=Be*H,ee=Be*ie,Le=oe/(-H+ie),pe=Le*-H;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pe),Y.translateZ(Le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const P=Be+Le,w=Te+Le,z=Q-pe,$=ee+(oe-pe),Z=J*Te/w*P,j=T*Te/w*P;Y.projectionMatrix.makePerspective(z,$,Z,j,P,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ne=Y.near,fe=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),v.near=L.near=E.near=ne,v.far=L.far=E.far=fe,(b!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far);const oe=Y.parent,be=v.cameras;he(v,oe);for(let Oe=0;Oe<be.length;Oe++)he(be[Oe],oe);be.length===2?V(v,E,L):v.projectionMatrix.copy(E.projectionMatrix),re(Y,v,oe)};function re(Y,ne,fe){fe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let le=null;function Ue(Y,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let oe=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Oe=0;Oe<fe.length;Oe++){const Be=fe[Oe];let Te=null;if(d!==null)Te=d.getViewport(Be);else{const T=u.getViewSubImage(f,Be);Te=T.viewport,Oe===0&&(e.setRenderTargetTextures(M,T.colorTexture,f.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(M))}let J=C[Oe];J===void 0&&(J=new Gt,J.layers.enable(Oe),J.viewport=new nt,C[Oe]=J),J.matrix.fromArray(Be.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Be.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Te.x,Te.y,Te.width,Te.height),Oe===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(J)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Oe=u.getDepthInformation(fe[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let fe=0;fe<x.length;fe++){const oe=y[fe],be=x[fe];oe!==null&&be!==void 0&&be.update(oe,ne,c||a)}le&&le(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const ke=new Gf;ke.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const Pi=new En,Av=new Fe;function Rv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Pi.copy(y),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Pi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",g));const R=x.program;n.updateUBOMapping(M,R);const S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){const x=u();M.__bindingPointIndex=x;const y=s.createBuffer(),R=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,E=y.length;S<E;S++){const L=Array.isArray(y[S])?y[S]:[y[S]];for(let C=0,v=L.length;C<v;C++){const b=L[C];if(d(b,S,C,R)===!0){const N=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let F=0;for(let X=0;X<D.length;X++){const B=D[X],q=_(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+F,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,y,R){const S=M.value,E=x+"_"+y;if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:R[E]=S.clone(),!0;{const L=R[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return R[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(M){const x=M.uniforms;let y=0;const R=16;for(let E=0,L=x.length;E<L;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,b=C.length;v<b;v++){const N=C[v],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,X=D.length;F<X;F++){const B=D[F],q=_(B),V=y%R,he=V%q.boundary,re=V+he;y+=he,re!==0&&R-re<q.storage&&(y+=R-re),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=q.storage}}}const S=y%R;return S>0&&(y+=R-S),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Pv{constructor(e={}){const{canvas:t=_m(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=jn,this.toneMappingExposure=1;const x=this;let y=!1,R=0,S=0,E=null,L=-1,C=null;const v=new nt,b=new nt;let N=null;const D=new Ee(0);let F=0,X=t.width,B=t.height,q=1,V=null,he=null;const re=new nt(0,0,X,B),le=new nt(0,0,X,B);let Ue=!1;const ke=new Hc;let Y=!1,ne=!1;const fe=new Fe,oe=new Fe,be=new I,Oe=new nt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function J(){return E===null?q:1}let T=n;function H(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),T===null){const O="webgl2";if(T=H(O,A),T===null)throw H(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,Q,ee,Le,pe,P,w,z,$,Z,j,Ae,ue,ge,Ye,ae,_e,He,Ve,ye,Ce,Ne,Qe,U;function Me(){ie=new U_(T),ie.init(),Ne=new yv(T,ie),Q=new C_(T,ie,e,Ne),ee=new _v(T),Q.reverseDepthBuffer&&ee.buffers.depth.setReversed(!0),Le=new k_(T),pe=new nv,P=new vv(T,ie,ee,pe,Q,Ne,Le),w=new L_(x),z=new N_(x),$=new Xm(T),Qe=new A_(T,$),Z=new O_(T,$,Le,Qe),j=new z_(T,Z,$,Le),Ve=new B_(T,Q,P),ae=new P_(pe),Ae=new tv(x,w,z,ie,Q,Qe,ae),ue=new Rv(x,pe),ge=new sv,Ye=new hv(ie),He=new T_(x,w,z,ee,j,f,l),_e=new mv(x,j,Q),U=new Cv(T,Le,Q,ee),ye=new R_(T,ie,Le),Ce=new F_(T,ie,Le),Le.programs=Ae.programs,x.capabilities=Q,x.extensions=ie,x.properties=pe,x.renderLists=ge,x.shadowMap=_e,x.state=ee,x.info=Le}Me();const K=new Tv(x,T);this.xr=K,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(X,B,!1))},this.getSize=function(A){return A.set(X,B)},this.setSize=function(A,O,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,B=O,t.width=Math.floor(A*q),t.height=Math.floor(O*q),G===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*q,B*q).floor()},this.setDrawingBufferSize=function(A,O,G){X=A,B=O,q=G,t.width=Math.floor(A*G),t.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,O,G,W){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,G,W),ee.viewport(v.copy(re).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,O,G,W){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,O,G,W),ee.scissor(b.copy(le).multiplyScalar(q).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){ee.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(A=!0,O=!0,G=!0){let W=0;if(A){let k=!1;if(E!==null){const ce=E.texture.format;k=ce===Fc||ce===Oc||ce===Uc}if(k){const ce=E.texture.type,ve=ce===Qn||ce===Gi||ce===vr||ce===Is||ce===Ic||ce===Dc,Re=He.getClearColor(),Pe=He.getClearAlpha(),Ge=Re.r,We=Re.g,Ie=Re.b;ve?(d[0]=Ge,d[1]=We,d[2]=Ie,d[3]=Pe,T.clearBufferuiv(T.COLOR,0,d)):(m[0]=Ge,m[1]=We,m[2]=Ie,m[3]=Pe,T.clearBufferiv(T.COLOR,0,m))}else W|=T.COLOR_BUFFER_BIT}O&&(W|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ge.dispose(),Ye.dispose(),pe.dispose(),w.dispose(),z.dispose(),j.dispose(),Qe.dispose(),U.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",ch),K.removeEventListener("sessionend",hh),Ei.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Le.autoReset,O=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,k=_e.type;Me(),Le.autoReset=A,_e.enabled=O,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=k}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const O=A.target;O.removeEventListener("dispose",je),yt(O)}function yt(A){Ht(A),pe.remove(A)}function Ht(A){const O=pe.get(A).programs;O!==void 0&&(O.forEach(function(G){Ae.releaseProgram(G)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,W,k,ce){O===null&&(O=Be);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Re=Kd(A,O,G,W,k);ee.setMaterial(W,ve);let Pe=G.index,Ge=1;if(W.wireframe===!0){if(Pe=Z.getWireframeAttribute(G),Pe===void 0)return;Ge=2}const We=G.drawRange,Ie=G.attributes.position;let at=We.start*Ge,ct=(We.start+We.count)*Ge;ce!==null&&(at=Math.max(at,ce.start*Ge),ct=Math.min(ct,(ce.start+ce.count)*Ge)),Pe!==null?(at=Math.max(at,0),ct=Math.min(ct,Pe.count)):Ie!=null&&(at=Math.max(at,0),ct=Math.min(ct,Ie.count));const gt=ct-at;if(gt<0||gt===1/0)return;Qe.setup(k,W,Re,G,Pe);let Yt,it=ye;if(Pe!==null&&(Yt=$.get(Pe),it=Ce,it.setIndex(Yt)),k.isMesh)W.wireframe===!0?(ee.setLineWidth(W.wireframeLinewidth*J()),it.setMode(T.LINES)):it.setMode(T.TRIANGLES);else if(k.isLine){let De=W.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*J()),k.isLineSegments?it.setMode(T.LINES):k.isLineLoop?it.setMode(T.LINE_LOOP):it.setMode(T.LINE_STRIP)}else k.isPoints?it.setMode(T.POINTS):k.isSprite&&it.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Rt=k._multiDrawCounts,st=k._multiDrawCount,mn=Pe?$.get(Pe).bytesPerElement:1,Ki=pe.get(W).currentProgram.getUniforms();for(let Kt=0;Kt<st;Kt++)Ki.setValue(T,"_gl_DrawID",Kt),it.render(De[Kt]/mn,Rt[Kt])}else if(k.isInstancedMesh)it.renderInstances(at,gt,k.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rt=Math.min(G.instanceCount,De);it.renderInstances(at,gt,Rt)}else it.render(at,gt)};function et(A,O,G){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,Br(A,O,G),A.side=Jn,A.needsUpdate=!0,Br(A,O,G),A.side=ln):Br(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),g=Ye.get(G),g.init(O),M.push(g),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Re=ce[ve];et(Re,G,k),W.add(Re)}else et(ce,G,k),W.add(ce)}),M.pop(),g=null,W},this.compileAsync=function(A,O,G=null){const W=this.compile(A,O,G);return new Promise(k=>{function ce(){if(W.forEach(function(ve){pe.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){k(A);return}setTimeout(ce,10)}ie.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Vt=null;function On(A){Vt&&Vt(A)}function ch(){Ei.stop()}function hh(){Ei.start()}const Ei=new Gf;Ei.setAnimationLoop(On),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Vt=A,K.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},K.addEventListener("sessionstart",ch),K.addEventListener("sessionend",hh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,E),g=Ye.get(A,M.length),g.init(O),M.push(g),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(oe),ne=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,ne),_=ge.get(A,p.length),_.init(),p.push(_),K.enabled===!0&&K.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&fo(ce,O,-1/0,x.sortObjects)}fo(A,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,he),Te=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Te&&He.addToRenderList(_,A),this.info.render.frame++,Y===!0&&ae.beginShadows();const G=g.state.shadowsArray;_e.render(G,A,O),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,k=_.transmissive;if(g.setupLights(),O.isArrayCamera){const ce=O.cameras;if(k.length>0)for(let ve=0,Re=ce.length;ve<Re;ve++){const Pe=ce[ve];fh(W,k,A,Pe)}Te&&He.render(A);for(let ve=0,Re=ce.length;ve<Re;ve++){const Pe=ce[ve];uh(_,A,Pe,Pe.viewport)}}else k.length>0&&fh(W,k,A,O),Te&&He.render(A),uh(_,A,O);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,O),Qe.resetDefaultState(),L=-1,C=null,M.pop(),M.length>0?(g=M[M.length-1],Y===!0&&ae.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fo(A,O,G,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){W&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const ve=j.update(A),Re=A.material;Re.visible&&_.push(A,ve,Re,G,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const ve=j.update(A),Re=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Re)){const Pe=ve.groups;for(let Ge=0,We=Pe.length;Ge<We;Ge++){const Ie=Pe[Ge],at=Re[Ie.materialIndex];at&&at.visible&&_.push(A,ve,at,G,Oe.z,Ie)}}else Re.visible&&_.push(A,ve,Re,G,Oe.z,null)}}const ce=A.children;for(let ve=0,Re=ce.length;ve<Re;ve++)fo(ce[ve],O,G,W)}function uh(A,O,G,W){const k=A.opaque,ce=A.transmissive,ve=A.transparent;g.setupLightsView(G),Y===!0&&ae.setGlobalState(x.clippingPlanes,G),W&&ee.viewport(v.copy(W)),k.length>0&&kr(k,O,G),ce.length>0&&kr(ce,O,G),ve.length>0&&kr(ve,O,G),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function fh(A,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new Mi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Ir:Qn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=g.state.transmissionRenderTarget[W.id],ve=W.viewport||v;ce.setSize(ve.z,ve.w);const Re=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Te&&He.render(G);const Pe=x.toneMapping;x.toneMapping=jn;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),Y===!0&&ae.setGlobalState(x.clippingPlanes,W),kr(A,G,W),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ie=0,at=O.length;Ie<at;Ie++){const ct=O[Ie],gt=ct.object,Yt=ct.geometry,it=ct.material,De=ct.group;if(it.side===ln&&gt.layers.test(W.layers)){const Rt=it.side;it.side=Xt,it.needsUpdate=!0,dh(gt,G,W,Yt,it,De),it.side=Rt,it.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}x.setRenderTarget(Re),x.setClearColor(D,F),Ge!==void 0&&(W.viewport=Ge),x.toneMapping=Pe}function kr(A,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ce=A.length;k<ce;k++){const ve=A[k],Re=ve.object,Pe=ve.geometry,Ge=W===null?ve.material:W,We=ve.group;Re.layers.test(G.layers)&&dh(Re,O,G,Pe,Ge,We)}}function dh(A,O,G,W,k,ce){A.onBeforeRender(x,O,G,W,k,ce),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,O,G,W,A,ce),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,x.renderBufferDirect(G,O,W,k,A,ce),k.side=Jn,k.needsUpdate=!0,x.renderBufferDirect(G,O,W,k,A,ce),k.side=ln):x.renderBufferDirect(G,O,W,k,A,ce),A.onAfterRender(x,O,G,W,k,ce)}function Br(A,O,G){O.isScene!==!0&&(O=Be);const W=pe.get(A),k=g.state.lights,ce=g.state.shadowsArray,ve=k.state.version,Re=Ae.getParameters(A,k.state,ce,O,G),Pe=Ae.getProgramCacheKey(Re);let Ge=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?z:w).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",je),Ge=new Map,W.programs=Ge);let We=Ge.get(Pe);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===ve)return mh(A,Re),We}else Re.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Re,x),We=Ae.acquireProgram(Re,Pe),Ge.set(Pe,We),W.uniforms=Re.uniforms;const Ie=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),mh(A,Re),W.needsLights=jd(A),W.lightsStateVersion=ve,W.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=We,W.uniformsList=null,We}function ph(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=La.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function mh(A,O){const G=pe.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Kd(A,O,G,W,k){O.isScene!==!0&&(O=Be),P.resetTextureUnits();const ce=O.fog,ve=W.isMeshStandardMaterial?O.environment:null,Re=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ct,Pe=(W.isMeshStandardMaterial?z:w).get(W.envMap||ve),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let gt=jn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Yt!==void 0?Yt.length:0,De=pe.get(W),Rt=g.state.lights;if(Y===!0&&(ne===!0||A!==C)){const nn=A===C&&W.id===L;ae.setState(W,A,nn)}let st=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Rt.state.version||De.outputColorSpace!==Re||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Pe||W.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==Ge||De.vertexTangents!==We||De.morphTargets!==Ie||De.morphNormals!==at||De.morphColors!==ct||De.toneMapping!==gt||De.morphTargetsCount!==it)&&(st=!0):(st=!0,De.__version=W.version);let mn=De.currentProgram;st===!0&&(mn=Br(W,O,k));let Ki=!1,Kt=!1,po=!1;const vt=mn.getUniforms(),ni=De.uniforms;if(ee.useProgram(mn.program)&&(Ki=!0,Kt=!0,po=!0),W.id!==L&&(L=W.id,Kt=!0),Ki||C!==A){Q.reverseDepthBuffer?(fe.copy(A.projectionMatrix),vm(fe),ym(fe),vt.setValue(T,"projectionMatrix",fe)):vt.setValue(T,"projectionMatrix",A.projectionMatrix),vt.setValue(T,"viewMatrix",A.matrixWorldInverse);const nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(T,be.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Kt=!0,po=!0)}if(k.isSkinnedMesh){vt.setOptional(T,k,"bindMatrix"),vt.setOptional(T,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),vt.setValue(T,"boneTexture",nn.boneTexture,P))}k.isBatchedMesh&&(vt.setOptional(T,k,"batchingTexture"),vt.setValue(T,"batchingTexture",k._matricesTexture,P),vt.setOptional(T,k,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",k._indirectTexture,P),vt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",k._colorsTexture,P));const mo=G.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Ve.update(k,G,mn),(Kt||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,vt.setValue(T,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=Pe,ni.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(ni.envMapIntensity.value=O.environmentIntensity),Kt&&(vt.setValue(T,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&$d(ni,po),ce&&W.fog===!0&&ue.refreshFogUniforms(ni,ce),ue.refreshMaterialUniforms(ni,W,q,B,g.state.transmissionRenderTarget[A.id]),La.upload(T,ph(De),ni,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(La.upload(T,ph(De),ni,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(T,"center",k.center),vt.setValue(T,"modelViewMatrix",k.modelViewMatrix),vt.setValue(T,"normalMatrix",k.normalMatrix),vt.setValue(T,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const nn=W.uniformsGroups;for(let go=0,Zd=nn.length;go<Zd;go++){const gh=nn[go];U.update(gh,mn),U.bind(gh,mn)}}return mn}function $d(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function jd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,G){pe.get(A.texture).__webglTexture=O,pe.get(A.depthTexture).__webglTexture=G;const W=pe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const G=pe.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){E=A,R=O,S=G;let W=!0,k=null,ce=!1,ve=!1;if(A){const Pe=pe.get(A);if(Pe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(T.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Pe.__hasExternalTextures)P.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&pe.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ve=!0);const We=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[O])?k=We[O][G]:k=We[O],ce=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[G]:k=We,v.copy(A.viewport),b.copy(A.scissor),N=A.scissorTest}else v.copy(re).multiplyScalar(q).floor(),b.copy(le).multiplyScalar(q).floor(),N=Ue;if(ee.bindFramebuffer(T.FRAMEBUFFER,k)&&W&&ee.drawBuffers(A,k),ee.viewport(v),ee.scissor(b),ee.setScissorTest(N),ce){const Pe=pe.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,G)}else if(ve){const Pe=pe.get(A.texture),Ge=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pe.__webglTexture,G||0,Ge)}L=-1},this.readRenderTargetPixels=function(A,O,G,W,k,ce,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){ee.bindFramebuffer(T.FRAMEBUFFER,Re);try{const Pe=A.texture,Ge=Pe.format,We=Pe.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k&&T.readPixels(O,G,W,k,Ne.convert(Ge),Ne.convert(We),ce)}finally{const Pe=E!==null?pe.get(E).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,W,k,ce,ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){const Pe=A.texture,Ge=Pe.format,We=Pe.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k){ee.bindFramebuffer(T.FRAMEBUFFER,Re);const Ie=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.bufferData(T.PIXEL_PACK_BUFFER,ce.byteLength,T.STREAM_READ),T.readPixels(O,G,W,k,Ne.convert(Ge),Ne.convert(We),0);const at=E!==null?pe.get(E).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,at);const ct=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await xm(T,ct,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ce),T.deleteBuffer(Ie),T.deleteSync(ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(Pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(A.image.width*W),ce=Math.floor(A.image.height*W),ve=O!==null?O.x:0,Re=O!==null?O.y:0;P.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,G,0,0,ve,Re,k,ce),ee.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,W=null,k=0){A.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let ce,ve,Re,Pe,Ge,We;G!==null?(ce=G.max.x-G.min.x,ve=G.max.y-G.min.y,Re=G.min.x,Pe=G.min.y):(ce=A.image.width,ve=A.image.height,Re=0,Pe=0),W!==null?(Ge=W.x,We=W.y):(Ge=0,We=0);const Ie=Ne.convert(O.format),at=Ne.convert(O.type);P.setTexture2D(O,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=T.getParameter(T.UNPACK_ROW_LENGTH),gt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Yt=T.getParameter(T.UNPACK_SKIP_PIXELS),it=T.getParameter(T.UNPACK_SKIP_ROWS),De=T.getParameter(T.UNPACK_SKIP_IMAGES),Rt=A.isCompressedTexture?A.mipmaps[k]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Rt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Rt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Ge,We,ce,ve,Ie,at,Rt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Ge,We,Rt.width,Rt.height,Ie,Rt.data):T.texSubImage2D(T.TEXTURE_2D,k,Ge,We,ce,ve,Ie,at,Rt),T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Yt),T.pixelStorei(T.UNPACK_SKIP_ROWS,it),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De),k===0&&O.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,W=null,k=0){A.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0);let ce,ve,Re,Pe,Ge,We,Ie,at,ct;const gt=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(ce=G.max.x-G.min.x,ve=G.max.y-G.min.y,Re=G.max.z-G.min.z,Pe=G.min.x,Ge=G.min.y,We=G.min.z):(ce=gt.width,ve=gt.height,Re=gt.depth,Pe=0,Ge=0,We=0),W!==null?(Ie=W.x,at=W.y,ct=W.z):(Ie=0,at=0,ct=0);const Yt=Ne.convert(O.format),it=Ne.convert(O.type);let De;if(O.isData3DTexture)P.setTexture3D(O,0),De=T.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),De=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const Rt=T.getParameter(T.UNPACK_ROW_LENGTH),st=T.getParameter(T.UNPACK_IMAGE_HEIGHT),mn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ki=T.getParameter(T.UNPACK_SKIP_ROWS),Kt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ge),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(De,k,Ie,at,ct,ce,ve,Re,Yt,it,gt.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(De,k,Ie,at,ct,ce,ve,Re,Yt,gt.data):T.texSubImage3D(De,k,Ie,at,ct,ce,ve,Re,Yt,it,gt),T.pixelStorei(T.UNPACK_ROW_LENGTH,Rt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,st),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ki),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Kt),k===0&&O.generateMipmaps&&T.generateMipmap(De),ee.unbindTexture()},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){R=0,S=0,E=null,ee.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===to?"display-p3":"srgb"}}class $f extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new I;class br{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class so extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const Zs=new I,hs=new I,us=new I,fs=new se,Js=new se,Zf=new Fe,aa=new I,Qs=new I,oa=new I,du=new se,Yo=new se,pu=new se;class Gc extends dt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jf(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new br(n,3,0,!1)),cs.setAttribute("uv",new br(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;la(aa.set(-.5,-.5,0),us,a,hs,i,r),la(Qs.set(.5,-.5,0),us,a,hs,i,r),la(oa.set(.5,.5,0),us,a,hs,i,r),du.set(0,0),Yo.set(1,0),pu.set(1,1);let o=e.ray.intersectTriangle(aa,Qs,oa,!1,Zs);if(o===null&&(la(Qs.set(-.5,.5,0),us,a,hs,i,r),Yo.set(0,1),o=e.ray.intersectTriangle(aa,oa,Qs,!1,Zs),o===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:cn.getInterpolation(Zs,aa,Qs,oa,du,Yo,pu,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(s,e,t,n,i,r){fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Js.x=r*fs.x-i*fs.y,Js.y=i*fs.x+r*fs.y):Js.copy(fs),s.copy(e),s.x+=Js.x,s.y+=Js.y,s.applyMatrix4(Zf)}const mu=new I,gu=new nt,_u=new nt,Lv=new I,xu=new Fe,ca=new I,Ko=new In,vu=new Fe,$o=new no;class Iv extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(i),e.ray.intersectsSphere(Ko)!==!1&&(vu.copy(i).invert(),$o.copy(e.ray).applyMatrix4(vu),!(this.boundingBox!==null&&$o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gu.fromBufferAttribute(i.attributes.skinIndex,e),_u.fromBufferAttribute(i.attributes.skinWeight,e),mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=_u.getComponent(r);if(a!==0){const o=gu.getComponent(r);xu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lv.copy(mu).applyMatrix4(xu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jf extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wc extends bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Nt,h=Nt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new Fe,Dv=new Fe;class Xc{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dv;yu.multiplyMatrices(o,t[r]),yu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wc(t,e,e,fn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Jf),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class oc extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Fe,Mu=new Fe,ha=[],Su=new Ln,Nv=new Fe,er=new $e,tr=new In;class ro extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Su.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),tr.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),Mu.multiplyMatrices(n,ds),er.matrixWorld=Mu,er.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){const l=ha[a];l.instanceId=r,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wc(new Float32Array(i*this.count),i,this.count,Nc,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qf extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new I,Wa=new I,bu=new Fe,nr=new no,ua=new In,jo=new I,Eu=new I;class qc extends dt{constructor(e=new xt,t=new Qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ga.fromBufferAttribute(t,i-1),Wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;bu.copy(i).invert(),nr.copy(e.ray).applyMatrix4(bu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=h.getX(_),M=h.getX(_+1),x=fa(this,e,nr,l,p,M);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=fa(this,e,nr,l,_,g);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=fa(this,e,nr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=fa(this,e,nr,l,m-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fa(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Ga.fromBufferAttribute(a,i),Wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ga,Wa,jo,Eu)>n)return;jo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jo);if(!(l<e.near||l>e.far))return{distance:l,point:Eu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const wu=new I,Tu=new I;class Uv extends qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wu.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wu.distanceTo(Tu);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends qc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ed extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new Fe,lc=new no,da=new In,pa=new I;class Fv extends dt{constructor(e=new xt,t=new ed){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Au.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);pa.fromBufferAttribute(u,g),Ru(pa,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)pa.fromBufferAttribute(u,m),Ru(pa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ru(s,e,t,n,i,r,a){const o=lc.distanceSqToPoint(s);if(o<t){const l=new I;lc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Vs extends bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new Fe;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(At(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yc extends Dn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kv extends Yc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ma=new I,Zo=new Kc,Jo=new Kc,Qo=new Kc;class Bv extends Dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ma.subVectors(i[0],i[1]).add(i[0]),c=ma);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ma.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Zo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),Jo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),Qo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Jo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Zo.calc(l),Jo.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function zv(s,e){const t=1-s;return t*t*e}function Hv(s,e){return 2*(1-s)*s*e}function Vv(s,e){return s*s*e}function ur(s,e,t,n){return zv(s,e)+Hv(s,t)+Vv(s,n)}function Gv(s,e){const t=1-s;return t*t*t*e}function Wv(s,e){const t=1-s;return 3*t*t*s*e}function Xv(s,e){return 3*(1-s)*s*s*e}function qv(s,e){return s*s*s*e}function fr(s,e,t,n,i){return Gv(s,e)+Wv(s,t)+Xv(s,n)+qv(s,i)}class td extends Dn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,i.x,r.x,a.x,o.x),fr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yv extends Dn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,i.x,r.x,a.x,o.x),fr(e,i.y,r.y,a.y,o.y),fr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nd extends Dn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kv extends Dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends Dn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,i.x,r.x,a.x),ur(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $v extends Dn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,i.x,r.x,a.x),ur(e,i.y,r.y,a.y),ur(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Cu(o,l.x,c.x,h.x,u.x),Cu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:kv,CatmullRomCurve3:Bv,CubicBezierCurve:td,CubicBezierCurve3:Yv,EllipseCurve:Yc,LineCurve:nd,LineCurve3:Kv,QuadraticBezierCurve:id,QuadraticBezierCurve3:$v,SplineCurve:sd});class jv extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new cc[i.type]().fromJSON(i))}return this}}class hc extends jv{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nd(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new id(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new td(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Yc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Os extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ao extends xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function M(){const y=new I,R=new I;let S=0;const E=(t-e)/n;for(let L=0;L<=r;L++){const C=[],v=L/r,b=v*(t-e)+e;for(let N=0;N<=i;N++){const D=N/i,F=D*l+o,X=Math.sin(F),B=Math.cos(F);R.x=b*X,R.y=-v*n+g,R.z=b*B,u.push(R.x,R.y,R.z),y.set(X,E,B).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-v),C.push(m++)}_.push(C)}for(let L=0;L<i;L++)for(let C=0;C<r;C++){const v=_[C][L],b=_[C+1][L],N=_[C+1][L+1],D=_[C][L+1];e>0&&(h.push(v,b,D),S+=3),t>0&&(h.push(b,N,D),S+=3)}c.addGroup(p,S,0),p+=S}function x(y){const R=m,S=new se,E=new I;let L=0;const C=y===!0?e:t,v=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;const b=m;for(let N=0;N<=i;N++){const F=N/i*l+o,X=Math.cos(F),B=Math.sin(F);E.x=C*B,E.y=g*v,E.z=C*X,u.push(E.x,E.y,E.z),f.push(0,v,0),S.x=X*.5+.5,S.y=B*.5*v+.5,d.push(S.x,S.y),m++}for(let N=0;N<i;N++){const D=R+N,F=b+N;y===!0?h.push(F,F+1,D):h.push(F+1,F,D),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends ao{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $c(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jc extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new I,y=new I,R=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],x),d(t[S+1],y),d(t[S+2],R),l(x,y,R,M)}function l(M,x,y,R){const S=R+1,E=[];for(let L=0;L<=S;L++){E[L]=[];const C=M.clone().lerp(y,L/S),v=x.clone().lerp(y,L/S),b=S-L;for(let N=0;N<=b;N++)N===0&&L===S?E[L][N]=C:E[L][N]=C.clone().lerp(v,N/b)}for(let L=0;L<S;L++)for(let C=0;C<2*(S-L)-1;C++){const v=Math.floor(C/2);C%2===0?(f(E[L][v+1]),f(E[L+1][v]),f(E[L][v])):(f(E[L][v+1]),f(E[L+1][v+1]),f(E[L+1][v]))}}function c(M){const x=new I;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const M=new I;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=g(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(y,1-R)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],y=a[M+2],R=a[M+4],S=Math.max(x,y,R),E=Math.min(x,y,R);S>.9&&E<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){const y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){const M=new I,x=new I,y=new I,R=new I,S=new se,E=new se,L=new se;for(let C=0,v=0;C<r.length;C+=9,v+=6){M.set(r[C+0],r[C+1],r[C+2]),x.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),S.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),R.copy(M).add(x).add(y).divideScalar(3);const b=g(R);_(S,v+0,M,b),_(E,v+2,x,b),_(L,v+4,y,b)}}function _(M,x,y,R){R<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=R/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.vertices,e.indices,e.radius,e.details)}}class rd extends hc{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hc().fromJSON(i))}return this}}const Zv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ad(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=ny(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Er(r,a,t,o,l,d,0),a}};function ad(s,e,t,n,i){let r,a;if(i===dy(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Pu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pu(r,s[r],s[r+1],a);return a&&oo(a,a.next)&&(Tr(a),a=a.next),a}function Wi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||mt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(s,e,t,n,i,r,a){if(!s)return;!a&&r&&oy(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Qv(s,n,i,r):Jv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Tr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=ey(Wi(s),e,t),Er(s,e,t,n,i,r,2)):a===2&&ty(s,e,t,n,i,r):Er(Wi(s),e,t,n,i,r,1);break}}}function Jv(s){const e=s.prev,t=s,n=s.next;if(mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&vs(i,o,r,l,a,c,m.x,m.y)&&mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qv(s,e,t,n){const i=s.prev,r=s,a=s.next;if(mt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=uc(d,m,e,t,n),M=uc(_,g,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&vs(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&vs(o,h,l,u,c,f,y.x,y.y)&&mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&vs(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&vs(o,h,l,u,c,f,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ey(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!oo(i,r)&&od(i,n,n.next,r)&&wr(i,r)&&wr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Tr(n),Tr(n.next),n=s=r),n=n.next}while(n!==s);return Wi(n)}function ty(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hy(a,o)){let l=ld(a,o);a=Wi(a,a.next),l=Wi(l,l.next),Er(a,e,t,n,i,r,0),Er(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ny(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=ad(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cy(c));for(i.sort(iy),r=0;r<i.length;r++)t=sy(i[r],t);return t}function iy(s,e){return s.x-e.x}function sy(s,e){const t=ry(s,e);if(!t)return e;const n=ld(t,s);return Wi(n,n.next),Wi(t,t.next)}function ry(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&vs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),wr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&ay(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function ay(s,e){return mt(s.prev,s,e.prev)<0&&mt(e.next,s,s.next)<0}function oy(s,e,t,n){let i=s;do i.z===0&&(i.z=uc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ly(i)}function ly(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function uc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function vs(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function hy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!uy(s,e)&&(wr(s,e)&&wr(e,s)&&fy(s,e)&&(mt(s.prev,s,e.prev)||mt(s,e.prev,e))||oo(s,e)&&mt(s.prev,s,s.next)>0&&mt(e.prev,e,e.next)>0)}function mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function oo(s,e){return s.x===e.x&&s.y===e.y}function od(s,e,t,n){const i=_a(mt(s,e,t)),r=_a(mt(s,e,n)),a=_a(mt(t,n,s)),o=_a(mt(t,n,e));return!!(i!==r&&a!==o||i===0&&ga(s,t,e)||r===0&&ga(s,n,e)||a===0&&ga(t,s,n)||o===0&&ga(t,e,n))}function ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _a(s){return s>0?1:s<0?-1:0}function uy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function wr(s,e){return mt(s.prev,s,s.next)<0?mt(s,e,s.next)>=0&&mt(s,s.prev,e)>=0:mt(s,e,s.prev)<0||mt(s,s.next,e)<0}function fy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ld(s,e){const t=new fc(s.i,s.x,s.y),n=new fc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(s,e,t,n){const i=new fc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dy(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class dr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return dr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Lu(e),Iu(n,e);let a=e.length;t.forEach(Lu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Iu(n,t[l]);const o=Zv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Lu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Iu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Zc extends xt{constructor(e=new rd([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:py;let x,y=!1,R,S,E,L;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,R=p.computeFrenetFrames(h,!1),S=new I,E=new I,L=new I),f||(g=0,d=0,m=0,_=0);const C=o.extractPoints(c);let v=C.shape;const b=C.holes;if(!dr.isClockWise(v)){v=v.reverse();for(let J=0,T=b.length;J<T;J++){const H=b[J];dr.isClockWise(H)&&(b[J]=H.reverse())}}const D=dr.triangulateShape(v,b),F=v;for(let J=0,T=b.length;J<T;J++){const H=b[J];v=v.concat(H)}function X(J,T,H){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(T,H)}const B=v.length,q=D.length;function V(J,T,H){let ie,Q,ee;const Le=J.x-T.x,pe=J.y-T.y,P=H.x-J.x,w=H.y-J.y,z=Le*Le+pe*pe,$=Le*w-pe*P;if(Math.abs($)>Number.EPSILON){const Z=Math.sqrt(z),j=Math.sqrt(P*P+w*w),Ae=T.x-pe/Z,ue=T.y+Le/Z,ge=H.x-w/j,Ye=H.y+P/j,ae=((ge-Ae)*w-(Ye-ue)*P)/(Le*w-pe*P);ie=Ae+Le*ae-J.x,Q=ue+pe*ae-J.y;const _e=ie*ie+Q*Q;if(_e<=2)return new se(ie,Q);ee=Math.sqrt(_e/2)}else{let Z=!1;Le>Number.EPSILON?P>Number.EPSILON&&(Z=!0):Le<-Number.EPSILON?P<-Number.EPSILON&&(Z=!0):Math.sign(pe)===Math.sign(w)&&(Z=!0),Z?(ie=-pe,Q=Le,ee=Math.sqrt(z)):(ie=Le,Q=pe,ee=Math.sqrt(z/2))}return new se(ie/ee,Q/ee)}const he=[];for(let J=0,T=F.length,H=T-1,ie=J+1;J<T;J++,H++,ie++)H===T&&(H=0),ie===T&&(ie=0),he[J]=V(F[J],F[H],F[ie]);const re=[];let le,Ue=he.concat();for(let J=0,T=b.length;J<T;J++){const H=b[J];le=[];for(let ie=0,Q=H.length,ee=Q-1,Le=ie+1;ie<Q;ie++,ee++,Le++)ee===Q&&(ee=0),Le===Q&&(Le=0),le[ie]=V(H[ie],H[ee],H[Le]);re.push(le),Ue=Ue.concat(le)}for(let J=0;J<g;J++){const T=J/g,H=d*Math.cos(T*Math.PI/2),ie=m*Math.sin(T*Math.PI/2)+_;for(let Q=0,ee=F.length;Q<ee;Q++){const Le=X(F[Q],he[Q],ie);oe(Le.x,Le.y,-H)}for(let Q=0,ee=b.length;Q<ee;Q++){const Le=b[Q];le=re[Q];for(let pe=0,P=Le.length;pe<P;pe++){const w=X(Le[pe],le[pe],ie);oe(w.x,w.y,-H)}}}const ke=m+_;for(let J=0;J<B;J++){const T=f?X(v[J],Ue[J],ke):v[J];y?(E.copy(R.normals[0]).multiplyScalar(T.x),S.copy(R.binormals[0]).multiplyScalar(T.y),L.copy(x[0]).add(E).add(S),oe(L.x,L.y,L.z)):oe(T.x,T.y,0)}for(let J=1;J<=h;J++)for(let T=0;T<B;T++){const H=f?X(v[T],Ue[T],ke):v[T];y?(E.copy(R.normals[J]).multiplyScalar(H.x),S.copy(R.binormals[J]).multiplyScalar(H.y),L.copy(x[J]).add(E).add(S),oe(L.x,L.y,L.z)):oe(H.x,H.y,u/h*J)}for(let J=g-1;J>=0;J--){const T=J/g,H=d*Math.cos(T*Math.PI/2),ie=m*Math.sin(T*Math.PI/2)+_;for(let Q=0,ee=F.length;Q<ee;Q++){const Le=X(F[Q],he[Q],ie);oe(Le.x,Le.y,u+H)}for(let Q=0,ee=b.length;Q<ee;Q++){const Le=b[Q];le=re[Q];for(let pe=0,P=Le.length;pe<P;pe++){const w=X(Le[pe],le[pe],ie);y?oe(w.x,w.y+x[h-1].y,x[h-1].x+H):oe(w.x,w.y,u+H)}}}Y(),ne();function Y(){const J=i.length/3;if(f){let T=0,H=B*T;for(let ie=0;ie<q;ie++){const Q=D[ie];be(Q[2]+H,Q[1]+H,Q[0]+H)}T=h+g*2,H=B*T;for(let ie=0;ie<q;ie++){const Q=D[ie];be(Q[0]+H,Q[1]+H,Q[2]+H)}}else{for(let T=0;T<q;T++){const H=D[T];be(H[2],H[1],H[0])}for(let T=0;T<q;T++){const H=D[T];be(H[0]+B*h,H[1]+B*h,H[2]+B*h)}}n.addGroup(J,i.length/3-J,0)}function ne(){const J=i.length/3;let T=0;fe(F,T),T+=F.length;for(let H=0,ie=b.length;H<ie;H++){const Q=b[H];fe(Q,T),T+=Q.length}n.addGroup(J,i.length/3-J,1)}function fe(J,T){let H=J.length;for(;--H>=0;){const ie=H;let Q=H-1;Q<0&&(Q=J.length-1);for(let ee=0,Le=h+g*2;ee<Le;ee++){const pe=B*ee,P=B*(ee+1),w=T+ie+pe,z=T+Q+pe,$=T+Q+P,Z=T+ie+P;Oe(w,z,$,Z)}}}function oe(J,T,H){l.push(J),l.push(T),l.push(H)}function be(J,T,H){Be(J),Be(T),Be(H);const ie=i.length/3,Q=M.generateTopUV(n,i,ie-3,ie-2,ie-1);Te(Q[0]),Te(Q[1]),Te(Q[2])}function Oe(J,T,H,ie){Be(J),Be(T),Be(ie),Be(T),Be(H),Be(ie);const Q=i.length/3,ee=M.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);Te(ee[0]),Te(ee[1]),Te(ee[3]),Te(ee[1]),Te(ee[2]),Te(ee[3])}function Be(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Te(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return my(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new cc[i.type]().fromJSON(i)),new Zc(n,e.options)}}const py={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(f,1-m),new se(_,1-p)]:[new se(o,1-l),new se(h,1-u),new se(d,1-m),new se(g,1-p)]}};function my(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class lo extends jc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lo(e.radius,e.detail)}}class Ar extends xt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new I,m=new se;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const M=p+g,x=M,y=M+n+1,R=M+n+2,S=M+1;o.push(x,y,S),o.push(y,R,S)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jc extends xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,M=(i+1)*d+m;a.push(_,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qc extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends Qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Du extends Qt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class pi extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function xa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _y(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function cd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xy extends Nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _s:r=e,o=2*t-n;break;case ka:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _s:a=e,l=2*n-t;break;case ka:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+M*a[c+R]+x*a[l+R]+y*a[u+R];return r}}class hd extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class vy extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&gy(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Mr;class Gs extends Un{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=yr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ud extends Un{}ud.prototype.ValueTypeName="color";class Fs extends Un{}Fs.prototype.ValueTypeName="number";class yy extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)zt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ks extends Un{InterpolantFactoryMethodLinear(e){return new yy(this.times,this.values,this.getValueSize(),e)}}ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Un{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=yr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Un{}Bs.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sy(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=_y(l);l=Nu(l,1,h),c=Nu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const g=[],p=[];cd(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){const x=f[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Fs(".morphTargetInfluence["+_+"]",g,p))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Bs,d+".position",f,"pos",i),n(ks,d+".quaternion",f,"rot",i),n(Bs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function My(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return ud;case"quaternion":return ks;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=My(s.type);if(s.times===void 0){const t=[],n=[];cd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const gi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class by{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Ey=new by;class Xs{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class wy extends Error{constructor(e,t){super(e),this.response=t}}class fd extends Xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let S=0,E=h.length;S<E;S++){const L=h[S];L.onProgress&&L.onProgress(R)}p.enqueue(y),M()}},x=>{p.error(x)})}}});return new Response(g)}else throw new wy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{gi.add(e,c);const h=Vn[e];delete Vn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Vn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends Xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Sr("img");function l(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class dd extends Xs{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new Ty(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class co extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ay extends co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const el=new Fe,Uu=new I,Ou=new I;class eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends eh{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cy extends co{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new Fe,ir=new I,tl=new I;class Py extends eh{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class Ly extends co{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iy extends eh{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Iy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dy extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,l),r.manager.itemStart(e)}}class Ny{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;zt.multiplyQuaternionsFlat(e,a,e,t,e,n),zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const th="\\[\\]\\.:\\/",Uy=new RegExp("["+th+"]","g"),nh="[^"+th+"]",Oy="[^"+th.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",nh),ky=/(WCOD+)?/.source.replace("WCOD",Oy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Hy=new RegExp("^"+Fy+ky+By+zy+"$"),Vy=["material","materials","bones","map"];class Gy{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){const t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Gy;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:gs,endingEnd:gs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case kc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Vp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Pf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:gs:i.endingStart=ka,t?i.endingEnd=this.zeroSlopeAtEnd?_s:gs:i.endingEnd=ka)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Xy=new Float32Array(1);class qy extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let m=h[d];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new Ny(tt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hd(new Float32Array(2),new Float32Array(2),1,Xy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Xa.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Wy(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Xa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);const Vi={rimDark:3111484,wallSide:13924916,blue:3711999,red:16730698,gem:11820287,gemGlow:14725375},Ia=new Map;function md(s,e={}){const t=s+JSON.stringify(e);if(Ia.has(t)&&!e.unique)return Ia.get(t);const n=new pi({color:s,...e.vc?{vertexColors:!0}:{},...e.map?{map:e.map}:{}});return e.emissive&&(n.emissive.setHex(e.emissive),n.emissiveIntensity=e.ei??1),e.opacity!==void 0&&(n.transparent=!0,n.opacity=e.opacity,n.depthWrite=!1),e.unique||Ia.set(t,n),n}const Yy=s=>[...Ia.values()].includes(s);function nl(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t);const a=new Vs(n);return a.colorSpace=pt,a}function en(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ho(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new xt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ku(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const m=ku(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function ku(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new St(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const _=h.getComponent(f,m);o.setComponent(f+u,m,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Bu(s,e){if(e===Wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===sc||e===Lf){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===sc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class gd extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new fM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=pr.extractUrlBase(e);a=pr.resolveURL(c,this.path)}else a=pr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_d){try{a[Ke.KHR_BINARY_GLTF]=new dM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new jy;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new pM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new mM;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new gM;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ky(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $y{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ct);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ly(h),c.distance=u;break;case"spot":c=new Cy(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class jy{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ct),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(i)}}class Zy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class eM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ct)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Ct),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class rM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Ct),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,pt)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class oM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class cM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class fM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const m of u){const _=new Fe,g=new I,p=new zt,M=new I(1,1,1),x=new ro(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(g,p,M));for(const y in l)if(y==="_COLOR_0"){const R=l[y];x.instanceColor=new oc(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const _d="glTF",sr=12,zu={JSON:1313821514,BIN:5130562};class dM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sr,r=new DataView(e,sr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===zu.JSON){const c=new Uint8Array(e,sr+a,o);this.content=n.decode(c)}else if(l===zu.BIN){const c=sr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=dc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=dc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=As[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(d)},o,c,Ct,f)})})}}class mM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gM{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class xd extends Nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,_=m-c,g=-2*d+3*f,p=d-f,M=1-g,x=p-f+u;for(let y=0;y!==o;y++){const R=a[_+y+o],S=a[_+y+l]*h,E=a[m+y+o],L=a[m+y]*h;r[y]=M*R+x*S+g*E+p*L}return r}}const _M=new zt;class xM extends xd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return _M.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hu={9728:Nt,9729:Wt,9984:yf,9985:Ea,9986:or,9987:Yn},Vu={33071:mi,33648:Fa,10497:Ls},il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:Mr,STEP:yr},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function Li(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function SM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bM(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=s.indices+":"+rl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+rl(s.targets[n]);return e}function rl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const wM=new Fe;class TM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new dd(this.options.manager):this.textureLoader=new Dy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Li(r,o,i),Wn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(pr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=il[i.type],o=As[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new St(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=il[i.type],c=As[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(M);x||(_=new c(o,p*d,i.count*d/h),x=new jf(_,d/h),t.cache.add(M,x)),g=new br(x,l,f%d/h,m)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),g=new St(_,l,m);if(i.sparse!==void 0){const p=il.SCALAR,M=As[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(a[1],x,i.sparse.count*p),S=new c(a[2],y,i.sparse.count*l);o!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,L=R.length;E<L;E++){const C=R[E];if(g.setX(C,S[E*l]),l>=2&&g.setY(C,S[E*l+1]),l>=3&&g.setZ(C,S[E*l+2]),l>=4&&g.setW(C,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hu[f.magFilter]||Wt,h.minFilter=Hu[f.minFilter]||Yn,h.wrapS=Vu[f.wrapS]||Ls,h.wrapT=Vu[f.wrapT]||Ls,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new bt(_);g.needsUpdate=!0,f(g)}),t.load(pr.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Wn(u,a),u.userData.mimeType=a.mimeType||EM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ed,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qf,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ct),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ln);const h=r.alphaMode||sl.OPAQUE;if(h===sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ft){const u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&a!==ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Wn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Li(i,u,r),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=bM(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gu(new xt,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?yM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],g=a[d];let p;const M=c[d];if(g.mode===an.TRIANGLES||g.mode===an.TRIANGLE_STRIP||g.mode===an.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Iv(_,M):new $e(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===an.TRIANGLE_STRIP?p.geometry=Bu(p.geometry,Lf):g.mode===an.TRIANGLE_FAN&&(p.geometry=Bu(p.geometry,sc));else if(g.mode===an.LINES)p=new Uv(_,M);else if(g.mode===an.LINE_STRIP)p=new qc(_,M);else if(g.mode===an.LINE_LOOP)p=new Ov(_,M);else if(g.mode===an.POINTS)p=new Fv(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&SM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wn(p,r),g.extensions&&Li(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Li(i,u[0],r),u[0];const f=new Bt;r.extensions&&Li(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Rn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Dr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Fe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let M=0,x=f.length;M<x;M++){const y=f[M],R=d[M],S=m[M],E=_[M],L=g[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const C=n._createAnimationTracks(y,R,S,E,L);if(C)for(let v=0;v<C.length;v++)p.push(C[v])}return new Xa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,wM)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Jf:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Wn(h,r),r.extensions&&Li(n,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&Li(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Qt||f instanceof bt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ci[r.path]){case ci.weights:c=Fs;break;case ci.rotation:c=ks;break;case ci.position:case ci.scale:c=Bs;break;default:switch(n.itemSize){case 1:c=Fs;break;case 2:case 3:default:c=Bs;break}break}const h=i.interpolation!==void 0?vM[i.interpolation]:Mr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ks?xM:xd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AM(s,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=pc(As[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=pc(As[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new In;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=dc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Wn(s,e),AM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?MM(s,e.targets,t):s})}const va={tip:"#c8ee5a",body:"#8fd24a",root:"#5e9e35"},mc={value:[new se(999,999),new se(999,999),new se(999,999)]},al={r:1.5,alpha:.35,edge:.3},vd={value:0};function RM(){const t=document.createElement("canvas");t.width=128,t.height=160;const n=t.getContext("2d"),i=()=>{n.beginPath(),n.moveTo(128*.5,160),n.bezierCurveTo(128*.3,160*.8,0,160*.7,0,160*.4),n.bezierCurveTo(0,160*.1,128*.22,0,128*.5,0),n.bezierCurveTo(128*.78,0,128,160*.1,128,160*.4),n.bezierCurveTo(128,160*.7,128*.7,160*.8,128*.5,160),n.closePath()};i();const r=n.createLinearGradient(0,160,0,0);r.addColorStop(0,va.root),r.addColorStop(.5,va.body),r.addColorStop(.86,va.body),r.addColorStop(1,va.tip),n.fillStyle=r,n.fill(),n.save(),i(),n.clip(),n.strokeStyle="rgba(255,255,220,0.32)",n.lineWidth=4,n.beginPath(),n.moveTo(128*.5,160*.94),n.lineTo(128*.5,160*.1),n.stroke(),n.strokeStyle="rgba(40,90,20,0.3)",n.lineWidth=3,n.stroke(),n.restore(),i(),n.strokeStyle="rgba(60,120,30,0.55)",n.lineWidth=3,n.stroke();const a=new Vs(t);return a.colorSpace=pt,a.anisotropy=4,a}function CM(s,e){const t=new ft({map:e,alphaTest:.5,side:ln,color:15269808}),n=new Jt(.13,.17),i=[];for(let a=0;a<24;a++){const o=new $e(n,t);o.visible=!1,s.add(o),i.push({m:o,life:0,vx:0,vy:0,vz:0,spin:0})}let r=0;return{burst(a,o,l=5){for(let c=0;c<l;c++){const h=i[r++%i.length],u=Math.random()*6.28;h.life=.6,h.vx=Math.cos(u)*1.1,h.vz=Math.sin(u)*1.1,h.vy=2+Math.random()*1.2,h.spin=(Math.random()-.5)*12,h.m.position.set(a+(Math.random()-.5)*.5,.5,o+(Math.random()-.5)*.5),h.m.rotation.set(-.6,u,0),h.m.visible=!0}},update(a){for(const o of i)if(!(o.life<=0)){if(o.life-=a,o.life<=0){o.m.visible=!1;continue}o.vy-=7*a,o.m.position.x+=o.vx*a,o.m.position.z+=o.vz*a,o.m.position.y=Math.max(.05,o.m.position.y+o.vy*a),o.m.rotation.z+=o.spin*a,o.m.scale.setScalar(Math.min(1,o.life*4))}},dispose(){n.dispose(),t.dispose()}}}const gc="./art/env/kaykit/",PM={bushL:["Bush_4_C_Color1","f"],bushM:["Bush_4_B_Color1","f"],bushW:["Bush_4_D_Color1","f"],tree1:["Tree_1_A_Color1","f"],tree1b:["Tree_1_B_Color1","f"],tree2:["Tree_2_A_Color1","f"],tree3:["Tree_3_A_Color1","f"],tree4:["Tree_4_A_Color1","f"],rockA:["Rock_1_A_Color1","f"],rockB:["Rock_2_B_Color1","f"],rockC:["Rock_3_C_Color1","f"],block:["barrier_1x1x1","p"],crate:["platform_wood_1x1x1","p"],rail:["railing_straight_double_yellow","p"],flagRed:["flag_A_red","p"],flagBlue:["flag_A_blue","p"]},_c={};let ol=null,mr=null,yd=null,Da=null,Md=null;const Wu=s=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("이미지 "+s)),n.src=s});async function LM(){const[s,e]=await Promise.all([Wu(gc+"forest_texture.png"),Wu(gc+"platformer_texture.png")]),t=document.createElement("canvas");t.width=1024,t.height=2048;const n=t.getContext("2d");n.drawImage(s,0,0,1024,1024),n.drawImage(e,0,1024,1024,1024);const i=new Vs(t);return i.flipY=!1,i.colorSpace=pt,i.anisotropy=4,i.userData.shared=!0,i}function IM(s,e,t){return[e,(t+1)/2]}function DM(s,e=16777215,t=.74){s.computeBoundingBox();const n=s.boundingBox.max.y||1,i=s.attributes.position,r=new Float32Array(i.count*3),a=new Ee(e);for(let o=0;o<i.count;o++){const l=Rn.smoothstep(i.getY(o)/n,0,.4),c=t+(1-t)*l;r[o*3]=c*a.r,r[o*3+1]=c*a.g,r[o*3+2]=c*a.b}return s.setAttribute("color",new St(r,3)),s}function Sd(s){s.computeBoundingBox();const e=s.boundingBox;return s.translate(-(e.min.x+e.max.x)/2,-e.min.y,-(e.min.z+e.max.z)/2)}async function NM(s,[e,t]){const n=await s.loadAsync(`${gc}${e}.gltf`);n.scene.updateMatrixWorld(!0);const i=[];n.scene.traverse(o=>{if(o.isMesh){const l=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);i.push(l)}});const r=i.length>1?ho(i):i[0],a=r.attributes.uv;for(let o=0;o<a.count;o++)a.setY(o,t==="f"?a.getY(o)/2:(a.getY(o)+1)/2);return r.userData.shared=!0,Sd(r)}async function UM(){if(ol)return;ol=await LM();const s=new gd;await Promise.all(Object.entries(PM).map(async([l,c])=>{_c[l]=await NM(s,c)}));const e=await s.loadAsync("./models/forest/cat.glb");let t;e.scene.traverse(l=>{l.isMesh&&!t&&(l.updateWorldMatrix(!0,!1),t=l.geometry.clone().applyMatrix4(l.matrixWorld))});for(const l of Object.keys(t.attributes))["position","normal"].includes(l)||t.deleteAttribute(l);const[n,i]=IM("p",.5,.5),r=t.attributes.position.count,a=new Float32Array(r*2);for(let l=0;l<r;l++)a[l*2]=n,a[l*2+1]=i;t.setAttribute("uv",new St(a,2)),t.userData.shared=!0,_c.cat=Sd(t);const o=new Wc(new Uint8Array([96,96,96,255,176,176,176,255,255,255,255,255]),3,1);o.minFilter=o.magFilter=Nt,o.needsUpdate=!0,o.userData.shared=!0,mr=new Du({map:ol,vertexColors:!0,gradientMap:o}),mr.userData.shared=!0,yd=Xu(mr),Da=new Du({vertexColors:!0,gradientMap:o}),Da.userData.shared=!0,Md=Xu(Da)}const ll=new Map;function Ft(s,{w:e,h:t,d:n,tint:i,lo:r,key:a}={}){const o=a||[s,e,t,n,i,r].join("|");if(!ll.has(o)){const l=_c[s].clone();l.computeBoundingBox();const c=l.boundingBox,h=e?e/(c.max.x-c.min.x):1;l.scale(h,t?t/(c.max.y-c.min.y):h,n?n/(c.max.z-c.min.z):h),DM(l,i,r),l.userData.shared=!0,ll.set(o,l)}return ll.get(o)}const OM=()=>mr,FM=()=>yd,kM=()=>Da,BM=()=>Md;function Xu(s){const e=s.clone();return e.transparent=!0,e.userData.shared=!0,e.onBeforeCompile=t=>{t.uniforms.uWind=vd,t.uniforms.uAlly=mc,t.uniforms.uAllyR={value:[al.r,al.alpha,al.edge]},t.fragmentShader=`uniform vec2 uAlly[3]; uniform vec3 uAllyR; varying vec2 vWxz;
`+t.fragmentShader.replace("#include <opaque_fragment>",`
      { float k = 1.0; for (int i = 0; i < 3; i++) k = min(k, mix(uAllyR.y, 1.0, smoothstep(uAllyR.x - uAllyR.z, uAllyR.x, distance(vWxz, uAlly[i])))); diffuseColor.a *= k; }
      #include <opaque_fragment>`),t.vertexShader=`uniform float uWind; varying vec2 vWxz;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      { float hgt = clamp(position.y / 0.7, 0.0, 1.0); vec4 wp = modelMatrix * vec4(transformed, 1.0);
        transformed.x += sin(uWind * 1.7 + wp.x * 1.3 + wp.z * 0.9) * 0.03 * hgt * hgt;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.7 + wp.z * 1.1) * 0.02 * hgt * hgt; vWxz = (modelMatrix * vec4(transformed, 1.0)).xz; }`)},e}function vn(s,e,t,{shadow:n=!0,material:i=mr}={}){if(!t.length)return null;const r=new ro(e,i,t.length),a=new Fe,o=new zt,l=new I(0,1,0);return t.forEach((c,h)=>{o.setFromAxisAngle(l,c.turn||0),a.compose(new I(c.x,c.y||0,c.z),o,new I(c.sx??1,c.sy??c.sx??1,c.sx??1)),r.setMatrixAt(h,a)}),r.castShadow=n,r.receiveShadow=!0,s.add(r),r}const rr=new I;function rn(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;rr.copy(e),rr[n]=0,rr.normalize();const c=.5*a/(a+o),h=1-rr.angleTo(s)/l;return Math.sign(rr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class zM extends ti{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new I,_=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=rn(m,l,"z","y",r,n),f[p+1]=1-rn(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),f[p+0]=1-rn(m,l,"z","y",r,n),f[p+1]=1-rn(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),f[p+0]=1-rn(m,l,"x","z",r,e),f[p+1]=rn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-rn(m,l,"x","z",r,e),f[p+1]=1-rn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-rn(m,l,"x","y",r,e),f[p+1]=1-rn(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),f[p+0]=rn(m,l,"x","y",r,e),f[p+1]=1-rn(m,l,"y","x",r,t);break}}}const vi=!(typeof location<"u"&&new URLSearchParams(location.search).get("env")==="r25"),bd={w:.96,h:1.06,bevel:.1,rim:.07},HM={stone:{rim:"#f3ecd6",top:"#d8cfb6",side:"#b5ab94",base:"#6f6753"},clay:{rim:"#efc190",top:"#d49c69",side:"#b87a4c",base:"#6a3d26"}},hi={root:"#1f5226",body:"#3f9e32",tip:"#86d444",count:45,span:1.13},xc=(s,e)=>{const t=s.attributes.position,n=s.attributes.normal,i=new Float32Array(t.count*3),r=new Ee;for(let a=0;a<t.count;a++)e(r,t.getX(a),t.getY(a),t.getZ(a),n?n.getY(a):0),i[a*3]=r.r,i[a*3+1]=r.g,i[a*3+2]=r.b;return s.setAttribute("color",new St(i,3)),s};function qu(s="stone"){const{w:e,h:t,bevel:n,rim:i}=bd,r=HM[s],a=new Ee(r.rim),o=new Ee(r.side),l=new Ee(r.base),c=new zM(e,t,e,3,n).translate(0,t/2,0).toNonIndexed();c.computeVertexNormals(),xc(c,(d,m,_,g,p)=>{const M=_/t;d.copy(o).lerp(l,1-Rn.smoothstep(M,.04,.34)),d.lerp(a,Rn.smoothstep(M,.86,.97)*.9+Rn.smoothstep(p,.2,.85)*.5)});const h=new ti(e-i*2,.02,e-i*2).translate(0,t+0,0).toNonIndexed();h.computeVertexNormals();const u=new Ee(r.top);xc(h,d=>d.copy(u));const f=ho([c,h]);return f.userData.shared=!0,f}function VM(s,e){const t=en(s*7919+13),n=hi.count,i=7,r=[],a=new Ee(hi.root),o=new Ee(hi.body),l=new Ee(hi.tip),c=hi.span/i,h=[];for(let f=0;f<i;f++)for(let d=0;d<i;d++)h.push([f,d]);h.sort(()=>t()-.5).length=n;for(const[f,d]of h){const m=(f+.5)*c-hi.span/2+(t()-.5)*c*.7,_=(d+.5)*c-hi.span/2+(t()-.5)*c*.7,g=Math.max(Math.abs(m),Math.abs(_))/(hi.span/2),p=e*(.86+t()*.14)*(1-.1*g*g),M=c*(.95+t()*.2),x=new $c(M,p,6,1,!0).translate(0,p/2,0).toNonIndexed();x.rotateZ((t()-.5)*.22),x.rotateX((t()-.5)*.22),x.rotateY(t()*6.28),x.translate(m,0,_),x.computeVertexNormals();const y=.9+t()*.2;xc(x,(R,S,E)=>{const L=Rn.clamp(E/p,0,1);R.copy(a).lerp(o,Rn.smoothstep(L,0,.45)).lerp(l,Rn.smoothstep(L,.55,1)).multiplyScalar(y)}),r.push(x)}const u=ho(r);return u.userData.shared=!0,u}const ps={};async function GM(){ps.block=Ft("block",{w:.96,h:.98,d:.96,tint:12892835,key:"wall-block"}),ps.crate=Ft("crate",{w:.96,h:.98,d:.96,key:"wall-crate"}),vi&&(ps.block=qu("stone"),ps.crate=qu("clay")),ps.cat=Ft("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"})}function WM(s,e,t){const n=s.length,i=s[0].length,r=(h,u)=>h>=0&&u>=0&&h<i&&u<n&&s[u][h]==="#",a=r(e-1,t)+r(e+1,t),o=r(e,t-1)+r(e,t+1),l=en(e*7919+Math.min(t,n-1-t)*104729)(),c=Math.floor(l*4)*Math.PI/2;return a+o===0?{kind:"cat",turn:0}:a+o===1&&l<.3?{kind:"cat",turn:0}:{kind:l<.62?"block":"crate",turn:c}}function XM(s,e){const{W:t,H:n,map:i}=e,r={block:[],crate:[],cat:[]},a=new Map;for(let d=0;d<n;d++)for(let m=0;m<t;m++)if(i[d][m]==="#"){const _=WM(i,m,d);r[_.kind].push([m,d]),a.set(d*t+m,_.turn)}const o=new Map,l=new Fe,c=new zt,h=new I(0,1,0);for(const[d,m]of Object.entries(r)){if(!m.length)continue;const _=new ro(ps[d],vi&&d!=="cat"?kM():OM(),m.length);_.castShadow=!0,_.receiveShadow=!0,s.add(_),m.forEach(([g,p],M)=>{const x=en(g*31+p*17+5),y=a.get(p*t+g),R=.97+x()*.06;o.set(p*t+g,{m:_,k:M,x:g+.5,z:p+.5,turn:y,sy:R,t:9,dir:0}),u(_,M,g+.5,p+.5,y,R,1,0,0)})}function u(d,m,_,g,p,M,x,y,R){c.setFromAxisAngle(h,p),l.compose(new I(_+y,0,g+R),c,new I(1+(1-x)*.5,M*x,1+(1-x)*.5)),d.setMatrixAt(m,l)}const f=new Set;return{hit(d,m,_=0,g=0){const p=o.get(Math.floor(m)*t+Math.floor(d));if(!p)return;const M=Math.hypot(_,g)||1;p.t=0,p.dx=_/M,p.dz=g/M,f.add(p)},update(d){for(const m of f){m.t+=d;const _=.12,g=Math.min(1,m.t/_),p=Math.sin(g*Math.PI)*(1-g*.3);u(m.m,m.k,m.x,m.z,m.turn,m.sy,1-.07*p,m.dx*.035*p,m.dz*.035*p),m.m.instanceMatrix.needsUpdate=!0,g>=1&&(f.delete(m),u(m.m,m.k,m.x,m.z,m.turn,m.sy,1,0,0),m.m.instanceMatrix.needsUpdate=!0)}},remove(d,m){const _=o.get(m*t+d);return _?(f.delete(_),o.delete(m*t+d),_.m.setMatrixAt(_.k,new Fe().makeScale(0,0,0)),_.m.instanceMatrix.needsUpdate=!0,!0):!1},peek:(d,m)=>o.get(m*t+d),kinds:()=>Object.entries(r).filter(([,d])=>d.length).map(([d])=>d),count:()=>r}}function qM(s){const{W:e,H:t,map:n}=s,i=new Bt,r=en(9090),a=[],o=[],l=Math.ceil(t/2);for(let c=0;c<l;c++)for(let h=0;h<e;h++){if(n[c][h]!==".")continue;const u=[[1,0],[-1,0],[0,1],[0,-1]].some(([x,y])=>n[c+y]?.[h+x]==="#"),f=h===0||h===e-1,d=r();if(!(u&&d<.06||f&&d<.08))continue;const m=(r()-.5)*.5,_=(r()-.5)*.5,g=r()*6.28,p=.8+r()*.4,M=r()<.5;for(const x of c===t-1-c?[c]:[c,t-1-c])(M?a:o).push({x:h+.5+m,z:x+.5+(x===c?_:-_),turn:g,sx:p})}return vn(i,Ft("rockB",{w:.34}),a,{shadow:!1}),vn(i,Ft("rockA",{w:.4}),o,{shadow:!1}),i}const Na=1.35,YM=1.4;function KM(s,e,t,n){const i=(o,l,c,h,u)=>{const f=new rd;return f.moveTo(o+u,l),f.lineTo(c-u,l),f.quadraticCurveTo(c,l,c,l+u),f.lineTo(c,h-u),f.quadraticCurveTo(c,h,c-u,h),f.lineTo(o+u,h),f.quadraticCurveTo(o,h,o,h-u),f.lineTo(o,l+u),f.quadraticCurveTo(o,l,o+u,l),f},r=i(-t,-t,s+t,e+t,n),a=i(0,0,s,e,.001);return r.holes.push(new hc(a.getPoints(1).reverse())),r}function $M(s){const{W:e,H:t}=s,n=.22,i=new Zc(KM(e,t,YM,.9),{depth:Na-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:10});i.rotateX(Math.PI/2),i.translate(0,Na-n,0),i.computeVertexNormals();const r=new Ee(vi?3111484:4892730),a=new Ee(vi?3877408:5913126),o=new Ee(vi?1839629:2890772),l=i.attributes.position,c=i.attributes.normal,h=new Float32Array(l.count*3),u=new Ee;for(let d=0;d<l.count;d++){const m=Rn.smoothstep(c.getY(d),.55,.9);u.copy(a).lerp(o,1-Rn.clamp(l.getY(d)/Na,0,1)).lerp(r,m),h.set([u.r,u.g,u.b],d*3)}i.setAttribute("color",new St(h,3));const f=new $e(i,new pi({vertexColors:!0}));return f.castShadow=!0,f.receiveShadow=!0,f}async function jM(){}function ZM(s){const{W:e,H:t}=s,n=new Bt,i=en(91),r=.55,a=Na-.12,o=[],l=[],c=[],h=[],u=[],f=[],d=[[],[],[],[],[]],m=M=>Math.abs(M-e/2)<1.6,_=(M,x,y)=>{const R=y%3,S={x:M+(i()-.5)*.25,y:a,z:x+(i()-.5)*.15,turn:i()*6.28,sx:.85+i()*.3};(R===0?o:R===1?c:l).push(S)};let g=0;for(let M=.5;M<e;M+=.9)m(M)||(_(M,-r,g++),_(M,t+r,g++));for(let M=.5;M<t;M+=.9)_(-r,M,g++),_(e+r,M,g++);for(const[M,x]of[[-r,-r],[e+r,-r],[-r,t+r],[e+r,t+r],[e/2-1.9,-r],[e/2+1.9,-r],[e/2-1.9,t+r],[e/2+1.9,t+r]])h.push({x:M,y:a,z:x,turn:0,sx:1.05});u.push({x:e/2-2.9,y:a,z:-r,turn:0},{x:e/2+2.9,y:a,z:-r,turn:0}),f.push({x:e/2-2.9,y:a,z:t+r,turn:0},{x:e/2+2.9,y:a,z:t+r,turn:0});const p=(M,x,y,R)=>{const S=Math.floor(i()*5),E=x>t?.38:1,L=((R?.5:.42)+i()*.14)*E;d[S].push({x:M+(i()-.5)*.4,y,z:x+(i()-.5)*.4,turn:i()*6.28,sx:L,sy:L*(.9+i()*.25)})};for(let M=-1.2;M<e+1.4;M+=1.3)for(const x of[-1.7,t+1.7])p(M,x,a-.1,!1);for(let M=-.2;M<t+1;M+=1.3)for(const x of[-1.7,e+1.7])p(x,M,a-.1,!1);for(let M=-3;M<e+3;M+=1.6)for(const x of[-3.2,t+3.2,-4.6,t+4.6])p(M,x,0,!0);for(let M=-2;M<t+2;M+=1.6)for(const x of[-3.2,e+3.2,-4.6,e+4.6])p(x,M,0,!0);return vn(n,Ft("rockA",{w:.45}),o.filter((M,x)=>x%3===0)),vn(n,Ft("rockB",{w:.4}),l.filter((M,x)=>x%3===0)),vn(n,Ft("bushM",{w:.7}),c),vn(n,Ft("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"}),h),vn(n,Ft("flagRed",{h:1.6}),u),vn(n,Ft("flagBlue",{h:1.6}),f),["tree1","tree1b","tree2","tree3","tree4"].forEach((M,x)=>vn(n,Ft(M,{tint:9414800}),d[x])),n}const JM=["map","alphaMap","aoMap","emissiveMap","lightMap","normalMap","bumpMap","roughnessMap","metalnessMap"];function QM(s){const e=new Set,t=n=>{!n||e.has(n)||(e.add(n),n.dispose())};s.traverse(n=>{n.geometry?.userData?.shared||t(n.geometry),t(n.skeleton),n.isInstancedMesh&&n.dispose();for(const i of[].concat(n.material||[]))if(!(Yy(i)||i.userData?.shared)){for(const r of JM)t(i[r]);t(i)}}),s.removeFromParent()}function eS(s,e,t,n,i){s.fillStyle=i,s.beginPath(),s.ellipse(e,t+.18*n,.5*n,.4*n,0,0,7),s.fill();for(const[r,a,o]of[[-.62,-.28,.2],[-.22,-.62,.22],[.22,-.62,.22],[.62,-.28,.2]])s.beginPath(),s.ellipse(e+r*n,t+a*n,o*n,o*1.2*n,0,0,7),s.fill()}function tS(s,e,t){const{W:n,H:i,map:r,mine:a}=e,o=a.x*t,l=a.z*t,c=3.3*t,h=en(5),u=Math.floor(i/2),f=[];for(let d=2.4;d<u-3.4;d+=1.15)f.push([n/2,d],[n/2,i-d]);for(const[d,m]of f){if(r[Math.floor(m)]?.[Math.floor(d)]!==".")continue;const _=(d+(h()-.5)*.3)*t,g=m*t,p=t*(.34+h()*.08),M=p*.76;s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.ellipse(_+2,g+4,p,M,0,0,7),s.fill(),s.fillStyle="#a39e84",s.beginPath(),s.ellipse(_,g,p,M,0,0,7),s.fill(),s.fillStyle="#c9c4a8",s.beginPath(),s.ellipse(_-p*.1,g-M*.18,p*.8,M*.7,0,0,7),s.fill()}s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.arc(o+3,l+6,c+4,0,7),s.fill(),s.fillStyle="#8e8a70",s.beginPath(),s.arc(o,l,c,0,7),s.fill(),s.fillStyle="#b3ae92",s.beginPath(),s.arc(o,l,c-.16*t,0,7),s.fill();for(let d=0;d<24;d++){const m=d/24*6.2832;s.save(),s.translate(o+Math.cos(m)*(c-.38*t),l+Math.sin(m)*(c-.38*t)),s.rotate(m),s.fillStyle=d%2?"#aaa58b":"#d8d3b8",s.fillRect(-.2*t,-.1*t,.4*t,.2*t),s.restore()}s.fillStyle="#c4bfa3",s.beginPath(),s.arc(o,l,c*.74,0,7),s.fill(),eS(s,o,l+.2*t,2.1*t,"rgba(120,114,92,0.55)")}const ui={a:"#43864f",b:"#478a53",seam:"rgba(60,122,74,0.9)",mine:"#3c7c49",water:"#4cc0e6",rim:"#e8f7ff",leaf:"#7fbf6e",chip:"#d8e6c2"};function nS(s){const{W:e,H:t,map:n}=s,i=48,r=document.createElement("canvas");r.width=e*i,r.height=t*i;const a=r.getContext("2d");for(let d=0;d<t;d++)for(let m=0;m<e;m++)a.fillStyle=m+d&1?ui.b:ui.a,a.fillRect(m*i,d*i,i,i);if(vi){const d=e*i/2,m=t*i/2,_=Math.hypot(e,t)*i/2;a.fillStyle="rgba(6,24,14,1)";for(const[g,p]of[[.9,.34],[.72,.22],[.52,.1]])a.globalAlpha=p,a.beginPath(),a.rect(0,0,e*i,t*i),a.arc(d,m,_*g*.62,0,7,!0),a.fill("evenodd");a.globalAlpha=1}a.fillStyle=ui.mine,a.beginPath(),a.arc(s.mine.x*i,s.mine.z*i,2.5*i,0,7),a.fill(),tS(a,s,i);const o=new Set;for(let d=0;d<t;d++)for(let m=0;m<e;m++)n[d][m]==="W"&&o.add(m+","+d);const l=(d,m,_,g,p,M)=>{a.fillStyle=p,a.beginPath(),a.roundRect(d,m,_,g,M),a.fill()};for(const d of o){const[m,_]=d.split(",").map(Number);l(m*i-.5,_*i-.5,i+1,i+1,ui.rim,0)}for(const d of o){const[m,_]=d.split(",").map(Number),g=.12*i,p=o.has(m-1+","+_),M=o.has(m+1+","+_),x=o.has(m+","+(_-1)),y=o.has(m+","+(_+1));l(m*i+(p?0:g),_*i+(x?0:g),i-(p?0:g)-(M?0:g),i-(x?0:g)-(y?0:g),ui.water,0)}a.strokeStyle=ui.seam,a.lineWidth=1,a.beginPath();for(let d=1;d<e;d++)for(let m=0;m<t;m++)!o.has(d+","+m)&&!o.has(d-1+","+m)&&(a.moveTo(d*i+.5,m*i),a.lineTo(d*i+.5,(m+1)*i));for(let d=1;d<t;d++)for(let m=0;m<e;m++)!o.has(m+","+d)&&!o.has(m+","+(d-1))&&(a.moveTo(m*i,d*i+.5),a.lineTo((m+1)*i,d*i+.5));a.stroke();for(const d of["blue","red"])for(const m of s.spawns[d]){const _=m.x*i,g=m.z*i,p=i*.5;a.fillStyle="rgba(30,80,45,0.55)",a.beginPath(),a.ellipse(_,g,p,p*.92,0,0,7),a.fill(),a.strokeStyle="rgba(210,240,200,0.5)",a.lineWidth=2,a.beginPath(),a.ellipse(_,g+1.5,p,p*.92,0,.15*Math.PI,.85*Math.PI),a.stroke()}const c=en(2501),h=[],u=(d,m)=>n[m]&&n[m][d]===".";for(let d=0;d<400&&h.length<5;d++){const m=1+Math.floor(c()*(e-2)),_=1+Math.floor(c()*(Math.floor(t/2)-2));u(m,_)&&!h.some(g=>Math.abs(g[0]-m)+Math.abs(g[1]-_)<4)&&h.push([m,_,h.length<3?"leaf":"chip"])}for(const[d,m,_]of[...h,...h.map(([g,p,M])=>[g,t-1-p,M])]){const g=(d+.5)*i,p=(m+.5)*i;if(_==="leaf"){a.fillStyle=ui.leaf;for(const[M,x]of[[-.6,.18],[.5,.2],[2.1,.16]])a.save(),a.translate(g+Math.cos(M)*x*i,p+Math.sin(M)*x*i),a.rotate(M),a.beginPath(),a.ellipse(0,0,i*.14,i*.06,0,0,7),a.fill(),a.restore()}else{a.fillStyle=ui.chip;for(const[M,x,y]of[[-.15,.05,.12],[.1,-.08,.09],[.16,.12,.07]])a.beginPath(),a.ellipse(g+M*i,p+x*i,i*y,i*y*.75,.3,0,7),a.fill()}}const f=new Vs(r);return f.colorSpace=pt,f.anisotropy=8,f}function iS(s,e){const{W:t,H:n,map:i}=e,r=new Bt;s.add(r);const a=new $e(new Jt(t,n),new pi({map:nS(e)}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),a.receiveShadow=!0,r.add(a);const o=new $e(new Jt(t+60,n+60),new pi({color:Vi.rimDark}));o.rotation.x=-Math.PI/2,o.position.set(t/2,-.02,n/2),o.receiveShadow=!0,r.add(o),r.add($M(e)),r.add(ZM(e)),r.add(qM(e));const l=XM(r,e);{const S=[];for(let E=0;E<n;E++)for(let L=0;L<t;L++)i[E][L]==="N"&&S.push({x:L+.5,z:E+.5});vn(r,Ft("rail",{w:.98,h:.5,d:.2,key:"fence-rail"}),S)}const c=[],h=RM(),u=vi?BM():FM(),f=CM(r,h),d=vi?[0,1,2].map(S=>VM(S+1,bd.h*.89)):[0,1,2].map(S=>{const E=Ft(S===1?"bushW":"bushL",{w:S===1?1.5:1.22,h:.82,key:"bush-big"+S}),L=Ft("bushM",{w:.62,h:.5,key:"bush-small"+S}).clone();L.translate(S===0?.26:S===1?-.3:.12,0,S===0?.22:S===1?.25:-.3);const C=ho([E.clone(),L]);return C.userData.shared=!0,C});for(let S=0;S<n;S++)for(let E=0;E<t;E++)if(i[S][E]==="B"){const L=new $e(d[(E*3+S*5)%3],u);L.position.set(E+.5,0,S+.5),L.rotation.y=en(E*17+S*5)()*6.28,L.castShadow=!0,L.receiveShadow=!0,r.add(L),c.push({m:L,i:E,j:S,phase:en(E*31+S)()*6.28,shake:0})}{const S=[];for(let v=0;v<n;v++)for(let b=0;b<t;b++)(i[v][b]==="#"||i[v][b]==="B")&&S.push({x:b+.5,y:.012,z:v+.58});const E=new Jt(1.7,1.7).rotateX(-Math.PI/2),L=new ft({map:nl("rgba(10,36,22,0.72)","rgba(14,48,28,0)",128),transparent:!0,depthWrite:!1}),C=vn(r,E,S,{shadow:!1,material:L});C&&(C.receiveShadow=!1,C.renderOrder=1)}const m=new $e(new Os(.9,32),new ft({map:nl("rgba(30,14,48,1)","rgba(30,14,48,0)",128),transparent:!0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(e.mine.x,.03,e.mine.z),r.add(m);const _=new $e(new Jt(3.4,3.4),new ft({map:nl("rgba(200,120,255,0.8)","rgba(200,120,255,0)"),transparent:!0,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(e.mine.x,.05,e.mine.z),r.add(_);const g=new $e(new Jc(.92,.13,10,32),new pi({color:10123952}));g.rotation.x=-Math.PI/2,g.position.set(e.mine.x,.09,e.mine.z),g.castShadow=!0,g.receiveShadow=!0,r.add(g);const p=en(3);for(let S=0;S<5;S++){const E=S/5*6.28+.4,L=new $e(new lo(.16+p()*.08,0),md(12880639,{emissive:8006352,ei:.5}));L.scale.y=1.7,L.position.set(e.mine.x+Math.cos(E)*1.05,.2,e.mine.z+Math.sin(E)*1.05),L.rotation.y=E,L.castShadow=!0,r.add(L)}let M=0;const x=new pi({color:11901546}),y=new pi({color:4160042});function R(S,E,L){const C=(v,b,N,D,F=.05)=>{const X=new $e(v,b);return X.position.set(N,F,D),X.receiveShadow=!0,r.add(X),X};if(L==="B"){const v=c.find(b=>b.i===S&&b.j===E);if(!v||v.gone)return;v.gone=!0,r.remove(v.m),f.burst(S+.5,E+.5,10),C(new ao(.3,.34,.04,14),y,S+.5,E+.5,.02)}else{if(!l.remove(S,E))return;for(let v=0;v<5;v++)C(new ti(.14+v%3*.05,.1,.12),x,S+.2+v*37%60/100,E+.2+v*53%60/100);f.burst(S+.5,E+.5,6)}}return{root:r,glow:_,walls:l,destroy:R,hitWall(S){l.hit(S.x,S.z,S.vx,S.vz)},dispose(){QM(r),f.dispose(),h.dispose()},update(S,E,L,C=[]){const v=Math.min(.1,Math.max(0,S-M));M=S,f.update(v),l.update(v),_.material.opacity=.75+Math.sin(S*3)*.2,vd.value=S;let b=0;for(const D of E)D.alive&&D.team===L&&b<3&&i[Math.floor(D.z)]?.[Math.floor(D.x)]==="B"&&mc.value[b++].set(D.x,D.z);for(;b<3;b++)mc.value[b].set(999,999);const N=new Set;for(const D of C)D.dead||N.add(Math.floor(D.z)*t+Math.floor(D.x));for(const D of c){if(D.gone)continue;let F=!1;for(const q of E)q.alive&&Math.floor(q.x)===D.i&&Math.floor(q.z)===D.j&&(F=!0);const X=N.has(D.j*t+D.i);X&&!D.hit&&(D.shake=1,f.burst(D.i+.5,D.j+.5,4+(D.i+D.j)%3)),D.hit=X,F?D.shake=Math.min(1,D.shake+.2):D.shake*=.92;const B=Math.sin(S*9+D.phase)*.05*D.shake;D.m.rotation.set(B,0,B*.7),D.m.scale.setScalar(1+Math.sin(S*11+D.phase)*.03*D.shake)}}}}async function sS(s,e,{base:t="./art/",prefix:n="b3"}={}){const i={},r=new Map,a=o=>(r.has(o)||r.set(o,e(o)),r.get(o));for(const[o,l]of Object.entries(s)){if(l.atlas){const f=(_,g,p,M)=>{const x=y=>g.dirs.indexOf(l.src?l.src[y]:y);return Array.from({length:l.dirs},(y,R)=>Array.from({length:p},(S,E)=>{const L=_.clone();return L.repeat.set(1/p,1/M),L.offset.set(E/p,1-(x(R)+1)/M),L.needsUpdate=!0,L}))},d=await a(`${t}${n}_${o}.webp`),m=l.shAtlas&&await a(`${t}${n}sh_${l.shn}.webp`);i[o]={...l,dirs:f(d,l.atlas,l.n,l.atlas.rows),shDirs:m&&f(m,l.shAtlas,l.n,l.shAtlas.rows)};continue}const c={},h=f=>c[f]||=Promise.all(Array.from({length:l.n},(d,m)=>a(`${t}${n}_${o}_d${f}_f${m}.png`))),u=f=>l.src?l.src[f]:f;i[o]={...l,dirs:await Promise.all(Array.from({length:l.dirs},(f,d)=>h(u(d)))),shDirs:l.sh&&await Promise.all(Array.from({length:l.dirs},(f,d)=>Promise.all(Array.from({length:l.n},(m,_)=>a(`${t}${n}sh_${l.shn}_d${u(d)}_f${_}.png`)))))}}return i}function rS(s){return s.userData.f={value:0},s.onBeforeCompile=e=>{e.uniforms.uFlash=s.userData.f,e.fragmentShader=`uniform float uFlash;
`+e.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uFlash);
#include <dithering_fragment>`)},s}const vc={flash:.12,flashPeak:.85,shadowAlpha:.34},Yi=55,Ed=Yi*Math.PI/180,wd=Math.sin(Ed),uo=Math.cos(Ed),yc=Math.PI/180,Ur=.91,Yu=vc.shadowAlpha,Ku=.35,aS=4,oS=new Jt(1,1),lS=new Jt(1,1).rotateX(-Math.PI/2),cS=new I(0,uo,-wd),hS=new I(0,wd,uo);let Xn=null;const uS=new dd,fS=s=>new Promise((e,t)=>uS.load(s,n=>{n.colorSpace=pt,n.generateMipmaps=!1,n.minFilter=n.magFilter=Wt,e(n)},void 0,t));let Td=null;const dS=s=>{Td=s},ih=()=>Math.cos((Td??(Xn&&Xn.dealer?Xn.dealer.elev:Yi))*yc)/uo,pS=s=>s.height*Ur*ih()+.2/uo;async function mS(){const s=await(await fetch("./art/bake3d.json")).json();Xn=await sS(s,fS,{base:"./art/",prefix:"b3"})}const gS=(s,e)=>s.speed*(s.h/s.bodyPx)*s.cycle*e,_S=(s,e)=>{const t=s.dirs.length,n=Math.atan2(Math.cos(e),Math.sin(e));return(Math.round(n/(2*Math.PI/t))%t+t)%t};function xS(s,e){const t=e.team==="red"&&Xn[e.c.rig+"R"]?e.c.rig+"R":e.c.rig,n=e.c.height*Ur,i={walk:Xn[t],shoot:Xn[t+"_shoot"],idle:Xn[t+"_idle"],die:Xn[t+"_die"]},r=new Bt;s.add(r);const a=rS(new ft({transparent:!0,depthWrite:!1,toneMapped:!1}));a.map=i.walk.dirs[0][0];const o=new $e(oS,a);o.frustumCulled=!1,o.renderOrder=5,s.add(o);const l=new ft({color:0,transparent:!0,opacity:Yu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.walk.shDirs&&(l.map=i.walk.shDirs[0][0]);const c=new $e(lS,l);c.frustumCulled=!1,c.renderOrder=2,s.add(c);const h=e.team==="blue"?Vi.blue:Vi.red,u=new $e(new Ar(.5,.7,40),new ft({color:h,transparent:!0,opacity:e.isPlayer?.95:.85,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,u.renderOrder=3,r.add(u);const f=new $e(new Os(.5,40),new ft({color:h,transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.025,f.renderOrder=3,r.add(f);const d=new $e(new Ar(.66,.76,40),new ft({color:16765498,transparent:!0,opacity:0,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.position.y=.035,d.renderOrder=3,r.add(d),{u:e,root:r,body:o,ring:u,superRing:d,mats:[a],x:e.x,z:e.z,face:e.face,kick:0,flash:0,pop:1,lastMoved:e.moved,clock:0,phase:0,shotT:-99,dieT:null,bodyScale:1,state:"idle",onShot(){this.shotT=this.clock},update(_,g,p,M){const x=this.u;this.clock+=_;const y=p&&(x.alive||this.dieT!=null&&this.clock-this.dieT<(i.die?i.die.cycle:.9)+Ku);r.visible=o.visible=c.visible=y,x.alive&&this.dieT!=null&&(this.dieT=null,this.pop=0),x.alive?(this.x+=(x.x-this.x)*Math.min(1,_*20),this.z+=(x.z-this.z)*Math.min(1,_*20)):this.dieT==null&&(this.dieT=this.clock),r.position.set(this.x,0,this.z);let R=x.face-this.face;R=Math.atan2(Math.sin(R),Math.cos(R)),this.face+=R*Math.min(1,_*18);const S=x.moved-this.lastMoved,E=S/Math.max(_,1e-4);this.lastMoved=x.moved;const L=x.alive&&E>.3;let C=i.idle||i.walk,v=0,b=1,N="idle";if(!x.alive&&i.die){C=i.die;const Y=this.clock-this.dieT;v=Math.min(C.n-1,Math.floor(Y/C.cycle*C.n)),b=Y<C.cycle?1:Math.max(0,1-(Y-C.cycle)/Ku),N="die"}else if(x.alive){const Y=i.shoot,ne=this.clock-this.shotT+(Y?Y.hit*Y.cycle:0);L?this.run=Math.min(1,(this.run||0)+_*8):this.run=Math.max(0,(this.run||0)-_*8),this.run>.5?(C=i.walk,this.phase=(this.phase+S/gS(C,n))%1,v=Math.floor(this.phase*C.n)%C.n,N="walk"):Y&&ne<Y.cycle*.96?(C=Y,v=Math.min(C.n-1,Math.floor(ne/C.cycle*C.n)),N="shoot"):i.idle?(C=i.idle,v=Math.floor(this.clock/C.cycle%1*C.n)%C.n):(C=i.walk,v=0)}this.state=N;const D=_S(C,this.face),F=C.dirs[D][v];a.map!==F&&(a.map=F),this.flash=Math.max(0,this.flash-_/vc.flash),a.userData.f.value=this.flash*vc.flashPeak,this.pop=Math.min(1,this.pop+_*aS);const X=this.pop,q=(X<1?1+Math.sin(X*Math.PI)*.22:1)*(x.dash?1.1:1)*this.bodyScale,V=(X<1?.6+.4*X:1)*(x.dash?.92:1)*this.bodyScale,he=Math.sin(C.elev*yc),re=n*Math.cos(C.elev*yc)/C.bodyPx,le=C.w*re*q,Ue=C.h*re*V;o.scale.set(le,Ue,1),o.quaternion.copy(s.userData.cam.quaternion);const ke=(C.ay-C.h/2)*re*V;if(o.position.set(this.x,0,this.z).addScaledVector(cS,ke).addScaledVector(hS,.45),a.opacity=M*b,C.shDirs&&C.sh){const Y=C.shDirs[D][v];l.map!==Y&&(l.map=Y);const[ne,fe,oe,be]=C.sh;c.scale.set(oe*re*q,1,be*re*V/he),c.position.set(this.x+(ne+oe/2-C.w/2)*re*q,.02,this.z+(fe+be/2-C.ay)*re*V/he),l.opacity=Yu*M*b,c.visible=y}else c.visible=!1;d.material.opacity=x.superCharge>=1&&x.alive?.55+Math.sin(g*8)*.35:0,u.material.opacity=(x.isPlayer?.95:.7)*(x.alive?1:0),this.bodyScale=1},dispose(){s.remove(o),s.remove(c),s.remove(r),a.dispose(),l.dispose()}}}function vS(s){const e=new Map,t=new Map,n=s.clone();return Ad(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ad(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Ad(s.children[n],e.children[n],t)}const gr={sat:2.4,lift:1};{const s=new URLSearchParams(location.search).get("lk");if(s){const[e,t]=s.split(",").map(Number);Object.assign(gr,{sat:e??gr.sat,lift:t??gr.lift})}}function yS(s){s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    { vec3 c = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2));
      float l = dot(c, vec3(0.299, 0.587, 0.114)); c = clamp(mix(vec3(l), c, ${gr.sat.toFixed(3)}), 0., 1.);
      c = mix(c, 1. - (1. - c) * (1. - c), ${gr.lift.toFixed(3)});
      diffuseColor.rgb = pow(c, vec3(2.2)); }`)}const cl={frac:.0019,minPx:1.3,color:1315356},Rd=1,Cd=2,MS="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",SS=`varying vec2 vUv; uniform sampler2D tMask; uniform vec2 uTexel; uniform float uRad; uniform vec3 uColor;
void main(){
  float m = texture2D(tMask, vUv).r, d = m;
  for (int i = 0; i < 8; i++) { float a = float(i) * 0.7853982; vec2 o = vec2(cos(a), sin(a)) * uTexel;
    d = max(d, texture2D(tMask, vUv + o * uRad).r); d = max(d, texture2D(tMask, vUv + o * uRad * 0.5).r); }
  float k = clamp(d - m, 0., 1.); if (k < 0.01) discard; gl_FragColor = vec4(uColor, k); }`;function bS(s,e){const t=[];for(let a=0;a<e.H;a++)for(let o=0;o<e.W;o++)e.map[a][o]==="#"&&t.push([o,a]);const n=new ti(1,.95,1).translate(0,.475,0),i=new ro(n,new ft,Math.max(1,t.length)),r=new Fe;return t.forEach(([a,o],l)=>{r.setPosition(a+.5,0,o+.5),i.setMatrixAt(l,r)}),i.count=t.length,i.layers.set(Cd),i.frustumCulled=!1,s.add(i),{mesh:i,dispose(){s.remove(i),n.dispose(),i.material.dispose(),i.dispose()}}}function ES(s,e,t){const n=new Mi(2,2,{samples:4,depthBuffer:!0}),i=new ft({color:16777215}),r=new ft({colorWrite:!1}),a=new ei({vertexShader:MS,fragmentShader:SS,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:n.texture},uTexel:{value:new se},uRad:{value:1},uColor:{value:new Ee(cl.color)}}}),o=new xt;o.setAttribute("position",new rt([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new rt([0,0,2,0,0,2],2));const l=new $e(o,a);l.frustumCulled=!1;const c=new $f;c.add(l);const h=new Dr(-1,1,1,-1,0,1),u=new se;return{render(){s.render(e,t),s.getDrawingBufferSize(u),(n.width!==u.x||n.height!==u.y)&&(n.setSize(u.x,u.y),a.uniforms.uTexel.value.set(1/u.x,1/u.y)),a.uniforms.uRad.value=Math.max(cl.minPx,cl.frac*u.y);const f=e.background,d=s.autoClear,m=s.shadowMap.autoUpdate,_=t.layers.mask;e.background=null,s.shadowMap.autoUpdate=!1,s.setRenderTarget(n),s.setClearColor(0,1),s.clear(!0,!0,!1),s.autoClear=!1,t.layers.set(Cd),e.overrideMaterial=r,s.render(e,t),t.layers.set(Rd),e.overrideMaterial=i,s.render(e,t),e.overrideMaterial=null,t.layers.mask=_,e.background=f,s.shadowMap.autoUpdate=m,s.setRenderTarget(null),s.render(c,h),s.autoClear=d},dispose(){n.dispose(),i.dispose(),r.dispose(),a.dispose(),o.dispose()}}}const qa=new URLSearchParams(location.search).get("look")==="0",Mc=20,wS=["Hips","UpLeg.L","Leg.L","Foot.L","UpLeg.R","Leg.R","Foot.R"],TS=s=>new Set((s.bones?.lower||wS).map(e=>tt.sanitizeNodeName(e))),$u=.1,AS=.04,RS=.016,CS=9,PS=22,ya=1.1,LS=.1,IS=.1,DS=.35,NS=.66,US={dealer:1.6,tank:1.3,sniper:1.6},wn={k:140,c:16,gain:.006,max:25*Math.PI/180},ju={dealer:{white:{maxSat:.16,minVal:.55},y:[.42,.97],minSat:.75},tank:{hue:[280,330],sat:.35,feather:10,minSat:.75},sniper:{hue:[280,330],sat:.35,feather:10,minSat:.75}},OS={blue:213,red:359},Pd={};async function FS(s){const e=new gd;await Promise.all(s.map(async t=>{const[n,i]=await Promise.all([e.loadAsync(`./art/live/${t}.glb`),fetch(`./art/live/${t}.json`).then(c=>c.json())]),r=new Ln().setFromObject(n.scene),a=r.max.y-r.min.y,o=TS(i),l=c=>Object.fromEntries(n.animations.map(h=>[h.name,new Xa(h.name,h.duration,h.tracks.filter(u=>c(o.has(u.name.split(".").slice(0,-1).join(".")))))]));Pd[t]={scene:n.scene,meta:i,h:a,y0:r.min.y,lower:l(c=>c),upper:l(c=>!c),tip:kS(n.scene,i.muzzle)}})),dS(Yi-Mc)}function kS(s,e){if(!e)return null;s.updateMatrixWorld(!0);let t=null,n=-1;if(s.traverse(a=>{if(!t&&a.isSkinnedMesh){const o=a.skeleton.bones.findIndex(l=>l.name==="Gun");o>=0&&(t=a,n=o)}}),!t)return null;const i=s.getObjectByName("rig")||s,r=a=>t.worldToLocal(i.localToWorld(new I(...a)));return{name:t.name,gi:n,tip:r(e.tip),back:r(e.back)}}const BS=`
vec3 rgb2hsv(vec3 c){ vec4 K=vec4(0.,-1./3.,2./3.,-1.); vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g)); vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r)); float d=q.x-min(q.w,q.y); float e=1e-10; return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x); }
vec3 hsv2rgb(vec3 c){ vec4 K=vec4(1.,2./3.,1./3.,3.); vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www); return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y); }`;function Zu(s,e,t,n){const i=new pi({map:s.map||null,color:s.color?s.color.clone():16777215}),r={uHue:{value:OS[t]/360},uY:{value:new se(...n)}};return i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),qa||yS(a),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform vec2 uY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = (position.y - uY.x) / (uY.y - uY.x);`);const o=e.white?`float w = clamp((${e.white.maxSat.toFixed(3)} - hv.y) / 0.06, 0., 1.) * clamp((hv.z - ${e.white.minVal.toFixed(3)}) / 0.1, 0., 1.) * clamp(min(vBodyY - ${e.y[0].toFixed(3)}, ${e.y[1].toFixed(3)} - vBodyY) / 0.03 + 0.5, 0., 1.);`:`float h = hv.x * 360.; float lo = ${e.hue[0].toFixed(1)}, hi = ${e.hue[1].toFixed(1)};
         float dist = min(abs(mod(h - lo + 180., 360.) - 180.), abs(mod(h - hi + 180., 360.) - 180.));
         float w = (h >= lo && h <= hi ? 1. : clamp(1. - dist / ${e.feather.toFixed(1)}, 0., 1.)) * clamp((hv.y - ${e.sat.toFixed(3)}) / 0.12, 0., 1.) * clamp((hv.z - 0.15) / 0.1, 0., 1.);`;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform float uHue;
`+BS).replace("#include <map_fragment>",`#include <map_fragment>
      { vec3 s = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2)); vec3 hv = rgb2hsv(s); ${o}
        vec3 nc = pow(hsv2rgb(vec3(uHue, max(hv.y, ${e.minSat.toFixed(2)}), hv.z)), vec3(2.2)); diffuseColor.rgb = mix(diffuseColor.rgb, nc, w); }`)},i.customProgramCacheKey=()=>`body-${qa}-${JSON.stringify(e)}`,i.userData.u=r,i}function zS(s,e){const t=Pd[e.c.rig],n=e.c.height*Ur,i=n/t.h,r=new Bt;s.add(r);const a=new Bt;a.matrixAutoUpdate=!1,r.add(a);const o=Math.cos(Mc*Math.PI/180),l=Math.sin(Mc*Math.PI/180),c=T=>a.matrix.set(T,0,0,0,0,o*T,0,0,0,-l*T,T,0,0,0,0,1);c(1);const h=new Bt;a.add(h);const u=vS(t.scene);u.scale.setScalar(i),u.position.y=-t.y0*i,h.add(u);const f=[],d=[t.y0,t.y0+t.h];u.traverse(T=>{if(T.isMesh){T.material=Array.isArray(T.material)?T.material.map(H=>Zu(H,ju[e.c.rig],e.team,d)):Zu(T.material,ju[e.c.rig],e.team,d);for(const H of[].concat(T.material))f.push(H);T.castShadow=!1,T.receiveShadow=!1,T.frustumCulled=!1}}),qa||u.traverse(T=>{T.isMesh&&T.layers.enable(Rd)});const m={};u.traverse(T=>{T.isBone&&(m[T.name]=T)});let _=null;t.tip&&u.traverse(T=>{!_&&T.isSkinnedMesh&&T.name===t.tip.name&&(_=T)});const g=new I,p=new Fe,M={p:new I,ax:new I,q:new zt,gp:new I,gq:new zt,gs:new I,m:new Fe,y:new Fe,s:new Fe,g:new Fe},x=T=>{const H=M;h.updateWorldMatrix(!0,!1),L.updateWorldMatrix(!1,!1),b.updateWorldMatrix(!1,!1),H.y.copy(h.matrixWorld).invert(),H.s.multiplyMatrices(H.y,L.matrixWorld),H.g.multiplyMatrices(H.y,b.matrixWorld),H.p.setFromMatrixPosition(H.s),H.ax.setFromMatrixColumn(H.s,1).normalize(),H.q.setFromAxisAngle(H.ax,T),H.g.decompose(H.gp,H.gq,H.gs),H.gp.sub(H.p).applyQuaternion(H.q).add(H.p),H.gq.premultiply(H.q),H.m.compose(H.gp,H.gq,H.gs).premultiply(p.multiplyMatrices(H.y,b.parent.matrixWorld).invert()).decompose(b.position,b.quaternion,H.gs)},y=T=>{const H=M;h.updateWorldMatrix(!0,!1),L.parent.updateWorldMatrix(!0,!1),H.m.multiplyMatrices(H.y.copy(h.matrixWorld).invert(),L.parent.matrixWorld).decompose(H.p,H.q,H.gs),H.ax.set(0,1,0).applyQuaternion(H.q.invert()),L.quaternion.premultiply(H.q.setFromAxisAngle(H.ax,T))},R=(T,H)=>{const ie=_,Q=t.tip.gi;return p.multiplyMatrices(ie.skeleton.bones[Q].matrixWorld,ie.skeleton.boneInverses[Q]),ie.localToWorld(H.copy(T).applyMatrix4(ie.bindMatrix).applyMatrix4(p).applyMatrix4(ie.bindMatrixInverse))},S=t.meta.bones||{},E=S.twist==="up",L=m[S.spine||"Spine"],C=m[S.chest||"Chest"],v=m[S.head||"Head"],b=m[S.gun||"Gun"],N=[L,C,v,b].filter(Boolean),D=N.map(T=>[T.position.clone(),T.quaternion.clone(),T.scale.clone()]),F=()=>N.forEach((T,H)=>{T.position.copy(D[H][0]),T.quaternion.copy(D[H][1]),T.scale.copy(D[H][2])}),X=()=>N.forEach((T,H)=>{D[H][0].copy(T.position),D[H][1].copy(T.quaternion),D[H][2].copy(T.scale)}),B=new $e(new Os(.28*n,32),new ft({color:0,transparent:!0,opacity:.25,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.scale.set(1,.8,1),B.position.y=.025,B.renderOrder=2,r.add(B);const q={me:{disc:3989594,ring:8191886,da:.5},ally:{disc:39423,ring:6079231,da:.45},foe:{disc:16722474,ring:16743034,da:.45}},V=q[e.isPlayer?"me":e.team==="blue"?"ally":"foe"],he=V.ring,re=new $e(new Ar(.64,.86,40),new ft({color:he,transparent:!0,depthWrite:!1}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,r.add(re);const le=qa?null:new $e(new Os(.64,40),new ft({color:V.disc,transparent:!0,opacity:V.da,depthWrite:!1}));le&&(le.rotation.x=-Math.PI/2,le.position.y=.028,le.renderOrder=2,r.add(le));const Ue=new qy(u),ke=t.meta,Y=e.c,ne=Y.shotEnd-Y.aim,fe={lower:{},upper:{}};for(const T of["lower","upper"])for(const[H,ie]of Object.entries(t[T])){const Q=Ue.clipAction(ie.clone()),ee=ke.clips[H];ee.loop||(Q.setLoop(Pf,1),Q.clampWhenFinished=!0),H==="idle"&&(Q.timeScale=ee.dur/Y.idle),H==="shoot"&&(Q.timeScale=ee.dur*(1-ee.hit)/ne),fe[T][H]=Q}const oe={lower:null,upper:null},be=(T,H,ie=0,Q=$u)=>{const ee=fe[T][H];ee&&(oe[T]===H&&(ee.isRunning()||ee.timeScale===0&&ee.isScheduled())||(ee.reset(),ee.time=ie,ee.setEffectiveWeight(1),ee.fadeIn(Q).play(),oe[T]&&oe[T]!==H&&fe[T][oe[T]].fadeOut(Q),oe[T]=H))};be("lower","idle"),be("upper","idle");const Oe=ke.speed*ke.clips.run.dur*i,Be=Math.max(Oe,Math.min(Y.cycle*Y.speed,Oe/NS)),Te={x:0,vx:0,z:0,vz:0,px:e.x,pz:e.z,pvx:0,pvz:0};return{u:e,root:r,ring:re,mats:f,x:e.x,z:e.z,face:e.face,legFace:e.face,flash:0,lastMoved:e.moved,clock:0,phase:0,shotT:-99,pushT:-99,dead:!1,bodyScale:1,state:"idle",run:0,pop:1,onShot(){const T=this.u;this.face=T.face;const H=Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace));Math.abs(H)>ya&&(this.legFace=this.face-Math.sign(H)*ya),this.shotT=this.clock;const ie=ke.clips.shoot;be("upper","shoot",ie.hit*ie.dur,E?RS:AS),oe.upper==="shoot"&&(fe.upper.shoot.time=ie.hit*ie.dur)},update(T,H,ie,Q){const ee=this.u;if(this.clock+=T,!ee.alive){this.dead=!0,r.visible=!1;return}this.dead&&(this.dead=!1,this.x=ee.x,this.z=ee.z,this.lastMoved=ee.moved,be("lower","idle"),be("upper","idle")),r.visible=ie,this.x+=(ee.x-this.x)*Math.min(1,T*20),this.z+=(ee.z-this.z)*Math.min(1,T*20),r.position.set(this.x,0,this.z);const Le=(Ce,Ne,Qe)=>{const U=Math.atan2(Math.sin(Ne-Ce),Math.cos(Ne-Ce));return Ce+Math.sign(U)*Math.min(Math.abs(U),Qe*T)};this.face=Le(this.face,ee.face,PS);const pe=ee.moved-this.lastMoved,P=pe/Math.max(T,1e-4);this.lastMoved=ee.moved;const w=P>.3;this.run=w?Math.min(1,this.run+T*8):Math.max(0,this.run-T*8);const z=ke.clips.shoot;ee.queue.length&&oe.upper==="shoot"&&(this.shotT=this.clock,fe.upper.shoot.time=z.hit*z.dur);const $=this.clock-this.shotT<ne*.9;this.legFace=Le(this.legFace,w&&!$?ee.face:this.face,CS),h.rotation.y=Math.atan2(Math.cos(this.legFace),Math.sin(this.legFace));let Z="idle";this.clock-this.pushT<LS+$u?(be("lower","hit"),be("upper","hit"),Z="push"):ee.dash&&fe.lower.dash?(be("lower","dash"),be("upper","dash"),Z="dash"):(this.run>.5?(be("lower","run"),this.phase=(this.phase+pe/Be)%1,Z="walk"):be("lower","idle"),$?(oe.upper!=="shoot"&&be("upper","shoot",ke.clips.shoot.hit*ke.clips.shoot.dur),Z=Z==="walk"?"walk":"shoot"):be("upper",this.run>.5?"run":"idle")),this.state=Z;for(const Ce of["lower","upper"]){const Ne=fe[Ce].run;Ne.timeScale=0,Ne.time=this.phase*ke.clips.run.dur}if(F(),Ue.update(T),X(),L){const Ce=Math.max(-ya,Math.min(ya,Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace))));E?y(-Ce):L.rotateY(-Ce),b&&!E&&Math.abs(Ce)>1e-4&&x(-Ce)}const Ae=(this.x-Te.px)/Math.max(T,1e-4),ue=(this.z-Te.pz)/Math.max(T,1e-4);Te.px=this.x,Te.pz=this.z;const ge=(Ae-Te.pvx)/Math.max(T,1e-4),Ye=(ue-Te.pvz)/Math.max(T,1e-4);Te.pvx=Ae,Te.pvz=ue;const ae=Math.cos(this.legFace),_e=Math.sin(this.legFace),He=ge*ae+Ye*_e,Ve=-ge*_e+Ye*ae,ye=Math.min(T,1/30);if(Te.vx+=(-140*Te.x-wn.c*Te.vx-wn.gain*wn.k*He)*ye,Te.x=Math.max(-wn.max,Math.min(wn.max,Te.x+Te.vx*ye)),Te.vz+=(-140*Te.z-wn.c*Te.vz-wn.gain*wn.k*Ve)*ye,Te.z=Math.max(-wn.max,Math.min(wn.max,Te.z+Te.vz*ye)),C&&(C.rotateX(-Te.x*.6),C.rotateZ(Te.z*.6)),v&&(v.rotateX(-Te.x*.4),v.rotateZ(Te.z*.4)),E&&b&&_&&$){const Ce={x:0,y:0,z:0};for(let Ne=0;Ne<3&&this.muzzle(void 0,Ce);Ne++){const Qe=Math.atan2(Math.sin(this.face-Math.atan2(Ce.z,Ce.x)),Math.cos(this.face-Math.atan2(Ce.z,Ce.x)));if(Math.abs(Qe)<.002)break;y(-Math.max(-1.2,Math.min(1.2,Qe)))}}if(b){const Ce=$?fe.upper.shoot.getEffectiveWeight():0;b.scale.multiplyScalar(1+(US[ee.c.rig]-1)*Ce)}this.flash=Math.max(0,this.flash-T/IS),c(this.bodyScale);for(const Ce of f){Ce.emissive?.setScalar(this.flash*DS);const Ne=Q<.999;Ce.transparent!==Ne&&(Ce.transparent=Ne,Ce.needsUpdate=!0),Ce.opacity=Q}re.material.opacity=ee.isPlayer?.95:.7,this.bodyScale=1},muzzle(T=new I,H=null){return!_||!r.visible?null:(r.updateMatrixWorld(!0),R(t.tip.tip,T),H&&(g.subVectors(T,R(t.tip.back,g)).normalize(),H.x=g.x,H.y=g.y,H.z=g.z),T)},onHit(){},onPush(){this.pushT=this.clock},dispose(){s.remove(r),Ue.stopAllAction(),Ue.uncacheRoot(u),u.traverse(T=>T.skeleton?.dispose());for(const T of f)T.dispose();for(const T of[B,re,le])T&&(T.geometry.dispose(),T.material.dispose())}}}const on=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},Zt=s=>{const e=new Vs(s);return e.colorSpace=pt,e},Fi=(s,e,t,n,i,r)=>{const a=s.createRadialGradient(e,t,n,e,t,i);for(const[o,l]of r)a.addColorStop(o,l);return a};function Ld(s,e=128){const[t,n]=on(e),i=en(s);for(let a=0;a<7;a++){const o=i()*6.28,l=i()*.2*e,c=e/2+Math.cos(o)*l,h=e/2+Math.sin(o)*l*.8,u=(.2+i()*.1)*e;n.fillStyle=Fi(n,c,h,u*.35,u,[[0,"rgba(255,255,255,1)"],[.55,"rgba(236,246,255,1)"],[.8,"rgba(186,212,238,0.98)"],[1,"rgba(186,212,238,0)"]]),n.beginPath(),n.arc(c,h,u,0,7),n.fill()}n.globalCompositeOperation="source-atop";const r=n.createLinearGradient(e*.25,e*.15,e*.75,e*.9);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(180,200,225,0.25)"),r.addColorStop(1,"rgba(90,120,170,0.8)"),n.fillStyle=r,n.fillRect(0,0,e,e),[t,n]}function HS(){const[s,e]=Ld(11,256),t=256;e.globalCompositeOperation="source-atop";const n=(i,r,a)=>{e.fillStyle="rgba(232,247,255,0.82)",e.beginPath(),e.ellipse(i,r,a,a*.95,0,0,7),e.fill(),e.fillRect(i-a*.5,r+a*.55,a,a*.65),e.fillStyle="rgba(30,60,95,0.92)";for(const o of[-.38,.38])e.beginPath(),e.ellipse(i+o*a,r,a*.24,a*.3,0,0,7),e.fill();e.beginPath(),e.moveTo(i,r+a*.25),e.lineTo(i-a*.1,r+a*.5),e.lineTo(i+a*.1,r+a*.5),e.fill();for(let o=0;o<4;o++)e.fillRect(i-a*.4+o*a*.22,r+a*.8,a*.06,a*.32)};return n(t*.5,t*.38,t*.12),n(t*.28,t*.52,t*.085),n(t*.72,t*.55,t*.085),Zt(s)}function VS(s=8,e=256){const[t,n]=on(e),i=e/2;n.fillStyle=Fi(n,i,i,4,i,[[0,"rgba(255,255,255,0.9)"],[.5,"rgba(255,255,255,0.18)"],[1,"rgba(255,255,255,0)"]]),n.fillRect(0,0,e,e),n.fillStyle="#fff",n.beginPath();for(let r=0;r<s*2;r++){const a=r*Math.PI/s-Math.PI/2,o=r%2?i*.22:i*.95;n.lineTo(i+Math.cos(a)*o,i+Math.sin(a)*o)}return n.closePath(),n.fill(),Zt(t)}function GS(s=128){const[e,t]=on(s),n=s/2;return t.fillStyle=Fi(t,n,n,2,n*.5,[[0,"rgba(255,255,255,0.8)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,s,s),t.fillStyle="#fff",t.beginPath(),t.moveTo(n,2),t.quadraticCurveTo(n+5,n-5,s-2,n),t.quadraticCurveTo(n+5,n+5,n,s-2),t.quadraticCurveTo(n-5,n+5,2,n),t.quadraticCurveTo(n-5,n-5,n,2),t.fill(),Zt(e)}function WS(s=64){const[e,t]=on(s),n=s/2;t.fillStyle="#fff",t.beginPath();for(let i=0;i<10;i++){const r=i*Math.PI/5-Math.PI/2,a=i%2?n*.42:n*.95;t.lineTo(n+Math.cos(r)*a,n+Math.sin(r)*a)}return t.closePath(),t.fill(),Zt(e)}function XS(){const s={};s.puff=[1,2,3,4].map(e=>Zt(Ld(e*17)[0])),s.skull=HS(),s.burst=VS(8),s.twinkle=GS(),s.smallStar=WS();{const[e,t]=on(64);t.fillStyle=Fi(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.6,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.dot=Zt(e)}{const[e,t]=on(64);t.fillStyle=Fi(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.82,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.disc=Zt(e)}{const[e,t]=on(64,32),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"#9a6a1a"),n.addColorStop(.5,"#fff0a0"),n.addColorStop(1,"#c8962a"),t.fillStyle=n,t.fillRect(6,8,52,16),t.fillStyle="#7a5410",t.fillRect(52,8,6,16),s.shell=Zt(e)}{const[e,t]=on(64),n=en(5);t.fillStyle="#fff",t.beginPath();for(let r=0;r<7;r++){const a=r/7*6.28,o=20+n()*10;t.lineTo(32+Math.cos(a)*o,32+Math.sin(a)*o)}t.closePath(),t.fill(),t.globalCompositeOperation="source-atop";const i=t.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(90,80,70,0.7)"),t.fillStyle=i,t.fillRect(0,0,64,64),s.rock=Zt(e)}{const[e,t]=on(128),n=en(9);t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round";for(let i=0;i<5;i++){let r=i/5*6.28+n()*.5,a=64,o=64;t.lineWidth=6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<4;l++)r+=(n()-.5)*1.1,a+=Math.cos(r)*15,o+=Math.sin(r)*15,t.lineTo(a,o),t.lineWidth=6-l;t.stroke()}s.crack=Zt(e)}{const[e,t]=on(128);t.fillStyle=Fi(t,64,64,0,64,[[0,"rgba(255,255,255,0)"],[.55,"rgba(255,255,255,0)"],[.74,"rgba(255,255,255,1)"],[.9,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),s.ring=Zt(e)}{const[e,t]=on(128);t.fillStyle=Fi(t,64,64,0,64,[[0,"rgba(255,255,255,0.06)"],[.78,"rgba(255,255,255,0.16)"],[.92,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(64,64,44,3.5,4.5),t.stroke(),s.bubble=Zt(e)}{const[e,t]=on(128,16),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.fillRect(0,0,128,16),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,16),s.dash=Zt(e)}return s}const ut=(s,e)=>s+Math.random()*(e-s),ze=(s,e)=>s+(Math.random()-.5)*2*e,qS=new Jt(1,1).rotateX(-Math.PI/2),YS={tex:null,add:!1,flat:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,dz:0,drag:0,bounce:0,fric:0,floor:!1,delay:0,life:1,size:1,s0:1,s1:1,aspect:1,a0:1,fadeIn:0,fadeOut:.3,rot:0,spin:0,spin1:null,color:16777215,color2:null,ro:0,blink:0,ease:0,kind:"",follow:null,fy:0};function KS(s,{sp:e=260,ad:t=200,fl:n=70}={}){const i={sp:[],ad:[],fl:[]},r=[],a={},o={},l=(d,m,_)=>{const g=m?new ft({transparent:!0,depthWrite:!1}):new so({transparent:!0,depthWrite:!1,depthTest:!1,..._?{blending:yl}:{}}),p=m?new $e(qS,g):new Gc(g);p.visible=!1,p.frustumCulled=!1,p.renderOrder=m?4:8,s.add(p),i[d].push({m:p,mat:g,flat:m,list:d,gen:0,c0:new Ee,c1:new Ee,has2:!1})};for(let d=0;d<e;d++)l("sp",!1,!1);for(let d=0;d<t;d++)l("ad",!1,!0);for(let d=0;d<n;d++)l("fl",!0,!1);let c=0;function h(d){d.m.visible=!1,r.splice(r.indexOf(d),1),i[d.list].push(d),d.kind&&a[d.kind]--}function u(d){const m=d.flat?"fl":d.add?"ad":"sp",_=i[m].pop();return _?d.kind&&o[d.kind]!==void 0&&(a[d.kind]||0)>=o[d.kind]?(i[m].push(_),null):(Object.assign(_,YS,d),_.gen=++c,_.t=-_.delay,_.vis=!1,_.c0.setHex(_.color),_.has2=_.color2!=null,_.has2&&_.c1.setHex(_.color2),_.mat.map=_.tex,_.mat.color.copy(_.c0),_.mat.opacity=0,_.m.renderOrder=_.ro||(_.flat?4:8),_.flat?_.m.rotation.y=_.rot:_.mat.rotation=_.rot,_.kind&&(a[_.kind]=(a[_.kind]||0)+1),r.push(_),_):null}function f(d){const m=Math.max(1,Math.ceil(d/.0167)),_=d/m;for(let g=r.length-1;g>=0;g--){const p=r[g];if(p.t+=d,p.t<0)continue;let M=p.t/p.life;if(M>=1){h(p);continue}if(p.vis||(p.vis=!0,p.m.visible=!0),p.follow)p.x=p.follow.x,p.z=p.follow.z,p.y=p.fy;else for(let S=0;S<m;S++){if(p.vy+=p.g*_,p.dz&&p.vy>0&&(p.vy=Math.max(0,p.vy-p.dz*_)),p.drag){const E=Math.exp(-p.drag*_);p.vx*=E,p.vz*=E}p.x+=p.vx*_,p.y+=p.vy*_,p.z+=p.vz*_,p.floor&&p.y<.04&&(p.y=.04,p.vy<-.4&&p.bounce?(p.vy=-p.vy*p.bounce,p.vx*=1-p.fric,p.vz*=1-p.fric):(p.vy=0,p.vx*=1-Math.min(1,6*_),p.vz*=1-Math.min(1,6*_)))}p.ease&&(M=1-(1-M)*(1-M));const x=(p.s0+(p.s1-p.s0)*M)*p.size,y=p.t/p.life;let R=p.a0;p.fadeIn&&y<p.fadeIn&&(R*=y/p.fadeIn),p.fadeOut&&y>1-p.fadeOut&&(R*=(1-y)/p.fadeOut),p.blink&&(R*=.5+.5*Math.sin(p.t*p.blink)),p.m.position.set(p.x,p.y,p.z),p.mat.opacity=R,p.has2&&p.mat.color.lerpColors(p.c0,p.c1,y),p.spin&&(p.rot+=(p.spin1==null?p.spin:p.spin+(p.spin1-p.spin)*y)*d,p.flat?p.m.rotation.y=p.rot:p.mat.rotation=p.rot),p.flat?p.m.scale.set(x,1,x*p.aspect):p.m.scale.set(x,x*p.aspect,1)}}return{emit:u,update:f,setCap:(d,m)=>{o[d]=m},count:d=>a[d]||0,clear(){for(;r.length;)h(r[r.length-1])},get alive(){return r.length}}}const $S={dealer:{fwd:.5,up:.449},tank:{fwd:.784,up:.611},sniper:{fwd:.666,up:.416}},Rr={blue:{gas0:6742271,gas1:3385599,spark:5098751,line:23039,tint:10476799,ball:"blue"},red:{gas0:16744608,gas1:16721472,spark:16731494,line:16711769,tint:16756920,ball:"red"}},Ua=s=>s.c.height*Ur*ih()*.45;function Id(s,e){const t=$S[s.c.rig],n=s.c.height*Ur;return{x:s.x+Math.cos(e)*t.fwd*n,y:t.up*n*ih(),z:s.z+Math.sin(e)*t.fwd*n}}const Si=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},bi=s=>{const e=new Vs(s);return e.colorSpace=pt,e},hl={blue:{main:"#2f7fe6",dark:"#123c86",lite:"#8fd0ff",halo:"rgba(70,190,220,0.45)",orb:"#5a5cff",orbLite:"#b8b4ff",orbDark:"#1c1a6a",slug:"#38d6ff",slugEdge:"#6a5cff",slugHalo:"rgba(28,22,110,0.55)"},red:{main:"#f0462a",dark:"#8a1408",lite:"#ffb08a",halo:"rgba(150,20,30,0.45)",orb:"#ff3a46",orbLite:"#ffc0c0",orbDark:"#6a0a14",slug:"#ff5aa8",slugEdge:"#ff6a7a",slugHalo:"rgba(110,10,30,0.55)"}};function ul(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arc(e+n-r,t+r,r,-Math.PI/2,Math.PI/2),s.lineTo(e+r,t+i),s.arc(e+r,t+r,r,Math.PI/2,Math.PI*1.5),s.closePath()}function jS(s){const[e,t]=Si(128,64);return t.fillStyle=s.halo,t.beginPath(),t.ellipse(66,32,56,30,0,0,7),t.fill(),ul(t,20,13,92,38,19),t.fillStyle=s.dark,t.fill(),ul(t,24,17,84,30,15),t.fillStyle=s.main,t.fill(),ul(t,34,20,66,9,4.5),t.fillStyle=s.lite,t.globalAlpha=.75,t.fill(),t.globalAlpha=1,t.fillStyle=s.dark,t.globalAlpha=.5,t.fillRect(52,17,4,30),t.globalAlpha=1,bi(e)}function ZS(s){const[e,t]=Si(64);t.fillStyle=s.orbDark,t.globalAlpha=.55,t.beginPath(),t.arc(32,32,31,0,7),t.fill(),t.globalAlpha=1;const n=t.createRadialGradient(27,27,2,32,32,23);return n.addColorStop(0,s.orbLite),n.addColorStop(.55,s.orb),n.addColorStop(1,s.orbDark),t.fillStyle=n,t.beginPath(),t.arc(32,32,23,0,7),t.fill(),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.ellipse(25,24,6,4,-.6,0,7),t.fill(),bi(e)}function JS(s){const[e,t]=Si(192,64);t.fillStyle=s.slugHalo,t.beginPath(),t.ellipse(120,32,64,30,0,-Math.PI/2,Math.PI/2),t.lineTo(60,62),t.lineTo(60,2),t.closePath(),t.fill();const n=i=>{t.beginPath(),t.moveTo(40+i,18+i),t.lineTo(130,18+i),t.quadraticCurveTo(168-i,22+i*.3,178-i*1.6,32),t.quadraticCurveTo(168-i,42-i*.3,130,46-i),t.lineTo(40+i,46-i),t.closePath()};return n(0),t.fillStyle=s.slugEdge,t.fill(),n(4),t.fillStyle=s.slug,t.fill(),t.fillStyle="rgba(255,255,255,0.85)",t.beginPath(),t.moveTo(52,29),t.lineTo(150,29),t.quadraticCurveTo(160,32,150,35),t.lineTo(52,35),t.closePath(),t.fill(),t.fillStyle=s.slugEdge,t.globalAlpha=.8,t.fillRect(64,20,4,24),t.globalAlpha=1,bi(e)}function Ma(s){const[e,t]=Si(128,32),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,s+"00"),n.addColorStop(.45,s+"70"),n.addColorStop(.8,s+"d8"),n.addColorStop(1,s),t.fillStyle=n,t.fillRect(0,0,128,32),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,32);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"rgba(0,0,0,1)"),i.addColorStop(.7,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,32),bi(e)}function QS(){const[s,e]=Si(128),t=64;e.fillStyle="#ffb21e",e.beginPath();for(let i=0;i<14;i++){const r=i*Math.PI/7,a=i%2?t*.42:t*(.8+.18*Math.sin(i*2.3));e.lineTo(t+Math.cos(r)*a,t+Math.sin(r)*a)}e.closePath(),e.fill();const n=e.createRadialGradient(t,t,2,t,t,t*.5);return n.addColorStop(0,"#fff"),n.addColorStop(.6,"#fff6b0"),n.addColorStop(1,"rgba(255,220,90,0)"),e.fillStyle=n,e.beginPath(),e.arc(t,t,t*.5,0,7),e.fill(),bi(s)}function eb(){const[s,e]=Si(128,32),t=(n,i)=>{e.beginPath(),e.moveTo(0,16-n),e.quadraticCurveTo(70,16-n*.6,128,16),e.quadraticCurveTo(70,16+n*.6,0,16+n),e.closePath(),e.fillStyle=i,e.fill()};return t(13,"#ff9a1a"),t(7,"#ffe866"),t(3,"#fffbe0"),bi(s)}function tb(){const[s,e]=Si(64);return e.fillStyle="#fff",e.beginPath(),e.arc(32,34,22,.2,Math.PI*1.7),e.arc(40,28,13,Math.PI*1.6,.4,!0),e.closePath(),e.fill(),bi(s)}function nb(){const[s,e]=Si(128),t=64;e.strokeStyle="#fff",e.lineWidth=5,e.beginPath(),e.arc(t,t,30,0,7),e.stroke(),e.fillStyle="rgba(255,255,255,0.18)",e.beginPath(),e.arc(t,t,28,0,7),e.fill(),e.fillStyle="#fff";for(let n=0;n<3;n++){const i=n*2*Math.PI/3-Math.PI/2,r=Math.cos(i),a=Math.sin(i);e.beginPath(),e.moveTo(t+r*26-a*9,t+a*26+r*9),e.quadraticCurveTo(t+r*40,t+a*40,t+r*62,t+a*62),e.quadraticCurveTo(t+r*40,t+a*40,t+r*26+a*9,t+a*26-r*9),e.closePath(),e.fill()}return bi(s)}function ib(){const s={};for(const e of["blue","red"])s[e]={capsule:jS(hl[e]),orb:ZS(hl[e]),slug:JS(hl[e])};return s.blue.streak=Ma("#3a8cff"),s.red.streak=Ma("#ff3a2a"),s.blue.streakSnipe=Ma("#7a6cff"),s.red.streakSnipe=Ma("#ff5a8a"),s.flash=QS(),s.jet=eb(),s.wisp=tb(),s.thornRing=nb(),s}const Ju=Math.sin(Yi*Math.PI/180),sb=new Jt(1,1).rotateX(-Math.PI/2),rb=1.2,Qu=s=>s*s*(3-2*s),Sa={dealer:{tex:"capsule",head:[.65,.36],tip:.875,back:.4,tail:[1.9,.2,1],grow:.25,sh:1.3,n:1},tank:{tex:"orb",head:[.24,.24],tip:.5,back:.08,tail:[1.6,.15,.9],grow:.4,sh:1,n:4},sniper:{tex:"slug",head:[.84,.5],tip:.93,back:.55,tail:[.6,.14,.5],grow:.1,sh:1,n:1}},ab=[[.22,0],[0,.25],[0,-.25],[-.22,0]],ob=.133;function lb(s,e,t,n,i){const r=ib(),a=new Map,o={dealer:[],tank:[],sniper:[]},l=new I;e.setCap("sniperLine",8),e.setCap("sniperSmoke",8),e.setCap("sniperSpark",10);const c=(f,d,m)=>{const _=new Gc(new so({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return _.renderOrder=d,_.frustumCulled=!1,_.center.set(m,.5),s.add(_),_},h=f=>{const d=Sa[f],m=[];for(let g=0;g<d.n;g++)m.push({head:c(!1,9,d.tip),tail:c(!1,8,1)});const _=new $e(sb,new ft({map:t.disc,color:0,transparent:!0,opacity:102/255,depthWrite:!1}));return _.renderOrder=3,_.frustumCulled=!1,s.add(_),{rig:f,parts:m,sh:_}},u=(f,d)=>{for(const m of f.parts)m.head.visible=m.tail.visible=d;f.sh.visible=d};return{update(f,d){for(const m of d.bullets){let _=a.get(m);const g=m.owner.c.rig,p=Sa[g]||Sa.dealer;if(!_){_=o[g]?.pop()||h(Sa[g]?g:"dealer"),_.acc=0,_.age=0,u(_,!0),a.set(m,_);const N=m.isSuper?1.3:1,D=Rr[m.team].ball;_.k=N,_.went0=m.went;for(const X of _.parts)X.head.material.map=r[D][p.tex],X.head.scale.set(p.head[0]*N,p.head[1]*N,1),X.tail.material.map=g==="sniper"?r[D].streakSnipe:r[D].streak,X.tail.material.opacity=p.tail[2];const F=n(m.owner,l)||Id(m.owner,m.ang);_.ox=F.x-m.x,_.oz=F.z-m.z,_.y=F.y,_.sh.scale.set(.57*p.sh*N,1,.46*p.sh*N),i&&(i.push({k:"bullet",id:m.owner.id,rig:g,x:F.x,y:F.y,z:F.z,t:d.t}),i.length>300&&i.shift())}_.age+=f;const M=m.went-_.went0,x=1-Qu(Math.min(1,M/rb)),y=m.x+_.ox*x,R=m.z+_.oz*x,S=Math.hypot(m.vx,m.vz)||1,E=m.vx/S,L=m.vz/S,C=Math.atan2(-L*Ju,E),v=Math.min(p.tail[0]*_.k*Math.min(1,_.age/p.grow),M-p.back*_.k+.3),b=Qu(Math.min(1,_.age/ob));_.parts.forEach((N,D)=>{let F=y,X=R;if(_.parts.length>1){const[q,V]=ab[D];F+=(E*q-L*V)*b*_.k,X+=(L*q+E*V)*b*_.k}N.head.position.set(F,_.y,X),N.head.material.rotation=C;const B=p.back*_.k;N.tail.position.set(F-E*B,_.y,X-L*B),N.tail.material.rotation=C,N.tail.visible=v>.05,N.tail.scale.set(Math.max(.01,v),p.tail[1]*_.k,1)}),_.sh.position.set(y,.045,R),_.sh.rotation.y=-Math.atan2(L,E),g==="sniper"&&this.trail(_,m,y,R,f,E,L)}for(const[m,_]of a)d.bullets.includes(m)||(u(_,!1),o[_.rig].push(_),a.delete(m))},trail(f,d,m,_,g,p,M){const x=Rr[d.team],y=f.y;f.acc+=g*10;const R=Math.atan2(-M*Ju,p);for(;f.acc>=1;){f.acc-=1;const S=ut(10,15);e.emit({tex:t.dash,add:!0,kind:"sniperLine",x:m,y,z:_,vx:-p*S,vz:-M*S,life:ze(.15,.02),size:1.1,s0:ze(.8,.2),aspect:.09,a0:.95,fadeOut:.5,rot:R,color:x.line}),e.emit({tex:t.puff[1],kind:"sniperSmoke",x:m,y,z:_,delay:.1,life:.28,size:.6,s0:.5,s1:.7,a0:.5,fadeIn:.3,fadeOut:.5,color:15922943}),e.emit({tex:t.twinkle,add:!0,kind:"sniperSpark",x:ze(m,.08),y:ze(y,.08),z:ze(_,.08),vy:.5,life:ze(.7,.3),size:.4,s0:.7,s1:.01,a0:.9,fadeOut:.5,spin:4,color:x.spark})}},clear(){for(const[,f]of a)u(f,!1),o[f.rig].push(f);a.clear()},tex:r}}const cb=Math.sin(Yi*Math.PI/180),ef={dealer:{cloud:1.1,jet:.75,life:.3},tank:{cloud:1.6,jet:1.1,life:.42}},tf=16052710,hb=15257510,ub=15790834;function fb(s,e,t){s.setCap("hitDust",24),s.setCap("frag",60),s.setCap("rock",30),s.setCap("shell",16);const n=()=>e.puff[Math.random()*4|0];function i(o,l,c,h){s.emit({tex:e.burst,add:!0,x:o,y:l,z:c,life:ze(.045,.015),size:1.2,s0:1,s1:.25,a0:1,fadeOut:0,rot:Math.random()*6.28,color:16773296});const u=Math.random()*6.28,f=ut(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:o,y:l,z:c,vx:Math.cos(u)*f,vz:Math.sin(u)*f,g:2.1,life:ze(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:h})}function r(o,l,c,h,u,f=1){const d=l+(o.cid==="tank"?100*Math.PI/180:Math.PI/2),m=ut(2.8,4)*f;s.emit({tex:e.shell,kind:"shell",x:(c+o.x)/2,y:h,z:(u+o.z)/2,vx:Math.cos(d)*m,vz:Math.sin(d)*m,vy:ut(2.25,4.5)*f,g:-30,bounce:.65,fric:.35,floor:!0,life:ze(1.5,.5),size:.2,s0:.6,s1:.7,aspect:.5,a0:1,fadeOut:.25,rot:Math.random()*6.28,spin:ut(-14,14),color:16777215})}function a(o,l,c,h){const u=h?1.5:1,f=c.cloud*u,d=Math.cos(l),m=Math.sin(l),_=Math.atan2(-m*cb,d),g=c.jet*u;s.emit({tex:t.flash,ro:10,x:o.x,y:o.y,z:o.z,life:.067,size:f*.7,s0:.8,s1:1.2,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16777215}),s.emit({tex:t.jet,add:!0,x:o.x+d*g*.5,y:o.y,z:o.z+m*g*.5,delay:.016,life:.067,size:g,s0:1,s1:1.1,aspect:.4,a0:1,fadeOut:.4,rot:_,color:16777215}),s.emit({tex:n(),x:o.x,y:o.y,z:o.z,vx:d*.6,vz:m*.6,vy:.3,delay:.033,life:c.life*.8,size:f,s0:.7,s1:1,a0:1,fadeOut:.35,rot:Math.random()*6.28,color:16777215,color2:12896462});for(let p=0;p<4;p++){const M=l+Math.PI*(p/2-.75)+ze(0,.3),x=ut(.8,1.6);s.emit({tex:t.wisp,x:o.x+Math.cos(M)*f*.2,y:o.y+ze(0,f*.15),z:o.z+Math.sin(M)*f*.2,vx:Math.cos(M)*x+d*.5,vz:Math.sin(M)*x+m*.5,vy:.4,delay:.09,life:ze(c.life-.09,.04),size:f*.38,s0:1,s1:.45,a0:.95,fadeOut:.5,rot:Math.random()*6.28,spin:ze(0,3),color:14343650})}for(let p=0;p<6;p++){const M=l+ze(0,.9),x=ut(3,6)*u;s.emit({tex:e.dot,add:!0,x:o.x,y:o.y,z:o.z,vx:Math.cos(M)*x,vz:Math.sin(M)*x,vy:ut(-.5,1.5),life:ut(.12,.3),size:.1*u,a0:1,fadeOut:.4,color:16754746})}}return{hit(o,l){const c=ze(o.x,.12),h=Ua(o)+ut(-.1,.2),u=ze(o.z,.1);if(l?.cid!=="sniper"||l.dash){i(c,h,u,tf);return}s.emit({tex:e.burst,add:!0,x:c,y:h,z:u,life:.05,size:.8,s0:.5,s1:1,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16769136}),s.emit({tex:t.thornRing,add:!0,x:c,y:h,z:u,delay:.05,life:.15,size:.8,s0:.55,s1:.85,a0:1,fadeOut:.6,rot:Math.random()*6.28,spin:2,color:Rr[l.team].spark});const f=Math.random()*6.28,d=ut(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:c,y:h,z:u,vx:Math.cos(f)*d,vz:Math.sin(f)*d,g:2.1,life:ze(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:tf})},wall(o){i(o.x,.5,o.z,hb);for(let l=0;l<3;l++){const c=Math.random()*6.28,h=ut(.8,1.6);s.emit({tex:e.rock,kind:"rock",x:o.x,y:.5,z:o.z,vx:Math.cos(c)*h,vz:Math.sin(c)*h,vy:ut(2.25,4.5),g:-30,bounce:.3,fric:.4,floor:!0,life:ze(.55,.45)+.1,size:.24,s0:.75,s1:.4,a0:1,fadeOut:.3,spin:ut(-12,12),color:Vi.wallSide})}},fizzle(o){const l=o.owner.cid==="tank",c=.5,h=o.isSuper?1.2:1;for(let f=0;f<(l?2:1);f++){const d=l?.5:.3;s.emit({tex:n(),x:ze(o.x,d),y:c,z:ze(o.z,d),vy:.3,life:.48,size:1.1*h,s0:.6,s1:1,a0:.85,fadeOut:.6,rot:Math.random()*6.28,color:ub})}const u=l?3:7;for(let f=0;f<u;f++)s.emit({tex:e.rock,kind:"frag",x:o.x,y:c,z:o.z,vx:ze(0,3),vz:ze(0,3),vy:ut(8,18),g:-105,bounce:.4,fric:.3,floor:!0,life:ze(.6,.3),size:.55,s0:.4,s1:0,a0:1,fadeOut:.2,spin:7,spin1:0,color:12099696})},muzzle(o,l,c,h){if(s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.08,size:c?.8:.48,s0:.7,s1:1.5,a0:.9,fadeOut:.6,rot:Math.random()*6.28,color:o.team==="blue"?6079231:16743034}),o.cid==="sniper"){s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.1,size:c?.9:.5,s0:1,s1:2,a0:1,fadeOut:.5,rot:Math.random()*6.28,color:16773824});for(let u=0;u<7;u++){const f=l+ze(0,.7),d=ut(4,4.8);s.emit({tex:e.twinkle,add:!0,x:h.x,y:h.y,z:h.z,vx:Math.cos(f)*d,vz:Math.sin(f)*d,vy:ut(.5,2),g:-6,life:ze(.525,.225),size:.26,s0:.5,s1:.01,a0:1,fadeOut:.4,spin:6,color:16765040})}for(let u=0;u<5;u++)s.emit({tex:n(),x:ze(h.x,.1),y:h.y,z:ze(h.z,.1),vx:Math.cos(l)*.6,vz:Math.sin(l)*.6,vy:.5,life:ze(1.35,.35),size:.9,s0:.5,s1:.1,a0:.5,fadeOut:.8,rot:Math.random()*6.28,color:15659252});r(o,l,h.x,h.y,h.z,1.4)}else a(h,l,ef[o.cid]||ef.dealer,c),r(o,l,h.x,h.y,h.z)}}}function db(s,e){s.setCap("gas",90),s.setCap("twinkle",60),s.setCap("dust20",60),s.setCap("crack",4),s.setCap("drock",10),s.setCap("ddust",20),s.setCap("ready",66);const t=()=>e.puff[Math.random()*4|0],n=(i,r)=>{const a=ze(0,i),o=Math.random()*6.28;return[Math.sin(a)*r*Math.cos(o),Math.cos(a)*r,Math.sin(a)*r*Math.sin(o)]};return{death(i){const r=Rr[i.team],a=i.x,o=i.z,l=Ua(i);s.emit({tex:e.skull,x:a,y:l+.45,z:o,ro:9,life:.85,size:2.5*1.425,s0:.8,s1:1.1,a0:.95,fadeOut:.45,color:12119295,color2:9427199}),s.emit({tex:e.burst,add:!0,x:a,y:l,z:o,life:.4,size:2*ze(1,.15),s0:.6,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.tint});for(let c=0;c<30;c++){const h=Math.random()*6.28,u=ze(2,1)*1.4;s.emit({tex:t(),kind:"gas",delay:Math.random()*.12,x:ze(a,.25),y:l+ut(-.2,.3),z:ze(o,.25),vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2,drag:4.4,life:ze(.45,.15),size:.7,s0:.8,s1:3.5+ze(0,.8),a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.gas0,color2:r.gas1})}for(let c=0;c<20;c++){const[h,u,f]=n(.35,ze(12,4));s.emit({tex:e.twinkle,add:!0,kind:"twinkle",x:a,y:l+.1,z:o,vx:h,vy:u,vz:f,g:-28,dz:12,bounce:.45,fric:.3,floor:!0,life:ze(.9,.4),size:.5,s0:ze(.7,.3),s1:0,a0:1,fadeOut:.3,spin:ut(-5,5),color:r.spark})}s.emit({tex:e.ring,flat:!0,x:a,y:.4,z:o,vy:7,dz:10,life:1.2,size:4*.35,s0:.7,s1:1.8,a0:.55,fadeOut:.6,color:16777215});for(let c=0;c<20;c++){const[h,u,f]=n(.78,2.5);s.emit({tex:e.smallStar,add:!0,kind:"dust20",delay:Math.random()**2*.35,x:a,y:l+.1,z:o,vx:h,vy:u,vz:f,g:-6,life:ze(.8,.05),size:.3,s0:ze(.9,.2),s1:ze(.9,.2),a0:1,fadeOut:.3,blink:38,spin:ut(-3,3),color:16777215})}},spawn(i,r){const a=Rr[i.team],o=Ua(i);s.emit({tex:e.bubble,add:!0,x:i.x,y:o,z:i.z,life:2,size:2.6,s0:0,s1:1,ease:1,a0:.85,fadeOut:.4,color:a.tint,follow:i,fy:o});const l=s.emit({tex:e.dot,add:!0,x:i.x,y:o,z:i.z,life:3,size:2,s0:1,s1:1,a0:.2,fadeOut:.15,blink:9,color:16777215,follow:i,fy:o});l&&r.set(i,{gen:l.gen,p:l,t:i.lastShot})},ready(i){const r=Ua(i);for(let a=0;a<33;a++){const o=Math.random()*6.28,l=ut(.8,1.5),c=ze(.375,.075),h=r+ut(-.5,.6);s.emit({tex:e.dot,add:!0,kind:"ready",x:i.x+Math.cos(o)*l,y:h,z:i.z+Math.sin(o)*l,vx:-Math.cos(o)*l/c,vz:-Math.sin(o)*l/c,vy:(r-h)/c,life:c,size:.3,s0:.7,s1:.01,a0:1,fadeOut:.2,color:16767050})}},dash(i,r,a){for(a.crack=(a.crack||0)+r*14.3,a.rock=(a.rock||0)+r*18,a.dust=(a.dust||0)+r*45;a.crack>=1;)a.crack--,s.emit({tex:e.crack,flat:!0,kind:"crack",x:i.x,y:.05,z:i.z,life:.7,size:1.3,s0:1,s1:1.05,a0:.8,fadeOut:.5,rot:Math.random()*6.28,color:3811866});for(;a.rock>=1;){a.rock--;const o=Math.random()*6.28,l=ut(.5,2);s.emit({tex:e.rock,kind:"drock",x:ze(i.x,.2),y:.2,z:ze(i.z,.2),vx:Math.cos(o)*l,vz:Math.sin(o)*l,vy:ut(9,22.5),g:-105,bounce:.3,fric:.4,floor:!0,life:ze(.55,.25),size:.26,s0:1,s1:.7,a0:1,fadeOut:.2,spin:ut(-12,12),color:13152392})}for(;a.dust>=1;)a.dust--,s.emit({tex:t(),kind:"ddust",x:ze(i.x,.3),y:.25,z:ze(i.z,.3),vy:.8,life:ze(.35,.15),size:.7,s0:1.5,s1:.01,a0:.9,fadeOut:.3,rot:Math.random()*6.28,color:15128240})}}}const pb={dealer:.3,tank:.3,sniper:.4};function mb(s,{muzzleOf:e=()=>null}={}){const t=XS(),n=KS(s),i=[],r=new I,a=[],o=lb(s,n,t,e,i),l=fb(n,t,o.tex),c=db(n,t);n.setCap("walk",40);const h=new Map,u=new Map,f=new Map;let d=null;const m=new lo(.22,0),_=md(Vi.gem,{emissive:6955184,ei:.6});function g(){a.length=0,n.clear(),o.clear(),u.clear(),f.clear();for(const x of h.values())s.remove(x);h.clear()}const p=x=>{let y=u.get(x);return y||(y={step:0,moved:x.moved,ready:x.superCharge>=1},u.set(x,y)),y};return{onEvent(x){switch(x.type){case"shot":a.push([x.u,x.ang,!1]);break;case"super":x.u.cid!=="tank"&&a.push([x.u,x.ang,!0]);break;case"hit":l.hit(x.u,x.from);break;case"wall":l.wall(x.b);break;case"fizzle":l.fizzle(x.b);break;case"death":c.death(x.u);break;case"spawn":c.spawn(x.u,f);break;case"gem":n.emit({tex:t.dot,add:!0,x:x.u.x,y:.9,z:x.u.z,life:.25,size:1,s0:.5,s1:1.8,a0:.9,fadeOut:1,color:Vi.gemGlow});break}},update(x,y,R){R!==d&&(g(),d=R);for(const[S,E,L]of a.splice(0)){const C=e(S,r)||Id(S,E);l.muzzle(S,E,L,C),i.push({k:"smoke",id:S.id,rig:S.c.rig,x:C.x,y:C.y,z:C.z,t:R.t}),i.length>300&&i.shift()}o.update(x,R);for(const S of R.gems){let E=h.get(S);if(!E){E=new Bt;const L=new $e(m,_);L.castShadow=!0,E.add(L);const C=new Gc(new so({map:t.dot,color:Vi.gemGlow,transparent:!0,depthWrite:!1,opacity:.55}));C.scale.setScalar(1.1),E.add(C),s.add(E),h.set(S,E)}E.position.set(S.x,.45+Math.sin(y*4+S.x)*.08,S.z),E.children[0].rotation.y=y*2.5}for(const[S,E]of h)R.gems.includes(S)||(s.remove(E),h.delete(S));for(const S of R.units){const E=p(S);if(!S.alive){E.moved=S.moved;continue}R.t>0&&R.t<.3&&!E.born&&(E.born=!0,c.spawn(S,f));const L=S.moved-E.moved;E.moved=S.moved,S.dash?c.dash(S,x,E):L/Math.max(x,.001)>S.c.speed*.3&&Hi(R,"blue",S)?(E.step-=x,E.step<=0&&(E.step+=pb[S.cid]??.3,n.emit({tex:t.puff[Math.random()*4|0],kind:"walk",x:S.x,y:.12,z:S.z,g:1.5,life:1.8+(Math.random()-.5)*1.2,size:.7,s0:.5,s1:1,a0:.26,fadeOut:.8,rot:Math.random()*6.28,color:15328464}))):E.step=0,S.superCharge>=1&&!E.ready&&S.team==="blue"&&c.ready(S),E.ready=S.superCharge>=1}for(const[S,E]of f){if(E.p.gen!==E.gen){f.delete(S);continue}(!S.alive||S.lastShot>E.t)&&(E.p.life=Math.min(E.p.life,E.p.t+.15),f.delete(S))}n.update(x)},dispose(){g(),d=null},log:i}}const nf=16,gb=62;function _b(s,e){const t={move:null,atk:null,sup:null,mx:0,mz:0,aim:null,aimKind:null,fire:null,superFire:null,keys:new Set};function n(a,o,l){const c=a.clientX-o,h=a.clientY-l,u=Math.hypot(c,h);return{dx:c,dy:h,d:u}}const i=a=>{const o=a.getBoundingClientRect();return[o.left+o.width/2,o.top+o.height/2]};s.addEventListener("pointerdown",a=>{if(!e.active())return;a.preventDefault();const[o,l]=i(e.atkBtn),[c,h]=i(e.supBtn),u=e.atkBtn.getBoundingClientRect().width*.62,f=e.supBtn.getBoundingClientRect().width*.6;Math.hypot(a.clientX-c,a.clientY-h)<f&&!t.sup?(t.sup={id:a.pointerId,cx:c,cy:h,t0:performance.now(),d:0},e.hold?.("sup",!0)):Math.hypot(a.clientX-o,a.clientY-l)<u&&!t.atk?(t.atk={id:a.pointerId,cx:o,cy:l,t0:performance.now(),d:0},e.hold?.("atk",!0)):a.clientX<innerWidth*.5&&!t.move&&(t.move={id:a.pointerId,cx:a.clientX,cy:a.clientY},e.showStick(a.clientX,a.clientY)),s.setPointerCapture?.(a.pointerId)},{passive:!1}),s.addEventListener("pointermove",a=>{for(const o of["move","atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const{dx:c,dy:h,d:u}=n(a,l.cx,l.cy),f=Math.min(u,gb)/(u||1);if(l.d=Math.max(l.d,u),o==="move"){const d=u||1,m=Math.min(1,u/30);t.mx=c/d*m,t.mz=h/d*m,e.moveStick(c*f,h*f)}else t.aim=u>nf?Math.atan2(h,c):null,t.aimKind=o,e.moveKnob(o,c*f,h*f)}});function r(a){t.move?.id===a.pointerId&&(t.move=null,t.mx=t.mz=0,e.hideStick());for(const o of["atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const c=l.d>nf?t.aim:"auto";o==="atk"?t.fire=c:t.superFire=c,t[o]=null,t.aim=null,t.aimKind=null,e.moveKnob(o,0,0),e.hold?.(o,!1)}}return s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),addEventListener("keydown",a=>{t.keys.add(a.code),a.code==="Space"&&(t.fire="auto"),a.code==="KeyE"&&(t.superFire="auto")}),addEventListener("keyup",a=>t.keys.delete(a.code)),{st:t,move(){const a=t.keys;let o=t.mx,l=t.mz;return(a.has("KeyA")||a.has("ArrowLeft"))&&(o-=1),(a.has("KeyD")||a.has("ArrowRight"))&&(o+=1),(a.has("KeyW")||a.has("ArrowUp"))&&(l-=1),(a.has("KeyS")||a.has("ArrowDown"))&&(l+=1),[o,l]},take(){const a=t.fire,o=t.superFire;return t.fire=null,t.superFire=null,[a,o]}}}const ar=2;function xb(s){const e=[],t=new Map;for(const n of[...s].sort((i,r)=>r.y-i.y)){const i=([l,c])=>!e.some(h=>Math.abs(h.x-l)<(h.w+n.w)/2+ar&&c>h.y-h.h-ar&&c-n.h<h.y+ar),r=n.y,a=[[n.x,r]];for(const l of e){const c=(l.w+n.w)/2+ar;a.push([n.x,l.y-l.h-ar],[l.x-c,r],[l.x+c,r],[l.x-c,l.y],[l.x+c,l.y])}const o=a.filter(i).sort((l,c)=>Math.hypot(l[0]-n.x,l[1]-n.y)-Math.hypot(c[0]-n.x,c[1]-n.y))[0]||[n.x,r];e.push({x:o[0],y:o[1],w:n.w,h:n.h}),t.set(n.key,o)}return t}const Ze=(s,e=document)=>e.querySelector(s),ys=(s,e,t="")=>{const n=document.createElement(s);return e&&(n.className=e),n.innerHTML=t,n};function vb(s,{onOrder:e}={}){const t=ys("div","hud");t.innerHTML=`
    <div class="top"><div class="score blue"><i class="gem"></i><b>0</b></div><div class="timer">2:00</div><div class="score red"><b>0</b><i class="gem"></i></div></div>
    <div class="league"></div>
    <div class="banner"></div>
    <div class="bars"></div><div class="nums"></div>
    <div class="stick"><div class="knob"></div></div>
    <div class="btn sup"><div class="fill"></div><div class="knob"><svg viewBox="0 0 24 24"><path fill="#2a2140" d="M12 2C6.8 2 3 5.6 3 10.4c0 2.9 1.4 4.9 3.3 6.1V20a1 1 0 0 0 1 1h2v-2.2h1.4V21h2.6v-2.2h1.4V21h2a1 1 0 0 0 1-1v-3.5c1.9-1.2 3.3-3.2 3.3-6.1C21 5.6 17.2 2 12 2z"/><circle cx="8.6" cy="11" r="2.4" fill="#fff"/><circle cx="15.4" cy="11" r="2.4" fill="#fff"/><path fill="#fff" d="M12 13.6l1.3 2.4h-2.6z"/></svg></div></div>
    <div class="btn atk"><div class="knob"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><circle cx="12" cy="12" r="7"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/></svg></div></div>
    <div class="respawn"></div>
    <div class="streak"></div>
    <div class="orders">${sp.map(l=>`<button data-o="${l}">${rp[l]}</button>`).join("")}</div>`,s.appendChild(t);let n=null;t.querySelectorAll(".orders button").forEach(l=>l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),o.setOrder(n===l.dataset.o?null:l.dataset.o),e?.(n)}));const i=new Map,r=new Map;let a=!1;const o={hud:t,atkBtn:Ze(".atk",t),supBtn:Ze(".sup",t),active:()=>a,show(l){a=l,t.classList.toggle("on",l)},showStick(l,c){const h=Ze(".stick",t);h.style.left=l+"px",h.style.top=c+"px",h.classList.add("on")},moveStick(l,c){Ze(".stick .knob",t).style.transform=`translate(${l}px,${c}px)`},hideStick(){const l=Ze(".stick",t);l.classList.remove("on"),l.style.left=l.style.top="",o.moveStick(0,0)},moveKnob(l,c,h){Ze(`.${l} .knob`,t).style.transform=`translate(${c}px,${h}px)`},hold(l,c){Ze(`.btn.${l}`,t).classList.toggle("held",c)},setLeague(l){const c=Ze(".league",t);c.textContent=l,c.style.opacity="",clearTimeout(o._lg),o._lg=setTimeout(()=>{c.style.opacity="0"},3e3)},update(l,c,h,u){const f=l.units.reduce((y,R)=>y+(R.team==="blue"&&R.alive?R.gems:0),0),d=l.units.reduce((y,R)=>y+(R.team==="red"&&R.alive?R.gems:0),0);Ze(".score.blue b",t).textContent=f,Ze(".score.red b",t).textContent=d;const m=Math.max(0,Math.ceil(gf.time-l.t));Ze(".timer",t).textContent=`${Math.floor(m/60)}:${String(m%60).padStart(2,"0")}`;const _=Ze(".banner",t);l.countdown?(_.className=`banner on ${l.countdown.team}`,_.innerHTML=`<small>${l.countdown.team==="blue"?"우리 팀":"상대 팀"} 승리까지</small><b>${Math.ceil(l.countdown.left)}</b>`):_.className="banner";const g=o.supBtn;g.classList.toggle("ready",c.superCharge>=1),Ze(".fill",g).style.setProperty("--p",`${Math.round(c.superCharge*100)}%`);const p=Ze(".respawn",t);c.alive?p.classList.remove("on"):(p.classList.add("on"),p.innerHTML=`다시 나가기까지 <b>${Math.ceil(c.respawnT)}</b>`);const M=[];for(const y of l.units){let R=i.get(y);R||(R=ys("div",`bar ${y.isPlayer?"me":y.team}`,`<div class="gems"><i class="gem"></i><b></b></div><div class="nm">${y.name}</div>${y.gen!=null&&!y.isPlayer?`<div class="gen">세대 ${y.gen.toLocaleString()}</div>`:""}<div class="hp"><div class="v"></div><span></span></div>${y.isPlayer?'<div class="ammo"><i></i><i></i><i></i></div>':""}`),Ze(".bars",t).appendChild(R),i.set(y,R));const S=y.alive&&u(y);if(R.style.display=S?"":"none",!S)continue;const[E,L]=h(y.x,pS(y.c),y.z);R._x=E,R._y=L,M.push(R),Ze(".v",R).style.width=`${y.hp/y.maxHp*100}%`,Ze("span",R).textContent=Math.ceil(y.hp);const C=Ze(".gems",R);C.style.display=y.gems?"":"none",Ze(".gems b",R).textContent=y.gems,y.isPlayer&&Ze(".ammo",R).querySelectorAll("i").forEach((v,b)=>v.style.setProperty("--f",Math.max(0,Math.min(1,y.ammo-b))))}const x=xb(M.map(y=>({key:y,x:y._x,y:y._y,w:y.offsetWidth,h:y.offsetHeight})));for(const y of M){const[R,S]=x.get(y),E=y._sy==null||Math.hypot(y._sx-R,y._sy-S)>80;y._sx=E?R:y._sx+(R-y._sx)*.5,y._sy=E?S:y._sy+(S-y._sy)*.5,y.style.transform=`translate(${y._sx}px,${y._sy}px) translate(-50%,-100%)`}},damage(l,c,h,u,f){const d=performance.now(),m=f&&r.get(f);if(m&&d-m.t<350&&m.d.isConnected){m.n+=h,m.t=d,m.d.textContent=String(m.n),m.d.style.left=l+"px",m.d.style.top=c+"px",m.d.style.animation="none",m.d.offsetWidth,m.d.style.animation="",clearTimeout(m.k),m.k=setTimeout(()=>m.d.remove(),800);return}const _=ys("div",`num ${u?"mine":""}`,String(h));_.style.left=l+"px",_.style.top=c+"px",Ze(".nums",t).appendChild(_);const g={d:_,n:h,t:d,k:setTimeout(()=>_.remove(),800)};f&&r.set(f,g)},heal(l,c,h){const u=ys("div","num heal","+"+h);u.style.left=l+"px",u.style.top=c+"px",Ze(".nums",t).appendChild(u),setTimeout(()=>u.remove(),800)},setOrder(l){n=l,t.querySelectorAll(".orders button").forEach(c=>c.classList.toggle("on",c.dataset.o===l))},showOrders(l){Ze(".orders",t).style.display=l?"":"none"},setStreak(l,c){const h=Ze(".streak",t);h.style.display=l>0?"":"none",h.innerHTML=l>0?`<b>${l}</b>연승${c>0?`<em>상대 +${c}</em>`:""}`:""},reset(){i.forEach(l=>l.remove()),i.clear(),r.clear()}};return o}function yb(s,{trophies:e,tierName:t,streak:n=0,mode:i,duelTier:r,onPick:a,onStart:o,onMode:l,onTier:c}){const h={hp:5e3,range:10,dps:1700},u=g=>{const p=g.attack;return(p.kind==="burst"?p.n*p.dmg:p.kind==="spread"?p.n*p.dmg*.6:p.dmg*.8)/g.reload},f=ys("div","select");f.innerHTML=`<div class="head"><div class="tro"><i class="cup"></i><b>${e}</b></div><div class="lg">연습 리그 · ${t}${n>0?` · ${n}연승`:""}</div></div>
    <div class="mid"><div class="seg modes"><button data-m="3v3">3대3</button><button data-m="1v1">1대1</button><button data-m="quick">빠른 대전</button><button data-m="friend">친구</button></div>
      <div class="seg tiers">${Lr.map((g,p)=>`<button data-t="${p}">${g.name}</button>`).join("")}</div></div>
    <div class="cards">${bs.map(g=>{const p=Za[g];return`<button class="card" data-id="${g}"><div class="nm">${p.name}</div><div class="role">${p.role}</div>
      <div class="st"><span>체력</span><div class="g"><i style="width:${p.hp/h.hp*100}%"></i></div></div>
      <div class="st"><span>사거리</span><div class="g"><i style="width:${p.attack.range/h.range*100}%"></i></div></div>
      <div class="st"><span>공격</span><div class="g"><i style="width:${Math.min(100,u(p)/h.dps*100)}%"></i></div></div></button>`}).join("")}</div>
    <button class="go">시작</button>`,s.appendChild(f),f.querySelectorAll(".card").forEach(g=>g.addEventListener("click",()=>{_(g.dataset.id),a(g.dataset.id)})),Ze(".go",f).addEventListener("click",()=>o());const d=g=>{f.classList.toggle("duel",g==="1v1"),f.querySelectorAll(".modes button").forEach(p=>p.classList.toggle("on",p.dataset.m===g))},m=g=>f.querySelectorAll(".tiers button").forEach(p=>p.classList.toggle("on",Number(p.dataset.t)===g));f.querySelectorAll(".modes button").forEach(g=>g.addEventListener("click",()=>{d(g.dataset.m),l(g.dataset.m)})),f.querySelectorAll(".tiers button").forEach(g=>g.addEventListener("click",()=>{m(Number(g.dataset.t)),c(Number(g.dataset.t))})),d(i),m(r);function _(g){f.querySelectorAll(".card").forEach(p=>p.classList.toggle("on",p.dataset.id===g))}return{box:f,pick:_,show(g){f.classList.toggle("on",g)},setTrophies(g,p,M=0){Ze(".tro b",f).textContent=g,Ze(".lg",f).textContent=`연습 리그 · ${p}${M>0?` · ${M}연승`:""}`}}}function Mb(s,{onAgain:e,onChange:t}){const n=ys("div","result");return n.innerHTML=`<div class="big"></div><div class="tro"><i class="cup"></i><b></b></div><div class="stats"></div>
    <div class="row"><button class="change">챔피언 바꾸기</button><button class="again">다시 하기</button></div>`,s.appendChild(n),Ze(".again",n).addEventListener("click",e),Ze(".change",n).addEventListener("click",t),{show(i,r){n.classList.toggle("on",i),i&&(n.className=`result on ${r.kind}`,Ze(".big",n).textContent=r.kind==="win"?"승리":r.kind==="lose"?"패배":"무승부",Ze(".tro b",n).textContent=(r.delta>0?"+":"")+r.delta,Ze(".stats",n).innerHTML=`<div><span>처치</span><b>${r.kills}</b></div><div><span>모은 보석</span><b>${r.gems}</b></div><div><span>트로피</span><b>${r.total}</b></div>${r.streak>0?`<div><span>연승</span><b>${r.streak}</b></div>`:""}`)}}}function Sb(s,e){const t=(m,_)=>Number(e.get(m)??_)*Math.PI/180,n=t("ang",0),i=e.has("run")?t("run",0):null,r=Number(e.get("every")??.9),a=e.has("super")?Number(e.get("super")||2):null,o=s.units.find(m=>m.team==="blue"&&m.cid===e.get("lab"))||s.units[0],l={x:s.mine.x,z:s.mine.z},c=e.has("nofoe")?null:s.units.find(m=>m.team==="red"&&m.cid===o.cid);for(const m of s.units)m!==o&&m!==c&&(m.alive=!1,m.respawnT=1e9);if(Object.assign(o,{x:l.x,z:l.z,isPlayer:!0,face:n}),c){const m=l.x+Math.cos(n)*5,_=l.z+Math.sin(n)*5;ap(s,Math.floor(m),Math.floor(_))?(c.alive=!1,c.respawnT=1e9):Object.assign(c,{x:m,z:_,isPlayer:!0,hp:1e9,maxHp:1e9,face:n+Math.PI})}s.mineT=1e9;let h=.4,u=1,f=0,d=null;return{me:o,tick(m){o.ammo=o.c.ammo,i!=null&&(f+=m,f>1.6&&(f=0,u=-u),o.input.mx=Math.cos(i)*u,o.input.mz=Math.sin(i)*u),h-=m,h<=0&&(h+=r,o.input.fire=n),a!=null&&(d=(d??.6)-m,d<=0&&!o.dash&&(d=a,o.superCharge=1,o.input.superFire=n)),c&&(c.hp=c.maxHp,c.input.mx=c.input.mz=0)}}}let ki=null;const Sc=new Map;async function bb(s="./ai/"){try{const e=await fetch(s+"ladder.json");if(!e.ok)return null;ki=await e.json(),await Promise.all(ki.steps.map(async t=>{Sc.has(t.net)||Sc.set(t.net,await(await fetch(s+t.net)).json())}))}catch{ki=null}return ki}function Eb(s){return ki?ki.steps.filter(e=>s>=e.from).pop()??ki.steps[0]:null}function wb(s,e){const t={...Lr[3],name:`세대 ${e.gen.toLocaleString()}`,think:.25,...e.hands},n=hp(Sc.get(e.net));for(const i of s.units)i.isPlayer||(i.tier=t,i.decider=n,i.gen=e.gen);return t}const Tb=new URLSearchParams(location.search).get("api")||"wss://chichibrawl-api.dumbgamelab.com",Ab="https://dumbgamelab.com/play/chichibrawl/",sf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",rf={"no-room":"그런 방이 없어요. 코드를 다시 봐 주세요",full:"자리가 다 찼어요",playing:"지금 판이 돌고 있어요. 끝나면 들어갈 수 있어요",busy:"지금은 판을 열 수 없어요. 잠시 뒤에 다시",off:"서버 점검 중이에요",net:"연결이 끊겼어요"},Rb=`
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
`;function Cb({store:s,getPick:e,onMatch:t,onSnap:n,onDrop:i,onAutoErr:r}){const a=document.createElement("style");a.textContent=Rb,document.head.appendChild(a);const o=document.createElement("div");o.className="friends",document.body.appendChild(o);let l=s.get("pid",null);l||(l=Math.random().toString(36).slice(2,12),s.set("pid",l));let c=s.get("nick",null);c||(c=`냥냥${100+(Math.random()*900|0)}`,s.set("nick",c));let h=null,u=null,f=null,d=!1,m=0,_="",g=0;const p=S=>{h?.readyState===1&&h.send(JSON.stringify(S))};function M(S,E,L=0){g=L,h?.close(),u=S,_="";const C=`${Tb}/v1/rooms/${S}/ws?pid=${l}&name=${encodeURIComponent(c)}&champ=${e()}${E?"&create=1":""}${L?`&exp=${L}`:""}`,v=new WebSocket(C);h=v,v.onmessage=b=>{const N=JSON.parse(b.data);if(N.t==="s")return n(N);if(N.t==="hello"&&(m=0),N.t==="lobby"&&(f=N,!d&&!g&&y()),N.t==="start"&&(d=!0,o.classList.remove("on"),t(N,l)),N.t==="err"){if(g){g=0,u=null,f=null,h?.close(),r?.(N.err);return}_=rf[N.err]||N.err,N.err!=="busy"&&(u=null,f=null),y()}},v.onclose=()=>{if(h!==v)return;if(h=null,u&&m<4){m++,setTimeout(()=>u&&M(u,!1,g),600*m);return}const b=d;if(d&&(d=!1,i()),u){if(u=null,f=null,g&&b){g=0;return}if(g){g=0,r?.("net");return}_=rf.net,y()}}}const x=()=>Array.from({length:4},()=>sf[Math.random()*sf.length|0]).join("");function y(){if(o.classList.add("on"),!u||!f){o.innerHTML=`<div class="pane"><h2>친구 방</h2><button class="x">닫기</button>
        <button class="y make">방 만들기</button>
        <div class="or">친구한테 코드를 받았다면</div>
        <div class="row enter"><input maxlength="4" placeholder="코드" autocomplete="off" autocapitalize="characters"><button class="y join">들어가기</button></div>
        <div class="msg">${_}</div></div>`,o.querySelector(".make").onclick=()=>M(x(),!0);const S=o.querySelector("input");o.querySelector(".join").onclick=()=>{const E=S.value.toUpperCase().replace(/[^A-Z0-9]/g,"");E.length===4?M(E,!1):(_="코드는 네 글자예요",y())}}else{const S=f.host===l,E=C=>{const v=f.players.filter(b=>b.team===C);return[0,1,2].map(b=>{const N=v[b];return N?`<div class="slot${N.pid===l?" me":""}"><span>${N.name}${N.pid===f.host?" <small>방장</small>":""}</span><small>${Za[N.champ]?.name??""}</small></div>`:'<div class="slot empty"><span>빈 자리</span></div>'}).join("")};o.innerHTML=`<div class="pane"><h2>친구 방</h2><button class="x">닫기</button>
        <div class="code"><span>방 코드</span><b>${u}</b><button class="n share">코드 보내기</button></div>
        <div class="teams"><div class="team blue">${E("blue")}</div><div class="team red">${E("red")}</div></div>
        <div class="row"><button class="n swap">팀 바꾸기</button><span style="flex:1"></span>${S?'<button class="y go">시작</button>':'<span class="wait">방장이 시작하면 판이 열려요</span>'}</div>
        <div class="msg">${_}</div></div>`,o.querySelector(".share").onclick=async()=>{const C=`치치 난투 친구 방 코드 ${u}`,v=`${Ab}?room=${u}`;try{navigator.share?await navigator.share({text:C,url:v}):(await navigator.clipboard.writeText(`${C} ${v}`),_="코드를 복사했어요",y())}catch{}},o.querySelector(".swap").onclick=()=>{const C=f.players.find(v=>v.pid===l);p({t:"team",team:C?.team==="blue"?"red":"blue"})};const L=o.querySelector(".go");L&&(L.onclick=()=>p({t:"start"}))}o.querySelector(".x").onclick=()=>R()}function R(){g=0,u=null,f=null,d=!1;const S=h;h=null,S?.close(),o.classList.remove("on")}return{joinAuto(S,E){M(S,!0,E)},isAuto:()=>g>0,open(S){S&&!u&&M(S,!1),y()},back(){d=!1,u&&h&&p({t:"pick",champ:e()}),y()},pick(S){p({t:"pick",champ:S})},send:p,close:R,inRoom:()=>!!u,state:()=>({pid:l,code:u,lob:f,playing:d})}}const Pb=new URLSearchParams(location.search).get("api")||"wss://chichibrawl-api.dumbgamelab.com",fl={off:"서버 점검 중이에요",busy:"지금은 판을 열 수 없어요. 잠시 뒤에 다시",net:"연결이 끊겼어요. 다시 눌러 주세요",playing:"판이 이미 시작됐어요. 다시 눌러 주세요",full:"자리가 다 찼어요. 다시 눌러 주세요"};function Lb({store:s,getPick:e,join:t}){const n=document.createElement("style");n.textContent=".qbar { height: 14px; border-radius: 7px; border: 3px solid var(--ink); background: #2b2140; overflow: hidden; margin-top: 4px; } .qbar i { display: block; height: 100%; background: linear-gradient(#ffe46a, #f5b51d); }",document.head.appendChild(n);const i=document.createElement("div");i.className="friends",document.body.appendChild(i);let r=null,a=null,o="",l=null,c=0,h=!1;const u=()=>{let g=s.get("pid",null);return g||(g=Math.random().toString(36).slice(2,12),s.set("pid",g)),g},f=()=>{let g=s.get("nick",null);return g||(g=`냥냥${100+(Math.random()*900|0)}`,s.set("nick",g)),g};function d(){i.classList.add("on");const g=a?.n??1,p=a?.max??6,M=Math.max(0,(a?.left??8e3)-(Date.now()-c)),x=a?.waitMs??8e3,y=o?`<div class="msg">${o}</div><div class="row" style="margin-top:12px"><button class="y again">다시 찾기</button></div>`:h?'<div class="wait">곧 시작해요</div>':`<div class="code"><b>${g}</b><span>/ ${p}명 모였어요</span></div><div class="qbar"><i style="width:${Math.round((1-M/x)*100)}%"></i></div>`;i.innerHTML=`<div class="pane"><h2>빠른 대전</h2><button class="x">닫기</button>${y}</div>`,i.querySelector(".x").onclick=()=>_();const R=i.querySelector(".again");R&&(R.onclick=()=>m())}function m(){_(!0),o="",h=!1,a=null,c=Date.now(),d();const g=new WebSocket(`${Pb}/v1/quick/ws?pid=${u()}&name=${encodeURIComponent(f())}&champ=${e()}`);r=g,g.onmessage=p=>{const M=JSON.parse(p.data);M.t==="queue"&&(a=M,c=Date.now(),d()),M.t==="match"&&(h=!0,d(),t(M.code,M.n),g.close()),M.t==="err"&&(o=fl[M.err]||M.err,d())},g.onclose=()=>{r===g&&(r=null,!h&&!o&&(o=fl.net,d()))},clearInterval(l),l=setInterval(()=>{i.classList.contains("on")&&!h&&!o&&d()},250)}function _(g){clearInterval(l);const p=r;r=null;try{p?.send(JSON.stringify({t:"cancel"}))}catch{}p?.close(),g||i.classList.remove("on")}return{open:m,close:()=>{_(),h=!1},done(){clearInterval(l),i.classList.remove("on")},fail(g){h=!1,o=fl[g]||g,d()},active:()=>i.classList.contains("on")}}const Tn=1080,dl=1350,Dd="dumbgamelab.com/play/chichibrawl";function af({name:s,gen:e,kills:t,gems:n,trophies:i,date:r}){const a=document.createElement("canvas");a.width=Tn,a.height=dl;const o=a.getContext("2d"),l=f=>`${f}px 'ONE Mobile POP', 'Apple SD Gothic Neo', sans-serif`,c=o.createLinearGradient(0,0,0,dl);c.addColorStop(0,"#4b3d6a"),c.addColorStop(1,"#1d1530"),o.fillStyle=c,o.fillRect(0,0,Tn,dl),o.fillStyle="rgba(255,210,58,0.10)";for(let f=0;f<14;f++)o.beginPath(),o.moveTo(Tn/2,470),o.arc(Tn/2,470,900,f*Math.PI/7,f*Math.PI/7+Math.PI/14),o.fill();const h=(f,d,m,_,g,p="center")=>{o.font=l(_),o.textAlign=p,o.lineJoin="round",o.lineWidth=_*.16,o.strokeStyle="#1d1530",o.strokeText(f,d,m),o.fillStyle=g,o.fillText(f,d,m)};h("치치 난투",Tn/2,150,64,"#ffffff"),h("AI를 이겼다",Tn/2,420,150,"#ffd23a"),h(`학습 AI · 세대 ${e.toLocaleString()}`,Tn/2,540,54,"#9fdcff");const u=(f,d,m)=>{o.fillStyle="rgba(29,21,48,0.75)",o.strokeStyle="#1d1530",o.lineWidth=8,o.beginPath(),o.roundRect(f,680,300,230,36),o.fill(),o.stroke(),h(d,f+150,760,44,"#ffffff"),h(String(m),f+150,870,96,"#ffffff")};return u(60,"처치",t),u(390,"보석",n),u(720,"트로피",i),h(s,Tn/2,1060,80,"#5cff6a"),h(r,Tn/2,1140,40,"rgba(255,255,255,0.75)"),h(Dd,Tn/2,1270,40,"#ffffff"),a}function Ib(s,{getName:e}){const t=document.createElement("button");t.className="beatcard",t.textContent="AI 이긴 인증 카드",t.style.cssText="display:none;background:linear-gradient(#9fdcff,#38a3ff)",s.appendChild(t);let n=null;return t.onclick=async()=>{if(!n)return;const i=af({...n,name:e(),date:new Date().toLocaleDateString("ko-KR")}),r=await new Promise(l=>i.toBlob(l,"image/png")),a=new File([r],"chichibrawl-beat-ai.png",{type:"image/png"});try{if(navigator.canShare?.({files:[a]})){await navigator.share({files:[a],text:`치치 난투 학습 AI(세대 ${n.gen.toLocaleString()})를 이겼다 https://${Dd}/`});return}}catch{return}const o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=a.name,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),2e3)},{show(i,r){n=i?r:null,t.style.display=i?"":"none"},draw:af}}const Ni={kill:3,streak:2,super:1.5,superKill:3,comeback:6,death:-1.5,quiet:.2},Nd=new URLSearchParams(typeof location>"u"?"":location.search),of=7,Db=10,lf=3,cf=640,pl=30,Nb=Number(Nd.get("hlbps")||18e5),ml=Nd.has("hlcopy");function Ub(){if(typeof MediaRecorder>"u")return null;for(const s of["video/mp4;codecs=avc1","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"])if(MediaRecorder.isTypeSupported?.(s))return s;return null}function hf(s){let e=0,t=-99,n=0;for(const i of s)i.type==="kill"?(n=i.t-t<4?n+1:1,t=i.t,e+=Ni.kill+(n>=2?Ni.streak:0)+(i.super?Ni.superKill:0)):i.type==="super"?e+=Ni.super:i.type==="comeback"?e+=Ni.comeback:i.type==="died"&&(e+=Ni.death);return e}function Ob(s){const e=s.filter(t=>t.type==="kill").length;return s.some(t=>t.type==="comeback")?"막판 역전":e>=3?`${e}연속 처치`:e===2?"두 번 연속 처치":s.some(t=>t.type==="kill"&&t.super)?"궁으로 처치":e===1?"처치":s.some(t=>t.type==="super")?"궁 적중":"이번 판 한 장면"}function Fb(s,{now:e=()=>performance.now()/1e3}={}){const t=Ub(),n=()=>Math.round(cf*s.height/s.width/2)*2,i=document.createElement("canvas"),r=i.getContext("2d");let a=null,o=null,l=[],c=null,h=!1,u=[],f=0;const d={supported:!!t&&!!i.captureStream,mime:t,start(){d.supported&&(d.stop(),l=[],u=[],h=!0,ml&&(i.width=cf,i.height=n(),r.drawImage(s,0,0,i.width,i.height)),o=ml?i.captureStream(pl):s.captureStream(pl),_())},frame(){if(!h)return;const x=e();x-f<1/pl||(f=x,ml&&r.drawImage(s,0,0,i.width,i.height),c&&x-c.t0>=of&&(!(c.evs.some(R=>R.type==="kill"||R.type==="comeback")&&x-c.lastBig<2)||x-c.t0>=Db)&&M())},note(x,y){if(!h||!c)return;const R={type:x,t:e(),...y};c.evs.push(R),u.push(R),(x==="kill"||x==="comeback")&&(c.lastBig=R.t)},async finish(){if(!h)return null;h=!1,await p(),m();const x=l.filter(S=>S.blob&&S.blob.size>2e3);if(l=[],!x.length)return null;for(const S of x)S.score=hf(S.evs)+Ni.quiet*Math.min(S.dur,of);const y=x.reduce((S,E)=>E.score>S.score?E:S),R=y.evs.filter(S=>S.type==="super"||S.type==="kill"&&S.super).map(S=>+(S.t-y.t0).toFixed(2));return{url:URL.createObjectURL(y.blob),blob:y.blob,mime:y.mime,score:y.score,reason:Ob(y.evs),dur:y.dur,slow:R,evs:y.evs.map(S=>({type:S.type,at:+(S.t-y.t0).toFixed(2)})),all:x.map(S=>({score:+S.score.toFixed(1),dur:+S.dur.toFixed(1),kb:Math.round(S.blob.size/1024)}))}},stop(){h=!1;try{a?.state!=="inactive"&&a?.stop()}catch{}a=null,c=null,m(),l=[]}};function m(){o?.getTracks().forEach(x=>x.stop()),o=null}function _(){const x={t0:e(),evs:[],chunks:[],blob:null,mime:t,dur:0,lastBig:-99},y=new MediaRecorder(o,{mimeType:t,videoBitsPerSecond:Nb});y.ondataavailable=R=>{R.data?.size&&x.chunks.push(R.data)},x.done=new Promise(R=>{y.onstop=()=>{x.dur=e()-x.t0,x.blob=new Blob(x.chunks,{type:t.split(";")[0]}),x.chunks=[],R()}}),y.start(),a=y,c=x}function g(){const x=l.filter(E=>E.blob);if(x.length<=lf+1)return;const y=x[x.length-1],R=x.slice(0,-1).map(E=>({g:E,s:hf(E.evs)})).sort((E,L)=>L.s-E.s),S=new Set([y,...R.slice(0,lf).map(E=>E.g)]);l=l.filter(E=>!E.blob||S.has(E))}async function p(){if(!c)return;const x=c;c=null,l.push(x);try{a.state!=="inactive"&&a.stop()}catch{}await x.done}function M(){const x=c;l.push(x);const y=a;try{y.stop()}catch{}x.done.then(g),h&&_()}return d}function kb(s,{getName:e,playUrl:t="dumbgamelab.com/play/chichibrawl"}){const n=document.createElement("button");n.className="hl",n.textContent="하이라이트",n.style.cssText="display:none;background:linear-gradient(#ffb0d6,#f0609c)",s.appendChild(n);const i=document.createElement("div");i.className="hlview",i.innerHTML='<div class="hlbox"><video playsinline muted loop></video><div class="hlwhy"></div><div class="hlrow"><button class="hlshare">공유</button><button class="hlclose">닫기</button></div></div>',document.body.appendChild(i);const r=i.querySelector("video"),a=i.querySelector(".hlwhy");let o=null,l=0;const c=()=>{if(!o)return;const u=r.currentTime;r.playbackRate=o.slow.some(f=>u>=f-.3&&u<=f+1.4)?.35:1,l=requestAnimationFrame(c)},h=()=>{i.classList.remove("on"),r.pause(),cancelAnimationFrame(l)};return n.onclick=()=>{o&&(r.src=o.url,a.textContent=o.reason,i.classList.add("on"),r.currentTime=0,r.play().catch(()=>{}),cancelAnimationFrame(l),c())},i.querySelector(".hlclose").onclick=h,i.querySelector(".hlshare").onclick=async()=>{if(!o)return;const u=o.blob.type.includes("mp4")?"mp4":"webm",f=new File([o.blob],`chichibrawl-highlight.${u}`,{type:o.blob.type}),d=`치치 난투 ${o.reason} https://${t}/`;try{if(navigator.canShare?.({files:[f]})){await navigator.share({files:[f],text:d});return}const _=window.Capacitor?.Plugins;if(_?.Share&&_?.Filesystem){const g=await new Promise(M=>{const x=new FileReader;x.onload=()=>M(String(x.result).split(",")[1]),x.readAsDataURL(o.blob)}),{uri:p}=await _.Filesystem.writeFile({path:f.name,data:g,directory:"CACHE"});await _.Share.share({title:"치치 난투",text:d,files:[p],dialogTitle:"하이라이트 공유"});return}}catch{return}const m=document.createElement("a");m.href=o.url,m.download=f.name,m.click()},{btn:n,show(u){h(),o?.url&&o!==u&&URL.revokeObjectURL(o.url),o=u,n.style.display=u?"":"none"}}}const Bb=2;function zb(s,e,t,n){const i=s.H,r=e.humans.find(C=>C.pid===t),a=r.team==="red",o=C=>!a||!C?C:C==="blue"?"red":C==="red"?"blue":C,l=C=>a?i-C:C,c=C=>a?-C:C,h=C=>a?-C:C,u=new Map;for(const[C,v,b]of e.ids)u.set(C,s.units.filter(N=>N.team===o(v))[b]);const f=u.get(r.id);for(const C of s.units)C.isPlayer=C===f,C.net=null;let d=0,m=0,_=[],g=null,p=null,M=0;const x=[],y=[];let R=new Map,S=new Map;function E(C,v,b,N){const D=Math.hypot(v,b);D>1&&(v/=D,b/=D);const F=C.slowT>0?Math.max(.3,C.c.speed-350/300):C.c.speed;return op(s,C,v*F*N,b*F*N)}function L(C){const v={type:C.y,u:u.get(C.u),from:u.get(C.f)};if(C.a!=null&&(v.ang=c(C.a)),C.d!=null&&(v.dmg=C.d),C.n!=null&&(v.n=C.n),C.b){const b=u.get(C.b[2]);v.b={x:C.b[0],z:l(C.b[1]),owner:b,team:b?.team,isSuper:!!C.b[3],vx:C.b[4],vz:h(C.b[5])}}return C.i!=null&&(v.i=C.i,v.j=a?i-1-C.j:C.j,v.kind=C.k,C.y==="destroy"&&(s.map[v.j][v.i]=".")),C.tm&&(v.team=o(C.tm)),C.w&&(v.winner=o(C.w)),C.gm!=null&&(v.gems=C.gm),v}return{me:f,flip:a,snap(C){M=0,s.t=C.now,s.over=C.over,s.winner=C.win?o(C.win):null,s.countdown=C.cd?{team:o(C.cd[0]),left:C.cd[1]}:null,m=C.ack?.[f.id]??m;for(const N of C.u){const D=u.get(N[0]);if(!D)continue;const[,F,X,B,q,V,he,re,le,Ue,ke,Y,ne,fe,oe,be,Oe]=N,Be=!D.alive&&le;Object.assign(D,{hp:q,ammo:V,superCharge:he,gems:re,alive:!!le,respawnT:Ue,kills:Y,lastShot:ne,revealT:fe,slowT:Oe?1:0}),D.dash=ke?D.dash||{net:!0}:null,D.net={x:F,z:l(X),vx:oe,vz:h(be)},(D!==f||D.dash||!D.alive||Be)&&(D.face=c(B)),(Be||Math.hypot(D.x-D.net.x,D.z-D.net.z)>3)&&(D.x=D.net.x,D.z=D.net.z)}for(;x.length&&x[0][0]<=m;)x.shift();if(f.alive&&!f.dash){const N=f.x,D=f.z;f.x=f.net.x,f.z=f.net.z;for(const[,B,q]of x)E(f,B,q,1/60);const F=f.x-N,X=f.z-D;Math.hypot(F,X)<.6?(f.x=N,f.z=D,f.fix={x:F,z:X}):f.fix=null}const v=new Map;for(const[N,D,F,X,B,q,V,he,re,le]of C.b){let Ue=R.get(N);if(!Ue){const ke=u.get(D);if(!ke)continue;Ue={id:N,owner:ke,team:ke.team,isSuper:!!he,size:re,range:le,hit:new Set,kind:(he?ke.c.super:ke.c.attack).kind}}Object.assign(Ue,{x:F,z:l(X),vx:B,vz:h(q),went:V,ang:Math.atan2(h(q),B)}),v.set(N,Ue)}R=v,s.bullets=[...v.values()];const b=new Map;for(const[N,D,F]of C.g){const X=S.get(N)||{id:N,vx:0,vz:0,age:1};X.x=D,X.z=l(F),b.set(N,X)}S=b,s.gems=[...b.values()];for(const N of C.e)y.push(L(N))},tick(C,v,b,N,D){if(M+=C,s.over)return;s.t+=C;const F=++d;if(f.alive&&!f.dash){const q=f.x,V=f.z;if(f.moved+=E(f,v,b,C),f.fix){const re=Math.min(1,C*12),le=f.fix.x*re,Ue=f.fix.z*re;f.x+=le,f.z+=Ue,f.fix.x-=le,f.fix.z-=Ue,Math.hypot(f.fix.x,f.fix.z)<.01&&(f.fix=null)}Math.hypot(v,b)>.1&&s.t-f.lastShot>.35&&(f.face=Math.atan2(b,v)),f.vx=(f.x-q)/C,f.vz=(f.z-V)/C,x.push([F,v,b])}N!=null&&(g=N),D!=null&&(p=D),_.push([F,v,h(b)]),_.length>=Bb&&(n({t:"in",i:_,f:g==null?null:c(g),sf:p==null?null:c(p)}),_=[],g=null,p=null);const X=Math.min(M,.25),B=Math.min(1,C*14);for(const q of s.units){if(!q.net||q===f&&f.alive&&!f.dash)continue;const V=q.net.x+q.net.vx*X,he=q.net.z+q.net.vz*X,re=q.x,le=q.z;q.x+=(V-q.x)*B,q.z+=(he-q.z)*B,q.vx=q.net.vx,q.vz=q.net.vz,q.moved+=Math.hypot(q.x-re,q.z-le)}for(const q of s.bullets)q.x+=q.vx*C,q.z+=q.vz*C,q.went=Math.min(q.range,q.went+Math.hypot(q.vx,q.vz)*C)},drain(){return y.splice(0)},stats:()=>({seq:d,ack:m,pending:x.length})}}function Hb(s,e){const t=s.humans.find(i=>i.pid===e)?.team==="red",n=i=>t?{blue:i.red,red:i.blue}:i;return{picks:n(s.picks),names:n(s.names),flip:t}}const Vb=new URLSearchParams(location.search),zs=Vb.has("ht"),Ud="https://chichibrawl-ht.dumbgamelab.com",uf="chichibrawl.htpid",Od="chichibrawl.htn",Fd=()=>{try{let s=localStorage.getItem(uf);return s||(s=crypto.randomUUID().replace(/-/g,"").slice(0,16),localStorage.setItem(uf,s)),s}catch{return"anon"}},bc=()=>{try{return Number(localStorage.getItem(Od))||0}catch{return 0}};function Gb(s){const e=bc();return e>=10?`공정 모드 · 10판 끝 · ${s}`:`공정 모드 ${e+1}/10 · ${s}`}function Wb(s,{kills:e=0,gen:t=0}={}){try{localStorage.setItem(Od,String(bc()+1))}catch{}try{fetch(`${Ud}/v1/result`,{method:"POST",keepalive:!0,headers:{"content-type":"application/json"},body:JSON.stringify({pid:Fd(),kind:s,kills:e,gen:t,n:bc(),ua:/Mobi|Android/i.test(navigator.userAgent)?"m":"d"})}).catch(()=>{})}catch{}}function Xb(s,e){const t={v:1,src:"human",seed:s,champ:e,hz:10,s:[],ev:[],en:[]},n=a=>Math.round(a*100)/100;let i=-1,r=-1;return{tick(a,o){if(a.t-i<.1||t.s.length>=1500)return;i=a.t,t.s.push([n(a.t),n(o.x),n(o.z),o.alive?1:0,Math.round(o.hp/o.maxHp*100)]);const l=a.units.find(c=>c.team!==o.team);l&&a.t-r>=.5&&(r=a.t,t.en.push([n(a.t),n(l.x),n(l.z),l.alive?1:0]))},ev(a,o,l){if(t.ev.length>=600)return;const c=n(o.t);(a.type==="shot"||a.type==="super")&&a.u===l?t.ev.push([c,a.type,n(a.ang)]):a.type==="death"&&a.u===l?t.ev.push([c,"death"]):a.type==="death"&&a.from===l?t.ev.push([c,"kill"]):a.type==="gem"&&a.u===l?t.ev.push([c,"gem"]):a.type==="hit"&&a.u===l&&t.ev.push([c,"hurt"])},done(a,o){return t.end=n(a.t),t.winner=o,t.n=a.units.length,t}}}function qb(s){try{const e=JSON.stringify({pid:Fd(),tr:s});e.length<8e4&&fetch(`${Ud}/v1/trace`,{method:"POST",keepalive:e.length<6e4,headers:{"content-type":"application/json"},body:e}).catch(()=>{})}catch{}}const lt=new URLSearchParams(location.search),kd=lt.get("lab"),Zn=lt.has("auto")||!!kd,sh=lt.has("sprites"),qt={get:(s,e)=>{try{return JSON.parse(localStorage.getItem("chichibrawl."+s))??e}catch{return e}},set:(s,e)=>{try{localStorage.setItem("chichibrawl."+s,JSON.stringify(e))}catch{}}};let hn=lt.has("tro")?Number(lt.get("tro")):qt.get("trophies",0),kt=lt.has("streak")?Number(lt.get("streak")):qt.get("streak",0),Sn=lt.get("champ")||qt.get("pick","dealer");Za[Sn]||(Sn="dealer");let Ms=zs?"3v3":lt.get("mode")||qt.get("mode","3v3"),Ya=Math.min(Lr.length-1,Number(lt.get("tier")??qt.get("duelTier",2)));const Yb=document.getElementById("stage"),tn=new Pv({antialias:!0,preserveDrawingBuffer:Zn});tn.setPixelRatio(lt.has("dpr")?Number(lt.get("dpr")):Math.min(devicePixelRatio||1,2));tn.outputColorSpace=pt;tn.shadowMap.enabled=!0;tn.shadowMap.type=xf;tn.toneMapping=jn;Yb.appendChild(tn.domElement);const bn=new $f;bn.background=new Ee(3111484);const Bd=Math.sin(Yi*Math.PI/180),Kb=Math.cos(Yi*Math.PI/180),un=new Dr(-1,1,1,-1,1,220);bn.userData.cam=un;const Ec=lt.has("view")?Number(lt.get("view")):30;let Bi=Ec;bn.add(new Ay(16777215,10066329,1.55));const Pn=new pd(16777215,1.6);Pn.castShadow=!0;Pn.shadow.mapSize.set(2048,2048);Object.assign(Pn.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:90});Pn.shadow.bias=-6e-4;Pn.shadow.normalBias=.04;Pn.shadow.radius=4;bn.add(Pn,Pn.target);function rh(){tn.setSize(innerWidth,innerHeight);const s=innerWidth/innerHeight;un.left=-Bi/2,un.right=Bi/2,un.top=Bi/s/2,un.bottom=-Bi/s/2,un.updateProjectionMatrix()}addEventListener("resize",rh);rh();function ff(s){Math.abs(s-Bi)>.001&&(Bi=s,rh())}function df(s,e){un.position.set(s,Bd*80,e+Kb*80),un.lookAt(s,0,e),un.updateMatrixWorld(),Pn.position.set(s+.18*30,30,e-.52*30),Pn.target.position.set(s,0,e)}const gl=new I;function Ka(s,e,t){return gl.set(s,e,t).project(un),[(gl.x+1)/2*innerWidth,(1-gl.y)/2*innerHeight]}const $b=lt.get("look")==="0",jb=ES(tn,bn,un);let _t=null,pf=null,we=null,yi=null,wc=null,Cn=[],Xi=null,me=null,Tc=null,It="load",_l=0,Ss=0,_r=28,xr=10.5;const Dt=vb(document.body,{onOrder:s=>{we&&!_t&&(we.orders={...we.orders,blue:s})}}),ms=_b(tn.domElement,Dt),Cr=yb(document.body,{trophies:hn,tierName:Ja(hn,kt).name,streak:kt,mode:Ms,duelTier:Ya,onPick:s=>{Sn=s,qt.set("pick",s),Hd(),dn.pick(s)},onStart:()=>Ms==="friend"?dn.open():Ms==="quick"?Fr.open():lh(),onMode:s=>{Ms=s,qt.set("mode",s)},onTier:s=>{Ya=s,qt.set("duelTier",s)}}),Or=Mb(document.body,{onAgain:()=>_t?(Or.show(!1),dn.isAuto()?(_t=null,dn.close(),$a(),Fr.open()):dn.back()):lh(),onChange:()=>{_t&&(_t=null,dn.close()),$a()}}),Zb=Ib(document.querySelector(".result .row"),{getName:()=>qt.get("nick","냥냥")}),$n=Fb(tn.domElement),ah=kb(document.querySelector(".result .row"),{getName:()=>qt.get("nick","냥냥")});let Ac=0,Rc=-99;const dn=Cb({store:qt,getPick:()=>Sn,onMatch:(s,e)=>nE(s,e),onSnap:s=>_t?.snap(s),onDrop:()=>{It==="play"&&_t&&(_t=null,$a())},onAutoErr:s=>Fr.fail(s)}),Fr=Lb({store:qt,getPick:()=>Sn,join:(s,e)=>dn.joinAuto(s,e)}),zd=new ft({color:16777215,transparent:!0,opacity:.45,depthWrite:!1,side:ln}),qn=new $e(new xt,zd);qn.visible=!1;qn.renderOrder=2;qn.frustumCulled=!1;bn.add(qn);const Jb=(s,e)=>s.kind==="dash"?"dash":s.passWalls?"pass":e?"super":"shot",fi=.45;function Qb(s,e,t,n){const i=Jb(s,n),r=[];if(s.kind==="spread"){const p=s.range;for(let x=0;x<=24;x++){const y=t+(x/24-.5)*s.arc,R=fi+_o(we,e.x+Math.cos(y)*fi,e.z+Math.sin(y)*fi,y,p-fi,i);r.push(Math.cos(y)*R,Math.sin(y)*R)}const M=[];for(let x=0;x<24;x++)M.push(0,.04,0,r[x*2],.04,r[x*2+1],r[x*2+2],.04,r[x*2+3]);return new xt().setAttribute("position",new rt(M,3))}const a=s.kind==="dash"?s.dist:s.range,o=s.kind==="dash"?1:s.kind==="burst"?.55:.4,l=Math.max(.3,s.kind==="dash"?_o(we,e.x,e.z,t,a,i):fi+_o(we,e.x+Math.cos(t)*fi,e.z+Math.sin(t)*fi,t,a-fi,i)),c=Math.cos(t),h=Math.sin(t),u=-h*o/2,f=c*o/2,d=c*l,m=h*l,_=[u,.04,f,d+u,.04,m+f,d-u,.04,m-f,u,.04,f,d-u,.04,m-f,-u,.04,-f];return new xt().setAttribute("position",new rt(_,3))}function eE(){yi&&(yi.dispose(),yi=null),wc?.dispose(),wc=null;for(const s of Cn)s.dispose();Cn=[],Xi&&Xi.dispose?.(),Dt.reset()}let Pr=null,_i=null;function oh(s,e,t){eE();const n=s.blue.length===1,i=n?Lr[Ya]:Ja(hn,kt),r=(c,h,u)=>c==="blue"&&h===e?"나":Za[u].name,a={blue:s.blue.map((c,h)=>r("blue",h,c)),red:s.red.map((c,h)=>r("red",h,c))};if(we=t?_h({picks:s,player:-1,seed:t.seed,names:t.names}):_h({picks:s,player:e,tier:i,seed:lt.has("seed")?Number(lt.get("seed")):Math.random()*1e9|0,names:a,brains:_i?.brains}),_i)for(const c of we.units)_i.brains[c.team].prep?.(c);if(yi=iS(bn,we),wc=bS(bn,we),Xi=Xi||mb(bn,{muzzleOf:(c,h)=>Cn.find(u=>u.u===c)?.muzzle?.(h)??null}),Cn=we.units.map(c=>(sh?xS:zS)(bn,c)),me=we.units.find(c=>c.isPlayer)||we.units[0],t){Dt.setLeague(dn.isAuto()?"빠른 대전":`친구 방 · ${t.code}`),Dt.showOrders(!1),Dt.setStreak(0,0);return}const o=n||_i?null:Eb(zs?1e9:np(hn,kt)),l=o?wb(we,o):i;Dt.setLeague(zs?Gb(l.name):n?`1대1 연습 · ${i.name}`:`연습 리그 · ${l.name}${kt>0?` · ${kt}연승`:""}`),Dt.setStreak(n?0:kt,tp(kt)),we.orders={blue:null,red:null},Dt.setOrder(null),Dt.showOrders(!n)}function Hd(){if(!we||It!=="select")return;const s=we.spawns.blue;we.units.forEach((e,t)=>{const n=Cn[t];if(e.team!=="blue"){n.root.visible=!1;return}e.x=s[t].x,e.z=s[t].z-1,e.face=Math.PI/2,n.x=e.x,n.z=e.z,e.isPlayer=e.cid===Sn,n.ring.material.opacity=e.isPlayer?.95:.25,e.isPlayer&&(n.pop=0)}),Cr.pick(Sn)}function $a(){$n.stop(),ah.show(null),It="select",Or.show(!1),Dt.show(!1),oh({blue:[...bs],red:[...bs]},-1),Cr.setTrophies(hn,Ja(hn,kt).name,kt),Cr.show(!0),Hd()}function lh(){Cr.show(!1),Or.show(!1);const s=bs.filter(n=>n!==Sn),e=[...bs].sort(()=>Math.random()-.5);_i&&e.splice(0,3,...[...bs].reverse());const t=Ms==="1v1"?{blue:[Sn],red:[e[0]]}:{blue:[Sn,...s],red:e};oh(t,Zn&&!lt.has("me")?-1:0),Zn&&(me=we.units[0]),kd&&(Tc=Sb(we,lt),me=Tc.me),_i&&Qd(_i,(Ms==="1v1"?Lr[Ya]:Ja(hn,kt)).name),Pr=zs&&!_t&&!Zn?Xb(we.seed??0,Sn):null,It="play",Dt.show(!0),_r=me.z,xr=me.x,Vd()}function Vd(){ah.show(null),Ac=0,Rc=-99,(!Zn||lt.has("hl"))&&$n.start()}function tE(s){if(s.type==="super"&&s.u===me&&(Rc=we.t,$n.note("super")),s.type==="death"&&(s.from===me&&s.u.team!==me.team?$n.note("kill",{super:we.t-Rc<2.5}):s.u===me&&$n.note("died")),s.type==="gem"||s.type==="death"){const e=Math.sign(xh(we,me.team)-xh(we,me.team==="blue"?"red":"blue"));e>0&&Ac<0&&we.t>gf.time-25&&$n.note("comeback"),e!==0&&(Ac=e)}}function Gd(){It="result";const s=we.winner==="draw"?"draw":we.winner==="blue"?"win":"lose";let e=we.units.length===2||_t||zs?0:ep[s];hn=Math.max(0,hn+e),qt.set("trophies",hn),we.units.length>2&&!_t&&(kt=ip(kt,s),qt.set("streak",kt)),Dt.show(!1),zs&&!_t&&we.units.length===6&&(Wb(s,{kills:me.kills,gen:we.units.find(n=>n.team==="red"&&n.gen)?.gen}),Pr&&qb(Pr.done(we,s))),Or.show(!0,{kind:s,delta:e,total:hn,streak:kt,kills:me.kills,gems:me.gemsTaken||0}),$n.finish().then(n=>{window.__brawl.clip=n,It==="result"&&ah.show(n)});const t=we.units.find(n=>n.team==="red"&&n.gen)?.gen;Zb.show(s==="win"&&!_t&&!!t&&we.units.length===6,{gen:t,kills:me.kills,gems:me.gemsTaken||0,trophies:hn})}function nE(s,e){if(_t&&pf===s.seed&&It==="play")return;Cr.show(!1),Or.show(!1);const t=Hb(s,e);oh(t.picks,-1,{seed:s.seed,names:t.names,code:s.code}),Fr.done(),_t=zb(we,s,e,dn.send),pf=s.seed,me=_t.me,It="play",Dt.show(!0),_r=me.z,xr=me.x,Vd()}function ba(s,e,t){if(s==null)return null;if(s!=="auto")return s;let n=null,i=1/0;const r=t.kind==="dash"?t.dist+1:(t.range??cp(e))*1.1;for(const a of we.units)if(a.team!==e.team&&Hi(we,e.team,a)){const o=Math.hypot(a.x-e.x,a.z-e.z);o<i&&o<r&&(i=o,n=a)}return n?Math.atan2(n.z-e.z,n.x-e.x):e.face}const zi=1/60;let xl=0,vl=performance.now(),ja=0;function Wd(s){if(It==="play"){if(_t){const[e,t]=me.alive?ms.move():[0,0],[n,i]=ms.take();_t.tick(s,e,t,me.alive?ba(n,me,me.c.attack):null,me.alive?ba(i,me,me.c.super):null)}else if(!Zn&&me.alive){const[e,t]=ms.move();me.input.mx=e,me.input.mz=t;const[n,i]=ms.take();me.input.fire=ba(n,me,me.c.attack),me.input.superFire=ba(i,me,me.c.super)}else ms.take();Tc?.tick(s),_t||lp(we,s),Pr?.tick(we,me);for(const e of _t?_t.drain():we.events){if(Xi.onEvent(e),tE(e),Pr?.ev(e,we,me),e.type==="destroy"&&yi.destroy(e.i,e.j,e.kind),e.type==="wall"&&yi?.hitWall(e.b),(e.type==="super"||e.type==="death")&&window.__brawl.moments.push({t:+ja.toFixed(2),type:e.type,who:e.u.c.name,team:e.u.team,d:me.alive||e.u===me?+Math.hypot(e.u.x-me.x,e.u.z-me.z).toFixed(1):99}),e.type==="hit"){const[t,n]=Ka(e.u.x,e.u.c.height+.3,e.u.z);Hi(we,me.team,e.u)&&Dt.damage(t,n,e.dmg,e.u===me,e.u);const i=Cn.find(r=>r.u===e.u);i&&(i.flash=1,i.onHit?.())}if(e.type==="shot"||e.type==="super"){const t=Cn.find(i=>i.u===e.u);t&&t.onShot();const n=window.__brawl.shots;n.push({id:e.u.id,t:we.t,ang:e.ang}),n.length>400&&n.shift()}if(e.type==="heal"&&e.n>0&&Hi(we,me.team,e.u)){const[t,n]=Ka(e.u.x,e.u.c.height+.3,e.u.z);Dt.heal(t,n,e.n)}e.type==="push"&&Cn.find(t=>t.u===e.u)?.onPush?.(),(e.type==="death"||e.type==="super")&&Hi(we,me.team,e.u)&&Math.hypot(e.u.x-me.x,e.u.z-me.z)<9&&(Ss=Math.max(Ss,e.u===me||e.from===me?.12:.05)),e.type==="gem"&&e.u===me&&(me.gemsTaken=(me.gemsTaken||0)+1),e.type==="end"&&(_l=1.6)}we.events.length=0,we.over&&(_l-=s,_l<=0&&!Zn&&Gd())}}function Xd(s,e){if(!we)return;const t=me?me.team:"blue";for(const i of Cn){const r=i.u,a=It==="select"?r.team==="blue":Hi(we,t,r),o=r.team===t&&we.map[Math.floor(r.z)]?.[Math.floor(r.x)]==="B";It==="select"&&(i.bodyScale=r.isPlayer?1.1:.92),i.update(s,e,a,o?.6:1),It==="select"&&(i.root.visible=r.team==="blue")}if(yi.update(e,we.units,t,we.bullets),Xi.update(s,e,we),It==="select")ff(10*.91/1.05),df(we.W/2,we.spawns.blue[1].z-1.2);else{ff(Ec);const i=Bi/(innerWidth/innerHeight)/2/Bd-.6,r=me.team==="blue"?-1.4:1.4,a=(me.alive?me.z:we.spawns[me.team][me.k].z)+r;_r+=(Math.max(i,Math.min(we.H-i,a))-_r)*Math.min(1,s*5);const o=Ec/2-.4,l=me.alive?me.x:we.spawns[me.team][me.k].x;xr+=((o*2>=we.W?we.W/2:Math.max(o,Math.min(we.W-o,l)))-xr)*Math.min(1,s*5),Ss=Math.max(0,Ss-s);const c=(Math.random()-.5)*Ss*.8,h=(Math.random()-.5)*Ss*.8;df(xr+c,_r+h)}const n=ms.st;if(It==="play"&&me.alive&&n.aimKind&&n.aim!=null){const i=n.aimKind==="sup"?me.c.super:me.c.attack;qn.geometry.dispose(),qn.geometry=Qb(i,me,n.aim,n.aimKind==="sup"),qn.position.set(me.x,.08,me.z),qn.visible=!0,zd.color.setHex(n.aimKind==="sup"?16765498:16777215)}else qn.visible=!1;(It==="play"||It==="result")&&Dt.update(we,me,Ka,i=>Hi(we,t,i)),sh||$b?tn.render(bn,un):jb.render()}const Oa=[];function qd(s){Oa.push(s-vl),Oa.length>600&&Oa.shift();const e=Math.min(.05,(s-vl)/1e3);if(vl=s,!Yd){for(xl+=e;xl>=zi;)Wd(zi),xl-=zi,ja+=zi;Xd(e,s/1e3),$n.frame()}requestAnimationFrame(qd)}let Yd=!1,mf=0;window.__brawl={ready:!1,moments:[],shots:[],hl:$n,clip:null,finish:()=>Gd(),world:()=>yi,project:(s,e,t)=>Ka(s,e,t),actors:()=>Cn,fxLog:()=>Xi?.log??[],setT(s){for(Yd=!0;ja<s;)Wd(zi),ja+=zi;Xd(Math.max(zi,s-mf),s),mf=s},state:()=>we,friends:()=>dn.state(),quick:()=>({active:Fr.active(),auto:dn.isAuto()}),net:()=>_t?.stats()??null,perf(){const s=Oa.slice(30).sort((e,t)=>e-t);return{n:s.length,avg:s.reduce((e,t)=>e+t,0)/s.length,p95:s[Math.floor(s.length*.95)],calls:tn.info.render.calls,tris:tn.info.render.triangles}}};sh?await mS():await FS(["dealer","tank","sniper"]);await UM();await jM();await GM();Zn&&(lt.has("blue")||lt.has("red"))&&(_i=await(await Jd(async()=>{const{loadTestBrains:s}=await import("./ai-v3-C-HvLQxP.js").then(e=>e.t);return{loadTestBrains:s}},__vite__mapDeps([0,1,2]),import.meta.url)).loadTestBrains(lt));await bb();document.querySelector(".loading")?.remove();Zn?lh():(lt.get("screen"),$a());lt.get("room")&&dn.open(lt.get("room").toUpperCase());window.__brawl.ready=!0;requestAnimationFrame(qd);
