(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="169",Ld=0,nh=1,Dd=2,Qu=1,ef=2,Hn=3,Yn=0,Gt=1,sn=2,di=0,gs=1,il=2,ih=3,sh=4,Nd=5,Li=100,Ud=101,Od=102,Fd=103,Bd=104,zd=200,kd=201,Hd=202,Vd=203,sl=204,rl=205,Gd=206,Wd=207,Xd=208,qd=209,Yd=210,Kd=211,jd=212,$d=213,Zd=214,al=0,ol=1,ll=2,ys=3,cl=4,hl=5,ul=6,fl=7,dc=0,Jd=1,Qd=2,qn=0,ep=1,tp=2,np=3,ip=4,sp=5,rp=6,ap=7,rh="attached",op="detached",tf=300,Ms=301,Ss=302,dl=303,pl=304,za=306,bs=1e3,ui=1001,wa=1002,Lt=1003,nf=1004,Js=1005,Ht=1006,ha=1007,Wn=1008,Kn=1009,sf=1010,rf=1011,cr=1012,pc=1013,Bi=1014,xn=1015,Mr=1016,mc=1017,gc=1018,Es=1020,af=35902,of=1021,lf=1022,on=1023,cf=1024,hf=1025,_s=1026,Ts=1027,_c=1028,xc=1029,uf=1030,vc=1031,yc=1033,ua=33776,fa=33777,da=33778,pa=33779,ml=35840,gl=35841,_l=35842,xl=35843,vl=36196,yl=37492,Ml=37496,Sl=37808,bl=37809,El=37810,Tl=37811,wl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Nl=37820,Ul=37821,ma=36492,Ol=36494,Fl=36495,ff=36283,Bl=36284,zl=36285,kl=36286,df=2200,lp=2201,cp=2202,hr=2300,ur=2301,io=2302,us=2400,fs=2401,Aa=2402,Mc=2500,hp=2501,up=0,pf=1,Hl=2,fp=3200,dp=3201,ka=0,pp=1,ci="",dt="srgb",Ct="srgb-linear",Sc="display-p3",Ha="display-p3-linear",Ra="linear",ct="srgb",Ca="rec709",Pa="p3",Xi=7680,ah=519,mp=512,gp=513,_p=514,mf=515,xp=516,vp=517,yp=518,Mp=519,Vl=35044,oh="300 es",Xn=2e3,Ia=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const er=Math.PI/180,ws=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function bc(s,e){return(s%e+e)%e}function Sp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bp(s,e,t){return s!==e?(t-s)/(e-s):0}function tr(s,e,t){return(1-t)*s+t*e}function Ep(s,e,t,n){return tr(s,e,1-Math.exp(-t*n))}function Tp(s,e=1){return e-Math.abs(bc(s,e*2)-e)}function wp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cp(s,e){return s+Math.random()*(e-s)}function Pp(s){return s*(.5-Math.random())}function Ip(s){s!==void 0&&(lh=s);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(s){return s*er}function Dp(s){return s*ws}function Np(s){return(s&s-1)===0&&s!==0}function Up(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Op(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wn={DEG2RAD:er,RAD2DEG:ws,generateUUID:ln,clamp:wt,euclideanModulo:bc,mapLinear:Sp,inverseLerp:bp,lerp:tr,damp:Ep,pingpong:Tp,smoothstep:wp,smootherstep:Ap,randInt:Rp,randFloat:Cp,randFloatSpread:Pp,seededRandom:Ip,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Np,ceilPowerOfTwo:Up,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Fp,normalize:at,denormalize:gn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],x=i[4],M=i[7],C=i[2],S=i[5],T=i[8];return r[0]=a*_+o*y+l*C,r[3]=a*g+o*x+l*S,r[6]=a*m+o*M+l*T,r[1]=c*_+h*y+u*C,r[4]=c*g+h*x+u*S,r[7]=c*m+h*M+u*T,r[2]=d*_+f*y+p*C,r[5]=d*g+f*x+p*S,r[8]=d*m+f*M+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Xe;function gf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bp(){const s=fr("canvas");return s.style.display="block",s}const ch={};function ga(s){s in ch||(ch[s]=!0,console.warn(s))}function zp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hh=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Ct]:{transfer:Ra,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[dt]:{transfer:ct,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ha]:{transfer:Ra,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(uh),fromReference:s=>s.applyMatrix3(hh)},[Sc]:{transfer:ct,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(uh),fromReference:s=>s.applyMatrix3(hh).convertLinearToSRGB()}},Vp=new Set([Ct,Ha]),Ze={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Fs[e].toReference,i=Fs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Fs[s].primaries},getTransfer:function(s){return s===ci?Ra:Fs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Fs[e].luminanceCoefficients)}};function xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qi;class Gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=fr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wp=0;class _f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ao(i[a].image)):r.push(ao(i[a]))}else r=ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xp=0;class St extends Vi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=ui,i=ui,r=Ht,a=Wn,o=on,l=Kn,c=St.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ln(),this.name="",this.source=new _f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=tf;St.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,C=(m+1)/2,S=(h+d)/4,T=(u+_)/4,P=(p+g)/4;return x>M&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=T/n):M>C?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=S/i,r=P/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xf extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-o;const m=l*d+c*f+h*p+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),S=Math.atan2(C,m*y);g=Math.sin(g*S)/C,o=Math.sin(o*S)/C}const M=o*y;if(l=l*g+d*M,c=c*g+f*M,h=h*g+p*M,u=u*g+_*M,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new I,fh=new Ft;class Cn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Rr.subVectors(this.max,Bs),Yi.subVectors(e.a,Bs),Ki.subVectors(e.b,Bs),ji.subVectors(e.c,Bs),Qn.subVectors(Ki,Yi),ei.subVectors(ji,Ki),bi.subVectors(Yi,ji);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-bi.z,bi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!lo(t,Yi,Ki,ji,Rr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Yi,Ki,ji,Rr))?!1:(Cr.crossVectors(Qn,ei),t=[Cr.x,Cr.y,Cr.z],lo(t,Yi,Ki,ji,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,Ar=new Cn,Yi=new I,Ki=new I,ji=new I,Qn=new I,ei=new I,bi=new I,Bs=new I,Rr=new I,Cr=new I,Ei=new I;function lo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ei.fromArray(s,r);const o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Kp=new Cn,zs=new I,co=new I;class Pn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(co)),this.expandByPoint(zs.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new I,ho=new I,Pr=new I,ti=new I,uo=new I,Ir=new I,fo=new I;class Va{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ho.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=ti.dot(this.direction),l=-ti.dot(Pr),c=ti.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ho).addScaledVector(Pr,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,r){uo.subVectors(t,e),Ir.subVectors(n,e),fo.crossVectors(uo,Ir);let a=this.direction.dot(fo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(Ir.crossVectors(ti,Ir));if(l<0)return null;const c=o*this.direction.dot(uo.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(fo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,$p)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ni.crossVectors(n,qt),ni.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ni.crossVectors(n,qt)),ni.normalize(),Lr.crossVectors(qt,ni),i[0]=ni.x,i[4]=Lr.x,i[8]=qt.x,i[1]=ni.y,i[5]=Lr.y,i[9]=qt.y,i[2]=ni.z,i[6]=Lr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],x=n[7],M=n[11],C=n[15],S=i[0],T=i[4],P=i[8],N=i[12],v=i[1],E=i[5],L=i[9],D=i[13],O=i[2],X=i[6],z=i[10],te=i[14],W=i[3],fe=i[7],oe=i[11],he=i[15];return r[0]=a*S+o*v+l*O+c*W,r[4]=a*T+o*E+l*X+c*fe,r[8]=a*P+o*L+l*z+c*oe,r[12]=a*N+o*D+l*te+c*he,r[1]=h*S+u*v+d*O+f*W,r[5]=h*T+u*E+d*X+f*fe,r[9]=h*P+u*L+d*z+f*oe,r[13]=h*N+u*D+d*te+f*he,r[2]=p*S+_*v+g*O+m*W,r[6]=p*T+_*E+g*X+m*fe,r[10]=p*P+_*L+g*z+m*oe,r[14]=p*N+_*D+g*te+m*he,r[3]=y*S+x*v+M*O+C*W,r[7]=y*T+x*E+M*X+C*fe,r[11]=y*P+x*L+M*z+C*oe,r[15]=y*N+x*D+M*te+C*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=u*g*c-_*d*c+_*l*f-o*g*f-u*l*m+o*d*m,x=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,M=h*_*c-p*u*c+p*o*f-a*_*f-h*o*m+a*u*m,C=p*u*l-h*_*l-p*o*d+a*_*d+h*o*g-a*u*g,S=t*y+n*x+i*M+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=y*T,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*T,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*m+n*l*m)*T,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*m+t*d*m)*T,e[6]=(p*l*r-a*g*r-p*i*c+t*g*c+a*i*m-t*l*m)*T,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=M*T,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*T,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=C*T,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*g+t*u*g)*T,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*g-t*o*g)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,y=l*c,x=l*h,M=l*u,C=n.x,S=n.y,T=n.z;return i[0]=(1-(_+m))*C,i[1]=(f+M)*C,i[2]=(p-x)*C,i[3]=0,i[4]=(f-M)*S,i[5]=(1-(d+m))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(p+x)*T,i[9]=(g-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const a=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Xn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(o===Xn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Ia)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Xn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let p,_;if(o===Xn)p=(a+r)*u,_=-2*u;else if(o===Ia)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new I,fn=new De,jp=new I(0,0,0),$p=new I(1,1,1),ni=new I,Lr=new I,qt=new I,dh=new De,ph=new Ft;class yn{constructor(e=0,t=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const mh=new I,Zi=new Ft,Fn=new De,Dr=new I,ks=new I,Jp=new I,Qp=new Ft,gh=new I(1,0,0),_h=new I(0,1,0),xh=new I(0,0,1),vh={type:"added"},em={type:"removed"},Ji={type:"childadded",child:null},po={type:"childremoved",child:null};class ft extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new yn,n=new Ft,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Xe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ks,Dr,this.up):Fn.lookAt(Dr,ks,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,Bn=new I,mo=new I,zn=new I,Qi=new I,es=new I,yh=new I,go=new I,_o=new I,xo=new I,vo=new tt,yo=new tt,Mo=new tt;class rn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){dn.subVectors(i,t),Bn.subVectors(n,t),mo.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Bn),l=dn.dot(mo),c=Bn.dot(Bn),h=Bn.dot(mo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vo.setScalar(0),yo.setScalar(0),Mo.setScalar(0),vo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(yo,r.y),a.addScaledVector(Mo,r.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Bn.subVectors(e,t),dn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Qi.subVectors(i,n),es.subVectors(r,n),go.subVectors(e,n);const l=Qi.dot(go),c=es.dot(go);if(l<=0&&c<=0)return t.copy(n);_o.subVectors(e,i);const h=Qi.dot(_o),u=es.dot(_o);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qi,a);xo.subVectors(e,r);const f=Qi.dot(xo),p=es.dot(xo);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(es,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return yh.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(yh,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Qi,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function So(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=bc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=So(a,r,e+1/3),this.g=So(a,r,e),this.b=So(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ze.fromWorkingColorSpace(It.copy(this),e),Math.round(wt(It.r*255,0,255))*65536+Math.round(wt(It.g*255,0,255))*256+Math.round(wt(It.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=dt){Ze.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Nr);const n=tr(ii.h,Nr.h,t),i=tr(ii.s,Nr.s,t),r=tr(ii.l,Nr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Se;Se.NAMES=yf;let tm=0;class jt extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=gs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ut extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Ur=new se;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class Mf extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sf extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nm=0;const Jt=new De,bo=new ft,ts=new I,Yt=new Cn,Hs=new Cn,Tt=new I;class Mt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?Sf:Mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,Hs.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,Hs.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(Hs.min),Yt.expandByPoint(Hs.max))}Yt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Tt.add(ts)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,d=new se,f=new se,p=new se,_=new I,g=new I;function m(P,N,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(E),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(E),o[P].add(_),o[N].add(_),o[v].add(_),l[P].add(g),l[N].add(g),l[v].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,N=y.length;P<N;++P){const v=y[P],E=v.start,L=v.count;for(let D=E,O=E+L;D<O;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new I,M=new I,C=new I,S=new I;function T(P){C.fromBufferAttribute(i,P),S.copy(C);const N=o[P];x.copy(N),x.sub(C.multiplyScalar(C.dot(N))).normalize(),M.crossVectors(S,N);const E=M.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,N=y.length;P<N;++P){const v=y[P],E=v.start,L=v.count;for(let D=E,O=E+L;D<O;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new De,Ti=new Va,Or=new Pn,Sh=new I,Fr=new I,Br=new I,zr=new I,Eo=new I,kr=new I,bh=new I,Hr=new I;class je extends ft{constructor(e=new Mt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Eo.fromBufferAttribute(u,e),a?kr.addScaledVector(Eo,h):kr.addScaledVector(Eo.sub(t),h))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Or.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Or,Sh)===null||Ti.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(Mh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,C=x;M<C;M+=3){const S=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);i=Vr(this,m,e,n,c,h,u,S,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);i=Vr(this,a,e,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,C=x;M<C;M+=3){const S=M,T=M+1,P=M+2;i=Vr(this,m,e,n,c,h,u,S,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,M=g+2;i=Vr(this,a,e,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function im(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Yn,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:s}}function Vr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Fr),s.getVertexPosition(l,Br),s.getVertexPosition(c,zr);const h=im(s,e,t,n,Fr,Br,zr,bh);if(h){const u=new I;rn.getBarycoord(bh,Fr,Br,zr,u),i&&(h.uv=rn.getInterpolatedAttribute(i,o,l,c,u,new se)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};rn.getNormal(Fr,Br,zr,d.normal),h.face=d,h.barycoord=u}return h}class Zn extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function p(_,g,m,y,x,M,C,S,T,P,N){const v=M/T,E=C/P,L=M/2,D=C/2,O=S/2,X=T+1,z=P+1;let te=0,W=0;const fe=new I;for(let oe=0;oe<z;oe++){const he=oe*E-D;for(let Ve=0;Ve<X;Ve++){const Ge=Ve*v-L;fe[_]=Ge*y,fe[g]=he*x,fe[m]=O,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[g]=0,fe[m]=S>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ve/T),u.push(1-oe/P),te+=1}}for(let oe=0;oe<P;oe++)for(let he=0;he<T;he++){const Ve=d+he+X*oe,Ge=d+he+X*(oe+1),q=d+(he+1)+X*(oe+1),ne=d+(he+1)+X*oe;l.push(Ve,Ge,ne),l.push(Ge,q,ne),W+=6}o.addGroup(f,W,N),f+=W,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=As(s[t]);for(const i in n)e[i]=n[i]}return e}function sm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const rm={clone:As,merge:Nt};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ef extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Eh=new se,Th=new se;class kt extends Ef{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class lm extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(ns,is,e,t);i.layers=this.layers,this.add(i);const r=new kt(ns,is,e,t);r.layers=this.layers,this.add(r);const a=new kt(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new kt(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new kt(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new kt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Tf extends St{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cm extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:di});r.uniforms.tEquirect.value=t;const a=new je(i,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Ht),new lm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const To=new I,hm=new I,um=new Xe;class Pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=To.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||um.getNormalMatrix(e),i=this.coplanarPoint(To).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Pn,Gr=new I;class Ec{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,g-f,M-m).normalize(),n[1].setComponents(l+r,d+c,g+f,M+m).normalize(),n[2].setComponents(l+a,d+h,g+p,M+y).normalize(),n[3].setComponents(l-a,d-h,g-p,M-y).normalize(),n[4].setComponents(l-o,d-u,g-_,M-x).normalize(),t===Xn)n[5].setComponents(l+o,d+u,g+_,M+x).normalize();else if(t===Ia)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gr.x=i.normal.x>0?e.max.x:e.min.x,Gr.y=i.normal.y>0?e.max.y:e.min.y,Gr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fm(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Vt extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-a;for(let x=0;x<c;x++){const M=x*u-r;p.push(M,-y,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),S=y+1+c*m;f.push(x,M,S),f.push(M,C,S)}this.setIndex(f),this.setAttribute("position",new ot(p,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
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
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`
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
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,ug=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,y0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,I0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,U0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,k0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 color;
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
}`,W0=`uniform float rotation;
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
}`,X0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:dm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:ym,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:bm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:wm,bumpmap_pars_fragment:Am,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Im,color_fragment:Lm,color_pars_fragment:Dm,color_pars_vertex:Nm,color_vertex:Um,common:Om,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:km,emissivemap_fragment:Hm,emissivemap_pars_fragment:Vm,colorspace_fragment:Gm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:rg,envmap_vertex:jm,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:fg,lights_fragment_maps:dg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:yg,map_particle_fragment:Mg,map_particle_pars_fragment:Sg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:wg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Pg,normal_fragment_maps:Ig,normal_pars_fragment:Lg,normal_pars_vertex:Dg,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:kg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:jg,shadowmap_vertex:$g,shadowmask_pars_fragment:Zg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:a0,transmission_pars_fragment:o0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:u0,background_vert:f0,background_frag:d0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:_0,depth_vert:x0,depth_frag:v0,distanceRGBA_vert:y0,distanceRGBA_frag:M0,equirect_vert:S0,equirect_frag:b0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:w0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:I0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:N0,meshphong_frag:U0,meshphysical_vert:O0,meshphysical_frag:F0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:k0,points_frag:H0,shadow_vert:V0,shadow_frag:G0,sprite_vert:W0,sprite_frag:X0},ue={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},bn={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Nt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0},Ai=new yn,q0=new De;function Y0(s,e,t,n,i,r,a){const o=new Se(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const M=p(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===za)?(h===void 0&&(h=new je(new Zn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:As(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(Ai)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new je(new Vt(2,2),new jn({name:"BackgroundMaterial",uniforms:As(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Wr,bf(s)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:g}}function K0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,E,L,D,O){let X=!1;const z=u(D,L,E);r!==z&&(r=z,c(r.object)),X=f(v,D,L,O),X&&p(v,D,L,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(v,E,L,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,E,L){const D=L.wireframe===!0;let O=n[v.id];O===void 0&&(O={},n[v.id]=O);let X=O[E.id];X===void 0&&(X={},O[E.id]=X);let z=X[D];return z===void 0&&(z=d(l()),X[D]=z),z}function d(v){const E=[],L=[],D=[];for(let O=0;O<t;O++)E[O]=0,L[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,E,L,D){const O=r.attributes,X=E.attributes;let z=0;const te=L.getAttributes();for(const W in te)if(te[W].location>=0){const oe=O[W];let he=X[W];if(he===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function p(v,E,L,D){const O={},X=E.attributes;let z=0;const te=L.getAttributes();for(const W in te)if(te[W].location>=0){let oe=X[W];oe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),O[W]=he,z++}r.attributes=O,r.attributesNum=z,r.index=D}function _(){const v=r.newAttributes;for(let E=0,L=v.length;E<L;E++)v[E]=0}function g(v){m(v,0)}function m(v,E){const L=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;L[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),O[v]!==E&&(s.vertexAttribDivisor(v,E),O[v]=E)}function y(){const v=r.newAttributes,E=r.enabledAttributes;for(let L=0,D=E.length;L<D;L++)E[L]!==v[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function x(v,E,L,D,O,X,z){z===!0?s.vertexAttribIPointer(v,E,L,O,X):s.vertexAttribPointer(v,E,L,D,O,X)}function M(v,E,L,D){_();const O=D.attributes,X=L.getAttributes(),z=E.defaultAttributeValues;for(const te in X){const W=X[te];if(W.location>=0){let fe=O[te];if(fe===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const oe=fe.normalized,he=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;const Ge=Ve.buffer,q=Ve.type,ne=Ve.bytesPerElement,de=q===s.INT||q===s.UNSIGNED_INT||fe.gpuType===pc;if(fe.isInterleavedBufferAttribute){const ae=fe.data,be=ae.stride,Ne=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)m(W.location+He,ae.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<W.locationSize;He++)g(W.location+He);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let He=0;He<W.locationSize;He++)x(W.location+He,he/W.locationSize,q,oe,be*ne,(Ne+he/W.locationSize*He)*ne,de)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae,fe.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<W.locationSize;ae++)g(W.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let ae=0;ae<W.locationSize;ae++)x(W.location+ae,he/W.locationSize,q,oe,he*ne,he/W.locationSize*ae*ne,de)}}else if(z!==void 0){const oe=z[te];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(W.location,oe);break;case 3:s.vertexAttrib3fv(W.location,oe);break;case 4:s.vertexAttrib4fv(W.location,oe);break;default:s.vertexAttrib1fv(W.location,oe)}}}}y()}function C(){P();for(const v in n){const E=n[v];for(const L in E){const D=E[L];for(const O in D)h(D[O].object),delete D[O];delete E[L]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const L in E){const D=E[L];for(const O in D)h(D[O].object),delete D[O];delete E[L]}delete n[v.id]}function T(v){for(const E in n){const L=n[E];if(L[v.id]===void 0)continue;const D=L[v.id];for(const O in D)h(D[O].object),delete D[O];delete L[v.id]}}function P(){N(),a=!0,r!==i&&(r=i,c(r.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function j0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)t.update(p,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==on&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xn&&!P)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:C,maxSamples:S}}function Z0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Pi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=h(p,d,x,f);for(let C=0;C!==x;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function J0(s){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=Ms:o===pl&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dl||o===pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cm(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sr extends Ef{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,wh=[.125,.215,.35,.446,.526,.582],Di=20,wo=new Sr,Ah=new Se;let Ao=null,Ro=0,Co=0,Po=!1;const Ii=(1+Math.sqrt(5))/2,ss=1/Ii,Rh=[new I(-Ii,ss,0),new I(Ii,ss,0),new I(-ss,0,Ii),new I(ss,0,Ii),new I(0,Ii,-ss),new I(0,Ii,ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Mr,format:on,colorSpace:Ct,depthBuffer:!1},i=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(r)),this._blurMaterial=e_(r,e,t)}return i}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ah),h.toneMapping=qn,h.autoClear=!1;const f=new ut({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),p=new je(new Zn,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Ah),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Xr(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rh[(i-r-1)%Rh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new je(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);const m=[];let y=0;for(let T=0;T<Di;++T){const P=T/_,N=Math.exp(-P*P/2);m.push(N),T===0?y+=N:T<g&&(y+=2*N)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const M=this._sizeLods[i],C=3*M*(i>x-ds?i-x+ds:0),S=4*(this._cubeSize-M);Xr(t,C,S,3*M,2*M),l.setRenderTarget(t),l.render(u,wo)}}function Q0(s){const e=[],t=[],n=[];let i=s;const r=s-ds+1+wh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ds?l=wh[a-s+ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),x=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,P=S>2?0:-1,N=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(N,_*p*S),x.set(d,g*p*S);const v=[S,S,S,S,S,S];M.set(v,m*p*S)}const C=new Mt;C.setAttribute("position",new yt(y,_)),C.setAttribute("uv",new yt(x,g)),C.setAttribute("faceIndex",new yt(M,m)),e.push(C),i>ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function e_(s,e,t){const n=new Float32Array(Di),i=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ih(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Lh(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function t_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dl||l===pl,h=l===Ms||l===Ss;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ch(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ch(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function n_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ga("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i_(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const C=y[x+0],S=y[x+1],T=y[x+2];d.push(C,S,S,T,T,C)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const C=x+0,S=x+1,T=x+2;d.push(C,S,S,T,T,C)}}else return;const g=new(gf(d)?Sf:Mf)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function s_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<_.length;y++)t.update(m,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function a_(s,e,t){const n=new WeakMap,i=new tt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let N=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let M=o.attributes.position.count*x,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const S=new Float32Array(M*C*4*u),T=new xf(S,M,C,u);T.type=xn,T.needsUpdate=!0;const P=x*4;for(let v=0;v<u;v++){const E=g[v],L=m[v],D=y[v],O=M*C*4*v;for(let X=0;X<E.count;X++){const z=X*P;f===!0&&(i.fromBufferAttribute(E,X),S[O+z+0]=i.x,S[O+z+1]=i.y,S[O+z+2]=i.z,S[O+z+3]=0),p===!0&&(i.fromBufferAttribute(L,X),S[O+z+4]=i.x,S[O+z+5]=i.y,S[O+z+6]=i.z,S[O+z+7]=0),_===!0&&(i.fromBufferAttribute(D,X),S[O+z+8]=i.x,S[O+z+9]=i.y,S[O+z+10]=i.z,S[O+z+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new se(M,C)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function o_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Af extends St{constructor(e,t,n,i,r,a,o,l,c,h=_s){if(h!==_s&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Bi),n===void 0&&h===Ts&&(n=Es),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rf=new St,Dh=new Af(1,1),Cf=new xf,Pf=new Yp,If=new Tf,Nh=[],Uh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Ls(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Nh[i];if(r===void 0&&(r=new Float32Array(i),Nh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ga(s,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function l_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function c_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function h_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function u_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function f_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Bh.set(n),s.uniformMatrix2fv(this.addr,!1,Bh),Et(t,n)}}function d_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Fh.set(n),s.uniformMatrix3fv(this.addr,!1,Fh),Et(t,n)}}function p_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Oh.set(n),s.uniformMatrix4fv(this.addr,!1,Oh),Et(t,n)}}function m_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function __(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function x_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function v_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function M_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function b_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dh.compareFunction=mf,r=Dh):r=Rf,t.setTexture2D(e||r,i)}function E_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pf,i)}function T_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function w_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function A_(s){switch(s){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(s,e){s.uniform1fv(this.addr,e)}function C_(s,e){const t=Ls(e,this.size,2);s.uniform2fv(this.addr,t)}function P_(s,e){const t=Ls(e,this.size,3);s.uniform3fv(this.addr,t)}function I_(s,e){const t=Ls(e,this.size,4);s.uniform4fv(this.addr,t)}function L_(s,e){const t=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function D_(s,e){const t=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function N_(s,e){const t=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U_(s,e){s.uniform1iv(this.addr,e)}function O_(s,e){s.uniform2iv(this.addr,e)}function F_(s,e){s.uniform3iv(this.addr,e)}function B_(s,e){s.uniform4iv(this.addr,e)}function z_(s,e){s.uniform1uiv(this.addr,e)}function k_(s,e){s.uniform2uiv(this.addr,e)}function H_(s,e){s.uniform3uiv(this.addr,e)}function V_(s,e){s.uniform4uiv(this.addr,e)}function G_(s,e,t){const n=this.cache,i=e.length,r=Ga(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rf,r[a])}function W_(s,e,t){const n=this.cache,i=e.length,r=Ga(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pf,r[a])}function X_(s,e,t){const n=this.cache,i=e.length,r=Ga(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||If,r[a])}function q_(s,e,t){const n=this.cache,i=e.length,r=Ga(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function Y_(s){switch(s){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}}class j_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function zh(s,e){s.seq.push(e),s.map[e.id]=e}function Z_(s,e,t){const n=s.name,i=n.length;for(Io.lastIndex=0;;){const r=Io.exec(n),a=Io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zh(t,c===void 0?new K_(o,s,e):new j_(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new $_(o),zh(t,u)),t=u}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Z_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const J_=37297;let Q_=0;function ex(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function tx(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===Pa&&t===Ca?n="LinearDisplayP3ToLinearSRGB":e===Ca&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),s){case Ct:case Ha:return[n,"LinearTransferOETF"];case dt:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ex(s.getShaderSource(e),a)}else return i}function nx(s,e){const t=tx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ix(s,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="Cineon";break;case ip:t="ACESFilmic";break;case rp:t="AgX";break;case ap:t="Neutral";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new I;function sx(){Ze.getLuminanceCoefficients(qr);const s=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function ax(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ox(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Qs(s){return s!==""}function Vh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(s){return s.replace(lx,hx)}const cx=new Map;function hx(s,e){let t=We[e];if(t===void 0){const n=cx.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(s){return s.replace(ux,fx)}function fx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function dx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function px(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dc:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function _x(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dx(t),c=px(t),h=mx(t),u=gx(t),d=_x(t),f=rx(t),p=ax(r),_=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(g=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?We.tonemapping_pars_fragment:"",t.toneMapping!==qn?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Gl(a),a=Vh(a,t),a=Gh(a,t),o=Gl(o),o=Vh(o,t),o=Gh(o,t),a=Wh(a),o=Wh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+a,M=y+m+o,C=kh(i,i.VERTEX_SHADER,x),S=kh(i,i.FRAGMENT_SHADER,M);i.attachShader(_,C),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(E){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(S).trim();let X=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,S);else{const te=Hh(i,C,"vertex"),W=Hh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+te+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(z=!1);z&&(E.diagnostics={runnable:X,programLog:L,vertexShader:{log:D,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(C),i.deleteShader(S),P=new _a(i,_),N=ox(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let N;this.getAttributes=function(){return N===void 0&&T(this),N};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,J_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mx(e),t.set(e,n)),n}}class Mx{constructor(e){this.id=vx++,this.code=e,this.usedTimes=0}}function Sx(s,e,t,n,i,r,a){const o=new vf,l=new yx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,L,D,O){const X=D.fog,z=O.geometry,te=v.isMeshStandardMaterial?D.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),fe=W&&W.mapping===za?W.image.height:null,oe=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ve=he!==void 0?he.length:0;let Ge=0;z.morphAttributes.position!==void 0&&(Ge=1),z.morphAttributes.normal!==void 0&&(Ge=2),z.morphAttributes.color!==void 0&&(Ge=3);let q,ne,de,ae;if(oe){const zt=bn[oe];q=zt.vertexShader,ne=zt.fragmentShader}else q=v.vertexShader,ne=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const be=s.getRenderTarget(),Ne=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,Ee=!!v.map,Z=!!v.matcap,w=!!W,H=!!v.aoMap,ie=!!v.lightMap,J=!!v.bumpMap,Q=!!v.normalMap,Ce=!!v.displacementMap,pe=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,k=v.anisotropy>0,K=v.clearcoat>0,$=v.dispersion>0,j=v.iridescence>0,Te=v.sheen>0,ce=v.transmission>0,me=k&&!!v.anisotropyMap,Ye=K&&!!v.clearcoatMap,re=K&&!!v.clearcoatNormalMap,ge=K&&!!v.clearcoatRoughnessMap,Oe=j&&!!v.iridescenceMap,Fe=j&&!!v.iridescenceThicknessMap,ve=Te&&!!v.sheenColorMap,Ae=Te&&!!v.sheenRoughnessMap,Le=!!v.specularMap,Je=!!v.specularColorMap,U=!!v.specularIntensityMap,ye=ce&&!!v.transmissionMap,Y=ce&&!!v.thicknessMap,ee=!!v.gradientMap,_e=!!v.alphaMap,Me=v.alphaTest>0,$e=!!v.alphaHash,xt=!!v.extensions;let Bt=qn;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const Qe={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:ne,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ct,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Z,envMap:w,envMapMode:w&&W.mapping,envMapCubeUVHeight:fe,aoMap:H,lightMap:ie,bumpMap:J,normalMap:Q,displacementMap:f&&Ce,emissiveMap:pe,normalMapObjectSpace:Q&&v.normalMapType===pp,normalMapTangentSpace:Q&&v.normalMapType===ka,metalnessMap:R,roughnessMap:b,anisotropy:k,anisotropyMap:me,clearcoat:K,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:$,iridescence:j,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:Te,sheenColorMap:ve,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:Je,specularIntensityMap:U,transmission:ce,transmissionMap:ye,thicknessMap:Y,gradientMap:ee,opaque:v.transparent===!1&&v.blending===gs&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:$e,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:H&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:J&&g(v.bumpMap.channel),normalMapUv:Q&&g(v.normalMap.channel),displacementMapUv:Ce&&g(v.displacementMap.channel),emissiveMapUv:pe&&g(v.emissiveMap.channel),metalnessMapUv:R&&g(v.metalnessMap.channel),roughnessMapUv:b&&g(v.roughnessMap.channel),anisotropyMapUv:me&&g(v.anisotropyMap.channel),clearcoatMapUv:Ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(v.sheenRoughnessMap.channel),specularMapUv:Le&&g(v.specularMap.channel),specularColorMapUv:Je&&g(v.specularColorMap.channel),specularIntensityMapUv:U&&g(v.specularIntensityMap.channel),transmissionMapUv:ye&&g(v.transmissionMap.channel),thicknessMapUv:Y&&g(v.thicknessMap.channel),alphaMapUv:_e&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ee||_e),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(E,v),M(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const E=_[v.type];let L;if(E){const D=bn[E];L=rm.clone(D.uniforms)}else L=v.uniforms;return L}function S(v,E){let L;for(let D=0,O=h.length;D<O;D++){const X=h[D];if(X.cacheKey===E){L=X,++L.usedTimes;break}}return L===void 0&&(L=new xx(s,E,v,r),h.push(L)),L}function T(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:S,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:N}}function bx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ex(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,p,_,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Ex),n.length>1&&n.sort(d||qh),i.length>1&&i.sort(d||qh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Tx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yh,s.set(n,[a])):i>=r.length?(a=new Yh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Ax(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Rx=0;function Cx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Px(s){const e=new wx,t=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new De,a=new De;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,x=0,M=0,C=0,S=0,T=0;c.sort(Cx);for(let N=0,v=c.length;N<v;N++){const E=c[N],L=E.color,D=E.intensity,O=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*D,u+=L.g*D,d+=L.b*D;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],D);T++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,W=t.get(E);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=E.shadow.matrix,y++}n.directional[f]=z,f++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=O,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;const te=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,te.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[_]=te.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=X,M++}_++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const te=E.shadow,W=t.get(E);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=E.shadow.matrix,x++}n.point[p]=z,p++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(D),z.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[m]=z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=T,n.version=Rx++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Kh(s){const e=new Px(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ix(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Kh(s),e.set(i,[o])):r>=a.length?(o=new Kh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Lx extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dx extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Ox(s,e,t){let n=new Ec;const i=new se,r=new se,a=new tt,o=new Lx({depthPacking:dp}),l=new Dx,c={},h=t.maxTextureSize,u={[Yn]:Gt,[Gt]:Yn,[sn]:sn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Mt;p.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new je(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let m=this.type;this.render=function(S,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const N=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(di),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=m!==Hn&&this.type===Hn,O=m===Hn&&this.type!==Hn;for(let X=0,z=S.length;X<z;X++){const te=S[X],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const fe=W.getFrameExtents();if(i.multiply(fe),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,W.mapSize.y=r.y)),W.map===null||D===!0||O===!0){const he=this.type!==Hn?{minFilter:Lt,magFilter:Lt}:{};W.map!==null&&W.map.dispose(),W.map=new xi(i.x,i.y,he),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const oe=W.getViewportCount();for(let he=0;he<oe;he++){const Ve=W.getViewport(he);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),L.viewport(a),W.updateMatrices(te,he),n=W.getFrustum(),M(T,P,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&y(W,P),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(N,v,E)};function y(S,T){const P=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,P,f,_,null)}function x(S,T,P,N){let v=null;const E=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)v=E;else if(v=P.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=v.uuid,D=T.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let X=O[D];X===void 0&&(X=v.clone(),O[D]=X,T.addEventListener("dispose",C)),v=X}if(v.visible=T.visible,v.wireframe=T.wireframe,N===Hn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=s.properties.get(v);L.light=P}return v}function M(S,T,P,N,v){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Hn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const D=e.update(S),O=S.material;if(Array.isArray(O)){const X=D.groups;for(let z=0,te=X.length;z<te;z++){const W=X[z],fe=O[W.materialIndex];if(fe&&fe.visible){const oe=x(S,fe,N,v);S.onBeforeShadow(s,S,T,P,D,oe,W),s.renderBufferDirect(P,null,D,oe,S,W),S.onAfterShadow(s,S,T,P,D,oe,W)}}}else if(O.visible){const X=x(S,O,N,v);S.onBeforeShadow(s,S,T,P,D,X,null),s.renderBufferDirect(P,null,D,X,S,null),S.onAfterShadow(s,S,T,P,D,X,null)}}const L=S.children;for(let D=0,O=L.length;D<O;D++)M(L[D],T,P,N,v)}function C(S){S.target.removeEventListener("dispose",C);for(const P in c){const N=c[P],v=S.target.uuid;v in N&&(N[v].dispose(),delete N[v])}}}const Fx={[al]:ol,[ll]:ul,[cl]:fl,[ys]:hl,[ol]:al,[ul]:ll,[fl]:cl,[hl]:ys};function Bx(s){function e(){let U=!1;const ye=new tt;let Y=null;const ee=new tt(0,0,0,0);return{setMask:function(_e){Y!==_e&&!U&&(s.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){U=_e},setClear:function(_e,Me,$e,xt,Bt){Bt===!0&&(_e*=xt,Me*=xt,$e*=xt),ye.set(_e,Me,$e,xt),ee.equals(ye)===!1&&(s.clearColor(_e,Me,$e,xt),ee.copy(ye))},reset:function(){U=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let U=!1,ye=!1,Y=null,ee=null,_e=null;return{setReversed:function(Me){ye=Me},setTest:function(Me){Me?de(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(Me){Y!==Me&&!U&&(s.depthMask(Me),Y=Me)},setFunc:function(Me){if(ye&&(Me=Fx[Me]),ee!==Me){switch(Me){case al:s.depthFunc(s.NEVER);break;case ol:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case cl:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case ul:s.depthFunc(s.GREATER);break;case fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Me}},setLocked:function(Me){U=Me},setClear:function(Me){_e!==Me&&(s.clearDepth(Me),_e=Me)},reset:function(){U=!1,Y=null,ee=null,_e=null}}}function n(){let U=!1,ye=null,Y=null,ee=null,_e=null,Me=null,$e=null,xt=null,Bt=null;return{setTest:function(Qe){U||(Qe?de(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Qe){ye!==Qe&&!U&&(s.stencilMask(Qe),ye=Qe)},setFunc:function(Qe,zt,Nn){(Y!==Qe||ee!==zt||_e!==Nn)&&(s.stencilFunc(Qe,zt,Nn),Y=Qe,ee=zt,_e=Nn)},setOp:function(Qe,zt,Nn){(Me!==Qe||$e!==zt||xt!==Nn)&&(s.stencilOp(Qe,zt,Nn),Me=Qe,$e=zt,xt=Nn)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Bt!==Qe&&(s.clearStencil(Qe),Bt=Qe)},reset:function(){U=!1,ye=null,Y=null,ee=null,_e=null,Me=null,$e=null,xt=null,Bt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,C=null,S=new Se(0,0,0),T=0,P=!1,N=null,v=null,E=null,L=null,D=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=z>=2);let W=null,fe={};const oe=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),Ve=new tt().fromArray(oe),Ge=new tt().fromArray(he);function q(U,ye,Y,ee){const _e=new Uint8Array(4),Me=s.createTexture();s.bindTexture(U,Me),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<Y;$e++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ye+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Me}const ne={};ne[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(s.DEPTH_TEST),r.setFunc(ys),ie(!1),J(nh),de(s.CULL_FACE),w(di);function de(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function ae(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function be(U,ye){return h[U]!==ye?(s.bindFramebuffer(U,ye),h[U]=ye,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ye),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ne(U,ye){let Y=d,ee=!1;if(U){Y=u.get(ye),Y===void 0&&(Y=[],u.set(ye,Y));const _e=U.textures;if(Y.length!==_e.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,$e=_e.length;Me<$e;Me++)Y[Me]=s.COLOR_ATTACHMENT0+Me;Y.length=_e.length,ee=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ee=!0);ee&&s.drawBuffers(Y)}function He(U){return f!==U?(s.useProgram(U),f=U,!0):!1}const Ee={[Li]:s.FUNC_ADD,[Ud]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};Ee[Fd]=s.MIN,Ee[Bd]=s.MAX;const Z={[zd]:s.ZERO,[kd]:s.ONE,[Hd]:s.SRC_COLOR,[sl]:s.SRC_ALPHA,[Yd]:s.SRC_ALPHA_SATURATE,[Xd]:s.DST_COLOR,[Gd]:s.DST_ALPHA,[Vd]:s.ONE_MINUS_SRC_COLOR,[rl]:s.ONE_MINUS_SRC_ALPHA,[qd]:s.ONE_MINUS_DST_COLOR,[Wd]:s.ONE_MINUS_DST_ALPHA,[Kd]:s.CONSTANT_COLOR,[jd]:s.ONE_MINUS_CONSTANT_COLOR,[$d]:s.CONSTANT_ALPHA,[Zd]:s.ONE_MINUS_CONSTANT_ALPHA};function w(U,ye,Y,ee,_e,Me,$e,xt,Bt,Qe){if(U===di){p===!0&&(ae(s.BLEND),p=!1);return}if(p===!1&&(de(s.BLEND),p=!0),U!==Nd){if(U!==_||Qe!==P){if((g!==Li||x!==Li)&&(s.blendEquation(s.FUNC_ADD),g=Li,x=Li),Qe)switch(U){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.ONE,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,y=null,M=null,C=null,S.set(0,0,0),T=0,_=U,P=Qe}return}_e=_e||ye,Me=Me||Y,$e=$e||ee,(ye!==g||_e!==x)&&(s.blendEquationSeparate(Ee[ye],Ee[_e]),g=ye,x=_e),(Y!==m||ee!==y||Me!==M||$e!==C)&&(s.blendFuncSeparate(Z[Y],Z[ee],Z[Me],Z[$e]),m=Y,y=ee,M=Me,C=$e),(xt.equals(S)===!1||Bt!==T)&&(s.blendColor(xt.r,xt.g,xt.b,Bt),S.copy(xt),T=Bt),_=U,P=!1}function H(U,ye){U.side===sn?ae(s.CULL_FACE):de(s.CULL_FACE);let Y=U.side===Gt;ye&&(Y=!Y),ie(Y),U.blending===gs&&U.transparent===!1?w(di):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const ee=U.stencilWrite;a.setTest(ee),ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){N!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),N=U)}function J(U){U!==Ld?(de(s.CULL_FACE),U!==v&&(U===nh?s.cullFace(s.BACK):U===Dd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),v=U}function Q(U){U!==E&&(X&&s.lineWidth(U),E=U)}function Ce(U,ye,Y){U?(de(s.POLYGON_OFFSET_FILL),(L!==ye||D!==Y)&&(s.polygonOffset(ye,Y),L=ye,D=Y)):ae(s.POLYGON_OFFSET_FILL)}function pe(U){U?de(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+O-1),W!==U&&(s.activeTexture(U),W=U)}function b(U,ye,Y){Y===void 0&&(W===null?Y=s.TEXTURE0+O-1:Y=W);let ee=fe[Y];ee===void 0&&(ee={type:void 0,texture:void 0},fe[Y]=ee),(ee.type!==U||ee.texture!==ye)&&(W!==Y&&(s.activeTexture(Y),W=Y),s.bindTexture(U,ye||ne[U]),ee.type=U,ee.texture=ye)}function k(){const U=fe[W];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){Ve.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function ve(U){Ge.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function Ae(U,ye){let Y=l.get(ye);Y===void 0&&(Y=new WeakMap,l.set(ye,Y));let ee=Y.get(U);ee===void 0&&(ee=s.getUniformBlockIndex(ye,U.name),Y.set(U,ee))}function Le(U,ye){const ee=l.get(ye).get(U);o.get(ye)!==ee&&(s.uniformBlockBinding(ye,ee,U.__bindingPointIndex),o.set(ye,ee))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,fe={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,C=null,S=new Se(0,0,0),T=0,P=!1,N=null,v=null,E=null,L=null,D=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:de,disable:ae,bindFramebuffer:be,drawBuffers:Ne,useProgram:He,setBlending:w,setMaterial:H,setFlipSided:ie,setCullFace:J,setLineWidth:Q,setPolygonOffset:Ce,setScissorTest:pe,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:ge,texImage3D:Oe,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:Ye,texStorage3D:re,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Fe,viewport:ve,reset:Je}}function jh(s,e,t,n){const i=zx(n);switch(t){case of:return s*e;case cf:return s*e;case hf:return s*e*2;case _c:return s*e/i.components*i.byteLength;case xc:return s*e/i.components*i.byteLength;case uf:return s*e*2/i.components*i.byteLength;case vc:return s*e*2/i.components*i.byteLength;case lf:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case yc:return s*e*4/i.components*i.byteLength;case ua:case fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gl:case xl:return Math.max(s,16)*Math.max(e,8)/4;case ml:case _l:return Math.max(s,8)*Math.max(e,8)/2;case vl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ma:case Ol:case Fl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ff:case Bl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zl:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zx(s){switch(s){case Kn:case sf:return{byteLength:1,components:1};case cr:case rf:case Mr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Bi:case pc:case xn:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kx(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):fr("canvas")}function _(R,b,k){let K=1;const $=pe(R);if(($.width>k||$.height>k)&&(K=k/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*$.width),Te=Math.floor(K*$.height);u===void 0&&(u=p(j,Te));const ce=b?p(j,Te):u;return ce.width=j,ce.height=Te,ce.getContext("2d").drawImage(R,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+Te+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Lt&&R.minFilter!==Ht}function m(R){s.generateMipmap(R)}function y(R,b,k,K,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),b===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){const Te=$?Ra:Ze.getTransfer(K);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=Te===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,b){let k;return R?b===null||b===Bi||b===Es?k=s.DEPTH24_STENCIL8:b===xn?k=s.DEPTH32F_STENCIL8:b===cr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bi||b===Es?k=s.DEPTH_COMPONENT24:b===xn?k=s.DEPTH_COMPONENT32F:b===cr&&(k=s.DEPTH_COMPONENT16),k}function M(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Ht?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function S(R){const b=R.target;b.removeEventListener("dispose",S),N(b)}function T(R){const b=n.get(R);if(b.__webglInit===void 0)return;const k=R.source,K=d.get(k);if(K){const $=K[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(K).length===0&&d.delete(k)}n.remove(R)}function P(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const k=R.source,K=d.get(k);delete K[b.__cacheKey],a.memory.textures--}function N(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let $=0;$<b.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[K][$]);else s.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)s.deleteFramebuffer(b.__webglFramebuffer[K]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,$=k.length;K<$;K++){const j=n.get(k[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(R)}let v=0;function E(){v=0}function L(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function D(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const k=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(k,R,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function X(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ge(k,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function z(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ge(k,R,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function te(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const W={[bs]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},fe={[Lt]:s.NEAREST,[nf]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[ha]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},oe={[mp]:s.NEVER,[Mp]:s.ALWAYS,[gp]:s.LESS,[mf]:s.LEQUAL,[_p]:s.EQUAL,[yp]:s.GEQUAL,[xp]:s.GREATER,[vp]:s.NOTEQUAL};function he(R,b){if(b.type===xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ht||b.magFilter===ha||b.magFilter===Js||b.magFilter===Wn||b.minFilter===Ht||b.minFilter===ha||b.minFilter===Js||b.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,W[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,W[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,W[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,fe[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Lt||b.minFilter!==Js&&b.minFilter!==Wn||b.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ve(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const j=D(b);if(j!==R.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[j].usedTimes++;const Te=$[R.__cacheKey];Te!==void 0&&($[R.__cacheKey].usedTimes--,Te.usedTimes===0&&P(b)),R.__cacheKey=j,R.__webglTexture=$[j].texture}return k}function Ge(R,b,k){let K=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=s.TEXTURE_3D);const $=Ve(R,b),j=b.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+k);const Te=n.get(j);if(j.version!==Te.__version||$===!0){t.activeTexture(s.TEXTURE0+k);const ce=Ze.getPrimaries(Ze.workingColorSpace),me=b.colorSpace===ci?null:Ze.getPrimaries(b.colorSpace),Ye=b.colorSpace===ci||ce===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=_(b.image,!1,i.maxTextureSize);re=Ce(b,re);const ge=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type);let Fe=y(b.internalFormat,ge,Oe,b.colorSpace,b.isVideoTexture);he(K,b);let ve;const Ae=b.mipmaps,Le=b.isVideoTexture!==!0,Je=Te.__version===void 0||$===!0,U=j.dataReady,ye=M(b,re);if(b.isDepthTexture)Fe=x(b.format===Ts,b.type),Je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Fe,re.width,re.height,0,ge,Oe,null));else if(b.isDataTexture)if(Ae.length>0){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ye,Fe,Ae[0].width,Ae[0].height);for(let Y=0,ee=Ae.length;Y<ee;Y++)ve=Ae[Y],Le?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ge,Oe,ve.data);b.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,ye,Fe,re.width,re.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,ge,Oe,re.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,re.width,re.height,0,ge,Oe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Fe,Ae[0].width,Ae[0].height,re.depth);for(let Y=0,ee=Ae.length;Y<ee;Y++)if(ve=Ae[Y],b.format!==on)if(ge!==null)if(Le){if(U)if(b.layerUpdates.size>0){const _e=jh(ve.width,ve.height,b.format,b.type);for(const Me of b.layerUpdates){const $e=ve.data.subarray(Me*_e/ve.data.BYTES_PER_ELEMENT,(Me+1)*_e/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,Me,ve.width,ve.height,1,ge,$e,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,ge,ve.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,ge,Oe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,ge,Oe,ve.data)}else{Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ye,Fe,Ae[0].width,Ae[0].height);for(let Y=0,ee=Ae.length;Y<ee;Y++)ve=Ae[Y],b.format!==on?ge!==null?Le?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ge,Oe,ve.data)}else if(b.isDataArrayTexture)if(Le){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Fe,re.width,re.height,re.depth),U)if(b.layerUpdates.size>0){const Y=jh(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const _e=re.data.subarray(ee*Y/re.data.BYTES_PER_ELEMENT,(ee+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ge,Oe,_e)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Oe,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,ge,Oe,re.data);else if(b.isData3DTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_3D,ye,Fe,re.width,re.height,re.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Oe,re.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,ge,Oe,re.data);else if(b.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(s.TEXTURE_2D,ye,Fe,re.width,re.height);else{let Y=re.width,ee=re.height;for(let _e=0;_e<ye;_e++)t.texImage2D(s.TEXTURE_2D,_e,Fe,Y,ee,0,ge,Oe,null),Y>>=1,ee>>=1}}else if(Ae.length>0){if(Le&&Je){const Y=pe(Ae[0]);t.texStorage2D(s.TEXTURE_2D,ye,Fe,Y.width,Y.height)}for(let Y=0,ee=Ae.length;Y<ee;Y++)ve=Ae[Y],Le?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge,Oe,ve):t.texImage2D(s.TEXTURE_2D,Y,Fe,ge,Oe,ve);b.generateMipmaps=!1}else if(Le){if(Je){const Y=pe(re);t.texStorage2D(s.TEXTURE_2D,ye,Fe,Y.width,Y.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Oe,re)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ge,Oe,re);g(b)&&m(K),Te.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function q(R,b,k){if(b.image.length!==6)return;const K=Ve(R,b),$=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const j=n.get($);if($.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const Te=Ze.getPrimaries(Ze.workingColorSpace),ce=b.colorSpace===ci?null:Ze.getPrimaries(b.colorSpace),me=b.colorSpace===ci||Te===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let ee=0;ee<6;ee++)!Ye&&!re?ge[ee]=_(b.image[ee],!0,i.maxCubemapSize):ge[ee]=re?b.image[ee].image:b.image[ee],ge[ee]=Ce(b,ge[ee]);const Oe=ge[0],Fe=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Ae=y(b.internalFormat,Fe,ve,b.colorSpace),Le=b.isVideoTexture!==!0,Je=j.__version===void 0||K===!0,U=$.dataReady;let ye=M(b,Oe);he(s.TEXTURE_CUBE_MAP,b);let Y;if(Ye){Le&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ae,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){Y=ge[ee].mipmaps;for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];b.format!==on?Fe!==null?Le?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Fe,ve,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ae,Me.width,Me.height,0,Fe,ve,Me.data)}}}else{if(Y=b.mipmaps,Le&&Je){Y.length>0&&ye++;const ee=pe(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ae,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Le?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge[ee].width,ge[ee].height,Fe,ve,ge[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ae,ge[ee].width,ge[ee].height,0,Fe,ve,ge[ee].data);for(let _e=0;_e<Y.length;_e++){const $e=Y[_e].image[ee].image;Le?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,$e.width,$e.height,Fe,ve,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ae,$e.width,$e.height,0,Fe,ve,$e.data)}}else{Le?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,ve,ge[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ae,Fe,ve,ge[ee]);for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];Le?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Fe,ve,Me.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ae,Fe,ve,Me.image[ee])}}}g(b)&&m(s.TEXTURE_CUBE_MAP),j.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ne(R,b,k,K,$,j){const Te=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),me=y(k.internalFormat,Te,ce,k.colorSpace);if(!n.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>j),ge=Math.max(1,b.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,j,me,re,ge,b.depth,0,Te,ce,null):t.texImage2D($,j,me,re,ge,0,Te,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),J(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(k).__webglTexture,0,ie(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(k).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(R,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=x(b.stencilBuffer,$),Te=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=ie(b);J(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,j,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,R)}else{const K=b.textures;for(let $=0;$<K.length;$++){const j=K[$],Te=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),me=y(j.internalFormat,Te,ce,j.colorSpace),Ye=ie(b);k&&J(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,me,b.width,b.height):J(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,$=ie(b);if(b.depthTexture.format===_s)J(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(b.depthTexture.format===Ts)J(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(R){const b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ae(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=s.createRenderbuffer(),de(b.__webglDepthbuffer[K],R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),de(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(R,b,k){const K=n.get(R);b!==void 0&&ne(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&be(R)}function He(R){const b=R.texture,k=n.get(R),K=n.get(b);R.addEventListener("dispose",S);const $=R.textures,j=R.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=b.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let me=0;me<b.mipmaps.length;me++)k.__webglFramebuffer[ce][me]=s.createFramebuffer()}else k.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)k.__webglFramebuffer[ce]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ce=0,me=$.length;ce<me;ce++){const Ye=n.get($[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&J(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const me=$[ce];k.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Ye=r.convert(me.format,me.colorSpace),re=r.convert(me.type),ge=y(me.internalFormat,Ye,re,me.colorSpace,R.isXRRenderTarget===!0),Oe=ie(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,ge,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),de(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),he(s.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(k.__webglFramebuffer[ce][me],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ne(k.__webglFramebuffer[ce],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,me=$.length;ce<me;ce++){const Ye=$[ce],re=n.get(Ye);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),he(s.TEXTURE_2D,Ye),ne(k.__webglFramebuffer,R,Ye,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),g(Ye)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),he(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(k.__webglFramebuffer[me],R,b,s.COLOR_ATTACHMENT0,ce,me);else ne(k.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,ce,0);g(b)&&m(ce),t.unbindTexture()}R.depthBuffer&&be(R)}function Ee(R){const b=R.textures;for(let k=0,K=b.length;k<K;k++){const $=b[k];if(g($)){const j=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get($).__webglTexture;t.bindTexture(j,Te),m(j),t.unbindTexture()}}}const Z=[],w=[];function H(R){if(R.samples>0){if(J(R)===!1){const b=R.textures,k=R.width,K=R.height;let $=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(R),ce=b.length>1;if(ce)for(let me=0;me<b.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<b.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ye=n.get(b[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,$,s.NEAREST),l===!0&&(Z.length=0,w.length=0,Z.push(s.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(j),w.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,w)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<b.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ye=n.get(b[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(i.maxSamples,R.samples)}function J(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Q(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ce(R,b){const k=R.colorSpace,K=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ct&&k!==ci&&(Ze.getTransfer(k)===ct?(K!==on||$!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=E,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=J}function Hx(s,e){function t(n,i=ci){let r;const a=Ze.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===mc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return s.BYTE;if(n===rf)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===pc)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===Mr)return s.HALF_FLOAT;if(n===of)return s.ALPHA;if(n===lf)return s.RGB;if(n===on)return s.RGBA;if(n===cf)return s.LUMINANCE;if(n===hf)return s.LUMINANCE_ALPHA;if(n===_s)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===_c)return s.RED;if(n===xc)return s.RED_INTEGER;if(n===uf)return s.RG;if(n===vc)return s.RG_INTEGER;if(n===yc)return s.RGBA_INTEGER;if(n===ua||n===fa||n===da||n===pa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===yl||n===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===yl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===Ol||n===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===Bl||n===zl||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Vx extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ot extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new St,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new qx,g=t.getContextAttributes();let m=null,y=null;const x=[],M=[],C=new se;let S=null;const T=new kt;T.layers.enable(1),T.viewport=new tt;const P=new kt;P.layers.enable(2),P.viewport=new tt;const N=[T,P],v=new Vx;v.layers.enable(1),v.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=x[q];return ne===void 0&&(ne=new Lo,x[q]=ne),ne.getHandSpace()};function D(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const ne=M[q];ne!==null&&(M[q]=null,x[q].disconnect(ne))}E=null,L=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xi(f.framebufferWidth,f.framebufferHeight,{format:on,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,de=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ts:_s,de=g.stencil?Es:Bi);const be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:on,type:Kn,depthTexture:new Af(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let ne=0;ne<q.removed.length;ne++){const de=q.removed[ne],ae=M.indexOf(de);ae>=0&&(M[ae]=null,x[ae].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){const de=q.added[ne];let ae=M.indexOf(de);if(ae===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=M.length){M.push(de),ae=Ne;break}else if(M[Ne]===null){M[Ne]=de,ae=Ne;break}if(ae===-1)break}const be=x[ae];be&&be.connect(de)}}const z=new I,te=new I;function W(q,ne,de){z.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const ae=z.distanceTo(te),be=ne.projectionMatrix.elements,Ne=de.projectionMatrix.elements,He=be[14]/(be[10]-1),Ee=be[14]/(be[10]+1),Z=(be[9]+1)/be[5],w=(be[9]-1)/be[5],H=(be[8]-1)/be[0],ie=(Ne[8]+1)/Ne[0],J=He*H,Q=He*ie,Ce=ae/(-H+ie),pe=Ce*-H;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=He+Ce,b=Ee+Ce,k=J-pe,K=Q+(ae-pe),$=Z*Ee/b*R,j=w*Ee/b*R;q.projectionMatrix.makePerspective(k,K,$,j,R,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function fe(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,de=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),v.near=P.near=T.near=ne,v.far=P.far=T.far=de,(E!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,L=v.far);const ae=q.parent,be=v.cameras;fe(v,ae);for(let Ne=0;Ne<be.length;Ne++)fe(be[Ne],ae);be.length===2?W(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),oe(q,v,ae)};function oe(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ws*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let he=null;function Ve(q,ne){if(h=ne.getViewerPose(c||a),p=ne,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;de.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Ne=0;Ne<de.length;Ne++){const He=de[Ne];let Ee=null;if(f!==null)Ee=f.getViewport(He);else{const w=u.getViewSubImage(d,He);Ee=w.viewport,Ne===0&&(e.setRenderTargetTextures(y,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(y))}let Z=N[Ne];Z===void 0&&(Z=new kt,Z.layers.enable(Ne),Z.viewport=new tt,N[Ne]=Z),Z.matrix.fromArray(He.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(He.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Ne===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Z)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ne=u.getDepthInformation(de[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let de=0;de<x.length;de++){const ae=M[de],be=x[de];ae!==null&&be!==void 0&&be.update(ae,ne,c||a)}he&&he(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const Ge=new wf;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const Ri=new yn,Kx=new De;function jx(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,bf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,M=y.envMapRotation;x&&(g.envMap.value=x,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Ri)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $x(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(p(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",g));const C=x.program;n.updateUBOMapping(y,C);const S=e.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){const x=u();y.__bindingPointIndex=x;const M=s.createBuffer(),C=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],M=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,T=M.length;S<T;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let N=0,v=P.length;N<v;N++){const E=P[N];if(f(E,S,N,C)===!0){const L=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let X=0;X<D.length;X++){const z=D[X],te=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+O,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,O),O+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,C){const S=y.value,T=x+"_"+M;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{const P=C[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function p(y){const x=y.uniforms;let M=0;const C=16;for(let T=0,P=x.length;T<P;T++){const N=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,E=N.length;v<E;v++){const L=N[v],D=Array.isArray(L.value)?L.value:[L.value];for(let O=0,X=D.length;O<X;O++){const z=D[O],te=_(z),W=M%C,fe=W%te.boundary,oe=W+fe;M+=fe,oe!==0&&C-oe<te.storage&&(M+=C-oe),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=te.storage}}}const S=M%C;return S>0&&(M+=C-S),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Zx{constructor(e={}){const{canvas:t=Bp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=qn,this.toneMappingExposure=1;const x=this;let M=!1,C=0,S=0,T=null,P=-1,N=null;const v=new tt,E=new tt;let L=null;const D=new Se(0);let O=0,X=t.width,z=t.height,te=1,W=null,fe=null;const oe=new tt(0,0,X,z),he=new tt(0,0,X,z);let Ve=!1;const Ge=new Ec;let q=!1,ne=!1;const de=new De,ae=new De,be=new I,Ne=new tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Z(){return T===null?te:1}let w=n;function H(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),w===null){const F="webgl2";if(w=H(F,A),w===null)throw H(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,J,Q,Ce,pe,R,b,k,K,$,j,Te,ce,me,Ye,re,ge,Oe,Fe,ve,Ae,Le,Je,U;function ye(){ie=new n_(w),ie.init(),Le=new Hx(w,ie),J=new $0(w,ie,e,Le),Q=new Bx(w),J.reverseDepthBuffer&&Q.buffers.depth.setReversed(!0),Ce=new r_(w),pe=new bx,R=new kx(w,ie,Q,pe,J,Le,Ce),b=new J0(x),k=new t_(x),K=new fm(w),Je=new K0(w,K),$=new i_(w,K,Ce,Je),j=new o_(w,$,K,Ce),Fe=new a_(w,J,R),re=new Z0(pe),Te=new Sx(x,b,k,ie,J,Je,re),ce=new jx(x,pe),me=new Tx,Ye=new Ix(ie),Oe=new Y0(x,b,k,Q,j,d,l),ge=new Ox(x,j,J),U=new $x(w,Ce,J,Q),ve=new j0(w,ie,Ce),Ae=new s_(w,ie,Ce),Ce.programs=Te.programs,x.capabilities=J,x.extensions=ie,x.properties=pe,x.renderLists=me,x.shadowMap=ge,x.state=Q,x.info=Ce}ye();const Y=new Yx(x,w);this.xr=Y,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(X,z,!1))},this.getSize=function(A){return A.set(X,z)},this.setSize=function(A,F,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,z=F,t.width=Math.floor(A*te),t.height=Math.floor(F*te),V===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*te,z*te).floor()},this.setDrawingBufferSize=function(A,F,V){X=A,z=F,te=V,t.width=Math.floor(A*V),t.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,F,V,G){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,F,V,G),Q.viewport(v.copy(oe).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,F,V,G){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,F,V,G),Q.scissor(E.copy(he).multiplyScalar(te).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){Q.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,F=!0,V=!0){let G=0;if(A){let B=!1;if(T!==null){const le=T.texture.format;B=le===yc||le===vc||le===xc}if(B){const le=T.texture.type,xe=le===Kn||le===Bi||le===cr||le===Es||le===mc||le===gc,we=Oe.getClearColor(),Re=Oe.getClearAlpha(),Be=we.r,ke=we.g,Pe=we.b;xe?(f[0]=Be,f[1]=ke,f[2]=Pe,f[3]=Re,w.clearBufferuiv(w.COLOR,0,f)):(p[0]=Be,p[1]=ke,p[2]=Pe,p[3]=Re,w.clearBufferiv(w.COLOR,0,p))}else G|=w.COLOR_BUFFER_BIT}F&&(G|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Ye.dispose(),pe.dispose(),b.dispose(),k.dispose(),j.dispose(),Je.dispose(),U.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Kc),Y.removeEventListener("sessionend",jc),Si.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ce.autoReset,F=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,B=ge.type;ye(),Ce.autoReset=A,ge.enabled=F,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=B}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const F=A.target;F.removeEventListener("dispose",$e),xt(F)}function xt(A){Bt(A),pe.remove(A)}function Bt(A){const F=pe.get(A).programs;F!==void 0&&(F.forEach(function(V){Te.releaseProgram(V)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,G,B,le){F===null&&(F=He);const xe=B.isMesh&&B.matrixWorld.determinant()<0,we=Rd(A,F,V,G,B);Q.setMaterial(G,xe);let Re=V.index,Be=1;if(G.wireframe===!0){if(Re=$.getWireframeAttribute(V),Re===void 0)return;Be=2}const ke=V.drawRange,Pe=V.attributes.position;let st=ke.start*Be,lt=(ke.start+ke.count)*Be;le!==null&&(st=Math.max(st,le.start*Be),lt=Math.min(lt,(le.start+le.count)*Be)),Re!==null?(st=Math.max(st,0),lt=Math.min(lt,Re.count)):Pe!=null&&(st=Math.max(st,0),lt=Math.min(lt,Pe.count));const mt=lt-st;if(mt<0||mt===1/0)return;Je.setup(B,G,we,V,Re);let Wt,nt=ve;if(Re!==null&&(Wt=K.get(Re),nt=Ae,nt.setIndex(Wt)),B.isMesh)G.wireframe===!0?(Q.setLineWidth(G.wireframeLinewidth*Z()),nt.setMode(w.LINES)):nt.setMode(w.TRIANGLES);else if(B.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Q.setLineWidth(Ie*Z()),B.isLineSegments?nt.setMode(w.LINES):B.isLineLoop?nt.setMode(w.LINE_LOOP):nt.setMode(w.LINE_STRIP)}else B.isPoints?nt.setMode(w.POINTS):B.isSprite&&nt.setMode(w.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ie=B._multiDrawStarts,Rt=B._multiDrawCounts,it=B._multiDrawCount,hn=Re?K.get(Re).bytesPerElement:1,Wi=pe.get(G).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Wi.setValue(w,"_gl_DrawID",Xt),nt.render(Ie[Xt]/hn,Rt[Xt])}else if(B.isInstancedMesh)nt.renderInstances(st,mt,B.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rt=Math.min(V.instanceCount,Ie);nt.renderInstances(st,mt,Rt)}else nt.render(st,mt)};function Qe(A,F,V){A.transparent===!0&&A.side===sn&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,wr(A,F,V),A.side=Yn,A.needsUpdate=!0,wr(A,F,V),A.side=sn):wr(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),g=Ye.get(V),g.init(F),y.push(g),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),A!==V&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const G=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const we=le[xe];Qe(we,V,B),G.add(we)}else Qe(le,V,B),G.add(le)}),y.pop(),g=null,G},this.compileAsync=function(A,F,V=null){const G=this.compile(A,F,V);return new Promise(B=>{function le(){if(G.forEach(function(xe){pe.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){B(A);return}setTimeout(le,10)}ie.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let zt=null;function Nn(A){zt&&zt(A)}function Kc(){Si.stop()}function jc(){Si.start()}const Si=new wf;Si.setAnimationLoop(Nn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){zt=A,Y.setAnimationLoop(A),A===null?Si.stop():Si.start()},Y.addEventListener("sessionstart",Kc),Y.addEventListener("sessionend",jc),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,T),g=Ye.get(A,y.length),g.init(F),y.push(g),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(ae),ne=this.localClippingEnabled,q=re.init(this.clippingPlanes,ne),_=me.get(A,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Qa(le,F,-1/0,x.sortObjects)}Qa(A,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,fe),Ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ee&&Oe.addToRenderList(_,A),this.info.render.frame++,q===!0&&re.beginShadows();const V=g.state.shadowsArray;ge.render(V,A,F),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,B=_.transmissive;if(g.setupLights(),F.isArrayCamera){const le=F.cameras;if(B.length>0)for(let xe=0,we=le.length;xe<we;xe++){const Re=le[xe];Zc(G,B,A,Re)}Ee&&Oe.render(A);for(let xe=0,we=le.length;xe<we;xe++){const Re=le[xe];$c(_,A,Re,Re.viewport)}}else B.length>0&&Zc(G,B,A,F),Ee&&Oe.render(A),$c(_,A,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,F),Je.resetDefaultState(),P=-1,N=null,y.pop(),y.length>0?(g=y[y.length-1],q===!0&&re.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Qa(A,F,V,G){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){G&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const xe=j.update(A),we=A.material;we.visible&&_.push(A,xe,we,V,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const xe=j.update(A),we=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(we)){const Re=xe.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){const Pe=Re[Be],st=we[Pe.materialIndex];st&&st.visible&&_.push(A,xe,st,V,Ne.z,Pe)}}else we.visible&&_.push(A,xe,we,V,Ne.z,null)}}const le=A.children;for(let xe=0,we=le.length;xe<we;xe++)Qa(le[xe],F,V,G)}function $c(A,F,V,G){const B=A.opaque,le=A.transmissive,xe=A.transparent;g.setupLightsView(V),q===!0&&re.setGlobalState(x.clippingPlanes,V),G&&Q.viewport(v.copy(G)),B.length>0&&Tr(B,F,V),le.length>0&&Tr(le,F,V),xe.length>0&&Tr(xe,F,V),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Zc(A,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new xi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Mr:Kn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const le=g.state.transmissionRenderTarget[G.id],xe=G.viewport||v;le.setSize(xe.z,xe.w);const we=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(D),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Ee&&Oe.render(V);const Re=x.toneMapping;x.toneMapping=qn;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),q===!0&&re.setGlobalState(x.clippingPlanes,G),Tr(A,V,G),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,st=F.length;Pe<st;Pe++){const lt=F[Pe],mt=lt.object,Wt=lt.geometry,nt=lt.material,Ie=lt.group;if(nt.side===sn&&mt.layers.test(G.layers)){const Rt=nt.side;nt.side=Gt,nt.needsUpdate=!0,Jc(mt,V,G,Wt,nt,Ie),nt.side=Rt,nt.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le))}x.setRenderTarget(we),x.setClearColor(D,O),Be!==void 0&&(G.viewport=Be),x.toneMapping=Re}function Tr(A,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,le=A.length;B<le;B++){const xe=A[B],we=xe.object,Re=xe.geometry,Be=G===null?xe.material:G,ke=xe.group;we.layers.test(V.layers)&&Jc(we,F,V,Re,Be,ke)}}function Jc(A,F,V,G,B,le){A.onBeforeRender(x,F,V,G,B,le),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,F,V,G,A,le),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,x.renderBufferDirect(V,F,G,B,A,le),B.side=Yn,B.needsUpdate=!0,x.renderBufferDirect(V,F,G,B,A,le),B.side=sn):x.renderBufferDirect(V,F,G,B,A,le),A.onAfterRender(x,F,V,G,B,le)}function wr(A,F,V){F.isScene!==!0&&(F=He);const G=pe.get(A),B=g.state.lights,le=g.state.shadowsArray,xe=B.state.version,we=Te.getParameters(A,B.state,le,F,V),Re=Te.getProgramCacheKey(we);let Be=G.programs;G.environment=A.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(A.isMeshStandardMaterial?k:b).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",$e),Be=new Map,G.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===xe)return eh(A,we),ke}else we.uniforms=Te.getUniforms(A),A.onBeforeCompile(we,x),ke=Te.acquireProgram(we,Re),Be.set(Re,ke),G.uniforms=we.uniforms;const Pe=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=re.uniform),eh(A,we),G.needsLights=Pd(A),G.lightsStateVersion=xe,G.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Qc(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=_a.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function eh(A,F){const V=pe.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Rd(A,F,V,G,B){F.isScene!==!0&&(F=He),R.resetTextureUnits();const le=F.fog,xe=G.isMeshStandardMaterial?F.environment:null,we=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ct,Re=(G.isMeshStandardMaterial?k:b).get(G.envMap||xe),Be=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let mt=qn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=x.toneMapping);const Wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=Wt!==void 0?Wt.length:0,Ie=pe.get(G),Rt=g.state.lights;if(q===!0&&(ne===!0||A!==N)){const Zt=A===N&&G.id===P;re.setState(G,A,Zt)}let it=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Rt.state.version||Ie.outputColorSpace!==we||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==Re||G.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==ke||Ie.morphTargets!==Pe||Ie.morphNormals!==st||Ie.morphColors!==lt||Ie.toneMapping!==mt||Ie.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ie.__version=G.version);let hn=Ie.currentProgram;it===!0&&(hn=wr(G,F,B));let Wi=!1,Xt=!1,eo=!1;const gt=hn.getUniforms(),Jn=Ie.uniforms;if(Q.useProgram(hn.program)&&(Wi=!0,Xt=!0,eo=!0),G.id!==P&&(P=G.id,Xt=!0),Wi||N!==A){J.reverseDepthBuffer?(de.copy(A.projectionMatrix),kp(de),Hp(de),gt.setValue(w,"projectionMatrix",de)):gt.setValue(w,"projectionMatrix",A.projectionMatrix),gt.setValue(w,"viewMatrix",A.matrixWorldInverse);const Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(w,be.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&gt.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Xt=!0,eo=!0)}if(B.isSkinnedMesh){gt.setOptional(w,B,"bindMatrix"),gt.setOptional(w,B,"bindMatrixInverse");const Zt=B.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),gt.setValue(w,"boneTexture",Zt.boneTexture,R))}B.isBatchedMesh&&(gt.setOptional(w,B,"batchingTexture"),gt.setValue(w,"batchingTexture",B._matricesTexture,R),gt.setOptional(w,B,"batchingIdTexture"),gt.setValue(w,"batchingIdTexture",B._indirectTexture,R),gt.setOptional(w,B,"batchingColorTexture"),B._colorsTexture!==null&&gt.setValue(w,"batchingColorTexture",B._colorsTexture,R));const to=V.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Fe.update(B,V,hn),(Xt||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,gt.setValue(w,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Jn.envMap.value=Re,Jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Jn.envMapIntensity.value=F.environmentIntensity),Xt&&(gt.setValue(w,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Cd(Jn,eo),le&&G.fog===!0&&ce.refreshFogUniforms(Jn,le),ce.refreshMaterialUniforms(Jn,G,te,z,g.state.transmissionRenderTarget[A.id]),_a.upload(w,Qc(Ie),Jn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_a.upload(w,Qc(Ie),Jn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(w,"center",B.center),gt.setValue(w,"modelViewMatrix",B.modelViewMatrix),gt.setValue(w,"normalMatrix",B.normalMatrix),gt.setValue(w,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let no=0,Id=Zt.length;no<Id;no++){const th=Zt[no];U.update(th,hn),U.bind(th,hn)}}return hn}function Cd(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Pd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,V){pe.get(A.texture).__webglTexture=F,pe.get(A.depthTexture).__webglTexture=V;const G=pe.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=pe.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){T=A,C=F,S=V;let G=!0,B=null,le=!1,xe=!1;if(A){const Re=pe.get(A);if(Re.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Re.__hasExternalTextures)R.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&pe.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const ke=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][V]:B=ke[F],le=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[V]:B=ke,v.copy(A.viewport),E.copy(A.scissor),L=A.scissorTest}else v.copy(oe).multiplyScalar(te).floor(),E.copy(he).multiplyScalar(te).floor(),L=Ve;if(Q.bindFramebuffer(w.FRAMEBUFFER,B)&&G&&Q.drawBuffers(A,B),Q.viewport(v),Q.scissor(E),Q.setScissorTest(L),le){const Re=pe.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,V)}else if(xe){const Re=pe.get(A.texture),Be=F||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}P=-1},this.readRenderTargetPixels=function(A,F,V,G,B,le,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){Q.bindFramebuffer(w.FRAMEBUFFER,we);try{const Re=A.texture,Be=Re.format,ke=Re.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-G&&V>=0&&V<=A.height-B&&w.readPixels(F,V,G,B,Le.convert(Be),Le.convert(ke),le)}finally{const Re=T!==null?pe.get(T).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,G,B,le,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){const Re=A.texture,Be=Re.format,ke=Re.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-G&&V>=0&&V<=A.height-B){Q.bindFramebuffer(w.FRAMEBUFFER,we);const Pe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Pe),w.bufferData(w.PIXEL_PACK_BUFFER,le.byteLength,w.STREAM_READ),w.readPixels(F,V,G,B,Le.convert(Be),Le.convert(ke),0);const st=T!==null?pe.get(T).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,st);const lt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await zp(w,lt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Pe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,le),w.deleteBuffer(Pe),w.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),B=Math.floor(A.image.width*G),le=Math.floor(A.image.height*G),xe=F!==null?F.x:0,we=F!==null?F.y:0;R.setTexture2D(A,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,xe,we,B,le),Q.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,G=null,B=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],F=arguments[2],B=arguments[3]||0,V=null);let le,xe,we,Re,Be,ke;V!==null?(le=V.max.x-V.min.x,xe=V.max.y-V.min.y,we=V.min.x,Re=V.min.y):(le=A.image.width,xe=A.image.height,we=0,Re=0),G!==null?(Be=G.x,ke=G.y):(Be=0,ke=0);const Pe=Le.convert(F.format),st=Le.convert(F.type);R.setTexture2D(F,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=w.getParameter(w.UNPACK_ROW_LENGTH),mt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Wt=w.getParameter(w.UNPACK_SKIP_PIXELS),nt=w.getParameter(w.UNPACK_SKIP_ROWS),Ie=w.getParameter(w.UNPACK_SKIP_IMAGES),Rt=A.isCompressedTexture?A.mipmaps[B]:A.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Rt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Rt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Re),A.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,B,Be,ke,le,xe,Pe,st,Rt.data):A.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,B,Be,ke,Rt.width,Rt.height,Pe,Rt.data):w.texSubImage2D(w.TEXTURE_2D,B,Be,ke,le,xe,Pe,st,Rt),w.pixelStorei(w.UNPACK_ROW_LENGTH,lt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,mt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie),B===0&&F.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,G=null,B=0){A.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],F=arguments[3],B=arguments[4]||0);let le,xe,we,Re,Be,ke,Pe,st,lt;const mt=A.isCompressedTexture?A.mipmaps[B]:A.image;V!==null?(le=V.max.x-V.min.x,xe=V.max.y-V.min.y,we=V.max.z-V.min.z,Re=V.min.x,Be=V.min.y,ke=V.min.z):(le=mt.width,xe=mt.height,we=mt.depth,Re=0,Be=0,ke=0),G!==null?(Pe=G.x,st=G.y,lt=G.z):(Pe=0,st=0,lt=0);const Wt=Le.convert(F.format),nt=Le.convert(F.type);let Ie;if(F.isData3DTexture)R.setTexture3D(F,0),Ie=w.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Ie=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const Rt=w.getParameter(w.UNPACK_ROW_LENGTH),it=w.getParameter(w.UNPACK_IMAGE_HEIGHT),hn=w.getParameter(w.UNPACK_SKIP_PIXELS),Wi=w.getParameter(w.UNPACK_SKIP_ROWS),Xt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(w.UNPACK_SKIP_ROWS,Be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?w.texSubImage3D(Ie,B,Pe,st,lt,le,xe,we,Wt,nt,mt.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Ie,B,Pe,st,lt,le,xe,we,Wt,mt.data):w.texSubImage3D(Ie,B,Pe,st,lt,le,xe,we,Wt,nt,mt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,it),w.pixelStorei(w.UNPACK_SKIP_PIXELS,hn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xt),B===0&&F.generateMipmaps&&w.generateMipmap(Ie),Q.unbindTexture()},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){C=0,S=0,T=null,Q.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Ha?"display-p3":"srgb"}}class Lf extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new I;class dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wa extends jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Vs=new I,as=new I,os=new I,ls=new se,Gs=new se,Nf=new De,Yr=new I,Ws=new I,Kr=new I,$h=new se,Do=new se,Zh=new se;class wc extends ft{constructor(e=new Wa){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Df(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new dr(n,3,0,!1)),rs.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;jr(Yr.set(-.5,-.5,0),os,a,as,i,r),jr(Ws.set(.5,-.5,0),os,a,as,i,r),jr(Kr.set(.5,.5,0),os,a,as,i,r),$h.set(0,0),Do.set(1,0),Zh.set(1,1);let o=e.ray.intersectTriangle(Yr,Ws,Kr,!1,Vs);if(o===null&&(jr(Ws.set(-.5,.5,0),os,a,as,i,r),Do.set(0,1),o=e.ray.intersectTriangle(Yr,Kr,Ws,!1,Vs),o===null))return;const l=e.ray.origin.distanceTo(Vs);l<e.near||l>e.far||t.push({distance:l,point:Vs.clone(),uv:rn.getInterpolation(Vs,Yr,Ws,Kr,$h,Do,Zh,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Gs.x=r*ls.x-i*ls.y,Gs.y=i*ls.x+r*ls.y):Gs.copy(ls),s.copy(e),s.x+=Gs.x,s.y+=Gs.y,s.applyMatrix4(Nf)}const Jh=new I,Qh=new tt,eu=new tt,Jx=new I,tu=new De,$r=new I,No=new Pn,nu=new De,Uo=new Va;class Qx extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),e.ray.intersectsSphere(No)!==!1&&(nu.copy(i).invert(),Uo.copy(e.ray).applyMatrix4(nu),!(this.boundingBox!==null&&Uo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===op?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qh.fromBufferAttribute(i.attributes.skinIndex,e),eu.fromBufferAttribute(i.attributes.skinWeight,e),Jh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=eu.getComponent(r);if(a!==0){const o=Qh.getComponent(r);tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jx.copy(Jh).applyMatrix4(tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uf extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ac extends St{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Lt,h=Lt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=new De,ev=new De;class Rc{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ev;iu.multiplyMatrices(o,t[r]),iu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ac(t,e,e,on,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Uf),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Wl extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new De,su=new De,Zr=[],ru=new Cn,tv=new De,Xs=new je,qs=new Pn;class Xa extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),ru.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),qs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),su.multiplyMatrices(n,cs),Xs.matrixWorld=su,Xs.raycast(e,Zr);for(let a=0,o=Zr.length;a<o;a++){const l=Zr[a];l.instanceId=r,l.object=this,t.push(l)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ac(new Float32Array(i*this.count),i,this.count,_c,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Of extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new I,Da=new I,au=new De,Ys=new Va,Jr=new Pn,Oo=new I,ou=new I;class Cc extends ft{constructor(e=new Mt,t=new Of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)La.fromBufferAttribute(t,i-1),Da.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Da);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;au.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),x=Qr(this,e,Ys,l,m,y);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Qr(this,e,Ys,l,_,g);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=Qr(this,e,Ys,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Qr(this,e,Ys,l,p-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(La.fromBufferAttribute(a,i),Da.fromBufferAttribute(a,r),t.distanceSqToSegment(La,Da,Oo,ou)>n)return;Oo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Oo);if(!(l<e.near||l>e.far))return{distance:l,point:ou.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const lu=new I,cu=new I;class nv extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)lu.fromBufferAttribute(t,i),cu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lu.distanceTo(cu);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iv extends Cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ff extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hu=new De,Xl=new Va,ea=new Pn,ta=new I;class sv extends ft{constructor(e=new Mt,t=new Ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;hu.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);ta.fromBufferAttribute(u,g),uu(ta,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)ta.fromBufferAttribute(u,p),uu(ta,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uu(s,e,t,n,i,r,a){const o=Xl.distanceSqToPoint(s);if(o<t){const l=new I;Xl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ds extends St{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new De;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pc extends In{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rv extends Pc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const na=new I,Fo=new Ic,Bo=new Ic,zo=new Ic;class av extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(na.subVectors(i[0],i[1]).add(i[0]),c=na);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(na.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Fo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Bo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),zo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Bo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fo.calc(l),Bo.calc(l),zo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function ov(s,e){const t=1-s;return t*t*e}function lv(s,e){return 2*(1-s)*s*e}function cv(s,e){return s*s*e}function nr(s,e,t,n){return ov(s,e)+lv(s,t)+cv(s,n)}function hv(s,e){const t=1-s;return t*t*t*e}function uv(s,e){const t=1-s;return 3*t*t*s*e}function fv(s,e){return 3*(1-s)*s*s*e}function dv(s,e){return s*s*s*e}function ir(s,e,t,n,i){return hv(s,e)+uv(s,t)+fv(s,n)+dv(s,i)}class Bf extends In{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,a.x,o.x),ir(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pv extends In{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,a.x,o.x),ir(e,i.y,r.y,a.y,o.y),ir(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zf extends In{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mv extends In{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends In{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,i.x,r.x,a.x),nr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gv extends In{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,i.x,r.x,a.x),nr(e,i.y,r.y,a.y),nr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hf extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(fu(o,l.x,c.x,h.x,u.x),fu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:rv,CatmullRomCurve3:av,CubicBezierCurve:Bf,CubicBezierCurve3:pv,EllipseCurve:Pc,LineCurve:zf,LineCurve3:mv,QuadraticBezierCurve:kf,QuadraticBezierCurve3:gv,SplineCurve:Hf});class _v extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ql[i.type]().fromJSON(i))}return this}}class Yl extends _v{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zf(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new kf(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Bf(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Pc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zi extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qa extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){const M=new I,C=new I;let S=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const N=[],v=P/r,E=v*(t-e)+e;for(let L=0;L<=i;L++){const D=L/i,O=D*l+o,X=Math.sin(O),z=Math.cos(O);C.x=E*X,C.y=-v*n+g,C.z=E*z,u.push(C.x,C.y,C.z),M.set(X,T,z).normalize(),d.push(M.x,M.y,M.z),f.push(D,1-v),N.push(p++)}_.push(N)}for(let P=0;P<i;P++)for(let N=0;N<r;N++){const v=_[N][P],E=_[N+1][P],L=_[N+1][P+1],D=_[N][P+1];e>0&&(h.push(v,E,D),S+=3),t>0&&(h.push(E,L,D),S+=3)}c.addGroup(m,S,0),m+=S}function x(M){const C=p,S=new se,T=new I;let P=0;const N=M===!0?e:t,v=M===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;const E=p;for(let L=0;L<=i;L++){const O=L/i*l+o,X=Math.cos(O),z=Math.sin(O);T.x=N*z,T.y=g*v,T.z=N*X,u.push(T.x,T.y,T.z),d.push(0,v,0),S.x=X*.5+.5,S.y=z*.5*v+.5,f.push(S.x,S.y),p++}for(let L=0;L<i;L++){const D=C+L,O=E+L;M===!0?h.push(O,O+1,D):h.push(O+1,O,D),P+=3}c.addGroup(m,P,M===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lc extends qa{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new I,M=new I,C=new I;for(let S=0;S<t.length;S+=3)f(t[S+0],x),f(t[S+1],M),f(t[S+2],C),l(x,M,C,y)}function l(y,x,M,C){const S=C+1,T=[];for(let P=0;P<=S;P++){T[P]=[];const N=y.clone().lerp(M,P/S),v=x.clone().lerp(M,P/S),E=S-P;for(let L=0;L<=E;L++)L===0&&P===S?T[P][L]=N:T[P][L]=N.clone().lerp(v,L/E)}for(let P=0;P<S;P++)for(let N=0;N<2*(S-P)-1;N++){const v=Math.floor(N/2);N%2===0?(d(T[P][v+1]),d(T[P+1][v]),d(T[P][v])):(d(T[P][v+1]),d(T[P+1][v+1]),d(T[P+1][v]))}}function c(y){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=g(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;a.push(M,1-C)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],M=a[y+2],C=a[y+4],S=Math.max(x,M,C),T=Math.min(x,M,C);S>.9&&T<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function p(){const y=new I,x=new I,M=new I,C=new I,S=new se,T=new se,P=new se;for(let N=0,v=0;N<r.length;N+=9,v+=6){y.set(r[N+0],r[N+1],r[N+2]),x.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),S.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),C.copy(y).add(x).add(M).divideScalar(3);const E=g(C);_(S,v+0,y,E),_(T,v+2,x,E),_(P,v+4,M,E)}}function _(y,x,M,C){C<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.vertices,e.indices,e.radius,e.details)}}class Vf extends Yl{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Yl().fromJSON(i))}return this}}const xv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Gf(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=bv(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return pr(r,a,t,o,l,f,0),a}};function Gf(s,e,t,n,i){let r,a;if(i===Nv(s,e,t,n)>0)for(r=e;r<t;r+=n)a=du(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=du(r,s[r],s[r+1],a);return a&&Ya(a,a.next)&&(gr(a),a=a.next),a}function ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ya(t,t.next)||pt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Rv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?yv(s,n,i,r):vv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),gr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Mv(ki(s),e,t),pr(s,e,t,n,i,r,2)):a===2&&Sv(s,e,t,n,i,r):pr(ki(s),e,t,n,i,r,1);break}}}function vv(s){const e=s.prev,t=s,n=s.next;if(pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ps(i,o,r,l,a,c,p.x,p.y)&&pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yv(s,e,t,n){const i=s.prev,r=s,a=s.next;if(pt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Kl(f,p,e,t,n),y=Kl(_,g,e,t,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&ps(o,h,l,u,c,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&ps(o,h,l,u,c,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ya(i,r)&&Wf(i,n,n.next,r)&&mr(i,r)&&mr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),gr(n),gr(n.next),n=s=r),n=n.next}while(n!==s);return ki(n)}function Sv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Iv(a,o)){let l=Xf(a,o);a=ki(a,a.next),l=ki(l,l.next),pr(a,e,t,n,i,r,0),pr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function bv(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Gf(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Pv(c));for(i.sort(Ev),r=0;r<i.length;r++)t=Tv(i[r],t);return t}function Ev(s,e){return s.x-e.x}function Tv(s,e){const t=wv(s,e);if(!t)return e;const n=Xf(t,s);return ki(n,n.next),ki(t,t.next)}function wv(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ps(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),mr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Av(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Av(s,e){return pt(s.prev,s,e.prev)<0&&pt(e.next,s,s.next)<0}function Rv(s,e,t,n){let i=s;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cv(i)}function Cv(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Pv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ps(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Iv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Lv(s,e)&&(mr(s,e)&&mr(e,s)&&Dv(s,e)&&(pt(s.prev,s,e.prev)||pt(s,e.prev,e))||Ya(s,e)&&pt(s.prev,s,s.next)>0&&pt(e.prev,e,e.next)>0)}function pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ya(s,e){return s.x===e.x&&s.y===e.y}function Wf(s,e,t,n){const i=sa(pt(s,e,t)),r=sa(pt(s,e,n)),a=sa(pt(t,n,s)),o=sa(pt(t,n,e));return!!(i!==r&&a!==o||i===0&&ia(s,t,e)||r===0&&ia(s,n,e)||a===0&&ia(t,s,n)||o===0&&ia(t,e,n))}function ia(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function sa(s){return s>0?1:s<0?-1:0}function Lv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function mr(s,e){return pt(s.prev,s,s.next)<0?pt(s,e,s.next)>=0&&pt(s,s.prev,e)>=0:pt(s,e,s.prev)<0||pt(s,s.next,e)<0}function Dv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Xf(s,e){const t=new jl(s.i,s.x,s.y),n=new jl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function du(s,e,t,n){const i=new jl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class sr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return sr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];pu(e),mu(n,e);let a=e.length;t.forEach(pu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,mu(n,t[l]);const o=xv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function pu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Nc extends Mt{constructor(e=new Vf([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ot(i,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Uv;let x,M=!1,C,S,T,P;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,C=m.computeFrenetFrames(h,!1),S=new I,T=new I,P=new I),d||(g=0,f=0,p=0,_=0);const N=o.extractPoints(c);let v=N.shape;const E=N.holes;if(!sr.isClockWise(v)){v=v.reverse();for(let Z=0,w=E.length;Z<w;Z++){const H=E[Z];sr.isClockWise(H)&&(E[Z]=H.reverse())}}const D=sr.triangulateShape(v,E),O=v;for(let Z=0,w=E.length;Z<w;Z++){const H=E[Z];v=v.concat(H)}function X(Z,w,H){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(w,H)}const z=v.length,te=D.length;function W(Z,w,H){let ie,J,Q;const Ce=Z.x-w.x,pe=Z.y-w.y,R=H.x-Z.x,b=H.y-Z.y,k=Ce*Ce+pe*pe,K=Ce*b-pe*R;if(Math.abs(K)>Number.EPSILON){const $=Math.sqrt(k),j=Math.sqrt(R*R+b*b),Te=w.x-pe/$,ce=w.y+Ce/$,me=H.x-b/j,Ye=H.y+R/j,re=((me-Te)*b-(Ye-ce)*R)/(Ce*b-pe*R);ie=Te+Ce*re-Z.x,J=ce+pe*re-Z.y;const ge=ie*ie+J*J;if(ge<=2)return new se(ie,J);Q=Math.sqrt(ge/2)}else{let $=!1;Ce>Number.EPSILON?R>Number.EPSILON&&($=!0):Ce<-Number.EPSILON?R<-Number.EPSILON&&($=!0):Math.sign(pe)===Math.sign(b)&&($=!0),$?(ie=-pe,J=Ce,Q=Math.sqrt(k)):(ie=Ce,J=pe,Q=Math.sqrt(k/2))}return new se(ie/Q,J/Q)}const fe=[];for(let Z=0,w=O.length,H=w-1,ie=Z+1;Z<w;Z++,H++,ie++)H===w&&(H=0),ie===w&&(ie=0),fe[Z]=W(O[Z],O[H],O[ie]);const oe=[];let he,Ve=fe.concat();for(let Z=0,w=E.length;Z<w;Z++){const H=E[Z];he=[];for(let ie=0,J=H.length,Q=J-1,Ce=ie+1;ie<J;ie++,Q++,Ce++)Q===J&&(Q=0),Ce===J&&(Ce=0),he[ie]=W(H[ie],H[Q],H[Ce]);oe.push(he),Ve=Ve.concat(he)}for(let Z=0;Z<g;Z++){const w=Z/g,H=f*Math.cos(w*Math.PI/2),ie=p*Math.sin(w*Math.PI/2)+_;for(let J=0,Q=O.length;J<Q;J++){const Ce=X(O[J],fe[J],ie);ae(Ce.x,Ce.y,-H)}for(let J=0,Q=E.length;J<Q;J++){const Ce=E[J];he=oe[J];for(let pe=0,R=Ce.length;pe<R;pe++){const b=X(Ce[pe],he[pe],ie);ae(b.x,b.y,-H)}}}const Ge=p+_;for(let Z=0;Z<z;Z++){const w=d?X(v[Z],Ve[Z],Ge):v[Z];M?(T.copy(C.normals[0]).multiplyScalar(w.x),S.copy(C.binormals[0]).multiplyScalar(w.y),P.copy(x[0]).add(T).add(S),ae(P.x,P.y,P.z)):ae(w.x,w.y,0)}for(let Z=1;Z<=h;Z++)for(let w=0;w<z;w++){const H=d?X(v[w],Ve[w],Ge):v[w];M?(T.copy(C.normals[Z]).multiplyScalar(H.x),S.copy(C.binormals[Z]).multiplyScalar(H.y),P.copy(x[Z]).add(T).add(S),ae(P.x,P.y,P.z)):ae(H.x,H.y,u/h*Z)}for(let Z=g-1;Z>=0;Z--){const w=Z/g,H=f*Math.cos(w*Math.PI/2),ie=p*Math.sin(w*Math.PI/2)+_;for(let J=0,Q=O.length;J<Q;J++){const Ce=X(O[J],fe[J],ie);ae(Ce.x,Ce.y,u+H)}for(let J=0,Q=E.length;J<Q;J++){const Ce=E[J];he=oe[J];for(let pe=0,R=Ce.length;pe<R;pe++){const b=X(Ce[pe],he[pe],ie);M?ae(b.x,b.y+x[h-1].y,x[h-1].x+H):ae(b.x,b.y,u+H)}}}q(),ne();function q(){const Z=i.length/3;if(d){let w=0,H=z*w;for(let ie=0;ie<te;ie++){const J=D[ie];be(J[2]+H,J[1]+H,J[0]+H)}w=h+g*2,H=z*w;for(let ie=0;ie<te;ie++){const J=D[ie];be(J[0]+H,J[1]+H,J[2]+H)}}else{for(let w=0;w<te;w++){const H=D[w];be(H[2],H[1],H[0])}for(let w=0;w<te;w++){const H=D[w];be(H[0]+z*h,H[1]+z*h,H[2]+z*h)}}n.addGroup(Z,i.length/3-Z,0)}function ne(){const Z=i.length/3;let w=0;de(O,w),w+=O.length;for(let H=0,ie=E.length;H<ie;H++){const J=E[H];de(J,w),w+=J.length}n.addGroup(Z,i.length/3-Z,1)}function de(Z,w){let H=Z.length;for(;--H>=0;){const ie=H;let J=H-1;J<0&&(J=Z.length-1);for(let Q=0,Ce=h+g*2;Q<Ce;Q++){const pe=z*Q,R=z*(Q+1),b=w+ie+pe,k=w+J+pe,K=w+J+R,$=w+ie+R;Ne(b,k,K,$)}}}function ae(Z,w,H){l.push(Z),l.push(w),l.push(H)}function be(Z,w,H){He(Z),He(w),He(H);const ie=i.length/3,J=y.generateTopUV(n,i,ie-3,ie-2,ie-1);Ee(J[0]),Ee(J[1]),Ee(J[2])}function Ne(Z,w,H,ie){He(Z),He(w),He(ie),He(w),He(H),He(ie);const J=i.length/3,Q=y.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);Ee(Q[0]),Ee(Q[1]),Ee(Q[3]),Ee(Q[1]),Ee(Q[2]),Ee(Q[3])}function He(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Ee(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ov(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ql[i.type]().fromJSON(i)),new Nc(n,e.options)}}const Uv={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-p),new se(_,1-m)]:[new se(o,1-l),new se(h,1-u),new se(f,1-p),new se(g,1-m)]}};function Ov(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ka extends Dc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class _r extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new I,p=new se;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,M=y+n+1,C=y+n+2,S=y+1;o.push(x,M,S),o.push(M,C,S)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Uc extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;a.push(_,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oc extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Oc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gu extends jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hi extends jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ra(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _u(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function qf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zv extends br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fs:r=e,o=2*t-n;break;case Aa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fs:a=e,l=2*n-t;break;case Aa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,M=f*g-f*_;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+y*a[c+C]+x*a[l+C]+M*a[u+C];return r}}class Yf extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class kv extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Fv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===io,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ur;class Ns extends Dn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=hr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Kf extends Dn{}Kf.prototype.ValueTypeName="color";class Rs extends Dn{}Rs.prototype.ValueTypeName="number";class Hv extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Cs extends Dn{InterpolantFactoryMethodLinear(e){return new Hv(this.times,this.values,this.getValueSize(),e)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Dn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=hr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Dn{}Ps.prototype.ValueTypeName="vector";class Na{constructor(e="",t=-1,n=[],i=Mc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Gv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Bv(l);l=_u(l,1,h),c=_u(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];qf(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Rs(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ps,f+".position",d,"pos",i),n(Cs,f+".quaternion",d,"rot",i),n(Ps,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return Kf;case"quaternion":return Cs;case"bool":case"boolean":return Ns;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Gv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vv(s.type);if(s.times===void 0){const t=[],n=[];qf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Wv{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Xv=new Wv;class Os{constructor(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class qv extends Error{constructor(e,t){super(e),this.response=t}}class jf extends Os{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let S=0,T=h.length;S<T;S++){const P=h[S];P.onProgress&&P.onProgress(C)}m.enqueue(M),y()}},x=>{m.error(x)})}}});return new Response(g)}else throw new qv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{fi.add(e,c);const h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yv extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=fr("img");function l(){h(),fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class $f extends Os{constructor(e){super(e)}load(e,t,n,i){const r=new St,a=new Yv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ja extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kv extends ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ko=new De,xu=new I,vu=new I;class Fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jv extends Fc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $v extends ja{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yu=new De,Ks=new I,Ho=new I;class Zv extends Fc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Jv extends ja{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qv extends Fc{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zf extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Qv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ey extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(e,l),r.manager.itemStart(e)}}class ty{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Bc="\\[\\]\\.:\\/",ny=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",iy="[^"+Bc.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",zc),ry=/(WCOD+)?/.source.replace("WCOD",iy),ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),ly=new RegExp("^"+sy+ry+ay+oy+"$"),cy=["material","materials","bones","map"];class hy{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){const t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=hy;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:us,endingEnd:us};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case hp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Mc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===cp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===df){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(e?i.endingStart=this.zeroSlopeAtStart?fs:us:i.endingStart=Aa,t?i.endingEnd=this.zeroSlopeAtEnd?fs:us:i.endingEnd=Aa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const fy=new Float32Array(1);class dy extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new ty(et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Yf(new Float32Array(2),new Float32Array(2),1,fy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Na.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Mc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new uy(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Na.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const _n={time:120,gemEvery:7,gemWin:10,countdown:15,respawn:5,regenDelay:3,regenRate:.13,bushSee:2.2,revealAfterShot:1},py={gemWin:5,countdown:10},$a={dealer:{name:"레이",role:"딜러",ai:"mid",rig:"dealer",color:16752698,hp:3100,r:.4,speed:2.5,reload:1.3,ammo:3,height:2.05,cycle:.8,idle:1.47,aim:.067,shotEnd:.7,attack:{kind:"burst",n:6,gap:.1,cooldown:.05,dmg:360,speed:13.3,range:9,spread:0,size:.17},superMul:.93,superSuperMul:.87,super:{kind:"burst",n:12,gap:.1,dmg:320,speed:16.3,range:11,spread:0,size:.337,pierce:!0,passWalls:!0},gun:"pistol"},tank:{name:"볼트",role:"탱커",ai:"close",rig:"tank",color:13646384,hp:5e3,r:.483,speed:2.667,reload:1.6,ammo:3,height:2.3,cycle:.733,idle:1,aim:.1,shotEnd:1,attack:{kind:"spread",n:5,arc:Math.PI/2,cooldown:.25,dmg:440,speed:9.5,range:5.33,size:.18,hitR:0},superMul:1,superSuperMul:1.2,takenMul:2.4,super:{kind:"dash",dist:5.5,time:.825,dmg:1e3,push:.87,slowR:3,slowArea:1,slowTime:1.5,slowAbs:350/300},gun:"shotgun"},sniper:{name:"미호",role:"저격수",ai:"far",rig:"sniper",color:3130546,hp:2800,r:.4,speed:2.5,reload:2.3,ammo:3,height:2.05,cycle:.667,idle:1.4,aim:.1,shotEnd:1.3,attack:{kind:"snipe",cooldown:.5,dmg:1800,near:.2,full:.85,speed:13.3,range:10,size:.337},superMul:.93,superSuperMul:.9,super:{kind:"pierce",dmg:900,speed:17,range:8.67,size:.42},gun:"rifle"}},my=4e3,xr=["dealer","tank","sniper"],vr=[{name:"새싹",think:.9,aim:.4,dodge:0,superUse:.3,react:.7,iq:.15,tap:1.1,zig:1.4,weave:0,lead:.2},{name:"연습생",think:.8,aim:.3,dodge:.1,superUse:.6,react:.45,iq:.45,tap:.8,zig:1,weave:.2,lead:.4},{name:"선수",think:.45,aim:.18,dodge:.35,superUse:.85,react:.3,iq:.75,tap:.45,zig:.7,weave:.4,lead:.6},{name:"고수",think:.15,aim:.03,dodge:1,superUse:1,react:.15,iq:.95,tap:.15,zig:.45,weave:.6,lead:.5}],kc=s=>vr[Math.min(vr.length-1,Math.floor(s/60))],Mu={win:8,lose:-4,draw:0,safeUnder:40},Su=[".B.................B.","BB......1.1.1......BB","BB.................BB","..###...........###..","..#BBB.........BBB#..","...BBB...###...BBB...",".........BBB.........",".##.....BBBBB.....##.",".BBB....##.##....BBB.","..BB.....WWW.....BB..","......BBBWWWBBB......","...####.......####...","..NN.............NN..","..BBB....#.#....BBB..","..BBB....#.#....BBB..","........##...##......"],gy=".##.......M.......##.";function _y(){const s=[...Su,gy,...Su.slice().reverse().map(e=>e.replace(/1/g,"2"))];for(const e of s)if(e.length!==21)throw new Error(`맵 줄 길이 ${e.length} ≠ 21: ${e}`);return s.map(e=>e.split(""))}function xy(s,e,t,n,i){const r=s.W,a=s.H,o=Math.floor(e),l=Math.floor(t);let c=Math.max(0,Math.min(r-1,Math.floor(n))),h=Math.max(0,Math.min(a-1,Math.floor(i)));if(En(s,c,h)){let x=null;for(let M=-1;M<=1;M++)for(let C=-1;C<=1;C++)En(s,c+C,h+M)||(x=[c+C,h+M]);if(!x)return[];[c,h]=x}const u=(x,M)=>M*r+x,d=new Float32Array(r*a).fill(1/0),f=new Int32Array(r*a).fill(-1),p=new Uint8Array(r*a),_=[[o,l]];d[u(o,l)]=0;const g=(x,M)=>Math.hypot(x-c,M-h);for(;_.length;){let x=0;for(let T=1;T<_.length;T++)d[u(..._[T])]+g(..._[T])<d[u(..._[x])]+g(..._[x])&&(x=T);const[M,C]=_.splice(x,1)[0],S=u(M,C);if(!p[S]){if(p[S]=1,M===c&&C===h)break;for(let T=-1;T<=1;T++)for(let P=-1;P<=1;P++){if(!P&&!T)continue;const N=M+P,v=C+T;if(En(s,N,v)||P&&T&&(En(s,M+P,C)||En(s,M,C+T)))continue;const E=d[S]+(P&&T?1.414:1),L=u(N,v);E<d[L]&&(d[L]=E,f[L]=S,_.push([N,v]))}}}const m=[];let y=u(c,h);if(f[y]<0&&y!==u(o,l))return[];for(;y>=0&&y!==u(o,l);)m.unshift({x:y%r+.5,z:Math.floor(y/r)+.5}),y=f[y];return m}const bu={close:1.3,mid:.72,far:.86},vy=3,yy=6.5,My=6,Sy=5,ri=new Set,_t=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z);function by(s){return(s()+s()+s()-1.5)/1.5}function Eu(s,e,t,n,i,r){const a=r?e.c.super:e.c.attack,o=a.kind==="dash"?a.dist/a.time:a.speed||12,l=_t(e,t),c=l/o*(n.lead??.8),h=i.vel?.get(t.id)??t;return Math.atan2(t.z+h.vz*c-e.z,t.x+h.vx*c-e.x)+by(s.rand)*n.aim}function Ey(s,e,t,n){const i=Math.hypot(t,n)||1;t/=i,n/=i;let r={x:t,z:n},a=-1/0;for(let o=0;o<16;o++){const l=o*Math.PI/8,c=Math.cos(l),h=Math.sin(l);let u=0;for(;u<3&&!En(s,Math.floor(e.x+c*(u+.6)),Math.floor(e.z+h*(u+.6)));)u+=.5;const d=(c*t+h*n)*i-Math.max(0,2.5-u)*.7;d>a&&(a=d,r={x:c,z:h})}return{x:r.x*Math.min(1,i),z:r.z*Math.min(1,i)}}function Ty(s,e,t,n,i){t.judged??=new WeakMap;const r=[];for(const h of s.bullets){if(h.team===e.team)continue;const u=Math.hypot(h.vx,h.vz)||1,d=e.x-h.x,f=e.z-h.z;d*h.vx+f*h.vz<=0||d*d+f*f>14*14||(t.judged.has(h)||t.judged.set(h,s.rand()<n),t.judged.get(h)&&r.push({x:h.x,z:h.z,vx:h.vx,vz:h.vz,T:Math.min(.9,(h.range-h.went)/u),r:e.c.r+h.hitR+.2}))}for(const h of s.units)for(const u of h.team===e.team?[]:h.queue){const d=Math.cos(u.ang),f=Math.sin(u.ang),p=e.x-h.x,_=e.z-h.z;p*d+_*f<=0||r.push({x:h.x+d*.45,z:h.z+f*.45,vx:d*u.spec.speed,vz:f*u.spec.speed,d0:Math.max(0,u.at-s.t),T:.9,r:e.c.r+(u.spec.hitR??u.spec.size)+.2})}for(const h of s.units){if(!h.alive||h.team===e.team||!h.dash)continue;const u=e.x-h.x,d=e.z-h.z,f=h.dash;u*f.vx+d*f.vz<=0||(t.judged.has(f)||t.judged.set(f,s.rand()<n),t.judged.get(f)&&r.push({x:h.x,z:h.z,vx:f.vx,vz:f.vz,T:Math.min(.9,f.left),r:e.c.r+h.c.r+.25}))}if(!r.length)return null;const a=e.c.speed,o=(h,u)=>{let d=1/0;for(const f of r)for(let p=Math.max(.05,f.d0??0);p<=f.T;p+=.05){const _=p-(f.d0??0);d=Math.min(d,Math.hypot(e.x+h*a*p-(f.x+f.vx*_),e.z+u*a*p-(f.z+f.vz*_))-f.r)}return d};if(o(0,0)>.05)return null;let l=null,c=-1/0;for(let h=0;h<8;h++){const u=h*Math.PI/4,d=Math.cos(u),f=Math.sin(u);if(En(s,Math.floor(e.x+d*.9),Math.floor(e.z+f*.9)))continue;const p=Math.min(o(d,f),1.2)+(i?(d*i.x+f*i.z)*.1:0);p>c&&(c=p,l={x:d,z:f})}return l}function wy(s,e,t){const n=e.tier??s.tier,i=e.ai??={next:s.rand()*n.think,path:[],strafe:s.rand()<.5?1:-1,dodge:null,seen:new Map,healing:!1},r=e.input;i.next-=t,i.next<=0&&(i.next=n.think*(.8+s.rand()*.4),Ry(s,e,i,n)),i.vel??=new Map;for(const h of s.units)if(h.team!==e.team){const u=i.vel.get(h.id)??{vx:h.vx,vz:h.vz},d=Math.min(1,t/.45);u.vx+=(h.vx-u.vx)*d,u.vz+=(h.vz-u.vz)*d,i.vel.set(h.id,u)}const a=i.e&&i.e.alive&&$n(s,e.team,i.e)?i.e:null,o=a?_t(a,e):1/0,l=Hc(e);if(i.fireCd=(i.fireCd??0)-t,i.zigT=(i.zigT??0)-t,i.zigT<=0&&(i.zigT=(n.zig??.8)*(.6+s.rand()*.8),i.strafe*=-1),a&&s.t-(i.seen.get(a.id)?.first??s.t)>=n.react&&Qf(s,e.x,e.z,a.x,a.z)&&(i.fireCd<=0&&e.ammo>=1&&o<=l*(e.c.ai==="close"?.95:1)&&(!i.duel||e.c.ai!=="close"||o<=2.2||e.ammo>=2.9)&&(r.fire=Eu(s,e,a,n,i),i.fireCd=(n.tap??.4)*(.8+s.rand()*.4)),i.superOk&&e.superCharge>=1&&o<=Oy(e)&&(r.superFire=Eu(s,e,a,n,i,!0))),i.mode==="walk"){for(;i.path.length&&_t(i.path[0],e)<.35;)i.path.shift();if(i.path.length){const h=i.path[0],u=_t(h,e);let d=(h.x-e.x)/u,f=(h.z-e.z)/u;if(a&&o<l+4){const p=(n.weave??0)*(i.duel&&e.c.ai==="close"?.3:1);d+=-f*i.strafe*p,f+=d*i.strafe*p;const _=Math.hypot(d,f)||1;d/=_,f/=_}r.mx=d,r.mz=f}else r.mx=0,r.mz=0}if(i.mode==="fight"&&a){const h=(a.x-e.x)/o,u=(a.z-e.z)/o,d=i.duel&&e.c.ai==="close"&&o>i.want+.8,f=o<i.want-.8,p=o>i.want+.8?d?1:.7:f?-.8:0,_=d?.35:.85,g=Ey(s,e,h*p-u*i.strafe*_,u*p+h*i.strafe*_);r.mx=g.x,r.mz=g.z}const c=Ty(s,e,i,n.dodge,{x:r.mx,z:r.mz});c&&(r.mx=c.x,r.mz=c.z)}function Ay(s,e,t,n){s.focus??={};const i=s.focus[e];if(i&&s.t<i.until&&t.includes(i.u))return i.u;let r=null,a=1/0;for(const o of t){const c=Math.min(...n.map(h=>_t(h,o)))+o.hp/o.maxHp*4-o.gems*1.2;c<a&&(a=c,r=o)}return r&&(s.focus[e]={u:r,until:s.t+2}),r}function Ry(s,e,t,n){e.input;const i=s.rand()<n.iq,r=s.units.length===2,a=e.team==="blue"?"red":"blue",o=e.team==="blue"?-1:1,l=s.units.filter(L=>L.team!==e.team&&$n(s,e.team,L)),c=s.units.filter(L=>L.team===e.team&&L.alive&&L!==e),h=[e,...c],u=Hc(e),d=e.hp/e.maxHp,f=s.spawns[e.team][e.k],p={x:f.x,z:f.z-o*3},_=Ua(s,e.team),g=Ua(s,a),m=s.countdown?.team===e.team,y=s.countdown?.team===a;for(const L of l)!t.seen.has(L.id)||s.t-t.seen.get(L.id).last>1.5?t.seen.set(L.id,{first:s.t,last:s.t}):t.seen.get(L.id).last=s.t;let x=null,M=1/0;for(const L of l){const D=_t(L,e);D<M&&(M=D,x=L)}let C=x,S=M;if(i&&l.length&&!ri.has("focus")){const L=y?l.reduce((D,O)=>O.gems>D.gems?O:D):Ay(s,e.team,l,h);L&&_t(L,e)<=u&&(C=L,S=_t(L,e))}const T=C&&Qf(s,e.x,e.z,C.x,C.z);if(t.duel=r,t.e=C,t.superOk=s.rand()<n.superUse,i&&!r&&!ri.has("heal")&&(d<.4||t.healing&&d<.85)&&!(C&&C.hp/C.maxHp<.25&&S<u))return t.healing=!0,pn(s,e,t,Cy(s,e,c,l,p,o));if(t.healing=!1,!i&&d<.35&&C&&S<u+3)return pn(s,e,t,p);if(r?!1:i&&!ri.has("carry")?e.gems>=vy&&_>=s.rules.gemWin-2&&_>=g:e.gems>=4&&_>=s.rules.gemWin-2&&_>=g){if(C&&S<u+2)return pn(s,e,t,p);const L=c.length?Py(c):{x:f.x,z:(f.z+s.mine.z)/2};return pn(s,e,t,{x:L.x+(s.rand()-.5)*3,z:L.z-o*(3+s.rand()*2)})}if(i&&C&&!ri.has("pack")){const L=l.filter(O=>_t(O,e)<u+3).length,D=c.filter(O=>_t(O,e)<Sy).length;if(L>=2&&D===0&&c.length)return pn(s,e,t,Iy(c,e))}if(i&&!r&&m&&!ri.has("hold")&&!(C&&S<u+1)){const L={x:s.mine.x+(e.k-1)*3,z:s.mine.z-o*4};if(_t(L,e)>1.5)return pn(s,e,t,L)}if(r&&i&&!(e.c.ai==="far"&&C?.c.ai==="close")){let L=null,D=My;for(const O of s.gems){const X=_t(O,e);X<D&&(!C||S>2.5||_t(C,O)>X)&&(D=X,L=O)}if(L)return pn(s,e,t,L)}if(C&&S<u*1.5+2){const L=e.c.ai==="close"?bu.close:u*(r&&e.c.ai==="far"?.96:bu[e.c.ai]);if(r&&e.c.ai==="far"&&C.c.ai==="close"&&S<yy&&T){t.mode="fight",t.want=u;return}if(S>L+.8||!T)return pn(s,e,t,C);t.mode="fight",t.want=L;return}if(i&&y&&!ri.has("hunt")){const L=s.units.filter(O=>O.team===a&&O.alive).reduce((O,X)=>!O||X.gems>O.gems?X:O,null),D=L&&$n(s,e.team,L)?L:{x:s.mine.x+(e.k-1)*2,z:s.mine.z+o*5};return pn(s,e,t,D)}let N=null,v=1/0;for(const L of s.gems){const D=_t(L,e);i&&!r&&!ri.has("gem")&&l.some(O=>_t(O,L)<D-1)&&!c.some(O=>_t(O,L)<D+2)||D<v&&(v=D,N=L)}if(N&&v<14)return pn(s,e,t,N);const E={x:s.mine.x+(e.k-1)*2.2,z:s.mine.z-o*2.2};return pn(s,e,t,i&&!ri.has("bush")?Ly(s,E,2.5)??E:E)}function Cy(s,e,t,n,i,r){if(!t.length||!n.length)return i;const a=t.reduce((o,l)=>Math.min(...n.map(c=>_t(c,l)))>Math.min(...n.map(c=>_t(c,o)))?l:o);return{x:a.x,z:a.z-r*2.5}}const Py=s=>({x:s.reduce((e,t)=>e+t.x,0)/s.length,z:s.reduce((e,t)=>e+t.z,0)/s.length}),Iy=(s,e)=>s.reduce((t,n)=>!t||_t(n,e)<_t(t,e)?n:t,null);function Ly(s,e,t){let n=null,i=1/0;for(let r=Math.floor(e.z-t);r<=e.z+t;r++)for(let a=Math.floor(e.x-t);a<=e.x+t;a++){const o={x:a+.5,z:r+.5};if(!Jf(s,o.x,o.z))continue;const l=_t(o,e);l<i&&l<=t&&(i=l,n=o)}return n}function pn(s,e,t,n){t.mode="walk",t.path=xy(s,e.x,e.z,n.x,n.z),t.path.length&&(t.path[t.path.length-1]={x:n.x,z:n.z})}const Dy=.4;function Ny(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Uy({picks:s,player:e=0,tier:t,tiers:n,brains:i,seed:r=1,names:a}){const o=_y(),l=o.length,c=o[0].length,h={blue:[],red:[]};let u={x:c/2,z:l/2};for(let f=0;f<l;f++)for(let p=0;p<c;p++){const _=o[f][p];_==="1"&&h.red.push({x:p+.5,z:f+.5}),_==="2"&&h.blue.push({x:p+.5,z:f+.5}),_==="M"&&(u={x:p+.5,z:f+.5})}const d={t:0,areas:[],map:o,W:c,H:l,mine:u,spawns:h,units:[],bullets:[],gems:[],events:[],rules:s.blue.length===1?{..._n,...py}:_n,mineT:2,countdown:null,over:!1,winner:null,rand:Ny(r),tier:t,nextId:1};for(const f of["blue","red"])s[f].forEach((p,_)=>{const g=$a[p],m=s[f].length===1?1:_,y=h[f][m];d.units.push({id:d.nextId++,team:f,cid:p,c:g,k:m,x:y.x,z:y.z,vx:0,vz:0,face:f==="blue"?-Math.PI/2:Math.PI/2,hp:g.hp,maxHp:g.hp,slowT:0,slowAbs:0,ammo:g.ammo,superCharge:0,gems:0,alive:!0,respawnT:0,lastHurt:-99,lastShot:-99,revealT:-99,queue:[],dash:null,moved:0,kills:0,isPlayer:f==="blue"&&_===e,name:a?.[f]?.[_]??g.name,input:{mx:0,mz:0,fire:null,superFire:null},ai:null,tier:n?.[f]??t,brain:i?.[f]??wy})});return d}const En=(s,e,t)=>e<0||t<0||e>=s.W||t>=s.H||s.map[t][e]==="#"||s.map[t][e]==="N"||s.map[t][e]==="W",$l=(s,e,t)=>e<0||t<0||e>=s.W||t>=s.H||s.map[t][e]==="#"||s.map[t][e]==="N",Jf=(s,e,t)=>s.map[Math.floor(t)]?.[Math.floor(e)]==="B";function Tu(s,e,t,n){for(let i=Math.floor(t-n);i<=Math.floor(t+n);i++)for(let r=Math.floor(e-n);r<=Math.floor(e+n);r++){if(!En(s,r,i))continue;const a=Math.max(r,Math.min(e,r+1)),o=Math.max(i,Math.min(t,i+1));if((e-a)**2+(t-o)**2<n*n)return!0}return!1}function Vo(s,e,t,n){const i=e.x,r=e.z,a=Dy;return Tu(s,e.x+t,e.z,a)||(e.x+=t),Tu(s,e.x,e.z+n,a)||(e.z+=n),Math.hypot(e.x-i,e.z-r)}function Qf(s,e,t,n,i){const r=Math.hypot(n-e,i-t),a=Math.ceil(r/.2);for(let o=1;o<a;o++){const l=e+(n-e)*o/a,c=t+(i-t)*o/a;if($l(s,Math.floor(l),Math.floor(c)))return!1}return!0}function $n(s,e,t){return t.alive?t.team===e||!Jf(s,t.x,t.z)||s.t-t.revealT<_n.revealAfterShot?!0:s.units.some(n=>n.alive&&n.team===e&&Math.hypot(n.x-t.x,n.z-t.z)<_n.bushSee):!1}const Ua=(s,e)=>s.units.reduce((t,n)=>t+(n.team===e&&n.alive?n.gems:0),0),Hc=s=>s.c.attack.range;function Oy(s){const e=s.c.super;return e.kind==="dash"?e.dist+.5:e.range}function Zl(s,e,t,n,i){s.bullets.push({x:e.x+Math.cos(t)*.45,z:e.z+Math.sin(t)*.45,vx:Math.cos(t)*n.speed,vz:Math.sin(t)*n.speed,ang:t,dmg:n.dmg,range:n.range,went:0,size:n.size,team:e.team,owner:e,isSuper:i,kind:n.kind,near:n.near,full:n.full??1,hitR:n.hitR??n.size,pierce:n.kind==="pierce"||!!n.pierce,passWalls:!!n.passWalls,hit:new Set})}function wu(s,e,t,n){const i=n?e.c.super:e.c.attack;if(e.lastShot=s.t,e.revealT=s.t,e.face=t,s.events.push({type:n?"super":"shot",u:e,ang:t}),i.kind==="burst")for(let r=0;r<i.n;r++)e.queue.push({at:s.t+r*i.gap,ang:t+(s.rand()-.5)*2*i.spread,spec:i,isSuper:n});else if(i.kind==="spread")for(let r=0;r<i.n;r++)Zl(s,e,t+(r/(i.n-1)-.5)*i.arc,i,n);else i.kind==="dash"?e.dash={left:i.time,vx:Math.cos(t)*i.dist/i.time,vz:Math.sin(t)*i.dist/i.time,hit:new Set,spec:i}:Zl(s,e,t,i,n)}const Au=(s,e)=>{s?.alive&&(s.superCharge=Math.min(1,s.superCharge+e/my))};function Ru(s,e,t,n,i){e.alive&&(t=Math.round(t),e.hp-=t,e.lastHurt=s.t,n&&Au(n,t*(i?n.c.superSuperMul:n.c.superMul)),e.c.takenMul&&Au(e,t*e.c.takenMul*(e.c.superMul??1)),s.events.push({type:"hit",u:e,dmg:t,from:n}),e.hp<=0&&Fy(s,e,n))}function Fy(s,e,t){e.alive=!1,e.hp=0,e.slowT=0,e.respawnT=_n.respawn,e.queue.length=0,e.dash=null,t&&t.kills++;for(let n=0;n<e.gems;n++){const i=s.rand()*Math.PI*2,r=1.2+s.rand()*1.6;s.gems.push({x:e.x,z:e.z,vx:Math.cos(i)*r,vz:Math.sin(i)*r,age:0})}s.events.push({type:"death",u:e,from:t,gems:e.gems}),e.gems=0}function By(s,e){const t=s.spawns[e.team][e.k];Object.assign(e,{x:t.x,z:t.z,hp:e.maxHp,ammo:e.c.ammo,alive:!0,lastHurt:-99,lastShot:-99}),s.events.push({type:"spawn",u:e})}function zy(s,e){if(s.over)return;s.t+=e;for(const r of s.units){if(!r.alive){r.respawnT-=e,r.respawnT<=0&&By(s,r);continue}r.isPlayer||r.brain(s,r,e);const a=r.input;let o=a.mx,l=a.mz;const c=Math.hypot(o,l);c>1&&(o/=c,l/=c);let h;if(r.dash){h=Vo(s,r,r.dash.vx*e,r.dash.vz*e);for(const u of s.units)if(u.alive&&u.team!==r.team&&!r.dash.hit.has(u)&&Math.hypot(u.x-r.x,u.z-r.z)<r.c.r+u.c.r){r.dash.hit.add(u),Ru(s,u,r.dash.spec.dmg,r,!0),u.alive&&s.events.push({type:"push",u,from:r});const d=Math.hypot(u.x-r.x,u.z-r.z)||1;Vo(s,u,(u.x-r.x)/d*r.dash.spec.push*.5,(u.z-r.z)/d*r.dash.spec.push*.5)}if(r.dash.left-=e,r.dash.left<=0||h<1e-4){const u=r.dash.spec;u.slowR&&s.areas.push({x:r.x,z:r.z,r:u.slowR,left:u.slowArea,team:r.team,time:u.slowTime,abs:u.slowAbs}),r.dash=null}r.vx=0,r.vz=0}else{const u=r.slowT>0?Math.max(.3,r.c.speed-r.slowAbs):r.c.speed;h=Vo(s,r,o*u*e,l*u*e),r.vx=o*u,r.vz=l*u,c>.1&&s.t-r.lastShot>.35&&(r.face=Math.atan2(l,o))}for(r.moved+=h,a.superFire!=null&&r.superCharge>=1&&!r.dash?(r.superCharge=0,wu(s,r,a.superFire,!0)):a.fire!=null&&r.ammo>=1&&!r.dash&&!r.queue.length&&s.t-r.lastShot>=(r.c.attack.cooldown||0)&&(r.ammo-=1,wu(s,r,a.fire,!1)),a.fire=null,a.superFire=null;r.queue.length&&r.queue[0].at<=s.t;){const u=r.queue.shift();Zl(s,r,u.ang,u.spec,u.isSuper)}r.ammo<r.c.ammo&&!r.queue.length&&(r.ammo=Math.min(r.c.ammo,r.ammo+e/r.c.reload)),r.hp<r.maxHp&&s.t-r.lastHurt>_n.regenDelay&&s.t-r.lastShot>_n.regenDelay&&(r.hp=Math.min(r.maxHp,r.hp+r.maxHp*_n.regenRate*e))}for(const r of s.areas){r.left-=e;for(const a of s.units)a.alive&&a.team!==r.team&&Math.hypot(a.x-r.x,a.z-r.z)<r.r&&(a.slowT=r.time,a.slowAbs=r.abs)}s.areas=s.areas.filter(r=>r.left>0);for(const r of s.units)r.slowT>0&&(r.slowT-=e);for(const r of s.bullets){const a=Math.max(1,Math.ceil(Math.hypot(r.vx,r.vz)*e/.2));for(let o=0;o<a&&!r.dead;o++){if(r.x+=r.vx*e/a,r.z+=r.vz*e/a,r.went+=Math.hypot(r.vx,r.vz)*e/a,r.went>=r.range){r.dead=!0,s.events.push({type:"fizzle",b:r});break}if(r.isSuper){const l=Math.floor(r.x),c=Math.floor(r.z),h=s.map[c]?.[l];(h==="#"||h==="B")&&l>0&&c>0&&l<s.W-1&&c<s.H-1&&(s.map[c][l]=".",s.events.push({type:"destroy",i:l,j:c,kind:h}))}if(r.passWalls?$l(s,Math.floor(r.x),Math.floor(r.z))&&(r.x<0||r.z<0||r.x>=s.W||r.z>=s.H):$l(s,Math.floor(r.x),Math.floor(r.z))){r.dead=!0,s.events.push({type:"wall",b:r});break}for(const l of s.units)if(!(!l.alive||l.team===r.team||r.hit.has(l))&&Math.hypot(l.x-r.x,l.z-r.z)<l.c.r+r.hitR){r.hit.add(l);const c=r.kind==="snipe"?r.dmg*(r.near+(1-r.near)*Math.min(1,r.went/r.range/r.full)):r.dmg;if(Ru(s,l,c,r.owner,r.isSuper),!r.pierce){r.dead=!0;break}}}}if(s.bullets=s.bullets.filter(r=>!r.dead),s.mineT-=e,s.mineT<=0){s.mineT+=_n.gemEvery;const r=s.rand()*Math.PI*2;s.gems.push({x:s.mine.x,z:s.mine.z,vx:Math.cos(r)*1.4,vz:Math.sin(r)*1.4,age:0}),s.events.push({type:"gemspawn"})}for(const r of s.gems){if(r.age+=e,r.vx||r.vz){const a=r.x+r.vx*e,o=r.z+r.vz*e;En(s,Math.floor(a),Math.floor(o))?r.vx=r.vz=0:(r.x=a,r.z=o);const l=Math.max(0,1-3.5*e);r.vx*=l,r.vz*=l,Math.hypot(r.vx,r.vz)<.05&&(r.vx=r.vz=0)}if(!(r.age<.35)){for(const a of s.units)if(a.alive&&Math.hypot(a.x-r.x,a.z-r.z)<.7){a.gems++,r.taken=!0,s.events.push({type:"gem",u:a});break}}}s.gems=s.gems.filter(r=>!r.taken);const t=Ua(s,"blue"),n=Ua(s,"red"),i=t>=s.rules.gemWin&&t>n?"blue":n>=s.rules.gemWin&&n>t?"red":null;i?!s.countdown||s.countdown.team!==i?(s.countdown={team:i,left:s.rules.countdown},s.events.push({type:"countdown",team:i})):(s.countdown.left-=e,s.countdown.left<=0&&Cu(s,i)):(s.countdown&&s.events.push({type:"countdownStop"}),s.countdown=null),!s.over&&s.t>=_n.time&&Cu(s,t>n?"blue":n>t?"red":"draw")}function Cu(s,e){s.over=!0,s.winner=e,s.events.push({type:"end",winner:e})}const Fi={rimDark:3111484,wallSide:13924916,blue:3711999,red:16730698,gem:11820287,gemGlow:14725375},xa=new Map;function ed(s,e={}){const t=s+JSON.stringify(e);if(xa.has(t)&&!e.unique)return xa.get(t);const n=new hi({color:s,...e.vc?{vertexColors:!0}:{},...e.map?{map:e.map}:{}});return e.emissive&&(n.emissive.setHex(e.emissive),n.emissiveIntensity=e.ei??1),e.opacity!==void 0&&(n.transparent=!0,n.opacity=e.opacity,n.depthWrite=!1),e.unique||xa.set(t,n),n}const ky=s=>[...xa.values()].includes(s);function Go(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t);const a=new Ds(n);return a.colorSpace=dt,a}function $t(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Za(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Mt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Pu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const p=Pu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Pu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new yt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Iu(s,e){if(e===up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Hl||e===pf){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Hl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class td extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=rr.extractUrlBase(e);a=rr.resolveURL(c,this.path)}else a=rr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===nd){try{a[Ke.KHR_BINARY_GLTF]=new aM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Gy;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new oM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new lM;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new cM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Hy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Vy{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ct);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jv(h),c.distance=u;break;case"spot":c=new $v(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Gy{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ut}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ct),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class Wy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Xy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ct)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],Ct),Promise.all(r)}}class Zy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Jy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],Ct),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class nM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class rM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new De,g=new I,m=new Ft,y=new I(1,1,1),x=new Xa(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(g,m,y));for(const M in l)if(M==="_COLOR_0"){const C=l[M];x.instanceColor=new Wl(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const nd="glTF",js=12,Lu={JSON:1313821514,BIN:5130562};class aM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-js,r=new DataView(e,js);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Lu.JSON){const c=new Uint8Array(e,js+a,o);this.content=n.decode(c)}else if(l===Lu.BIN){const c=js+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Jl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Jl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=vs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}u(f)},o,c,Ct,d)})})}}class lM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cM{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class id extends br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,y=1-g,x=m-d+u;for(let M=0;M!==o;M++){const C=a[_+M+o],S=a[_+M+l]*h,T=a[p+M+o],P=a[p+M]*h;r[M]=y*C+x*S+g*T+m*P}return r}}const hM=new Ft;class uM extends id{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hM.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Du={9728:Lt,9729:Ht,9984:nf,9985:ha,9986:Js,9987:Wn},Nu={33071:ui,33648:wa,10497:bs},Wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fM={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},Xo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),s.DefaultMaterial}function Ci(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function mM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gM(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qo(t.attributes):e=s.indices+":"+qo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qo(s.targets[n]);return e}function qo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ql(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _M(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const xM=new De;class vM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new $f(this.options.manager):this.textureLoader=new ey(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ci(r,o,i),Vn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(rr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Wo[i.type],o=vs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new yt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Wo[i.type],c=vs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,m*f,i.count*f/h),x=new Df(_,f/h),t.cache.add(y,x)),g=new dr(x,l,d%f/h,p)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),g=new yt(_,l,p);if(i.sparse!==void 0){const m=Wo.SCALAR,y=vs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,C=new y(a[1],x,i.sparse.count*m),S=new c(a[2],M,i.sparse.count*l);o!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,P=C.length;T<P;T++){const N=C[T];if(g.setX(N,S[T*l]),l>=2&&g.setY(N,S[T*l+1]),l>=3&&g.setZ(N,S[T*l+2]),l>=4&&g.setW(N,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Du[d.magFilter]||Ht,h.minFilter=Du[d.minFilter]||Wn,h.wrapS=Nu[d.wrapS]||bs,h.wrapT=Nu[d.wrapT]||bs,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const g=new St(_);g.needsUpdate=!0,d(g)}),t.load(rr.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Vn(u,a),u.userData.mimeType=a.mimeType||_M(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ff,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Of,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ct),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);const h=r.alphaMode||Xo.OPAQUE;if(h===Xo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ut&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ut&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ut){const u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&a!==ut&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ci(i,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Uu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=gM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Uu(new Mt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?dM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=a[f];let m;const y=c[f];if(g.mode===en.TRIANGLES||g.mode===en.TRIANGLE_STRIP||g.mode===en.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Qx(_,y):new je(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===en.TRIANGLE_STRIP?m.geometry=Iu(m.geometry,pf):g.mode===en.TRIANGLE_FAN&&(m.geometry=Iu(m.geometry,Hl));else if(g.mode===en.LINES)m=new nv(_,y);else if(g.mode===en.LINE_STRIP)m=new Cc(_,y);else if(g.mode===en.LINE_LOOP)m=new iv(_,y);else if(g.mode===en.POINTS)m=new sv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&mM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),g.extensions&&Ci(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ci(i,u[0],r),u[0];const d=new Ot;r.extensions&&Ci(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(wn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let y=0,x=d.length;y<x;y++){const M=d[y],C=f[y],S=p[y],T=_[y],P=g[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const N=n._createAnimationTracks(M,C,S,T,P);if(N)for(let v=0;v<N.length;v++)m.push(N[v])}return new Na(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Uf:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vn(h,r),r.extensions&&Ci(n,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&Ci(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof jt||d instanceof St)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ai[r.path]===ai.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ai[r.path]){case ai.weights:c=Rs;break;case ai.rotation:c=Cs;break;case ai.position:case ai.scale:c=Ps;break;default:switch(n.itemSize){case 1:c=Rs;break;case 2:case 3:default:c=Ps;break}break}const h=i.interpolation!==void 0?fM[i.interpolation]:ur,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+ai[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ql(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Cs?uM:id;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yM(s,e,t){const n=e.attributes,i=new Cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Ql(vs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Ql(vs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Uu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Jl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Vn(s,e),yM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pM(s,e.targets,t):s})}const aa={tip:"#c8ee5a",body:"#8fd24a",root:"#5e9e35"},ec={value:[new se(999,999),new se(999,999),new se(999,999)]},Yo={r:1.5,alpha:.35,edge:.3},sd={value:0};function MM(){const t=document.createElement("canvas");t.width=128,t.height=160;const n=t.getContext("2d"),i=()=>{n.beginPath(),n.moveTo(128*.5,160),n.bezierCurveTo(128*.3,160*.8,0,160*.7,0,160*.4),n.bezierCurveTo(0,160*.1,128*.22,0,128*.5,0),n.bezierCurveTo(128*.78,0,128,160*.1,128,160*.4),n.bezierCurveTo(128,160*.7,128*.7,160*.8,128*.5,160),n.closePath()};i();const r=n.createLinearGradient(0,160,0,0);r.addColorStop(0,aa.root),r.addColorStop(.5,aa.body),r.addColorStop(.86,aa.body),r.addColorStop(1,aa.tip),n.fillStyle=r,n.fill(),n.save(),i(),n.clip(),n.strokeStyle="rgba(255,255,220,0.32)",n.lineWidth=4,n.beginPath(),n.moveTo(128*.5,160*.94),n.lineTo(128*.5,160*.1),n.stroke(),n.strokeStyle="rgba(40,90,20,0.3)",n.lineWidth=3,n.stroke(),n.restore(),i(),n.strokeStyle="rgba(60,120,30,0.55)",n.lineWidth=3,n.stroke();const a=new Ds(t);return a.colorSpace=dt,a.anisotropy=4,a}function SM(s,e){const t=new ut({map:e,alphaTest:.5,side:sn,color:15269808}),n=new Vt(.13,.17),i=[];for(let a=0;a<24;a++){const o=new je(n,t);o.visible=!1,s.add(o),i.push({m:o,life:0,vx:0,vy:0,vz:0,spin:0})}let r=0;return{burst(a,o,l=5){for(let c=0;c<l;c++){const h=i[r++%i.length],u=Math.random()*6.28;h.life=.6,h.vx=Math.cos(u)*1.1,h.vz=Math.sin(u)*1.1,h.vy=2+Math.random()*1.2,h.spin=(Math.random()-.5)*12,h.m.position.set(a+(Math.random()-.5)*.5,.5,o+(Math.random()-.5)*.5),h.m.rotation.set(-.6,u,0),h.m.visible=!0}},update(a){for(const o of i)if(!(o.life<=0)){if(o.life-=a,o.life<=0){o.m.visible=!1;continue}o.vy-=7*a,o.m.position.x+=o.vx*a,o.m.position.z+=o.vz*a,o.m.position.y=Math.max(.05,o.m.position.y+o.vy*a),o.m.rotation.z+=o.spin*a,o.m.scale.setScalar(Math.min(1,o.life*4))}},dispose(){n.dispose(),t.dispose()}}}const tc="./art/env/kaykit/",bM={bushL:["Bush_4_C_Color1","f"],bushM:["Bush_4_B_Color1","f"],bushW:["Bush_4_D_Color1","f"],tree1:["Tree_1_A_Color1","f"],tree1b:["Tree_1_B_Color1","f"],tree2:["Tree_2_A_Color1","f"],tree3:["Tree_3_A_Color1","f"],tree4:["Tree_4_A_Color1","f"],rockA:["Rock_1_A_Color1","f"],rockB:["Rock_2_B_Color1","f"],rockC:["Rock_3_C_Color1","f"],block:["barrier_1x1x1","p"],crate:["platform_wood_1x1x1","p"],rail:["railing_straight_double_yellow","p"],flagRed:["flag_A_red","p"],flagBlue:["flag_A_blue","p"]},nc={};let Ko=null,ar=null,rd=null,va=null,ad=null;const Ou=s=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("이미지 "+s)),n.src=s});async function EM(){const[s,e]=await Promise.all([Ou(tc+"forest_texture.png"),Ou(tc+"platformer_texture.png")]),t=document.createElement("canvas");t.width=1024,t.height=2048;const n=t.getContext("2d");n.drawImage(s,0,0,1024,1024),n.drawImage(e,0,1024,1024,1024);const i=new Ds(t);return i.flipY=!1,i.colorSpace=dt,i.anisotropy=4,i.userData.shared=!0,i}function TM(s,e,t){return[e,(t+1)/2]}function wM(s,e=16777215,t=.74){s.computeBoundingBox();const n=s.boundingBox.max.y||1,i=s.attributes.position,r=new Float32Array(i.count*3),a=new Se(e);for(let o=0;o<i.count;o++){const l=wn.smoothstep(i.getY(o)/n,0,.4),c=t+(1-t)*l;r[o*3]=c*a.r,r[o*3+1]=c*a.g,r[o*3+2]=c*a.b}return s.setAttribute("color",new yt(r,3)),s}function od(s){s.computeBoundingBox();const e=s.boundingBox;return s.translate(-(e.min.x+e.max.x)/2,-e.min.y,-(e.min.z+e.max.z)/2)}async function AM(s,[e,t]){const n=await s.loadAsync(`${tc}${e}.gltf`);n.scene.updateMatrixWorld(!0);const i=[];n.scene.traverse(o=>{if(o.isMesh){const l=o.geometry.clone().applyMatrix4(o.matrixWorld);for(const c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);i.push(l)}});const r=i.length>1?Za(i):i[0],a=r.attributes.uv;for(let o=0;o<a.count;o++)a.setY(o,t==="f"?a.getY(o)/2:(a.getY(o)+1)/2);return r.userData.shared=!0,od(r)}async function RM(){if(Ko)return;Ko=await EM();const s=new td;await Promise.all(Object.entries(bM).map(async([l,c])=>{nc[l]=await AM(s,c)}));const e=await s.loadAsync("./models/forest/cat.glb");let t;e.scene.traverse(l=>{l.isMesh&&!t&&(l.updateWorldMatrix(!0,!1),t=l.geometry.clone().applyMatrix4(l.matrixWorld))});for(const l of Object.keys(t.attributes))["position","normal"].includes(l)||t.deleteAttribute(l);const[n,i]=TM("p",.5,.5),r=t.attributes.position.count,a=new Float32Array(r*2);for(let l=0;l<r;l++)a[l*2]=n,a[l*2+1]=i;t.setAttribute("uv",new yt(a,2)),t.userData.shared=!0,nc.cat=od(t);const o=new Ac(new Uint8Array([96,96,96,255,176,176,176,255,255,255,255,255]),3,1);o.minFilter=o.magFilter=Lt,o.needsUpdate=!0,o.userData.shared=!0,ar=new gu({map:Ko,vertexColors:!0,gradientMap:o}),ar.userData.shared=!0,rd=Fu(ar),va=new gu({vertexColors:!0,gradientMap:o}),va.userData.shared=!0,ad=Fu(va)}const jo=new Map;function Ut(s,{w:e,h:t,d:n,tint:i,lo:r,key:a}={}){const o=a||[s,e,t,n,i,r].join("|");if(!jo.has(o)){const l=nc[s].clone();l.computeBoundingBox();const c=l.boundingBox,h=e?e/(c.max.x-c.min.x):1;l.scale(h,t?t/(c.max.y-c.min.y):h,n?n/(c.max.z-c.min.z):h),wM(l,i,r),l.userData.shared=!0,jo.set(o,l)}return jo.get(o)}const CM=()=>ar,PM=()=>rd,IM=()=>va,LM=()=>ad;function Fu(s){const e=s.clone();return e.transparent=!0,e.userData.shared=!0,e.onBeforeCompile=t=>{t.uniforms.uWind=sd,t.uniforms.uAlly=ec,t.uniforms.uAllyR={value:[Yo.r,Yo.alpha,Yo.edge]},t.fragmentShader=`uniform vec2 uAlly[3]; uniform vec3 uAllyR; varying vec2 vWxz;
`+t.fragmentShader.replace("#include <opaque_fragment>",`
      { float k = 1.0; for (int i = 0; i < 3; i++) k = min(k, mix(uAllyR.y, 1.0, smoothstep(uAllyR.x - uAllyR.z, uAllyR.x, distance(vWxz, uAlly[i])))); diffuseColor.a *= k; }
      #include <opaque_fragment>`),t.vertexShader=`uniform float uWind; varying vec2 vWxz;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      { float hgt = clamp(position.y / 0.7, 0.0, 1.0); vec4 wp = modelMatrix * vec4(transformed, 1.0);
        transformed.x += sin(uWind * 1.7 + wp.x * 1.3 + wp.z * 0.9) * 0.03 * hgt * hgt;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.7 + wp.z * 1.1) * 0.02 * hgt * hgt; vWxz = (modelMatrix * vec4(transformed, 1.0)).xz; }`)},e}function mn(s,e,t,{shadow:n=!0,material:i=ar}={}){if(!t.length)return null;const r=new Xa(e,i,t.length),a=new De,o=new Ft,l=new I(0,1,0);return t.forEach((c,h)=>{o.setFromAxisAngle(l,c.turn||0),a.compose(new I(c.x,c.y||0,c.z),o,new I(c.sx??1,c.sy??c.sx??1,c.sx??1)),r.setMatrixAt(h,a)}),r.castShadow=n,r.receiveShadow=!0,s.add(r),r}const $s=new I;function Qt(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;$s.copy(e),$s[n]=0,$s.normalize();const c=.5*a/(a+o),h=1-$s.angleTo(s)/l;return Math.sign($s[t])===1?h*c:o/(a+o)+c+c*(1-h)}class DM extends Zn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new I,_=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Qt(p,l,"z","y",r,n),d[m+1]=1-Qt(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-Qt(p,l,"z","y",r,n),d[m+1]=1-Qt(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-Qt(p,l,"x","z",r,e),d[m+1]=Qt(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Qt(p,l,"x","z",r,e),d[m+1]=1-Qt(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Qt(p,l,"x","y",r,e),d[m+1]=1-Qt(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=Qt(p,l,"x","y",r,e),d[m+1]=1-Qt(p,l,"y","x",r,t);break}}}const pi=!(typeof location<"u"&&new URLSearchParams(location.search).get("env")==="r25"),ld={w:.96,h:1.06,bevel:.1,rim:.07},NM={stone:{rim:"#f3ecd6",top:"#d8cfb6",side:"#b5ab94",base:"#6f6753"},clay:{rim:"#efc190",top:"#d49c69",side:"#b87a4c",base:"#6a3d26"}},oi={root:"#1f5226",body:"#3f9e32",tip:"#86d444",count:45,span:1.13},ic=(s,e)=>{const t=s.attributes.position,n=s.attributes.normal,i=new Float32Array(t.count*3),r=new Se;for(let a=0;a<t.count;a++)e(r,t.getX(a),t.getY(a),t.getZ(a),n?n.getY(a):0),i[a*3]=r.r,i[a*3+1]=r.g,i[a*3+2]=r.b;return s.setAttribute("color",new yt(i,3)),s};function Bu(s="stone"){const{w:e,h:t,bevel:n,rim:i}=ld,r=NM[s],a=new Se(r.rim),o=new Se(r.side),l=new Se(r.base),c=new DM(e,t,e,3,n).translate(0,t/2,0).toNonIndexed();c.computeVertexNormals(),ic(c,(f,p,_,g,m)=>{const y=_/t;f.copy(o).lerp(l,1-wn.smoothstep(y,.04,.34)),f.lerp(a,wn.smoothstep(y,.86,.97)*.9+wn.smoothstep(m,.2,.85)*.5)});const h=new Zn(e-i*2,.02,e-i*2).translate(0,t+0,0).toNonIndexed();h.computeVertexNormals();const u=new Se(r.top);ic(h,f=>f.copy(u));const d=Za([c,h]);return d.userData.shared=!0,d}function UM(s,e){const t=$t(s*7919+13),n=oi.count,i=7,r=[],a=new Se(oi.root),o=new Se(oi.body),l=new Se(oi.tip),c=oi.span/i,h=[];for(let d=0;d<i;d++)for(let f=0;f<i;f++)h.push([d,f]);h.sort(()=>t()-.5).length=n;for(const[d,f]of h){const p=(d+.5)*c-oi.span/2+(t()-.5)*c*.7,_=(f+.5)*c-oi.span/2+(t()-.5)*c*.7,g=Math.max(Math.abs(p),Math.abs(_))/(oi.span/2),m=e*(.86+t()*.14)*(1-.1*g*g),y=c*(.95+t()*.2),x=new Lc(y,m,6,1,!0).translate(0,m/2,0).toNonIndexed();x.rotateZ((t()-.5)*.22),x.rotateX((t()-.5)*.22),x.rotateY(t()*6.28),x.translate(p,0,_),x.computeVertexNormals();const M=.9+t()*.2;ic(x,(C,S,T)=>{const P=wn.clamp(T/m,0,1);C.copy(a).lerp(o,wn.smoothstep(P,0,.45)).lerp(l,wn.smoothstep(P,.55,1)).multiplyScalar(M)}),r.push(x)}const u=Za(r);return u.userData.shared=!0,u}const hs={};async function OM(){hs.block=Ut("block",{w:.96,h:.98,d:.96,tint:12892835,key:"wall-block"}),hs.crate=Ut("crate",{w:.96,h:.98,d:.96,key:"wall-crate"}),pi&&(hs.block=Bu("stone"),hs.crate=Bu("clay")),hs.cat=Ut("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"})}function FM(s,e,t){const n=s.length,i=s[0].length,r=(h,u)=>h>=0&&u>=0&&h<i&&u<n&&s[u][h]==="#",a=r(e-1,t)+r(e+1,t),o=r(e,t-1)+r(e,t+1),l=$t(e*7919+Math.min(t,n-1-t)*104729)(),c=Math.floor(l*4)*Math.PI/2;return a+o===0?{kind:"cat",turn:0}:a+o===1&&l<.3?{kind:"cat",turn:0}:{kind:l<.62?"block":"crate",turn:c}}function BM(s,e){const{W:t,H:n,map:i}=e,r={block:[],crate:[],cat:[]},a=new Map;for(let f=0;f<n;f++)for(let p=0;p<t;p++)if(i[f][p]==="#"){const _=FM(i,p,f);r[_.kind].push([p,f]),a.set(f*t+p,_.turn)}const o=new Map,l=new De,c=new Ft,h=new I(0,1,0);for(const[f,p]of Object.entries(r)){if(!p.length)continue;const _=new Xa(hs[f],pi&&f!=="cat"?IM():CM(),p.length);_.castShadow=!0,_.receiveShadow=!0,s.add(_),p.forEach(([g,m],y)=>{const x=$t(g*31+m*17+5),M=a.get(m*t+g),C=.97+x()*.06;o.set(m*t+g,{m:_,k:y,x:g+.5,z:m+.5,turn:M,sy:C,t:9,dir:0}),u(_,y,g+.5,m+.5,M,C,1,0,0)})}function u(f,p,_,g,m,y,x,M,C){c.setFromAxisAngle(h,m),l.compose(new I(_+M,0,g+C),c,new I(1+(1-x)*.5,y*x,1+(1-x)*.5)),f.setMatrixAt(p,l)}const d=new Set;return{hit(f,p,_=0,g=0){const m=o.get(Math.floor(p)*t+Math.floor(f));if(!m)return;const y=Math.hypot(_,g)||1;m.t=0,m.dx=_/y,m.dz=g/y,d.add(m)},update(f){for(const p of d){p.t+=f;const _=.12,g=Math.min(1,p.t/_),m=Math.sin(g*Math.PI)*(1-g*.3);u(p.m,p.k,p.x,p.z,p.turn,p.sy,1-.07*m,p.dx*.035*m,p.dz*.035*m),p.m.instanceMatrix.needsUpdate=!0,g>=1&&(d.delete(p),u(p.m,p.k,p.x,p.z,p.turn,p.sy,1,0,0),p.m.instanceMatrix.needsUpdate=!0)}},remove(f,p){const _=o.get(p*t+f);return _?(d.delete(_),o.delete(p*t+f),_.m.setMatrixAt(_.k,new De().makeScale(0,0,0)),_.m.instanceMatrix.needsUpdate=!0,!0):!1},peek:(f,p)=>o.get(p*t+f),kinds:()=>Object.entries(r).filter(([,f])=>f.length).map(([f])=>f),count:()=>r}}function zM(s){const{W:e,H:t,map:n}=s,i=new Ot,r=$t(9090),a=[],o=[],l=Math.ceil(t/2);for(let c=0;c<l;c++)for(let h=0;h<e;h++){if(n[c][h]!==".")continue;const u=[[1,0],[-1,0],[0,1],[0,-1]].some(([x,M])=>n[c+M]?.[h+x]==="#"),d=h===0||h===e-1,f=r();if(!(u&&f<.06||d&&f<.08))continue;const p=(r()-.5)*.5,_=(r()-.5)*.5,g=r()*6.28,m=.8+r()*.4,y=r()<.5;for(const x of c===t-1-c?[c]:[c,t-1-c])(y?a:o).push({x:h+.5+p,z:x+.5+(x===c?_:-_),turn:g,sx:m})}return mn(i,Ut("rockB",{w:.34}),a,{shadow:!1}),mn(i,Ut("rockA",{w:.4}),o,{shadow:!1}),i}const ya=1.35,kM=1.4;function HM(s,e,t,n){const i=(o,l,c,h,u)=>{const d=new Vf;return d.moveTo(o+u,l),d.lineTo(c-u,l),d.quadraticCurveTo(c,l,c,l+u),d.lineTo(c,h-u),d.quadraticCurveTo(c,h,c-u,h),d.lineTo(o+u,h),d.quadraticCurveTo(o,h,o,h-u),d.lineTo(o,l+u),d.quadraticCurveTo(o,l,o+u,l),d},r=i(-t,-t,s+t,e+t,n),a=i(0,0,s,e,.001);return r.holes.push(new Yl(a.getPoints(1).reverse())),r}function VM(s){const{W:e,H:t}=s,n=.22,i=new Nc(HM(e,t,kM,.9),{depth:ya-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:10});i.rotateX(Math.PI/2),i.translate(0,ya-n,0),i.computeVertexNormals();const r=new Se(pi?3111484:4892730),a=new Se(pi?3877408:5913126),o=new Se(pi?1839629:2890772),l=i.attributes.position,c=i.attributes.normal,h=new Float32Array(l.count*3),u=new Se;for(let f=0;f<l.count;f++){const p=wn.smoothstep(c.getY(f),.55,.9);u.copy(a).lerp(o,1-wn.clamp(l.getY(f)/ya,0,1)).lerp(r,p),h.set([u.r,u.g,u.b],f*3)}i.setAttribute("color",new yt(h,3));const d=new je(i,new hi({vertexColors:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}async function GM(){}function WM(s){const{W:e,H:t}=s,n=new Ot,i=$t(91),r=.55,a=ya-.12,o=[],l=[],c=[],h=[],u=[],d=[],f=[[],[],[],[],[]],p=y=>Math.abs(y-e/2)<1.6,_=(y,x,M)=>{const C=M%3,S={x:y+(i()-.5)*.25,y:a,z:x+(i()-.5)*.15,turn:i()*6.28,sx:.85+i()*.3};(C===0?o:C===1?c:l).push(S)};let g=0;for(let y=.5;y<e;y+=.9)p(y)||(_(y,-r,g++),_(y,t+r,g++));for(let y=.5;y<t;y+=.9)_(-r,y,g++),_(e+r,y,g++);for(const[y,x]of[[-r,-r],[e+r,-r],[-r,t+r],[e+r,t+r],[e/2-1.9,-r],[e/2+1.9,-r],[e/2-1.9,t+r],[e/2+1.9,t+r]])h.push({x:y,y:a,z:x,turn:0,sx:1.05});u.push({x:e/2-2.9,y:a,z:-r,turn:0},{x:e/2+2.9,y:a,z:-r,turn:0}),d.push({x:e/2-2.9,y:a,z:t+r,turn:0},{x:e/2+2.9,y:a,z:t+r,turn:0});const m=(y,x,M,C)=>{const S=Math.floor(i()*5),T=x>t?.38:1,P=((C?.5:.42)+i()*.14)*T;f[S].push({x:y+(i()-.5)*.4,y:M,z:x+(i()-.5)*.4,turn:i()*6.28,sx:P,sy:P*(.9+i()*.25)})};for(let y=-1.2;y<e+1.4;y+=1.3)for(const x of[-1.7,t+1.7])m(y,x,a-.1,!1);for(let y=-.2;y<t+1;y+=1.3)for(const x of[-1.7,e+1.7])m(x,y,a-.1,!1);for(let y=-3;y<e+3;y+=1.6)for(const x of[-3.2,t+3.2,-4.6,t+4.6])m(y,x,0,!0);for(let y=-2;y<t+2;y+=1.6)for(const x of[-3.2,e+3.2,-4.6,e+4.6])m(x,y,0,!0);return mn(n,Ut("rockA",{w:.45}),o.filter((y,x)=>x%3===0)),mn(n,Ut("rockB",{w:.4}),l.filter((y,x)=>x%3===0)),mn(n,Ut("bushM",{w:.7}),c),mn(n,Ut("cat",{w:.96,h:1.08,d:.96,tint:12234906,lo:.8,key:"wall-cat"}),h),mn(n,Ut("flagRed",{h:1.6}),u),mn(n,Ut("flagBlue",{h:1.6}),d),["tree1","tree1b","tree2","tree3","tree4"].forEach((y,x)=>mn(n,Ut(y),f[x])),n}const XM=["map","alphaMap","aoMap","emissiveMap","lightMap","normalMap","bumpMap","roughnessMap","metalnessMap"];function qM(s){const e=new Set,t=n=>{!n||e.has(n)||(e.add(n),n.dispose())};s.traverse(n=>{n.geometry?.userData?.shared||t(n.geometry),t(n.skeleton),n.isInstancedMesh&&n.dispose();for(const i of[].concat(n.material||[]))if(!(ky(i)||i.userData?.shared)){for(const r of XM)t(i[r]);t(i)}}),s.removeFromParent()}function YM(s,e,t,n,i){s.fillStyle=i,s.beginPath(),s.ellipse(e,t+.18*n,.5*n,.4*n,0,0,7),s.fill();for(const[r,a,o]of[[-.62,-.28,.2],[-.22,-.62,.22],[.22,-.62,.22],[.62,-.28,.2]])s.beginPath(),s.ellipse(e+r*n,t+a*n,o*n,o*1.2*n,0,0,7),s.fill()}function KM(s,e,t){const{W:n,H:i,map:r,mine:a}=e,o=a.x*t,l=a.z*t,c=3.3*t,h=$t(5),u=Math.floor(i/2),d=[];for(let f=2.4;f<u-3.4;f+=1.15)d.push([n/2,f],[n/2,i-f]);for(const[f,p]of d){if(r[Math.floor(p)]?.[Math.floor(f)]!==".")continue;const _=(f+(h()-.5)*.3)*t,g=p*t,m=t*(.34+h()*.08),y=m*.76;s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.ellipse(_+2,g+4,m,y,0,0,7),s.fill(),s.fillStyle="#a39e84",s.beginPath(),s.ellipse(_,g,m,y,0,0,7),s.fill(),s.fillStyle="#c9c4a8",s.beginPath(),s.ellipse(_-m*.1,g-y*.18,m*.8,y*.7,0,0,7),s.fill()}s.fillStyle="rgba(30,70,30,0.35)",s.beginPath(),s.arc(o+3,l+6,c+4,0,7),s.fill(),s.fillStyle="#8e8a70",s.beginPath(),s.arc(o,l,c,0,7),s.fill(),s.fillStyle="#b3ae92",s.beginPath(),s.arc(o,l,c-.16*t,0,7),s.fill();for(let f=0;f<24;f++){const p=f/24*6.2832;s.save(),s.translate(o+Math.cos(p)*(c-.38*t),l+Math.sin(p)*(c-.38*t)),s.rotate(p),s.fillStyle=f%2?"#aaa58b":"#d8d3b8",s.fillRect(-.2*t,-.1*t,.4*t,.2*t),s.restore()}s.fillStyle="#c4bfa3",s.beginPath(),s.arc(o,l,c*.74,0,7),s.fill(),YM(s,o,l+.2*t,2.1*t,"rgba(120,114,92,0.55)")}const li={a:"#43864f",b:"#478a53",seam:"rgba(60,122,74,0.9)",mine:"#3c7c49",water:"#4cc0e6",rim:"#e8f7ff",leaf:"#7fbf6e",chip:"#d8e6c2"};function jM(s){const{W:e,H:t,map:n}=s,i=48,r=document.createElement("canvas");r.width=e*i,r.height=t*i;const a=r.getContext("2d");for(let f=0;f<t;f++)for(let p=0;p<e;p++)a.fillStyle=p+f&1?li.b:li.a,a.fillRect(p*i,f*i,i,i);if(pi){const f=e*i/2,p=t*i/2,_=Math.hypot(e,t)*i/2;a.fillStyle="rgba(6,24,14,1)";for(const[g,m]of[[.9,.34],[.72,.22],[.52,.1]])a.globalAlpha=m,a.beginPath(),a.rect(0,0,e*i,t*i),a.arc(f,p,_*g*.62,0,7,!0),a.fill("evenodd");a.globalAlpha=1}a.fillStyle=li.mine,a.beginPath(),a.arc(s.mine.x*i,s.mine.z*i,2.5*i,0,7),a.fill(),KM(a,s,i);const o=new Set;for(let f=0;f<t;f++)for(let p=0;p<e;p++)n[f][p]==="W"&&o.add(p+","+f);const l=(f,p,_,g,m,y)=>{a.fillStyle=m,a.beginPath(),a.roundRect(f,p,_,g,y),a.fill()};for(const f of o){const[p,_]=f.split(",").map(Number);l(p*i-.5,_*i-.5,i+1,i+1,li.rim,0)}for(const f of o){const[p,_]=f.split(",").map(Number),g=.12*i,m=o.has(p-1+","+_),y=o.has(p+1+","+_),x=o.has(p+","+(_-1)),M=o.has(p+","+(_+1));l(p*i+(m?0:g),_*i+(x?0:g),i-(m?0:g)-(y?0:g),i-(x?0:g)-(M?0:g),li.water,0)}a.strokeStyle=li.seam,a.lineWidth=1,a.beginPath();for(let f=1;f<e;f++)for(let p=0;p<t;p++)!o.has(f+","+p)&&!o.has(f-1+","+p)&&(a.moveTo(f*i+.5,p*i),a.lineTo(f*i+.5,(p+1)*i));for(let f=1;f<t;f++)for(let p=0;p<e;p++)!o.has(p+","+f)&&!o.has(p+","+(f-1))&&(a.moveTo(p*i,f*i+.5),a.lineTo((p+1)*i,f*i+.5));a.stroke();for(const f of["blue","red"])for(const p of s.spawns[f]){const _=p.x*i,g=p.z*i,m=i*.5;a.fillStyle="rgba(30,80,45,0.55)",a.beginPath(),a.ellipse(_,g,m,m*.92,0,0,7),a.fill(),a.strokeStyle="rgba(210,240,200,0.5)",a.lineWidth=2,a.beginPath(),a.ellipse(_,g+1.5,m,m*.92,0,.15*Math.PI,.85*Math.PI),a.stroke()}const c=$t(2501),h=[],u=(f,p)=>n[p]&&n[p][f]===".";for(let f=0;f<400&&h.length<5;f++){const p=1+Math.floor(c()*(e-2)),_=1+Math.floor(c()*(Math.floor(t/2)-2));u(p,_)&&!h.some(g=>Math.abs(g[0]-p)+Math.abs(g[1]-_)<4)&&h.push([p,_,h.length<3?"leaf":"chip"])}for(const[f,p,_]of[...h,...h.map(([g,m,y])=>[g,t-1-m,y])]){const g=(f+.5)*i,m=(p+.5)*i;if(_==="leaf"){a.fillStyle=li.leaf;for(const[y,x]of[[-.6,.18],[.5,.2],[2.1,.16]])a.save(),a.translate(g+Math.cos(y)*x*i,m+Math.sin(y)*x*i),a.rotate(y),a.beginPath(),a.ellipse(0,0,i*.14,i*.06,0,0,7),a.fill(),a.restore()}else{a.fillStyle=li.chip;for(const[y,x,M]of[[-.15,.05,.12],[.1,-.08,.09],[.16,.12,.07]])a.beginPath(),a.ellipse(g+y*i,m+x*i,i*M,i*M*.75,.3,0,7),a.fill()}}const d=new Ds(r);return d.colorSpace=dt,d.anisotropy=8,d}function $M(s,e){const{W:t,H:n,map:i}=e,r=new Ot;s.add(r);const a=new je(new Vt(t,n),new hi({map:jM(e)}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),a.receiveShadow=!0,r.add(a);const o=new je(new Vt(t+60,n+60),new hi({color:Fi.rimDark}));o.rotation.x=-Math.PI/2,o.position.set(t/2,-.02,n/2),o.receiveShadow=!0,r.add(o),r.add(VM(e)),r.add(WM(e)),r.add(zM(e));const l=BM(r,e);{const S=[];for(let T=0;T<n;T++)for(let P=0;P<t;P++)i[T][P]==="N"&&S.push({x:P+.5,z:T+.5});mn(r,Ut("rail",{w:.98,h:.5,d:.2,key:"fence-rail"}),S)}const c=[],h=MM(),u=pi?LM():PM(),d=SM(r,h),f=pi?[0,1,2].map(S=>UM(S+1,ld.h*.89)):[0,1,2].map(S=>{const T=Ut(S===1?"bushW":"bushL",{w:S===1?1.5:1.22,h:.82,key:"bush-big"+S}),P=Ut("bushM",{w:.62,h:.5,key:"bush-small"+S}).clone();P.translate(S===0?.26:S===1?-.3:.12,0,S===0?.22:S===1?.25:-.3);const N=Za([T.clone(),P]);return N.userData.shared=!0,N});for(let S=0;S<n;S++)for(let T=0;T<t;T++)if(i[S][T]==="B"){const P=new je(f[(T*3+S*5)%3],u);P.position.set(T+.5,0,S+.5),P.rotation.y=$t(T*17+S*5)()*6.28,P.castShadow=!0,P.receiveShadow=!0,r.add(P),c.push({m:P,i:T,j:S,phase:$t(T*31+S)()*6.28,shake:0})}{const S=[];for(let v=0;v<n;v++)for(let E=0;E<t;E++)(i[v][E]==="#"||i[v][E]==="B")&&S.push({x:E+.5,y:.012,z:v+.58});const T=new Vt(1.7,1.7).rotateX(-Math.PI/2),P=new ut({map:Go("rgba(10,36,22,0.72)","rgba(14,48,28,0)",128),transparent:!0,depthWrite:!1}),N=mn(r,T,S,{shadow:!1,material:P});N&&(N.receiveShadow=!1,N.renderOrder=1)}const p=new je(new zi(.9,32),new ut({map:Go("rgba(30,14,48,1)","rgba(30,14,48,0)",128),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(e.mine.x,.03,e.mine.z),r.add(p);const _=new je(new Vt(3.4,3.4),new ut({map:Go("rgba(200,120,255,0.8)","rgba(200,120,255,0)"),transparent:!0,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(e.mine.x,.05,e.mine.z),r.add(_);const g=new je(new Uc(.92,.13,10,32),new hi({color:10123952}));g.rotation.x=-Math.PI/2,g.position.set(e.mine.x,.09,e.mine.z),g.castShadow=!0,g.receiveShadow=!0,r.add(g);const m=$t(3);for(let S=0;S<5;S++){const T=S/5*6.28+.4,P=new je(new Ka(.16+m()*.08,0),ed(12880639,{emissive:8006352,ei:.5}));P.scale.y=1.7,P.position.set(e.mine.x+Math.cos(T)*1.05,.2,e.mine.z+Math.sin(T)*1.05),P.rotation.y=T,P.castShadow=!0,r.add(P)}let y=0;const x=new hi({color:11901546}),M=new hi({color:4160042});function C(S,T,P){const N=(v,E,L,D,O=.05)=>{const X=new je(v,E);return X.position.set(L,O,D),X.receiveShadow=!0,r.add(X),X};if(P==="B"){const v=c.find(E=>E.i===S&&E.j===T);if(!v||v.gone)return;v.gone=!0,r.remove(v.m),d.burst(S+.5,T+.5,10),N(new qa(.3,.34,.04,14),M,S+.5,T+.5,.02)}else{if(!l.remove(S,T))return;for(let v=0;v<5;v++)N(new Zn(.14+v%3*.05,.1,.12),x,S+.2+v*37%60/100,T+.2+v*53%60/100);d.burst(S+.5,T+.5,6)}}return{root:r,glow:_,walls:l,destroy:C,hitWall(S){l.hit(S.x,S.z,S.vx,S.vz)},dispose(){qM(r),d.dispose(),h.dispose()},update(S,T,P,N=[]){const v=Math.min(.1,Math.max(0,S-y));y=S,d.update(v),l.update(v),_.material.opacity=.75+Math.sin(S*3)*.2,sd.value=S;let E=0;for(const D of T)D.alive&&D.team===P&&E<3&&i[Math.floor(D.z)]?.[Math.floor(D.x)]==="B"&&ec.value[E++].set(D.x,D.z);for(;E<3;E++)ec.value[E].set(999,999);const L=new Set;for(const D of N)D.dead||L.add(Math.floor(D.z)*t+Math.floor(D.x));for(const D of c){if(D.gone)continue;let O=!1;for(const te of T)te.alive&&Math.floor(te.x)===D.i&&Math.floor(te.z)===D.j&&(O=!0);const X=L.has(D.j*t+D.i);X&&!D.hit&&(D.shake=1,d.burst(D.i+.5,D.j+.5,4+(D.i+D.j)%3)),D.hit=X,O?D.shake=Math.min(1,D.shake+.2):D.shake*=.92;const z=Math.sin(S*9+D.phase)*.05*D.shake;D.m.rotation.set(z,0,z*.7),D.m.scale.setScalar(1+Math.sin(S*11+D.phase)*.03*D.shake)}}}}async function ZM(s,e,{base:t="./art/",prefix:n="b3"}={}){const i={},r=new Map,a=o=>(r.has(o)||r.set(o,e(o)),r.get(o));for(const[o,l]of Object.entries(s)){if(l.atlas){const d=(_,g,m,y)=>{const x=M=>g.dirs.indexOf(l.src?l.src[M]:M);return Array.from({length:l.dirs},(M,C)=>Array.from({length:m},(S,T)=>{const P=_.clone();return P.repeat.set(1/m,1/y),P.offset.set(T/m,1-(x(C)+1)/y),P.needsUpdate=!0,P}))},f=await a(`${t}${n}_${o}.webp`),p=l.shAtlas&&await a(`${t}${n}sh_${l.shn}.webp`);i[o]={...l,dirs:d(f,l.atlas,l.n,l.atlas.rows),shDirs:p&&d(p,l.shAtlas,l.n,l.shAtlas.rows)};continue}const c={},h=d=>c[d]||=Promise.all(Array.from({length:l.n},(f,p)=>a(`${t}${n}_${o}_d${d}_f${p}.png`))),u=d=>l.src?l.src[d]:d;i[o]={...l,dirs:await Promise.all(Array.from({length:l.dirs},(d,f)=>h(u(f)))),shDirs:l.sh&&await Promise.all(Array.from({length:l.dirs},(d,f)=>Promise.all(Array.from({length:l.n},(p,_)=>a(`${t}${n}sh_${l.shn}_d${u(f)}_f${_}.png`)))))}}return i}function JM(s){return s.userData.f={value:0},s.onBeforeCompile=e=>{e.uniforms.uFlash=s.userData.f,e.fragmentShader=`uniform float uFlash;
`+e.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uFlash);
#include <dithering_fragment>`)},s}const sc={flash:.12,flashPeak:.85,shadowAlpha:.34},Gi=55,cd=Gi*Math.PI/180,hd=Math.sin(cd),Ja=Math.cos(cd),rc=Math.PI/180,Er=.7,zu=sc.shadowAlpha,ku=.35,QM=4,eS=new Vt(1,1),tS=new Vt(1,1).rotateX(-Math.PI/2),nS=new I(0,Ja,-hd),iS=new I(0,hd,Ja);let Gn=null;const sS=new $f,rS=s=>new Promise((e,t)=>sS.load(s,n=>{n.colorSpace=dt,n.generateMipmaps=!1,n.minFilter=n.magFilter=Ht,e(n)},void 0,t));let ud=null;const aS=s=>{ud=s},Vc=()=>Math.cos((ud??(Gn&&Gn.dealer?Gn.dealer.elev:Gi))*rc)/Ja,oS=s=>s.height*Er*Vc()+.2/Ja;async function lS(){const s=await(await fetch("./art/bake3d.json")).json();Gn=await ZM(s,rS,{base:"./art/",prefix:"b3"})}const cS=(s,e)=>s.speed*(s.h/s.bodyPx)*s.cycle*e,hS=(s,e)=>{const t=s.dirs.length,n=Math.atan2(Math.cos(e),Math.sin(e));return(Math.round(n/(2*Math.PI/t))%t+t)%t};function uS(s,e){const t=e.team==="red"&&Gn[e.c.rig+"R"]?e.c.rig+"R":e.c.rig,n=e.c.height*Er,i={walk:Gn[t],shoot:Gn[t+"_shoot"],idle:Gn[t+"_idle"],die:Gn[t+"_die"]},r=new Ot;s.add(r);const a=JM(new ut({transparent:!0,depthWrite:!1,toneMapped:!1}));a.map=i.walk.dirs[0][0];const o=new je(eS,a);o.frustumCulled=!1,o.renderOrder=5,s.add(o);const l=new ut({color:0,transparent:!0,opacity:zu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.walk.shDirs&&(l.map=i.walk.shDirs[0][0]);const c=new je(tS,l);c.frustumCulled=!1,c.renderOrder=2,s.add(c);const h=e.team==="blue"?Fi.blue:Fi.red,u=new je(new _r(.5,.7,40),new ut({color:h,transparent:!0,opacity:e.isPlayer?.95:.85,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,u.renderOrder=3,r.add(u);const d=new je(new zi(.5,40),new ut({color:h,transparent:!0,opacity:.22,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.025,d.renderOrder=3,r.add(d);const f=new je(new _r(.66,.76,40),new ut({color:16765498,transparent:!0,opacity:0,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.035,f.renderOrder=3,r.add(f),{u:e,root:r,body:o,ring:u,superRing:f,mats:[a],x:e.x,z:e.z,face:e.face,kick:0,flash:0,pop:1,lastMoved:e.moved,clock:0,phase:0,shotT:-99,dieT:null,bodyScale:1,state:"idle",onShot(){this.shotT=this.clock},update(_,g,m,y){const x=this.u;this.clock+=_;const M=m&&(x.alive||this.dieT!=null&&this.clock-this.dieT<(i.die?i.die.cycle:.9)+ku);r.visible=o.visible=c.visible=M,x.alive&&this.dieT!=null&&(this.dieT=null,this.pop=0),x.alive?(this.x+=(x.x-this.x)*Math.min(1,_*20),this.z+=(x.z-this.z)*Math.min(1,_*20)):this.dieT==null&&(this.dieT=this.clock),r.position.set(this.x,0,this.z);let C=x.face-this.face;C=Math.atan2(Math.sin(C),Math.cos(C)),this.face+=C*Math.min(1,_*18);const S=x.moved-this.lastMoved,T=S/Math.max(_,1e-4);this.lastMoved=x.moved;const P=x.alive&&T>.3;let N=i.idle||i.walk,v=0,E=1,L="idle";if(!x.alive&&i.die){N=i.die;const q=this.clock-this.dieT;v=Math.min(N.n-1,Math.floor(q/N.cycle*N.n)),E=q<N.cycle?1:Math.max(0,1-(q-N.cycle)/ku),L="die"}else if(x.alive){const q=i.shoot,ne=this.clock-this.shotT+(q?q.hit*q.cycle:0);P?this.run=Math.min(1,(this.run||0)+_*8):this.run=Math.max(0,(this.run||0)-_*8),this.run>.5?(N=i.walk,this.phase=(this.phase+S/cS(N,n))%1,v=Math.floor(this.phase*N.n)%N.n,L="walk"):q&&ne<q.cycle*.96?(N=q,v=Math.min(N.n-1,Math.floor(ne/N.cycle*N.n)),L="shoot"):i.idle?(N=i.idle,v=Math.floor(this.clock/N.cycle%1*N.n)%N.n):(N=i.walk,v=0)}this.state=L;const D=hS(N,this.face),O=N.dirs[D][v];a.map!==O&&(a.map=O),this.flash=Math.max(0,this.flash-_/sc.flash),a.userData.f.value=this.flash*sc.flashPeak,this.pop=Math.min(1,this.pop+_*QM);const X=this.pop,te=(X<1?1+Math.sin(X*Math.PI)*.22:1)*(x.dash?1.1:1)*this.bodyScale,W=(X<1?.6+.4*X:1)*(x.dash?.92:1)*this.bodyScale,fe=Math.sin(N.elev*rc),oe=n*Math.cos(N.elev*rc)/N.bodyPx,he=N.w*oe*te,Ve=N.h*oe*W;o.scale.set(he,Ve,1),o.quaternion.copy(s.userData.cam.quaternion);const Ge=(N.ay-N.h/2)*oe*W;if(o.position.set(this.x,0,this.z).addScaledVector(nS,Ge).addScaledVector(iS,.45),a.opacity=y*E,N.shDirs&&N.sh){const q=N.shDirs[D][v];l.map!==q&&(l.map=q);const[ne,de,ae,be]=N.sh;c.scale.set(ae*oe*te,1,be*oe*W/fe),c.position.set(this.x+(ne+ae/2-N.w/2)*oe*te,.02,this.z+(de+be/2-N.ay)*oe*W/fe),l.opacity=zu*y*E,c.visible=M}else c.visible=!1;f.material.opacity=x.superCharge>=1&&x.alive?.55+Math.sin(g*8)*.35:0,u.material.opacity=(x.isPlayer?.95:.7)*(x.alive?1:0),this.bodyScale=1},dispose(){s.remove(o),s.remove(c),s.remove(r),a.dispose(),l.dispose()}}}function fS(s){const e=new Map,t=new Map,n=s.clone();return fd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function fd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)fd(s.children[n],e.children[n],t)}const or={sat:2.4,lift:1};{const s=new URLSearchParams(location.search).get("lk");if(s){const[e,t]=s.split(",").map(Number);Object.assign(or,{sat:e??or.sat,lift:t??or.lift})}}function dS(s){s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    { vec3 c = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2));
      float l = dot(c, vec3(0.299, 0.587, 0.114)); c = clamp(mix(vec3(l), c, ${or.sat.toFixed(3)}), 0., 1.);
      c = mix(c, 1. - (1. - c) * (1. - c), ${or.lift.toFixed(3)});
      diffuseColor.rgb = pow(c, vec3(2.2)); }`)}const $o={frac:.0019,minPx:1.3,color:1315356},dd=1,pd=2,pS="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",mS=`varying vec2 vUv; uniform sampler2D tMask; uniform vec2 uTexel; uniform float uRad; uniform vec3 uColor;
void main(){
  float m = texture2D(tMask, vUv).r, d = m;
  for (int i = 0; i < 8; i++) { float a = float(i) * 0.7853982; vec2 o = vec2(cos(a), sin(a)) * uTexel;
    d = max(d, texture2D(tMask, vUv + o * uRad).r); d = max(d, texture2D(tMask, vUv + o * uRad * 0.5).r); }
  float k = clamp(d - m, 0., 1.); if (k < 0.01) discard; gl_FragColor = vec4(uColor, k); }`;function gS(s,e){const t=[];for(let a=0;a<e.H;a++)for(let o=0;o<e.W;o++)e.map[a][o]==="#"&&t.push([o,a]);const n=new Zn(1,.95,1).translate(0,.475,0),i=new Xa(n,new ut,Math.max(1,t.length)),r=new De;return t.forEach(([a,o],l)=>{r.setPosition(a+.5,0,o+.5),i.setMatrixAt(l,r)}),i.count=t.length,i.layers.set(pd),i.frustumCulled=!1,s.add(i),{mesh:i,dispose(){s.remove(i),n.dispose(),i.material.dispose(),i.dispose()}}}function _S(s,e,t){const n=new xi(2,2,{samples:4,depthBuffer:!0}),i=new ut({color:16777215}),r=new ut({colorWrite:!1}),a=new jn({vertexShader:pS,fragmentShader:mS,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:n.texture},uTexel:{value:new se},uRad:{value:1},uColor:{value:new Se($o.color)}}}),o=new Mt;o.setAttribute("position",new ot([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new ot([0,0,2,0,0,2],2));const l=new je(o,a);l.frustumCulled=!1;const c=new Lf;c.add(l);const h=new Sr(-1,1,1,-1,0,1),u=new se;return{render(){s.render(e,t),s.getDrawingBufferSize(u),(n.width!==u.x||n.height!==u.y)&&(n.setSize(u.x,u.y),a.uniforms.uTexel.value.set(1/u.x,1/u.y)),a.uniforms.uRad.value=Math.max($o.minPx,$o.frac*u.y);const d=e.background,f=s.autoClear,p=s.shadowMap.autoUpdate,_=t.layers.mask;e.background=null,s.shadowMap.autoUpdate=!1,s.setRenderTarget(n),s.setClearColor(0,1),s.clear(!0,!0,!1),s.autoClear=!1,t.layers.set(pd),e.overrideMaterial=r,s.render(e,t),t.layers.set(dd),e.overrideMaterial=i,s.render(e,t),e.overrideMaterial=null,t.layers.mask=_,e.background=d,s.shadowMap.autoUpdate=p,s.setRenderTarget(null),s.render(c,h),s.autoClear=f},dispose(){n.dispose(),i.dispose(),r.dispose(),a.dispose(),o.dispose()}}}const Oa=new URLSearchParams(location.search).get("look")==="0",ac=20,xS=["Hips","UpLeg.L","Leg.L","Foot.L","UpLeg.R","Leg.R","Foot.R"],vS=s=>new Set((s.bones?.lower||xS).map(e=>et.sanitizeNodeName(e))),Hu=.1,yS=.04,MS=.016,SS=9,bS=22,oa=1.1,ES=.1,TS=.1,wS=.35,AS=.66,RS={dealer:1.6,tank:1.3,sniper:1.6},Mn={k:140,c:16,gain:.006,max:25*Math.PI/180},Vu={dealer:{white:{maxSat:.16,minVal:.55},y:[.42,.97],minSat:.75},tank:{hue:[280,330],sat:.35,feather:10,minSat:.75},sniper:{hue:[280,330],sat:.35,feather:10,minSat:.75}},CS={blue:213,red:359},md={};async function PS(s){const e=new td;await Promise.all(s.map(async t=>{const[n,i]=await Promise.all([e.loadAsync(`./art/live/${t}.glb`),fetch(`./art/live/${t}.json`).then(c=>c.json())]),r=new Cn().setFromObject(n.scene),a=r.max.y-r.min.y,o=vS(i),l=c=>Object.fromEntries(n.animations.map(h=>[h.name,new Na(h.name,h.duration,h.tracks.filter(u=>c(o.has(u.name.split(".").slice(0,-1).join(".")))))]));md[t]={scene:n.scene,meta:i,h:a,y0:r.min.y,lower:l(c=>c),upper:l(c=>!c),tip:IS(n.scene,i.muzzle)}})),aS(Gi-ac)}function IS(s,e){if(!e)return null;s.updateMatrixWorld(!0);let t=null,n=-1;if(s.traverse(a=>{if(!t&&a.isSkinnedMesh){const o=a.skeleton.bones.findIndex(l=>l.name==="Gun");o>=0&&(t=a,n=o)}}),!t)return null;const i=s.getObjectByName("rig")||s,r=a=>t.worldToLocal(i.localToWorld(new I(...a)));return{name:t.name,gi:n,tip:r(e.tip),back:r(e.back)}}const LS=`
vec3 rgb2hsv(vec3 c){ vec4 K=vec4(0.,-1./3.,2./3.,-1.); vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g)); vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r)); float d=q.x-min(q.w,q.y); float e=1e-10; return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x); }
vec3 hsv2rgb(vec3 c){ vec4 K=vec4(1.,2./3.,1./3.,3.); vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www); return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y); }`;function Gu(s,e,t,n){const i=new hi({map:s.map||null,color:s.color?s.color.clone():16777215}),r={uHue:{value:CS[t]/360},uY:{value:new se(...n)}};return i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),Oa||dS(a),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform vec2 uY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = (position.y - uY.x) / (uY.y - uY.x);`);const o=e.white?`float w = clamp((${e.white.maxSat.toFixed(3)} - hv.y) / 0.06, 0., 1.) * clamp((hv.z - ${e.white.minVal.toFixed(3)}) / 0.1, 0., 1.) * clamp(min(vBodyY - ${e.y[0].toFixed(3)}, ${e.y[1].toFixed(3)} - vBodyY) / 0.03 + 0.5, 0., 1.);`:`float h = hv.x * 360.; float lo = ${e.hue[0].toFixed(1)}, hi = ${e.hue[1].toFixed(1)};
         float dist = min(abs(mod(h - lo + 180., 360.) - 180.), abs(mod(h - hi + 180., 360.) - 180.));
         float w = (h >= lo && h <= hi ? 1. : clamp(1. - dist / ${e.feather.toFixed(1)}, 0., 1.)) * clamp((hv.y - ${e.sat.toFixed(3)}) / 0.12, 0., 1.) * clamp((hv.z - 0.15) / 0.1, 0., 1.);`;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform float uHue;
`+LS).replace("#include <map_fragment>",`#include <map_fragment>
      { vec3 s = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2)); vec3 hv = rgb2hsv(s); ${o}
        vec3 nc = pow(hsv2rgb(vec3(uHue, max(hv.y, ${e.minSat.toFixed(2)}), hv.z)), vec3(2.2)); diffuseColor.rgb = mix(diffuseColor.rgb, nc, w); }`)},i.customProgramCacheKey=()=>`body-${Oa}-${JSON.stringify(e)}`,i.userData.u=r,i}function DS(s,e){const t=md[e.c.rig],n=e.c.height*Er,i=n/t.h,r=new Ot;s.add(r);const a=new Ot;a.matrixAutoUpdate=!1,r.add(a);const o=Math.cos(ac*Math.PI/180),l=Math.sin(ac*Math.PI/180),c=w=>a.matrix.set(w,0,0,0,0,o*w,0,0,0,-l*w,w,0,0,0,0,1);c(1);const h=new Ot;a.add(h);const u=fS(t.scene);u.scale.setScalar(i),u.position.y=-t.y0*i,h.add(u);const d=[],f=[t.y0,t.y0+t.h];u.traverse(w=>{if(w.isMesh){w.material=Array.isArray(w.material)?w.material.map(H=>Gu(H,Vu[e.c.rig],e.team,f)):Gu(w.material,Vu[e.c.rig],e.team,f);for(const H of[].concat(w.material))d.push(H);w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1}}),Oa||u.traverse(w=>{w.isMesh&&w.layers.enable(dd)});const p={};u.traverse(w=>{w.isBone&&(p[w.name]=w)});let _=null;t.tip&&u.traverse(w=>{!_&&w.isSkinnedMesh&&w.name===t.tip.name&&(_=w)});const g=new I,m=new De,y={p:new I,ax:new I,q:new Ft,gp:new I,gq:new Ft,gs:new I,m:new De,y:new De,s:new De,g:new De},x=w=>{const H=y;h.updateWorldMatrix(!0,!1),P.updateWorldMatrix(!1,!1),E.updateWorldMatrix(!1,!1),H.y.copy(h.matrixWorld).invert(),H.s.multiplyMatrices(H.y,P.matrixWorld),H.g.multiplyMatrices(H.y,E.matrixWorld),H.p.setFromMatrixPosition(H.s),H.ax.setFromMatrixColumn(H.s,1).normalize(),H.q.setFromAxisAngle(H.ax,w),H.g.decompose(H.gp,H.gq,H.gs),H.gp.sub(H.p).applyQuaternion(H.q).add(H.p),H.gq.premultiply(H.q),H.m.compose(H.gp,H.gq,H.gs).premultiply(m.multiplyMatrices(H.y,E.parent.matrixWorld).invert()).decompose(E.position,E.quaternion,H.gs)},M=w=>{const H=y;h.updateWorldMatrix(!0,!1),P.parent.updateWorldMatrix(!0,!1),H.m.multiplyMatrices(H.y.copy(h.matrixWorld).invert(),P.parent.matrixWorld).decompose(H.p,H.q,H.gs),H.ax.set(0,1,0).applyQuaternion(H.q.invert()),P.quaternion.premultiply(H.q.setFromAxisAngle(H.ax,w))},C=(w,H)=>{const ie=_,J=t.tip.gi;return m.multiplyMatrices(ie.skeleton.bones[J].matrixWorld,ie.skeleton.boneInverses[J]),ie.localToWorld(H.copy(w).applyMatrix4(ie.bindMatrix).applyMatrix4(m).applyMatrix4(ie.bindMatrixInverse))},S=t.meta.bones||{},T=S.twist==="up",P=p[S.spine||"Spine"],N=p[S.chest||"Chest"],v=p[S.head||"Head"],E=p[S.gun||"Gun"],L=[P,N,v,E].filter(Boolean),D=L.map(w=>[w.position.clone(),w.quaternion.clone(),w.scale.clone()]),O=()=>L.forEach((w,H)=>{w.position.copy(D[H][0]),w.quaternion.copy(D[H][1]),w.scale.copy(D[H][2])}),X=()=>L.forEach((w,H)=>{D[H][0].copy(w.position),D[H][1].copy(w.quaternion),D[H][2].copy(w.scale)}),z=new je(new zi(.28*n,32),new ut({color:0,transparent:!0,opacity:.25,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.scale.set(1,.8,1),z.position.y=.025,z.renderOrder=2,r.add(z);const te={me:{disc:3989594,ring:8191886,da:.5},ally:{disc:39423,ring:6079231,da:.45},foe:{disc:16722474,ring:16743034,da:.45}},W=te[e.isPlayer?"me":e.team==="blue"?"ally":"foe"],fe=W.ring,oe=new je(new _r(.64,.86,40),new ut({color:fe,transparent:!0,depthWrite:!1}));oe.rotation.x=-Math.PI/2,oe.position.y=.03,oe.renderOrder=3,r.add(oe);const he=Oa?null:new je(new zi(.64,40),new ut({color:W.disc,transparent:!0,opacity:W.da,depthWrite:!1}));he&&(he.rotation.x=-Math.PI/2,he.position.y=.028,he.renderOrder=2,r.add(he));const Ve=new dy(u),Ge=t.meta,q=e.c,ne=q.shotEnd-q.aim,de={lower:{},upper:{}};for(const w of["lower","upper"])for(const[H,ie]of Object.entries(t[w])){const J=Ve.clipAction(ie.clone()),Q=Ge.clips[H];Q.loop||(J.setLoop(df,1),J.clampWhenFinished=!0),H==="idle"&&(J.timeScale=Q.dur/q.idle),H==="shoot"&&(J.timeScale=Q.dur*(1-Q.hit)/ne),de[w][H]=J}const ae={lower:null,upper:null},be=(w,H,ie=0,J=Hu)=>{const Q=de[w][H];Q&&(ae[w]===H&&(Q.isRunning()||Q.timeScale===0&&Q.isScheduled())||(Q.reset(),Q.time=ie,Q.setEffectiveWeight(1),Q.fadeIn(J).play(),ae[w]&&ae[w]!==H&&de[w][ae[w]].fadeOut(J),ae[w]=H))};be("lower","idle"),be("upper","idle");const Ne=Ge.speed*Ge.clips.run.dur*i,He=Math.max(Ne,Math.min(q.cycle*q.speed,Ne/AS)),Ee={x:0,vx:0,z:0,vz:0,px:e.x,pz:e.z,pvx:0,pvz:0};return{u:e,root:r,ring:oe,mats:d,x:e.x,z:e.z,face:e.face,legFace:e.face,flash:0,lastMoved:e.moved,clock:0,phase:0,shotT:-99,pushT:-99,dead:!1,bodyScale:1,state:"idle",run:0,pop:1,onShot(){const w=this.u;this.face=w.face;const H=Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace));Math.abs(H)>oa&&(this.legFace=this.face-Math.sign(H)*oa),this.shotT=this.clock;const ie=Ge.clips.shoot;be("upper","shoot",ie.hit*ie.dur,T?MS:yS),ae.upper==="shoot"&&(de.upper.shoot.time=ie.hit*ie.dur)},update(w,H,ie,J){const Q=this.u;if(this.clock+=w,!Q.alive){this.dead=!0,r.visible=!1;return}this.dead&&(this.dead=!1,this.x=Q.x,this.z=Q.z,this.lastMoved=Q.moved,be("lower","idle"),be("upper","idle")),r.visible=ie,this.x+=(Q.x-this.x)*Math.min(1,w*20),this.z+=(Q.z-this.z)*Math.min(1,w*20),r.position.set(this.x,0,this.z);const Ce=(Ae,Le,Je)=>{const U=Math.atan2(Math.sin(Le-Ae),Math.cos(Le-Ae));return Ae+Math.sign(U)*Math.min(Math.abs(U),Je*w)};this.face=Ce(this.face,Q.face,bS);const pe=Q.moved-this.lastMoved,R=pe/Math.max(w,1e-4);this.lastMoved=Q.moved;const b=R>.3;this.run=b?Math.min(1,this.run+w*8):Math.max(0,this.run-w*8);const k=Ge.clips.shoot;Q.queue.length&&ae.upper==="shoot"&&(this.shotT=this.clock,de.upper.shoot.time=k.hit*k.dur);const K=this.clock-this.shotT<ne*.9;this.legFace=Ce(this.legFace,b&&!K?Q.face:this.face,SS),h.rotation.y=Math.atan2(Math.cos(this.legFace),Math.sin(this.legFace));let $="idle";this.clock-this.pushT<ES+Hu?(be("lower","hit"),be("upper","hit"),$="push"):Q.dash&&de.lower.dash?(be("lower","dash"),be("upper","dash"),$="dash"):(this.run>.5?(be("lower","run"),this.phase=(this.phase+pe/He)%1,$="walk"):be("lower","idle"),K?(ae.upper!=="shoot"&&be("upper","shoot",Ge.clips.shoot.hit*Ge.clips.shoot.dur),$=$==="walk"?"walk":"shoot"):be("upper",this.run>.5?"run":"idle")),this.state=$;for(const Ae of["lower","upper"]){const Le=de[Ae].run;Le.timeScale=0,Le.time=this.phase*Ge.clips.run.dur}if(O(),Ve.update(w),X(),P){const Ae=Math.max(-oa,Math.min(oa,Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace))));T?M(-Ae):P.rotateY(-Ae),E&&!T&&Math.abs(Ae)>1e-4&&x(-Ae)}const Te=(this.x-Ee.px)/Math.max(w,1e-4),ce=(this.z-Ee.pz)/Math.max(w,1e-4);Ee.px=this.x,Ee.pz=this.z;const me=(Te-Ee.pvx)/Math.max(w,1e-4),Ye=(ce-Ee.pvz)/Math.max(w,1e-4);Ee.pvx=Te,Ee.pvz=ce;const re=Math.cos(this.legFace),ge=Math.sin(this.legFace),Oe=me*re+Ye*ge,Fe=-me*ge+Ye*re,ve=Math.min(w,1/30);if(Ee.vx+=(-140*Ee.x-Mn.c*Ee.vx-Mn.gain*Mn.k*Oe)*ve,Ee.x=Math.max(-Mn.max,Math.min(Mn.max,Ee.x+Ee.vx*ve)),Ee.vz+=(-140*Ee.z-Mn.c*Ee.vz-Mn.gain*Mn.k*Fe)*ve,Ee.z=Math.max(-Mn.max,Math.min(Mn.max,Ee.z+Ee.vz*ve)),N&&(N.rotateX(-Ee.x*.6),N.rotateZ(Ee.z*.6)),v&&(v.rotateX(-Ee.x*.4),v.rotateZ(Ee.z*.4)),T&&E&&_&&K){const Ae={x:0,y:0,z:0};for(let Le=0;Le<3&&this.muzzle(void 0,Ae);Le++){const Je=Math.atan2(Math.sin(this.face-Math.atan2(Ae.z,Ae.x)),Math.cos(this.face-Math.atan2(Ae.z,Ae.x)));if(Math.abs(Je)<.002)break;M(-Math.max(-1.2,Math.min(1.2,Je)))}}if(E){const Ae=K?de.upper.shoot.getEffectiveWeight():0;E.scale.multiplyScalar(1+(RS[Q.c.rig]-1)*Ae)}this.flash=Math.max(0,this.flash-w/TS),c(this.bodyScale);for(const Ae of d){Ae.emissive?.setScalar(this.flash*wS);const Le=J<.999;Ae.transparent!==Le&&(Ae.transparent=Le,Ae.needsUpdate=!0),Ae.opacity=J}oe.material.opacity=Q.isPlayer?.95:.7,this.bodyScale=1},muzzle(w=new I,H=null){return!_||!r.visible?null:(r.updateMatrixWorld(!0),C(t.tip.tip,w),H&&(g.subVectors(w,C(t.tip.back,g)).normalize(),H.x=g.x,H.y=g.y,H.z=g.z),w)},onHit(){},onPush(){this.pushT=this.clock},dispose(){s.remove(r),Ve.stopAllAction(),Ve.uncacheRoot(u),u.traverse(w=>w.skeleton?.dispose());for(const w of d)w.dispose();for(const w of[z,oe,he])w&&(w.geometry.dispose(),w.material.dispose())}}}const tn=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},Kt=s=>{const e=new Ds(s);return e.colorSpace=dt,e},Ni=(s,e,t,n,i,r)=>{const a=s.createRadialGradient(e,t,n,e,t,i);for(const[o,l]of r)a.addColorStop(o,l);return a};function gd(s,e=128){const[t,n]=tn(e),i=$t(s);for(let a=0;a<7;a++){const o=i()*6.28,l=i()*.2*e,c=e/2+Math.cos(o)*l,h=e/2+Math.sin(o)*l*.8,u=(.2+i()*.1)*e;n.fillStyle=Ni(n,c,h,u*.35,u,[[0,"rgba(255,255,255,1)"],[.55,"rgba(236,246,255,1)"],[.8,"rgba(186,212,238,0.98)"],[1,"rgba(186,212,238,0)"]]),n.beginPath(),n.arc(c,h,u,0,7),n.fill()}n.globalCompositeOperation="source-atop";const r=n.createLinearGradient(e*.25,e*.15,e*.75,e*.9);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(180,200,225,0.25)"),r.addColorStop(1,"rgba(90,120,170,0.8)"),n.fillStyle=r,n.fillRect(0,0,e,e),[t,n]}function NS(){const[s,e]=gd(11,256),t=256;e.globalCompositeOperation="source-atop";const n=(i,r,a)=>{e.fillStyle="rgba(232,247,255,0.82)",e.beginPath(),e.ellipse(i,r,a,a*.95,0,0,7),e.fill(),e.fillRect(i-a*.5,r+a*.55,a,a*.65),e.fillStyle="rgba(30,60,95,0.92)";for(const o of[-.38,.38])e.beginPath(),e.ellipse(i+o*a,r,a*.24,a*.3,0,0,7),e.fill();e.beginPath(),e.moveTo(i,r+a*.25),e.lineTo(i-a*.1,r+a*.5),e.lineTo(i+a*.1,r+a*.5),e.fill();for(let o=0;o<4;o++)e.fillRect(i-a*.4+o*a*.22,r+a*.8,a*.06,a*.32)};return n(t*.5,t*.38,t*.12),n(t*.28,t*.52,t*.085),n(t*.72,t*.55,t*.085),Kt(s)}function US(s=8,e=256){const[t,n]=tn(e),i=e/2;n.fillStyle=Ni(n,i,i,4,i,[[0,"rgba(255,255,255,0.9)"],[.5,"rgba(255,255,255,0.18)"],[1,"rgba(255,255,255,0)"]]),n.fillRect(0,0,e,e),n.fillStyle="#fff",n.beginPath();for(let r=0;r<s*2;r++){const a=r*Math.PI/s-Math.PI/2,o=r%2?i*.22:i*.95;n.lineTo(i+Math.cos(a)*o,i+Math.sin(a)*o)}return n.closePath(),n.fill(),Kt(t)}function OS(s=128){const[e,t]=tn(s),n=s/2;return t.fillStyle=Ni(t,n,n,2,n*.5,[[0,"rgba(255,255,255,0.8)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,s,s),t.fillStyle="#fff",t.beginPath(),t.moveTo(n,2),t.quadraticCurveTo(n+5,n-5,s-2,n),t.quadraticCurveTo(n+5,n+5,n,s-2),t.quadraticCurveTo(n-5,n+5,2,n),t.quadraticCurveTo(n-5,n-5,n,2),t.fill(),Kt(e)}function FS(s=64){const[e,t]=tn(s),n=s/2;t.fillStyle="#fff",t.beginPath();for(let i=0;i<10;i++){const r=i*Math.PI/5-Math.PI/2,a=i%2?n*.42:n*.95;t.lineTo(n+Math.cos(r)*a,n+Math.sin(r)*a)}return t.closePath(),t.fill(),Kt(e)}function BS(){const s={};s.puff=[1,2,3,4].map(e=>Kt(gd(e*17)[0])),s.skull=NS(),s.burst=US(8),s.twinkle=OS(),s.smallStar=FS();{const[e,t]=tn(64);t.fillStyle=Ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.6,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.dot=Kt(e)}{const[e,t]=tn(64);t.fillStyle=Ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.82,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.disc=Kt(e)}{const[e,t]=tn(64,32),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"#9a6a1a"),n.addColorStop(.5,"#fff0a0"),n.addColorStop(1,"#c8962a"),t.fillStyle=n,t.fillRect(6,8,52,16),t.fillStyle="#7a5410",t.fillRect(52,8,6,16),s.shell=Kt(e)}{const[e,t]=tn(64),n=$t(5);t.fillStyle="#fff",t.beginPath();for(let r=0;r<7;r++){const a=r/7*6.28,o=20+n()*10;t.lineTo(32+Math.cos(a)*o,32+Math.sin(a)*o)}t.closePath(),t.fill(),t.globalCompositeOperation="source-atop";const i=t.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(90,80,70,0.7)"),t.fillStyle=i,t.fillRect(0,0,64,64),s.rock=Kt(e)}{const[e,t]=tn(128),n=$t(9);t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round";for(let i=0;i<5;i++){let r=i/5*6.28+n()*.5,a=64,o=64;t.lineWidth=6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<4;l++)r+=(n()-.5)*1.1,a+=Math.cos(r)*15,o+=Math.sin(r)*15,t.lineTo(a,o),t.lineWidth=6-l;t.stroke()}s.crack=Kt(e)}{const[e,t]=tn(128);t.fillStyle=Ni(t,64,64,0,64,[[0,"rgba(255,255,255,0)"],[.55,"rgba(255,255,255,0)"],[.74,"rgba(255,255,255,1)"],[.9,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),s.ring=Kt(e)}{const[e,t]=tn(128);t.fillStyle=Ni(t,64,64,0,64,[[0,"rgba(255,255,255,0.06)"],[.78,"rgba(255,255,255,0.16)"],[.92,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(64,64,44,3.5,4.5),t.stroke(),s.bubble=Kt(e)}{const[e,t]=tn(128,16),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.fillRect(0,0,128,16),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,16),s.dash=Kt(e)}return s}const ht=(s,e)=>s+Math.random()*(e-s),Ue=(s,e)=>s+(Math.random()-.5)*2*e,zS=new Vt(1,1).rotateX(-Math.PI/2),kS={tex:null,add:!1,flat:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,dz:0,drag:0,bounce:0,fric:0,floor:!1,delay:0,life:1,size:1,s0:1,s1:1,aspect:1,a0:1,fadeIn:0,fadeOut:.3,rot:0,spin:0,spin1:null,color:16777215,color2:null,ro:0,blink:0,ease:0,kind:"",follow:null,fy:0};function HS(s,{sp:e=260,ad:t=200,fl:n=70}={}){const i={sp:[],ad:[],fl:[]},r=[],a={},o={},l=(f,p,_)=>{const g=p?new ut({transparent:!0,depthWrite:!1}):new Wa({transparent:!0,depthWrite:!1,depthTest:!1,..._?{blending:il}:{}}),m=p?new je(zS,g):new wc(g);m.visible=!1,m.frustumCulled=!1,m.renderOrder=p?4:8,s.add(m),i[f].push({m,mat:g,flat:p,list:f,gen:0,c0:new Se,c1:new Se,has2:!1})};for(let f=0;f<e;f++)l("sp",!1,!1);for(let f=0;f<t;f++)l("ad",!1,!0);for(let f=0;f<n;f++)l("fl",!0,!1);let c=0;function h(f){f.m.visible=!1,r.splice(r.indexOf(f),1),i[f.list].push(f),f.kind&&a[f.kind]--}function u(f){const p=f.flat?"fl":f.add?"ad":"sp",_=i[p].pop();return _?f.kind&&o[f.kind]!==void 0&&(a[f.kind]||0)>=o[f.kind]?(i[p].push(_),null):(Object.assign(_,kS,f),_.gen=++c,_.t=-_.delay,_.vis=!1,_.c0.setHex(_.color),_.has2=_.color2!=null,_.has2&&_.c1.setHex(_.color2),_.mat.map=_.tex,_.mat.color.copy(_.c0),_.mat.opacity=0,_.m.renderOrder=_.ro||(_.flat?4:8),_.flat?_.m.rotation.y=_.rot:_.mat.rotation=_.rot,_.kind&&(a[_.kind]=(a[_.kind]||0)+1),r.push(_),_):null}function d(f){const p=Math.max(1,Math.ceil(f/.0167)),_=f/p;for(let g=r.length-1;g>=0;g--){const m=r[g];if(m.t+=f,m.t<0)continue;let y=m.t/m.life;if(y>=1){h(m);continue}if(m.vis||(m.vis=!0,m.m.visible=!0),m.follow)m.x=m.follow.x,m.z=m.follow.z,m.y=m.fy;else for(let S=0;S<p;S++){if(m.vy+=m.g*_,m.dz&&m.vy>0&&(m.vy=Math.max(0,m.vy-m.dz*_)),m.drag){const T=Math.exp(-m.drag*_);m.vx*=T,m.vz*=T}m.x+=m.vx*_,m.y+=m.vy*_,m.z+=m.vz*_,m.floor&&m.y<.04&&(m.y=.04,m.vy<-.4&&m.bounce?(m.vy=-m.vy*m.bounce,m.vx*=1-m.fric,m.vz*=1-m.fric):(m.vy=0,m.vx*=1-Math.min(1,6*_),m.vz*=1-Math.min(1,6*_)))}m.ease&&(y=1-(1-y)*(1-y));const x=(m.s0+(m.s1-m.s0)*y)*m.size,M=m.t/m.life;let C=m.a0;m.fadeIn&&M<m.fadeIn&&(C*=M/m.fadeIn),m.fadeOut&&M>1-m.fadeOut&&(C*=(1-M)/m.fadeOut),m.blink&&(C*=.5+.5*Math.sin(m.t*m.blink)),m.m.position.set(m.x,m.y,m.z),m.mat.opacity=C,m.has2&&m.mat.color.lerpColors(m.c0,m.c1,M),m.spin&&(m.rot+=(m.spin1==null?m.spin:m.spin+(m.spin1-m.spin)*M)*f,m.flat?m.m.rotation.y=m.rot:m.mat.rotation=m.rot),m.flat?m.m.scale.set(x,1,x*m.aspect):m.m.scale.set(x,x*m.aspect,1)}}return{emit:u,update:d,setCap:(f,p)=>{o[f]=p},count:f=>a[f]||0,clear(){for(;r.length;)h(r[r.length-1])},get alive(){return r.length}}}const VS={dealer:{fwd:.5,up:.449},tank:{fwd:.784,up:.611},sniper:{fwd:.666,up:.416}},yr={blue:{gas0:6742271,gas1:3385599,spark:5098751,line:23039,tint:10476799,ball:"blue"},red:{gas0:16744608,gas1:16721472,spark:16731494,line:16711769,tint:16756920,ball:"red"}},Ma=s=>s.c.height*Er*Vc()*.45;function _d(s,e){const t=VS[s.c.rig],n=s.c.height*Er;return{x:s.x+Math.cos(e)*t.fwd*n,y:t.up*n*Vc(),z:s.z+Math.sin(e)*t.fwd*n}}const vi=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},yi=s=>{const e=new Ds(s);return e.colorSpace=dt,e},Zo={blue:{main:"#2f7fe6",dark:"#123c86",lite:"#8fd0ff",halo:"rgba(70,190,220,0.45)",orb:"#5a5cff",orbLite:"#b8b4ff",orbDark:"#1c1a6a",slug:"#38d6ff",slugEdge:"#6a5cff",slugHalo:"rgba(28,22,110,0.55)"},red:{main:"#f0462a",dark:"#8a1408",lite:"#ffb08a",halo:"rgba(150,20,30,0.45)",orb:"#ff3a46",orbLite:"#ffc0c0",orbDark:"#6a0a14",slug:"#ff5aa8",slugEdge:"#ff6a7a",slugHalo:"rgba(110,10,30,0.55)"}};function Jo(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arc(e+n-r,t+r,r,-Math.PI/2,Math.PI/2),s.lineTo(e+r,t+i),s.arc(e+r,t+r,r,Math.PI/2,Math.PI*1.5),s.closePath()}function GS(s){const[e,t]=vi(128,64);return t.fillStyle=s.halo,t.beginPath(),t.ellipse(66,32,56,30,0,0,7),t.fill(),Jo(t,20,13,92,38,19),t.fillStyle=s.dark,t.fill(),Jo(t,24,17,84,30,15),t.fillStyle=s.main,t.fill(),Jo(t,34,20,66,9,4.5),t.fillStyle=s.lite,t.globalAlpha=.75,t.fill(),t.globalAlpha=1,t.fillStyle=s.dark,t.globalAlpha=.5,t.fillRect(52,17,4,30),t.globalAlpha=1,yi(e)}function WS(s){const[e,t]=vi(64);t.fillStyle=s.orbDark,t.globalAlpha=.55,t.beginPath(),t.arc(32,32,31,0,7),t.fill(),t.globalAlpha=1;const n=t.createRadialGradient(27,27,2,32,32,23);return n.addColorStop(0,s.orbLite),n.addColorStop(.55,s.orb),n.addColorStop(1,s.orbDark),t.fillStyle=n,t.beginPath(),t.arc(32,32,23,0,7),t.fill(),t.fillStyle="rgba(255,255,255,0.7)",t.beginPath(),t.ellipse(25,24,6,4,-.6,0,7),t.fill(),yi(e)}function XS(s){const[e,t]=vi(192,64);t.fillStyle=s.slugHalo,t.beginPath(),t.ellipse(120,32,64,30,0,-Math.PI/2,Math.PI/2),t.lineTo(60,62),t.lineTo(60,2),t.closePath(),t.fill();const n=i=>{t.beginPath(),t.moveTo(40+i,18+i),t.lineTo(130,18+i),t.quadraticCurveTo(168-i,22+i*.3,178-i*1.6,32),t.quadraticCurveTo(168-i,42-i*.3,130,46-i),t.lineTo(40+i,46-i),t.closePath()};return n(0),t.fillStyle=s.slugEdge,t.fill(),n(4),t.fillStyle=s.slug,t.fill(),t.fillStyle="rgba(255,255,255,0.85)",t.beginPath(),t.moveTo(52,29),t.lineTo(150,29),t.quadraticCurveTo(160,32,150,35),t.lineTo(52,35),t.closePath(),t.fill(),t.fillStyle=s.slugEdge,t.globalAlpha=.8,t.fillRect(64,20,4,24),t.globalAlpha=1,yi(e)}function la(s){const[e,t]=vi(128,32),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,s+"00"),n.addColorStop(.45,s+"70"),n.addColorStop(.8,s+"d8"),n.addColorStop(1,s),t.fillStyle=n,t.fillRect(0,0,128,32),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,32);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"rgba(0,0,0,1)"),i.addColorStop(.7,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,32),yi(e)}function qS(){const[s,e]=vi(128),t=64;e.fillStyle="#ffb21e",e.beginPath();for(let i=0;i<14;i++){const r=i*Math.PI/7,a=i%2?t*.42:t*(.8+.18*Math.sin(i*2.3));e.lineTo(t+Math.cos(r)*a,t+Math.sin(r)*a)}e.closePath(),e.fill();const n=e.createRadialGradient(t,t,2,t,t,t*.5);return n.addColorStop(0,"#fff"),n.addColorStop(.6,"#fff6b0"),n.addColorStop(1,"rgba(255,220,90,0)"),e.fillStyle=n,e.beginPath(),e.arc(t,t,t*.5,0,7),e.fill(),yi(s)}function YS(){const[s,e]=vi(128,32),t=(n,i)=>{e.beginPath(),e.moveTo(0,16-n),e.quadraticCurveTo(70,16-n*.6,128,16),e.quadraticCurveTo(70,16+n*.6,0,16+n),e.closePath(),e.fillStyle=i,e.fill()};return t(13,"#ff9a1a"),t(7,"#ffe866"),t(3,"#fffbe0"),yi(s)}function KS(){const[s,e]=vi(64);return e.fillStyle="#fff",e.beginPath(),e.arc(32,34,22,.2,Math.PI*1.7),e.arc(40,28,13,Math.PI*1.6,.4,!0),e.closePath(),e.fill(),yi(s)}function jS(){const[s,e]=vi(128),t=64;e.strokeStyle="#fff",e.lineWidth=5,e.beginPath(),e.arc(t,t,30,0,7),e.stroke(),e.fillStyle="rgba(255,255,255,0.18)",e.beginPath(),e.arc(t,t,28,0,7),e.fill(),e.fillStyle="#fff";for(let n=0;n<3;n++){const i=n*2*Math.PI/3-Math.PI/2,r=Math.cos(i),a=Math.sin(i);e.beginPath(),e.moveTo(t+r*26-a*9,t+a*26+r*9),e.quadraticCurveTo(t+r*40,t+a*40,t+r*62,t+a*62),e.quadraticCurveTo(t+r*40,t+a*40,t+r*26+a*9,t+a*26-r*9),e.closePath(),e.fill()}return yi(s)}function $S(){const s={};for(const e of["blue","red"])s[e]={capsule:GS(Zo[e]),orb:WS(Zo[e]),slug:XS(Zo[e])};return s.blue.streak=la("#3a8cff"),s.red.streak=la("#ff3a2a"),s.blue.streakSnipe=la("#7a6cff"),s.red.streakSnipe=la("#ff5a8a"),s.flash=qS(),s.jet=YS(),s.wisp=KS(),s.thornRing=jS(),s}const Wu=Math.sin(Gi*Math.PI/180),ZS=new Vt(1,1).rotateX(-Math.PI/2),JS=1.2,Xu=s=>s*s*(3-2*s),ca={dealer:{tex:"capsule",head:[.65,.36],tip:.875,back:.4,tail:[1.9,.2,1],grow:.25,sh:1.3,n:1},tank:{tex:"orb",head:[.24,.24],tip:.5,back:.08,tail:[1.6,.15,.9],grow:.4,sh:1,n:4},sniper:{tex:"slug",head:[.84,.5],tip:.93,back:.55,tail:[.6,.14,.5],grow:.1,sh:1,n:1}},QS=[[.22,0],[0,.25],[0,-.25],[-.22,0]],eb=.133;function tb(s,e,t,n,i){const r=$S(),a=new Map,o={dealer:[],tank:[],sniper:[]},l=new I;e.setCap("sniperLine",8),e.setCap("sniperSmoke",8),e.setCap("sniperSpark",10);const c=(d,f,p)=>{const _=new wc(new Wa({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return _.renderOrder=f,_.frustumCulled=!1,_.center.set(p,.5),s.add(_),_},h=d=>{const f=ca[d],p=[];for(let g=0;g<f.n;g++)p.push({head:c(!1,9,f.tip),tail:c(!1,8,1)});const _=new je(ZS,new ut({map:t.disc,color:0,transparent:!0,opacity:102/255,depthWrite:!1}));return _.renderOrder=3,_.frustumCulled=!1,s.add(_),{rig:d,parts:p,sh:_}},u=(d,f)=>{for(const p of d.parts)p.head.visible=p.tail.visible=f;d.sh.visible=f};return{update(d,f){for(const p of f.bullets){let _=a.get(p);const g=p.owner.c.rig,m=ca[g]||ca.dealer;if(!_){_=o[g]?.pop()||h(ca[g]?g:"dealer"),_.acc=0,_.age=0,u(_,!0),a.set(p,_);const L=p.isSuper?1.3:1,D=yr[p.team].ball;_.k=L,_.went0=p.went;for(const X of _.parts)X.head.material.map=r[D][m.tex],X.head.scale.set(m.head[0]*L,m.head[1]*L,1),X.tail.material.map=g==="sniper"?r[D].streakSnipe:r[D].streak,X.tail.material.opacity=m.tail[2];const O=n(p.owner,l)||_d(p.owner,p.ang);_.ox=O.x-p.x,_.oz=O.z-p.z,_.y=O.y,_.sh.scale.set(.57*m.sh*L,1,.46*m.sh*L),i&&(i.push({k:"bullet",id:p.owner.id,rig:g,x:O.x,y:O.y,z:O.z,t:f.t}),i.length>300&&i.shift())}_.age+=d;const y=p.went-_.went0,x=1-Xu(Math.min(1,y/JS)),M=p.x+_.ox*x,C=p.z+_.oz*x,S=Math.hypot(p.vx,p.vz)||1,T=p.vx/S,P=p.vz/S,N=Math.atan2(-P*Wu,T),v=Math.min(m.tail[0]*_.k*Math.min(1,_.age/m.grow),y-m.back*_.k+.3),E=Xu(Math.min(1,_.age/eb));_.parts.forEach((L,D)=>{let O=M,X=C;if(_.parts.length>1){const[te,W]=QS[D];O+=(T*te-P*W)*E*_.k,X+=(P*te+T*W)*E*_.k}L.head.position.set(O,_.y,X),L.head.material.rotation=N;const z=m.back*_.k;L.tail.position.set(O-T*z,_.y,X-P*z),L.tail.material.rotation=N,L.tail.visible=v>.05,L.tail.scale.set(Math.max(.01,v),m.tail[1]*_.k,1)}),_.sh.position.set(M,.045,C),_.sh.rotation.y=-Math.atan2(P,T),g==="sniper"&&this.trail(_,p,M,C,d,T,P)}for(const[p,_]of a)f.bullets.includes(p)||(u(_,!1),o[_.rig].push(_),a.delete(p))},trail(d,f,p,_,g,m,y){const x=yr[f.team],M=d.y;d.acc+=g*10;const C=Math.atan2(-y*Wu,m);for(;d.acc>=1;){d.acc-=1;const S=ht(10,15);e.emit({tex:t.dash,add:!0,kind:"sniperLine",x:p,y:M,z:_,vx:-m*S,vz:-y*S,life:Ue(.15,.02),size:1.1,s0:Ue(.8,.2),aspect:.09,a0:.95,fadeOut:.5,rot:C,color:x.line}),e.emit({tex:t.puff[1],kind:"sniperSmoke",x:p,y:M,z:_,delay:.1,life:.28,size:.6,s0:.5,s1:.7,a0:.5,fadeIn:.3,fadeOut:.5,color:15922943}),e.emit({tex:t.twinkle,add:!0,kind:"sniperSpark",x:Ue(p,.08),y:Ue(M,.08),z:Ue(_,.08),vy:.5,life:Ue(.7,.3),size:.4,s0:.7,s1:.01,a0:.9,fadeOut:.5,spin:4,color:x.spark})}},clear(){for(const[,d]of a)u(d,!1),o[d.rig].push(d);a.clear()},tex:r}}const nb=Math.sin(Gi*Math.PI/180),qu={dealer:{cloud:1.1,jet:.75,life:.3},tank:{cloud:1.6,jet:1.1,life:.42}},Yu=16052710,ib=15257510,sb=15790834;function rb(s,e,t){s.setCap("hitDust",24),s.setCap("frag",60),s.setCap("rock",30),s.setCap("shell",16);const n=()=>e.puff[Math.random()*4|0];function i(o,l,c,h){s.emit({tex:e.burst,add:!0,x:o,y:l,z:c,life:Ue(.045,.015),size:1.2,s0:1,s1:.25,a0:1,fadeOut:0,rot:Math.random()*6.28,color:16773296});const u=Math.random()*6.28,d=ht(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:o,y:l,z:c,vx:Math.cos(u)*d,vz:Math.sin(u)*d,g:2.1,life:Ue(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:h})}function r(o,l,c,h,u,d=1){const f=l+(o.cid==="tank"?100*Math.PI/180:Math.PI/2),p=ht(2.8,4)*d;s.emit({tex:e.shell,kind:"shell",x:(c+o.x)/2,y:h,z:(u+o.z)/2,vx:Math.cos(f)*p,vz:Math.sin(f)*p,vy:ht(2.25,4.5)*d,g:-30,bounce:.65,fric:.35,floor:!0,life:Ue(1.5,.5),size:.2,s0:.6,s1:.7,aspect:.5,a0:1,fadeOut:.25,rot:Math.random()*6.28,spin:ht(-14,14),color:16777215})}function a(o,l,c,h){const u=h?1.5:1,d=c.cloud*u,f=Math.cos(l),p=Math.sin(l),_=Math.atan2(-p*nb,f),g=c.jet*u;s.emit({tex:t.flash,ro:10,x:o.x,y:o.y,z:o.z,life:.067,size:d*.7,s0:.8,s1:1.2,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16777215}),s.emit({tex:t.jet,add:!0,x:o.x+f*g*.5,y:o.y,z:o.z+p*g*.5,delay:.016,life:.067,size:g,s0:1,s1:1.1,aspect:.4,a0:1,fadeOut:.4,rot:_,color:16777215}),s.emit({tex:n(),x:o.x,y:o.y,z:o.z,vx:f*.6,vz:p*.6,vy:.3,delay:.033,life:c.life*.8,size:d,s0:.7,s1:1,a0:1,fadeOut:.35,rot:Math.random()*6.28,color:16777215,color2:12896462});for(let m=0;m<4;m++){const y=l+Math.PI*(m/2-.75)+Ue(0,.3),x=ht(.8,1.6);s.emit({tex:t.wisp,x:o.x+Math.cos(y)*d*.2,y:o.y+Ue(0,d*.15),z:o.z+Math.sin(y)*d*.2,vx:Math.cos(y)*x+f*.5,vz:Math.sin(y)*x+p*.5,vy:.4,delay:.09,life:Ue(c.life-.09,.04),size:d*.38,s0:1,s1:.45,a0:.95,fadeOut:.5,rot:Math.random()*6.28,spin:Ue(0,3),color:14343650})}for(let m=0;m<6;m++){const y=l+Ue(0,.9),x=ht(3,6)*u;s.emit({tex:e.dot,add:!0,x:o.x,y:o.y,z:o.z,vx:Math.cos(y)*x,vz:Math.sin(y)*x,vy:ht(-.5,1.5),life:ht(.12,.3),size:.1*u,a0:1,fadeOut:.4,color:16754746})}}return{hit(o,l){const c=Ue(o.x,.12),h=Ma(o)+ht(-.1,.2),u=Ue(o.z,.1);if(l?.cid!=="sniper"||l.dash){i(c,h,u,Yu);return}s.emit({tex:e.burst,add:!0,x:c,y:h,z:u,life:.05,size:.8,s0:.5,s1:1,a0:1,fadeOut:.3,rot:Math.random()*6.28,color:16769136}),s.emit({tex:t.thornRing,add:!0,x:c,y:h,z:u,delay:.05,life:.15,size:.8,s0:.55,s1:.85,a0:1,fadeOut:.6,rot:Math.random()*6.28,spin:2,color:yr[l.team].spark});const d=Math.random()*6.28,f=ht(.8,1.2);s.emit({tex:n(),kind:"hitDust",x:c,y:h,z:u,vx:Math.cos(d)*f,vz:Math.sin(d)*f,g:2.1,life:Ue(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:Yu})},wall(o){i(o.x,.5,o.z,ib);for(let l=0;l<3;l++){const c=Math.random()*6.28,h=ht(.8,1.6);s.emit({tex:e.rock,kind:"rock",x:o.x,y:.5,z:o.z,vx:Math.cos(c)*h,vz:Math.sin(c)*h,vy:ht(2.25,4.5),g:-30,bounce:.3,fric:.4,floor:!0,life:Ue(.55,.45)+.1,size:.24,s0:.75,s1:.4,a0:1,fadeOut:.3,spin:ht(-12,12),color:Fi.wallSide})}},fizzle(o){const l=o.owner.cid==="tank",c=.5,h=o.isSuper?1.2:1;for(let d=0;d<(l?2:1);d++){const f=l?.5:.3;s.emit({tex:n(),x:Ue(o.x,f),y:c,z:Ue(o.z,f),vy:.3,life:.48,size:1.1*h,s0:.6,s1:1,a0:.85,fadeOut:.6,rot:Math.random()*6.28,color:sb})}const u=l?3:7;for(let d=0;d<u;d++)s.emit({tex:e.rock,kind:"frag",x:o.x,y:c,z:o.z,vx:Ue(0,3),vz:Ue(0,3),vy:ht(8,18),g:-105,bounce:.4,fric:.3,floor:!0,life:Ue(.6,.3),size:.55,s0:.4,s1:0,a0:1,fadeOut:.2,spin:7,spin1:0,color:12099696})},muzzle(o,l,c,h){if(s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.08,size:c?.8:.48,s0:.7,s1:1.5,a0:.9,fadeOut:.6,rot:Math.random()*6.28,color:o.team==="blue"?6079231:16743034}),o.cid==="sniper"){s.emit({tex:e.burst,add:!0,x:h.x,y:h.y,z:h.z,life:.1,size:c?.9:.5,s0:1,s1:2,a0:1,fadeOut:.5,rot:Math.random()*6.28,color:16773824});for(let u=0;u<7;u++){const d=l+Ue(0,.7),f=ht(4,4.8);s.emit({tex:e.twinkle,add:!0,x:h.x,y:h.y,z:h.z,vx:Math.cos(d)*f,vz:Math.sin(d)*f,vy:ht(.5,2),g:-6,life:Ue(.525,.225),size:.26,s0:.5,s1:.01,a0:1,fadeOut:.4,spin:6,color:16765040})}for(let u=0;u<5;u++)s.emit({tex:n(),x:Ue(h.x,.1),y:h.y,z:Ue(h.z,.1),vx:Math.cos(l)*.6,vz:Math.sin(l)*.6,vy:.5,life:Ue(1.35,.35),size:.9,s0:.5,s1:.1,a0:.5,fadeOut:.8,rot:Math.random()*6.28,color:15659252});r(o,l,h.x,h.y,h.z,1.4)}else a(h,l,qu[o.cid]||qu.dealer,c),r(o,l,h.x,h.y,h.z)}}}function ab(s,e){s.setCap("gas",90),s.setCap("twinkle",60),s.setCap("dust20",60),s.setCap("crack",4),s.setCap("drock",10),s.setCap("ddust",20),s.setCap("ready",66);const t=()=>e.puff[Math.random()*4|0],n=(i,r)=>{const a=Ue(0,i),o=Math.random()*6.28;return[Math.sin(a)*r*Math.cos(o),Math.cos(a)*r,Math.sin(a)*r*Math.sin(o)]};return{death(i){const r=yr[i.team],a=i.x,o=i.z,l=Ma(i);s.emit({tex:e.skull,x:a,y:l+.45,z:o,ro:9,life:.85,size:2.5*1.425,s0:.8,s1:1.1,a0:.95,fadeOut:.45,color:12119295,color2:9427199}),s.emit({tex:e.burst,add:!0,x:a,y:l,z:o,life:.4,size:2*Ue(1,.15),s0:.6,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.tint});for(let c=0;c<30;c++){const h=Math.random()*6.28,u=Ue(2,1)*1.4;s.emit({tex:t(),kind:"gas",delay:Math.random()*.12,x:Ue(a,.25),y:l+ht(-.2,.3),z:Ue(o,.25),vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2,drag:4.4,life:Ue(.45,.15),size:.7,s0:.8,s1:3.5+Ue(0,.8),a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.gas0,color2:r.gas1})}for(let c=0;c<20;c++){const[h,u,d]=n(.35,Ue(12,4));s.emit({tex:e.twinkle,add:!0,kind:"twinkle",x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-28,dz:12,bounce:.45,fric:.3,floor:!0,life:Ue(.9,.4),size:.5,s0:Ue(.7,.3),s1:0,a0:1,fadeOut:.3,spin:ht(-5,5),color:r.spark})}s.emit({tex:e.ring,flat:!0,x:a,y:.4,z:o,vy:7,dz:10,life:1.2,size:4*.35,s0:.7,s1:1.8,a0:.55,fadeOut:.6,color:16777215});for(let c=0;c<20;c++){const[h,u,d]=n(.78,2.5);s.emit({tex:e.smallStar,add:!0,kind:"dust20",delay:Math.random()**2*.35,x:a,y:l+.1,z:o,vx:h,vy:u,vz:d,g:-6,life:Ue(.8,.05),size:.3,s0:Ue(.9,.2),s1:Ue(.9,.2),a0:1,fadeOut:.3,blink:38,spin:ht(-3,3),color:16777215})}},spawn(i,r){const a=yr[i.team],o=Ma(i);s.emit({tex:e.bubble,add:!0,x:i.x,y:o,z:i.z,life:2,size:2.6,s0:0,s1:1,ease:1,a0:.85,fadeOut:.4,color:a.tint,follow:i,fy:o});const l=s.emit({tex:e.dot,add:!0,x:i.x,y:o,z:i.z,life:3,size:2,s0:1,s1:1,a0:.2,fadeOut:.15,blink:9,color:16777215,follow:i,fy:o});l&&r.set(i,{gen:l.gen,p:l,t:i.lastShot})},ready(i){const r=Ma(i);for(let a=0;a<33;a++){const o=Math.random()*6.28,l=ht(.8,1.5),c=Ue(.375,.075),h=r+ht(-.5,.6);s.emit({tex:e.dot,add:!0,kind:"ready",x:i.x+Math.cos(o)*l,y:h,z:i.z+Math.sin(o)*l,vx:-Math.cos(o)*l/c,vz:-Math.sin(o)*l/c,vy:(r-h)/c,life:c,size:.3,s0:.7,s1:.01,a0:1,fadeOut:.2,color:16767050})}},dash(i,r,a){for(a.crack=(a.crack||0)+r*14.3,a.rock=(a.rock||0)+r*18,a.dust=(a.dust||0)+r*45;a.crack>=1;)a.crack--,s.emit({tex:e.crack,flat:!0,kind:"crack",x:i.x,y:.05,z:i.z,life:.7,size:1.3,s0:1,s1:1.05,a0:.8,fadeOut:.5,rot:Math.random()*6.28,color:3811866});for(;a.rock>=1;){a.rock--;const o=Math.random()*6.28,l=ht(.5,2);s.emit({tex:e.rock,kind:"drock",x:Ue(i.x,.2),y:.2,z:Ue(i.z,.2),vx:Math.cos(o)*l,vz:Math.sin(o)*l,vy:ht(9,22.5),g:-105,bounce:.3,fric:.4,floor:!0,life:Ue(.55,.25),size:.26,s0:1,s1:.7,a0:1,fadeOut:.2,spin:ht(-12,12),color:13152392})}for(;a.dust>=1;)a.dust--,s.emit({tex:t(),kind:"ddust",x:Ue(i.x,.3),y:.25,z:Ue(i.z,.3),vy:.8,life:Ue(.35,.15),size:.7,s0:1.5,s1:.01,a0:.9,fadeOut:.3,rot:Math.random()*6.28,color:15128240})}}}const ob={dealer:.3,tank:.3,sniper:.4};function lb(s,{muzzleOf:e=()=>null}={}){const t=BS(),n=HS(s),i=[],r=new I,a=[],o=tb(s,n,t,e,i),l=rb(n,t,o.tex),c=ab(n,t);n.setCap("walk",40);const h=new Map,u=new Map,d=new Map;let f=null;const p=new Ka(.22,0),_=ed(Fi.gem,{emissive:6955184,ei:.6});function g(){a.length=0,n.clear(),o.clear(),u.clear(),d.clear();for(const x of h.values())s.remove(x);h.clear()}const m=x=>{let M=u.get(x);return M||(M={step:0,moved:x.moved,ready:x.superCharge>=1},u.set(x,M)),M};return{onEvent(x){switch(x.type){case"shot":a.push([x.u,x.ang,!1]);break;case"super":x.u.cid!=="tank"&&a.push([x.u,x.ang,!0]);break;case"hit":l.hit(x.u,x.from);break;case"wall":l.wall(x.b);break;case"fizzle":l.fizzle(x.b);break;case"death":c.death(x.u);break;case"spawn":c.spawn(x.u,d);break;case"gem":n.emit({tex:t.dot,add:!0,x:x.u.x,y:.9,z:x.u.z,life:.25,size:1,s0:.5,s1:1.8,a0:.9,fadeOut:1,color:Fi.gemGlow});break}},update(x,M,C){C!==f&&(g(),f=C);for(const[S,T,P]of a.splice(0)){const N=e(S,r)||_d(S,T);l.muzzle(S,T,P,N),i.push({k:"smoke",id:S.id,rig:S.c.rig,x:N.x,y:N.y,z:N.z,t:C.t}),i.length>300&&i.shift()}o.update(x,C);for(const S of C.gems){let T=h.get(S);if(!T){T=new Ot;const P=new je(p,_);P.castShadow=!0,T.add(P);const N=new wc(new Wa({map:t.dot,color:Fi.gemGlow,transparent:!0,depthWrite:!1,opacity:.55}));N.scale.setScalar(1.1),T.add(N),s.add(T),h.set(S,T)}T.position.set(S.x,.45+Math.sin(M*4+S.x)*.08,S.z),T.children[0].rotation.y=M*2.5}for(const[S,T]of h)C.gems.includes(S)||(s.remove(T),h.delete(S));for(const S of C.units){const T=m(S);if(!S.alive){T.moved=S.moved;continue}C.t>0&&C.t<.3&&!T.born&&(T.born=!0,c.spawn(S,d));const P=S.moved-T.moved;T.moved=S.moved,S.dash?c.dash(S,x,T):P/Math.max(x,.001)>S.c.speed*.3&&$n(C,"blue",S)?(T.step-=x,T.step<=0&&(T.step+=ob[S.cid]??.3,n.emit({tex:t.puff[Math.random()*4|0],kind:"walk",x:S.x,y:.12,z:S.z,g:1.5,life:1.8+(Math.random()-.5)*1.2,size:.7,s0:.5,s1:1,a0:.26,fadeOut:.8,rot:Math.random()*6.28,color:15328464}))):T.step=0,S.superCharge>=1&&!T.ready&&S.team==="blue"&&c.ready(S),T.ready=S.superCharge>=1}for(const[S,T]of d){if(T.p.gen!==T.gen){d.delete(S);continue}(!S.alive||S.lastShot>T.t)&&(T.p.life=Math.min(T.p.life,T.p.t+.15),d.delete(S))}n.update(x)},dispose(){g(),f=null},log:i}}const Ku=16,cb=62;function hb(s,e){const t={move:null,atk:null,sup:null,mx:0,mz:0,aim:null,aimKind:null,fire:null,superFire:null,keys:new Set};function n(a,o,l){const c=a.clientX-o,h=a.clientY-l,u=Math.hypot(c,h);return{dx:c,dy:h,d:u}}const i=a=>{const o=a.getBoundingClientRect();return[o.left+o.width/2,o.top+o.height/2]};s.addEventListener("pointerdown",a=>{if(!e.active())return;a.preventDefault();const[o,l]=i(e.atkBtn),[c,h]=i(e.supBtn),u=e.atkBtn.getBoundingClientRect().width*.75,d=e.supBtn.getBoundingClientRect().width*.75;Math.hypot(a.clientX-c,a.clientY-h)<d&&!t.sup?t.sup={id:a.pointerId,cx:c,cy:h,t0:performance.now(),d:0}:Math.hypot(a.clientX-o,a.clientY-l)<u&&!t.atk?t.atk={id:a.pointerId,cx:o,cy:l,t0:performance.now(),d:0}:a.clientX<innerWidth*.5&&!t.move&&(t.move={id:a.pointerId,cx:a.clientX,cy:a.clientY},e.showStick(a.clientX,a.clientY)),s.setPointerCapture?.(a.pointerId)},{passive:!1}),s.addEventListener("pointermove",a=>{for(const o of["move","atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const{dx:c,dy:h,d:u}=n(a,l.cx,l.cy),d=Math.min(u,cb)/(u||1);if(l.d=Math.max(l.d,u),o==="move"){const f=u||1,p=Math.min(1,u/30);t.mx=c/f*p,t.mz=h/f*p,e.moveStick(c*d,h*d)}else t.aim=u>Ku?Math.atan2(h,c):null,t.aimKind=o,e.moveKnob(o,c*d,h*d)}});function r(a){t.move?.id===a.pointerId&&(t.move=null,t.mx=t.mz=0,e.hideStick());for(const o of["atk","sup"]){const l=t[o];if(!l||l.id!==a.pointerId)continue;const c=l.d>Ku?t.aim:"auto";o==="atk"?t.fire=c:t.superFire=c,t[o]=null,t.aim=null,t.aimKind=null,e.moveKnob(o,0,0)}}return s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),addEventListener("keydown",a=>{t.keys.add(a.code),a.code==="Space"&&(t.fire="auto"),a.code==="KeyE"&&(t.superFire="auto")}),addEventListener("keyup",a=>t.keys.delete(a.code)),{st:t,move(){const a=t.keys;let o=t.mx,l=t.mz;return(a.has("KeyA")||a.has("ArrowLeft"))&&(o-=1),(a.has("KeyD")||a.has("ArrowRight"))&&(o+=1),(a.has("KeyW")||a.has("ArrowUp"))&&(l-=1),(a.has("KeyS")||a.has("ArrowDown"))&&(l+=1),[o,l]},take(){const a=t.fire,o=t.superFire;return t.fire=null,t.superFire=null,[a,o]}}}const Zs=2;function ub(s,{top:e=0,topW:t=0,cx:n=0,screenW:i=0}={}){const r=[],a=new Map;for(const o of[...s].sort((l,c)=>c.y-l.y)){const l=f=>t&&Math.abs(f-n)<t/2+o.w/2?e+o.h:o.h,c=([f,p])=>p>=l(f)&&(!i||f-o.w/2>=0&&f+o.w/2<=i)&&!r.some(_=>Math.abs(_.x-f)<(_.w+o.w)/2+Zs&&p>_.y-_.h-Zs&&p-o.h<_.y+Zs),h=Math.max(o.y,l(o.x)),u=[[o.x,h]];for(const f of r){const p=(f.w+o.w)/2+Zs;u.push([o.x,f.y-f.h-Zs],[f.x-p,h],[f.x+p,h],[f.x-p,f.y],[f.x+p,f.y])}const d=u.filter(c).sort((f,p)=>Math.hypot(f[0]-o.x,f[1]-o.y)-Math.hypot(p[0]-o.x,p[1]-o.y))[0]||[o.x,h];r.push({x:d[0],y:d[1],w:o.w,h:o.h}),a.set(o.key,d)}return a}const rt=(s,e=document)=>e.querySelector(s),lr=(s,e,t="")=>{const n=document.createElement(s);return e&&(n.className=e),n.innerHTML=t,n};function fb(s){const e=lr("div","hud");e.innerHTML=`
    <div class="top"><div class="score blue"><i class="gem"></i><b>0</b></div><div class="timer">2:00</div><div class="score red"><b>0</b><i class="gem"></i></div></div>
    <div class="league"></div>
    <div class="banner"></div>
    <div class="bars"></div><div class="nums"></div>
    <div class="stick"><div class="knob"></div></div>
    <div class="btn sup"><div class="fill"></div><div class="knob"></div></div>
    <div class="btn atk"><div class="knob"></div></div>
    <div class="respawn"></div>`,s.appendChild(e);const t=new Map,n=new Map;let i=!1;const r={hud:e,atkBtn:rt(".atk",e),supBtn:rt(".sup",e),active:()=>i,show(a){i=a,e.classList.toggle("on",a)},showStick(a,o){const l=rt(".stick",e);l.style.left=a+"px",l.style.top=o+"px",l.classList.add("on")},moveStick(a,o){rt(".stick .knob",e).style.transform=`translate(${a}px,${o}px)`},hideStick(){rt(".stick",e).classList.remove("on"),r.moveStick(0,0)},moveKnob(a,o,l){rt(`.${a} .knob`,e).style.transform=`translate(${o}px,${l}px)`},setLeague(a){const o=rt(".league",e);o.textContent=a,o.style.opacity="",clearTimeout(r._lg),r._lg=setTimeout(()=>{o.style.opacity="0"},3e3)},update(a,o,l,c){const h=a.units.reduce((x,M)=>x+(M.team==="blue"&&M.alive?M.gems:0),0),u=a.units.reduce((x,M)=>x+(M.team==="red"&&M.alive?M.gems:0),0);rt(".score.blue b",e).textContent=h,rt(".score.red b",e).textContent=u;const d=Math.max(0,Math.ceil(_n.time-a.t));rt(".timer",e).textContent=`${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}`;const f=rt(".banner",e);a.countdown?(f.className=`banner on ${a.countdown.team}`,f.innerHTML=`<small>${a.countdown.team==="blue"?"우리 팀":"상대 팀"} 승리까지</small><b>${Math.ceil(a.countdown.left)}</b>`):f.className="banner";const p=r.supBtn;p.classList.toggle("ready",o.superCharge>=1),rt(".fill",p).style.setProperty("--p",`${Math.round(o.superCharge*100)}%`);const _=rt(".respawn",e);o.alive?_.classList.remove("on"):(_.classList.add("on"),_.innerHTML=`다시 나가기까지 <b>${Math.ceil(o.respawnT)}</b>`);const g=[];for(const x of a.units){let M=t.get(x);M||(M=lr("div",`bar ${x.isPlayer?"me":x.team}`,`<div class="gems"><i class="gem"></i><b></b></div><div class="nm">${x.name}</div><div class="hp"><div class="v"></div><span></span></div>${x.isPlayer?'<div class="ammo"><i></i><i></i><i></i></div>':""}`),rt(".bars",e).appendChild(M),t.set(x,M));const C=x.alive&&c(x);if(M.style.display=C?"":"none",!C)continue;const[S,T]=l(x.x,oS(x.c),x.z);M._x=S,M._y=T,g.push(M),rt(".v",M).style.width=`${x.hp/x.maxHp*100}%`,rt("span",M).textContent=Math.ceil(x.hp);const P=rt(".gems",M);P.style.display=x.gems?"":"none",rt(".gems b",M).textContent=x.gems,x.isPlayer&&rt(".ammo",M).querySelectorAll("i").forEach((N,v)=>N.style.setProperty("--f",Math.max(0,Math.min(1,x.ammo-v))))}const m=rt(".top",e).getBoundingClientRect(),y=ub(g.map(x=>({key:x,x:x._x,y:x._y,w:x.offsetWidth,h:x.offsetHeight})),{top:m.bottom+4,topW:m.width,cx:m.left+m.width/2,screenW:innerWidth});for(const x of g){const[M,C]=y.get(x),S=x._sy==null||Math.hypot(x._sx-M,x._sy-C)>80;x._sx=S?M:x._sx+(M-x._sx)*.5,x._sy=S?C:x._sy+(C-x._sy)*.5,x.style.transform=`translate(${x._sx}px,${x._sy}px) translate(-50%,-100%)`}},damage(a,o,l,c,h){const u=performance.now(),d=h&&n.get(h);if(d&&u-d.t<350&&d.d.isConnected){d.n+=l,d.t=u,d.d.textContent=String(d.n),d.d.style.left=a+"px",d.d.style.top=o+"px",d.d.style.animation="none",d.d.offsetWidth,d.d.style.animation="",clearTimeout(d.k),d.k=setTimeout(()=>d.d.remove(),800);return}const f=lr("div",`num ${c?"mine":""}`,String(l));f.style.left=a+"px",f.style.top=o+"px",rt(".nums",e).appendChild(f);const p={d:f,n:l,t:u,k:setTimeout(()=>f.remove(),800)};h&&n.set(h,p)},reset(){t.forEach(a=>a.remove()),t.clear(),n.clear()}};return r}function db(s,{trophies:e,tierName:t,mode:n,duelTier:i,onPick:r,onStart:a,onMode:o,onTier:l}){const c={hp:5e3,range:10,dps:1700},h=_=>{const g=_.attack;return(g.kind==="burst"?g.n*g.dmg:g.kind==="spread"?g.n*g.dmg*.6:g.dmg*.8)/_.reload},u=lr("div","select");u.innerHTML=`<div class="head"><div class="tro"><i class="cup"></i><b>${e}</b></div><div class="lg">연습 리그 · ${t}</div></div>
    <div class="mid"><div class="seg modes"><button data-m="3v3">3대3</button><button data-m="1v1">1대1</button></div>
      <div class="seg tiers">${vr.map((_,g)=>`<button data-t="${g}">${_.name}</button>`).join("")}</div></div>
    <div class="cards">${xr.map(_=>{const g=$a[_];return`<button class="card" data-id="${_}"><div class="nm">${g.name}</div><div class="role">${g.role}</div>
      <div class="st"><span>체력</span><div class="g"><i style="width:${g.hp/c.hp*100}%"></i></div></div>
      <div class="st"><span>사거리</span><div class="g"><i style="width:${g.attack.range/c.range*100}%"></i></div></div>
      <div class="st"><span>공격</span><div class="g"><i style="width:${Math.min(100,h(g)/c.dps*100)}%"></i></div></div></button>`}).join("")}</div>
    <button class="go">시작</button>`,s.appendChild(u),u.querySelectorAll(".card").forEach(_=>_.addEventListener("click",()=>{p(_.dataset.id),r(_.dataset.id)})),rt(".go",u).addEventListener("click",()=>a());const d=_=>{u.classList.toggle("duel",_==="1v1"),u.querySelectorAll(".modes button").forEach(g=>g.classList.toggle("on",g.dataset.m===_))},f=_=>u.querySelectorAll(".tiers button").forEach(g=>g.classList.toggle("on",Number(g.dataset.t)===_));u.querySelectorAll(".modes button").forEach(_=>_.addEventListener("click",()=>{d(_.dataset.m),o(_.dataset.m)})),u.querySelectorAll(".tiers button").forEach(_=>_.addEventListener("click",()=>{f(Number(_.dataset.t)),l(Number(_.dataset.t))})),d(n),f(i);function p(_){u.querySelectorAll(".card").forEach(g=>g.classList.toggle("on",g.dataset.id===_))}return{box:u,pick:p,show(_){u.classList.toggle("on",_)},setTrophies(_,g){rt(".tro b",u).textContent=_,rt(".lg",u).textContent=`연습 리그 · ${g}`}}}function pb(s,{onAgain:e,onChange:t}){const n=lr("div","result");return n.innerHTML=`<div class="big"></div><div class="tro"><i class="cup"></i><b></b></div><div class="stats"></div>
    <div class="row"><button class="change">챔피언 바꾸기</button><button class="again">다시 하기</button></div>`,s.appendChild(n),rt(".again",n).addEventListener("click",e),rt(".change",n).addEventListener("click",t),{show(i,r){n.classList.toggle("on",i),i&&(n.className=`result on ${r.kind}`,rt(".big",n).textContent=r.kind==="win"?"승리":r.kind==="lose"?"패배":"무승부",rt(".tro b",n).textContent=(r.delta>0?"+":"")+r.delta,rt(".stats",n).innerHTML=`<div><span>처치</span><b>${r.kills}</b></div><div><span>모은 보석</span><b>${r.gems}</b></div><div><span>트로피</span><b>${r.total}</b></div>`)}}}function mb(s,e){const t=(p,_)=>Number(e.get(p)??_)*Math.PI/180,n=t("ang",0),i=e.has("run")?t("run",0):null,r=Number(e.get("every")??.9),a=e.has("super")?Number(e.get("super")||2):null,o=s.units.find(p=>p.team==="blue"&&p.cid===e.get("lab"))||s.units[0],l={x:s.mine.x,z:s.mine.z},c=e.has("nofoe")?null:s.units.find(p=>p.team==="red"&&p.cid===o.cid);for(const p of s.units)p!==o&&p!==c&&(p.alive=!1,p.respawnT=1e9);if(Object.assign(o,{x:l.x,z:l.z,isPlayer:!0,face:n}),c){const p=l.x+Math.cos(n)*5,_=l.z+Math.sin(n)*5;En(s,Math.floor(p),Math.floor(_))?(c.alive=!1,c.respawnT=1e9):Object.assign(c,{x:p,z:_,isPlayer:!0,hp:1e9,maxHp:1e9,face:n+Math.PI})}s.mineT=1e9;let h=.4,u=1,d=0,f=null;return{me:o,tick(p){o.ammo=o.c.ammo,i!=null&&(d+=p,d>1.6&&(d=0,u=-u),o.input.mx=Math.cos(i)*u,o.input.mz=Math.sin(i)*u),h-=p,h<=0&&(h+=r,o.input.fire=n),a!=null&&(f=(f??.6)-p,f<=0&&!o.dash&&(f=a,o.superCharge=1,o.input.superFire=n)),c&&(c.hp=c.maxHp,c.input.mx=c.input.mz=0)}}}const At=new URLSearchParams(location.search),xd=At.get("lab"),Is=At.has("auto")||!!xd,Gc=At.has("sprites"),mi={get:(s,e)=>{try{return JSON.parse(localStorage.getItem("chichibrawl."+s))??e}catch{return e}},set:(s,e)=>{try{localStorage.setItem("chichibrawl."+s,JSON.stringify(e))}catch{}}};let Tn=At.has("tro")?Number(At.get("tro")):mi.get("trophies",0),gi=At.get("champ")||mi.get("pick","dealer");$a[gi]||(gi="dealer");let oc=At.get("mode")||mi.get("mode","3v3"),lc=Math.min(vr.length-1,Number(At.get("tier")??mi.get("duelTier",2)));const gb=document.getElementById("stage"),cn=new Zx({antialias:!0,preserveDrawingBuffer:Is});cn.setPixelRatio(At.has("dpr")?Number(At.get("dpr")):Math.min(devicePixelRatio||1,2));cn.outputColorSpace=dt;cn.shadowMap.enabled=!0;cn.shadowMap.type=ef;cn.toneMapping=qn;gb.appendChild(cn.domElement);const vn=new Lf;vn.background=new Se(3111484);const vd=Math.sin(Gi*Math.PI/180),_b=Math.cos(Gi*Math.PI/180),an=new Sr(-1,1,1,-1,1,220);vn.userData.cam=an;const cc=At.has("view")?Number(At.get("view")):30;let Ui=cc;vn.add(new Kv(16777215,10066329,1.55));const Rn=new Zf(16777215,1.6);Rn.castShadow=!0;Rn.shadow.mapSize.set(2048,2048);Object.assign(Rn.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:90});Rn.shadow.bias=-6e-4;Rn.shadow.normalBias=.04;Rn.shadow.radius=4;vn.add(Rn,Rn.target);function Wc(){cn.setSize(innerWidth,innerHeight);const s=innerWidth/innerHeight;an.left=-Ui/2,an.right=Ui/2,an.top=Ui/s/2,an.bottom=-Ui/s/2,an.updateProjectionMatrix()}addEventListener("resize",Wc);Wc();function ju(s){Math.abs(s-Ui)>.001&&(Ui=s,Wc())}function $u(s,e){an.position.set(s,vd*80,e+_b*80),an.lookAt(s,0,e),an.updateMatrixWorld(),Rn.position.set(s+.18*30,30,e-.52*30),Rn.target.position.set(s,0,e)}const Qo=new I;function Xc(s,e,t){return Qo.set(s,e,t).project(an),[(Qo.x+1)/2*innerWidth,(1-Qo.y)/2*innerHeight]}const xb=At.get("look")==="0",vb=_S(cn,vn,an);let qe=null,_i=null,hc=null,An=[],Hi=null,ze=null,uc=null,nn="load",el=0,ms=0,Sa=28,ba=10.5;const Mi=fb(document.body),Ea=hb(cn.domElement,Mi),Fa=db(document.body,{trophies:Tn,tierName:kc(Tn).name,mode:oc,duelTier:lc,onPick:s=>{gi=s,mi.set("pick",s),Sd()},onStart:()=>Yc(),onMode:s=>{oc=s,mi.set("mode",s)},onTier:s=>{lc=s,mi.set("duelTier",s)}}),qc=pb(document.body,{onAgain:()=>Yc(),onChange:()=>bd()}),yd=new ut({color:16777215,transparent:!0,opacity:.32,depthWrite:!1,side:sn}),Sn=new je(new Mt,yd);Sn.visible=!1;vn.add(Sn);function yb(s){if(s.kind==="spread")return new zi(s.range,24,-s.arc/2,s.arc).rotateX(-Math.PI/2).rotateY(Math.PI/2);const e=s.kind==="dash"?s.dist:s.range,t=s.kind==="dash"?1:s.kind==="burst"?.55:.4;return new Vt(t,e).rotateX(-Math.PI/2).translate(0,0,e/2)}function Mb(){_i&&(_i.dispose(),_i=null),hc?.dispose(),hc=null;for(const s of An)s.dispose();An=[],Hi&&Hi.dispose?.(),Mi.reset()}function Md(s,e){Mb();const t=s.blue.length===1,n=t?vr[lc]:kc(Tn),i=(a,o,l)=>a==="blue"&&o===e?"나":$a[l].name,r={blue:s.blue.map((a,o)=>i("blue",o,a)),red:s.red.map((a,o)=>i("red",o,a))};qe=Uy({picks:s,player:e,tier:n,seed:At.has("seed")?Number(At.get("seed")):Math.random()*1e9|0,names:r}),_i=$M(vn,qe),hc=gS(vn,qe),Hi=Hi||lb(vn,{muzzleOf:(a,o)=>An.find(l=>l.u===a)?.muzzle?.(o)??null}),An=qe.units.map(a=>(Gc?uS:DS)(vn,a)),ze=qe.units.find(a=>a.isPlayer)||qe.units[0],Mi.setLeague(t?`1대1 연습 · ${n.name}`:`연습 리그 · ${n.name}`)}function Sd(){if(!qe||nn!=="select")return;const s=qe.spawns.blue;qe.units.forEach((e,t)=>{const n=An[t];if(e.team!=="blue"){n.root.visible=!1;return}e.x=s[t].x,e.z=s[t].z-1,e.face=Math.PI/2,n.x=e.x,n.z=e.z,e.isPlayer=e.cid===gi,n.ring.material.opacity=e.isPlayer?.95:.25,e.isPlayer&&(n.pop=0)}),Fa.pick(gi)}function bd(){nn="select",qc.show(!1),Mi.show(!1),Md({blue:[...xr],red:[...xr]},-1),Fa.setTrophies(Tn,kc(Tn).name),Fa.show(!0),Sd()}function Yc(){Fa.show(!1),qc.show(!1);const s=xr.filter(n=>n!==gi),e=[...xr].sort(()=>Math.random()-.5),t=oc==="1v1"?{blue:[gi],red:[e[0]]}:{blue:[gi,...s],red:e};Md(t,Is&&!At.has("me")?-1:0),Is&&(ze=qe.units[0]),xd&&(uc=mb(qe,At),ze=uc.me),nn="play",Mi.show(!0),Sa=ze.z,ba=ze.x}function Sb(){nn="result";const s=qe.winner==="draw"?"draw":qe.winner==="blue"?"win":"lose";let e=qe.units.length===2?0:Mu[s];s==="lose"&&Tn<Mu.safeUnder&&(e=0),Tn=Math.max(0,Tn+e),mi.set("trophies",Tn),Mi.show(!1),qc.show(!0,{kind:s,delta:e,total:Tn,kills:ze.kills,gems:ze.gemsTaken||0})}function Zu(s,e,t){if(s==null)return null;if(s!=="auto")return s;let n=null,i=1/0;const r=t.kind==="dash"?t.dist+1:(t.range??Hc(e))*1.1;for(const a of qe.units)if(a.team!==e.team&&$n(qe,e.team,a)){const o=Math.hypot(a.x-e.x,a.z-e.z);o<i&&o<r&&(i=o,n=a)}return n?Math.atan2(n.z-e.z,n.x-e.x):e.face}const Oi=1/60;let tl=0,nl=performance.now(),Ba=0;function Ed(s){if(nn==="play"){if(!Is&&ze.alive){const[e,t]=Ea.move();ze.input.mx=e,ze.input.mz=t;const[n,i]=Ea.take();ze.input.fire=Zu(n,ze,ze.c.attack),ze.input.superFire=Zu(i,ze,ze.c.super)}else Ea.take();uc?.tick(s),zy(qe,s);for(const e of qe.events){if(Hi.onEvent(e),e.type==="destroy"&&_i.destroy(e.i,e.j,e.kind),e.type==="wall"&&_i?.hitWall(e.b),(e.type==="super"||e.type==="death")&&window.__brawl.moments.push({t:+Ba.toFixed(2),type:e.type,who:e.u.c.name,team:e.u.team,d:ze.alive||e.u===ze?+Math.hypot(e.u.x-ze.x,e.u.z-ze.z).toFixed(1):99}),e.type==="hit"){const[t,n]=Xc(e.u.x,e.u.c.height+.3,e.u.z);$n(qe,ze.team,e.u)&&Mi.damage(t,n,e.dmg,e.u===ze,e.u);const i=An.find(r=>r.u===e.u);i&&(i.flash=1,i.onHit?.())}if(e.type==="shot"||e.type==="super"){const t=An.find(i=>i.u===e.u);t&&t.onShot();const n=window.__brawl.shots;n.push({id:e.u.id,t:qe.t,ang:e.ang}),n.length>400&&n.shift()}e.type==="push"&&An.find(t=>t.u===e.u)?.onPush?.(),(e.type==="death"||e.type==="super")&&$n(qe,ze.team,e.u)&&Math.hypot(e.u.x-ze.x,e.u.z-ze.z)<9&&(ms=Math.max(ms,e.u===ze||e.from===ze?.12:.05)),e.type==="gem"&&e.u===ze&&(ze.gemsTaken=(ze.gemsTaken||0)+1),e.type==="end"&&(el=1.6)}qe.events.length=0,qe.over&&(el-=s,el<=0&&!Is&&Sb())}}function Td(s,e){if(!qe)return;const t=ze?ze.team:"blue";for(const i of An){const r=i.u,a=nn==="select"?r.team==="blue":$n(qe,t,r),o=r.team===t&&qe.map[Math.floor(r.z)]?.[Math.floor(r.x)]==="B";nn==="select"&&(i.bodyScale=r.isPlayer?1.1:.92),i.update(s,e,a,o?.6:1),nn==="select"&&(i.root.visible=r.team==="blue")}if(_i.update(e,qe.units,t,qe.bullets),Hi.update(s,e,qe),nn==="select")ju(10*.7/1.05),$u(qe.W/2,qe.spawns.blue[1].z-1.2);else{ju(cc);const i=Ui/(innerWidth/innerHeight)/2/vd-.6,r=ze.team==="blue"?-1.4:1.4,a=(ze.alive?ze.z:qe.spawns[ze.team][ze.k].z)+r;Sa+=(Math.max(i,Math.min(qe.H-i,a))-Sa)*Math.min(1,s*5);const o=cc/2-.4,l=ze.alive?ze.x:qe.spawns[ze.team][ze.k].x;ba+=((o*2>=qe.W?qe.W/2:Math.max(o,Math.min(qe.W-o,l)))-ba)*Math.min(1,s*5),ms=Math.max(0,ms-s);const c=(Math.random()-.5)*ms*.8,h=(Math.random()-.5)*ms*.8;$u(ba+c,Sa+h)}const n=Ea.st;if(nn==="play"&&ze.alive&&n.aimKind&&n.aim!=null){const i=n.aimKind==="sup"?ze.c.super:ze.c.attack;Sn.userData.spec!==i&&(Sn.geometry.dispose(),Sn.geometry=yb(i),Sn.userData.spec=i),Sn.position.set(ze.x,.04,ze.z),Sn.rotation.y=Math.PI/2-n.aim,Sn.visible=!0,yd.color.setHex(n.aimKind==="sup"?16765498:16777215)}else Sn.visible=!1;(nn==="play"||nn==="result")&&Mi.update(qe,ze,Xc,i=>$n(qe,t,i)),Gc||xb?cn.render(vn,an):vb.render()}const Ta=[];function wd(s){Ta.push(s-nl),Ta.length>600&&Ta.shift();const e=Math.min(.05,(s-nl)/1e3);if(nl=s,!Ad){for(tl+=e;tl>=Oi;)Ed(Oi),tl-=Oi,Ba+=Oi;Td(e,s/1e3)}requestAnimationFrame(wd)}let Ad=!1,Ju=0;window.__brawl={ready:!1,moments:[],shots:[],world:()=>_i,project:(s,e,t)=>Xc(s,e,t),actors:()=>An,fxLog:()=>Hi?.log??[],setT(s){for(Ad=!0;Ba<s;)Ed(Oi),Ba+=Oi;Td(Math.max(Oi,s-Ju),s),Ju=s},state:()=>qe,perf(){const s=Ta.slice(30).sort((e,t)=>e-t);return{n:s.length,avg:s.reduce((e,t)=>e+t,0)/s.length,p95:s[Math.floor(s.length*.95)],calls:cn.info.render.calls,tris:cn.info.render.triangles}}};Gc?await lS():await PS(["dealer","tank","sniper"]);await RM();await GM();await OM();document.querySelector(".loading")?.remove();Is?Yc():(At.get("screen"),bd());window.__brawl.ready=!0;requestAnimationFrame(wd);
