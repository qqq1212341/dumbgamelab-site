(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="169",Id=0,th=1,Ld=2,Ju=1,Qu=2,kn=3,qn=0,Gt=1,sn=2,fi=0,gs=1,il=2,nh=3,ih=4,Dd=5,Li=100,Nd=101,Ud=102,Od=103,Fd=104,Bd=200,zd=201,kd=202,Hd=203,sl=204,rl=205,Vd=206,Gd=207,Wd=208,Xd=209,qd=210,Yd=211,Kd=212,jd=213,$d=214,al=0,ol=1,ll=2,ys=3,cl=4,hl=5,ul=6,fl=7,dc=0,Zd=1,Jd=2,Xn=0,Qd=1,ep=2,tp=3,np=4,ip=5,sp=6,rp=7,sh="attached",ap="detached",ef=300,Ms=301,Ss=302,dl=303,pl=304,za=306,bs=1e3,hi=1001,Aa=1002,Lt=1003,tf=1004,Js=1005,Ht=1006,ha=1007,Gn=1008,Yn=1009,nf=1010,sf=1011,cr=1012,pc=1013,Bi=1014,_n=1015,Mr=1016,mc=1017,gc=1018,Es=1020,rf=35902,af=1021,of=1022,on=1023,lf=1024,cf=1025,_s=1026,Ts=1027,_c=1028,xc=1029,hf=1030,vc=1031,yc=1033,ua=33776,fa=33777,da=33778,pa=33779,ml=35840,gl=35841,_l=35842,xl=35843,vl=36196,yl=37492,Ml=37496,Sl=37808,bl=37809,El=37810,Tl=37811,Al=37812,wl=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Nl=37820,Ul=37821,ma=36492,Ol=36494,Fl=36495,uf=36283,Bl=36284,zl=36285,kl=36286,ff=2200,op=2201,lp=2202,hr=2300,ur=2301,io=2302,us=2400,fs=2401,wa=2402,Mc=2500,cp=2501,hp=0,df=1,Hl=2,up=3200,fp=3201,ka=0,dp=1,oi="",dt="srgb",Ct="srgb-linear",Sc="display-p3",Ha="display-p3-linear",Ra="linear",ct="srgb",Ca="rec709",Pa="p3",Xi=7680,rh=519,pp=512,mp=513,gp=514,pf=515,_p=516,xp=517,vp=518,yp=519,Vl=35044,ah="300 es",Wn=2e3,Ia=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const er=Math.PI/180,As=180/Math.PI;function ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function bc(i,e){return(i%e+e)%e}function Mp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sp(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function bp(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function Ep(i,e=1){return e-Math.abs(bc(i,e*2)-e)}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rp(i,e){return i+Math.random()*(e-i)}function Cp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(oh=i);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(i){return i*er}function Lp(i){return i*As}function Dp(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Up(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tn={DEG2RAD:er,RAD2DEG:As,generateUUID:ln,clamp:At,euclideanModulo:bc,mapLinear:Mp,inverseLerp:Sp,lerp:tr,damp:bp,pingpong:Ep,smoothstep:Tp,smootherstep:Ap,randInt:wp,randFloat:Rp,randFloatSpread:Cp,seededRandom:Pp,degToRad:Ip,radToDeg:Lp,isPowerOfTwo:Dp,ceilPowerOfTwo:Np,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Op,normalize:at,denormalize:mn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],y=s[1],x=s[4],M=s[7],P=s[2],E=s[5],S=s[8];return r[0]=a*_+o*y+l*P,r[3]=a*g+o*x+l*E,r[6]=a*m+o*M+l*S,r[1]=c*_+h*y+u*P,r[4]=c*g+h*x+u*E,r[7]=c*m+h*M+u*S,r[2]=d*_+f*y+p*P,r[5]=d*g+f*x+p*E,r[8]=d*m+f*M+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Xe;function mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){const i=fr("canvas");return i.style.display="block",i}const lh={};function ga(i){i in lh||(lh[i]=!0,console.warn(i))}function Bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ch=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hh=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Ct]:{transfer:Ra,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[dt]:{transfer:ct,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:Ra,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hh),fromReference:i=>i.applyMatrix3(ch)},[Sc]:{transfer:ct,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hh),fromReference:i=>i.applyMatrix3(ch).convertLinearToSRGB()}},Hp=new Set([Ct,Ha]),Ze={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Fs[e].toReference,s=Fs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Fs[i].primaries},getTransfer:function(i){return i===oi?Ra:Fs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Fs[e].luminanceCoefficients)}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class Vp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=fr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gp=0;class gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wp=0;class Mt extends Vi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=hi,s=hi,r=Ht,a=Gn,o=on,l=Yn,c=Mt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ln(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=ef;Mt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,P=(m+1)/2,E=(h+d)/4,S=(u+_)/4,R=(p+g)/4;return x>M&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=S/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=S/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xp extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Xp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _f extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qp extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-o;const m=l*d+c*f+h*p+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),E=Math.atan2(P,m*y);g=Math.sin(g*E)/P,o=Math.sin(o*E)/P}const M=o*y;if(l=l*g+d*M,c=c*g+f*M,h=h*g+p*M,u=u*g+_*M,g===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new I,uh=new Ft;class Rn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Rr.subVectors(this.max,Bs),Yi.subVectors(e.a,Bs),Ki.subVectors(e.b,Bs),ji.subVectors(e.c,Bs),Zn.subVectors(Ki,Yi),Jn.subVectors(ji,Ki),bi.subVectors(Yi,ji);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-bi.z,bi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,bi.z,0,-bi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-bi.y,bi.x,0];return!lo(t,Yi,Ki,ji,Rr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Yi,Ki,ji,Rr))?!1:(Cr.crossVectors(Zn,Jn),t=[Cr.x,Cr.y,Cr.z],lo(t,Yi,Ki,ji,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,wr=new Rn,Yi=new I,Ki=new I,ji=new I,Zn=new I,Jn=new I,bi=new I,Bs=new I,Rr=new I,Cr=new I,Ei=new I;function lo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);const o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yp=new Rn,zs=new I,co=new I;class Cn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(co)),this.expandByPoint(zs.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,ho=new I,Pr=new I,Qn=new I,uo=new I,Ir=new I,fo=new I;class Va{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ho.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=Qn.dot(this.direction),l=-Qn.dot(Pr),c=Qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ho).addScaledVector(Pr,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){uo.subVectors(t,e),Ir.subVectors(n,e),fo.crossVectors(uo,Ir);let a=this.direction.dot(fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(Ir.crossVectors(Qn,Ir));if(l<0)return null;const c=o*this.direction.dot(uo.cross(Qn));if(c<0||l+c>a)return null;const h=-o*Qn.dot(fo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,p,_,g){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,_,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,jp)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ei.crossVectors(n,qt),ei.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ei.crossVectors(n,qt)),ei.normalize(),Lr.crossVectors(qt,ei),s[0]=ei.x,s[4]=Lr.x,s[8]=qt.x,s[1]=ei.y,s[5]=Lr.y,s[9]=qt.y,s[2]=ei.z,s[6]=Lr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],x=n[7],M=n[11],P=n[15],E=s[0],S=s[4],R=s[8],L=s[12],v=s[1],T=s[5],O=s[9],D=s[13],k=s[2],B=s[6],U=s[10],K=s[14],W=s[3],fe=s[7],oe=s[11],he=s[15];return r[0]=a*E+o*v+l*k+c*W,r[4]=a*S+o*T+l*B+c*fe,r[8]=a*R+o*O+l*U+c*oe,r[12]=a*L+o*D+l*K+c*he,r[1]=h*E+u*v+d*k+f*W,r[5]=h*S+u*T+d*B+f*fe,r[9]=h*R+u*O+d*U+f*oe,r[13]=h*L+u*D+d*K+f*he,r[2]=p*E+_*v+g*k+m*W,r[6]=p*S+_*T+g*B+m*fe,r[10]=p*R+_*O+g*U+m*oe,r[14]=p*L+_*D+g*K+m*he,r[3]=y*E+x*v+M*k+P*W,r[7]=y*S+x*T+M*B+P*fe,r[11]=y*R+x*O+M*U+P*oe,r[15]=y*L+x*D+M*K+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=u*g*c-_*d*c+_*l*f-o*g*f-u*l*m+o*d*m,x=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,M=h*_*c-p*u*c+p*o*f-a*_*f-h*o*m+a*u*m,P=p*u*l-h*_*l-p*o*d+a*_*d+h*o*g-a*u*g,E=t*y+n*x+s*M+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=y*S,e[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*S,e[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*m+n*l*m)*S,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*S,e[4]=x*S,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*S,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*m-t*l*m)*S,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*S,e[8]=M*S,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*S,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*S,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=P*S,e[13]=(h*_*s-p*u*s+p*n*d-t*_*d-h*n*g+t*u*g)*S,e[14]=(p*o*s-a*_*s-p*n*l+t*_*l+a*n*g-t*o*g)*S,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,y=l*c,x=l*h,M=l*u,P=n.x,E=n.y,S=n.z;return s[0]=(1-(_+m))*P,s[1]=(f+M)*P,s[2]=(p-x)*P,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+m))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(p+x)*S,s[9]=(g-y)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Wn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,p;if(o===Wn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Ia)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h;let p,_;if(o===Wn)p=(a+r)*u,_=-2*u;else if(o===Ia)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new I,fn=new De,Kp=new I(0,0,0),jp=new I(1,1,1),ei=new I,Lr=new I,qt=new I,fh=new De,dh=new Ft;class vn{constructor(e=0,t=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const ph=new I,Zi=new Ft,On=new De,Dr=new I,ks=new I,Zp=new I,Jp=new Ft,mh=new I(1,0,0),gh=new I(0,1,0),_h=new I(0,0,1),xh={type:"added"},Qp={type:"removed"},Ji={type:"childadded",child:null},po={type:"childremoved",child:null};class ft extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new vn,n=new Ft,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Xe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ks,Dr,this.up):On.lookAt(Dr,ks,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(On),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,Fn=new I,mo=new I,Bn=new I,Qi=new I,es=new I,vh=new I,go=new I,_o=new I,xo=new I,vo=new tt,yo=new tt,Mo=new tt;class rn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Fn.subVectors(n,t),mo.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Fn),l=dn.dot(mo),c=Fn.dot(Fn),h=Fn.dot(mo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vo.setScalar(0),yo.setScalar(0),Mo.setScalar(0),vo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(yo,r.y),a.addScaledVector(Mo,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Fn.subVectors(e,t),dn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,n),es.subVectors(r,n),go.subVectors(e,n);const l=Qi.dot(go),c=es.dot(go);if(l<=0&&c<=0)return t.copy(n);_o.subVectors(e,s);const h=Qi.dot(_o),u=es.dot(_o);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qi,a);xo.subVectors(e,r);const f=Qi.dot(xo),p=es.dot(xo);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(es,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return vh.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(vh,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Qi,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=bc(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=So(a,r,e+1/3),this.g=So(a,r,e),this.b=So(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ze.fromWorkingColorSpace(It.copy(this),e),Math.round(At(It.r*255,0,255))*65536+Math.round(At(It.g*255,0,255))*256+Math.round(At(It.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=dt){Ze.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Nr);const n=tr(ti.h,Nr.h,t),s=tr(ti.s,Nr.s,t),r=tr(ti.l,Nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Se;Se.NAMES=vf;let em=0;class jt extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=gs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ut extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,Ur=new se;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class yf extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mf extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tm=0;const Jt=new De,bo=new ft,ts=new I,Yt=new Rn,Hs=new Rn,Et=new I;class yt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?Mf:yf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Yt.min,Hs.min),Yt.expandByPoint(Et),Et.addVectors(Yt.max,Hs.max),Yt.expandByPoint(Et)):(Yt.expandByPoint(Hs.min),Yt.expandByPoint(Hs.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Et.add(ts)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new se,f=new se,p=new se,_=new I,g=new I;function m(R,L,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(T),o[R].add(_),o[L].add(_),o[v].add(_),l[R].add(g),l[L].add(g),l[v].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,L=y.length;R<L;++R){const v=y[R],T=v.start,O=v.count;for(let D=T,k=T+O;D<k;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new I,M=new I,P=new I,E=new I;function S(R){P.fromBufferAttribute(s,R),E.copy(P);const L=o[R];x.copy(L),x.sub(P.multiplyScalar(P.dot(L))).normalize(),M.crossVectors(E,L);const T=M.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,L=y.length;R<L;++R){const v=y[R],T=v.start,O=v.count;for(let D=T,k=T+O;D<k;D+=3)S(e.getX(D+0)),S(e.getX(D+1)),S(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new De,Ti=new Va,Or=new Cn,Mh=new I,Fr=new I,Br=new I,zr=new I,Eo=new I,kr=new I,Sh=new I,Hr=new I;class je extends ft{constructor(e=new yt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Eo.fromBufferAttribute(u,e),a?kr.addScaledVector(Eo,h):kr.addScaledVector(Eo.sub(t),h))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Or.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Or,Mh)===null||Ti.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,P=x;M<P;M+=3){const E=o.getX(M),S=o.getX(M+1),R=o.getX(M+2);s=Vr(this,m,e,n,c,h,u,E,S,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);s=Vr(this,a,e,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,P=x;M<P;M+=3){const E=M,S=M+1,R=M+2;s=Vr(this,m,e,n,c,h,u,E,S,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,M=g+2;s=Vr(this,a,e,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function nm(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fr),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);const h=nm(i,e,t,n,Fr,Br,zr,Sh);if(h){const u=new I;rn.getBarycoord(Sh,Fr,Br,zr,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};rn.getNormal(Fr,Br,zr,d.normal),h.face=d,h.barycoord=u}return h}class jn extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function p(_,g,m,y,x,M,P,E,S,R,L){const v=M/S,T=P/R,O=M/2,D=P/2,k=E/2,B=S+1,U=R+1;let K=0,W=0;const fe=new I;for(let oe=0;oe<U;oe++){const he=oe*T-D;for(let Ve=0;Ve<B;Ve++){const Ge=Ve*v-O;fe[_]=Ge*y,fe[g]=he*x,fe[m]=k,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[g]=0,fe[m]=E>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ve/S),u.push(1-oe/R),K+=1}}for(let oe=0;oe<R;oe++)for(let he=0;he<S;he++){const Ve=d+he+B*oe,Ge=d+he+B*(oe+1),q=d+(he+1)+B*(oe+1),ne=d+(he+1)+B*oe;l.push(Ve,Ge,ne),l.push(Ge,q,ne),W+=6}o.addGroup(f,W,L),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function im(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const sm={clone:ws,merge:Nt};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new I,bh=new se,Eh=new se;class kt extends bf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,bh,Eh),t.subVectors(Eh,bh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class om extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new kt(ns,is,e,t);r.layers=this.layers,this.add(r);const a=new kt(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new kt(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new kt(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new kt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ef extends Mt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lm extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ef(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:fi});r.uniforms.tEquirect.value=t;const a=new je(s,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ht),new om(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const To=new I,cm=new I,hm=new Xe;class Pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=To.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hm.getNormalMatrix(e),s=this.coplanarPoint(To).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Cn,Gr=new I;class Ec{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,g-f,M-m).normalize(),n[1].setComponents(l+r,d+c,g+f,M+m).normalize(),n[2].setComponents(l+a,d+h,g+p,M+y).normalize(),n[3].setComponents(l-a,d-h,g-p,M-y).normalize(),n[4].setComponents(l-o,d-u,g-_,M-x).normalize(),t===Wn)n[5].setComponents(l+o,d+u,g+_,M+x).normalize();else if(t===Ia)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function um(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Vt extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-a;for(let x=0;x<c;x++){const M=x*u-r;p.push(M,-y,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,M=y+c*(m+1),P=y+1+c*(m+1),E=y+1+c*m;f.push(x,M,E),f.push(M,P,E)}this.setIndex(f),this.setAttribute("position",new ot(p,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`
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
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,hg=`struct PhysicalMaterial {
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
}`,ug=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,x0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,y0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,B0=`#define TOON
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
}`,z0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:fm,alphahash_pars_fragment:dm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:xm,aomap_pars_fragment:vm,batching_pars_vertex:ym,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:bm,bsdfs:Em,iridescence_fragment:Tm,bumpmap_pars_fragment:Am,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Im,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Nm,common:Um,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Hm,colorspace_fragment:Vm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:sg,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:$m,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:fg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Eg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:wg,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:$g,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:h0,background_vert:u0,background_frag:f0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:_0,depth_frag:x0,distanceRGBA_vert:v0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:b0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:w0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:P0,meshnormal_vert:I0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:N0,meshphysical_vert:U0,meshphysical_frag:O0,meshtoon_vert:F0,meshtoon_frag:B0,points_vert:z0,points_frag:k0,shadow_vert:H0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},ue={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},bn={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Nt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0},wi=new vn,X0=new De;function q0(i,e,t,n,s,r,a){const o=new Se(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const M=p(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===za)?(h===void 0&&(h=new je(new jn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ws(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(x.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(wi)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new je(new Vt(2,2),new Kn({name:"BackgroundMaterial",uniforms:ws(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Wr,Sf(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:g}}function Y0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,T,O,D,k){let B=!1;const U=u(D,O,T);r!==U&&(r=U,c(r.object)),B=f(v,D,O,k),B&&p(v,D,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(v,T,O,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,O){const D=O.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let B=k[T.id];B===void 0&&(B={},k[T.id]=B);let U=B[D];return U===void 0&&(U=d(l()),B[D]=U),U}function d(v){const T=[],O=[],D=[];for(let k=0;k<t;k++)T[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,T,O,D){const k=r.attributes,B=T.attributes;let U=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){const oe=k[W];let he=B[W];if(he===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function p(v,T,O,D){const k={},B=T.attributes;let U=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){let oe=B[W];oe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),k[W]=he,U++}r.attributes=k,r.attributesNum=U,r.index=D}function _(){const v=r.newAttributes;for(let T=0,O=v.length;T<O;T++)v[T]=0}function g(v){m(v,0)}function m(v,T){const O=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;O[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),k[v]!==T&&(i.vertexAttribDivisor(v,T),k[v]=T)}function y(){const v=r.newAttributes,T=r.enabledAttributes;for(let O=0,D=T.length;O<D;O++)T[O]!==v[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function x(v,T,O,D,k,B,U){U===!0?i.vertexAttribIPointer(v,T,O,k,B):i.vertexAttribPointer(v,T,O,D,k,B)}function M(v,T,O,D){_();const k=D.attributes,B=O.getAttributes(),U=T.defaultAttributeValues;for(const K in B){const W=B[K];if(W.location>=0){let fe=k[K];if(fe===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const oe=fe.normalized,he=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;const Ge=Ve.buffer,q=Ve.type,ne=Ve.bytesPerElement,de=q===i.INT||q===i.UNSIGNED_INT||fe.gpuType===pc;if(fe.isInterleavedBufferAttribute){const ae=fe.data,be=ae.stride,Ne=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)m(W.location+He,ae.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<W.locationSize;He++)g(W.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let He=0;He<W.locationSize;He++)x(W.location+He,he/W.locationSize,q,oe,be*ne,(Ne+he/W.locationSize*He)*ne,de)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae,fe.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<W.locationSize;ae++)g(W.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ae=0;ae<W.locationSize;ae++)x(W.location+ae,he/W.locationSize,q,oe,he*ne,he/W.locationSize*ae*ne,de)}}else if(U!==void 0){const oe=U[K];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(W.location,oe);break;case 3:i.vertexAttrib3fv(W.location,oe);break;case 4:i.vertexAttrib4fv(W.location,oe);break;default:i.vertexAttrib1fv(W.location,oe)}}}}y()}function P(){R();for(const v in n){const T=n[v];for(const O in T){const D=T[O];for(const k in D)h(D[k].object),delete D[k];delete T[O]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const O in T){const D=T[O];for(const k in D)h(D[k].object),delete D[k];delete T[O]}delete n[v.id]}function S(v){for(const T in n){const O=n[T];if(O[v.id]===void 0)continue;const D=O[v.id];for(const k in D)h(D[k].object),delete D[k];delete O[v.id]}}function R(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function K0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)t.update(p,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==on&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Yn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==_n&&!R)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:E}}function $0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Pi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=h(p,d,x,f);for(let P=0;P!==x;++P)M[P]=t[P];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Z0(i){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=Ms:o===pl&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dl||o===pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lm(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sr extends bf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,Th=[.125,.215,.35,.446,.526,.582],Di=20,Ao=new Sr,Ah=new Se;let wo=null,Ro=0,Co=0,Po=!1;const Ii=(1+Math.sqrt(5))/2,ss=1/Ii,wh=[new I(-Ii,ss,0),new I(Ii,ss,0),new I(-ss,0,Ii),new I(ss,0,Ii),new I(0,Ii,-ss),new I(0,Ii,ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Mr,format:on,colorSpace:Ct,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J0(r)),this._blurMaterial=Q0(r,e,t)}return s}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,s){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ah),h.toneMapping=Xn,h.autoClear=!1;const f=new ut({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),p=new je(new jn,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Ah),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Xr(s,y*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ms||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wh[(s-r-1)%wh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new je(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);const m=[];let y=0;for(let S=0;S<Di;++S){const R=S/_,L=Math.exp(-R*R/2);m.push(L),S===0?y+=L:S<g&&(y+=2*L)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const M=this._sizeLods[s],P=3*M*(s>x-ds?s-x+ds:0),E=4*(this._cubeSize-M);Xr(t,P,E,3*M,2*M),l.setRenderTarget(t),l.render(u,Ao)}}function J0(i){const e=[],t=[],n=[];let s=i;const r=i-ds+1+Th.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ds?l=Th[a-i+ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),x=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let E=0;E<f;E++){const S=E%3*2/3-1,R=E>2?0:-1,L=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];y.set(L,_*p*E),x.set(d,g*p*E);const v=[E,E,E,E,E,E];M.set(v,m*p*E)}const P=new yt;P.setAttribute("position",new vt(y,_)),P.setAttribute("uv",new vt(x,g)),P.setAttribute("faceIndex",new vt(M,m)),e.push(P),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ch(i,e,t){const n=new _i(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Q0(i,e,t){const n=new Float32Array(Di),s=new I(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ph(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ih(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function e_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dl||l===pl,h=l===Ms||l===Ss;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Rh(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Rh(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function t_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ga("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n_(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const P=y[x+0],E=y[x+1],S=y[x+2];d.push(P,E,E,S,S,P)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const P=x+0,E=x+1,S=x+2;d.push(P,E,E,S,S,P)}}else return;const g=new(mf(d)?Mf:yf)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<_.length;y++)t.update(m,n,_[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function r_(i,e,t){const n=new WeakMap,s=new tt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let L=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let M=o.attributes.position.count*x,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*P*4*u),S=new _f(E,M,P,u);S.type=_n,S.needsUpdate=!0;const R=x*4;for(let v=0;v<u;v++){const T=g[v],O=m[v],D=y[v],k=M*P*4*v;for(let B=0;B<T.count;B++){const U=B*R;f===!0&&(s.fromBufferAttribute(T,B),E[k+U+0]=s.x,E[k+U+1]=s.y,E[k+U+2]=s.z,E[k+U+3]=0),p===!0&&(s.fromBufferAttribute(O,B),E[k+U+4]=s.x,E[k+U+5]=s.y,E[k+U+6]=s.z,E[k+U+7]=0),_===!0&&(s.fromBufferAttribute(D,B),E[k+U+8]=s.x,E[k+U+9]=s.y,E[k+U+10]=s.z,E[k+U+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:S,size:new se(M,P)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function a_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Af extends Mt{constructor(e,t,n,s,r,a,o,l,c,h=_s){if(h!==_s&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Bi),n===void 0&&h===Ts&&(n=Es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wf=new Mt,Lh=new Af(1,1),Rf=new _f,Cf=new qp,Pf=new Ef,Dh=[],Nh=[],Uh=new Float32Array(16),Oh=new Float32Array(9),Fh=new Float32Array(4);function Ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function o_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function u_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),bt(t,n)}}function f_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),bt(t,n)}}function d_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),bt(t,n)}}function p_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function x_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function S_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=pf,r=Lh):r=wf,t.setTexture2D(e||r,s)}function b_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cf,s)}function E_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pf,s)}function T_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rf,s)}function A_(i){switch(i){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return y_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}function w_(i,e){i.uniform1fv(this.addr,e)}function R_(i,e){const t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function C_(i,e){const t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function P_(i,e){const t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function I_(i,e){const t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L_(i,e){const t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function D_(i,e){const t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N_(i,e){i.uniform1iv(this.addr,e)}function U_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function F_(i,e){i.uniform4iv(this.addr,e)}function B_(i,e){i.uniform1uiv(this.addr,e)}function z_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function H_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||wf,r[a])}function G_(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cf,r[a])}function W_(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pf,r[a])}function X_(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rf,r[a])}function q_(i){switch(i){case 5126:return w_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return I_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return B_;case 36294:return z_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}}class j_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Bh(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){const n=i.name,s=n.length;for(Io.lastIndex=0;;){const r=Io.exec(n),a=Io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bh(t,c===void 0?new Y_(o,i,e):new K_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new j_(o),Bh(t,u)),t=u}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);$_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Z_=37297;let J_=0;function Q_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ex(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Pa&&t===Ca?n="LinearDisplayP3ToLinearSRGB":e===Ca&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ct:case Ha:return[n,"LinearTransferOETF"];case dt:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q_(i.getShaderSource(e),a)}else return s}function tx(i,e){const t=ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nx(i,e){let t;switch(e){case Qd:t="Linear";break;case ep:t="Reinhard";break;case tp:t="Cineon";break;case np:t="ACESFilmic";break;case sp:t="AgX";break;case rp:t="Neutral";break;case ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new I;function ix(){Ze.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function rx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(ox,cx)}const lx=new Map;function cx(i,e){let t=We[e];if(t===void 0){const n=lx.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _x(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fx(t),c=dx(t),h=px(t),u=mx(t),d=gx(t),f=sx(t),p=rx(r),_=s.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(g=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?We.tonemapping_pars_fragment:"",t.toneMapping!==Xn?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Gl(a),a=Hh(a,t),a=Vh(a,t),o=Gl(o),o=Hh(o,t),o=Vh(o,t),a=Gh(a),o=Gh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+a,M=y+m+o,P=zh(s,s.VERTEX_SHADER,x),E=zh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(T){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(E).trim();let B=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,E);else{const K=kh(s,P,"vertex"),W=kh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+K+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||k==="")&&(U=!1);U&&(T.diagnostics={runnable:B,programLog:O,vertexShader:{log:D,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(P),s.deleteShader(E),R=new _a(s,_),L=ax(s,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let L;this.getAttributes=function(){return L===void 0&&S(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Z_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}}function Mx(i,e,t,n,s,r,a){const o=new xf,l=new vx,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,O,D,k){const B=D.fog,U=k.geometry,K=v.isMeshStandardMaterial?D.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),fe=W&&W.mapping===za?W.image.height:null,oe=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ve=he!==void 0?he.length:0;let Ge=0;U.morphAttributes.position!==void 0&&(Ge=1),U.morphAttributes.normal!==void 0&&(Ge=2),U.morphAttributes.color!==void 0&&(Ge=3);let q,ne,de,ae;if(oe){const zt=bn[oe];q=zt.vertexShader,ne=zt.fragmentShader}else q=v.vertexShader,ne=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const be=i.getRenderTarget(),Ne=k.isInstancedMesh===!0,He=k.isBatchedMesh===!0,Ee=!!v.map,J=!!v.matcap,A=!!W,V=!!v.aoMap,ie=!!v.lightMap,Q=!!v.bumpMap,ee=!!v.normalMap,Ce=!!v.displacementMap,pe=!!v.emissiveMap,C=!!v.metalnessMap,b=!!v.roughnessMap,H=v.anisotropy>0,j=v.clearcoat>0,Z=v.dispersion>0,$=v.iridescence>0,Te=v.sheen>0,ce=v.transmission>0,me=H&&!!v.anisotropyMap,Ye=j&&!!v.clearcoatMap,re=j&&!!v.clearcoatNormalMap,ge=j&&!!v.clearcoatRoughnessMap,Oe=$&&!!v.iridescenceMap,Fe=$&&!!v.iridescenceThicknessMap,ve=Te&&!!v.sheenColorMap,we=Te&&!!v.sheenRoughnessMap,Le=!!v.specularMap,Je=!!v.specularColorMap,N=!!v.specularIntensityMap,ye=ce&&!!v.transmissionMap,Y=ce&&!!v.thicknessMap,te=!!v.gradientMap,_e=!!v.alphaMap,Me=v.alphaTest>0,$e=!!v.alphaHash,_t=!!v.extensions;let Bt=Xn;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Qe={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:ne,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:He,batchingColor:He&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ct,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:J,envMap:A,envMapMode:A&&W.mapping,envMapCubeUVHeight:fe,aoMap:V,lightMap:ie,bumpMap:Q,normalMap:ee,displacementMap:f&&Ce,emissiveMap:pe,normalMapObjectSpace:ee&&v.normalMapType===dp,normalMapTangentSpace:ee&&v.normalMapType===ka,metalnessMap:C,roughnessMap:b,anisotropy:H,anisotropyMap:me,clearcoat:j,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:Z,iridescence:$,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:Te,sheenColorMap:ve,sheenRoughnessMap:we,specularMap:Le,specularColorMap:Je,specularIntensityMap:N,transmission:ce,transmissionMap:ye,thicknessMap:Y,gradientMap:te,opaque:v.transparent===!1&&v.blending===gs&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:$e,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:V&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:Q&&g(v.bumpMap.channel),normalMapUv:ee&&g(v.normalMap.channel),displacementMapUv:Ce&&g(v.displacementMap.channel),emissiveMapUv:pe&&g(v.emissiveMap.channel),metalnessMapUv:C&&g(v.metalnessMap.channel),roughnessMapUv:b&&g(v.roughnessMap.channel),anisotropyMapUv:me&&g(v.anisotropyMap.channel),clearcoatMapUv:Ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(v.sheenRoughnessMap.channel),specularMapUv:Le&&g(v.specularMap.channel),specularColorMapUv:Je&&g(v.specularColorMap.channel),specularIntensityMapUv:N&&g(v.specularIntensityMap.channel),transmissionMapUv:ye&&g(v.transmissionMap.channel),thicknessMapUv:Y&&g(v.thicknessMap.channel),alphaMapUv:_e&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ee||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(Ee||_e),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const T=_[v.type];let O;if(T){const D=bn[T];O=sm.clone(D.uniforms)}else O=v.uniforms;return O}function E(v,T){let O;for(let D=0,k=h.length;D<k;D++){const B=h[D];if(B.cacheKey===T){O=B,++O.usedTimes;break}}return O===void 0&&(O=new _x(i,T,v,r),h.push(O)),O}function S(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:P,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:L}}function Sx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,p,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||bx),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ex(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Ax(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wx=0;function Rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cx(i){const e=new Tx,t=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new De,a=new De;function o(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,x=0,M=0,P=0,E=0,S=0;c.sort(Rx);for(let L=0,v=c.length;L<v;L++){const T=c[L],O=T.color,D=T.intensity,k=T.distance,B=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*D,u+=O.g*D,d+=O.b*D;else if(T.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(T.sh.coefficients[U],D);S++}else if(T.isDirectionalLight){const U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,W=t.get(T);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=T.shadow.matrix,y++}n.directional[f]=U,f++}else if(T.isSpotLight){const U=e.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(O).multiplyScalar(D),U.distance=k,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,n.spot[_]=U;const K=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,K.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=K.matrix,T.castShadow){const W=t.get(T);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=B,M++}_++}else if(T.isRectAreaLight){const U=e.get(T);U.color.copy(O).multiplyScalar(D),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=U,g++}else if(T.isPointLight){const U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){const K=T.shadow,W=t.get(T);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=T.shadow.matrix,x++}n.point[p]=U,p++}else if(T.isHemisphereLight){const U=e.get(T);U.skyColor.copy(T.color).multiplyScalar(D),U.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,R.directionalLength=f,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=S,n.version=wx++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Yh(i){const e=new Cx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Px(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yh(i),e.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ix extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`;function Ux(i,e,t){let n=new Ec;const s=new se,r=new se,a=new tt,o=new Ix({depthPacking:fp}),l=new Lx,c={},h=t.maxTextureSize,u={[qn]:Gt,[Gt]:qn,[sn]:sn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Dx,fragmentShader:Nx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new yt;p.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new je(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;this.render=function(E,S,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=m!==kn&&this.type===kn,k=m===kn&&this.type!==kn;for(let B=0,U=E.length;B<U;B++){const K=E[B],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const fe=W.getFrameExtents();if(s.multiply(fe),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,W.mapSize.y=r.y)),W.map===null||D===!0||k===!0){const he=this.type!==kn?{minFilter:Lt,magFilter:Lt}:{};W.map!==null&&W.map.dispose(),W.map=new _i(s.x,s.y,he),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const oe=W.getViewportCount();for(let he=0;he<oe;he++){const Ve=W.getViewport(he);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),O.viewport(a),W.updateMatrices(K,he),n=W.getFrustum(),M(S,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===kn&&y(W,R),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(L,v,T)};function y(E,S){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,R,f,_,null)}function x(E,S,R,L){let v=null;const T=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)v=T;else if(v=R.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const O=v.uuid,D=S.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let B=k[D];B===void 0&&(B=v.clone(),k[D]=B,S.addEventListener("dispose",P)),v=B}if(v.visible=S.visible,v.wireframe=S.wireframe,L===kn?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:u[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=R}return v}function M(E,S,R,L,v){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const D=e.update(E),k=E.material;if(Array.isArray(k)){const B=D.groups;for(let U=0,K=B.length;U<K;U++){const W=B[U],fe=k[W.materialIndex];if(fe&&fe.visible){const oe=x(E,fe,L,v);E.onBeforeShadow(i,E,S,R,D,oe,W),i.renderBufferDirect(R,null,D,oe,E,W),E.onAfterShadow(i,E,S,R,D,oe,W)}}}else if(k.visible){const B=x(E,k,L,v);E.onBeforeShadow(i,E,S,R,D,B,null),i.renderBufferDirect(R,null,D,B,E,null),E.onAfterShadow(i,E,S,R,D,B,null)}}const O=E.children;for(let D=0,k=O.length;D<k;D++)M(O[D],S,R,L,v)}function P(E){E.target.removeEventListener("dispose",P);for(const R in c){const L=c[R],v=E.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const Ox={[al]:ol,[ll]:ul,[cl]:fl,[ys]:hl,[ol]:al,[ul]:ll,[fl]:cl,[hl]:ys};function Fx(i){function e(){let N=!1;const ye=new tt;let Y=null;const te=new tt(0,0,0,0);return{setMask:function(_e){Y!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){N=_e},setClear:function(_e,Me,$e,_t,Bt){Bt===!0&&(_e*=_t,Me*=_t,$e*=_t),ye.set(_e,Me,$e,_t),te.equals(ye)===!1&&(i.clearColor(_e,Me,$e,_t),te.copy(ye))},reset:function(){N=!1,Y=null,te.set(-1,0,0,0)}}}function t(){let N=!1,ye=!1,Y=null,te=null,_e=null;return{setReversed:function(Me){ye=Me},setTest:function(Me){Me?de(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(Me){Y!==Me&&!N&&(i.depthMask(Me),Y=Me)},setFunc:function(Me){if(ye&&(Me=Ox[Me]),te!==Me){switch(Me){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Me}},setLocked:function(Me){N=Me},setClear:function(Me){_e!==Me&&(i.clearDepth(Me),_e=Me)},reset:function(){N=!1,Y=null,te=null,_e=null}}}function n(){let N=!1,ye=null,Y=null,te=null,_e=null,Me=null,$e=null,_t=null,Bt=null;return{setTest:function(Qe){N||(Qe?de(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Qe){ye!==Qe&&!N&&(i.stencilMask(Qe),ye=Qe)},setFunc:function(Qe,zt,Dn){(Y!==Qe||te!==zt||_e!==Dn)&&(i.stencilFunc(Qe,zt,Dn),Y=Qe,te=zt,_e=Dn)},setOp:function(Qe,zt,Dn){(Me!==Qe||$e!==zt||_t!==Dn)&&(i.stencilOp(Qe,zt,Dn),Me=Qe,$e=zt,_t=Dn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Bt!==Qe&&(i.clearStencil(Qe),Bt=Qe)},reset:function(){N=!1,ye=null,Y=null,te=null,_e=null,Me=null,$e=null,_t=null,Bt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,P=null,E=new Se(0,0,0),S=0,R=!1,L=null,v=null,T=null,O=null,D=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=U>=1):K.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=U>=2);let W=null,fe={};const oe=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Ve=new tt().fromArray(oe),Ge=new tt().fromArray(he);function q(N,ye,Y,te){const _e=new Uint8Array(4),Me=i.createTexture();i.bindTexture(N,Me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Y;$e++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ye+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Me}const ne={};ne[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(i.DEPTH_TEST),r.setFunc(ys),ie(!1),Q(th),de(i.CULL_FACE),A(fi);function de(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function ae(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function be(N,ye){return h[N]!==ye?(i.bindFramebuffer(N,ye),h[N]=ye,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ne(N,ye){let Y=d,te=!1;if(N){Y=u.get(ye),Y===void 0&&(Y=[],u.set(ye,Y));const _e=N.textures;if(Y.length!==_e.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=_e.length;Me<$e;Me++)Y[Me]=i.COLOR_ATTACHMENT0+Me;Y.length=_e.length,te=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,te=!0);te&&i.drawBuffers(Y)}function He(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const Ee={[Li]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};Ee[Od]=i.MIN,Ee[Fd]=i.MAX;const J={[Bd]:i.ZERO,[zd]:i.ONE,[kd]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function A(N,ye,Y,te,_e,Me,$e,_t,Bt,Qe){if(N===fi){p===!0&&(ae(i.BLEND),p=!1);return}if(p===!1&&(de(i.BLEND),p=!0),N!==Dd){if(N!==_||Qe!==R){if((g!==Li||x!==Li)&&(i.blendEquation(i.FUNC_ADD),g=Li,x=Li),Qe)switch(N){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,M=null,P=null,E.set(0,0,0),S=0,_=N,R=Qe}return}_e=_e||ye,Me=Me||Y,$e=$e||te,(ye!==g||_e!==x)&&(i.blendEquationSeparate(Ee[ye],Ee[_e]),g=ye,x=_e),(Y!==m||te!==y||Me!==M||$e!==P)&&(i.blendFuncSeparate(J[Y],J[te],J[Me],J[$e]),m=Y,y=te,M=Me,P=$e),(_t.equals(E)===!1||Bt!==S)&&(i.blendColor(_t.r,_t.g,_t.b,Bt),E.copy(_t),S=Bt),_=N,R=!1}function V(N,ye){N.side===sn?ae(i.CULL_FACE):de(i.CULL_FACE);let Y=N.side===Gt;ye&&(Y=!Y),ie(Y),N.blending===gs&&N.transparent===!1?A(fi):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const te=N.stencilWrite;a.setTest(te),te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Q(N){N!==Id?(de(i.CULL_FACE),N!==v&&(N===th?i.cullFace(i.BACK):N===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),v=N}function ee(N){N!==T&&(B&&i.lineWidth(N),T=N)}function Ce(N,ye,Y){N?(de(i.POLYGON_OFFSET_FILL),(O!==ye||D!==Y)&&(i.polygonOffset(ye,Y),O=ye,D=Y)):ae(i.POLYGON_OFFSET_FILL)}function pe(N){N?de(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+k-1),W!==N&&(i.activeTexture(N),W=N)}function b(N,ye,Y){Y===void 0&&(W===null?Y=i.TEXTURE0+k-1:Y=W);let te=fe[Y];te===void 0&&(te={type:void 0,texture:void 0},fe[Y]=te),(te.type!==N||te.texture!==ye)&&(W!==Y&&(i.activeTexture(Y),W=Y),i.bindTexture(N,ye||ne[N]),te.type=N,te.texture=ye)}function H(){const N=fe[W];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){Ve.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function ve(N){Ge.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function we(N,ye){let Y=l.get(ye);Y===void 0&&(Y=new WeakMap,l.set(ye,Y));let te=Y.get(N);te===void 0&&(te=i.getUniformBlockIndex(ye,N.name),Y.set(N,te))}function Le(N,ye){const te=l.get(ye).get(N);o.get(ye)!==te&&(i.uniformBlockBinding(ye,te,N.__bindingPointIndex),o.set(ye,te))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,fe={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,P=null,E=new Se(0,0,0),S=0,R=!1,L=null,v=null,T=null,O=null,D=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:de,disable:ae,bindFramebuffer:be,drawBuffers:Ne,useProgram:He,setBlending:A,setMaterial:V,setFlipSided:ie,setCullFace:Q,setLineWidth:ee,setPolygonOffset:Ce,setScissorTest:pe,activeTexture:C,bindTexture:b,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ge,texImage3D:Oe,updateUBOMapping:we,uniformBlockBinding:Le,texStorage2D:Ye,texStorage3D:re,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Fe,viewport:ve,reset:Je}}function Kh(i,e,t,n){const s=Bx(n);switch(t){case af:return i*e;case lf:return i*e;case cf:return i*e*2;case _c:return i*e/s.components*s.byteLength;case xc:return i*e/s.components*s.byteLength;case hf:return i*e*2/s.components*s.byteLength;case vc:return i*e*2/s.components*s.byteLength;case of:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case yc:return i*e*4/s.components*s.byteLength;case ua:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:case xl:return Math.max(i,16)*Math.max(e,8)/4;case ml:case _l:return Math.max(i,8)*Math.max(e,8)/2;case vl:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uf:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bx(i){switch(i){case Yn:case nf:return{byteLength:1,components:1};case cr:case sf:case Mr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Bi:case pc:case _n:return{byteLength:4,components:1};case rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return f?new OffscreenCanvas(C,b):fr("canvas")}function _(C,b,H){let j=1;const Z=pe(C);if((Z.width>H||Z.height>H)&&(j=H/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*Z.width),Te=Math.floor(j*Z.height);u===void 0&&(u=p($,Te));const ce=b?p($,Te):u;return ce.width=$,ce.height=Te,ce.getContext("2d").drawImage(C,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Te+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Lt&&C.minFilter!==Ht}function m(C){i.generateMipmap(C)}function y(C,b,H,j,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),b===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){const Te=Z?Ra:Ze.getTransfer(j);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=Te===ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(C,b){let H;return C?b===null||b===Bi||b===Es?H=i.DEPTH24_STENCIL8:b===_n?H=i.DEPTH32F_STENCIL8:b===cr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bi||b===Es?H=i.DEPTH_COMPONENT24:b===_n?H=i.DEPTH_COMPONENT32F:b===cr&&(H=i.DEPTH_COMPONENT16),H}function M(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Ht?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){const b=C.target;b.removeEventListener("dispose",P),S(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),L(b)}function S(C){const b=n.get(C);if(b.__webglInit===void 0)return;const H=C.source,j=d.get(H);if(j){const Z=j[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(j).length===0&&d.delete(H)}n.remove(C)}function R(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const H=C.source,j=d.get(H);delete j[b.__cacheKey],a.memory.textures--}function L(C){const b=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Z=0;Z<b.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,Z=H.length;j<Z;j++){const $=n.get(H[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(C)}let v=0;function T(){v=0}function O(){const C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function D(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function k(C,b){const H=n.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,C,b);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function B(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Ge(H,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function U(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Ge(H,C,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function K(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const W={[bs]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},fe={[Lt]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},oe={[pp]:i.NEVER,[yp]:i.ALWAYS,[mp]:i.LESS,[pf]:i.LEQUAL,[gp]:i.EQUAL,[vp]:i.GEQUAL,[_p]:i.GREATER,[xp]:i.NOTEQUAL};function he(C,b){if(b.type===_n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ht||b.magFilter===ha||b.magFilter===Js||b.magFilter===Gn||b.minFilter===Ht||b.minFilter===ha||b.minFilter===Js||b.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,fe[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Lt||b.minFilter!==Js&&b.minFilter!==Gn||b.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ve(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P));const j=b.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const $=D(b);if($!==C.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[$].usedTimes++;const Te=Z[C.__cacheKey];Te!==void 0&&(Z[C.__cacheKey].usedTimes--,Te.usedTimes===0&&R(b)),C.__cacheKey=$,C.__webglTexture=Z[$].texture}return H}function Ge(C,b,H){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const Z=Ve(C,b),$=b.source;t.bindTexture(j,C.__webglTexture,i.TEXTURE0+H);const Te=n.get($);if($.version!==Te.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const ce=Ze.getPrimaries(Ze.workingColorSpace),me=b.colorSpace===oi?null:Ze.getPrimaries(b.colorSpace),Ye=b.colorSpace===oi||ce===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=_(b.image,!1,s.maxTextureSize);re=Ce(b,re);const ge=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type);let Fe=y(b.internalFormat,ge,Oe,b.colorSpace,b.isVideoTexture);he(j,b);let ve;const we=b.mipmaps,Le=b.isVideoTexture!==!0,Je=Te.__version===void 0||Z===!0,N=$.dataReady,ye=M(b,re);if(b.isDepthTexture)Fe=x(b.format===Ts,b.type),Je&&(Le?t.texStorage2D(i.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Fe,re.width,re.height,0,ge,Oe,null));else if(b.isDataTexture)if(we.length>0){Le&&Je&&t.texStorage2D(i.TEXTURE_2D,ye,Fe,we[0].width,we[0].height);for(let Y=0,te=we.length;Y<te;Y++)ve=we[Y],Le?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ge,Oe,ve.data);b.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(i.TEXTURE_2D,ye,Fe,re.width,re.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,ge,Oe,re.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,re.width,re.height,0,ge,Oe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Fe,we[0].width,we[0].height,re.depth);for(let Y=0,te=we.length;Y<te;Y++)if(ve=we[Y],b.format!==on)if(ge!==null)if(Le){if(N)if(b.layerUpdates.size>0){const _e=Kh(ve.width,ve.height,b.format,b.type);for(const Me of b.layerUpdates){const $e=ve.data.subarray(Me*_e/ve.data.BYTES_PER_ELEMENT,(Me+1)*_e/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Me,ve.width,ve.height,1,ge,$e,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,ge,ve.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,ge,Oe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,ge,Oe,ve.data)}else{Le&&Je&&t.texStorage2D(i.TEXTURE_2D,ye,Fe,we[0].width,we[0].height);for(let Y=0,te=we.length;Y<te;Y++)ve=we[Y],b.format!==on?ge!==null?Le?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ge,Oe,ve.data)}else if(b.isDataArrayTexture)if(Le){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Fe,re.width,re.height,re.depth),N)if(b.layerUpdates.size>0){const Y=Kh(re.width,re.height,b.format,b.type);for(const te of b.layerUpdates){const _e=re.data.subarray(te*Y/re.data.BYTES_PER_ELEMENT,(te+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ge,Oe,_e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Oe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,ge,Oe,re.data);else if(b.isData3DTexture)Le?(Je&&t.texStorage3D(i.TEXTURE_3D,ye,Fe,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Oe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,ge,Oe,re.data);else if(b.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(i.TEXTURE_2D,ye,Fe,re.width,re.height);else{let Y=re.width,te=re.height;for(let _e=0;_e<ye;_e++)t.texImage2D(i.TEXTURE_2D,_e,Fe,Y,te,0,ge,Oe,null),Y>>=1,te>>=1}}else if(we.length>0){if(Le&&Je){const Y=pe(we[0]);t.texStorage2D(i.TEXTURE_2D,ye,Fe,Y.width,Y.height)}for(let Y=0,te=we.length;Y<te;Y++)ve=we[Y],Le?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ge,Oe,ve):t.texImage2D(i.TEXTURE_2D,Y,Fe,ge,Oe,ve);b.generateMipmaps=!1}else if(Le){if(Je){const Y=pe(re);t.texStorage2D(i.TEXTURE_2D,ye,Fe,Y.width,Y.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Oe,re)}else t.texImage2D(i.TEXTURE_2D,0,Fe,ge,Oe,re);g(b)&&m(j),Te.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,H){if(b.image.length!==6)return;const j=Ve(C,b),Z=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const $=n.get(Z);if(Z.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+H);const Te=Ze.getPrimaries(Ze.workingColorSpace),ce=b.colorSpace===oi?null:Ze.getPrimaries(b.colorSpace),me=b.colorSpace===oi||Te===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ye&&!re?ge[te]=_(b.image[te],!0,s.maxCubemapSize):ge[te]=re?b.image[te].image:b.image[te],ge[te]=Ce(b,ge[te]);const Oe=ge[0],Fe=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),we=y(b.internalFormat,Fe,ve,b.colorSpace),Le=b.isVideoTexture!==!0,Je=$.__version===void 0||j===!0,N=Z.dataReady;let ye=M(b,Oe);he(i.TEXTURE_CUBE_MAP,b);let Y;if(Ye){Le&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,we,Oe.width,Oe.height);for(let te=0;te<6;te++){Y=ge[te].mipmaps;for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];b.format!==on?Fe!==null?Le?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,Me.width,Me.height,Fe,ve,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,we,Me.width,Me.height,0,Fe,ve,Me.data)}}}else{if(Y=b.mipmaps,Le&&Je){Y.length>0&&ye++;const te=pe(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,we,te.width,te.height)}for(let te=0;te<6;te++)if(re){Le?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Fe,ve,ge[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,we,ge[te].width,ge[te].height,0,Fe,ve,ge[te].data);for(let _e=0;_e<Y.length;_e++){const $e=Y[_e].image[te].image;Le?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,$e.width,$e.height,Fe,ve,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,we,$e.width,$e.height,0,Fe,ve,$e.data)}}else{Le?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,ve,ge[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,we,Fe,ve,ge[te]);for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];Le?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Fe,ve,Me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,we,Fe,ve,Me.image[te])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),$.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,H,j,Z,$){const Te=r.convert(H.format,H.colorSpace),ce=r.convert(H.type),me=y(H.internalFormat,Te,ce,H.colorSpace);if(!n.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>$),ge=Math.max(1,b.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,me,re,ge,b.depth,0,Te,ce,null):t.texImage2D(Z,$,me,re,ge,0,Te,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,0,ie(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=x(b.stencilBuffer,Z),Te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=ie(b);Q(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,$,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,C)}else{const j=b.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],Te=r.convert($.format,$.colorSpace),ce=r.convert($.type),me=y($.internalFormat,Te,ce,$.colorSpace),Ye=ie(b);H&&Q(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,me,b.width,b.height):Q(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,me,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,me,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const j=n.get(b.depthTexture).__webglTexture,Z=ie(b);if(b.depthTexture.format===_s)Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ts)Q(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function be(C){const b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),de(b.__webglDepthbuffer[j],C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),de(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(C,b,H){const j=n.get(C);b!==void 0&&ne(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&be(C)}function He(C){const b=C.texture,H=n.get(C),j=n.get(b);C.addEventListener("dispose",E);const Z=C.textures,$=C.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let me=0;me<b.mipmaps.length;me++)H.__webglFramebuffer[ce][me]=i.createFramebuffer()}else H.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)H.__webglFramebuffer[ce]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ce=0,me=Z.length;ce<me;ce++){const Ye=n.get(Z[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Q(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const me=Z[ce];H.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const Ye=r.convert(me.format,me.colorSpace),re=r.convert(me.type),ge=y(me.internalFormat,Ye,re,me.colorSpace,C.isXRRenderTarget===!0),Oe=ie(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ge,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),de(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),he(i.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(H.__webglFramebuffer[ce][me],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ne(H.__webglFramebuffer[ce],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,me=Z.length;ce<me;ce++){const Ye=Z[ce],re=n.get(Ye);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),he(i.TEXTURE_2D,Ye),ne(H.__webglFramebuffer,C,Ye,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),g(Ye)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),he(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(H.__webglFramebuffer[me],C,b,i.COLOR_ATTACHMENT0,ce,me);else ne(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ce,0);g(b)&&m(ce),t.unbindTexture()}C.depthBuffer&&be(C)}function Ee(C){const b=C.textures;for(let H=0,j=b.length;H<j;H++){const Z=b[H];if(g(Z)){const $=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Te=n.get(Z).__webglTexture;t.bindTexture($,Te),m($),t.unbindTexture()}}}const J=[],A=[];function V(C){if(C.samples>0){if(Q(C)===!1){const b=C.textures,H=C.width,j=C.height;let Z=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(C),ce=b.length>1;if(ce)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<b.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ye=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,Z,i.NEAREST),l===!0&&(J.length=0,A.length=0,J.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push($),A.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ye=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ie(C){return Math.min(s.maxSamples,C.samples)}function Q(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ee(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ce(C,b){const H=C.colorSpace,j=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ct&&H!==oi&&(Ze.getTransfer(H)===ct?(j!==on||Z!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=K,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Q}function kx(i,e){function t(n,s=oi){let r;const a=Ze.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.BYTE;if(n===sf)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===of)return i.RGB;if(n===on)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===cf)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===vc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===ua||n===fa||n===da||n===pa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===yl||n===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===yl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===bl||n===El||n===Tl||n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===Ol||n===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uf||n===Bl||n===zl||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Hx extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ot extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Mt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends Vi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new Xx,g=t.getContextAttributes();let m=null,y=null;const x=[],M=[],P=new se;let E=null;const S=new kt;S.layers.enable(1),S.viewport=new tt;const R=new kt;R.layers.enable(2),R.viewport=new tt;const L=[S,R],v=new Hx;v.layers.enable(1),v.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getHandSpace()};function D(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let q=0;q<x.length;q++){const ne=M[q];ne!==null&&(M[q]=null,x[q].disconnect(ne))}T=null,O=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _i(f.framebufferWidth,f.framebufferHeight,{format:on,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,de=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ts:_s,de=g.stencil?Es:Bi);const be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _i(d.textureWidth,d.textureHeight,{format:on,type:Yn,depthTexture:new Af(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(q){for(let ne=0;ne<q.removed.length;ne++){const de=q.removed[ne],ae=M.indexOf(de);ae>=0&&(M[ae]=null,x[ae].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){const de=q.added[ne];let ae=M.indexOf(de);if(ae===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=M.length){M.push(de),ae=Ne;break}else if(M[Ne]===null){M[Ne]=de,ae=Ne;break}if(ae===-1)break}const be=x[ae];be&&be.connect(de)}}const U=new I,K=new I;function W(q,ne,de){U.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const ae=U.distanceTo(K),be=ne.projectionMatrix.elements,Ne=de.projectionMatrix.elements,He=be[14]/(be[10]-1),Ee=be[14]/(be[10]+1),J=(be[9]+1)/be[5],A=(be[9]-1)/be[5],V=(be[8]-1)/be[0],ie=(Ne[8]+1)/Ne[0],Q=He*V,ee=He*ie,Ce=ae/(-V+ie),pe=Ce*-V;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=He+Ce,b=Ee+Ce,H=Q-pe,j=ee+(ae-pe),Z=J*Ee/b*C,$=A*Ee/b*C;q.projectionMatrix.makePerspective(H,j,Z,$,C,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function fe(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,de=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),v.near=R.near=S.near=ne,v.far=R.far=S.far=de,(T!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,O=v.far);const ae=q.parent,be=v.cameras;fe(v,ae);for(let Ne=0;Ne<be.length;Ne++)fe(be[Ne],ae);be.length===2?W(v,S,R):v.projectionMatrix.copy(S.projectionMatrix),oe(q,v,ae)};function oe(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=As*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let he=null;function Ve(q,ne){if(h=ne.getViewerPose(c||a),p=ne,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;de.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Ne=0;Ne<de.length;Ne++){const He=de[Ne];let Ee=null;if(f!==null)Ee=f.getViewport(He);else{const A=u.getViewSubImage(d,He);Ee=A.viewport,Ne===0&&(e.setRenderTargetTextures(y,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(y))}let J=L[Ne];J===void 0&&(J=new kt,J.layers.enable(Ne),J.viewport=new tt,L[Ne]=J),J.matrix.fromArray(He.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(He.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Ne===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(J)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ne=u.getDepthInformation(de[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let de=0;de<x.length;de++){const ae=M[de],be=x[de];ae!==null&&be!==void 0&&be.update(ae,ne,c||a)}he&&he(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const Ge=new Tf;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const Ri=new vn,Yx=new De;function Kx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,M=y.envMapRotation;x&&(g.envMap.value=x,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Ri)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(p(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",g));const P=x.program;n.updateUBOMapping(y,P);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const M=i.createBuffer(),P=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],M=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,S=M.length;E<S;E++){const R=Array.isArray(M[E])?M[E]:[M[E]];for(let L=0,v=R.length;L<v;L++){const T=R[L];if(f(T,E,L,P)===!0){const O=T.__offset,D=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let B=0;B<D.length;B++){const U=D[B],K=_(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,O+k,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,P){const E=y.value,S=x+"_"+M;if(P[S]===void 0)return typeof E=="number"||typeof E=="boolean"?P[S]=E:P[S]=E.clone(),!0;{const R=P[S];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[S]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function p(y){const x=y.uniforms;let M=0;const P=16;for(let S=0,R=x.length;S<R;S++){const L=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,T=L.length;v<T;v++){const O=L[v],D=Array.isArray(O.value)?O.value:[O.value];for(let k=0,B=D.length;k<B;k++){const U=D[k],K=_(U),W=M%P,fe=W%K.boundary,oe=W+fe;M+=fe,oe!==0&&P-oe<K.storage&&(M+=P-oe),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const E=M%P;return E>0&&(M+=P-E),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class $x{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=Xn,this.toneMappingExposure=1;const x=this;let M=!1,P=0,E=0,S=null,R=-1,L=null;const v=new tt,T=new tt;let O=null;const D=new Se(0);let k=0,B=t.width,U=t.height,K=1,W=null,fe=null;const oe=new tt(0,0,B,U),he=new tt(0,0,B,U);let Ve=!1;const Ge=new Ec;let q=!1,ne=!1;const de=new De,ae=new De,be=new I,Ne=new tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function J(){return S===null?K:1}let A=n;function V(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),A===null){const F="webgl2";if(A=V(F,w),A===null)throw V(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,Q,ee,Ce,pe,C,b,H,j,Z,$,Te,ce,me,Ye,re,ge,Oe,Fe,ve,we,Le,Je,N;function ye(){ie=new t_(A),ie.init(),Le=new kx(A,ie),Q=new j0(A,ie,e,Le),ee=new Fx(A),Q.reverseDepthBuffer&&ee.buffers.depth.setReversed(!0),Ce=new s_(A),pe=new Sx,C=new zx(A,ie,ee,pe,Q,Le,Ce),b=new Z0(x),H=new e_(x),j=new um(A),Je=new Y0(A,j),Z=new n_(A,j,Ce,Je),$=new a_(A,Z,j,Ce),Fe=new r_(A,Q,C),re=new $0(pe),Te=new Mx(x,b,H,ie,Q,Je,re),ce=new Kx(x,pe),me=new Ex,Ye=new Px(ie),Oe=new q0(x,b,H,ee,$,d,l),ge=new Ux(x,$,Q),N=new jx(A,Ce,Q,ee),ve=new K0(A,ie,Ce),we=new i_(A,ie,Ce),Ce.programs=Te.programs,x.capabilities=Q,x.extensions=ie,x.properties=pe,x.renderLists=me,x.shadowMap=ge,x.state=ee,x.info=Ce}ye();const Y=new qx(x,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(B,U,!1))},this.getSize=function(w){return w.set(B,U)},this.setSize=function(w,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,U=F,t.width=Math.floor(w*K),t.height=Math.floor(F*K),G===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(B*K,U*K).floor()},this.setDrawingBufferSize=function(w,F,G){B=w,U=F,K=G,t.width=Math.floor(w*G),t.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,F,G,X){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,F,G,X),ee.viewport(v.copy(oe).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,F,G,X){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,F,G,X),ee.scissor(T.copy(he).multiplyScalar(K).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){ee.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,F=!0,G=!0){let X=0;if(w){let z=!1;if(S!==null){const le=S.texture.format;z=le===yc||le===vc||le===xc}if(z){const le=S.texture.type,xe=le===Yn||le===Bi||le===cr||le===Es||le===mc||le===gc,Ae=Oe.getClearColor(),Re=Oe.getClearAlpha(),Be=Ae.r,ke=Ae.g,Pe=Ae.b;xe?(f[0]=Be,f[1]=ke,f[2]=Pe,f[3]=Re,A.clearBufferuiv(A.COLOR,0,f)):(p[0]=Be,p[1]=ke,p[2]=Pe,p[3]=Re,A.clearBufferiv(A.COLOR,0,p))}else X|=A.COLOR_BUFFER_BIT}F&&(X|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Ye.dispose(),pe.dispose(),b.dispose(),H.dispose(),$.dispose(),Je.dispose(),N.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yc),Y.removeEventListener("sessionend",Kc),Si.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Ce.autoReset,F=ge.enabled,G=ge.autoUpdate,X=ge.needsUpdate,z=ge.type;ye(),Ce.autoReset=w,ge.enabled=F,ge.autoUpdate=G,ge.needsUpdate=X,ge.type=z}function Me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const F=w.target;F.removeEventListener("dispose",$e),_t(F)}function _t(w){Bt(w),pe.remove(w)}function Bt(w){const F=pe.get(w).programs;F!==void 0&&(F.forEach(function(G){Te.releaseProgram(G)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,X,z,le){F===null&&(F=He);const xe=z.isMesh&&z.matrixWorld.determinant()<0,Ae=wd(w,F,G,X,z);ee.setMaterial(X,xe);let Re=G.index,Be=1;if(X.wireframe===!0){if(Re=Z.getWireframeAttribute(G),Re===void 0)return;Be=2}const ke=G.drawRange,Pe=G.attributes.position;let st=ke.start*Be,lt=(ke.start+ke.count)*Be;le!==null&&(st=Math.max(st,le.start*Be),lt=Math.min(lt,(le.start+le.count)*Be)),Re!==null?(st=Math.max(st,0),lt=Math.min(lt,Re.count)):Pe!=null&&(st=Math.max(st,0),lt=Math.min(lt,Pe.count));const mt=lt-st;if(mt<0||mt===1/0)return;Je.setup(z,X,Ae,G,Re);let Wt,nt=ve;if(Re!==null&&(Wt=j.get(Re),nt=we,nt.setIndex(Wt)),z.isMesh)X.wireframe===!0?(ee.setLineWidth(X.wireframeLinewidth*J()),nt.setMode(A.LINES)):nt.setMode(A.TRIANGLES);else if(z.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),ee.setLineWidth(Ie*J()),z.isLineSegments?nt.setMode(A.LINES):z.isLineLoop?nt.setMode(A.LINE_LOOP):nt.setMode(A.LINE_STRIP)}else z.isPoints?nt.setMode(A.POINTS):z.isSprite&&nt.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,Rt=z._multiDrawCounts,it=z._multiDrawCount,hn=Re?j.get(Re).bytesPerElement:1,Wi=pe.get(X).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Wi.setValue(A,"_gl_DrawID",Xt),nt.render(Ie[Xt]/hn,Rt[Xt])}else if(z.isInstancedMesh)nt.renderInstances(st,mt,z.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rt=Math.min(G.instanceCount,Ie);nt.renderInstances(st,mt,Rt)}else nt.render(st,mt)};function Qe(w,F,G){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,Ar(w,F,G),w.side=qn,w.needsUpdate=!0,Ar(w,F,G),w.side=sn):Ar(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),g=Ye.get(G),g.init(F),y.push(g),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Ae=le[xe];Qe(Ae,G,z),X.add(Ae)}else Qe(le,G,z),X.add(le)}),y.pop(),g=null,X},this.compileAsync=function(w,F,G=null){const X=this.compile(w,F,G);return new Promise(z=>{function le(){if(X.forEach(function(xe){pe.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){z(w);return}setTimeout(le,10)}ie.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let zt=null;function Dn(w){zt&&zt(w)}function Yc(){Si.stop()}function Kc(){Si.start()}const Si=new Tf;Si.setAnimationLoop(Dn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){zt=w,Y.setAnimationLoop(w),w===null?Si.stop():Si.start()},Y.addEventListener("sessionstart",Yc),Y.addEventListener("sessionend",Kc),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,S),g=Ye.get(w,y.length),g.init(F),y.push(g),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(ae),ne=this.localClippingEnabled,q=re.init(this.clippingPlanes,ne),_=me.get(w,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Qa(le,F,-1/0,x.sortObjects)}Qa(w,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,fe),Ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ee&&Oe.addToRenderList(_,w),this.info.render.frame++,q===!0&&re.beginShadows();const G=g.state.shadowsArray;ge.render(G,w,F),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,z=_.transmissive;if(g.setupLights(),F.isArrayCamera){const le=F.cameras;if(z.length>0)for(let xe=0,Ae=le.length;xe<Ae;xe++){const Re=le[xe];$c(X,z,w,Re)}Ee&&Oe.render(w);for(let xe=0,Ae=le.length;xe<Ae;xe++){const Re=le[xe];jc(_,w,Re,Re.viewport)}}else z.length>0&&$c(X,z,w,F),Ee&&Oe.render(w),jc(_,w,F);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(x,w,F),Je.resetDefaultState(),R=-1,L=null,y.pop(),y.length>0?(g=y[y.length-1],q===!0&&re.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Qa(w,F,G,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){X&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const xe=$.update(w),Ae=w.material;Ae.visible&&_.push(w,xe,Ae,G,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const xe=$.update(w),Ae=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(Ae)){const Re=xe.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){const Pe=Re[Be],st=Ae[Pe.materialIndex];st&&st.visible&&_.push(w,xe,st,G,Ne.z,Pe)}}else Ae.visible&&_.push(w,xe,Ae,G,Ne.z,null)}}const le=w.children;for(let xe=0,Ae=le.length;xe<Ae;xe++)Qa(le[xe],F,G,X)}function jc(w,F,G,X){const z=w.opaque,le=w.transmissive,xe=w.transparent;g.setupLightsView(G),q===!0&&re.setGlobalState(x.clippingPlanes,G),X&&ee.viewport(v.copy(X)),z.length>0&&Tr(z,F,G),le.length>0&&Tr(le,F,G),xe.length>0&&Tr(xe,F,G),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function $c(w,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new _i(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Mr:Yn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const le=g.state.transmissionRenderTarget[X.id],xe=X.viewport||v;le.setSize(xe.z,xe.w);const Ae=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(D),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Ee&&Oe.render(G);const Re=x.toneMapping;x.toneMapping=Xn;const Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),q===!0&&re.setGlobalState(x.clippingPlanes,X),Tr(w,G,X),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,st=F.length;Pe<st;Pe++){const lt=F[Pe],mt=lt.object,Wt=lt.geometry,nt=lt.material,Ie=lt.group;if(nt.side===sn&&mt.layers.test(X.layers)){const Rt=nt.side;nt.side=Gt,nt.needsUpdate=!0,Zc(mt,G,X,Wt,nt,Ie),nt.side=Rt,nt.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}x.setRenderTarget(Ae),x.setClearColor(D,k),Be!==void 0&&(X.viewport=Be),x.toneMapping=Re}function Tr(w,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,le=w.length;z<le;z++){const xe=w[z],Ae=xe.object,Re=xe.geometry,Be=X===null?xe.material:X,ke=xe.group;Ae.layers.test(G.layers)&&Zc(Ae,F,G,Re,Be,ke)}}function Zc(w,F,G,X,z,le){w.onBeforeRender(x,F,G,X,z,le),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,F,G,X,w,le),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,x.renderBufferDirect(G,F,X,z,w,le),z.side=qn,z.needsUpdate=!0,x.renderBufferDirect(G,F,X,z,w,le),z.side=sn):x.renderBufferDirect(G,F,X,z,w,le),w.onAfterRender(x,F,G,X,z,le)}function Ar(w,F,G){F.isScene!==!0&&(F=He);const X=pe.get(w),z=g.state.lights,le=g.state.shadowsArray,xe=z.state.version,Ae=Te.getParameters(w,z.state,le,F,G),Re=Te.getProgramCacheKey(Ae);let Be=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",$e),Be=new Map,X.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===xe)return Qc(w,Ae),ke}else Ae.uniforms=Te.getUniforms(w),w.onBeforeCompile(Ae,x),ke=Te.acquireProgram(Ae,Re),Be.set(Re,ke),X.uniforms=Ae.uniforms;const Pe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=re.uniform),Qc(w,Ae),X.needsLights=Cd(w),X.lightsStateVersion=xe,X.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Jc(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=_a.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Qc(w,F){const G=pe.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function wd(w,F,G,X,z){F.isScene!==!0&&(F=He),C.resetTextureUnits();const le=F.fog,xe=X.isMeshStandardMaterial?F.environment:null,Ae=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ct,Re=(X.isMeshStandardMaterial?H:b).get(X.envMap||xe),Be=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let mt=Xn;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(mt=x.toneMapping);const Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=Wt!==void 0?Wt.length:0,Ie=pe.get(X),Rt=g.state.lights;if(q===!0&&(ne===!0||w!==L)){const Zt=w===L&&X.id===R;re.setState(X,w,Zt)}let it=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Rt.state.version||Ie.outputColorSpace!==Ae||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Re||X.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==ke||Ie.morphTargets!==Pe||Ie.morphNormals!==st||Ie.morphColors!==lt||Ie.toneMapping!==mt||Ie.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ie.__version=X.version);let hn=Ie.currentProgram;it===!0&&(hn=Ar(X,F,z));let Wi=!1,Xt=!1,eo=!1;const gt=hn.getUniforms(),$n=Ie.uniforms;if(ee.useProgram(hn.program)&&(Wi=!0,Xt=!0,eo=!0),X.id!==R&&(R=X.id,Xt=!0),Wi||L!==w){Q.reverseDepthBuffer?(de.copy(w.projectionMatrix),zp(de),kp(de),gt.setValue(A,"projectionMatrix",de)):gt.setValue(A,"projectionMatrix",w.projectionMatrix),gt.setValue(A,"viewMatrix",w.matrixWorldInverse);const Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(A,be.setFromMatrixPosition(w.matrixWorld)),Q.logarithmicDepthBuffer&&gt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Xt=!0,eo=!0)}if(z.isSkinnedMesh){gt.setOptional(A,z,"bindMatrix"),gt.setOptional(A,z,"bindMatrixInverse");const Zt=z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),gt.setValue(A,"boneTexture",Zt.boneTexture,C))}z.isBatchedMesh&&(gt.setOptional(A,z,"batchingTexture"),gt.setValue(A,"batchingTexture",z._matricesTexture,C),gt.setOptional(A,z,"batchingIdTexture"),gt.setValue(A,"batchingIdTexture",z._indirectTexture,C),gt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&gt.setValue(A,"batchingColorTexture",z._colorsTexture,C));const to=G.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Fe.update(z,G,hn),(Xt||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,gt.setValue(A,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($n.envMap.value=Re,$n.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&($n.envMapIntensity.value=F.environmentIntensity),Xt&&(gt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Rd($n,eo),le&&X.fog===!0&&ce.refreshFogUniforms($n,le),ce.refreshMaterialUniforms($n,X,K,U,g.state.transmissionRenderTarget[w.id]),_a.upload(A,Jc(Ie),$n,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_a.upload(A,Jc(Ie),$n,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(A,"center",z.center),gt.setValue(A,"modelViewMatrix",z.modelViewMatrix),gt.setValue(A,"normalMatrix",z.normalMatrix),gt.setValue(A,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Zt=X.uniformsGroups;for(let no=0,Pd=Zt.length;no<Pd;no++){const eh=Zt[no];N.update(eh,hn),N.bind(eh,hn)}}return hn}function Rd(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Cd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,F,G){pe.get(w.texture).__webglTexture=F,pe.get(w.depthTexture).__webglTexture=G;const X=pe.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const G=pe.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){S=w,P=F,E=G;let X=!0,z=null,le=!1,xe=!1;if(w){const Re=pe.get(w);if(Re.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(A.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Re.__hasExternalTextures)C.rebindTextures(w,pe.get(w.texture).__webglTexture,pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&pe.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const ke=pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?z=ke[F][G]:z=ke[F],le=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=pe.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[G]:z=ke,v.copy(w.viewport),T.copy(w.scissor),O=w.scissorTest}else v.copy(oe).multiplyScalar(K).floor(),T.copy(he).multiplyScalar(K).floor(),O=Ve;if(ee.bindFramebuffer(A.FRAMEBUFFER,z)&&X&&ee.drawBuffers(w,z),ee.viewport(v),ee.scissor(T),ee.setScissorTest(O),le){const Re=pe.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,G)}else if(xe){const Re=pe.get(w.texture),Be=F||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,Be)}R=-1},this.readRenderTargetPixels=function(w,F,G,X,z,le,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){ee.bindFramebuffer(A.FRAMEBUFFER,Ae);try{const Re=w.texture,Be=Re.format,ke=Re.type;if(!Q.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&G>=0&&G<=w.height-z&&A.readPixels(F,G,X,z,Le.convert(Be),Le.convert(ke),le)}finally{const Re=S!==null?pe.get(S).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,X,z,le,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){const Re=w.texture,Be=Re.format,ke=Re.type;if(!Q.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-X&&G>=0&&G<=w.height-z){ee.bindFramebuffer(A.FRAMEBUFFER,Ae);const Pe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Pe),A.bufferData(A.PIXEL_PACK_BUFFER,le.byteLength,A.STREAM_READ),A.readPixels(F,G,X,z,Le.convert(Be),Le.convert(ke),0);const st=S!==null?pe.get(S).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,st);const lt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Bp(A,lt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Pe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,le),A.deleteBuffer(Pe),A.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,G=0){w.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-G),z=Math.floor(w.image.width*X),le=Math.floor(w.image.height*X),xe=F!==null?F.x:0,Ae=F!==null?F.y:0;C.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,xe,Ae,z,le),ee.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,X=null,z=0){w.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let le,xe,Ae,Re,Be,ke;G!==null?(le=G.max.x-G.min.x,xe=G.max.y-G.min.y,Ae=G.min.x,Re=G.min.y):(le=w.image.width,xe=w.image.height,Ae=0,Re=0),X!==null?(Be=X.x,ke=X.y):(Be=0,ke=0);const Pe=Le.convert(F.format),st=Le.convert(F.type);C.setTexture2D(F,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,F.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=A.getParameter(A.UNPACK_ROW_LENGTH),mt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Wt=A.getParameter(A.UNPACK_SKIP_PIXELS),nt=A.getParameter(A.UNPACK_SKIP_ROWS),Ie=A.getParameter(A.UNPACK_SKIP_IMAGES),Rt=w.isCompressedTexture?w.mipmaps[z]:w.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ae),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Be,ke,le,xe,Pe,st,Rt.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Be,ke,Rt.width,Rt.height,Pe,Rt.data):A.texSubImage2D(A.TEXTURE_2D,z,Be,ke,le,xe,Pe,st,Rt),A.pixelStorei(A.UNPACK_ROW_LENGTH,lt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ie),z===0&&F.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,X=null,z=0){w.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,w=arguments[2],F=arguments[3],z=arguments[4]||0);let le,xe,Ae,Re,Be,ke,Pe,st,lt;const mt=w.isCompressedTexture?w.mipmaps[z]:w.image;G!==null?(le=G.max.x-G.min.x,xe=G.max.y-G.min.y,Ae=G.max.z-G.min.z,Re=G.min.x,Be=G.min.y,ke=G.min.z):(le=mt.width,xe=mt.height,Ae=mt.depth,Re=0,Be=0,ke=0),X!==null?(Pe=X.x,st=X.y,lt=X.z):(Pe=0,st=0,lt=0);const Wt=Le.convert(F.format),nt=Le.convert(F.type);let Ie;if(F.isData3DTexture)C.setTexture3D(F,0),Ie=A.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),Ie=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,F.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,F.unpackAlignment);const Rt=A.getParameter(A.UNPACK_ROW_LENGTH),it=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hn=A.getParameter(A.UNPACK_SKIP_PIXELS),Wi=A.getParameter(A.UNPACK_SKIP_ROWS),Xt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Re),A.pixelStorei(A.UNPACK_SKIP_ROWS,Be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Ie,z,Pe,st,lt,le,xe,Ae,Wt,nt,mt.data):F.isCompressedArrayTexture?A.compressedTexSubImage3D(Ie,z,Pe,st,lt,le,xe,Ae,Wt,mt.data):A.texSubImage3D(Ie,z,Pe,st,lt,le,xe,Ae,Wt,nt,mt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xt),z===0&&F.generateMipmaps&&A.generateMipmap(Ie),ee.unbindTexture()},this.initRenderTarget=function(w){pe.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){P=0,E=0,S=null,ee.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Ha?"display-p3":"srgb"}}class If extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new I;class dr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wa extends jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Vs=new I,as=new I,os=new I,ls=new se,Gs=new se,Df=new De,Yr=new I,Ws=new I,Kr=new I,jh=new se,Do=new se,$h=new se;class Ac extends ft{constructor(e=new Wa){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lf(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new dr(n,3,0,!1)),rs.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;jr(Yr.set(-.5,-.5,0),os,a,as,s,r),jr(Ws.set(.5,-.5,0),os,a,as,s,r),jr(Kr.set(.5,.5,0),os,a,as,s,r),jh.set(0,0),Do.set(1,0),$h.set(1,1);let o=e.ray.intersectTriangle(Yr,Ws,Kr,!1,Vs);if(o===null&&(jr(Ws.set(-.5,.5,0),os,a,as,s,r),Do.set(0,1),o=e.ray.intersectTriangle(Yr,Kr,Ws,!1,Vs),o===null))return;const l=e.ray.origin.distanceTo(Vs);l<e.near||l>e.far||t.push({distance:l,point:Vs.clone(),uv:rn.getInterpolation(Vs,Yr,Ws,Kr,jh,Do,$h,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(i,e,t,n,s,r){ls.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*ls.x-s*ls.y,Gs.y=s*ls.x+r*ls.y):Gs.copy(ls),i.copy(e),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(Df)}const Zh=new I,Jh=new tt,Qh=new tt,Zx=new I,eu=new De,$r=new I,No=new Cn,tu=new De,Uo=new Va;class Jx extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(s),e.ray.intersectsSphere(No)!==!1&&(tu.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(tu),!(this.boundingBox!==null&&Uo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Jh.fromBufferAttribute(s.attributes.skinIndex,e),Qh.fromBufferAttribute(s.attributes.skinWeight,e),Zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Qh.getComponent(r);if(a!==0){const o=Jh.getComponent(r);eu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zx.copy(Zh).applyMatrix4(eu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nf extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wc extends Mt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,h=Lt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new De,Qx=new De;class Rc{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Qx;nu.multiplyMatrices(o,t[r]),nu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wc(t,e,e,on,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Nf),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Wl extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new De,iu=new De,Zr=[],su=new Rn,ev=new De,Xs=new je,qs=new Cn;class Xa extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ev)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),su.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),qs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),iu.multiplyMatrices(n,cs),Xs.matrixWorld=iu,Xs.raycast(e,Zr);for(let a=0,o=Zr.length;a<o;a++){const l=Zr[a];l.instanceId=r,l.object=this,t.push(l)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(s*this.count),s,this.count,_c,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uf extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new I,Da=new I,ru=new De,Ys=new Va,Jr=new Cn,Oo=new I,au=new I;class Cc extends ft{constructor(e=new yt,t=new Uf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)La.fromBufferAttribute(t,s-1),Da.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;ru.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),x=Qr(this,e,Ys,l,m,y);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Qr(this,e,Ys,l,_,g);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=Qr(this,e,Ys,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Qr(this,e,Ys,l,p-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),t.distanceSqToSegment(La,Da,Oo,au)>n)return;Oo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Oo);if(!(l<e.near||l>e.far))return{distance:l,point:au.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ou=new I,lu=new I;class tv extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ou.fromBufferAttribute(t,s),lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ou.distanceTo(lu);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nv extends Cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Of extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cu=new De,Xl=new Va,ea=new Cn,ta=new I;class iv extends ft{constructor(e=new yt,t=new Of){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;cu.copy(s).invert(),Xl.copy(e.ray).applyMatrix4(cu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);ta.fromBufferAttribute(u,g),hu(ta,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)ta.fromBufferAttribute(u,p),hu(ta,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hu(i,e,t,n,s,r,a){const o=Xl.distanceSqToPoint(i);if(o<t){const l=new I;Xl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ds extends Mt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],a=[],o=new I,l=new De;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(At(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pc extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sv extends Pc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const na=new I,Fo=new Ic,Bo=new Ic,zo=new Ic;class rv extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Fo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Bo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),zo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Bo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fo.calc(l),Bo.calc(l),zo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function av(i,e){const t=1-i;return t*t*e}function ov(i,e){return 2*(1-i)*i*e}function lv(i,e){return i*i*e}function nr(i,e,t,n){return av(i,e)+ov(i,t)+lv(i,n)}function cv(i,e){const t=1-i;return t*t*t*e}function hv(i,e){const t=1-i;return 3*t*t*i*e}function uv(i,e){return 3*(1-i)*i*i*e}function fv(i,e){return i*i*i*e}function ir(i,e,t,n,s){return cv(i,e)+hv(i,t)+uv(i,n)+fv(i,s)}class Ff extends Pn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,s.x,r.x,a.x,o.x),ir(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dv extends Pn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,s.x,r.x,a.x,o.x),ir(e,s.y,r.y,a.y,o.y),ir(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bf extends Pn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pv extends Pn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends Pn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,s.x,r.x,a.x),nr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mv extends Pn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,s.x,r.x,a.x),nr(e,s.y,r.y,a.y),nr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uu(o,l.x,c.x,h.x,u.x),uu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:sv,CatmullRomCurve3:rv,CubicBezierCurve:Ff,CubicBezierCurve3:dv,EllipseCurve:Pc,LineCurve:Bf,LineCurve3:pv,QuadraticBezierCurve:zf,QuadraticBezierCurve3:mv,SplineCurve:kf});class gv extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ql[s.type]().fromJSON(s))}return this}}class Yl extends gv{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Bf(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new zf(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Ff(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Pc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zi extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qa extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){const M=new I,P=new I;let E=0;const S=(t-e)/n;for(let R=0;R<=r;R++){const L=[],v=R/r,T=v*(t-e)+e;for(let O=0;O<=s;O++){const D=O/s,k=D*l+o,B=Math.sin(k),U=Math.cos(k);P.x=T*B,P.y=-v*n+g,P.z=T*U,u.push(P.x,P.y,P.z),M.set(B,S,U).normalize(),d.push(M.x,M.y,M.z),f.push(D,1-v),L.push(p++)}_.push(L)}for(let R=0;R<s;R++)for(let L=0;L<r;L++){const v=_[L][R],T=_[L+1][R],O=_[L+1][R+1],D=_[L][R+1];e>0&&(h.push(v,T,D),E+=3),t>0&&(h.push(T,O,D),E+=3)}c.addGroup(m,E,0),m+=E}function x(M){const P=p,E=new se,S=new I;let R=0;const L=M===!0?e:t,v=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;const T=p;for(let O=0;O<=s;O++){const k=O/s*l+o,B=Math.cos(k),U=Math.sin(k);S.x=L*U,S.y=g*v,S.z=L*B,u.push(S.x,S.y,S.z),d.push(0,v,0),E.x=B*.5+.5,E.y=U*.5*v+.5,f.push(E.x,E.y),p++}for(let O=0;O<s;O++){const D=P+O,k=T+O;M===!0?h.push(k,k+1,D):h.push(k+1,k,D),R+=3}c.addGroup(m,R,M===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lc extends qa{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new I,M=new I,P=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],M),f(t[E+2],P),l(x,M,P,y)}function l(y,x,M,P){const E=P+1,S=[];for(let R=0;R<=E;R++){S[R]=[];const L=y.clone().lerp(M,R/E),v=x.clone().lerp(M,R/E),T=E-R;for(let O=0;O<=T;O++)O===0&&R===E?S[R][O]=L:S[R][O]=L.clone().lerp(v,O/T)}for(let R=0;R<E;R++)for(let L=0;L<2*(E-R)-1;L++){const v=Math.floor(L/2);L%2===0?(d(S[R][v+1]),d(S[R+1][v]),d(S[R][v])):(d(S[R][v+1]),d(S[R+1][v+1]),d(S[R+1][v]))}}function c(y){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=g(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;a.push(M,1-P)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],M=a[y+2],P=a[y+4],E=Math.max(x,M,P),S=Math.min(x,M,P);E>.9&&S<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function p(){const y=new I,x=new I,M=new I,P=new I,E=new se,S=new se,R=new se;for(let L=0,v=0;L<r.length;L+=9,v+=6){y.set(r[L+0],r[L+1],r[L+2]),x.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),E.set(a[v+0],a[v+1]),S.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),P.copy(y).add(x).add(M).divideScalar(3);const T=g(P);_(E,v+0,y,T),_(S,v+2,x,T),_(R,v+4,M,T)}}function _(y,x,M,P){P<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.vertices,e.indices,e.radius,e.details)}}class Hf extends Yl{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Yl().fromJSON(s))}return this}}const _v={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Vf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Sv(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let p=t;p<s;p+=t)u=i[p],d=i[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return pr(r,a,t,o,l,f,0),a}};function Vf(i,e,t,n,s){let r,a;if(s===Dv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=fu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=fu(r,i[r],i[r+1],a);return a&&Ya(a,a.next)&&(gr(a),a=a.next),a}function ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ya(t,t.next)||pt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&wv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?vv(i,n,s,r):xv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yv(ki(i),e,t),pr(i,e,t,n,s,r,2)):a===2&&Mv(i,e,t,n,s,r):pr(ki(i),e,t,n,s,r,1);break}}}function xv(i){const e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ps(s,o,r,l,a,c,p.x,p.y)&&pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vv(i,e,t,n){const s=i.prev,r=i,a=i.next;if(pt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Kl(f,p,e,t,n),y=Kl(_,g,e,t,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&ps(o,h,l,u,c,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&ps(o,h,l,u,c,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yv(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ya(s,r)&&Gf(s,n,n.next,r)&&mr(s,r)&&mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gr(n),gr(n.next),n=i=r),n=n.next}while(n!==i);return ki(n)}function Mv(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pv(a,o)){let l=Wf(a,o);a=ki(a,a.next),l=ki(l,l.next),pr(a,e,t,n,s,r,0),pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sv(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Vf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cv(c));for(s.sort(bv),r=0;r<s.length;r++)t=Ev(s[r],t);return t}function bv(i,e){return i.x-e.x}function Ev(i,e){const t=Tv(i,e);if(!t)return e;const n=Wf(t,i);return ki(n,n.next),ki(t,t.next)}function Tv(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ps(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Av(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Av(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function wv(i,e,t,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rv(s)}function Rv(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ps(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Pv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Iv(i,e)&&(mr(i,e)&&mr(e,i)&&Lv(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||Ya(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ya(i,e){return i.x===e.x&&i.y===e.y}function Gf(i,e,t,n){const s=sa(pt(i,e,t)),r=sa(pt(i,e,n)),a=sa(pt(t,n,i)),o=sa(pt(t,n,e));return!!(s!==r&&a!==o||s===0&&ia(i,t,e)||r===0&&ia(i,n,e)||a===0&&ia(t,i,n)||o===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sa(i){return i>0?1:i<0?-1:0}function Iv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function Lv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wf(i,e){const t=new jl(i.i,i.x,i.y),n=new jl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fu(i,e,t,n){const s=new jl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class sr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return sr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];du(e),pu(n,e);let a=e.length;t.forEach(du);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,pu(n,t[l]);const o=_v.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function du(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Nc extends yt{constructor(e=new Hf([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Nv;let x,M=!1,P,E,S,R;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,P=m.computeFrenetFrames(h,!1),E=new I,S=new I,R=new I),d||(g=0,f=0,p=0,_=0);const L=o.extractPoints(c);let v=L.shape;const T=L.holes;if(!sr.isClockWise(v)){v=v.reverse();for(let J=0,A=T.length;J<A;J++){const V=T[J];sr.isClockWise(V)&&(T[J]=V.reverse())}}const D=sr.triangulateShape(v,T),k=v;for(let J=0,A=T.length;J<A;J++){const V=T[J];v=v.concat(V)}function B(J,A,V){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(A,V)}const U=v.length,K=D.length;function W(J,A,V){let ie,Q,ee;const Ce=J.x-A.x,pe=J.y-A.y,C=V.x-J.x,b=V.y-J.y,H=Ce*Ce+pe*pe,j=Ce*b-pe*C;if(Math.abs(j)>Number.EPSILON){const Z=Math.sqrt(H),$=Math.sqrt(C*C+b*b),Te=A.x-pe/Z,ce=A.y+Ce/Z,me=V.x-b/$,Ye=V.y+C/$,re=((me-Te)*b-(Ye-ce)*C)/(Ce*b-pe*C);ie=Te+Ce*re-J.x,Q=ce+pe*re-J.y;const ge=ie*ie+Q*Q;if(ge<=2)return new se(ie,Q);ee=Math.sqrt(ge/2)}else{let Z=!1;Ce>Number.EPSILON?C>Number.EPSILON&&(Z=!0):Ce<-Number.EPSILON?C<-Number.EPSILON&&(Z=!0):Math.sign(pe)===Math.sign(b)&&(Z=!0),Z?(ie=-pe,Q=Ce,ee=Math.sqrt(H)):(ie=Ce,Q=pe,ee=Math.sqrt(H/2))}return new se(ie/ee,Q/ee)}const fe=[];for(let J=0,A=k.length,V=A-1,ie=J+1;J<A;J++,V++,ie++)V===A&&(V=0),ie===A&&(ie=0),fe[J]=W(k[J],k[V],k[ie]);const oe=[];let he,Ve=fe.concat();for(let J=0,A=T.length;J<A;J++){const V=T[J];he=[];for(let ie=0,Q=V.length,ee=Q-1,Ce=ie+1;ie<Q;ie++,ee++,Ce++)ee===Q&&(ee=0),Ce===Q&&(Ce=0),he[ie]=W(V[ie],V[ee],V[Ce]);oe.push(he),Ve=Ve.concat(he)}for(let J=0;J<g;J++){const A=J/g,V=f*Math.cos(A*Math.PI/2),ie=p*Math.sin(A*Math.PI/2)+_;for(let Q=0,ee=k.length;Q<ee;Q++){const Ce=B(k[Q],fe[Q],ie);ae(Ce.x,Ce.y,-V)}for(let Q=0,ee=T.length;Q<ee;Q++){const Ce=T[Q];he=oe[Q];for(let pe=0,C=Ce.length;pe<C;pe++){const b=B(Ce[pe],he[pe],ie);ae(b.x,b.y,-V)}}}const Ge=p+_;for(let J=0;J<U;J++){const A=d?B(v[J],Ve[J],Ge):v[J];M?(S.copy(P.normals[0]).multiplyScalar(A.x),E.copy(P.binormals[0]).multiplyScalar(A.y),R.copy(x[0]).add(S).add(E),ae(R.x,R.y,R.z)):ae(A.x,A.y,0)}for(let J=1;J<=h;J++)for(let A=0;A<U;A++){const V=d?B(v[A],Ve[A],Ge):v[A];M?(S.copy(P.normals[J]).multiplyScalar(V.x),E.copy(P.binormals[J]).multiplyScalar(V.y),R.copy(x[J]).add(S).add(E),ae(R.x,R.y,R.z)):ae(V.x,V.y,u/h*J)}for(let J=g-1;J>=0;J--){const A=J/g,V=f*Math.cos(A*Math.PI/2),ie=p*Math.sin(A*Math.PI/2)+_;for(let Q=0,ee=k.length;Q<ee;Q++){const Ce=B(k[Q],fe[Q],ie);ae(Ce.x,Ce.y,u+V)}for(let Q=0,ee=T.length;Q<ee;Q++){const Ce=T[Q];he=oe[Q];for(let pe=0,C=Ce.length;pe<C;pe++){const b=B(Ce[pe],he[pe],ie);M?ae(b.x,b.y+x[h-1].y,x[h-1].x+V):ae(b.x,b.y,u+V)}}}q(),ne();function q(){const J=s.length/3;if(d){let A=0,V=U*A;for(let ie=0;ie<K;ie++){const Q=D[ie];be(Q[2]+V,Q[1]+V,Q[0]+V)}A=h+g*2,V=U*A;for(let ie=0;ie<K;ie++){const Q=D[ie];be(Q[0]+V,Q[1]+V,Q[2]+V)}}else{for(let A=0;A<K;A++){const V=D[A];be(V[2],V[1],V[0])}for(let A=0;A<K;A++){const V=D[A];be(V[0]+U*h,V[1]+U*h,V[2]+U*h)}}n.addGroup(J,s.length/3-J,0)}function ne(){const J=s.length/3;let A=0;de(k,A),A+=k.length;for(let V=0,ie=T.length;V<ie;V++){const Q=T[V];de(Q,A),A+=Q.length}n.addGroup(J,s.length/3-J,1)}function de(J,A){let V=J.length;for(;--V>=0;){const ie=V;let Q=V-1;Q<0&&(Q=J.length-1);for(let ee=0,Ce=h+g*2;ee<Ce;ee++){const pe=U*ee,C=U*(ee+1),b=A+ie+pe,H=A+Q+pe,j=A+Q+C,Z=A+ie+C;Ne(b,H,j,Z)}}}function ae(J,A,V){l.push(J),l.push(A),l.push(V)}function be(J,A,V){He(J),He(A),He(V);const ie=s.length/3,Q=y.generateTopUV(n,s,ie-3,ie-2,ie-1);Ee(Q[0]),Ee(Q[1]),Ee(Q[2])}function Ne(J,A,V,ie){He(J),He(A),He(ie),He(A),He(V),He(ie);const Q=s.length/3,ee=y.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Ee(ee[0]),Ee(ee[1]),Ee(ee[3]),Ee(ee[1]),Ee(ee[2]),Ee(ee[3])}function He(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Ee(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Uv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ql[s.type]().fromJSON(s)),new Nc(n,e.options)}}const Nv={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-p),new se(_,1-m)]:[new se(o,1-l),new se(h,1-u),new se(f,1-p),new se(g,1-m)]}};function Uv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ka extends Dc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class _r extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new I,p=new se;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,M=y+n+1,P=y+n+2,E=y+1;o.push(x,M,E),o.push(M,P,E)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Uc extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const _=p/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const _=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,y=(s+1)*f+p;a.push(_,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oc extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Oc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mu extends jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class li extends jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ov(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fv(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function gu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Xf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class br{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bv extends br{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fs:r=e,o=2*t-n;break;case wa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fs:a=e,l=2*n-t;break;case wa:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,M=f*g-f*_;for(let P=0;P!==o;++P)r[P]=m*a[h+P]+y*a[c+P]+x*a[l+P]+M*a[u+P];return r}}class qf extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class zv extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ov(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ur;class Ns extends Ln{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=hr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Yf extends Ln{}Yf.prototype.ValueTypeName="color";class Rs extends Ln{}Rs.prototype.ValueTypeName="number";class kv extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Cs extends Ln{InterpolantFactoryMethodLinear(e){return new kv(this.times,this.values,this.getValueSize(),e)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Ln{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=hr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Ln{}Ps.prototype.ValueTypeName="vector";class Na{constructor(e="",t=-1,n=[],s=Mc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Vv(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Fv(l);l=gu(l,1,h),c=gu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];Xf(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}s.push(new Rs(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ps,f+".position",d,"pos",s),n(Cs,f+".quaternion",d,"rot",s),n(Ps,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return Yf;case"quaternion":return Cs;case"bool":case"boolean":return Ns;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hv(i.type);if(i.times===void 0){const t=[],n=[];Xf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gv{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Wv=new Gv;class Os{constructor(e){this.manager=e!==void 0?e:Wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class Xv extends Error{constructor(e,t){super(e),this.response=t}}class Kf extends Os{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let E=0,S=h.length;E<S;E++){const R=h[E];R.onProgress&&R.onProgress(P)}m.enqueue(M),y()}},x=>{m.error(x)})}}});return new Response(g)}else throw new Xv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ui.add(e,c);const h=zn[e];delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qv extends Os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=fr("img");function l(){h(),ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class jf extends Os{constructor(e){super(e)}load(e,t,n,s){const r=new Mt,a=new qv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ja extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yv extends ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ko=new De,_u=new I,xu=new I;class Fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kv extends Fc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jv extends ja{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vu=new De,Ks=new I,Ho=new I;class $v extends Fc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class Zv extends ja{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jv extends Fc{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Jv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qv extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(e,l),r.manager.itemStart(e)}}class ey{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Ft.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const Bc="\\[\\]\\.:\\/",ty=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",ny="[^"+Bc.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",zc),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),oy=new RegExp("^"+iy+sy+ry+ay+"$"),ly=["material","materials","bones","map"];class cy{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(e){const t=oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=cy;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hy{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:us,endingEnd:us};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=op,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case cp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Mc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===lp;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===ff){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=fs,s.endingEnd=fs):(e?s.endingStart=this.zeroSlopeAtStart?fs:us:s.endingStart=wa,t?s.endingEnd=this.zeroSlopeAtEnd?fs:us:s.endingEnd=wa)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const uy=new Float32Array(1);class fy extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new ey(et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qf(new Float32Array(2),new Float32Array(2),1,uy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Na.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Mc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new hy(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Na.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const gn={time:120,gemEvery:7,gemWin:10,countdown:15,respawn:5,regenDelay:3,regenRate:.13,bushSee:2.2,revealAfterShot:1},dy={gemWin:5,countdown:10},$a={dealer:{name:"레이",role:"딜러",ai:"mid",rig:"dealer",color:16752698,hp:3100,r:.4,speed:2.5,reload:1.3,ammo:3,height:2.05,cycle:.8,idle:1.47,aim:.067,shotEnd:.7,attack:{kind:"burst",n:6,gap:.1,cooldown:.05,dmg:360,speed:13.3,range:9,spread:0,size:.17},superMul:.93,superSuperMul:.87,super:{kind:"burst",n:12,gap:.1,dmg:320,speed:16.3,range:11,spread:0,size:.337,pierce:!0,passWalls:!0},gun:"pistol"},tank:{name:"볼트",role:"탱커",ai:"close",rig:"tank",color:13646384,hp:5e3,r:.483,speed:2.667,reload:1.6,ammo:3,height:2.3,cycle:.733,idle:1,aim:.1,shotEnd:1,attack:{kind:"spread",n:5,arc:Math.PI/2,cooldown:.25,dmg:440,speed:9.5,range:5.33,size:.18,hitR:0},superMul:1,superSuperMul:1.2,takenMul:2.4,super:{kind:"dash",dist:5.5,time:.825,dmg:1e3,push:.87,slowR:3,slowArea:1,slowTime:1.5,slowAbs:350/300},gun:"shotgun"},sniper:{name:"미호",role:"저격수",ai:"far",rig:"sniper",color:3130546,hp:2800,r:.4,speed:2.5,reload:2.3,ammo:3,height:2.05,cycle:.667,idle:1.4,aim:.1,shotEnd:1.3,attack:{kind:"snipe",cooldown:.5,dmg:1800,near:.2,full:.85,speed:13.3,range:10,size:.337},superMul:.93,superSuperMul:.9,super:{kind:"pierce",dmg:900,speed:17,range:8.67,size:.42},gun:"rifle"}},py=4e3,xr=["dealer","tank","sniper"],vr=[{name:"새싹",think:.9,aim:.32,dodge:0,superUse:.3,react:.7,iq:.15},{name:"연습생",think:.6,aim:.22,dodge:.25,superUse:.6,react:.45,iq:.45},{name:"선수",think:.38,aim:.14,dodge:.5,superUse:.85,react:.3,iq:.75},{name:"고수",think:.22,aim:.08,dodge:.75,superUse:1,react:.18,iq:.95}],kc=i=>vr[Math.min(vr.length-1,Math.floor(i/60))],yu={win:8,lose:-4,draw:0,safeUnder:40},Mu=[".B.................B.","BB......1.1.1......BB","BB.................BB","..###...........###..","..#BBB.........BBB#..","...BBB...###...BBB...",".........BBB.........",".##.....BBBBB.....##.",".BBB....##.##....BBB.","..BB.....WWW.....BB..","......BBBWWWBBB......","...####.......####...","..NN.............NN..","..BBB....#.#....BBB..","..BBB....#.#....BBB..","........##...##......"],my=".##.......M.......##.";function gy(){const i=[...Mu,my,...Mu.slice().reverse().map(e=>e.replace(/1/g,"2"))];for(const e of i)if(e.length!==21)throw new Error(`맵 줄 길이 ${e.length} ≠ 21: ${e}`);return i.map(e=>e.split(""))}function _y(i,e,t,n,s){const r=i.W,a=i.H,o=Math.floor(e),l=Math.floor(t);let c=Math.max(0,Math.min(r-1,Math.floor(n))),h=Math.max(0,Math.min(a-1,Math.floor(s)));if(ci(i,c,h)){let x=null;for(let M=-1;M<=1;M++)for(let P=-1;P<=1;P++)ci(i,c+P,h+M)||(x=[c+P,h+M]);if(!x)return[];[c,h]=x}const u=(x,M)=>M*r+x,d=new Float32Array(r*a).fill(1/0),f=new Int32Array(r*a).fill(-1),p=new Uint8Array(r*a),_=[[o,l]];d[u(o,l)]=0;const g=(x,M)=>Math.hypot(x-c,M-h);for(;_.length;){let x=0;for(let S=1;S<_.length;S++)d[u(..._[S])]+g(..._[S])<d[u(..._[x])]+g(..._[x])&&(x=S);const[M,P]=_.splice(x,1)[0],E=u(M,P);if(!p[E]){if(p[E]=1,M===c&&P===h)break;for(let S=-1;S<=1;S++)for(let R=-1;R<=1;R++){if(!R&&!S)continue;const L=M+R,v=P+S;if(ci(i,L,v)||R&&S&&(ci(i,M+R,P)||ci(i,M,P+S)))continue;const T=d[E]+(R&&S?1.414:1),O=u(L,v);T<d[O]&&(d[O]=T,f[O]=E,_.push([L,v]))}}}const m=[];let y=u(c,h);if(f[y]<0&&y!==u(o,l))return[];for(;y>=0&&y!==u(o,l);)m.unshift({x:y%r+.5,z:Math.floor(y/r)+.5}),y=f[y];return m}const Su={close:1.3,mid:.72,far:.86},xy=3,vy=5,ii=new Set,Tt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function yy(i){return(i()+i()+i()-1.5)/1.5}function bu(i,e,t,n){const s=e.c.attack.speed||12,r=Tt(e,t),a=r/s*.8;return Math.atan2(t.z+t.vz*a-e.z,t.x+t.vx*a-e.x)+yy(i.rand)*n.aim}function My(i,e){for(const t of i.bullets){if(t.team===e.team)continue;const n=e.x-t.x,s=e.z-t.z;if(Math.hypot(n,s)>3.2)continue;const a=Math.hypot(t.vx,t.vz)||1;if((n*t.vx+s*t.vz)/a<=0)continue;if(Math.abs((n*t.vz-s*t.vx)/a)<.8)return t}return null}function Sy(i,e,t){const n=e.tier??i.tier,s=e.ai??={next:i.rand()*n.think,path:[],strafe:i.rand()<.5?1:-1,dodge:null,seen:new Map,healing:!1},r=e.input;if(s.next-=t,s.next<=0&&(s.next=n.think*(.8+i.rand()*.4),Ey(i,e,s,n)),s.mode==="walk"){for(;s.path.length&&Tt(s.path[0],e)<.35;)s.path.shift();if(s.path.length){const a=s.path[0],o=Tt(a,e);r.mx=(a.x-e.x)/o,r.mz=(a.z-e.z)/o}else r.mx=0,r.mz=0}s.dodge&&i.t<s.dodge.until&&(r.mx=s.dodge.x,r.mz=s.dodge.z)}function by(i,e,t,n){i.focus??={};const s=i.focus[e];if(s&&i.t<s.until&&t.includes(s.u))return s.u;let r=null,a=1/0;for(const o of t){const c=Math.min(...n.map(h=>Tt(h,o)))+o.hp/o.maxHp*4-o.gems*1.2;c<a&&(a=c,r=o)}return r&&(i.focus[e]={u:r,until:i.t+2}),r}function Ey(i,e,t,n){const s=e.input,r=i.rand()<n.iq,a=i.units.length===2,o=e.team==="blue"?"red":"blue",l=e.team==="blue"?-1:1,c=i.units.filter(B=>B.team!==e.team&&xi(i,e.team,B)),h=i.units.filter(B=>B.team===e.team&&B.alive&&B!==e),u=[e,...h],d=Jf(e),f=e.hp/e.maxHp,p=i.spawns[e.team][e.k],_={x:p.x,z:p.z-l*3},g=Ua(i,e.team),m=Ua(i,o),y=i.countdown?.team===e.team,x=i.countdown?.team===o;for(const B of c)!t.seen.has(B.id)||i.t-t.seen.get(B.id).last>1.5?t.seen.set(B.id,{first:i.t,last:i.t}):t.seen.get(B.id).last=i.t;const M=B=>i.t-t.seen.get(B.id).first>=n.react;let P=null,E=1/0;for(const B of c){const U=Tt(B,e);U<E&&(E=U,P=B)}let S=P,R=E;if(r&&c.length&&!ii.has("focus")){const B=x?c.reduce((U,K)=>K.gems>U.gems?K:U):by(i,e.team,c,u);B&&Tt(B,e)<=d&&(S=B,R=Tt(B,e))}const L=i.rand()<n.dodge?My(i,e):null;if(L){const B=Math.hypot(L.vx,L.vz)||1,U=i.rand()<.5?1:-1;t.dodge={x:-L.vz/B*U,z:L.vx/B*U,until:i.t+.3}}const v=S&&Ly(i,e.x,e.z,S.x,S.z);if(S&&v&&M(S)&&R<=d*(e.c.ai==="close"?.95:1)&&e.ammo>=1&&(e.ammo>=2||R<d*.75||S.hp<S.maxHp*.3)&&(s.fire=bu(i,e,S,n)),S&&v&&e.superCharge>=1&&R<=Dy(e)&&i.rand()<n.superUse&&(s.superFire=bu(i,e,S,n)),r&&!ii.has("heal")&&(f<(a?.25:.4)||t.healing&&f<(a?.5:.85))&&!(S&&S.hp/S.maxHp<.25&&R<d))return t.healing=!0,yn(i,e,t,Ty(i,e,h,c,_,l));if(t.healing=!1,!r&&f<.35&&S&&R<d+3)return yn(i,e,t,_);if(a?!1:r&&!ii.has("carry")?e.gems>=xy&&g>=i.rules.gemWin-2&&g>=m:e.gems>=4&&g>=i.rules.gemWin-2&&g>=m){if(S&&R<d+2)return yn(i,e,t,_);const B=h.length?Ay(h):{x:p.x,z:(p.z+i.mine.z)/2};return yn(i,e,t,{x:B.x+(i.rand()-.5)*3,z:B.z-l*(3+i.rand()*2)})}if(r&&S&&!ii.has("pack")){const B=c.filter(K=>Tt(K,e)<d+3).length,U=h.filter(K=>Tt(K,e)<vy).length;if(B>=2&&U===0&&h.length)return yn(i,e,t,wy(h,e))}if(r&&y&&!ii.has("hold")&&!(S&&R<d+1)){const B={x:i.mine.x+(e.k-1)*3,z:i.mine.z-l*4};if(Tt(B,e)>1.5)return yn(i,e,t,B)}if(S&&R<d*1.5+2){const B=e.c.ai==="close"?Su.close:d*Su[e.c.ai];if(R>B+.8||!v)return yn(i,e,t,S);t.mode="fight",i.rand()<.15&&(t.strafe*=-1);const U=(S.x-e.x)/R,K=(S.z-e.z)/R,W=R<B-.8?-1:0;s.mx=U*W+-K*t.strafe*.85,s.mz=K*W+U*t.strafe*.85;return}if(r&&x&&!ii.has("hunt")){const B=i.units.filter(K=>K.team===o&&K.alive).reduce((K,W)=>!K||W.gems>K.gems?W:K,null),U=B&&xi(i,e.team,B)?B:{x:i.mine.x+(e.k-1)*2,z:i.mine.z+l*5};return yn(i,e,t,U)}let O=null,D=1/0;for(const B of i.gems){const U=Tt(B,e);r&&!ii.has("gem")&&c.some(K=>Tt(K,B)<U-1)&&!h.some(K=>Tt(K,B)<U+2)||U<D&&(D=U,O=B)}if(O&&D<14)return yn(i,e,t,O);const k={x:i.mine.x+(e.k-1)*2.2,z:i.mine.z-l*2.2};return yn(i,e,t,r&&!ii.has("bush")?Ry(i,k,2.5)??k:k)}function Ty(i,e,t,n,s,r){if(!t.length||!n.length)return s;const a=t.reduce((o,l)=>Math.min(...n.map(c=>Tt(c,l)))>Math.min(...n.map(c=>Tt(c,o)))?l:o);return{x:a.x,z:a.z-r*2.5}}const Ay=i=>({x:i.reduce((e,t)=>e+t.x,0)/i.length,z:i.reduce((e,t)=>e+t.z,0)/i.length}),wy=(i,e)=>i.reduce((t,n)=>!t||Tt(n,e)<Tt(t,e)?n:t,null);function Ry(i,e,t){let n=null,s=1/0;for(let r=Math.floor(e.z-t);r<=e.z+t;r++)for(let a=Math.floor(e.x-t);a<=e.x+t;a++){const o={x:a+.5,z:r+.5};if(!Zf(i,o.x,o.z))continue;const l=Tt(o,e);l<s&&l<=t&&(s=l,n=o)}return n}function yn(i,e,t,n){t.mode="walk",t.path=_y(i,e.x,e.z,n.x,n.z),t.path.length&&(t.path[t.path.length-1]={x:n.x,z:n.z})}const Cy=.4;function Py(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Iy({picks:i,player:e=0,tier:t,tiers:n,brains:s,seed:r=1,names:a}){const o=gy(),l=o.length,c=o[0].length,h={blue:[],red:[]};let u={x:c/2,z:l/2};for(let f=0;f<l;f++)for(let p=0;p<c;p++){const _=o[f][p];_==="1"&&h.red.push({x:p+.5,z:f+.5}),_==="2"&&h.blue.push({x:p+.5,z:f+.5}),_==="M"&&(u={x:p+.5,z:f+.5})}const d={t:0,areas:[],map:o,W:c,H:l,mine:u,spawns:h,units:[],bullets:[],gems:[],events:[],rules:i.blue.length===1?{...gn,...dy}:gn,mineT:2,countdown:null,over:!1,winner:null,rand:Py(r),tier:t,nextId:1};for(const f of["blue","red"])i[f].forEach((p,_)=>{const g=$a[p],m=i[f].length===1?1:_,y=h[f][m];d.units.push({id:d.nextId++,team:f,cid:p,c:g,k:m,x:y.x,z:y.z,vx:0,vz:0,face:f==="blue"?-Math.PI/2:Math.PI/2,hp:g.hp,maxHp:g.hp,slowT:0,slowAbs:0,ammo:g.ammo,superCharge:0,gems:0,alive:!0,respawnT:0,lastHurt:-99,lastShot:-99,revealT:-99,queue:[],dash:null,moved:0,kills:0,isPlayer:f==="blue"&&_===e,name:a?.[f]?.[_]??g.name,input:{mx:0,mz:0,fire:null,superFire:null},ai:null,tier:n?.[f]??t,brain:s?.[f]??Sy})});return d}const ci=(i,e,t)=>e<0||t<0||e>=i.W||t>=i.H||i.map[t][e]==="#"||i.map[t][e]==="N"||i.map[t][e]==="W",$l=(i,e,t)=>e<0||t<0||e>=i.W||t>=i.H||i.map[t][e]==="#"||i.map[t][e]==="N",Zf=(i,e,t)=>i.map[Math.floor(t)]?.[Math.floor(e)]==="B";function Eu(i,e,t,n){for(let s=Math.floor(t-n);s<=Math.floor(t+n);s++)for(let r=Math.floor(e-n);r<=Math.floor(e+n);r++){if(!ci(i,r,s))continue;const a=Math.max(r,Math.min(e,r+1)),o=Math.max(s,Math.min(t,s+1));if((e-a)**2+(t-o)**2<n*n)return!0}return!1}function Vo(i,e,t,n){const s=e.x,r=e.z,a=Cy;return Eu(i,e.x+t,e.z,a)||(e.x+=t),Eu(i,e.x,e.z+n,a)||(e.z+=n),Math.hypot(e.x-s,e.z-r)}function Ly(i,e,t,n,s){const r=Math.hypot(n-e,s-t),a=Math.ceil(r/.2);for(let o=1;o<a;o++){const l=e+(n-e)*o/a,c=t+(s-t)*o/a;if($l(i,Math.floor(l),Math.floor(c)))return!1}return!0}function xi(i,e,t){return t.alive?t.team===e||!Zf(i,t.x,t.z)||i.t-t.revealT<gn.revealAfterShot?!0:i.units.some(n=>n.alive&&n.team===e&&Math.hypot(n.x-t.x,n.z-t.z)<gn.bushSee):!1}const Ua=(i,e)=>i.units.reduce((t,n)=>t+(n.team===e&&n.alive?n.gems:0),0),Jf=i=>i.c.attack.range;function Dy(i){const e=i.c.super;return e.kind==="dash"?e.dist+.5:e.range}function Zl(i,e,t,n,s){i.bullets.push({x:e.x+Math.cos(t)*.45,z:e.z+Math.sin(t)*.45,vx:Math.cos(t)*n.speed,vz:Math.sin(t)*n.speed,ang:t,dmg:n.dmg,range:n.range,went:0,size:n.size,team:e.team,owner:e,isSuper:s,kind:n.kind,near:n.near,full:n.full??1,hitR:n.hitR??n.size,pierce:n.kind==="pierce"||!!n.pierce,passWalls:!!n.passWalls,hit:new Set})}function Tu(i,e,t,n){const s=n?e.c.super:e.c.attack;if(e.lastShot=i.t,e.revealT=i.t,e.face=t,i.events.push({type:n?"super":"shot",u:e,ang:t}),s.kind==="burst")for(let r=0;r<s.n;r++)e.queue.push({at:i.t+r*s.gap,ang:t+(i.rand()-.5)*2*s.spread,spec:s,isSuper:n});else if(s.kind==="spread")for(let r=0;r<s.n;r++)Zl(i,e,t+(r/(s.n-1)-.5)*s.arc,s,n);else s.kind==="dash"?e.dash={left:s.time,vx:Math.cos(t)*s.dist/s.time,vz:Math.sin(t)*s.dist/s.time,hit:new Set,spec:s}:Zl(i,e,t,s,n)}const Au=(i,e)=>{i?.alive&&(i.superCharge=Math.min(1,i.superCharge+e/py))};function wu(i,e,t,n,s){e.alive&&(t=Math.round(t),e.hp-=t,e.lastHurt=i.t,n&&Au(n,t*(s?n.c.superSuperMul:n.c.superMul)),e.c.takenMul&&Au(e,t*e.c.takenMul*(e.c.superMul??1)),i.events.push({type:"hit",u:e,dmg:t,from:n}),e.hp<=0&&Ny(i,e,n))}function Ny(i,e,t){e.alive=!1,e.hp=0,e.slowT=0,e.respawnT=gn.respawn,e.queue.length=0,e.dash=null,t&&t.kills++;for(let n=0;n<e.gems;n++){const s=i.rand()*Math.PI*2,r=1.2+i.rand()*1.6;i.gems.push({x:e.x,z:e.z,vx:Math.cos(s)*r,vz:Math.sin(s)*r,age:0})}i.events.push({type:"death",u:e,from:t,gems:e.gems}),e.gems=0}function Uy(i,e){const t=i.spawns[e.team][e.k];Object.assign(e,{x:t.x,z:t.z,hp:e.maxHp,ammo:e.c.ammo,alive:!0,lastHurt:-99,lastShot:-99}),i.events.push({type:"spawn",u:e})}function Oy(i,e){if(i.over)return;i.t+=e;for(const r of i.units){if(!r.alive){r.respawnT-=e,r.respawnT<=0&&Uy(i,r);continue}r.isPlayer||r.brain(i,r,e);const a=r.input;let o=a.mx,l=a.mz;const c=Math.hypot(o,l);c>1&&(o/=c,l/=c);let h;if(r.dash){h=Vo(i,r,r.dash.vx*e,r.dash.vz*e);for(const u of i.units)if(u.alive&&u.team!==r.team&&!r.dash.hit.has(u)&&Math.hypot(u.x-r.x,u.z-r.z)<r.c.r+u.c.r){r.dash.hit.add(u),wu(i,u,r.dash.spec.dmg,r,!0),u.alive&&i.events.push({type:"push",u,from:r});const d=Math.hypot(u.x-r.x,u.z-r.z)||1;Vo(i,u,(u.x-r.x)/d*r.dash.spec.push*.5,(u.z-r.z)/d*r.dash.spec.push*.5)}if(r.dash.left-=e,r.dash.left<=0||h<1e-4){const u=r.dash.spec;u.slowR&&i.areas.push({x:r.x,z:r.z,r:u.slowR,left:u.slowArea,team:r.team,time:u.slowTime,abs:u.slowAbs}),r.dash=null}r.vx=0,r.vz=0}else{const u=r.slowT>0?Math.max(.3,r.c.speed-r.slowAbs):r.c.speed;h=Vo(i,r,o*u*e,l*u*e),r.vx=o*u,r.vz=l*u,c>.1&&i.t-r.lastShot>.35&&(r.face=Math.atan2(l,o))}for(r.moved+=h,a.superFire!=null&&r.superCharge>=1&&!r.dash?(r.superCharge=0,Tu(i,r,a.superFire,!0)):a.fire!=null&&r.ammo>=1&&!r.dash&&!r.queue.length&&i.t-r.lastShot>=(r.c.attack.cooldown||0)&&(r.ammo-=1,Tu(i,r,a.fire,!1)),a.fire=null,a.superFire=null;r.queue.length&&r.queue[0].at<=i.t;){const u=r.queue.shift();Zl(i,r,u.ang,u.spec,u.isSuper)}r.ammo<r.c.ammo&&!r.queue.length&&(r.ammo=Math.min(r.c.ammo,r.ammo+e/r.c.reload)),r.hp<r.maxHp&&i.t-r.lastHurt>gn.regenDelay&&i.t-r.lastShot>gn.regenDelay&&(r.hp=Math.min(r.maxHp,r.hp+r.maxHp*gn.regenRate*e))}for(const r of i.areas){r.left-=e;for(const a of i.units)a.alive&&a.team!==r.team&&Math.hypot(a.x-r.x,a.z-r.z)<r.r&&(a.slowT=r.time,a.slowAbs=r.abs)}i.areas=i.areas.filter(r=>r.left>0);for(const r of i.units)r.slowT>0&&(r.slowT-=e);for(const r of i.bullets){const a=Math.max(1,Math.ceil(Math.hypot(r.vx,r.vz)*e/.2));for(let o=0;o<a&&!r.dead;o++){if(r.x+=r.vx*e/a,r.z+=r.vz*e/a,r.went+=Math.hypot(r.vx,r.vz)*e/a,r.went>=r.range){r.dead=!0,i.events.push({type:"fizzle",b:r});break}if(r.isSuper){const l=Math.floor(r.x),c=Math.floor(r.z),h=i.map[c]?.[l];(h==="#"||h==="B")&&l>0&&c>0&&l<i.W-1&&c<i.H-1&&(i.map[c][l]=".",i.events.push({type:"destroy",i:l,j:c,kind:h}))}if(r.passWalls?$l(i,Math.floor(r.x),Math.floor(r.z))&&(r.x<0||r.z<0||r.x>=i.W||r.z>=i.H):$l(i,Math.floor(r.x),Math.floor(r.z))){r.dead=!0,i.events.push({type:"wall",b:r});break}for(const l of i.units)if(!(!l.alive||l.team===r.team||r.hit.has(l))&&Math.hypot(l.x-r.x,l.z-r.z)<l.c.r+r.hitR){r.hit.add(l);const c=r.kind==="snipe"?r.dmg*(r.near+(1-r.near)*Math.min(1,r.went/r.range/r.full)):r.dmg;if(wu(i,l,c,r.owner,r.isSuper),!r.pierce){r.dead=!0;break}}}}if(i.bullets=i.bullets.filter(r=>!r.dead),i.mineT-=e,i.mineT<=0){i.mineT+=gn.gemEvery;const r=i.rand()*Math.PI*2;i.gems.push({x:i.mine.x,z:i.mine.z,vx:Math.cos(r)*1.4,vz:Math.sin(r)*1.4,age:0}),i.events.push({type:"gemspawn"})}for(const r of i.gems){if(r.age+=e,r.vx||r.vz){const a=r.x+r.vx*e,o=r.z+r.vz*e;ci(i,Math.floor(a),Math.floor(o))?r.vx=r.vz=0:(r.x=a,r.z=o);const l=Math.max(0,1-3.5*e);r.vx*=l,r.vz*=l,Math.hypot(r.vx,r.vz)<.05&&(r.vx=r.vz=0)}if(!(r.age<.35)){for(const a of i.units)if(a.alive&&Math.hypot(a.x-r.x,a.z-r.z)<.7){a.gems++,r.taken=!0,i.events.push({type:"gem",u:a});break}}}i.gems=i.gems.filter(r=>!r.taken);const t=Ua(i,"blue"),n=Ua(i,"red"),s=t>=i.rules.gemWin&&t>n?"blue":n>=i.rules.gemWin&&n>t?"red":null;s?!i.countdown||i.countdown.team!==s?(i.countdown={team:s,left:i.rules.countdown},i.events.push({type:"countdown",team:s})):(i.countdown.left-=e,i.countdown.left<=0&&Ru(i,s)):(i.countdown&&i.events.push({type:"countdownStop"}),i.countdown=null),!i.over&&i.t>=gn.time&&Ru(i,t>n?"blue":n>t?"red":"draw")}function Ru(i,e){i.over=!0,i.winner=e,i.events.push({type:"end",winner:e})}const Fi={rimDark:3111484,wallSide:13924916,blue:3711999,red:16730698,gem:11820287,gemGlow:14725375},xa=new Map;function Qf(i,e={}){const t=i+JSON.stringify(e);if(xa.has(t)&&!e.unique)return xa.get(t);const n=new li({color:i,...e.vc?{vertexColors:!0}:{},...e.map?{map:e.map}:{}});return e.emissive&&(n.emissive.setHex(e.emissive),n.emissiveIntensity=e.ei??1),e.opacity!==void 0&&(n.transparent=!0,n.opacity=e.opacity,n.depthWrite=!1),e.unique||xa.set(t,n),n}const Fy=i=>[...xa.values()].includes(i);function Go(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){const n=document.createElement("canvas");n.width=n.height=t;const s=n.getContext("2d"),r=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,i),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,t,t);const a=new Ds(n);return a.colorSpace=dt,a}function $t(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Za(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new yt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Cu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const p=Cu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Cu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new vt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Pu(i,e){if(e===hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Hl||e===df){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Hl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class ed extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=rr.extractUrlBase(e);a=rr.resolveURL(c,this.path)}else a=rr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===td){try{a[Ke.KHR_BINARY_GLTF]=new iM(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new ky;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new sM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new rM;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new aM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function By(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zy{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ct);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $f(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zv(h),c.distance=u;break;case"spot":c=new jv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ky{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ut}extendParams(e,t,n){const s=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ct),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}}class Hy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Vy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Wy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ct)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],Ct),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],Ct),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Zy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Qy{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class eM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class nM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new De,g=new I,m=new Ft,y=new I(1,1,1),x=new Xa(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(g,m,y));for(const M in l)if(M==="_COLOR_0"){const P=l[M];x.instanceColor=new Wl(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const td="glTF",js=12,Iu={JSON:1313821514,BIN:5130562};class iM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-js,r=new DataView(e,js);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Iu.JSON){const c=new Uint8Array(e,js+a,o);this.content=n.decode(c)}else if(l===Iu.BIN){const c=js+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Jl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Jl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=vs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}u(f)},o,c,Ct,d)})})}}class rM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aM{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class nd extends br{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,y=1-g,x=m-d+u;for(let M=0;M!==o;M++){const P=a[_+M+o],E=a[_+M+l]*h,S=a[p+M+o],R=a[p+M]*h;r[M]=y*P+x*E+g*S+m*R}return r}}const oM=new Ft;class lM extends nd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return oM.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lu={9728:Lt,9729:Ht,9984:tf,9985:ha,9986:Js,9987:Gn},Du={33071:hi,33648:Aa,10497:bs},Wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cM={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},Xo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Oc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function Ci(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dM(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qo(t.attributes):e=i.indices+":"+qo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+qo(i.targets[n]);return e}function qo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ql(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const mM=new De;class gM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new jf(this.options.manager):this.textureLoader=new Qv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ci(r,o,s),Hn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(rr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Wo[s.type],o=vs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new vt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Wo[s.type],c=vs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,g;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let x=t.cache.get(y);x||(_=new c(o,m*f,s.count*f/h),x=new Lf(_,f/h),t.cache.add(y,x)),g=new dr(x,l,d%f/h,p)}else o===null?_=new c(s.count*l):_=new c(o,d,s.count*l),g=new vt(_,l,p);if(s.sparse!==void 0){const m=Wo.SCALAR,y=vs[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,P=new y(a[1],x,s.sparse.count*m),E=new c(a[2],M,s.sparse.count*l);o!==null&&(g=new vt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,R=P.length;S<R;S++){const L=P[S];if(g.setX(L,E[S*l]),l>=2&&g.setY(L,E[S*l+1]),l>=3&&g.setZ(L,E[S*l+2]),l>=4&&g.setW(L,E[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Lu[d.magFilter]||Ht,h.minFilter=Lu[d.minFilter]||Gn,h.wrapS=Du[d.wrapS]||bs,h.wrapT=Du[d.wrapT]||bs,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const g=new Mt(_);g.needsUpdate=!0,d(g)}),t.load(rr.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Hn(u,a),u.userData.mimeType=a.mimeType||pM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Of,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Uf,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=s[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ct),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);const h=r.alphaMode||Xo.OPAQUE;if(h===Xo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ut&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ut&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ut){const u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&a!==ut&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Hn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ci(s,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=dM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Nu(new yt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?hM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=a[f];let m;const y=c[f];if(g.mode===en.TRIANGLES||g.mode===en.TRIANGLE_STRIP||g.mode===en.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Jx(_,y):new je(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===en.TRIANGLE_STRIP?m.geometry=Pu(m.geometry,df):g.mode===en.TRIANGLE_FAN&&(m.geometry=Pu(m.geometry,Hl));else if(g.mode===en.LINES)m=new tv(_,y);else if(g.mode===en.LINE_STRIP)m=new Cc(_,y);else if(g.mode===en.LINE_LOOP)m=new nv(_,y);else if(g.mode===en.POINTS)m=new iv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&fM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Hn(m,r),g.extensions&&Ci(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ci(s,u[0],r),u[0];const d=new Ot;r.extensions&&Ci(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Tn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Sr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let y=0,x=d.length;y<x;y++){const M=d[y],P=f[y],E=p[y],S=_[y],R=g[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const L=n._createAnimationTracks(M,P,E,S,R);if(L)for(let v=0;v<L.length;v++)m.push(L[v])}return new Na(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,mM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Nf:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Hn(h,r),r.extensions&&Ci(n,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ot;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&Ci(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof jt||d instanceof Mt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];si[r.path]===si.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(si[r.path]){case si.weights:c=Rs;break;case si.rotation:c=Cs;break;case si.position:case si.scale:c=Ps;break;default:switch(n.itemSize){case 1:c=Rs;break;case 2:case 3:default:c=Ps;break}break}const h=s.interpolation!==void 0?cM[s.interpolation]:ur,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+si[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ql(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Cs?lM:nd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _M(i,e,t){const n=e.attributes,s=new Rn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Ql(vs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Ql(vs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Nu(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Jl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Hn(i,e),_M(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?uM(i,e.targets,t):i})}const aa={tip:"#c8ee5a",body:"#8fd24a",root:"#5e9e35"},ec={value:[new se(999,999),new se(999,999),new se(999,999)]},Yo={r:1.5,alpha:.35,edge:.3},id={value:0};function xM(){const t=document.createElement("canvas");t.width=128,t.height=160;const n=t.getContext("2d"),s=()=>{n.beginPath(),n.moveTo(128*.5,160),n.bezierCurveTo(128*.3,160*.8,0,160*.7,0,160*.4),n.bezierCurveTo(0,160*.1,128*.22,0,128*.5,0),n.bezierCurveTo(128*.78,0,128,160*.1,128,160*.4),n.bezierCurveTo(128,160*.7,128*.7,160*.8,128*.5,160),n.closePath()};s();const r=n.createLinearGradient(0,160,0,0);r.addColorStop(0,aa.root),r.addColorStop(.5,aa.body),r.addColorStop(.86,aa.body),r.addColorStop(1,aa.tip),n.fillStyle=r,n.fill(),n.save(),s(),n.clip(),n.strokeStyle="rgba(255,255,220,0.32)",n.lineWidth=4,n.beginPath(),n.moveTo(128*.5,160*.94),n.lineTo(128*.5,160*.1),n.stroke(),n.strokeStyle="rgba(40,90,20,0.3)",n.lineWidth=3,n.stroke(),n.restore(),s(),n.strokeStyle="rgba(60,120,30,0.55)",n.lineWidth=3,n.stroke();const a=new Ds(t);return a.colorSpace=dt,a.anisotropy=4,a}function vM(i,e){const t=new ut({map:e,alphaTest:.5,side:sn,color:15269808}),n=new Vt(.13,.17),s=[];for(let a=0;a<24;a++){const o=new je(n,t);o.visible=!1,i.add(o),s.push({m:o,life:0,vx:0,vy:0,vz:0,spin:0})}let r=0;return{burst(a,o,l=5){for(let c=0;c<l;c++){const h=s[r++%s.length],u=Math.random()*6.28;h.life=.6,h.vx=Math.cos(u)*1.1,h.vz=Math.sin(u)*1.1,h.vy=2+Math.random()*1.2,h.spin=(Math.random()-.5)*12,h.m.position.set(a+(Math.random()-.5)*.5,.5,o+(Math.random()-.5)*.5),h.m.rotation.set(-.6,u,0),h.m.visible=!0}},update(a){for(const o of s)if(!(o.life<=0)){if(o.life-=a,o.life<=0){o.m.visible=!1;continue}o.vy-=7*a,o.m.position.x+=o.vx*a,o.m.position.z+=o.vz*a,o.m.position.y=Math.max(.05,o.m.position.y+o.vy*a),o.m.rotation.z+=o.spin*a,o.m.scale.setScalar(Math.min(1,o.life*4))}},dispose(){n.dispose(),t.dispose()}}}const tc="./art/env/kaykit/",yM={bushL:["Bush_4_C_Color1","f"],bushM:["Bush_4_B_Color1","f"],bushW:["Bush_4_D_Color1","f"],tree1:["Tree_1_A_Color1","f"],tree1b:["Tree_1_B_Color1","f"],tree2:["Tree_2_A_Color1","f"],tree3:["Tree_3_A_Color1","f"],tree4:["Tree_4_A_Color1","f"],rockA:["Rock_1_A_Color1","f"],rockB:["Rock_2_B_Color1","f"],rockC:["Rock_3_C_Color1","f"],block:["barrier_1x1x1","p"],crate:["platform_wood_1x1x1","p"],rail:["railing_straight_double_yellow","p"],flagRed:["flag_A_red","p"],flagBlue:["flag_A_blue","p"]},nc={};let Ko=null,ar=null,sd=null,va=null,rd=null;const Uu=i=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("이미지 "+i)),n.src=i});async function MM(){const[i,e]=await Promise.all([Uu(tc+"forest_texture.png"),Uu(tc+"platformer_texture.png")]),t=document.createElement("canvas");t.width=1024,t.height=2048;const n=t.getContext("2d");n.drawImage(i,0,0,1024,1024),n.drawImage(e,0,1024,1024,1024);const s=new Ds(t);return s.flipY=!1,s.colorSpace=dt,s.anisotropy=4,s.userData.shared=!0,s}function SM(i,e,t){return[e,(t+1)/2]}function bM(i,e=16777215,t=.74){i.computeBoundingBox();const n=i.boundingBox.max.y||1,s=i.attributes.position,r=new Float32Array(s.count*3),a=new Se(e);for(let o=0;o<s.count;o++){const l=Tn.smoothstep(s.getY(o)/n,0,.4),c=t+(1-t)*l;r[o*3]=c*a.r,r[o*3+1]=c*a.g,r[o*3+2]=c*a.b}return i.setAttribute("color",new vt(r,3)),i}function ad(i){i.computeBoundingBox();const e=i.boundingBox;return i.translate(-(e.min.x+e.max.x)/2,-e.min.y,-(e.min.z+e.max.z)/2)}async function EM(i,[e,t]){const n=await i.loadAsync(`${tc}${e}.gltf`);n.scene.updateMatrixWorld(!0);const s=[];n.scene.traverse(o=>{if(o.isMesh){const l=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);s.push(l)}});const r=s.length>1?Za(s):s[0],a=r.attributes.uv;for(let o=0;o<a.count;o++)a.setY(o,t==="f"?a.getY(o)/2:(a.getY(o)+1)/2);return r.userData.shared=!0,ad(r)}async function TM(){if(Ko)return;Ko=await MM();const i=new ed;await Promise.all(Object.entries(yM).map(async([l,c])=>{nc[l]=await EM(i,c)}));const e=await i.loadAsync("./models/forest/cat.glb");let t;e.scene.traverse(l=>{l.isMesh&&!t&&(l.updateWorldMatrix(!0,!1),t=l.geometry.clone().applyMatrix4(l.matrixWorld))});for(const l of Object.keys(t.attributes))["position","normal"].includes(l)||t.deleteAttribute(l);const[n,s]=SM("p",.5,.5),r=t.attributes.position.count,a=new Float32Array(r*2);for(let l=0;l<r;l++)a[l*2]=n,a[l*2+1]=s;t.setAttribute("uv",new vt(a,2)),t.userData.shared=!0,nc.cat=ad(t);const o=new wc(new Uint8Array([96,96,96,255,176,176,176,255,255,255,255,255]),3,1);o.minFilter=o.magFilter=Lt,o.needsUpdate=!0,o.userData.shared=!0,ar=new mu({map:Ko,vertexColors:!0,gradientMap:o}),ar.userData.shared=!0,sd=Ou(ar),va=new mu({vertexColors:!0,gradientMap:o}),va.userData.shared=!0,rd=Ou(va)}const jo=new Map;function Ut(i,{w:e,h:t,d:n,tint:s,lo:r,key:a}={}){const o=a||[i,e,t,n,s,r].join("|");if(!jo.has(o)){const l=nc[i].clone();l.computeBoundingBox();const c=l.boundingBox,h=e?e/(c.max.x-c.min.x):1;l.scale(h,t?t/(c.max.y-c.min.y):h,n?n/(c.max.z-c.min.z):h),bM(l,s,r),l.userData.shared=!0,jo.set(o,l)}return jo.get(o)}const AM=()=>ar,wM=()=>sd,RM=()=>va,CM=()=>rd;function Ou(i){const e=i.clone();return e.transparent=!0,e.userData.shared=!0,e.onBeforeCompile=t=>{t.uniforms.uWind=id,t.uniforms.uAlly=ec,t.uniforms.uAllyR={value:[Yo.r,Yo.alpha,Yo.edge]},t.fragmentShader=`uniform vec2 uAlly[3]; uniform vec3 uAllyR; varying vec2 vWxz;
`+t.fragmentShader.replace("#include <opaque_fragment>",`
      { float k = 1.0; for (int i = 0; i < 3; i++) k = min(k, mix(uAllyR.y, 1.0, smoothstep(uAllyR.x - uAllyR.z, uAllyR.x, distance(vWxz, uAlly[i])))); diffuseColor.a *= k; }
      #include <opaque_fragment>`),t.vertexShader=`uniform float uWind; varying vec2 vWxz;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      { float hgt = clamp(position.y / 0.7, 0.0, 1.0); vec4 wp = modelMatrix * vec4(transformed, 1.0);
        transformed.x += sin(uWind * 1.7 + wp.x * 1.3 + wp.z * 0.9) * 0.03 * hgt * hgt;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.7 + wp.z * 1.1) * 0.02 * hgt * hgt; vWxz = (modelMatrix * vec4(transformed, 1.0)).xz; }`)},e}function pn(i,e,t,{shadow:n=!0,material:s=ar}={}){if(!t.length)return null;const r=new Xa(e,s,t.length),a=new De,o=new Ft,l=new I(0,1,0);return t.forEach((c,h)=>{o.setFromAxisAngle(l,c.turn||0),a.compose(new I(c.x,c.y||0,c.z),o,new I(c.sx??1,c.sy??c.sx??1,c.sx??1)),r.setMatrixAt(h,a)}),r.castShadow=n,r.receiveShadow=!0,i.add(r),r}const $s=new I;function Qt(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;$s.copy(e),$s[n]=0,$s.normalize();const c=.5*a/(a+o),h=1-$s.angleTo(i)/l;return Math.sign($s[t])===1?h*c:o/(a+o)+c+c*(1-h)}class PM extends jn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new I,_=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Qt(p,l,"z","y",r,n),d[m+1]=1-Qt(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-Qt(p,l,"z","y",r,n),d[m+1]=1-Qt(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-Qt(p,l,"x","z",r,e),d[m+1]=Qt(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Qt(p,l,"x","z",r,e),d[m+1]=1-Qt(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Qt(p,l,"x","y",r,e),d[m+1]=1-Qt(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=Qt(p,l,"x","y",r,e),d[m+1]=1-Qt(p,l,"y","x",r,t);break}}}const di=!(typeof location<"u"&&new URLSearchParams(location.search).get("env")==="r25"),od={w:.96,h:1.06,bevel:.1,rim:.07},IM={stone:{rim:"#f3ecd6",top:"#d8cfb6",side:"#b5ab94",base:"#6f6753"},clay:{rim:"#efc190",top:"#d49c69",side:"#b87a4c",base:"#6a3d26"}},ri={root:"#1f5226",body:"#3f9e32",tip:"#86d444",count:45,span:1.13},ic=(i,e)=>{const t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*3),r=new Se;for(let a=0;a<t.count;a++)e(r,t.getX(a),t.getY(a),t.getZ(a),n?n.getY(a):0),s[a*3]=r.r,s[a*3+1]=r.g,s[a*3+2]=r.b;return i.setAttribute("color",new vt(s,3)),i};function Fu(i="stone"){const{w:e,h:t,bevel:n,rim:s}=od,r=IM[i],a=new Se(r.rim),o=new Se(r.side),l=new Se(r.base),c=new PM(e,t,e,3,n).translate(0,t/2,0).toNonIndexed();c.computeVertexNormals(),ic(c,(f,p,_,g,m)=>{const y=_/t;f.copy(o).lerp(l,1-Tn.smoothstep(y,.04,.34)),f.lerp(a,Tn.smoothstep(y,.86,.97)*.9+Tn.smoothstep(m,.2,.85)*.5)});const h=new jn(e-s*2,.02,e-s*2).translate(0,t+0,0).toNonIndexed();h.computeVertexNormals();const u=new Se(r.top);ic(h,f=>f.copy(u));const d=Za([c,h]);return d.userData.shared=!0,d}function LM(i,e){const t=$t(i*7919+13),n=ri.count,s=7,r=[],a=new Se(ri.root),o=new Se(ri.body),l=new Se(ri.tip),c=ri.span/s,h=[];for(let d=0;d<s;d++)for(let f=0;f<s;f++)h.push([d,f]);h.sort(()=>t()-.5).length=n;for(const[d,f]of h){const p=(d+.5)*c-ri.span/2+(t()-.5)*c*.7,_=(f+.5)*c-ri.span/2+(t()-.5)*c*.7,g=Math.max(Math.abs(p),Math.abs(_))/(ri.span/2),m=e*(.86+t()*.14)*(1-.1*g*g),y=c*(.95+t()*.2),x=new Lc(y,m,6,1,!0).translate(0,m/2,0).toNonIndexed();x.rotateZ((t()-.5)*.22),x.rotateX((t()-.5)*.22),x.rotateY(t()*6.28),x.translate(p,0,_),x.computeVertexNormals();const M=.9+t()*.2;ic(x,(P,E,S)=>{const R=Tn.clamp(S/m,0,1);P.copy(a).lerp(o,Tn.smoothstep(R,0,.45)).lerp(l,Tn.smoothstep(R,.55,1)).multiplyScalar(M)}),r.push(x)}const u=Za(r);return u.userData.shared=!0,u}const hs={};async function DM(){hs.block=Ut("block",{w:.96,h:.98,d:.96,tint:12892835,key:"wall-block"}),hs.crate=Ut("crate",{w:.96,h:.98,d:.96,key:"wall-crate"}),di&&(hs.block=Fu("stone"),hs.crate=Fu("clay")),hs.cat=Ut("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"})}function NM(i,e,t){const n=i.length,s=i[0].length,r=(h,u)=>h>=0&&u>=0&&h<s&&u<n&&i[u][h]==="#",a=r(e-1,t)+r(e+1,t),o=r(e,t-1)+r(e,t+1),l=$t(e*7919+Math.min(t,n-1-t)*104729)(),c=Math.floor(l*4)*Math.PI/2;return a+o===0?{kind:"cat",turn:0}:a+o===1&&l<.3?{kind:"cat",turn:0}:{kind:l<.62?"block":"crate",turn:c}}function UM(i,e){const{W:t,H:n,map:s}=e,r={block:[],crate:[],cat:[]},a=new Map;for(let f=0;f<n;f++)for(let p=0;p<t;p++)if(s[f][p]==="#"){const _=NM(s,p,f);r[_.kind].push([p,f]),a.set(f*t+p,_.turn)}const o=new Map,l=new De,c=new Ft,h=new I(0,1,0);for(const[f,p]of Object.entries(r)){if(!p.length)continue;const _=new Xa(hs[f],di&&f!=="cat"?RM():AM(),p.length);_.castShadow=!0,_.receiveShadow=!0,i.add(_),p.forEach(([g,m],y)=>{const x=$t(g*31+m*17+5),M=a.get(m*t+g),P=.97+x()*.06;o.set(m*t+g,{m:_,k:y,x:g+.5,z:m+.5,turn:M,sy:P,t:9,dir:0}),u(_,y,g+.5,m+.5,M,P,1,0,0)})}function u(f,p,_,g,m,y,x,M,P){c.setFromAxisAngle(h,m),l.compose(new I(_+M,0,g+P),c,new I(1+(1-x)*.5,y*x,1+(1-x)*.5)),f.setMatrixAt(p,l)}const d=new Set;return{hit(f,p,_=0,g=0){const m=o.get(Math.floor(p)*t+Math.floor(f));if(!m)return;const y=Math.hypot(_,g)||1;m.t=0,m.dx=_/y,m.dz=g/y,d.add(m)},update(f){for(const p of d){p.t+=f;const _=.12,g=Math.min(1,p.t/_),m=Math.sin(g*Math.PI)*(1-g*.3);u(p.m,p.k,p.x,p.z,p.turn,p.sy,1-.07*m,p.dx*.035*m,p.dz*.035*m),p.m.instanceMatrix.needsUpdate=!0,g>=1&&(d.delete(p),u(p.m,p.k,p.x,p.z,p.turn,p.sy,1,0,0),p.m.instanceMatrix.needsUpdate=!0)}},remove(f,p){const _=o.get(p*t+f);return _?(d.delete(_),o.delete(p*t+f),_.m.setMatrixAt(_.k,new De().makeScale(0,0,0)),_.m.instanceMatrix.needsUpdate=!0,!0):!1},peek:(f,p)=>o.get(p*t+f),kinds:()=>Object.entries(r).filter(([,f])=>f.length).map(([f])=>f),count:()=>r}}function OM(i){const{W:e,H:t,map:n}=i,s=new Ot,r=$t(9090),a=[],o=[],l=Math.ceil(t/2);for(let c=0;c<l;c++)for(let h=0;h<e;h++){if(n[c][h]!==".")continue;const u=[[1,0],[-1,0],[0,1],[0,-1]].some(([x,M])=>n[c+M]?.[h+x]==="#"),d=h===0||h===e-1,f=r();if(!(u&&f<.06||d&&f<.08))continue;const p=(r()-.5)*.5,_=(r()-.5)*.5,g=r()*6.28,m=.8+r()*.4,y=r()<.5;for(const x of c===t-1-c?[c]:[c,t-1-c])(y?a:o).push({x:h+.5+p,z:x+.5+(x===c?_:-_),turn:g,sx:m})}return pn(s,Ut("rockB",{w:.34}),a,{shadow:!1}),pn(s,Ut("rockA",{w:.4}),o,{shadow:!1}),s}const ya=1.35,FM=1.4;function BM(i,e,t,n){const s=(o,l,c,h,u)=>{const d=new Hf;return d.moveTo(o+u,l),d.lineTo(c-u,l),d.quadraticCurveTo(c,l,c,l+u),d.lineTo(c,h-u),d.quadraticCurveTo(c,h,c-u,h),d.lineTo(o+u,h),d.quadraticCurveTo(o,h,o,h-u),d.lineTo(o,l+u),d.quadraticCurveTo(o,l,o+u,l),d},r=s(-t,-t,i+t,e+t,n),a=s(0,0,i,e,.001);return r.holes.push(new Yl(a.getPoints(1).reverse())),r}function zM(i){const{W:e,H:t}=i,n=.22,s=new Nc(BM(e,t,FM,.9),{depth:ya-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:10});s.rotateX(Math.PI/2),s.translate(0,ya-n,0),s.computeVertexNormals();const r=new Se(di?3111484:4892730),a=new Se(di?3877408:5913126),o=new Se(di?1839629:2890772),l=s.attributes.position,c=s.attributes.normal,h=new Float32Array(l.count*3),u=new Se;for(let f=0;f<l.count;f++){const p=Tn.smoothstep(c.getY(f),.55,.9);u.copy(a).lerp(o,1-Tn.clamp(l.getY(f)/ya,0,1)).lerp(r,p),h.set([u.r,u.g,u.b],f*3)}s.setAttribute("color",new vt(h,3));const d=new je(s,new li({vertexColors:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}async function kM(){}function HM(i){const{W:e,H:t}=i,n=new Ot,s=$t(91),r=.55,a=ya-.12,o=[],l=[],c=[],h=[],u=[],d=[],f=[[],[],[],[],[]],p=y=>Math.abs(y-e/2)<1.6,_=(y,x,M)=>{const P=M%3,E={x:y+(s()-.5)*.25,y:a,z:x+(s()-.5)*.15,turn:s()*6.28,sx:.85+s()*.3};(P===0?o:P===1?c:l).push(E)};let g=0;for(let y=.5;y<e;y+=.9)p(y)||(_(y,-r,g++),_(y,t+r,g++));for(let y=.5;y<t;y+=.9)_(-r,y,g++),_(e+r,y,g++);for(const[y,x]of[[-r,-r],[e+r,-r],[-r,t+r],[e+r,t+r],[e/2-1.9,-r],[e/2+1.9,-r],[e/2-1.9,t+r],[e/2+1.9,t+r]])h.push({x:y,y:a,z:x,turn:0,sx:1.05});u.push({x:e/2-2.9,y:a,z:-r,turn:0},{x:e/2+2.9,y:a,z:-r,turn:0}),d.push({x:e/2-2.9,y:a,z:t+r,turn:0},{x:e/2+2.9,y:a,z:t+r,turn:0});const m=(y,x,M,P)=>{const E=Math.floor(s()*5),S=x>t?.38:1,R=((P?.5:.42)+s()*.14)*S;f[E].push({x:y+(s()-.5)*.4,y:M,z:x+(s()-.5)*.4,turn:s()*6.28,sx:R,sy:R*(.9+s()*.25)})};for(let y=-1.2;y<e+1.4;y+=1.3)for(const x of[-1.7,t+1.7])m(y,x,a-.1,!1);for(let y=-.2;y<t+1;y+=1.3)for(const x of[-1.7,e+1.7])m(x,y,a-.1,!1);for(let y=-3;y<e+3;y+=1.6)for(const x of[-3.2,t+3.2,-4.6,t+4.6])m(y,x,0,!0);for(let y=-2;y<t+2;y+=1.6)for(const x of[-3.2,e+3.2,-4.6,e+4.6])m(x,y,0,!0);return pn(n,Ut("rockA",{w:.45}),o.filter((y,x)=>x%3===0)),pn(n,Ut("rockB",{w:.4}),l.filter((y,x)=>x%3===0)),pn(n,Ut("bushM",{w:.7}),c),pn(n,Ut("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"}),h),pn(n,Ut("flagRed",{h:1.6}),u),pn(n,Ut("flagBlue",{h:1.6}),d),["tree1","tree1b","tree2","tree3","tree4"].forEach((y,x)=>pn(n,Ut(y),f[x])),n}const VM=["map","alphaMap","aoMap","emissiveMap","lightMap","normalMap","bumpMap","roughnessMap","metalnessMap"];function GM(i){const e=new Set,t=n=>{!n||e.has(n)||(e.add(n),n.dispose())};i.traverse(n=>{n.geometry?.userData?.shared||t(n.geometry),t(n.skeleton),n.isInstancedMesh&&n.dispose();for(const s of[].concat(n.material||[]))if(!(Fy(s)||s.userData?.shared)){for(const r of VM)t(s[r]);t(s)}}),i.removeFromParent()}function WM(i,e,t,n,s){i.fillStyle=s,i.beginPath(),i.ellipse(e,t+.18*n,.5*n,.4*n,0,0,7),i.fill();for(const[r,a,o]of[[-.62,-.28,.2],[-.22,-.62,.22],[.22,-.62,.22],[.62,-.28,.2]])i.beginPath(),i.ellipse(e+r*n,t+a*n,o*n,o*1.2*n,0,0,7),i.fill()}function XM(i,e,t){const{W:n,H:s,map:r,mine:a}=e,o=a.x*t,l=a.z*t,c=3.3*t,h=$t(5),u=Math.floor(s/2),d=[];for(let f=2.4;f<u-3.4;f+=1.15)d.push([n/2,f],[n/2,s-f]);for(const[f,p]of d){if(r[Math.floor(p)]?.[Math.floor(f)]!==".")continue;const _=(f+(h()-.5)*.3)*t,g=p*t,m=t*(.34+h()*.08),y=m*.76;i.fillStyle="rgba(30,70,30,0.35)",i.beginPath(),i.ellipse(_+2,g+4,m,y,0,0,7),i.fill(),i.fillStyle="#a39e84",i.beginPath(),i.ellipse(_,g,m,y,0,0,7),i.fill(),i.fillStyle="#c9c4a8",i.beginPath(),i.ellipse(_-m*.1,g-y*.18,m*.8,y*.7,0,0,7),i.fill()}i.fillStyle="rgba(30,70,30,0.35)",i.beginPath(),i.arc(o+3,l+6,c+4,0,7),i.fill(),i.fillStyle="#8e8a70",i.beginPath(),i.arc(o,l,c,0,7),i.fill(),i.fillStyle="#b3ae92",i.beginPath(),i.arc(o,l,c-.16*t,0,7),i.fill();for(let f=0;f<24;f++){const p=f/24*6.2832;i.save(),i.translate(o+Math.cos(p)*(c-.38*t),l+Math.sin(p)*(c-.38*t)),i.rotate(p),i.fillStyle=f%2?"#aaa58b":"#d8d3b8",i.fillRect(-.2*t,-.1*t,.4*t,.2*t),i.restore()}i.fillStyle="#c4bfa3",i.beginPath(),i.arc(o,l,c*.74,0,7),i.fill(),WM(i,o,l+.2*t,2.1*t,"rgba(120,114,92,0.55)")}const ai={a:"#43864f",b:"#478a53",seam:"rgba(60,122,74,0.9)",mine:"#3c7c49",water:"#4cc0e6",rim:"#e8f7ff",leaf:"#7fbf6e",chip:"#d8e6c2"};function qM(i){const{W:e,H:t,map:n}=i,s=48,r=document.createElement("canvas");r.width=e*s,r.height=t*s;const a=r.getContext("2d");for(let f=0;f<t;f++)for(let p=0;p<e;p++)a.fillStyle=p+f&1?ai.b:ai.a,a.fillRect(p*s,f*s,s,s);if(di){const f=e*s/2,p=t*s/2,_=Math.hypot(e,t)*s/2;a.fillStyle="rgba(6,24,14,1)";for(const[g,m]of[[.9,.34],[.72,.22],[.52,.1]])a.globalAlpha=m,a.beginPath(),a.rect(0,0,e*s,t*s),a.arc(f,p,_*g*.62,0,7,!0),a.fill("evenodd");a.globalAlpha=1}a.fillStyle=ai.mine,a.beginPath(),a.arc(i.mine.x*s,i.mine.z*s,2.5*s,0,7),a.fill(),XM(a,i,s);const o=new Set;for(let f=0;f<t;f++)for(let p=0;p<e;p++)n[f][p]==="W"&&o.add(p+","+f);const l=(f,p,_,g,m,y)=>{a.fillStyle=m,a.beginPath(),a.roundRect(f,p,_,g,y),a.fill()};for(const f of o){const[p,_]=f.split(",").map(Number);l(p*s-.5,_*s-.5,s+1,s+1,ai.rim,0)}for(const f of o){const[p,_]=f.split(",").map(Number),g=.12*s,m=o.has(p-1+","+_),y=o.has(p+1+","+_),x=o.has(p+","+(_-1)),M=o.has(p+","+(_+1));l(p*s+(m?0:g),_*s+(x?0:g),s-(m?0:g)-(y?0:g),s-(x?0:g)-(M?0:g),ai.water,0)}a.strokeStyle=ai.seam,a.lineWidth=1,a.beginPath();for(let f=1;f<e;f++)for(let p=0;p<t;p++)!o.has(f+","+p)&&!o.has(f-1+","+p)&&(a.moveTo(f*s+.5,p*s),a.lineTo(f*s+.5,(p+1)*s));for(let f=1;f<t;f++)for(let p=0;p<e;p++)!o.has(p+","+f)&&!o.has(p+","+(f-1))&&(a.moveTo(p*s,f*s+.5),a.lineTo((p+1)*s,f*s+.5));a.stroke();for(const f of["blue","red"])for(const p of i.spawns[f]){const _=p.x*s,g=p.z*s,m=s*.5;a.fillStyle="rgba(30,80,45,0.55)",a.beginPath(),a.ellipse(_,g,m,m*.92,0,0,7),a.fill(),a.strokeStyle="rgba(210,240,200,0.5)",a.lineWidth=2,a.beginPath(),a.ellipse(_,g+1.5,m,m*.92,0,.15*Math.PI,.85*Math.PI),a.stroke()}const c=$t(2501),h=[],u=(f,p)=>n[p]&&n[p][f]===".";for(let f=0;f<400&&h.length<5;f++){const p=1+Math.floor(c()*(e-2)),_=1+Math.floor(c()*(Math.floor(t/2)-2));u(p,_)&&!h.some(g=>Math.abs(g[0]-p)+Math.abs(g[1]-_)<4)&&h.push([p,_,h.length<3?"leaf":"chip"])}for(const[f,p,_]of[...h,...h.map(([g,m,y])=>[g,t-1-m,y])]){const g=(f+.5)*s,m=(p+.5)*s;if(_==="leaf"){a.fillStyle=ai.leaf;for(const[y,x]of[[-.6,.18],[.5,.2],[2.1,.16]])a.save(),a.translate(g+Math.cos(y)*x*s,m+Math.sin(y)*x*s),a.rotate(y),a.beginPath(),a.ellipse(0,0,s*.14,s*.06,0,0,7),a.fill(),a.restore()}else{a.fillStyle=ai.chip;for(const[y,x,M]of[[-.15,.05,.12],[.1,-.08,.09],[.16,.12,.07]])a.beginPath(),a.ellipse(g+y*s,m+x*s,s*M,s*M*.75,.3,0,7),a.fill()}}const d=new Ds(r);return d.colorSpace=dt,d.anisotropy=8,d}function YM(i,e){const{W:t,H:n,map:s}=e,r=new Ot;i.add(r);const a=new je(new Vt(t,n),new li({map:qM(e)}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),a.receiveShadow=!0,r.add(a);const o=new je(new Vt(t+60,n+60),new li({color:Fi.rimDark}));o.rotation.x=-Math.PI/2,o.position.set(t/2,-.02,n/2),o.receiveShadow=!0,r.add(o),r.add(zM(e)),r.add(HM(e)),r.add(OM(e));const l=UM(r,e);{const E=[];for(let S=0;S<n;S++)for(let R=0;R<t;R++)s[S][R]==="N"&&E.push({x:R+.5,z:S+.5});pn(r,Ut("rail",{w:.98,h:.5,d:.2,key:"fence-rail"}),E)}const c=[],h=xM(),u=di?CM():wM(),d=vM(r,h),f=di?[0,1,2].map(E=>LM(E+1,od.h*.89)):[0,1,2].map(E=>{const S=Ut(E===1?"bushW":"bushL",{w:E===1?1.5:1.22,h:.82,key:"bush-big"+E}),R=Ut("bushM",{w:.62,h:.5,key:"bush-small"+E}).clone();R.translate(E===0?.26:E===1?-.3:.12,0,E===0?.22:E===1?.25:-.3);const L=Za([S.clone(),R]);return L.userData.shared=!0,L});for(let E=0;E<n;E++)for(let S=0;S<t;S++)if(s[E][S]==="B"){const R=new je(f[(S*3+E*5)%3],u);R.position.set(S+.5,0,E+.5),R.rotation.y=$t(S*17+E*5)()*6.28,R.castShadow=!0,R.receiveShadow=!0,r.add(R),c.push({m:R,i:S,j:E,phase:$t(S*31+E)()*6.28,shake:0})}{const E=[];for(let v=0;v<n;v++)for(let T=0;T<t;T++)(s[v][T]==="#"||s[v][T]==="B")&&E.push({x:T+.5,y:.012,z:v+.58});const S=new Vt(1.7,1.7).rotateX(-Math.PI/2),R=new ut({map:Go("rgba(10,36,22,0.72)","rgba(14,48,28,0)",128),transparent:!0,depthWrite:!1}),L=pn(r,S,E,{shadow:!1,material:R});L&&(L.receiveShadow=!1,L.renderOrder=1)}const p=new je(new zi(.9,32),new ut({map:Go("rgba(30,14,48,1)","rgba(30,14,48,0)",128),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(e.mine.x,.03,e.mine.z),r.add(p);const _=new je(new Vt(3.4,3.4),new ut({map:Go("rgba(200,120,255,0.8)","rgba(200,120,255,0)"),transparent:!0,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(e.mine.x,.05,e.mine.z),r.add(_);const g=new je(new Uc(.92,.13,10,32),new li({color:10123952}));g.rotation.x=-Math.PI/2,g.position.set(e.mine.x,.09,e.mine.z),g.castShadow=!0,g.receiveShadow=!0,r.add(g);const m=$t(3);for(let E=0;E<5;E++){const S=E/5*6.28+.4,R=new je(new Ka(.16+m()*.08,0),Qf(12880639,{emissive:8006352,ei:.5}));R.scale.y=1.7,R.position.set(e.mine.x+Math.cos(S)*1.05,.2,e.mine.z+Math.sin(S)*1.05),R.rotation.y=S,R.castShadow=!0,r.add(R)}let y=0;const x=new li({color:11901546}),M=new li({color:4160042});function P(E,S,R){const L=(v,T,O,D,k=.05)=>{const B=new je(v,T);return B.position.set(O,k,D),B.receiveShadow=!0,r.add(B),B};if(R==="B"){const v=c.find(T=>T.i===E&&T.j===S);if(!v||v.gone)return;v.gone=!0,r.remove(v.m),d.burst(E+.5,S+.5,10),L(new qa(.3,.34,.04,14),M,E+.5,S+.5,.02)}else{if(!l.remove(E,S))return;for(let v=0;v<5;v++)L(new jn(.14+v%3*.05,.1,.12),x,E+.2+v*37%60/100,S+.2+v*53%60/100);d.burst(E+.5,S+.5,6)}}return{root:r,glow:_,walls:l,destroy:P,hitWall(E){l.hit(E.x,E.z,E.vx,E.vz)},dispose(){GM(r),d.dispose(),h.dispose()},update(E,S,R,L=[]){const v=Math.min(.1,Math.max(0,E-y));y=E,d.update(v),l.update(v),_.material.opacity=.75+Math.sin(E*3)*.2,id.value=E;let T=0;for(const D of S)D.alive&&D.team===R&&T<3&&s[Math.floor(D.z)]?.[Math.floor(D.x)]==="B"&&ec.value[T++].set(D.x,D.z);for(;T<3;T++)ec.value[T].set(999,999);const O=new Set;for(const D of L)D.dead||O.add(Math.floor(D.z)*t+Math.floor(D.x));for(const D of c){if(D.gone)continue;let k=!1;for(const K of S)K.alive&&Math.floor(K.x)===D.i&&Math.floor(K.z)===D.j&&(k=!0);const B=O.has(D.j*t+D.i);B&&!D.hit&&(D.shake=1,d.burst(D.i+.5,D.j+.5,4+(D.i+D.j)%3)),D.hit=B,k?D.shake=Math.min(1,D.shake+.2):D.shake*=.92;const U=Math.sin(E*9+D.phase)*.05*D.shake;D.m.rotation.set(U,0,U*.7),D.m.scale.setScalar(1+Math.sin(E*11+D.phase)*.03*D.shake)}}}}async function KM(i,e,{base:t="./art/",prefix:n="b3"}={}){const s={},r=new Map,a=o=>(r.has(o)||r.set(o,e(o)),r.get(o));for(const[o,l]of Object.entries(i)){if(l.atlas){const d=(_,g,m,y)=>{const x=M=>g.dirs.indexOf(l.src?l.src[M]:M);return Array.from({length:l.dirs},(M,P)=>Array.from({length:m},(E,S)=>{const R=_.clone();return R.repeat.set(1/m,1/y),R.offset.set(S/m,1-(x(P)+1)/y),R.needsUpdate=!0,R}))},f=await a(`${t}${n}_${o}.webp`),p=l.shAtlas&&await a(`${t}${n}sh_${l.shn}.webp`);s[o]={...l,dirs:d(f,l.atlas,l.n,l.atlas.rows),shDirs:p&&d(p,l.shAtlas,l.n,l.shAtlas.rows)};continue}const c={},h=d=>c[d]||=Promise.all(Array.from({length:l.n},(f,p)=>a(`${t}${n}_${o}_d${d}_f${p}.png`))),u=d=>l.src?l.src[d]:d;s[o]={...l,dirs:await Promise.all(Array.from({length:l.dirs},(d,f)=>h(u(f)))),shDirs:l.sh&&await Promise.all(Array.from({length:l.dirs},(d,f)=>Promise.all(Array.from({length:l.n},(p,_)=>a(`${t}${n}sh_${l.shn}_d${u(f)}_f${_}.png`)))))}}return s}function jM(i){return i.userData.f={value:0},i.onBeforeCompile=e=>{e.uniforms.uFlash=i.userData.f,e.fragmentShader=`uniform float uFlash;
`+e.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uFlash);
#include <dithering_fragment>`)},i}const sc={flash:.12,flashPeak:.85,shadowAlpha:.34},Gi=55,ld=Gi*Math.PI/180,cd=Math.sin(ld),Ja=Math.cos(ld),rc=Math.PI/180,Er=.7,Bu=sc.shadowAlpha,zu=.35,$M=4,ZM=new Vt(1,1),JM=new Vt(1,1).rotateX(-Math.PI/2),QM=new I(0,Ja,-cd),eS=new I(0,cd,Ja);let Vn=null;const tS=new jf,nS=i=>new Promise((e,t)=>tS.load(i,n=>{n.colorSpace=dt,n.generateMipmaps=!1,n.minFilter=n.magFilter=Ht,e(n)},void 0,t));let hd=null;const iS=i=>{hd=i},Hc=()=>Math.cos((hd??(Vn&&Vn.dealer?Vn.dealer.elev:Gi))*rc)/Ja,sS=i=>i.height*Er*Hc()+.2/Ja;async function rS(){const i=await(await fetch("./art/bake3d.json")).json();Vn=await KM(i,nS,{base:"./art/",prefix:"b3"})}const aS=(i,e)=>i.speed*(i.h/i.bodyPx)*i.cycle*e,oS=(i,e)=>{const t=i.dirs.length,n=Math.atan2(Math.cos(e),Math.sin(e));return(Math.round(n/(2*Math.PI/t))%t+t)%t};function lS(i,e){const t=e.team==="red"&&Vn[e.c.rig+"R"]?e.c.rig+"R":e.c.rig,n=e.c.height*Er,s={walk:Vn[t],shoot:Vn[t+"_shoot"],idle:Vn[t+"_idle"],die:Vn[t+"_die"]},r=new Ot;i.add(r);const a=jM(new ut({transparent:!0,depthWrite:!1,toneMapped:!1}));a.map=s.walk.dirs[0][0];const o=new je(ZM,a);o.frustumCulled=!1,o.renderOrder=5,i.add(o);const l=new ut({color:0,transparent:!0,opacity:Bu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});s.walk.shDirs&&(l.map=s.walk.shDirs[0][0]);const c=new je(JM,l);c.frustumCulled=!1,c.renderOrder=2,i.add(c);const h=e.team==="blue"?Fi.blue:Fi.red,u=new je(new _r(.5,.7,40),new ut({color:h,transparent:!0,opacity:e.isPlayer?.95:.85,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,u.renderOrder=3,r.add(u);const d=new je(new zi(.5,40),new ut({color:h,transparent:!0,opacity:.22,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.025,d.renderOrder=3,r.add(d);const f=new je(new _r(.66,.76,40),new ut({color:16765498,transparent:!0,opacity:0,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.035,f.renderOrder=3,r.add(f),{u:e,root:r,body:o,ring:u,superRing:f,mats:[a],x:e.x,z:e.z,face:e.face,kick:0,flash:0,pop:1,lastMoved:e.moved,clock:0,phase:0,shotT:-99,dieT:null,bodyScale:1,state:"idle",onShot(){this.shotT=this.clock},update(_,g,m,y){const x=this.u;this.clock+=_;const M=m&&(x.alive||this.dieT!=null&&this.clock-this.dieT<(s.die?s.die.cycle:.9)+zu);r.visible=o.visible=c.visible=M,x.alive&&this.dieT!=null&&(this.dieT=null,this.pop=0),x.alive?(this.x+=(x.x-this.x)*Math.min(1,_*20),this.z+=(x.z-this.z)*Math.min(1,_*20)):this.dieT==null&&(this.dieT=this.clock),r.position.set(this.x,0,this.z);let P=x.face-this.face;P=Math.atan2(Math.sin(P),Math.cos(P)),this.face+=P*Math.min(1,_*18);const E=x.moved-this.lastMoved,S=E/Math.max(_,1e-4);this.lastMoved=x.moved;const R=x.alive&&S>.3;let L=s.idle||s.walk,v=0,T=1,O="idle";if(!x.alive&&s.die){L=s.die;const q=this.clock-this.dieT;v=Math.min(L.n-1,Math.floor(q/L.cycle*L.n)),T=q<L.cycle?1:Math.max(0,1-(q-L.cycle)/zu),O="die"}else if(x.alive){const q=s.shoot,ne=this.clock-this.shotT+(q?q.hit*q.cycle:0);R?this.run=Math.min(1,(this.run||0)+_*8):this.run=Math.max(0,(this.run||0)-_*8),this.run>.5?(L=s.walk,this.phase=(this.phase+E/aS(L,n))%1,v=Math.floor(this.phase*L.n)%L.n,O="walk"):q&&ne<q.cycle*.96?(L=q,v=Math.min(L.n-1,Math.floor(ne/L.cycle*L.n)),O="shoot"):s.idle?(L=s.idle,v=Math.floor(this.clock/L.cycle%1*L.n)%L.n):(L=s.walk,v=0)}this.state=O;const D=oS(L,this.face),k=L.dirs[D][v];a.map!==k&&(a.map=k),this.flash=Math.max(0,this.flash-_/sc.flash),a.userData.f.value=this.flash*sc.flashPeak,this.pop=Math.min(1,this.pop+_*$M);const B=this.pop,K=(B<1?1+Math.sin(B*Math.PI)*.22:1)*(x.dash?1.1:1)*this.bodyScale,W=(B<1?.6+.4*B:1)*(x.dash?.92:1)*this.bodyScale,fe=Math.sin(L.elev*rc),oe=n*Math.cos(L.elev*rc)/L.bodyPx,he=L.w*oe*K,Ve=L.h*oe*W;o.scale.set(he,Ve,1),o.quaternion.copy(i.userData.cam.quaternion);const Ge=(L.ay-L.h/2)*oe*W;if(o.position.set(this.x,0,this.z).addScaledVector(QM,Ge).addScaledVector(eS,.45),a.opacity=y*T,L.shDirs&&L.sh){const q=L.shDirs[D][v];l.map!==q&&(l.map=q);const[ne,de,ae,be]=L.sh;c.scale.set(ae*oe*K,1,be*oe*W/fe),c.position.set(this.x+(ne+ae/2-L.w/2)*oe*K,.02,this.z+(de+be/2-L.ay)*oe*W/fe),l.opacity=Bu*y*T,c.visible=M}else c.visible=!1;f.material.opacity=x.superCharge>=1&&x.alive?.55+Math.sin(g*8)*.35:0,u.material.opacity=(x.isPlayer?.95:.7)*(x.alive?1:0),this.bodyScale=1},dispose(){i.remove(o),i.remove(c),i.remove(r),a.dispose(),l.dispose()}}}function cS(i){const e=new Map,t=new Map,n=i.clone();return ud(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ud(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ud(i.children[n],e.children[n],t)}const or={sat:2.4,lift:1};{const i=new URLSearchParams(location.search).get("lk");if(i){const[e,t]=i.split(",").map(Number);Object.assign(or,{sat:e??or.sat,lift:t??or.lift})}}function hS(i){i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    { vec3 c = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2));
      float l = dot(c, vec3(0.299, 0.587, 0.114)); c = clamp(mix(vec3(l), c, ${or.sat.toFixed(3)}), 0., 1.);
      c = mix(c, 1. - (1. - c) * (1. - c), ${or.lift.toFixed(3)});
      diffuseColor.rgb = pow(c, vec3(2.2)); }`)}const $o={frac:.0019,minPx:1.3,color:1315356},fd=1,dd=2,uS="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fS=`varying vec2 vUv; uniform sampler2D tMask; uniform vec2 uTexel; uniform float uRad; uniform vec3 uColor;
void main(){
  float m = texture2D(tMask, vUv).r, d = m;
  for (int i = 0; i < 8; i++) { float a = float(i) * 0.7853982; vec2 o = vec2(cos(a), sin(a)) * uTexel;
    d = max(d, texture2D(tMask, vUv + o * uRad).r); d = max(d, texture2D(tMask, vUv + o * uRad * 0.5).r); }
  float k = clamp(d - m, 0., 1.); if (k < 0.01) discard; gl_FragColor = vec4(uColor, k); }`;function dS(i,e){const t=[];for(let a=0;a<e.H;a++)for(let o=0;o<e.W;o++)e.map[a][o]==="#"&&t.push([o,a]);const n=new jn(1,.95,1).translate(0,.475,0),s=new Xa(n,new ut,Math.max(1,t.length)),r=new De;return t.forEach(([a,o],l)=>{r.setPosition(a+.5,0,o+.5),s.setMatrixAt(l,r)}),s.count=t.length,s.layers.set(dd),s.frustumCulled=!1,i.add(s),{mesh:s,dispose(){i.remove(s),n.dispose(),s.material.dispose(),s.dispose()}}}function pS(i,e,t){const n=new _i(2,2,{samples:4,depthBuffer:!0}),s=new ut({color:16777215}),r=new ut({colorWrite:!1}),a=new Kn({vertexShader:uS,fragmentShader:fS,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:n.texture},uTexel:{value:new se},uRad:{value:1},uColor:{value:new Se($o.color)}}}),o=new yt;o.setAttribute("position",new ot([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new ot([0,0,2,0,0,2],2));const l=new je(o,a);l.frustumCulled=!1;const c=new If;c.add(l);const h=new Sr(-1,1,1,-1,0,1),u=new se;return{render(){i.render(e,t),i.getDrawingBufferSize(u),(n.width!==u.x||n.height!==u.y)&&(n.setSize(u.x,u.y),a.uniforms.uTexel.value.set(1/u.x,1/u.y)),a.uniforms.uRad.value=Math.max($o.minPx,$o.frac*u.y);const d=e.background,f=i.autoClear,p=i.shadowMap.autoUpdate,_=t.layers.mask;e.background=null,i.shadowMap.autoUpdate=!1,i.setRenderTarget(n),i.setClearColor(0,1),i.clear(!0,!0,!1),i.autoClear=!1,t.layers.set(dd),e.overrideMaterial=r,i.render(e,t),t.layers.set(fd),e.overrideMaterial=s,i.render(e,t),e.overrideMaterial=null,t.layers.mask=_,e.background=d,i.shadowMap.autoUpdate=p,i.setRenderTarget(null),i.render(c,h),i.autoClear=f},dispose(){n.dispose(),s.dispose(),r.dispose(),a.dispose(),o.dispose()}}}const Oa=new URLSearchParams(location.search).get("look")==="0",ac=20,mS=["Hips","UpLeg.L","Leg.L","Foot.L","UpLeg.R","Leg.R","Foot.R"],gS=i=>new Set((i.bones?.lower||mS).map(e=>et.sanitizeNodeName(e))),ku=.1,_S=.04,xS=.016,vS=9,yS=22,oa=1.1,MS=.1,SS=.1,bS=.35,ES=.66,TS={dealer:1.6,tank:1.3,sniper:1.6},Mn={k:140,c:16,gain:.006,max:25*Math.PI/180},Hu={dealer:{white:{maxSat:.16,minVal:.55},y:[.42,.97],minSat:.75},tank:{hue:[280,330],sat:.35,feather:10,minSat:.75},sniper:{hue:[280,330],sat:.35,feather:10,minSat:.75}},AS={blue:213,red:359},pd={};async function wS(i){const e=new ed;await Promise.all(i.map(async t=>{const[n,s]=await Promise.all([e.loadAsync(`./art/live/${t}.glb`),fetch(`./art/live/${t}.json`).then(c=>c.json())]),r=new Rn().setFromObject(n.scene),a=r.max.y-r.min.y,o=gS(s),l=c=>Object.fromEntries(n.animations.map(h=>[h.name,new Na(h.name,h.duration,h.tracks.filter(u=>c(o.has(u.name.split(".").slice(0,-1).join(".")))))]));pd[t]={scene:n.scene,meta:s,h:a,y0:r.min.y,lower:l(c=>c),upper:l(c=>!c),tip:RS(n.scene,s.muzzle)}})),iS(Gi-ac)}function RS(i,e){if(!e)return null;i.updateMatrixWorld(!0);let t=null,n=-1;if(i.traverse(a=>{if(!t&&a.isSkinnedMesh){const o=a.skeleton.bones.findIndex(l=>l.name==="Gun");o>=0&&(t=a,n=o)}}),!t)return null;const s=i.getObjectByName("rig")||i,r=a=>t.worldToLocal(s.localToWorld(new I(...a)));return{name:t.name,gi:n,tip:r(e.tip),back:r(e.back)}}const CS=`
vec3 rgb2hsv(vec3 c){ vec4 K=vec4(0.,-1./3.,2./3.,-1.); vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g)); vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r)); float d=q.x-min(q.w,q.y); float e=1e-10; return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x); }
vec3 hsv2rgb(vec3 c){ vec4 K=vec4(1.,2./3.,1./3.,3.); vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www); return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y); }`;function Vu(i,e,t,n){const s=new li({map:i.map||null,color:i.color?i.color.clone():16777215}),r={uHue:{value:AS[t]/360},uY:{value:new se(...n)}};return s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),Oa||hS(a),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform vec2 uY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = (position.y - uY.x) / (uY.y - uY.x);`);const o=e.white?`float w = clamp((${e.white.maxSat.toFixed(3)} - hv.y) / 0.06, 0., 1.) * clamp((hv.z - ${e.white.minVal.toFixed(3)}) / 0.1, 0., 1.) * clamp(min(vBodyY - ${e.y[0].toFixed(3)}, ${e.y[1].toFixed(3)} - vBodyY) / 0.03 + 0.5, 0., 1.);`:`float h = hv.x * 360.; float lo = ${e.hue[0].toFixed(1)}, hi = ${e.hue[1].toFixed(1)};
         float dist = min(abs(mod(h - lo + 180., 360.) - 180.), abs(mod(h - hi + 180., 360.) - 180.));
         float w = (h >= lo && h <= hi ? 1. : clamp(1. - dist / ${e.feather.toFixed(1)}, 0., 1.)) * clamp((hv.y - ${e.sat.toFixed(3)}) / 0.12, 0., 1.) * clamp((hv.z - 0.15) / 0.1, 0., 1.);`;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform float uHue;
`+CS).replace("#include <map_fragment>",`#include <map_fragment>
      { vec3 s = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2)); vec3 hv = rgb2hsv(s); ${o}
        vec3 nc = pow(hsv2rgb(vec3(uHue, max(hv.y, ${e.minSat.toFixed(2)}), hv.z)), vec3(2.2)); diffuseColor.rgb = mix(diffuseColor.rgb, nc, w); }`)},s.customProgramCacheKey=()=>`body-${Oa}-${JSON.stringify(e)}`,s.userData.u=r,s}function PS(i,e){const t=pd[e.c.rig],n=e.c.height*Er,s=n/t.h,r=new Ot;i.add(r);const a=new Ot;a.matrixAutoUpdate=!1,r.add(a);const o=Math.cos(ac*Math.PI/180),l=Math.sin(ac*Math.PI/180),c=A=>a.matrix.set(A,0,0,0,0,o*A,0,0,0,-l*A,A,0,0,0,0,1);c(1);const h=new Ot;a.add(h);const u=cS(t.scene);u.scale.setScalar(s),u.position.y=-t.y0*s,h.add(u);const d=[],f=[t.y0,t.y0+t.h];u.traverse(A=>{if(A.isMesh){A.material=Array.isArray(A.material)?A.material.map(V=>Vu(V,Hu[e.c.rig],e.team,f)):Vu(A.material,Hu[e.c.rig],e.team,f);for(const V of[].concat(A.material))d.push(V);A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!1}}),Oa||u.traverse(A=>{A.isMesh&&A.layers.enable(fd)});const p={};u.traverse(A=>{A.isBone&&(p[A.name]=A)});let _=null;t.tip&&u.traverse(A=>{!_&&A.isSkinnedMesh&&A.name===t.tip.name&&(_=A)});const g=new I,m=new De,y={p:new I,ax:new I,q:new Ft,gp:new I,gq:new Ft,gs:new I,m:new De,y:new De,s:new De,g:new De},x=A=>{const V=y;h.updateWorldMatrix(!0,!1),R.updateWorldMatrix(!1,!1),T.updateWorldMatrix(!1,!1),V.y.copy(h.matrixWorld).invert(),V.s.multiplyMatrices(V.y,R.matrixWorld),V.g.multiplyMatrices(V.y,T.matrixWorld),V.p.setFromMatrixPosition(V.s),V.ax.setFromMatrixColumn(V.s,1).normalize(),V.q.setFromAxisAngle(V.ax,A),V.g.decompose(V.gp,V.gq,V.gs),V.gp.sub(V.p).applyQuaternion(V.q).add(V.p),V.gq.premultiply(V.q),V.m.compose(V.gp,V.gq,V.gs).premultiply(m.multiplyMatrices(V.y,T.parent.matrixWorld).invert()).decompose(T.position,T.quaternion,V.gs)},M=A=>{const V=y;h.updateWorldMatrix(!0,!1),R.parent.updateWorldMatrix(!0,!1),V.m.multiplyMatrices(V.y.copy(h.matrixWorld).invert(),R.parent.matrixWorld).decompose(V.p,V.q,V.gs),V.ax.set(0,1,0).applyQuaternion(V.q.invert()),R.quaternion.premultiply(V.q.setFromAxisAngle(V.ax,A))},P=(A,V)=>{const ie=_,Q=t.tip.gi;return m.multiplyMatrices(ie.skeleton.bones[Q].matrixWorld,ie.skeleton.boneInverses[Q]),ie.localToWorld(V.copy(A).applyMatrix4(ie.bindMatrix).applyMatrix4(m).applyMatrix4(ie.bindMatrixInverse))},E=t.meta.bones||{},S=E.twist==="up",R=p[E.spine||"Spine"],L=p[E.chest||"Chest"],v=p[E.head||"Head"],T=p[E.gun||"Gun"],O=[R,L,v,T].filter(Boolean),D=O.map(A=>[A.position.clone(),A.quaternion.clone(),A.scale.clone()]),k=()=>O.forEach((A,V)=>{A.position.copy(D[V][0]),A.quaternion.copy(D[V][1]),A.scale.copy(D[V][2])}),B=()=>O.forEach((A,V)=>{D[V][0].copy(A.position),D[V][1].copy(A.quaternion),D[V][2].copy(A.scale)}),U=new je(new zi(.28*n,32),new ut({color:0,transparent:!0,opacity:.25,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.scale.set(1,.8,1),U.position.y=.025,U.renderOrder=2,r.add(U);const K={me:{disc:3989594,ring:8191886,da:.5},ally:{disc:39423,ring:6079231,da:.45},foe:{disc:16722474,ring:16743034,da:.45}},W=K[e.isPlayer?"me":e.team==="blue"?"ally":"foe"],fe=W.ring,oe=new je(new _r(.64,.86,40),new ut({color:fe,transparent:!0,depthWrite:!1}));oe.rotation.x=-Math.PI/2,oe.position.y=.03,oe.renderOrder=3,r.add(oe);const he=Oa?null:new je(new zi(.64,40),new ut({color:W.disc,transparent:!0,opacity:W.da,depthWrite:!1}));he&&(he.rotation.x=-Math.PI/2,he.position.y=.028,he.renderOrder=2,r.add(he));const Ve=new fy(u),Ge=t.meta,q=e.c,ne=q.shotEnd-q.aim,de={lower:{},upper:{}};for(const A of["lower","upper"])for(const[V,ie]of Object.entries(t[A])){const Q=Ve.clipAction(ie.clone()),ee=Ge.clips[V];ee.loop||(Q.setLoop(ff,1),Q.clampWhenFinished=!0),V==="idle"&&(Q.timeScale=ee.dur/q.idle),V==="shoot"&&(Q.timeScale=ee.dur*(1-ee.hit)/ne),de[A][V]=Q}const ae={lower:null,upper:null},be=(A,V,ie=0,Q=ku)=>{const ee=de[A][V];ee&&(ae[A]===V&&(ee.isRunning()||ee.timeScale===0&&ee.isScheduled())||(ee.reset(),ee.time=ie,ee.setEffectiveWeight(1),ee.fadeIn(Q).play(),ae[A]&&ae[A]!==V&&de[A][ae[A]].fadeOut(Q),ae[A]=V))};be("lower","idle"),be("upper","idle");const Ne=Ge.speed*Ge.clips.run.dur*s,He=Math.max(Ne,Math.min(q.cycle*q.speed,Ne/ES)),Ee={x:0,vx:0,z:0,vz:0,px:e.x,pz:e.z,pvx:0,pvz:0};return{u:e,root:r,ring:oe,mats:d,x:e.x,z:e.z,face:e.face,legFace:e.face,flash:0,lastMoved:e.moved,clock:0,phase:0,shotT:-99,pushT:-99,dead:!1,bodyScale:1,state:"idle",run:0,pop:1,onShot(){const A=this.u;this.face=A.face;const V=Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace));Math.abs(V)>oa&&(this.legFace=this.face-Math.sign(V)*oa),this.shotT=this.clock;const ie=Ge.clips.shoot;be("upper","shoot",ie.hit*ie.dur,S?xS:_S),ae.upper==="shoot"&&(de.upper.shoot.time=ie.hit*ie.dur)},update(A,V,ie,Q){const ee=this.u;if(this.clock+=A,!ee.alive){this.dead=!0,r.visible=!1;return}this.dead&&(this.dead=!1,this.x=ee.x,this.z=ee.z,this.lastMoved=ee.moved,be("lower","idle"),be("upper","idle")),r.visible=ie,this.x+=(ee.x-this.x)*Math.min(1,A*20),this.z+=(ee.z-this.z)*Math.min(1,A*20),r.position.set(this.x,0,this.z);const Ce=(we,Le,Je)=>{const N=Math.atan2(Math.sin(Le-we),Math.cos(Le-we));return we+Math.sign(N)*Math.min(Math.abs(N),Je*A)};this.face=Ce(this.face,ee.face,yS);const pe=ee.moved-this.lastMoved,C=pe/Math.max(A,1e-4);this.lastMoved=ee.moved;const b=C>.3;this.run=b?Math.min(1,this.run+A*8):Math.max(0,this.run-A*8);const H=Ge.clips.shoot;ee.queue.length&&ae.upper==="shoot"&&(this.shotT=this.clock,de.upper.shoot.time=H.hit*H.dur);const j=this.clock-this.shotT<ne*.9;this.legFace=Ce(this.legFace,b&&!j?ee.face:this.face,vS),h.rotation.y=Math.atan2(Math.cos(this.legFace),Math.sin(this.legFace));let Z="idle";this.clock-this.pushT<MS+ku?(be("lower","hit"),be("upper","hit"),Z="push"):ee.dash&&de.lower.dash?(be("lower","dash"),be("upper","dash"),Z="dash"):(this.run>.5?(be("lower","run"),this.phase=(this.phase+pe/He)%1,Z="walk"):be("lower","idle"),j?(ae.upper!=="shoot"&&be("upper","shoot",Ge.clips.shoot.hit*Ge.clips.shoot.dur),Z=Z==="walk"?"walk":"shoot"):be("upper",this.run>.5?"run":"idle")),this.state=Z;for(const we of["lower","upper"]){const Le=de[we].run;Le.timeScale=0,Le.time=this.phase*Ge.clips.run.dur}if(k(),Ve.update(A),B(),R){const we=Math.max(-oa,Math.min(oa,Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace))));S?M(-we):R.rotateY(-we),T&&!S&&Math.abs(we)>1e-4&&x(-we)}const Te=(this.x-Ee.px)/Math.max(A,1e-4),ce=(this.z-Ee.pz)/Math.max(A,1e-4);Ee.px=this.x,Ee.pz=this.z;const me=(Te-Ee.pvx)/Math.max(A,1e-4),Ye=(ce-Ee.pvz)/Math.max(A,1e-4);Ee.pvx=Te,Ee.pvz=ce;const re=Math.cos(this.legFace),ge=Math.sin(this.legFace),Oe=me*re+Ye*ge,Fe=-me*ge+Ye*re,ve=Math.min(A,1/30);if(Ee.vx+=(-140*Ee.x-Mn.c*Ee.vx-Mn.gain*Mn.k*Oe)*ve,Ee.x=Math.max(-Mn.max,Math.min(Mn.max,Ee.x+Ee.vx*ve)),Ee.vz+=(-140*Ee.z-Mn.c*Ee.vz-Mn.gain*Mn.k*Fe)*ve,Ee.z=Math.max(-Mn.max,Math.min(Mn.max,Ee.z+Ee.vz*ve)),L&&(L.rotateX(-Ee.x*.6),L.rotateZ(Ee.z*.6)),v&&(v.rotateX(-Ee.x*.4),v.rotateZ(Ee.z*.4)),S&&T&&_&&j){const we={x:0,y:0,z:0};for(let Le=0;Le<3&&this.muzzle(void 0,we);Le++){const Je=Math.atan2(Math.sin(this.face-Math.atan2(we.z,we.x)),Math.cos(this.face-Math.atan2(we.z,we.x)));if(Math.abs(Je)<.002)break;M(-Math.max(-1.2,Math.min(1.2,Je)))}}if(T){const we=j?de.upper.shoot.getEffectiveWeight():0;T.scale.multiplyScalar(1+(TS[ee.c.rig]-1)*we)}this.flash=Math.max(0,this.flash-A/SS),c(this.bodyScale);for(const we of d){we.emissive?.setScalar(this.flash*bS);const Le=Q<.999;we.transparent!==Le&&(we.transparent=Le,we.needsUpdate=!0),we.opacity=Q}oe.material.opacity=ee.isPlayer?.95:.7,this.bodyScale=1},muzzle(A=new I,V=null){return!_||!r.visible?null:(r.updateMatrixWorld(!0),P(t.tip.tip,A),V&&(g.subVectors(A,P(t.tip.back,g)).normalize(),V.x=g.x,V.y=g.y,V.z=g.z),A)},onHit(){},onPush(){this.pushT=this.clock},dispose(){i.remove(r),Ve.stopAllAction(),Ve.uncacheRoot(u),u.traverse(A=>A.skeleton?.dispose());for(const A of d)A.dispose();for(const A of[U,oe,he])A&&(A.geometry.dispose(),A.material.dispose())}}}const tn=(i,e=i)=>{const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]},Kt=i=>{const e=new Ds(i);return e.colorSpace=dt,e},Ni=(i,e,t,n,s,r)=>{const a=i.createRadialGradient(e,t,n,e,t,s);for(const[o,l]of r)a.addColorStop(o,l);return a};function md(i,e=128){const[t,n]=tn(e),s=$t(i);for(let a=0;a<7;a++){const o=s()*6.28,l=s()*.2*e,c=e/2+Math.cos(o)*l,h=e/2+Math.sin(o)*l*.8,u=(.2+s()*.1)*e;n.fillStyle=Ni(n,c,h,u*.35,u,[[0,"rgba(255,255,255,1)"],[.55,"rgba(236,246,255,1)"],[.8,"rgba(186,212,238,0.98)"],[1,"rgba(186,212,238,0)"]]),n.beginPath(),n.arc(c,h,u,0,7),n.fill()}n.globalCompositeOperation="source-atop";const r=n.createLinearGradient(e*.25,e*.15,e*.75,e*.9);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(180,200,225,0.25)"),r.addColorStop(1,"rgba(90,120,170,0.8)"),n.fillStyle=r,n.fillRect(0,0,e,e),[t,n]}function IS(){const[i,e]=md(11,256),t=256;e.globalCompositeOperation="source-atop";const n=(s,r,a)=>{e.fillStyle="rgba(232,247,255,0.82)",e.beginPath(),e.ellipse(s,r,a,a*.95,0,0,7),e.fill(),e.fillRect(s-a*.5,r+a*.55,a,a*.65),e.fillStyle="rgba(30,60,95,0.92)";for(const o of[-.38,.38])e.beginPath(),e.ellipse(s+o*a,r,a*.24,a*.3,0,0,7),e.fill();e.beginPath(),e.moveTo(s,r+a*.25),e.lineTo(s-a*.1,r+a*.5),e.lineTo(s+a*.1,r+a*.5),e.fill();for(let o=0;o<4;o++)e.fillRect(s-a*.4+o*a*.22,r+a*.8,a*.06,a*.32)};return n(t*.5,t*.38,t*.12),n(t*.28,t*.52,t*.085),n(t*.72,t*.55,t*.085),Kt(i)}function LS(i=8,e=256){const[t,n]=tn(e),s=e/2;n.fillStyle=Ni(n,s,s,4,s,[[0,"rgba(255,255,255,0.9)"],[.5,"rgba(255,255,255,0.18)"],[1,"rgba(255,255,255,0)"]]),n.fillRect(0,0,e,e),n.fillStyle="#fff",n.beginPath();for(let r=0;r<i*2;r++){const a=r*Math.PI/i-Math.PI/2,o=r%2?s*.22:s*.95;n.lineTo(s+Math.cos(a)*o,s+Math.sin(a)*o)}return n.closePath(),n.fill(),Kt(t)}function DS(i=128){const[e,t]=tn(i),n=i/2;return t.fillStyle=Ni(t,n,n,2,n*.5,[[0,"rgba(255,255,255,0.8)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,i,i),t.fillStyle="#fff",t.beginPath(),t.moveTo(n,2),t.quadraticCurveTo(n+5,n-5,i-2,n),t.quadraticCurveTo(n+5,n+5,n,i-2),t.quadraticCurveTo(n-5,n+5,2,n),t.quadraticCurveTo(n-5,n-5,n,2),t.fill(),Kt(e)}function NS(i=64){const[e,t]=tn(i),n=i/2;t.fillStyle="#fff",t.beginPath();for(let s=0;s<10;s++){const r=s*Math.PI/5-Math.PI/2,a=s%2?n*.42:n*.95;t.lineTo(n+Math.cos(r)*a,n+Math.sin(r)*a)}return t.closePath(),t.fill(),Kt(e)}function US(){const i={};i.puff=[1,2,3,4].map(e=>Kt(md(e*17)[0])),i.skull=IS(),i.burst=LS(8),i.twinkle=DS(),i.smallStar=NS();{const[e,t]=tn(64);t.fillStyle=Ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.6,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),i.dot=Kt(e)}{const[e,t]=tn(64);t.fillStyle=Ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.82,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),i.disc=Kt(e)}{const[e,t]=tn(64,32),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"#9a6a1a"),n.addColorStop(.5,"#fff0a0"),n.addColorStop(1,"#c8962a"),t.fillStyle=n,t.fillRect(6,8,52,16),t.fillStyle="#7a5410",t.fillRect(52,8,6,16),i.shell=Kt(e)}{const[e,t]=tn(64),n=$t(5);t.fillStyle="#fff",t.beginPath();for(let r=0;r<7;r++){const a=r/7*6.28,o=20+n()*10;t.lineTo(32+Math.cos(a)*o,32+Math.sin(a)*o)}t.closePath(),t.fill(),t.globalCompositeOperation="source-atop";const s=t.createLinearGradient(0,0,0,64);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(90,80,70,0.7)"),t.fillStyle=s,t.fillRect(0,0,64,64),i.rock=Kt(e)}{const[e,t]=tn(128),n=$t(9);t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round";for(let s=0;s<5;s++){let r=s/5*6.28+n()*.5,a=64,o=64;t.lineWidth=6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<4;l++)r+=(n()-.5)*1.1,a+=Math.cos(r)*15,o+=Math.sin(r)*15,t.lineTo(a,o),t.lineWidth=6-l;t.stroke()}i.crack=Kt(e)}{const[e,t]=tn(128);t.fillStyle=Ni(t,64,64,0,64,[[0,"rgba(255,255,255,0)"],[.55,"rgba(255,255,255,0)"],[.74,"rgba(255,255,255,1)"],[.9,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),i.ring=Kt(e)}{const[e,t]=tn(128);t.fillStyle=Ni(t,64,64,0,64,[[0,"rgba(255,255,255,0.06)"],[.78,"rgba(255,255,255,0.16)"],[.92,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(64,64,44,3.5,4.5),t.stroke(),i.bubble=Kt(e)}{const[e,t]=tn(128,16),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.fillRect(0,0,128,16),t.globalCompositeOperation="destination-in";const s=t.createLinearGradient(0,0,0,16);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,128,16),i.dash=Kt(e)}return i}const ht=(i,e)=>i+Math.random()*(e-i),Ue=(i,e)=>i+(Math.random()-.5)*2*e,OS=new Vt(1,1).rotateX(-Math.PI/2),FS={tex:null,add:!1,flat:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,dz:0,drag:0,bounce:0,fric:0,floor:!1,delay:0,life:1,size:1,s0:1,s1:1,aspect:1,a0:1,fadeIn:0,fadeOut:.3,rot:0,spin:0,spin1:null,color:16777215,color2:null,ro:0,blink:0,ease:0,kind:"",follow:null,fy:0};function BS(i,{sp:e=260,ad:t=200,fl:n=70}={}){const s={sp:[],ad:[],fl:[]},r=[],a={},o={},l=(f,p,_)=>{const g=p?new ut({transparent:!0,depthWrite:!1}):new Wa({transparent:!0,depthWrite:!1,depthTest:!1,..._?{blending:il}:{}}),m=p?new je(OS,g):new Ac(g);m.visible=!1,m.frustumCulled=!1,m.renderOrder=p?4:8,i.add(m),s[f].push({m,mat:g,flat:p,list:f,gen:0,c0:new Se,c1:new Se,has2:!1})};for(let f=0;f<e;f++)l("sp",!1,!1);for(let f=0;f<t;f++)l("ad",!1,!0);for(let f=0;f<n;f++)l("fl",!0,!1);let c=0;function h(f){f.m.visible=!1,r.splice(r.indexOf(f),1),s[f.list].push(f),f.kind&&a[f.kind]--}function u(f){const p=f.flat?"fl":f.add?"ad":"sp",_=s[p].pop();return _?f.kind&&o[f.kind]!==void 0&&(a[f.kind]||0)>=o[f.kind]?(s[p].push(_),null):(Object.assign(_,FS,f),_.gen=++c,_.t=-_.delay,_.vis=!1,_.c0.setHex(_.color),_.has2=_.color2!=null,_.has2&&_.c1.setHex(_.color2),_.mat.map=_.tex,_.mat.color.copy(_.c0),_.mat.opacity=0,_.m.renderOrder=_.ro||(_.flat?4:8),_.flat?_.m.rotation.y=_.rot:_.mat.rotation=_.rot,_.kind&&(a[_.kind]=(a[_.kind]||0)+1),r.push(_),_):null}function d(f){const p=Math.max(1,Math.ceil(f/.0167)),_=f/p;for(let g=r.length-1;g>=0;g--){const m=r[g];if(m.t+=f,m.t<0)continue;let y=m.t/m.life;if(y>=1){h(m);continue}if(m.vis||(m.vis=!0,m.m.visible=!0),m.follow)m.x=m.follow.x,m.z=m.follow.z,m.y=m.fy;else for(let E=0;E<p;E++){if(m.vy+=m.g*_,m.dz&&m.vy>0&&(m.vy=Math.max(0,m.vy-m.dz*_)),m.drag){const S=Math.exp(-m.drag*_);m.vx*=S,m.vz*=S}m.x+=m.vx*_,m.y+=m.vy*_,m.z+=m.vz*_,m.floor&&m.y<.04&&(m.y=.04,m.vy<-.4&&m.bounce?(m.vy=-m.vy*m.bounce,m.vx*=1-m.fric,m.vz*=1-m.fric):(m.vy=0,m.vx*=1-Math.min(1,6*_),m.vz*=1-Math.min(1,6*_)))}m.ease&&(y=1-(1-y)*(1-y));const x=(m.s0+(m.s1-m.s0)*y)*m.size,M=m.t/m.life;let P=m.a0;m.fadeIn&&M<m.fadeIn&&(P*=M/m.fadeIn),m.fadeOut&&M>1-m.fadeOut&&(P*=(1-M)/m.fadeOut),m.blink&&(P*=.5+.5*Math.sin(m.t*m.blink)),m.m.position.set(m.x,m.y,m.z),m.mat.opacity=P,m.has2&&m.mat.color.lerpColors(m.c0,m.c1,M),m.spin&&(m.rot+=(m.spin1==null?m.spin:m.spin+(m.spin1-m.spin)*M)*f,m.flat?m.m.rotation.y=m.rot:m.mat.rotation=m.rot),m.flat?m.m.scale.set(x,1,x*m.aspect):m.m.scale.set(x,x*m.aspect,1)}}return{emit:u,update:d,setCap:(f,p)=>{o[f]=p},count:f=>a[f]||0,clear(){for(;r.length;)h(r[r.length-1])},get alive(){return r.length}}}const zS={dealer:{fwd:.5,up:.449},tank:{fwd:.784,up:.611},sniper:{fwd:.666,up:.416}},yr={blue:{gas0:6742271,gas1:3385599,spark:5098751,line:23039,tint:10476799,ball:"blue"},red:{gas0:16744608,gas1:16721472,spark:16731494,line:16711769,tint:16756920,ball:"red"}},Ma=i=>i.c.height*Er*Hc()*.45;function gd(i,e){const t=zS[i.c.rig],n=i.c.height*Er;return{x:i.x+Math.cos(e)*t.fwd*n,y:t.up*n*Hc(),z:i.z+Math.sin(e)*t.fwd*n}}const vi=(i,e=i)=>{const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]},yi=i=>{const e=new Ds(i);return e.colorSpace=dt,e},Zo={blue:{main:"#2f7fe6",dark:"#123c86",lite:"#8fd0ff",halo:"rgba(70,190,220,0.45)",orb:"#5a5cff",orbLite:"#b8b4ff",orbDark:"#1c1a6a",slug:"#38d6ff",slugEdge:"#6a5cff",slugHalo:"rgba(28,22,110,0.55)"},red:{main:"#f0462a",dark:"#8a1408",lite:"#ffb08a",halo:"rgba(150,20,30,0.45)",orb:"#ff3a46",orbLite:"#ffc0c0",orbDark:"#6a0a14",slug:"#ff5aa8",slugEdge:"#ff6a7a",slugHalo:"rgba(110,10,30,0.55)"}};function Jo(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.arc(e+n-r,t+r,r,-Math.PI/2,Math.PI/2),i.lineTo(e+r,t+s),i.arc(e+r,t+r,r,Math.PI/2,Math.PI*1.5),i.closePath()}function kS(i){const[e,t]=vi(128,64);return t.fillStyle=i.halo,t.beginPath(),t.ellipse(66,32,56,30,0,0,7),t.fill(),Jo(t,20,13,92,38,19),t.fillStyle=i.dark,t.fill(),Jo(t,24,17,84,30,15),t.fillStyle=i.main,t.fill(),Jo(t,34,20,66,9,4.5),t.fillStyle=i.lite,t.globalAlpha=.75,t.fill(),t.globalAlpha=1,t.fillStyle=i.dark,t.globalAlpha=.5,t.fillRect(52,17,4,30),t.globalAlpha=1,yi(e)}function HS(i){const[e,t]=vi(64);t.fillStyle=i.orbDark,t.globalAlpha=.55,t.beginPath(),t.arc(32,32,31,0,7),t.fill(),t.globalAlpha=1;const n=t.createRadialGradient(27,27,2,32,32,23);return n.addColorStop(0,i.orbLite),n.addColorStop(.55,i.orb),n.addColorStop(1,i.orbDark),t.fillStyle=n,t.beginPath(),t.arc(32,32,23,0,7),t.fill(),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.ellipse(25,24,6,4,-.6,0,7),t.fill(),yi(e)}function VS(i){const[e,t]=vi(192,64);t.fillStyle=i.slugHalo,t.beginPath(),t.ellipse(120,32,64,30,0,-Math.PI/2,Math.PI/2),t.lineTo(60,62),t.lineTo(60,2),t.closePath(),t.fill();const n=s=>{t.beginPath(),t.moveTo(40+s,18+s),t.lineTo(130,18+s),t.quadraticCurveTo(168-s,22+s*.3,178-s*1.6,32),t.quadraticCurveTo(168-s,42-s*.3,130,46-s),t.lineTo(40+s,46-s),t.closePath()};return n(0),t.fillStyle=i.slugEdge,t.fill(),n(4),t.fillStyle=i.slug,t.fill(),t.fillStyle="rgba(255,255,255,0.85)",t.beginPath(),t.moveTo(52,29),t.lineTo(150,29),t.quadraticCurveTo(160,32,150,35),t.lineTo(52,35),t.closePath(),t.fill(),t.fillStyle=i.slugEdge,t.globalAlpha=.8,t.fillRect(64,20,4,24),t.globalAlpha=1,yi(e)}function la(i){const[e,t]=vi(128,32),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,i+"00"),n.addColorStop(.45,i+"70"),n.addColorStop(.8,i+"d8"),n.addColorStop(1,i),t.fillStyle=n,t.fillRect(0,0,128,32),t.globalCompositeOperation="destination-in";const s=t.createLinearGradient(0,0,0,32);return s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.3,"rgba(0,0,0,1)"),s.addColorStop(.7,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,128,32),yi(e)}function GS(){const[i,e]=vi(128),t=64;e.fillStyle="#ffb21e",e.beginPath();for(let s=0;s<14;s++){const r=s*Math.PI/7,a=s%2?t*.42:t*(.8+.18*Math.sin(s*2.3));e.lineTo(t+Math.cos(r)*a,t+Math.sin(r)*a)}e.closePath(),e.fill();const n=e.createRadialGradient(t,t,2,t,t,t*.5);return n.addColorStop(0,"#fff"),n.addColorStop(.6,"#fff6b0"),n.addColorStop(1,"rgba(255,220,90,0)"),e.fillStyle=n,e.beginPath(),e.arc(t,t,t*.5,0,7),e.fill(),yi(i)}function WS(){const[i,e]=vi(128,32),t=(n,s)=>{e.beginPath(),e.moveTo(0,16-n),e.quadraticCurveTo(70,16-n*.6,128,16),e.quadraticCurveTo(70,16+n*.6,0,16+n),e.closePath(),e.fillStyle=s,e.fill()};return t(13,"#ff9a1a"),t(7,"#ffe866"),t(3,"#fffbe0"),yi(i)}function XS(){const[i,e]=vi(64);return e.fillStyle="#fff",e.beginPath(),e.arc(32,34,22,.2,Math.PI*1.7),e.arc(40,28,13,Math.PI*1.6,.4,!0),e.closePath(),e.fill(),yi(i)}function qS(){const[i,e]=vi(128),t=64;e.strokeStyle="#fff",e.lineWidth=5,e.beginPath(),e.arc(t,t,30,0,7),e.stroke(),e.fillStyle="rgba(255,255,255,0.18)",e.beginPath(),e.arc(t,t,28,0,7),e.fill(),e.fillStyle="#fff";for(let n=0;n<3;n++){const s=n*2*Math.PI/3-Math.PI/2,r=Math.cos(s),a=Math.sin(s);e.beginPath(),e.moveTo(t+r*26-a*9,t+a*26+r*9),e.quadraticCurveTo(t+r*40,t+a*40,t+r*62,t+a*62),e.quadraticCurveTo(t+r*40,t+a*40,t+r*26+a*9,t+a*26-r*9),e.closePath(),e.fill()}return yi(i)}function YS(){const i={};for(const e of["blue","red"])i[e]={capsule:kS(Zo[e]),orb:HS(Zo[e]),slug:VS(Zo[e])};return i.blue.streak=la("#3a8cff"),i.red.streak=la("#ff3a2a"),i.blue.streakSnipe=la("#7a6cff"),i.red.streakSnipe=la("#ff5a8a"),i.flash=GS(),i.jet=WS(),i.wisp=XS(),i.thornRing=qS(),i}const Gu=Math.sin(Gi*Math.PI/180),KS=new Vt(1,1).rotateX(-Math.PI/2),jS=1.2,Wu=i=>i*i*(3-2*i),ca={dealer:{tex:"capsule",head:[.65,.36],tip:.875,back:.4,tail:[1.9,.2,1],grow:.25,sh:1.3,n:1},tank:{tex:"orb",head:[.24,.24],tip:.5,back:.08,tail:[1.6,.15,.9],grow:.4,sh:1,n:4},sniper:{tex:"slug",head:[.84,.5],tip:.93,back:.55,tail:[.6,.14,.5],grow:.1,sh:1,n:1}},$S=[[.22,0],[0,.25],[0,-.25],[-.22,0]],ZS=.133;function JS(i,e,t,n,s){const r=YS(),a=new Map,o={dealer:[],tank:[],sniper:[]},l=new I;e.setCap("sniperLine",8),e.setCap("sniperSmoke",8),e.setCap("sniperSpark",10);const c=(d,f,p)=>{const _=new Ac(new Wa({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return _.renderOrder=f,_.frustumCulled=!1,_.center.set(p,.5),i.add(_),_},h=d=>{const f=ca[d],p=[];for(let g=0;g<f.n;g++)p.push({head:c(!1,9,f.tip),tail:c(!1,8,1)});const _=new je(KS,new ut({map:t.disc,color:0,transparent:!0,opacity:102/255,depthWrite:!1}));return _.renderOrder=3,_.frustumCulled=!1,i.add(_),{rig:d,parts:p,sh:_}},u=(d,f)=>{for(const p of d.parts)p.head.visible=p.tail.visible=f;d.sh.visible=f};return{update(d,f){for(const p of f.bullets){let _=a.get(p);const g=p.owner.c.rig,m=ca[g]||ca.dealer;if(!_){_=o[g]?.pop()||h(ca[g]?g:"dealer"),_.acc=0,_.age=0,u(_,!0),a.set(p,_);const O=p.isSuper?1.3:1,D=yr[p.team].ball;_.k=O,_.went0=p.went;for(const B of _.parts)B.head.material.map=r[D][m.tex],B.head.scale.set(m.head[0]*O,m.head[1]*O,1),B.tail.material.map=g==="sniper"?r[D].streakSnipe:r[D].streak,B.tail.material.opacity=m.tail[2];const k=n(p.owner,l)||gd(p.owner,p.ang);_.ox=k.x-p.x,_.oz=k.z-p.z,_.y=k.y,_.sh.scale.set(.57*m.sh*O,1,.46*m.sh*O),s&&(s.push({k:"bullet",id:p.owner.id,rig:g,x:k.x,y:k.y,z:k.z,t:f.t}),s.length>300&&s.shift())}_.age+=d;const y=p.went-_.went0,x=1-Wu(Math.min(1,y/jS)),M=p.x+_.ox*x,P=p.z+_.oz*x,E=Math.hypot(p.vx,p.vz)||1,S=p.vx/E,R=p.vz/E,L=Math.atan2(-R*Gu,S),v=Math.min(m.tail[0]*_.k*Math.min(1,_.age/m.grow),y-m.back*_.k+.3),T=Wu(Math.min(1,_.age/ZS));_.parts.forEach((O,D)=>{let k=M,B=P;if(_.parts.length>1){const[K,W]=$S[D];k+=(S*K-R*W)*T*_.k,B+=(R*K+S*W)*T*_.k}O.head.position.set(k,_.y,B),O.head.material.rotation=L;const U=m.back*_.k;O.tail.position.set(k-S*U,_.y,B-R*U),O.tail.material.rotation=L,O.tail.visible=v>.05,O.tail.scale.set(Math.max(.01,v),m.tail[1]*_.k,1)}),_.sh.position.set(M,.045,P),_.sh.rotation.y=-Math.atan2(R,S),g==="sniper"&&this.trail(_,p,M,P,d,S,R)}for(const[p,_]of a)f.bullets.includes(p)||(u(_,!1),o[_.rig].push(_),a.delete(p))},trail(d,f,p,_,g,m,y){const x=yr[f.team],M=d.y;d.acc+=g*10;const P=Math.atan2(-y*Gu,m);for(;d.acc>=1;){d.acc-=1;const E=ht(10,15);e.emit({tex:t.dash,add:!0,kind:"sniperLine",x:p,y:M,z:_,vx:-m*E,vz:-y*E,life:Ue(.15,.02),size:1.1,s0:Ue(.8,.2),aspect:.09,a0:.95,fadeOut:.5,rot:P,color:x.line}),e.emit({tex:t.puff[1],kind:"sniperSmoke",x:p,y:M,z:_,delay:.1,life:.28,size:.6,s0:.5,s1:.7,a0:.5,fadeIn:.3,fadeOut:.5,color:15922943}),e.emit({tex:t.twinkle,add:!0,kind:"sniperSpark",x:Ue(p,.08),y:Ue(M,.08),z:Ue(_,.08),vy:.5,life:Ue(.7,.3),size:.4,s0:.7,s1:.01,a0:.9,fadeOut:.5,spin:4,color:x.spark})}},clear(){for(const[,d]of a)u(d,!1),o[d.rig].push(d);a.clear()},tex:r}}const QS=Math.sin(Gi*Math.PI/180),Xu={dealer:{cloud:1.1,jet:.75,life:.3},tank:{cloud:1.6,jet:1.1,life:.42}},qu=16052710,eb=15257510,tb=15790834;function nb(i,e,t){i.setCap("hitDust",24),i.setCap("frag",60),i.setCap("rock",30),i.setCap("shell",16);const n=()=>e.puff[Math.random()*4|0];function s(o,l,c,h){i.emit({tex:e.burst,add:!0,x:o,y:l,z:c,life:Ue(.045,.015),size:1.2,s0:1,s1:.25,a0:1,fadeOut:0,rot:Math.random()*6.28,color:16773296});const u=Math.random()*6.28,d=ht(.8,1.2);i.emit({tex:n(),kind:"hitDust",x:o,y:l,z:c,vx:Math.cos(u)*d,vz:Math.sin(u)*d,g:2.1,life:Ue(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:h})}function r(o,l,c,h,u,d=1){const f=l+(o.cid==="tank"?100*Math.PI/180:Math.PI/2),p=ht(2.8,4)*d;i.emit({tex:e.shell,kind:"shell",x:(c+o.x)/2,y:h,z:(u+o.z)/2,vx:Math.cos(f)*p,vz:Math.sin(f)*p,vy:ht(2.25,4.5)*d,g:-30,bounce:.65,fric:.35,floor:!0,life:Ue(1.5,.5),size:.2,s0:.6,s1:.7,aspect:.5,a0:1,fadeOut:.25,rot:Math.random()*6.28,spin:ht(-14,14),color:16777215})}function a(o,l,c,h){const u=h?1.5:1,d=c.cloud*u,f=Math.cos(l),p=Math.sin(l),_=Math.atan2(-p*QS,f),g=c.jet*u;i.emit({tex:t.flash,ro:10,x:o.x,y:o.y,z:o.z,life:.067,size:d*.7,s0:.8,s1:1.2,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16777215}),i.emit({tex:t.jet,add:!0,x:o.x+f*g*.5,y:o.y,z:o.z+p*g*.5,delay:.016,life:.067,size:g,s0:1,s1:1.1,aspect:.4,a0:1,fadeOut:.4,rot:_,color:16777215}),i.emit({tex:n(),x:o.x,y:o.y,z:o.z,vx:f*.6,vz:p*.6,vy:.3,delay:.033,life:c.life*.8,size:d,s0:.7,s1:1,a0:1,fadeOut:.35,rot:Math.random()*6.28,color:16777215,color2:12896462});for(let m=0;m<4;m++){const y=l+Math.PI*(m/2-.75)+Ue(0,.3),x=ht(.8,1.6);i.emit({tex:t.wisp,x:o.x+Math.cos(y)*d*.2,y:o.y+Ue(0,d*.15),z:o.z+Math.sin(y)*d*.2,vx:Math.cos(y)*x+f*.5,vz:Math.sin(y)*x+p*.5,vy:.4,delay:.09,life:Ue(c.life-.09,.04),size:d*.38,s0:1,s1:.45,a0:.95,fadeOut:.5,rot:Math.random()*6.28,spin:Ue(0,3),color:14343650})}for(let m=0;m<6;m++){const y=l+Ue(0,.9),x=ht(3,6)*u;i.emit({tex:e.dot,add:!0,x:o.x,y:o.y,z:o.z,vx:Math.cos(y)*x,vz:Math.sin(y)*x,vy:ht(-.5,1.5),life:ht(.12,.3),size:.1*u,a0:1,fadeOut:.4,color:16754746})}}return{hit(o,l){const c=Ue(o.x,.12),h=Ma(o)+ht(-.1,.2),u=Ue(o.z,.1);if(l?.cid!=="sniper"||l.dash){s(c,h,u,qu);return}i.emit({tex:e.burst,add:!0,x:c,y:h,z:u,life:.05,size:.8,s0:.5,s1:1,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16769136}),i.emit({tex:t.thornRing,add:!0,x:c,y:h,z:u,delay:.05,life:.15,size:.8,s0:.55,s1:.85,a0:1,fadeOut:.6,rot:Math.random()*6.28,spin:2,color:yr[l.team].spark});const d=Math.random()*6.28,f=ht(.8,1.2);i.emit({tex:n(),kind:"hitDust",x:c,y:h,z:u,vx:Math.cos(d)*f,vz:Math.sin(d)*f,g:2.1,life:Ue(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:qu})},wall(o){s(o.x,.5,o.z,eb);for(let l=0;l<3;l++){const c=Math.random()*6.28,h=ht(.8,1.6);i.emit({tex:e.rock,kind:"rock",x:o.x,y:.5,z:o.z,vx:Math.cos(c)*h,vz:Math.sin(c)*h,vy:ht(2.25,4.5),g:-30,bounce:.3,fric:.4,floor:!0,life:Ue(.55,.45)+.1,size:.24,s0:.75,s1:.4,a0:1,fadeOut:.3,spin:ht(-12,12),color:Fi.wallSide})}},fizzle(o){const l=o.owner.cid==="tank",c=.5,h=o.isSuper?1.2:1;for(let d=0;d<(l?2:1);d++){const f=l?.5:.3;i.emit({tex:n(),x:Ue(o.x,f),y:c,z:Ue(o.z,f),vy:.3,life:.48,size:1.1*h,s0:.6,s1:1,a0:.85,fadeOut:.6,rot:Math.random()*6.28,color:tb})}const u=l?3:7;for(let d=0;d<u;d++)i.emit({tex:e.rock,kind:"frag",x:o.x,y:c,z:o.z,vx:Ue(0,3),vz:Ue(0,3),vy:ht(8,18),g:-105,bounce:.4,fric:.3,floor:!0,life:Ue(.6,.3),size:.55,s0:.4,s1:0,a0:1,fadeOut:.2,spin:7,spin1:0,color:12099696})},muzzle(o,l,c,h){if(i.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.08,size:c?.8:.48,s0:.7,s1:1.5,a0:.9,fadeOut:.6,rot:Math.random()*6.28,color:o.team==="blue"?6079231:16743034}),o.cid==="sniper"){i.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.1,size:c?.9:.5,s0:1,s1:2,a0:1,fadeOut:.5,rot:Math.random()*6.28,color:16773824});for(let u=0;u<7;u++){const d=l+Ue(0,.7),f=ht(4,4.8);i.emit({tex:e.twinkle,add:!0,x:h.x,y:h.y,z:h.z,vx:Math.cos(d)*f,vz:Math.sin(d)*f,vy:ht(.5,2),g:-6,life:Ue(.525,.225),size:.26,s0:.5,s1:.01,a0:1,fadeOut:.4,spin:6,color:16765040})}for(let u=0;u<5;u++)i.emit({tex:n(),x:Ue(h.x,.1),y:h.y,z:Ue(h.z,.1),vx:Math.cos(l)*.6,vz:Math.sin(l)*.6,vy:.5,life:Ue(1.35,.35),size:.9,s0:.5,s1:.1,a0:.5,fadeOut:.8,rot:Math.random()*6.28,color:15659252});r(o,l,h.x,h.y,h.z,1.4)}else a(h,l,Xu[o.cid]||Xu.dealer,c),r(o,l,h.x,h.y,h.z)}}}function ib(i,e){i.setCap("gas",90),i.setCap("twinkle",60),i.setCap("dust20",60),i.setCap("crack",4),i.setCap("drock",10),i.setCap("ddust",20),i.setCap("ready",66);const t=()=>e.puff[Math.random()*4|0],n=(s,r)=>{const a=Ue(0,s),o=Math.random()*6.28;return[Math.sin(a)*r*Math.cos(o),Math.cos(a)*r,Math.sin(a)*r*Math.sin(o)]};return{death(s){const r=yr[s.team],a=s.x,o=s.z,l=Ma(s);i.emit({tex:e.skull,x:a,y:l+.45,z:o,ro:9,life:.85,size:2.5*1.425,s0:.8,s1:1.1,a0:.95,fadeOut:.45,color:12119295,color2:9427199}),i.emit({tex:e.burst,add:!0,x:a,y:l,z:o,life:.4,size:2*Ue(1,.15),s0:.6,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.tint});for(let c=0;c<30;c++){const h=Math.random()*6.28,u=Ue(2,1)*1.4;i.emit({tex:t(),kind:"gas",delay:Math.random()*.12,x:Ue(a,.25),y:l+ht(-.2,.3),z:Ue(o,.25),vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2,drag:4.4,life:Ue(.45,.15),size:.7,s0:.8,s1:3.5+Ue(0,.8),a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.gas0,color2:r.gas1})}for(let c=0;c<20;c++){const[h,u,d]=n(.35,Ue(12,4));i.emit({tex:e.twinkle,add:!0,kind:"twinkle",x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-28,dz:12,bounce:.45,fric:.3,floor:!0,life:Ue(.9,.4),size:.5,s0:Ue(.7,.3),s1:0,a0:1,fadeOut:.3,spin:ht(-5,5),color:r.spark})}i.emit({tex:e.ring,flat:!0,x:a,y:.4,z:o,vy:7,dz:10,life:1.2,size:4*.35,s0:.7,s1:1.8,a0:.55,fadeOut:.6,color:16777215});for(let c=0;c<20;c++){const[h,u,d]=n(.78,2.5);i.emit({tex:e.smallStar,add:!0,kind:"dust20",delay:Math.random()**2*.35,x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-6,life:Ue(.8,.05),size:.3,s0:Ue(.9,.2),s1:Ue(.9,.2),a0:1,fadeOut:.3,blink:38,spin:ht(-3,3),color:16777215})}},spawn(s,r){const a=yr[s.team],o=Ma(s);i.emit({tex:e.bubble,add:!0,x:s.x,y:o,z:s.z,life:2,size:2.6,s0:0,s1:1,ease:1,a0:.85,fadeOut:.4,color:a.tint,follow:s,fy:o});const l=i.emit({tex:e.dot,add:!0,x:s.x,y:o,z:s.z,life:3,size:2,s0:1,s1:1,a0:.2,fadeOut:.15,blink:9,color:16777215,follow:s,fy:o});l&&r.set(s,{gen:l.gen,p:l,t:s.lastShot})},ready(s){const r=Ma(s);for(let a=0;a<33;a++){const o=Math.random()*6.28,l=ht(.8,1.5),c=Ue(.375,.075),h=r+ht(-.5,.6);i.emit({tex:e.dot,add:!0,kind:"ready",x:s.x+Math.cos(o)*l,y:h,z:s.z+Math.sin(o)*l,vx:-Math.cos(o)*l/c,vz:-Math.sin(o)*l/c,vy:(r-h)/c,life:c,size:.3,s0:.7,s1:.01,a0:1,fadeOut:.2,color:16767050})}},dash(s,r,a){for(a.crack=(a.crack||0)+r*14.3,a.rock=(a.rock||0)+r*18,a.dust=(a.dust||0)+r*45;a.crack>=1;)a.crack--,i.emit({tex:e.crack,flat:!0,kind:"crack",x:s.x,y:.05,z:s.z,life:.7,size:1.3,s0:1,s1:1.05,a0:.8,fadeOut:.5,rot:Math.random()*6.28,color:3811866});for(;a.rock>=1;){a.rock--;const o=Math.random()*6.28,l=ht(.5,2);i.emit({tex:e.rock,kind:"drock",x:Ue(s.x,.2),y:.2,z:Ue(s.z,.2),vx:Math.cos(o)*l,vz:Math.sin(o)*l,vy:ht(9,22.5),g:-105,bounce:.3,fric:.4,floor:!0,life:Ue(.55,.25),size:.26,s0:1,s1:.7,a0:1,fadeOut:.2,spin:ht(-12,12),color:13152392})}for(;a.dust>=1;)a.dust--,i.emit({tex:t(),kind:"ddust",x:Ue(s.x,.3),y:.25,z:Ue(s.z,.3),vy:.8,life:Ue(.35,.15),size:.7,s0:1.5,s1:.01,a0:.9,fadeOut:.3,rot:Math.random()*6.28,color:15128240})}}}const sb={dealer:.3,tank:.3,sniper:.4};function rb(i,{muzzleOf:e=()=>null}={}){const t=US(),n=BS(i),s=[],r=new I,a=[],o=JS(i,n,t,e,s),l=nb(n,t,o.tex),c=ib(n,t);n.setCap("walk",40);const h=new Map,u=new Map,d=new Map;let f=null;const p=new Ka(.22,0),_=Qf(Fi.gem,{emissive:6955184,ei:.6});function g(){a.length=0,n.clear(),o.clear(),u.clear(),d.clear();for(const x of h.values())i.remove(x);h.clear()}const m=x=>{let M=u.get(x);return M||(M={step:0,moved:x.moved,ready:x.superCharge>=1},u.set(x,M)),M};return{onEvent(x){switch(x.type){case"shot":a.push([x.u,x.ang,!1]);break;case"super":x.u.cid!=="tank"&&a.push([x.u,x.ang,!0]);break;case"hit":l.hit(x.u,x.from);break;case"wall":l.wall(x.b);break;case"fizzle":l.fizzle(x.b);break;case"death":c.death(x.u);break;case"spawn":c.spawn(x.u,d);break;case"gem":n.emit({tex:t.dot,add:!0,x:x.u.x,y:.9,z:x.u.z,life:.25,size:1,s0:.5,s1:1.8,a0:.9,fadeOut:1,color:Fi.gemGlow});break}},update(x,M,P){P!==f&&(g(),f=P);for(const[E,S,R]of a.splice(0)){const L=e(E,r)||gd(E,S);l.muzzle(E,S,R,L),s.push({k:"smoke",id:E.id,rig:E.c.rig,x:L.x,y:L.y,z:L.z,t:P.t}),s.length>300&&s.shift()}o.update(x,P);for(const E of P.gems){let S=h.get(E);if(!S){S=new Ot;const R=new je(p,_);R.castShadow=!0,S.add(R);const L=new Ac(new Wa({map:t.dot,color:Fi.gemGlow,transparent:!0,depthWrite:!1,opacity:.55}));L.scale.setScalar(1.1),S.add(L),i.add(S),h.set(E,S)}S.position.set(E.x,.45+Math.sin(M*4+E.x)*.08,E.z),S.children[0].rotation.y=M*2.5}for(const[E,S]of h)P.gems.includes(E)||(i.remove(S),h.delete(E));for(const E of P.units){const S=m(E);if(!E.alive){S.moved=E.moved;continue}P.t>0&&P.t<.3&&!S.born&&(S.born=!0,c.spawn(E,d));const R=E.moved-S.moved;S.moved=E.moved,E.dash?c.dash(E,x,S):R/Math.max(x,.001)>E.c.speed*.3&&xi(P,"blue",E)?(S.step-=x,S.step<=0&&(S.step+=sb[E.cid]??.3,n.emit({tex:t.puff[Math.random()*4|0],kind:"walk",x:E.x,y:.12,z:E.z,g:1.5,life:1.8+(Math.random()-.5)*1.2,size:.7,s0:.5,s1:1,a0:.26,fadeOut:.8,rot:Math.random()*6.28,color:15328464}))):S.step=0,E.superCharge>=1&&!S.ready&&E.team==="blue"&&c.ready(E),S.ready=E.superCharge>=1}for(const[E,S]of d){if(S.p.gen!==S.gen){d.delete(E);continue}(!E.alive||E.lastShot>S.t)&&(S.p.life=Math.min(S.p.life,S.p.t+.15),d.delete(E))}n.update(x)},dispose(){g(),f=null},log:s}}const Yu=16,ab=62;function ob(i,e){const t={move:null,atk:null,sup:null,mx:0,mz:0,aim:null,aimKind:null,fire:null,superFire:null,keys:new Set};function n(a,o,l){const c=a.clientX-o,h=a.clientY-l,u=Math.hypot(c,h);return{dx:c,dy:h,d:u}}const s=a=>{const o=a.getBoundingClientRect();return[o.left+o.width/2,o.top+o.height/2]};i.addEventListener("pointerdown",a=>{if(!e.active())return;a.preventDefault();const[o,l]=s(e.atkBtn),[c,h]=s(e.supBtn),u=e.atkBtn.getBoundingClientRect().width*.75,d=e.supBtn.getBoundingClientRect().width*.75;Math.hypot(a.clientX-c,a.clientY-h)<d&&!t.sup?t.sup={id:a.pointerId,cx:c,cy:h,t0:performance.now(),d:0}:Math.hypot(a.clientX-o,a.clientY-l)<u&&!t.atk?t.atk={id:a.pointerId,cx:o,cy:l,t0:performance.now(),d:0}:a.clientX<innerWidth*.5&&!t.move&&(t.move={id:a.pointerId,cx:a.clientX,cy:a.clientY},e.showStick(a.clientX,a.clientY)),i.setPointerCapture?.(a.pointerId)},{passive:!1}),i.addEventListener("pointermove",a=>{for(const o of["move","atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const{dx:c,dy:h,d:u}=n(a,l.cx,l.cy),d=Math.min(u,ab)/(u||1);if(l.d=Math.max(l.d,u),o==="move"){const f=u||1,p=Math.min(1,u/30);t.mx=c/f*p,t.mz=h/f*p,e.moveStick(c*d,h*d)}else t.aim=u>Yu?Math.atan2(h,c):null,t.aimKind=o,e.moveKnob(o,c*d,h*d)}});function r(a){t.move?.id===a.pointerId&&(t.move=null,t.mx=t.mz=0,e.hideStick());for(const o of["atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const c=l.d>Yu?t.aim:"auto";o==="atk"?t.fire=c:t.superFire=c,t[o]=null,t.aim=null,t.aimKind=null,e.moveKnob(o,0,0)}}return i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),addEventListener("keydown",a=>{t.keys.add(a.code),a.code==="Space"&&(t.fire="auto"),a.code==="KeyE"&&(t.superFire="auto")}),addEventListener("keyup",a=>t.keys.delete(a.code)),{st:t,move(){const a=t.keys;let o=t.mx,l=t.mz;return(a.has("KeyA")||a.has("ArrowLeft"))&&(o-=1),(a.has("KeyD")||a.has("ArrowRight"))&&(o+=1),(a.has("KeyW")||a.has("ArrowUp"))&&(l-=1),(a.has("KeyS")||a.has("ArrowDown"))&&(l+=1),[o,l]},take(){const a=t.fire,o=t.superFire;return t.fire=null,t.superFire=null,[a,o]}}}const Zs=2;function lb(i,{top:e=0,topW:t=0,cx:n=0,screenW:s=0}={}){const r=[],a=new Map;for(const o of[...i].sort((l,c)=>c.y-l.y)){const l=f=>t&&Math.abs(f-n)<t/2+o.w/2?e+o.h:o.h,c=([f,p])=>p>=l(f)&&(!s||f-o.w/2>=0&&f+o.w/2<=s)&&!r.some(_=>Math.abs(_.x-f)<(_.w+o.w)/2+Zs&&p>_.y-_.h-Zs&&p-o.h<_.y+Zs),h=Math.max(o.y,l(o.x)),u=[[o.x,h]];for(const f of r){const p=(f.w+o.w)/2+Zs;u.push([o.x,f.y-f.h-Zs],[f.x-p,h],[f.x+p,h],[f.x-p,f.y],[f.x+p,f.y])}const d=u.filter(c).sort((f,p)=>Math.hypot(f[0]-o.x,f[1]-o.y)-Math.hypot(p[0]-o.x,p[1]-o.y))[0]||[o.x,h];r.push({x:d[0],y:d[1],w:o.w,h:o.h}),a.set(o.key,d)}return a}const rt=(i,e=document)=>e.querySelector(i),lr=(i,e,t="")=>{const n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n};function cb(i){const e=lr("div","hud");e.innerHTML=`
    <div class="top"><div class="score blue"><i class="gem"></i><b>0</b></div><div class="timer">2:00</div><div class="score red"><b>0</b><i class="gem"></i></div></div>
    <div class="league"></div>
    <div class="banner"></div>
    <div class="bars"></div><div class="nums"></div>
    <div class="stick"><div class="knob"></div></div>
    <div class="btn sup"><div class="fill"></div><div class="knob"></div></div>
    <div class="btn atk"><div class="knob"></div></div>
    <div class="respawn"></div>`,i.appendChild(e);const t=new Map,n=new Map;let s=!1;const r={hud:e,atkBtn:rt(".atk",e),supBtn:rt(".sup",e),active:()=>s,show(a){s=a,e.classList.toggle("on",a)},showStick(a,o){const l=rt(".stick",e);l.style.left=a+"px",l.style.top=o+"px",l.classList.add("on")},moveStick(a,o){rt(".stick .knob",e).style.transform=`translate(${a}px,${o}px)`},hideStick(){rt(".stick",e).classList.remove("on"),r.moveStick(0,0)},moveKnob(a,o,l){rt(`.${a} .knob`,e).style.transform=`translate(${o}px,${l}px)`},setLeague(a){const o=rt(".league",e);o.textContent=a,o.style.opacity="",clearTimeout(r._lg),r._lg=setTimeout(()=>{o.style.opacity="0"},3e3)},update(a,o,l,c){const h=a.units.reduce((x,M)=>x+(M.team==="blue"&&M.alive?M.gems:0),0),u=a.units.reduce((x,M)=>x+(M.team==="red"&&M.alive?M.gems:0),0);rt(".score.blue b",e).textContent=h,rt(".score.red b",e).textContent=u;const d=Math.max(0,Math.ceil(gn.time-a.t));rt(".timer",e).textContent=`${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}`;const f=rt(".banner",e);a.countdown?(f.className=`banner on ${a.countdown.team}`,f.innerHTML=`<small>${a.countdown.team==="blue"?"우리 팀":"상대 팀"} 승리까지</small><b>${Math.ceil(a.countdown.left)}</b>`):f.className="banner";const p=r.supBtn;p.classList.toggle("ready",o.superCharge>=1),rt(".fill",p).style.setProperty("--p",`${Math.round(o.superCharge*100)}%`);const _=rt(".respawn",e);o.alive?_.classList.remove("on"):(_.classList.add("on"),_.innerHTML=`다시 나가기까지 <b>${Math.ceil(o.respawnT)}</b>`);const g=[];for(const x of a.units){let M=t.get(x);M||(M=lr("div",`bar ${x.isPlayer?"me":x.team}`,`<div class="gems"><i class="gem"></i><b></b></div><div class="nm">${x.name}</div><div class="hp"><div class="v"></div><span></span></div>${x.isPlayer?'<div class="ammo"><i></i><i></i><i></i></div>':""}`),rt(".bars",e).appendChild(M),t.set(x,M));const P=x.alive&&c(x);if(M.style.display=P?"":"none",!P)continue;const[E,S]=l(x.x,sS(x.c),x.z);M._x=E,M._y=S,g.push(M),rt(".v",M).style.width=`${x.hp/x.maxHp*100}%`,rt("span",M).textContent=Math.ceil(x.hp);const R=rt(".gems",M);R.style.display=x.gems?"":"none",rt(".gems b",M).textContent=x.gems,x.isPlayer&&rt(".ammo",M).querySelectorAll("i").forEach((L,v)=>L.style.setProperty("--f",Math.max(0,Math.min(1,x.ammo-v))))}const m=rt(".top",e).getBoundingClientRect(),y=lb(g.map(x=>({key:x,x:x._x,y:x._y,w:x.offsetWidth,h:x.offsetHeight})),{top:m.bottom+4,topW:m.width,cx:m.left+m.width/2,screenW:innerWidth});for(const x of g){const[M,P]=y.get(x),E=x._sy==null||Math.hypot(x._sx-M,x._sy-P)>80;x._sx=E?M:x._sx+(M-x._sx)*.5,x._sy=E?P:x._sy+(P-x._sy)*.5,x.style.transform=`translate(${x._sx}px,${x._sy}px) translate(-50%,-100%)`}},damage(a,o,l,c,h){const u=performance.now(),d=h&&n.get(h);if(d&&u-d.t<350&&d.d.isConnected){d.n+=l,d.t=u,d.d.textContent=String(d.n),d.d.style.left=a+"px",d.d.style.top=o+"px",d.d.style.animation="none",d.d.offsetWidth,d.d.style.animation="",clearTimeout(d.k),d.k=setTimeout(()=>d.d.remove(),800);return}const f=lr("div",`num ${c?"mine":""}`,String(l));f.style.left=a+"px",f.style.top=o+"px",rt(".nums",e).appendChild(f);const p={d:f,n:l,t:u,k:setTimeout(()=>f.remove(),800)};h&&n.set(h,p)},reset(){t.forEach(a=>a.remove()),t.clear(),n.clear()}};return r}function hb(i,{trophies:e,tierName:t,mode:n,duelTier:s,onPick:r,onStart:a,onMode:o,onTier:l}){const c={hp:5e3,range:10,dps:1700},h=_=>{const g=_.attack;return(g.kind==="burst"?g.n*g.dmg:g.kind==="spread"?g.n*g.dmg*.6:g.dmg*.8)/_.reload},u=lr("div","select");u.innerHTML=`<div class="head"><div class="tro"><i class="cup"></i><b>${e}</b></div><div class="lg">연습 리그 · ${t}</div></div>
    <div class="mid"><div class="seg modes"><button data-m="3v3">3대3</button><button data-m="1v1">1대1</button></div>
      <div class="seg tiers">${vr.map((_,g)=>`<button data-t="${g}">${_.name}</button>`).join("")}</div></div>
    <div class="cards">${xr.map(_=>{const g=$a[_];return`<button class="card" data-id="${_}"><div class="nm">${g.name}</div><div class="role">${g.role}</div>
      <div class="st"><span>체력</span><div class="g"><i style="width:${g.hp/c.hp*100}%"></i></div></div>
      <div class="st"><span>사거리</span><div class="g"><i style="width:${g.attack.range/c.range*100}%"></i></div></div>
      <div class="st"><span>공격</span><div class="g"><i style="width:${Math.min(100,h(g)/c.dps*100)}%"></i></div></div></button>`}).join("")}</div>
    <button class="go">시작</button>`,i.appendChild(u),u.querySelectorAll(".card").forEach(_=>_.addEventListener("click",()=>{p(_.dataset.id),r(_.dataset.id)})),rt(".go",u).addEventListener("click",()=>a());const d=_=>{u.classList.toggle("duel",_==="1v1"),u.querySelectorAll(".modes button").forEach(g=>g.classList.toggle("on",g.dataset.m===_))},f=_=>u.querySelectorAll(".tiers button").forEach(g=>g.classList.toggle("on",Number(g.dataset.t)===_));u.querySelectorAll(".modes button").forEach(_=>_.addEventListener("click",()=>{d(_.dataset.m),o(_.dataset.m)})),u.querySelectorAll(".tiers button").forEach(_=>_.addEventListener("click",()=>{f(Number(_.dataset.t)),l(Number(_.dataset.t))})),d(n),f(s);function p(_){u.querySelectorAll(".card").forEach(g=>g.classList.toggle("on",g.dataset.id===_))}return{box:u,pick:p,show(_){u.classList.toggle("on",_)},setTrophies(_,g){rt(".tro b",u).textContent=_,rt(".lg",u).textContent=`연습 리그 · ${g}`}}}function ub(i,{onAgain:e,onChange:t}){const n=lr("div","result");return n.innerHTML=`<div class="big"></div><div class="tro"><i class="cup"></i><b></b></div><div class="stats"></div>
    <div class="row"><button class="change">챔피언 바꾸기</button><button class="again">다시 하기</button></div>`,i.appendChild(n),rt(".again",n).addEventListener("click",e),rt(".change",n).addEventListener("click",t),{show(s,r){n.classList.toggle("on",s),s&&(n.className=`result on ${r.kind}`,rt(".big",n).textContent=r.kind==="win"?"승리":r.kind==="lose"?"패배":"무승부",rt(".tro b",n).textContent=(r.delta>0?"+":"")+r.delta,rt(".stats",n).innerHTML=`<div><span>처치</span><b>${r.kills}</b></div><div><span>모은 보석</span><b>${r.gems}</b></div><div><span>트로피</span><b>${r.total}</b></div>`)}}}function fb(i,e){const t=(p,_)=>Number(e.get(p)??_)*Math.PI/180,n=t("ang",0),s=e.has("run")?t("run",0):null,r=Number(e.get("every")??.9),a=e.has("super")?Number(e.get("super")||2):null,o=i.units.find(p=>p.team==="blue"&&p.cid===e.get("lab"))||i.units[0],l={x:i.mine.x,z:i.mine.z},c=e.has("nofoe")?null:i.units.find(p=>p.team==="red"&&p.cid===o.cid);for(const p of i.units)p!==o&&p!==c&&(p.alive=!1,p.respawnT=1e9);if(Object.assign(o,{x:l.x,z:l.z,isPlayer:!0,face:n}),c){const p=l.x+Math.cos(n)*5,_=l.z+Math.sin(n)*5;ci(i,Math.floor(p),Math.floor(_))?(c.alive=!1,c.respawnT=1e9):Object.assign(c,{x:p,z:_,isPlayer:!0,hp:1e9,maxHp:1e9,face:n+Math.PI})}i.mineT=1e9;let h=.4,u=1,d=0,f=null;return{me:o,tick(p){o.ammo=o.c.ammo,s!=null&&(d+=p,d>1.6&&(d=0,u=-u),o.input.mx=Math.cos(s)*u,o.input.mz=Math.sin(s)*u),h-=p,h<=0&&(h+=r,o.input.fire=n),a!=null&&(f=(f??.6)-p,f<=0&&!o.dash&&(f=a,o.superCharge=1,o.input.superFire=n)),c&&(c.hp=c.maxHp,c.input.mx=c.input.mz=0)}}}const wt=new URLSearchParams(location.search),_d=wt.get("lab"),Is=wt.has("auto")||!!_d,Vc=wt.has("sprites"),pi={get:(i,e)=>{try{return JSON.parse(localStorage.getItem("chichibrawl."+i))??e}catch{return e}},set:(i,e)=>{try{localStorage.setItem("chichibrawl."+i,JSON.stringify(e))}catch{}}};let En=wt.has("tro")?Number(wt.get("tro")):pi.get("trophies",0),mi=wt.get("champ")||pi.get("pick","dealer");$a[mi]||(mi="dealer");let oc=wt.get("mode")||pi.get("mode","3v3"),lc=Math.min(vr.length-1,Number(wt.get("tier")??pi.get("duelTier",2)));const db=document.getElementById("stage"),cn=new $x({antialias:!0,preserveDrawingBuffer:Is});cn.setPixelRatio(wt.has("dpr")?Number(wt.get("dpr")):Math.min(devicePixelRatio||1,2));cn.outputColorSpace=dt;cn.shadowMap.enabled=!0;cn.shadowMap.type=Qu;cn.toneMapping=Xn;db.appendChild(cn.domElement);const xn=new If;xn.background=new Se(3111484);const xd=Math.sin(Gi*Math.PI/180),pb=Math.cos(Gi*Math.PI/180),an=new Sr(-1,1,1,-1,1,220);xn.userData.cam=an;const cc=wt.has("view")?Number(wt.get("view")):30;let Ui=cc;xn.add(new Yv(16777215,10066329,1.55));const wn=new $f(16777215,1.6);wn.castShadow=!0;wn.shadow.mapSize.set(2048,2048);Object.assign(wn.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:90});wn.shadow.bias=-6e-4;wn.shadow.normalBias=.04;wn.shadow.radius=4;xn.add(wn,wn.target);function Gc(){cn.setSize(innerWidth,innerHeight);const i=innerWidth/innerHeight;an.left=-Ui/2,an.right=Ui/2,an.top=Ui/i/2,an.bottom=-Ui/i/2,an.updateProjectionMatrix()}addEventListener("resize",Gc);Gc();function Ku(i){Math.abs(i-Ui)>.001&&(Ui=i,Gc())}function ju(i,e){an.position.set(i,xd*80,e+pb*80),an.lookAt(i,0,e),an.updateMatrixWorld(),wn.position.set(i+.18*30,30,e-.52*30),wn.target.position.set(i,0,e)}const Qo=new I;function Wc(i,e,t){return Qo.set(i,e,t).project(an),[(Qo.x+1)/2*innerWidth,(1-Qo.y)/2*innerHeight]}const mb=wt.get("look")==="0",gb=pS(cn,xn,an);let qe=null,gi=null,hc=null,An=[],Hi=null,ze=null,uc=null,nn="load",el=0,ms=0,Sa=28,ba=10.5;const Mi=cb(document.body),Ea=ob(cn.domElement,Mi),Fa=hb(document.body,{trophies:En,tierName:kc(En).name,mode:oc,duelTier:lc,onPick:i=>{mi=i,pi.set("pick",i),Md()},onStart:()=>qc(),onMode:i=>{oc=i,pi.set("mode",i)},onTier:i=>{lc=i,pi.set("duelTier",i)}}),Xc=ub(document.body,{onAgain:()=>qc(),onChange:()=>Sd()}),vd=new ut({color:16777215,transparent:!0,opacity:.32,depthWrite:!1,side:sn}),Sn=new je(new yt,vd);Sn.visible=!1;xn.add(Sn);function _b(i){if(i.kind==="spread")return new zi(i.range,24,-i.arc/2,i.arc).rotateX(-Math.PI/2).rotateY(Math.PI/2);const e=i.kind==="dash"?i.dist:i.range,t=i.kind==="dash"?1:i.kind==="burst"?.55:.4;return new Vt(t,e).rotateX(-Math.PI/2).translate(0,0,e/2)}function xb(){gi&&(gi.dispose(),gi=null),hc?.dispose(),hc=null;for(const i of An)i.dispose();An=[],Hi&&Hi.dispose?.(),Mi.reset()}function yd(i,e){xb();const t=i.blue.length===1,n=t?vr[lc]:kc(En),s=(a,o,l)=>a==="blue"&&o===e?"나":$a[l].name,r={blue:i.blue.map((a,o)=>s("blue",o,a)),red:i.red.map((a,o)=>s("red",o,a))};qe=Iy({picks:i,player:e,tier:n,seed:wt.has("seed")?Number(wt.get("seed")):Math.random()*1e9|0,names:r}),gi=YM(xn,qe),hc=dS(xn,qe),Hi=Hi||rb(xn,{muzzleOf:(a,o)=>An.find(l=>l.u===a)?.muzzle?.(o)??null}),An=qe.units.map(a=>(Vc?lS:PS)(xn,a)),ze=qe.units.find(a=>a.isPlayer)||qe.units[0],Mi.setLeague(t?`1대1 연습 · ${n.name}`:`연습 리그 · ${n.name}`)}function Md(){if(!qe||nn!=="select")return;const i=qe.spawns.blue;qe.units.forEach((e,t)=>{const n=An[t];if(e.team!=="blue"){n.root.visible=!1;return}e.x=i[t].x,e.z=i[t].z-1,e.face=Math.PI/2,n.x=e.x,n.z=e.z,e.isPlayer=e.cid===mi,n.ring.material.opacity=e.isPlayer?.95:.25,e.isPlayer&&(n.pop=0)}),Fa.pick(mi)}function Sd(){nn="select",Xc.show(!1),Mi.show(!1),yd({blue:[...xr],red:[...xr]},-1),Fa.setTrophies(En,kc(En).name),Fa.show(!0),Md()}function qc(){Fa.show(!1),Xc.show(!1);const i=xr.filter(n=>n!==mi),e=[...xr].sort(()=>Math.random()-.5),t=oc==="1v1"?{blue:[mi],red:[e[0]]}:{blue:[mi,...i],red:e};yd(t,Is&&!wt.has("me")?-1:0),Is&&(ze=qe.units[0]),_d&&(uc=fb(qe,wt),ze=uc.me),nn="play",Mi.show(!0),Sa=ze.z,ba=ze.x}function vb(){nn="result";const i=qe.winner==="draw"?"draw":qe.winner==="blue"?"win":"lose";let e=qe.units.length===2?0:yu[i];i==="lose"&&En<yu.safeUnder&&(e=0),En=Math.max(0,En+e),pi.set("trophies",En),Mi.show(!1),Xc.show(!0,{kind:i,delta:e,total:En,kills:ze.kills,gems:ze.gemsTaken||0})}function $u(i,e,t){if(i==null)return null;if(i!=="auto")return i;let n=null,s=1/0;const r=t.kind==="dash"?t.dist+1:(t.range??Jf(e))*1.1;for(const a of qe.units)if(a.team!==e.team&&xi(qe,e.team,a)){const o=Math.hypot(a.x-e.x,a.z-e.z);o<s&&o<r&&(s=o,n=a)}return n?Math.atan2(n.z-e.z,n.x-e.x):e.face}const Oi=1/60;let tl=0,nl=performance.now(),Ba=0;function bd(i){if(nn==="play"){if(!Is&&ze.alive){const[e,t]=Ea.move();ze.input.mx=e,ze.input.mz=t;const[n,s]=Ea.take();ze.input.fire=$u(n,ze,ze.c.attack),ze.input.superFire=$u(s,ze,ze.c.super)}else Ea.take();uc?.tick(i),Oy(qe,i);for(const e of qe.events){if(Hi.onEvent(e),e.type==="destroy"&&gi.destroy(e.i,e.j,e.kind),e.type==="wall"&&gi?.hitWall(e.b),(e.type==="super"||e.type==="death")&&window.__brawl.moments.push({t:+Ba.toFixed(2),type:e.type,who:e.u.c.name,team:e.u.team,d:ze.alive||e.u===ze?+Math.hypot(e.u.x-ze.x,e.u.z-ze.z).toFixed(1):99}),e.type==="hit"){const[t,n]=Wc(e.u.x,e.u.c.height+.3,e.u.z);xi(qe,ze.team,e.u)&&Mi.damage(t,n,e.dmg,e.u===ze,e.u);const s=An.find(r=>r.u===e.u);s&&(s.flash=1,s.onHit?.())}if(e.type==="shot"||e.type==="super"){const t=An.find(s=>s.u===e.u);t&&t.onShot();const n=window.__brawl.shots;n.push({id:e.u.id,t:qe.t,ang:e.ang}),n.length>400&&n.shift()}e.type==="push"&&An.find(t=>t.u===e.u)?.onPush?.(),(e.type==="death"||e.type==="super")&&xi(qe,ze.team,e.u)&&Math.hypot(e.u.x-ze.x,e.u.z-ze.z)<9&&(ms=Math.max(ms,e.u===ze||e.from===ze?.12:.05)),e.type==="gem"&&e.u===ze&&(ze.gemsTaken=(ze.gemsTaken||0)+1),e.type==="end"&&(el=1.6)}qe.events.length=0,qe.over&&(el-=i,el<=0&&!Is&&vb())}}function Ed(i,e){if(!qe)return;const t=ze?ze.team:"blue";for(const s of An){const r=s.u,a=nn==="select"?r.team==="blue":xi(qe,t,r),o=r.team===t&&qe.map[Math.floor(r.z)]?.[Math.floor(r.x)]==="B";nn==="select"&&(s.bodyScale=r.isPlayer?1.1:.92),s.update(i,e,a,o?.6:1),nn==="select"&&(s.root.visible=r.team==="blue")}if(gi.update(e,qe.units,t,qe.bullets),Hi.update(i,e,qe),nn==="select")Ku(10*.7/1.05),ju(qe.W/2,qe.spawns.blue[1].z-1.2);else{Ku(cc);const s=Ui/(innerWidth/innerHeight)/2/xd-.6,r=ze.team==="blue"?-1.4:1.4,a=(ze.alive?ze.z:qe.spawns[ze.team][ze.k].z)+r;Sa+=(Math.max(s,Math.min(qe.H-s,a))-Sa)*Math.min(1,i*5);const o=cc/2-.4,l=ze.alive?ze.x:qe.spawns[ze.team][ze.k].x;ba+=((o*2>=qe.W?qe.W/2:Math.max(o,Math.min(qe.W-o,l)))-ba)*Math.min(1,i*5),ms=Math.max(0,ms-i);const c=(Math.random()-.5)*ms*.8,h=(Math.random()-.5)*ms*.8;ju(ba+c,Sa+h)}const n=Ea.st;if(nn==="play"&&ze.alive&&n.aimKind&&n.aim!=null){const s=n.aimKind==="sup"?ze.c.super:ze.c.attack;Sn.userData.spec!==s&&(Sn.geometry.dispose(),Sn.geometry=_b(s),Sn.userData.spec=s),Sn.position.set(ze.x,.04,ze.z),Sn.rotation.y=Math.PI/2-n.aim,Sn.visible=!0,vd.color.setHex(n.aimKind==="sup"?16765498:16777215)}else Sn.visible=!1;(nn==="play"||nn==="result")&&Mi.update(qe,ze,Wc,s=>xi(qe,t,s)),Vc||mb?cn.render(xn,an):gb.render()}const Ta=[];function Td(i){Ta.push(i-nl),Ta.length>600&&Ta.shift();const e=Math.min(.05,(i-nl)/1e3);if(nl=i,!Ad){for(tl+=e;tl>=Oi;)bd(Oi),tl-=Oi,Ba+=Oi;Ed(e,i/1e3)}requestAnimationFrame(Td)}let Ad=!1,Zu=0;window.__brawl={ready:!1,moments:[],shots:[],world:()=>gi,project:(i,e,t)=>Wc(i,e,t),actors:()=>An,fxLog:()=>Hi?.log??[],setT(i){for(Ad=!0;Ba<i;)bd(Oi),Ba+=Oi;Ed(Math.max(Oi,i-Zu),i),Zu=i},state:()=>qe,perf(){const i=Ta.slice(30).sort((e,t)=>e-t);return{n:i.length,avg:i.reduce((e,t)=>e+t,0)/i.length,p95:i[Math.floor(i.length*.95)],calls:cn.info.render.calls,tris:cn.info.render.triangles}}};Vc?await rS():await wS(["dealer","tank","sniper"]);await TM();await kM();await DM();document.querySelector(".loading")?.remove();Is?qc():(wt.get("screen"),Sd());window.__brawl.ready=!0;requestAnimationFrame(Td);
