(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="169",ld=0,nl=1,hd=2,qh=1,Yh=2,Fn=3,Vn=0,Gt=1,Kt=2,ii=0,Qi=1,yo=2,il=3,sl=4,ud=5,gi=100,dd=101,fd=102,pd=103,md=104,gd=200,_d=201,xd=202,vd=203,So=204,bo=205,Md=206,yd=207,Sd=208,bd=209,Ed=210,Td=211,Ad=212,wd=213,Rd=214,Eo=0,To=1,Ao=2,ss=3,wo=4,Ro=5,Co=6,Io=7,xc=0,Cd=1,Id=2,Gn=0,Pd=1,Ld=2,Dd=3,Ud=4,Nd=5,Fd=6,Od=7,rl="attached",Bd="detached",jh=300,rs=301,as=302,Po=303,Lo=304,da=306,Mi=1e3,ei=1001,Kr=1002,Nt=1003,Kh=1004,Os=1005,kt=1006,Fr=1007,kn=1008,Wn=1009,$h=1010,Zh=1011,Ws=1012,vc=1013,yi=1014,dn=1015,Qs=1016,Mc=1017,yc=1018,os=1020,Jh=35902,Qh=1021,eu=1022,sn=1023,tu=1024,nu=1025,es=1026,cs=1027,Sc=1028,bc=1029,iu=1030,Ec=1031,Tc=1033,Or=33776,Br=33777,zr=33778,kr=33779,Do=35840,Uo=35841,No=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,ko=37808,Ho=37809,Go=37810,Vo=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,jo=37816,Ko=37817,$o=37818,Zo=37819,Jo=37820,Qo=37821,Hr=36492,ec=36494,tc=36495,su=36283,nc=36284,ic=36285,sc=36286,ru=2200,zd=2201,kd=2202,Xs=2300,qs=2301,Ca=2302,Ki=2400,$i=2401,$r=2402,Ac=2500,Hd=2501,Gd=0,au=1,rc=2,Vd=3200,Wd=3201,wc=0,Xd=1,Qn="",ht="srgb",At="srgb-linear",Rc="display-p3",fa="display-p3-linear",Zr="linear",ct="srgb",Jr="rec709",Qr="p3",Ii=7680,al=519,qd=512,Yd=513,jd=514,ou=515,Kd=516,$d=517,Zd=518,Jd=519,ac=35044,ol="300 es",Hn=2e3,ea=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const zs=Math.PI/180,ls=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Cc(s,e){return(s%e+e)%e}function Qd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ef(s,e,t){return s!==e?(t-s)/(e-s):0}function ks(s,e,t){return(1-t)*s+t*e}function tf(s,e,t,n){return ks(s,e,1-Math.exp(-t*n))}function nf(s,e=1){return e-Math.abs(Cc(s,e*2)-e)}function sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function of(s,e){return s+Math.random()*(e-s)}function cf(s){return s*(.5-Math.random())}function lf(s){s!==void 0&&(cl=s);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hf(s){return s*zs}function uf(s){return s*ls}function df(s){return(s&s-1)===0&&s!==0}function ff(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pa={DEG2RAD:zs,RAD2DEG:ls,generateUUID:fn,clamp:Tt,euclideanModulo:Cc,mapLinear:Qd,inverseLerp:ef,lerp:ks,damp:tf,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:af,randFloat:of,randFloatSpread:cf,seededRandom:lf,degToRad:hf,radToDeg:uf,isPowerOfTwo:df,ceilPowerOfTwo:ff,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:st,denormalize:hn};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],M=i[7],w=i[2],b=i[5],E=i[8];return r[0]=a*_+o*y+c*w,r[3]=a*m+o*x+c*b,r[6]=a*p+o*M+c*E,r[1]=l*_+h*y+u*w,r[4]=l*m+h*x+u*b,r[7]=l*p+h*M+u*E,r[2]=d*_+f*y+g*w,r[5]=d*m+f*x+g*b,r[8]=d*p+f*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Be;function cu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gf(){const s=Ys("canvas");return s.style.display="block",s}const ll={};function Gr(s){s in ll||(ll[s]=!0,console.warn(s))}function _f(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function xf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hl=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[At]:{transfer:Zr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[ht]:{transfer:ct,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fa]:{transfer:Zr,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ul),fromReference:s=>s.applyMatrix3(hl)},[Rc]:{transfer:ct,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ul),fromReference:s=>s.applyMatrix3(hl).convertLinearToSRGB()}},Mf=new Set([At,fa]),je={enabled:!0,_workingColorSpace:At,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ys[e].toReference,i=ys[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ys[s].primaries},getTransfer:function(s){return s===Qn?Zr:ys[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(ys[e].luminanceCoefficients)}};function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pi;class yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Ys("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sf=0;class lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(La(i[a].image)):r.push(La(i[a]))}else r=La(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class vt extends Ai{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=ei,i=ei,r=kt,a=kn,o=sn,c=Wn,l=vt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=fn(),this.name="",this.source=new lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=jh;vt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(f+1)/2,w=(p+1)/2,b=(h+d)/4,E=(u+_)/4,C=(g+m)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=E/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ef extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Ef{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hu extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,p*y);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w}const M=o*y;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new I,dl=new It;class Tn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ar.subVectors(this.max,Ss),Li.subVectors(e.a,Ss),Di.subVectors(e.b,Ss),Ui.subVectors(e.c,Ss),qn.subVectors(Di,Li),Yn.subVectors(Ui,Di),oi.subVectors(Li,Ui);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!Ua(t,Li,Di,Ui,ar)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Li,Di,Ui,ar))?!1:(or.crossVectors(qn,Yn),t=[or.x,or.y,or.z],Ua(t,Li,Di,Ui,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,rr=new Tn,Li=new I,Di=new I,Ui=new I,qn=new I,Yn=new I,oi=new I,Ss=new I,ar=new I,or=new I,ci=new I;function Ua(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Af=new Tn,bs=new I,Na=new I;class An{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Af.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Na)),this.expandByPoint(bs.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new I,Fa=new I,cr=new I,jn=new I,Oa=new I,lr=new I,Ba=new I;class ma{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=jn.dot(this.direction),c=-jn.dot(cr),l=jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(cr,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,r){Oa.subVectors(t,e),lr.subVectors(n,e),Ba.crossVectors(Oa,lr);let a=this.direction.dot(Ba),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const c=o*this.direction.dot(lr.crossVectors(jn,lr));if(c<0)return null;const l=o*this.direction.dot(Oa.cross(jn));if(l<0||c+l>a)return null;const h=-o*jn.dot(Ba);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Rf)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Kn.crossVectors(n,qt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Kn.crossVectors(n,qt)),Kn.normalize(),hr.crossVectors(qt,Kn),i[0]=Kn.x,i[4]=hr.x,i[8]=qt.x,i[1]=Kn.y,i[5]=hr.y,i[9]=qt.y,i[2]=Kn.z,i[6]=hr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],w=n[15],b=i[0],E=i[4],C=i[8],P=i[12],v=i[1],S=i[5],D=i[9],F=i[13],k=i[2],j=i[6],B=i[10],Z=i[14],W=i[3],ee=i[7],ae=i[11],X=i[15];return r[0]=a*b+o*v+c*k+l*W,r[4]=a*E+o*S+c*j+l*ee,r[8]=a*C+o*D+c*B+l*ae,r[12]=a*P+o*F+c*Z+l*X,r[1]=h*b+u*v+d*k+f*W,r[5]=h*E+u*S+d*j+f*ee,r[9]=h*C+u*D+d*B+f*ae,r[13]=h*P+u*F+d*Z+f*X,r[2]=g*b+_*v+m*k+p*W,r[6]=g*E+_*S+m*j+p*ee,r[10]=g*C+_*D+m*B+p*ae,r[14]=g*P+_*F+m*Z+p*X,r[3]=y*b+x*v+M*k+w*W,r[7]=y*E+x*S+M*j+w*ee,r[11]=y*C+x*D+M*B+w*ae,r[15]=y*P+x*F+M*Z+w*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,M=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,b=t*y+n*x+i*M+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=y*E,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*E,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*E,e[4]=x*E,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*E,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*E,e[8]=M*E,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*E,e[12]=w*E,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*E,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,x=c*h,M=c*u,w=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+M)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(d+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+x)*E,i[9]=(m-y)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ni.set(i[0],i[1],i[2]).length();const a=Ni.set(i[4],i[5],i[6]).length(),o=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const l=1/r,h=1/a,u=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Hn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Hn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Hn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(o===Hn)g=(a+r)*u,_=-2*u;else if(o===ea)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new I,cn=new Pe,wf=new I(0,0,0),Rf=new I(1,1,1),Kn=new I,hr=new I,qt=new I,fl=new Pe,pl=new It;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const ml=new I,Fi=new It,Ln=new Pe,ur=new I,Es=new I,If=new I,Pf=new It,gl=new I(1,0,0),_l=new I(0,1,0),xl=new I(0,0,1),vl={type:"added"},Lf={type:"removed"},Oi={type:"childadded",child:null},za={type:"childremoved",child:null};class lt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new I,t=new pn,n=new It,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Be}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Es,ur,this.up):Ln.lookAt(ur,Es,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new I(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new I,Dn=new I,ka=new I,Un=new I,Bi=new I,zi=new I,Ml=new I,Ha=new I,Ga=new I,Va=new I,Wa=new Qe,Xa=new Qe,qa=new Qe;class nn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),Dn.subVectors(n,t),ka.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Dn),c=ln.dot(ka),l=Dn.dot(Dn),h=Dn.dot(ka),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Dn.subVectors(e,t),ln.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Bi.subVectors(i,n),zi.subVectors(r,n),Ha.subVectors(e,n);const c=Bi.dot(Ha),l=zi.dot(Ha);if(c<=0&&l<=0)return t.copy(n);Ga.subVectors(e,i);const h=Bi.dot(Ga),u=zi.dot(Ga);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bi,a);Va.subVectors(e,r);const f=Bi.dot(Va),g=zi.dot(Va);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(zi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ml.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Ml,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ya(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Cc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ya(a,r,e+1/3),this.g=Ya(a,r,e),this.b=Ya(a,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return je.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Tt(Ct.r*255,0,255))*65536+Math.round(Tt(Ct.g*255,0,255))*256+Math.round(Tt(Ct.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ht){je.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(dr);const n=ks($n.h,dr.h,t),i=ks($n.s,dr.s,t),r=ks($n.l,dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new re;re.NAMES=du;let Df=0;class rn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Qi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _t extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,fr=new ye;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}}class fu extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uf=0;const Jt=new Pe,ja=new lt,ki=new I,Yt=new Tn,Ts=new Tn,St=new I;class ft extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?pu:fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Yt.min,Ts.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Ts.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Ts.min),Yt.expandByPoint(Ts.max))}Yt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(e,l),St.add(ki)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;const l=new I,h=new I,u=new I,d=new ye,f=new ye,g=new ye,_=new I,m=new I;function p(C,P,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[C].add(_),o[P].add(_),o[v].add(_),c[C].add(m),c[P].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,P=y.length;C<P;++C){const v=y[C],S=v.start,D=v.count;for(let F=S,k=S+D;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new I,M=new I,w=new I,b=new I;function E(C){w.fromBufferAttribute(i,C),b.copy(w);const P=o[C];x.copy(P),x.sub(w.multiplyScalar(w.dot(P))).normalize(),M.crossVectors(b,P);const S=M.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,S)}for(let C=0,P=y.length;C<P;++C){const v=y[C],S=v.start,D=v.count;for(let F=S,k=S+D;F<k;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Pe,li=new ma,pr=new An,Sl=new I,mr=new I,gr=new I,_r=new I,Ka=new I,xr=new I,bl=new I,vr=new I;class Ke extends lt{constructor(e=new ft,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ka.fromBufferAttribute(u,e),a?xr.addScaledVector(Ka,h):xr.addScaledVector(Ka.sub(t),h))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(pr.containsPoint(li.origin)===!1&&(li.intersectSphere(pr,Sl)===null||li.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(yl.copy(r).invert(),li.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=x;M<w;M+=3){const b=o.getX(M),E=o.getX(M+1),C=o.getX(M+2);i=Mr(this,p,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=Mr(this,a,e,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=x;M<w;M+=3){const b=M,E=M+1,C=M+2;i=Mr(this,p,e,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,M=m+2;i=Mr(this,a,e,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Nf(s,e,t,n,i,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Vn,o),c===null)return null;vr.copy(o),vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:s}}function Mr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,mr),s.getVertexPosition(c,gr),s.getVertexPosition(l,_r);const h=Nf(s,e,t,n,mr,gr,_r,bl);if(h){const u=new I;nn.getBarycoord(bl,mr,gr,_r,u),i&&(h.uv=nn.getInterpolatedAttribute(i,o,c,l,u,new ye)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,c,l,u,new ye)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};nn.getNormal(mr,gr,_r,d.normal),h.face=d,h.barycoord=u}return h}class ps extends ft{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,m,p,y,x,M,w,b,E,C,P){const v=M/E,S=w/C,D=M/2,F=w/2,k=b/2,j=E+1,B=C+1;let Z=0,W=0;const ee=new I;for(let ae=0;ae<B;ae++){const X=ae*S-F;for(let ie=0;ie<j;ie++){const Ee=ie*v-D;ee[_]=Ee*y,ee[m]=X*x,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ie/E),u.push(1-ae/C),Z+=1}}for(let ae=0;ae<C;ae++)for(let X=0;X<E;X++){const ie=d+X+j*ae,Ee=d+X+j*(ae+1),V=d+(X+1)+j*(ae+1),K=d+(X+1)+j*ae;c.push(ie,Ee,K),c.push(Ee,V,K),W+=6}o.addGroup(f,W,P),f+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=hs(s[t]);for(const i in n)e[i]=n[i]}return e}function Ff(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Of={clone:hs,merge:Dt};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new I,El=new ye,Tl=new ye;class zt extends gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,El,Tl),t.subVectors(Tl,El)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class kf extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(Hi,Gi,e,t);i.layers=this.layers,this.add(i);const r=new zt(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const a=new zt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new zt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new zt(Hi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new zt(Hi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _u extends vt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hf extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _u(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ps(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:ii});r.uniforms.tEquirect.value=t;const a=new Ke(i,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=kt),new kf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const $a=new I,Gf=new I,Vf=new Be;class pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$a.subVectors(n,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vf.getNormalMatrix(e),i=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new An,yr=new I;class Ic{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,a=new pi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+a,d+h,m+g,M+y).normalize(),n[3].setComponents(c-a,d-h,m-g,M-y).normalize(),n[4].setComponents(c-o,d-u,m-_,M-x).normalize(),t===Hn)n[5].setComponents(c+o,d+u,m+_,M+x).normalize();else if(t===ea)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wf(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class $t extends ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<l;x++){const M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,M=y+l*(p+1),w=y+1+l*(p+1),b=y+1+l*p;f.push(x,M,b),f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`
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
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,_g=`#define TOON
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
}`,xg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:jf,alphatest_fragment:Kf,alphatest_pars_fragment:$f,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:Qf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:cp,clipping_planes_vertex:lp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:yp,colorspace_pars_fragment:Sp,envmap_fragment:bp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:wp,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Ip,fog_pars_fragment:Pp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:Fp,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:kp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:$p,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:cm,normal_fragment_maps:lm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:Mm,project_vertex:ym,dithering_fragment:Sm,dithering_pars_fragment:bm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:wm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Im,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Um,specularmap_pars_fragment:Nm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:km,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Vm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:jm,cube_frag:Km,depth_vert:$m,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:xg,points_frag:vg,shadow_vert:Mg,shadow_frag:yg,sprite_vert:Sg,sprite_frag:bg},se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},xn={basic:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Dt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Dt([se.lights,se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};xn.physical={uniforms:Dt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Sr={r:0,b:0,g:0},ui=new pn,Eg=new Pe;function Tg(s,e,t,n,i,r,a){const o=new re(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const M=g(y);M===null?p(o,c):M&&M.isColor&&(p(M,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===da)?(h===void 0&&(h=new Ke(new ps(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:hs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(ui)),h.material.toneMapped=je.getTransfer(M.colorSpace)!==ct,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ke(new $t(2,2),new si({name:"BackgroundMaterial",uniforms:hs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Sr,mu(s)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m}}function Ag(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,S,D,F,k){let j=!1;const B=u(F,D,S);r!==B&&(r=B,l(r.object)),j=f(v,F,D,k),j&&g(v,F,D,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(v,S,D,F),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,S,D){const F=D.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let j=k[S.id];j===void 0&&(j={},k[S.id]=j);let B=j[F];return B===void 0&&(B=d(c()),j[F]=B),B}function d(v){const S=[],D=[],F=[];for(let k=0;k<t;k++)S[k]=0,D[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,S,D,F){const k=r.attributes,j=S.attributes;let B=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){const ae=k[W];let X=j[W];if(X===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(X=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(X=v.instanceColor)),ae===void 0||ae.attribute!==X||X&&ae.data!==X.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(v,S,D,F){const k={},j=S.attributes;let B=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){let ae=j[W];ae===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const X={};X.attribute=ae,ae&&ae.data&&(X.data=ae.data),k[W]=X,B++}r.attributes=k,r.attributesNum=B,r.index=F}function _(){const v=r.newAttributes;for(let S=0,D=v.length;S<D;S++)v[S]=0}function m(v){p(v,0)}function p(v,S){const D=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;D[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),k[v]!==S&&(s.vertexAttribDivisor(v,S),k[v]=S)}function y(){const v=r.newAttributes,S=r.enabledAttributes;for(let D=0,F=S.length;D<F;D++)S[D]!==v[D]&&(s.disableVertexAttribArray(D),S[D]=0)}function x(v,S,D,F,k,j,B){B===!0?s.vertexAttribIPointer(v,S,D,k,j):s.vertexAttribPointer(v,S,D,F,k,j)}function M(v,S,D,F){_();const k=F.attributes,j=D.getAttributes(),B=S.defaultAttributeValues;for(const Z in j){const W=j[Z];if(W.location>=0){let ee=k[Z];if(ee===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const ae=ee.normalized,X=ee.itemSize,ie=e.get(ee);if(ie===void 0)continue;const Ee=ie.buffer,V=ie.type,K=ie.bytesPerElement,fe=V===s.INT||V===s.UNSIGNED_INT||ee.gpuType===vc;if(ee.isInterleavedBufferAttribute){const ce=ee.data,Ae=ce.stride,be=ee.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<W.locationSize;ze++)p(W.location+ze,ce.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ze=0;ze<W.locationSize;ze++)x(W.location+ze,X/W.locationSize,V,ae,Ae*K,(be+X/W.locationSize*ze)*K,fe)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce,ee.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ce=0;ce<W.locationSize;ce++)x(W.location+ce,X/W.locationSize,V,ae,X*K,X/W.locationSize*ce*K,fe)}}else if(B!==void 0){const ae=B[Z];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(W.location,ae);break;case 3:s.vertexAttrib3fv(W.location,ae);break;case 4:s.vertexAttrib4fv(W.location,ae);break;default:s.vertexAttrib1fv(W.location,ae)}}}}y()}function w(){C();for(const v in n){const S=n[v];for(const D in S){const F=S[D];for(const k in F)h(F[k].object),delete F[k];delete S[D]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const D in S){const F=S[D];for(const k in F)h(F[k].object),delete F[k];delete S[D]}delete n[v.id]}function E(v){for(const S in n){const D=n[S];if(D[v.id]===void 0)continue;const F=D[v.id];for(const k in F)h(F[k].object),delete F[k];delete D[v.id]}}function C(){P(),a=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function wg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==sn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==dn&&!C)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:w,maxSamples:b}}function Cg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new pi,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let M=p.clippingState||null;c.value=M,M=h(g,d,x,f);for(let w=0;w!==x;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ig(s){let e=new WeakMap;function t(a,o){return o===Po?a.mapping=rs:o===Lo&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Po||o===Lo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hf(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ga extends gu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Al=[.125,.215,.35,.446,.526,.582],_i=20,Za=new ga,wl=new re;let Ja=null,Qa=0,eo=0,to=!1;const mi=(1+Math.sqrt(5))/2,Vi=1/mi,Rl=[new I(-mi,Vi,0),new I(mi,Vi,0),new I(-Vi,0,mi),new I(Vi,0,mi),new I(0,mi,-Vi),new I(0,mi,Vi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Qs,format:sn,colorSpace:At,depthBuffer:!1},i=Il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Lg(r,e,t)}return i}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wl),h.toneMapping=Gn,h.autoClear=!1;const f=new _t({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Ke(new ps,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(wl),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;br(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rl[(i-r-1)%Rl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let y=0;for(let E=0;E<_i;++E){const C=E/_,P=Math.exp(-C*C/2);p.push(P),E===0?y+=P:E<m&&(y+=2*P)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],w=3*M*(i>x-Zi?i-x+Zi:0),b=4*(this._cubeSize-M);br(t,w,b,3*M,2*M),c.setRenderTarget(t),c.render(u,Za)}}function Pg(s){const e=[],t=[],n=[];let i=s;const r=s-Zi+1+Al.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Zi?c=Al[a-s+Zi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,C=b>2?0:-1,P=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(P,_*g*b),x.set(d,m*g*b);const v=[b,b,b,b,b,b];M.set(v,p*g*b)}const w=new ft;w.setAttribute("position",new xt(y,_)),w.setAttribute("uv",new xt(x,m)),w.setAttribute("faceIndex",new xt(M,p)),e.push(w),i>Zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Il(s,e,t){const n=new Si(s,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Lg(s,e,t){const n=new Float32Array(_i),i=new I(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Pl(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ll(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Dg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Po||c===Lo,h=c===rs||c===as;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Cl(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Cl(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ug(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const w=y[x+0],b=y[x+1],E=y[x+2];d.push(w,b,b,E,E,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const w=x+0,b=x+1,E=x+2;d.push(w,b,b,E,E,w)}}else return;const m=new(cu(d)?pu:fu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<_.length;y++)t.update(p,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bg(s,e,t){const n=new WeakMap,i=new Qe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=o.attributes.position.count*x,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*w*4*u),E=new hu(b,M,w,u);E.type=dn,E.needsUpdate=!0;const C=x*4;for(let v=0;v<u;v++){const S=m[v],D=p[v],F=y[v],k=M*w*4*v;for(let j=0;j<S.count;j++){const B=j*C;f===!0&&(i.fromBufferAttribute(S,j),b[k+B+0]=i.x,b[k+B+1]=i.y,b[k+B+2]=i.z,b[k+B+3]=0),g===!0&&(i.fromBufferAttribute(D,j),b[k+B+4]=i.x,b[k+B+5]=i.y,b[k+B+6]=i.z,b[k+B+7]=0),_===!0&&(i.fromBufferAttribute(F,j),b[k+B+8]=i.x,b[k+B+9]=i.y,b[k+B+10]=i.z,b[k+B+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new ye(M,w)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class vu extends vt{constructor(e,t,n,i,r,a,o,c,l,h=es){if(h!==es&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=yi),n===void 0&&h===cs&&(n=os),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new vt,Dl=new vu(1,1),yu=new hu,Su=new Tf,bu=new _u,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function ms(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ul[i];if(r===void 0&&(r=new Float32Array(i),Ul[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _a(s,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function Wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Bl.set(n),s.uniformMatrix2fv(this.addr,!1,Bl),yt(t,n)}}function Xg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Ol.set(n),s.uniformMatrix3fv(this.addr,!1,Ol),yt(t,n)}}function qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Fl.set(n),s.uniformMatrix4fv(this.addr,!1,Fl),yt(t,n)}}function Yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),yt(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),yt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),yt(t,e)}}function Zg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),yt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),yt(t,e)}}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),yt(t,e)}}function t0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dl.compareFunction=ou,r=Dl):r=Mu,t.setTexture2D(e||r,i)}function n0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Su,i)}function i0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bu,i)}function s0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yu,i)}function r0(s){switch(s){case 5126:return kg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return $g;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(s,e){s.uniform1fv(this.addr,e)}function o0(s,e){const t=ms(e,this.size,2);s.uniform2fv(this.addr,t)}function c0(s,e){const t=ms(e,this.size,3);s.uniform3fv(this.addr,t)}function l0(s,e){const t=ms(e,this.size,4);s.uniform4fv(this.addr,t)}function h0(s,e){const t=ms(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function u0(s,e){const t=ms(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d0(s,e){const t=ms(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f0(s,e){s.uniform1iv(this.addr,e)}function p0(s,e){s.uniform2iv(this.addr,e)}function m0(s,e){s.uniform3iv(this.addr,e)}function g0(s,e){s.uniform4iv(this.addr,e)}function _0(s,e){s.uniform1uiv(this.addr,e)}function x0(s,e){s.uniform2uiv(this.addr,e)}function v0(s,e){s.uniform3uiv(this.addr,e)}function M0(s,e){s.uniform4uiv(this.addr,e)}function y0(s,e,t){const n=this.cache,i=e.length,r=_a(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mu,r[a])}function S0(s,e,t){const n=this.cache,i=e.length,r=_a(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Su,r[a])}function b0(s,e,t){const n=this.cache,i=e.length,r=_a(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bu,r[a])}function E0(s,e,t){const n=this.cache,i=e.length,r=_a(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yu,r[a])}function T0(s){switch(s){case 5126:return a0;case 35664:return o0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return E0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function zl(s,e){s.seq.push(e),s.map[e.id]=e}function C0(s,e,t){const n=s.name,i=n.length;for(no.lastIndex=0;;){const r=no.exec(n),a=no.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){zl(t,l===void 0?new A0(o,s,e):new w0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new R0(o),zl(t,u)),t=u}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);C0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const I0=37297;let P0=0;function L0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function D0(s){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s);let n;switch(e===t?n="":e===Qr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Qr&&(n="LinearSRGBToLinearDisplayP3"),s){case At:case fa:return[n,"LinearTransferOETF"];case ht:case Rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Hl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+L0(s.getShaderSource(e),a)}else return i}function U0(s,e){const t=D0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function N0(s,e){let t;switch(e){case Pd:t="Linear";break;case Ld:t="Reinhard";break;case Dd:t="Cineon";break;case Ud:t="ACESFilmic";break;case Fd:t="AgX";break;case Od:t="Neutral";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new I;function F0(){je.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function B0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Bs(s){return s!==""}function Gl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(s){return s.replace(k0,G0)}const H0=new Map;function G0(s,e){let t=Oe[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(s){return s.replace(V0,W0)}function W0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function X0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case as:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function j0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function K0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=X0(t),l=q0(t),h=Y0(t),u=j0(t),d=K0(t),f=O0(t),g=B0(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),a=oc(a),a=Gl(a,t),a=Vl(a,t),o=oc(o),o=Gl(o,t),o=Vl(o,t),a=Wl(a),o=Wl(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,M=y+p+o,w=kl(i,i.VERTEX_SHADER,x),b=kl(i,i.FRAGMENT_SHADER,M);i.attachShader(_,w),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(S){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(b).trim();let j=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,b);else{const Z=Hl(i,w,"vertex"),W=Hl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+Z+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||k==="")&&(B=!1);B&&(S.diagnostics={runnable:j,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(w),i.deleteShader(b),C=new Vr(i,_),P=z0(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let P;this.getAttributes=function(){return P===void 0&&E(this),P};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,I0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}}function e_(s,e,t,n,i,r,a){const o=new uu,c=new J0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,D,F,k){const j=F.fog,B=k.geometry,Z=v.isMeshStandardMaterial?F.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),ee=W&&W.mapping===da?W.image.height:null,ae=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=X!==void 0?X.length:0;let Ee=0;B.morphAttributes.position!==void 0&&(Ee=1),B.morphAttributes.normal!==void 0&&(Ee=2),B.morphAttributes.color!==void 0&&(Ee=3);let V,K,fe,ce;if(ae){const Ot=xn[ae];V=Ot.vertexShader,K=Ot.fragmentShader}else V=v.vertexShader,K=v.fragmentShader,c.update(v),fe=c.getVertexShaderID(v),ce=c.getFragmentShaderID(v);const Ae=s.getRenderTarget(),be=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,qe=!!v.map,Fe=!!v.matcap,L=!!W,wt=!!v.aoMap,ke=!!v.lightMap,Ve=!!v.bumpMap,Te=!!v.normalMap,rt=!!v.displacementMap,we=!!v.emissiveMap,R=!!v.metalnessMap,T=!!v.roughnessMap,z=v.anisotropy>0,q=v.clearcoat>0,Q=v.dispersion>0,$=v.iridescence>0,xe=v.sheen>0,oe=v.transmission>0,pe=z&&!!v.anisotropyMap,Ye=q&&!!v.clearcoatMap,te=q&&!!v.clearcoatNormalMap,me=q&&!!v.clearcoatRoughnessMap,Le=$&&!!v.iridescenceMap,De=$&&!!v.iridescenceThicknessMap,ge=xe&&!!v.sheenColorMap,We=xe&&!!v.sheenRoughnessMap,Ue=!!v.specularMap,at=!!v.specularColorMap,U=!!v.specularIntensityMap,ue=oe&&!!v.transmissionMap,Y=oe&&!!v.thicknessMap,J=!!v.gradientMap,le=!!v.alphaMap,de=v.alphaTest>0,Xe=!!v.alphaHash,pt=!!v.extensions;let Ft=Gn;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Ze={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:K,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:At,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:Fe,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:ee,aoMap:wt,lightMap:ke,bumpMap:Ve,normalMap:Te,displacementMap:f&&rt,emissiveMap:we,normalMapObjectSpace:Te&&v.normalMapType===Xd,normalMapTangentSpace:Te&&v.normalMapType===wc,metalnessMap:R,roughnessMap:T,anisotropy:z,anisotropyMap:pe,clearcoat:q,clearcoatMap:Ye,clearcoatNormalMap:te,clearcoatRoughnessMap:me,dispersion:Q,iridescence:$,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:xe,sheenColorMap:ge,sheenRoughnessMap:We,specularMap:Ue,specularColorMap:at,specularIntensityMap:U,transmission:oe,transmissionMap:ue,thicknessMap:Y,gradientMap:J,opaque:v.transparent===!1&&v.blending===Qi&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Xe,combine:v.combine,mapUv:qe&&m(v.map.channel),aoMapUv:wt&&m(v.aoMap.channel),lightMapUv:ke&&m(v.lightMap.channel),bumpMapUv:Ve&&m(v.bumpMap.channel),normalMapUv:Te&&m(v.normalMap.channel),displacementMapUv:rt&&m(v.displacementMap.channel),emissiveMapUv:we&&m(v.emissiveMap.channel),metalnessMapUv:R&&m(v.metalnessMap.channel),roughnessMapUv:T&&m(v.roughnessMap.channel),anisotropyMapUv:pe&&m(v.anisotropyMap.channel),clearcoatMapUv:Ye&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(v.sheenRoughnessMap.channel),specularMapUv:Ue&&m(v.specularMap.channel),specularColorMapUv:at&&m(v.specularColorMap.channel),specularIntensityMapUv:U&&m(v.specularIntensityMap.channel),transmissionMapUv:ue&&m(v.transmissionMap.channel),thicknessMapUv:Y&&m(v.thicknessMap.channel),alphaMapUv:le&&m(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Te||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(qe||le),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(S,v),M(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function w(v){const S=_[v.type];let D;if(S){const F=xn[S];D=Of.clone(F.uniforms)}else D=v.uniforms;return D}function b(v,S){let D;for(let F=0,k=h.length;F<k;F++){const j=h[F];if(j.cacheKey===S){D=j,++D.usedTimes;break}}return D===void 0&&(D=new $0(s,S,v,r),h.push(D)),D}function E(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:w,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function t_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function n_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ql(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||n_),n.length>1&&n.sort(d||ql),i.length>1&&i.sort(d||ql)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function i_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yl,s.set(n,[a])):i>=r.length?(a=new Yl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function s_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new re};break;case"SpotLight":t={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function r_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let a_=0;function o_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function c_(s){const e=new s_,t=r_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Pe,a=new Pe;function o(l){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,M=0,w=0,b=0,E=0;l.sort(o_);for(let P=0,v=l.length;P<v;P++){const S=l[P],D=S.color,F=S.intensity,k=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],F);E++}else if(S.isDirectionalLight){const B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,W=t.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=B,f++}else if(S.isSpotLight){const B=e.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(D).multiplyScalar(F),B.distance=k,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[_]=B;const Z=S.shadow;if(S.map&&(n.spotLightMap[w]=S.map,w++,Z.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,S.castShadow){const W=t.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=j,M++}_++}else if(S.isRectAreaLight){const B=e.get(S);B.color.copy(D).multiplyScalar(F),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=B,m++}else if(S.isPointLight){const B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const Z=S.shadow,W=t.get(S);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=B,g++}else if(S.isHemisphereLight){const B=e.get(S);B.skyColor.copy(S.color).multiplyScalar(F),B.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==w||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=w,C.numLightProbes=E,n.version=a_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function jl(s){const e=new c_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function l_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new jl(s),e.set(i,[o])):r>=a.length?(o=new jl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class h_ extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u_ extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
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
}`;function p_(s,e,t){let n=new Ic;const i=new ye,r=new ye,a=new Qe,o=new h_({depthPacking:Wd}),c=new u_,l={},h=t.maxTextureSize,u={[Vn]:Gt,[Gt]:Vn,[Kt]:Kt},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ft;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==Fn&&this.type===Fn,k=p===Fn&&this.type!==Fn;for(let j=0,B=b.length;j<B;j++){const Z=b[j],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();if(i.multiply(ee),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||F===!0||k===!0){const X=this.type!==Fn?{minFilter:Nt,magFilter:Nt}:{};W.map!==null&&W.map.dispose(),W.map=new Si(i.x,i.y,X),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ae=W.getViewportCount();for(let X=0;X<ae;X++){const ie=W.getViewport(X);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),D.viewport(a),W.updateMatrices(Z,X),n=W.getFrustum(),M(E,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Fn&&y(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(P,v,S)};function y(b,E){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Si(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,f,_,null)}function x(b,E,C,P){let v=null;const S=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)v=S;else if(v=C.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=v.uuid,F=E.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let j=k[F];j===void 0&&(j=v.clone(),k[F]=j,E.addEventListener("dispose",w)),v=j}if(v.visible=E.visible,v.wireframe=E.wireframe,P===Fn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=s.properties.get(v);D.light=C}return v}function M(b,E,C,P,v){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Fn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=e.update(b),k=b.material;if(Array.isArray(k)){const j=F.groups;for(let B=0,Z=j.length;B<Z;B++){const W=j[B],ee=k[W.materialIndex];if(ee&&ee.visible){const ae=x(b,ee,P,v);b.onBeforeShadow(s,b,E,C,F,ae,W),s.renderBufferDirect(C,null,F,ae,b,W),b.onAfterShadow(s,b,E,C,F,ae,W)}}}else if(k.visible){const j=x(b,k,P,v);b.onBeforeShadow(s,b,E,C,F,j,null),s.renderBufferDirect(C,null,F,j,b,null),b.onAfterShadow(s,b,E,C,F,j,null)}}const D=b.children;for(let F=0,k=D.length;F<k;F++)M(D[F],E,C,P,v)}function w(b){b.target.removeEventListener("dispose",w);for(const C in l){const P=l[C],v=b.target.uuid;v in P&&(P[v].dispose(),delete P[v])}}}const m_={[Eo]:To,[Ao]:Co,[wo]:Io,[ss]:Ro,[To]:Eo,[Co]:Ao,[Io]:wo,[Ro]:ss};function g_(s){function e(){let U=!1;const ue=new Qe;let Y=null;const J=new Qe(0,0,0,0);return{setMask:function(le){Y!==le&&!U&&(s.colorMask(le,le,le,le),Y=le)},setLocked:function(le){U=le},setClear:function(le,de,Xe,pt,Ft){Ft===!0&&(le*=pt,de*=pt,Xe*=pt),ue.set(le,de,Xe,pt),J.equals(ue)===!1&&(s.clearColor(le,de,Xe,pt),J.copy(ue))},reset:function(){U=!1,Y=null,J.set(-1,0,0,0)}}}function t(){let U=!1,ue=!1,Y=null,J=null,le=null;return{setReversed:function(de){ue=de},setTest:function(de){de?fe(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(de){Y!==de&&!U&&(s.depthMask(de),Y=de)},setFunc:function(de){if(ue&&(de=m_[de]),J!==de){switch(de){case Eo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Ao:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case wo:s.depthFunc(s.EQUAL);break;case Ro:s.depthFunc(s.GEQUAL);break;case Co:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){le!==de&&(s.clearDepth(de),le=de)},reset:function(){U=!1,Y=null,J=null,le=null}}}function n(){let U=!1,ue=null,Y=null,J=null,le=null,de=null,Xe=null,pt=null,Ft=null;return{setTest:function(Ze){U||(Ze?fe(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!U&&(s.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,Ot,Cn){(Y!==Ze||J!==Ot||le!==Cn)&&(s.stencilFunc(Ze,Ot,Cn),Y=Ze,J=Ot,le=Cn)},setOp:function(Ze,Ot,Cn){(de!==Ze||Xe!==Ot||pt!==Cn)&&(s.stencilOp(Ze,Ot,Cn),de=Ze,Xe=Ot,pt=Cn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Ft!==Ze&&(s.clearStencil(Ze),Ft=Ze)},reset:function(){U=!1,ue=null,Y=null,J=null,le=null,de=null,Xe=null,pt=null,Ft=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,M=null,w=null,b=new re(0,0,0),E=0,C=!1,P=null,v=null,S=null,D=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=B>=2);let W=null,ee={};const ae=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),ie=new Qe().fromArray(ae),Ee=new Qe().fromArray(X);function V(U,ue,Y,J){const le=new Uint8Array(4),de=s.createTexture();s.bindTexture(U,de),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Y;Xe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ue+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return de}const K={};K[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(ss),ke(!1),Ve(nl),fe(s.CULL_FACE),L(ii);function fe(U){l[U]!==!0&&(s.enable(U),l[U]=!0)}function ce(U){l[U]!==!1&&(s.disable(U),l[U]=!1)}function Ae(U,ue){return h[U]!==ue?(s.bindFramebuffer(U,ue),h[U]=ue,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(U,ue){let Y=d,J=!1;if(U){Y=u.get(ue),Y===void 0&&(Y=[],u.set(ue,Y));const le=U.textures;if(Y.length!==le.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Xe=le.length;de<Xe;de++)Y[de]=s.COLOR_ATTACHMENT0+de;Y.length=le.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function ze(U){return f!==U?(s.useProgram(U),f=U,!0):!1}const qe={[gi]:s.FUNC_ADD,[dd]:s.FUNC_SUBTRACT,[fd]:s.FUNC_REVERSE_SUBTRACT};qe[pd]=s.MIN,qe[md]=s.MAX;const Fe={[gd]:s.ZERO,[_d]:s.ONE,[xd]:s.SRC_COLOR,[So]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[Md]:s.DST_ALPHA,[vd]:s.ONE_MINUS_SRC_COLOR,[bo]:s.ONE_MINUS_SRC_ALPHA,[bd]:s.ONE_MINUS_DST_COLOR,[yd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[wd]:s.CONSTANT_ALPHA,[Rd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(U,ue,Y,J,le,de,Xe,pt,Ft,Ze){if(U===ii){g===!0&&(ce(s.BLEND),g=!1);return}if(g===!1&&(fe(s.BLEND),g=!0),U!==ud){if(U!==_||Ze!==C){if((m!==gi||x!==gi)&&(s.blendEquation(s.FUNC_ADD),m=gi,x=gi),Ze)switch(U){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yo:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,y=null,M=null,w=null,b.set(0,0,0),E=0,_=U,C=Ze}return}le=le||ue,de=de||Y,Xe=Xe||J,(ue!==m||le!==x)&&(s.blendEquationSeparate(qe[ue],qe[le]),m=ue,x=le),(Y!==p||J!==y||de!==M||Xe!==w)&&(s.blendFuncSeparate(Fe[Y],Fe[J],Fe[de],Fe[Xe]),p=Y,y=J,M=de,w=Xe),(pt.equals(b)===!1||Ft!==E)&&(s.blendColor(pt.r,pt.g,pt.b,Ft),b.copy(pt),E=Ft),_=U,C=!1}function wt(U,ue){U.side===Kt?ce(s.CULL_FACE):fe(s.CULL_FACE);let Y=U.side===Gt;ue&&(Y=!Y),ke(Y),U.blending===Qi&&U.transparent===!1?L(ii):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function Ve(U){U!==ld?(fe(s.CULL_FACE),U!==v&&(U===nl?s.cullFace(s.BACK):U===hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),v=U}function Te(U){U!==S&&(j&&s.lineWidth(U),S=U)}function rt(U,ue,Y){U?(fe(s.POLYGON_OFFSET_FILL),(D!==ue||F!==Y)&&(s.polygonOffset(ue,Y),D=ue,F=Y)):ce(s.POLYGON_OFFSET_FILL)}function we(U){U?fe(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+k-1),W!==U&&(s.activeTexture(U),W=U)}function T(U,ue,Y){Y===void 0&&(W===null?Y=s.TEXTURE0+k-1:Y=W);let J=ee[Y];J===void 0&&(J={type:void 0,texture:void 0},ee[Y]=J),(J.type!==U||J.texture!==ue)&&(W!==Y&&(s.activeTexture(Y),W=Y),s.bindTexture(U,ue||K[U]),J.type=U,J.texture=ue)}function z(){const U=ee[W];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){ie.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function ge(U){Ee.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ee.copy(U))}function We(U,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let J=Y.get(U);J===void 0&&(J=s.getUniformBlockIndex(ue,U.name),Y.set(U,J))}function Ue(U,ue){const J=c.get(ue).get(U);o.get(ue)!==J&&(s.uniformBlockBinding(ue,J,U.__bindingPointIndex),o.set(ue,J))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,ee={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,M=null,w=null,b=new re(0,0,0),E=0,C=!1,P=null,v=null,S=null,D=null,F=null,ie.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:fe,disable:ce,bindFramebuffer:Ae,drawBuffers:be,useProgram:ze,setBlending:L,setMaterial:wt,setFlipSided:ke,setCullFace:Ve,setLineWidth:Te,setPolygonOffset:rt,setScissorTest:we,activeTexture:R,bindTexture:T,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:me,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ye,texStorage3D:te,texSubImage2D:$,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:De,viewport:ge,reset:at}}function Kl(s,e,t,n){const i=__(n);switch(t){case Qh:return s*e;case tu:return s*e;case nu:return s*e*2;case Sc:return s*e/i.components*i.byteLength;case bc:return s*e/i.components*i.byteLength;case iu:return s*e*2/i.components*i.byteLength;case Ec:return s*e*2/i.components*i.byteLength;case eu:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case Tc:return s*e*4/i.components*i.byteLength;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zr:case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Fo:return Math.max(s,16)*Math.max(e,8)/4;case Do:case No:return Math.max(s,8)*Math.max(e,8)/2;case Oo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hr:case ec:case tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case su:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(s){switch(s){case Wn:case $h:return{byteLength:1,components:1};case Ws:case Zh:case Qs:return{byteLength:2,components:1};case Mc:case yc:return{byteLength:2,components:4};case yi:case vc:case dn:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function x_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return f?new OffscreenCanvas(R,T):Ys("canvas")}function _(R,T,z){let q=1;const Q=we(R);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(q*Q.width),xe=Math.floor(q*Q.height);u===void 0&&(u=g($,xe));const oe=T?g($,xe):u;return oe.width=$,oe.height=xe,oe.getContext("2d").drawImage(R,0,0,$,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+xe+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Nt&&R.minFilter!==kt}function p(R){s.generateMipmap(R)}function y(R,T,z,q,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=T;if(T===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),T===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),T===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),T===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),T===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),T===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),T===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),T===s.RGBA){const xe=Q?Zr:je.getTransfer(q);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=xe===ct?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,T){let z;return R?T===null||T===yi||T===os?z=s.DEPTH24_STENCIL8:T===dn?z=s.DEPTH32F_STENCIL8:T===Ws&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yi||T===os?z=s.DEPTH_COMPONENT24:T===dn?z=s.DEPTH_COMPONENT32F:T===Ws&&(z=s.DEPTH_COMPONENT16),z}function M(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){const T=R.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T)}function b(R){const T=R.target;T.removeEventListener("dispose",b),P(T)}function E(R){const T=n.get(R);if(T.__webglInit===void 0)return;const z=R.source,q=d.get(z);if(q){const Q=q[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(q).length===0&&d.delete(z)}n.remove(R)}function C(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const z=R.source,q=d.get(z);delete q[T.__cacheKey],a.memory.textures--}function P(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let Q=0;Q<T.__webglFramebuffer[q].length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[q][Q]);else s.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)s.deleteFramebuffer(T.__webglFramebuffer[q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,Q=z.length;q<Q;q++){const $=n.get(z[q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(R)}let v=0;function S(){v=0}function D(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function F(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){const z=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(z,R,T);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+T)}function j(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Ee(z,R,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+T)}function B(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Ee(z,R,T);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+T)}function Z(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){V(z,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+T)}const W={[Mi]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Kr]:s.MIRRORED_REPEAT},ee={[Nt]:s.NEAREST,[Kh]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},ae={[qd]:s.NEVER,[Jd]:s.ALWAYS,[Yd]:s.LESS,[ou]:s.LEQUAL,[jd]:s.EQUAL,[Zd]:s.GEQUAL,[Kd]:s.GREATER,[$d]:s.NOTEQUAL};function X(R,T){if(T.type===dn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===Fr||T.magFilter===Os||T.magFilter===kn||T.minFilter===kt||T.minFilter===Fr||T.minFilter===Os||T.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,W[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,W[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,W[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==Os&&T.minFilter!==kn||T.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ie(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",w));const q=T.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const $=F(T);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;const xe=Q[R.__cacheKey];xe!==void 0&&(Q[R.__cacheKey].usedTimes--,xe.usedTimes===0&&C(T)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return z}function Ee(R,T,z){let q=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=s.TEXTURE_3D);const Q=ie(R,T),$=T.source;t.bindTexture(q,R.__webglTexture,s.TEXTURE0+z);const xe=n.get($);if($.version!==xe.__version||Q===!0){t.activeTexture(s.TEXTURE0+z);const oe=je.getPrimaries(je.workingColorSpace),pe=T.colorSpace===Qn?null:je.getPrimaries(T.colorSpace),Ye=T.colorSpace===Qn||oe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let te=_(T.image,!1,i.maxTextureSize);te=rt(T,te);const me=r.convert(T.format,T.colorSpace),Le=r.convert(T.type);let De=y(T.internalFormat,me,Le,T.colorSpace,T.isVideoTexture);X(q,T);let ge;const We=T.mipmaps,Ue=T.isVideoTexture!==!0,at=xe.__version===void 0||Q===!0,U=$.dataReady,ue=M(T,te);if(T.isDepthTexture)De=x(T.format===cs,T.type),at&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,De,te.width,te.height,0,me,Le,null));else if(T.isDataTexture)if(We.length>0){Ue&&at&&t.texStorage2D(s.TEXTURE_2D,ue,De,We[0].width,We[0].height);for(let Y=0,J=We.length;Y<J;Y++)ge=We[Y],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Le,ge.data):t.texImage2D(s.TEXTURE_2D,Y,De,ge.width,ge.height,0,me,Le,ge.data);T.generateMipmaps=!1}else Ue?(at&&t.texStorage2D(s.TEXTURE_2D,ue,De,te.width,te.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,me,Le,te.data)):t.texImage2D(s.TEXTURE_2D,0,De,te.width,te.height,0,me,Le,te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,We[0].width,We[0].height,te.depth);for(let Y=0,J=We.length;Y<J;Y++)if(ge=We[Y],T.format!==sn)if(me!==null)if(Ue){if(U)if(T.layerUpdates.size>0){const le=Kl(ge.width,ge.height,T.format,T.type);for(const de of T.layerUpdates){const Xe=ge.data.subarray(de*le/ge.data.BYTES_PER_ELEMENT,(de+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,de,ge.width,ge.height,1,me,Xe,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,te.depth,me,ge.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,De,ge.width,ge.height,te.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,te.depth,me,Le,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,De,ge.width,ge.height,te.depth,0,me,Le,ge.data)}else{Ue&&at&&t.texStorage2D(s.TEXTURE_2D,ue,De,We[0].width,We[0].height);for(let Y=0,J=We.length;Y<J;Y++)ge=We[Y],T.format!==sn?me!==null?Ue?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Le,ge.data):t.texImage2D(s.TEXTURE_2D,Y,De,ge.width,ge.height,0,me,Le,ge.data)}else if(T.isDataArrayTexture)if(Ue){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,te.width,te.height,te.depth),U)if(T.layerUpdates.size>0){const Y=Kl(te.width,te.height,T.format,T.type);for(const J of T.layerUpdates){const le=te.data.subarray(J*Y/te.data.BYTES_PER_ELEMENT,(J+1)*Y/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,me,Le,le)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Le,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,me,Le,te.data);else if(T.isData3DTexture)Ue?(at&&t.texStorage3D(s.TEXTURE_3D,ue,De,te.width,te.height,te.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Le,te.data)):t.texImage3D(s.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,me,Le,te.data);else if(T.isFramebufferTexture){if(at)if(Ue)t.texStorage2D(s.TEXTURE_2D,ue,De,te.width,te.height);else{let Y=te.width,J=te.height;for(let le=0;le<ue;le++)t.texImage2D(s.TEXTURE_2D,le,De,Y,J,0,me,Le,null),Y>>=1,J>>=1}}else if(We.length>0){if(Ue&&at){const Y=we(We[0]);t.texStorage2D(s.TEXTURE_2D,ue,De,Y.width,Y.height)}for(let Y=0,J=We.length;Y<J;Y++)ge=We[Y],Ue?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,me,Le,ge):t.texImage2D(s.TEXTURE_2D,Y,De,me,Le,ge);T.generateMipmaps=!1}else if(Ue){if(at){const Y=we(te);t.texStorage2D(s.TEXTURE_2D,ue,De,Y.width,Y.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Le,te)}else t.texImage2D(s.TEXTURE_2D,0,De,me,Le,te);m(T)&&p(q),xe.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function V(R,T,z){if(T.image.length!==6)return;const q=ie(R,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const $=n.get(Q);if(Q.version!==$.__version||q===!0){t.activeTexture(s.TEXTURE0+z);const xe=je.getPrimaries(je.workingColorSpace),oe=T.colorSpace===Qn?null:je.getPrimaries(T.colorSpace),pe=T.colorSpace===Qn||xe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,te=T.image[0]&&T.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Ye&&!te?me[J]=_(T.image[J],!0,i.maxCubemapSize):me[J]=te?T.image[J].image:T.image[J],me[J]=rt(T,me[J]);const Le=me[0],De=r.convert(T.format,T.colorSpace),ge=r.convert(T.type),We=y(T.internalFormat,De,ge,T.colorSpace),Ue=T.isVideoTexture!==!0,at=$.__version===void 0||q===!0,U=Q.dataReady;let ue=M(T,Le);X(s.TEXTURE_CUBE_MAP,T);let Y;if(Ye){Ue&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,We,Le.width,Le.height);for(let J=0;J<6;J++){Y=me[J].mipmaps;for(let le=0;le<Y.length;le++){const de=Y[le];T.format!==sn?De!==null?Ue?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,de.width,de.height,De,ge,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,de.width,de.height,0,De,ge,de.data)}}}else{if(Y=T.mipmaps,Ue&&at){Y.length>0&&ue++;const J=we(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,We,J.width,J.height)}for(let J=0;J<6;J++)if(te){Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,De,ge,me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,me[J].width,me[J].height,0,De,ge,me[J].data);for(let le=0;le<Y.length;le++){const Xe=Y[le].image[J].image;Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Xe.width,Xe.height,De,ge,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Xe.width,Xe.height,0,De,ge,Xe.data)}}else{Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,ge,me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,De,ge,me[J]);for(let le=0;le<Y.length;le++){const de=Y[le];Ue?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,De,ge,de.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,De,ge,de.image[J])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),$.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function K(R,T,z,q,Q,$){const xe=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),pe=y(z.internalFormat,xe,oe,z.colorSpace);if(!n.get(T).__hasExternalTextures){const te=Math.max(1,T.width>>$),me=Math.max(1,T.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,pe,te,me,T.depth,0,xe,oe,null):t.texImage2D(Q,$,pe,te,me,0,xe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ve(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Q,n.get(z).__webglTexture,0,ke(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Q,n.get(z).__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(R,T,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const q=T.depthTexture,Q=q&&q.isDepthTexture?q.type:null,$=x(T.stencilBuffer,Q),xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ke(T);Ve(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,$,T.width,T.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,R)}else{const q=T.textures;for(let Q=0;Q<q.length;Q++){const $=q[Q],xe=r.convert($.format,$.colorSpace),oe=r.convert($.type),pe=y($.internalFormat,xe,oe,$.colorSpace),Ye=ke(T);z&&Ve(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,pe,T.width,T.height):Ve(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const q=n.get(T.depthTexture).__webglTexture,Q=ke(T);if(T.depthTexture.format===es)Ve(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(T.depthTexture.format===cs)Ve(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const T=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=q}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=s.createRenderbuffer(),fe(T.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),fe(T.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(R,T,z){const q=n.get(R);T!==void 0&&K(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ae(R)}function ze(R){const T=R.texture,z=n.get(R),q=n.get(T);R.addEventListener("dispose",b);const Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=T.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let pe=0;pe<T.mipmaps.length;pe++)z.__webglFramebuffer[oe][pe]=s.createFramebuffer()}else z.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)z.__webglFramebuffer[oe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(xe)for(let oe=0,pe=Q.length;oe<pe;oe++){const Ye=n.get(Q[oe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Ve(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const pe=Q[oe];z.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const Ye=r.convert(pe.format,pe.colorSpace),te=r.convert(pe.type),me=y(pe.internalFormat,Ye,te,pe.colorSpace,R.isXRRenderTarget===!0),Le=ke(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),X(s.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)K(z.__webglFramebuffer[oe][pe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else K(z.__webglFramebuffer[oe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,pe=Q.length;oe<pe;oe++){const Ye=Q[oe],te=n.get(Ye);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),X(s.TEXTURE_2D,Ye),K(z.__webglFramebuffer,R,Ye,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),X(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)K(z.__webglFramebuffer[pe],R,T,s.COLOR_ATTACHMENT0,oe,pe);else K(z.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,oe,0);m(T)&&p(oe),t.unbindTexture()}R.depthBuffer&&Ae(R)}function qe(R){const T=R.textures;for(let z=0,q=T.length;z<q;z++){const Q=T[z];if(m(Q)){const $=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xe=n.get(Q).__webglTexture;t.bindTexture($,xe),p($),t.unbindTexture()}}}const Fe=[],L=[];function wt(R){if(R.samples>0){if(Ve(R)===!1){const T=R.textures,z=R.width,q=R.height;let Q=s.COLOR_BUFFER_BIT;const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(R),oe=T.length>1;if(oe)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ye=n.get(T[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,z,q,0,0,z,q,Q,s.NEAREST),c===!0&&(Fe.length=0,L.length=0,Fe.push(s.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push($),L.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ye=n.get(T[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ke(R){return Math.min(i.maxSamples,R.samples)}function Ve(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(R){const T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function rt(R,T){const z=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==At&&z!==Qn&&(je.getTransfer(z)===ct?(q!==sn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=be,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ve}function v_(s,e){function t(n,i=Qn){let r;const a=je.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Mc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return s.BYTE;if(n===Zh)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===vc)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Qs)return s.HALF_FLOAT;if(n===Qh)return s.ALPHA;if(n===eu)return s.RGB;if(n===sn)return s.RGBA;if(n===tu)return s.LUMINANCE;if(n===nu)return s.LUMINANCE_ALPHA;if(n===es)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===Sc)return s.RED;if(n===bc)return s.RED_INTEGER;if(n===iu)return s.RG;if(n===Ec)return s.RG_INTEGER;if(n===Tc)return s.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Ko||n===$o||n===Zo||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class M_ extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y_={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b_=`
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

}`;class E_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:S_,fragmentShader:b_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new $t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T_ extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new E_,m=t.getContextAttributes();let p=null,y=null;const x=[],M=[],w=new ye;let b=null;const E=new zt;E.layers.enable(1),E.viewport=new Qe;const C=new zt;C.layers.enable(2),C.viewport=new Qe;const P=[E,C],v=new M_;v.layers.enable(1),v.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new io,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new io,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new io,x[V]=K),K.getHandSpace()};function F(V){const K=M.indexOf(V.inputSource);if(K===-1)return;const fe=x[K];fe!==void 0&&(fe.update(V.inputSource,V.frame,l||a),fe.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let V=0;V<x.length;V++){const K=M[V];K!==null&&(M[V]=null,x[V].disconnect(K))}S=null,D=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Si(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,fe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?cs:es,fe=m.stencil?os:yi);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Si(d.textureWidth,d.textureHeight,{format:sn,type:Wn,depthTexture:new vu(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(V){for(let K=0;K<V.removed.length;K++){const fe=V.removed[K],ce=M.indexOf(fe);ce>=0&&(M[ce]=null,x[ce].disconnect(fe))}for(let K=0;K<V.added.length;K++){const fe=V.added[K];let ce=M.indexOf(fe);if(ce===-1){for(let be=0;be<x.length;be++)if(be>=M.length){M.push(fe),ce=be;break}else if(M[be]===null){M[be]=fe,ce=be;break}if(ce===-1)break}const Ae=x[ce];Ae&&Ae.connect(fe)}}const B=new I,Z=new I;function W(V,K,fe){B.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const ce=B.distanceTo(Z),Ae=K.projectionMatrix.elements,be=fe.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],L=(Ae[9]-1)/Ae[5],wt=(Ae[8]-1)/Ae[0],ke=(be[8]+1)/be[0],Ve=ze*wt,Te=ze*ke,rt=ce/(-wt+ke),we=rt*-wt;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(we),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=ze+rt,T=qe+rt,z=Ve-we,q=Te+(ce-we),Q=Fe*qe/T*R,$=L*qe/T*R;V.projectionMatrix.makePerspective(z,q,Q,$,R,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ee(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let K=V.near,fe=V.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),v.near=C.near=E.near=K,v.far=C.far=E.far=fe,(S!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,D=v.far);const ce=V.parent,Ae=v.cameras;ee(v,ce);for(let be=0;be<Ae.length;be++)ee(Ae[be],ce);Ae.length===2?W(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),ae(V,v,ce)};function ae(V,K,fe){fe===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ls*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let X=null;function ie(V,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let be=0;be<fe.length;be++){const ze=fe[be];let qe=null;if(f!==null)qe=f.getViewport(ze);else{const L=u.getViewSubImage(d,ze);qe=L.viewport,be===0&&(e.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let Fe=P[be];Fe===void 0&&(Fe=new zt,Fe.layers.enable(be),Fe.viewport=new Qe,P[be]=Fe),Fe.matrix.fromArray(ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(qe.x,qe.y,qe.width,qe.height),be===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Fe)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const be=u.getDepthInformation(fe[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let fe=0;fe<x.length;fe++){const ce=M[fe],Ae=x[fe];ce!==null&&Ae!==void 0&&Ae.update(ce,K,l||a)}X&&X(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ee=new xu;Ee.setAnimationLoop(ie),this.setAnimationLoop=function(V){X=V},this.dispose=function(){}}}const di=new pn,A_=new Pe;function w_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,M=y.envMapRotation;x&&(m.envMap.value=x,di.copy(M),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function R_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(y,w);const b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){const x=u();y.__bindingPointIndex=x;const M=s.createBuffer(),w=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],M=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,E=M.length;b<E;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let P=0,v=C.length;P<v;P++){const S=C[P];if(f(S,b,P,w)===!0){const D=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let k=0;for(let j=0;j<F.length;j++){const B=F[j],Z=_(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,D+k,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,w){const b=y.value,E=x+"_"+M;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{const C=w[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return w[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(y){const x=y.uniforms;let M=0;const w=16;for(let E=0,C=x.length;E<C;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,S=P.length;v<S;v++){const D=P[v],F=Array.isArray(D.value)?D.value:[D.value];for(let k=0,j=F.length;k<j;k++){const B=F[k],Z=_(B),W=M%w,ee=W%Z.boundary,ae=W+ee;M+=ee,ae!==0&&w-ae<Z.storage&&(M+=w-ae),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Z.storage}}}const b=M%w;return b>0&&(M+=w-b),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class C_{constructor(e={}){const{canvas:t=gf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let M=!1,w=0,b=0,E=null,C=-1,P=null;const v=new Qe,S=new Qe;let D=null;const F=new re(0);let k=0,j=t.width,B=t.height,Z=1,W=null,ee=null;const ae=new Qe(0,0,j,B),X=new Qe(0,0,j,B);let ie=!1;const Ee=new Ic;let V=!1,K=!1;const fe=new Pe,ce=new Pe,Ae=new I,be=new Qe,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Fe(){return E===null?Z:1}let L=n;function wt(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const N="webgl2";if(L=wt(N,A),L===null)throw wt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,Ve,Te,rt,we,R,T,z,q,Q,$,xe,oe,pe,Ye,te,me,Le,De,ge,We,Ue,at,U;function ue(){ke=new Ug(L),ke.init(),Ue=new v_(L,ke),Ve=new Rg(L,ke,e,Ue),Te=new g_(L),Ve.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),rt=new Og(L),we=new t_,R=new x_(L,ke,Te,we,Ve,Ue,rt),T=new Ig(x),z=new Dg(x),q=new Wf(L),at=new Ag(L,q),Q=new Ng(L,q,rt,at),$=new zg(L,Q,q,rt),De=new Bg(L,Ve,R),te=new Cg(we),xe=new e_(x,T,z,ke,Ve,at,te),oe=new w_(x,we),pe=new i_,Ye=new l_(ke),Le=new Tg(x,T,z,Te,$,d,c),me=new p_(x,$,Ve),U=new R_(L,rt,Ve,Te),ge=new wg(L,ke,rt),We=new Fg(L,ke,rt),rt.programs=xe.programs,x.capabilities=Ve,x.extensions=ke,x.properties=we,x.renderLists=pe,x.shadowMap=me,x.state=Te,x.info=rt}ue();const Y=new T_(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(j,B,!1))},this.getSize=function(A){return A.set(j,B)},this.setSize=function(A,N,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,B=N,t.width=Math.floor(A*Z),t.height=Math.floor(N*Z),H===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(j*Z,B*Z).floor()},this.setDrawingBufferSize=function(A,N,H){j=A,B=N,Z=H,t.width=Math.floor(A*H),t.height=Math.floor(N*H),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,N,H,G){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,N,H,G),Te.viewport(v.copy(ae).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,N,H,G){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,N,H,G),Te.scissor(S.copy(X).multiplyScalar(Z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){Te.setScissorTest(ie=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,N=!0,H=!0){let G=0;if(A){let O=!1;if(E!==null){const ne=E.texture.format;O=ne===Tc||ne===Ec||ne===bc}if(O){const ne=E.texture.type,he=ne===Wn||ne===yi||ne===Ws||ne===os||ne===Mc||ne===yc,_e=Le.getClearColor(),ve=Le.getClearAlpha(),Re=_e.r,Ie=_e.g,Me=_e.b;he?(f[0]=Re,f[1]=Ie,f[2]=Me,f[3]=ve,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Re,g[1]=Ie,g[2]=Me,g[3]=ve,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),Ye.dispose(),we.dispose(),T.dispose(),z.dispose(),$.dispose(),at.dispose(),U.dispose(),xe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",jc),Y.removeEventListener("sessionend",Kc),ai.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=rt.autoReset,N=me.enabled,H=me.autoUpdate,G=me.needsUpdate,O=me.type;ue(),rt.autoReset=A,me.enabled=N,me.autoUpdate=H,me.needsUpdate=G,me.type=O}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xe(A){const N=A.target;N.removeEventListener("dispose",Xe),pt(N)}function pt(A){Ft(A),we.remove(A)}function Ft(A){const N=we.get(A).programs;N!==void 0&&(N.forEach(function(H){xe.releaseProgram(H)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,H,G,O,ne){N===null&&(N=ze);const he=O.isMesh&&O.matrixWorld.determinant()<0,_e=rd(A,N,H,G,O);Te.setMaterial(G,he);let ve=H.index,Re=1;if(G.wireframe===!0){if(ve=Q.getWireframeAttribute(H),ve===void 0)return;Re=2}const Ie=H.drawRange,Me=H.attributes.position;let nt=Ie.start*Re,ot=(Ie.start+Ie.count)*Re;ne!==null&&(nt=Math.max(nt,ne.start*Re),ot=Math.min(ot,(ne.start+ne.count)*Re)),ve!==null?(nt=Math.max(nt,0),ot=Math.min(ot,ve.count)):Me!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Me.count));const ut=ot-nt;if(ut<0||ut===1/0)return;at.setup(O,G,_e,H,ve);let Wt,et=ge;if(ve!==null&&(Wt=q.get(ve),et=We,et.setIndex(Wt)),O.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Fe()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(O.isLine){let Se=G.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*Fe()),O.isLineSegments?et.setMode(L.LINES):O.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else O.isPoints?et.setMode(L.POINTS):O.isSprite&&et.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Se=O._multiDrawStarts,Et=O._multiDrawCounts,tt=O._multiDrawCount,an=ve?q.get(ve).bytesPerElement:1,Ci=we.get(G).currentProgram.getUniforms();for(let Xt=0;Xt<tt;Xt++)Ci.setValue(L,"_gl_DrawID",Xt),et.render(Se[Xt]/an,Et[Xt])}else if(O.isInstancedMesh)et.renderInstances(nt,ut,O.count);else if(H.isInstancedBufferGeometry){const Se=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Et=Math.min(H.instanceCount,Se);et.renderInstances(nt,ut,Et)}else et.render(nt,ut)};function Ze(A,N,H){A.transparent===!0&&A.side===Kt&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,sr(A,N,H),A.side=Vn,A.needsUpdate=!0,sr(A,N,H),A.side=Kt):sr(A,N,H)}this.compile=function(A,N,H=null){H===null&&(H=A),m=Ye.get(H),m.init(N),y.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==H&&A.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const _e=ne[he];Ze(_e,H,O),G.add(_e)}else Ze(ne,H,O),G.add(ne)}),y.pop(),m=null,G},this.compileAsync=function(A,N,H=null){const G=this.compile(A,N,H);return new Promise(O=>{function ne(){if(G.forEach(function(he){we.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){O(A);return}setTimeout(ne,10)}ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ot=null;function Cn(A){Ot&&Ot(A)}function jc(){ai.stop()}function Kc(){ai.start()}const ai=new xu;ai.setAnimationLoop(Cn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(A){Ot=A,Y.setAnimationLoop(A),A===null?ai.stop():ai.start()},Y.addEventListener("sessionstart",jc),Y.addEventListener("sessionend",Kc),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,E),m=Ye.get(A,y.length),m.init(N),y.push(m),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ee.setFromProjectionMatrix(ce),K=this.localClippingEnabled,V=te.init(this.clippingPlanes,K),_=pe.get(A,p.length),_.init(),p.push(_),Y.enabled===!0&&Y.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&Ta(ne,N,-1/0,x.sortObjects)}Ta(A,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,ee),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Le.addToRenderList(_,A),this.info.render.frame++,V===!0&&te.beginShadows();const H=m.state.shadowsArray;me.render(H,A,N),V===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,O=_.transmissive;if(m.setupLights(),N.isArrayCamera){const ne=N.cameras;if(O.length>0)for(let he=0,_e=ne.length;he<_e;he++){const ve=ne[he];Zc(G,O,A,ve)}qe&&Le.render(A);for(let he=0,_e=ne.length;he<_e;he++){const ve=ne[he];$c(_,A,ve,ve.viewport)}}else O.length>0&&Zc(G,O,A,N),qe&&Le.render(A),$c(_,A,N);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,N),at.resetDefaultState(),C=-1,P=null,y.pop(),y.length>0?(m=y[y.length-1],V===!0&&te.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ta(A,N,H,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ee.intersectsSprite(A)){G&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const he=$.update(A),_e=A.material;_e.visible&&_.push(A,he,_e,H,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ee.intersectsObject(A))){const he=$.update(A),_e=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),be.copy(he.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(_e)){const ve=he.groups;for(let Re=0,Ie=ve.length;Re<Ie;Re++){const Me=ve[Re],nt=_e[Me.materialIndex];nt&&nt.visible&&_.push(A,he,nt,H,be.z,Me)}}else _e.visible&&_.push(A,he,_e,H,be.z,null)}}const ne=A.children;for(let he=0,_e=ne.length;he<_e;he++)Ta(ne[he],N,H,G)}function $c(A,N,H,G){const O=A.opaque,ne=A.transmissive,he=A.transparent;m.setupLightsView(H),V===!0&&te.setGlobalState(x.clippingPlanes,H),G&&Te.viewport(v.copy(G)),O.length>0&&ir(O,N,H),ne.length>0&&ir(ne,N,H),he.length>0&&ir(he,N,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Zc(A,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Si(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Qs:Wn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ne=m.state.transmissionRenderTarget[G.id],he=G.viewport||v;ne.setSize(he.z,he.w);const _e=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(F),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Le.render(H);const ve=x.toneMapping;x.toneMapping=Gn;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),V===!0&&te.setGlobalState(x.clippingPlanes,G),ir(A,H,G),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Me=0,nt=N.length;Me<nt;Me++){const ot=N[Me],ut=ot.object,Wt=ot.geometry,et=ot.material,Se=ot.group;if(et.side===Kt&&ut.layers.test(G.layers)){const Et=et.side;et.side=Gt,et.needsUpdate=!0,Jc(ut,H,G,Wt,et,Se),et.side=Et,et.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne))}x.setRenderTarget(_e),x.setClearColor(F,k),Re!==void 0&&(G.viewport=Re),x.toneMapping=ve}function ir(A,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ne=A.length;O<ne;O++){const he=A[O],_e=he.object,ve=he.geometry,Re=G===null?he.material:G,Ie=he.group;_e.layers.test(H.layers)&&Jc(_e,N,H,ve,Re,Ie)}}function Jc(A,N,H,G,O,ne){A.onBeforeRender(x,N,H,G,O,ne),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,N,H,G,A,ne),O.transparent===!0&&O.side===Kt&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,x.renderBufferDirect(H,N,G,O,A,ne),O.side=Vn,O.needsUpdate=!0,x.renderBufferDirect(H,N,G,O,A,ne),O.side=Kt):x.renderBufferDirect(H,N,G,O,A,ne),A.onAfterRender(x,N,H,G,O,ne)}function sr(A,N,H){N.isScene!==!0&&(N=ze);const G=we.get(A),O=m.state.lights,ne=m.state.shadowsArray,he=O.state.version,_e=xe.getParameters(A,O.state,ne,N,H),ve=xe.getProgramCacheKey(_e);let Re=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?z:T).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",Xe),Re=new Map,G.programs=Re);let Ie=Re.get(ve);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===he)return el(A,_e),Ie}else _e.uniforms=xe.getUniforms(A),A.onBeforeCompile(_e,x),Ie=xe.acquireProgram(_e,ve),Re.set(ve,Ie),G.uniforms=_e.uniforms;const Me=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Me.clippingPlanes=te.uniform),el(A,_e),G.needsLights=od(A),G.lightsStateVersion=he,G.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function Qc(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Vr.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function el(A,N){const H=we.get(A);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function rd(A,N,H,G,O){N.isScene!==!0&&(N=ze),R.resetTextureUnits();const ne=N.fog,he=G.isMeshStandardMaterial?N.environment:null,_e=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:At,ve=(G.isMeshStandardMaterial?z:T).get(G.envMap||he),Re=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let ut=Gn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Wt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=Wt!==void 0?Wt.length:0,Se=we.get(G),Et=m.state.lights;if(V===!0&&(K===!0||A!==P)){const Zt=A===P&&G.id===C;te.setState(G,A,Zt)}let tt=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Et.state.version||Se.outputColorSpace!==_e||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==ve||G.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Re||Se.vertexTangents!==Ie||Se.morphTargets!==Me||Se.morphNormals!==nt||Se.morphColors!==ot||Se.toneMapping!==ut||Se.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Se.__version=G.version);let an=Se.currentProgram;tt===!0&&(an=sr(G,N,O));let Ci=!1,Xt=!1,Aa=!1;const dt=an.getUniforms(),Xn=Se.uniforms;if(Te.useProgram(an.program)&&(Ci=!0,Xt=!0,Aa=!0),G.id!==C&&(C=G.id,Xt=!0),Ci||P!==A){Ve.reverseDepthBuffer?(fe.copy(A.projectionMatrix),xf(fe),vf(fe),dt.setValue(L,"projectionMatrix",fe)):dt.setValue(L,"projectionMatrix",A.projectionMatrix),dt.setValue(L,"viewMatrix",A.matrixWorldInverse);const Zt=dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(L,Ae.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&dt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Xt=!0,Aa=!0)}if(O.isSkinnedMesh){dt.setOptional(L,O,"bindMatrix"),dt.setOptional(L,O,"bindMatrixInverse");const Zt=O.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),dt.setValue(L,"boneTexture",Zt.boneTexture,R))}O.isBatchedMesh&&(dt.setOptional(L,O,"batchingTexture"),dt.setValue(L,"batchingTexture",O._matricesTexture,R),dt.setOptional(L,O,"batchingIdTexture"),dt.setValue(L,"batchingIdTexture",O._indirectTexture,R),dt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(L,"batchingColorTexture",O._colorsTexture,R));const wa=H.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0)&&De.update(O,H,an),(Xt||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,dt.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xn.envMap.value=ve,Xn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),Xt&&(dt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&ad(Xn,Aa),ne&&G.fog===!0&&oe.refreshFogUniforms(Xn,ne),oe.refreshMaterialUniforms(Xn,G,Z,B,m.state.transmissionRenderTarget[A.id]),Vr.upload(L,Qc(Se),Xn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vr.upload(L,Qc(Se),Xn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(L,"center",O.center),dt.setValue(L,"modelViewMatrix",O.modelViewMatrix),dt.setValue(L,"normalMatrix",O.normalMatrix),dt.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let Ra=0,cd=Zt.length;Ra<cd;Ra++){const tl=Zt[Ra];U.update(tl,an),U.bind(tl,an)}}return an}function ad(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function od(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,N,H){we.get(A.texture).__webglTexture=N,we.get(A.depthTexture).__webglTexture=H;const G=we.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const H=we.get(A);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,H=0){E=A,w=N,b=H;let G=!0,O=null,ne=!1,he=!1;if(A){const ve=we.get(A);if(ve.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(ve.__hasExternalTextures)R.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Me=A.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&we.has(Me)&&(A.width!==Me.image.width||A.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Ie=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?O=Ie[N][H]:O=Ie[N],ne=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?O=we.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[H]:O=Ie,v.copy(A.viewport),S.copy(A.scissor),D=A.scissorTest}else v.copy(ae).multiplyScalar(Z).floor(),S.copy(X).multiplyScalar(Z).floor(),D=ie;if(Te.bindFramebuffer(L.FRAMEBUFFER,O)&&G&&Te.drawBuffers(A,O),Te.viewport(v),Te.scissor(S),Te.setScissorTest(D),ne){const ve=we.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,H)}else if(he){const ve=we.get(A.texture),Re=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,H||0,Re)}C=-1},this.readRenderTargetPixels=function(A,N,H,G,O,ne,he){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Te.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=A.texture,Re=ve.format,Ie=ve.type;if(!Ve.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&H>=0&&H<=A.height-O&&L.readPixels(N,H,G,O,Ue.convert(Re),Ue.convert(Ie),ne)}finally{const ve=E!==null?we.get(E).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(A,N,H,G,O,ne,he){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const ve=A.texture,Re=ve.format,Ie=ve.type;if(!Ve.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&H>=0&&H<=A.height-O){Te.bindFramebuffer(L.FRAMEBUFFER,_e);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(N,H,G,O,Ue.convert(Re),Ue.convert(Ie),0);const nt=E!==null?we.get(E).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,nt);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _f(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Me),L.deleteSync(ot),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,H=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(A.image.width*G),ne=Math.floor(A.image.height*G),he=N!==null?N.x:0,_e=N!==null?N.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,he,_e,O,ne),Te.unbindTexture()},this.copyTextureToTexture=function(A,N,H=null,G=null,O=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],O=arguments[3]||0,H=null);let ne,he,_e,ve,Re,Ie;H!==null?(ne=H.max.x-H.min.x,he=H.max.y-H.min.y,_e=H.min.x,ve=H.min.y):(ne=A.image.width,he=A.image.height,_e=0,ve=0),G!==null?(Re=G.x,Ie=G.y):(Re=0,Ie=0);const Me=Ue.convert(N.format),nt=Ue.convert(N.type);R.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wt=L.getParameter(L.UNPACK_SKIP_PIXELS),et=L.getParameter(L.UNPACK_SKIP_ROWS),Se=L.getParameter(L.UNPACK_SKIP_IMAGES),Et=A.isCompressedTexture?A.mipmaps[O]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Re,Ie,ne,he,Me,nt,Et.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Re,Ie,Et.width,Et.height,Me,Et.data):L.texSubImage2D(L.TEXTURE_2D,O,Re,Ie,ne,he,Me,nt,Et),L.pixelStorei(L.UNPACK_ROW_LENGTH,ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Se),O===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,N,H=null,G=null,O=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],O=arguments[4]||0);let ne,he,_e,ve,Re,Ie,Me,nt,ot;const ut=A.isCompressedTexture?A.mipmaps[O]:A.image;H!==null?(ne=H.max.x-H.min.x,he=H.max.y-H.min.y,_e=H.max.z-H.min.z,ve=H.min.x,Re=H.min.y,Ie=H.min.z):(ne=ut.width,he=ut.height,_e=ut.depth,ve=0,Re=0,Ie=0),G!==null?(Me=G.x,nt=G.y,ot=G.z):(Me=0,nt=0,ot=0);const Wt=Ue.convert(N.format),et=Ue.convert(N.type);let Se;if(N.isData3DTexture)R.setTexture3D(N,0),Se=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Et=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Ci=L.getParameter(L.UNPACK_SKIP_ROWS),Xt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Se,O,Me,nt,ot,ne,he,_e,Wt,et,ut.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,O,Me,nt,ot,ne,he,_e,Wt,ut.data):L.texSubImage3D(Se,O,Me,nt,ot,ne,he,_e,Wt,et,ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,Et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xt),O===0&&N.generateMipmaps&&L.generateMipmap(Se),Te.unbindTexture()},this.initRenderTarget=function(A){we.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){w=0,b=0,E=null,Te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rc?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===fa?"display-p3":"srgb"}}class I_ extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new I;class js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ks extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const As=new I,Xi=new I,qi=new I,Yi=new ye,ws=new ye,Tu=new Pe,Tr=new I,Rs=new I,Ar=new I,$l=new ye,so=new ye,Zl=new ye;class ta extends lt{constructor(e=new Ks){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eu(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new js(n,3,0,!1)),Wi.setAttribute("uv",new js(n,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;wr(Tr.set(-.5,-.5,0),qi,a,Xi,i,r),wr(Rs.set(.5,-.5,0),qi,a,Xi,i,r),wr(Ar.set(.5,.5,0),qi,a,Xi,i,r),$l.set(0,0),so.set(1,0),Zl.set(1,1);let o=e.ray.intersectTriangle(Tr,Rs,Ar,!1,As);if(o===null&&(wr(Rs.set(-.5,.5,0),qi,a,Xi,i,r),so.set(0,1),o=e.ray.intersectTriangle(Tr,Ar,Rs,!1,As),o===null))return;const c=e.ray.origin.distanceTo(As);c<e.near||c>e.far||t.push({distance:c,point:As.clone(),uv:nn.getInterpolation(As,Tr,Rs,Ar,$l,so,Zl,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wr(s,e,t,n,i,r){Yi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ws.x=r*Yi.x-i*Yi.y,ws.y=i*Yi.x+r*Yi.y):ws.copy(Yi),s.copy(e),s.x+=ws.x,s.y+=ws.y,s.applyMatrix4(Tu)}const Jl=new I,Ql=new Qe,eh=new Qe,P_=new I,th=new Pe,Rr=new I,ro=new An,nh=new Pe,ao=new ma;class L_ extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rr),this.boundingBox.expandByPoint(Rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rr),this.boundingSphere.expandByPoint(Rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),e.ray.intersectsSphere(ro)!==!1&&(nh.copy(i).invert(),ao.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ql.fromBufferAttribute(i.attributes.skinIndex,e),eh.fromBufferAttribute(i.attributes.skinWeight,e),Jl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=eh.getComponent(r);if(a!==0){const o=Ql.getComponent(r);th.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(P_.copy(Jl).applyMatrix4(th),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Au extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wu extends vt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Nt,h=Nt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new Pe,D_=new Pe;class Lc{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:D_;ih.multiplyMatrices(o,t[r]),ih.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wu(t,e,e,sn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Au),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class cc extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Pe,sh=new Pe,Cr=[],rh=new Tn,U_=new Pe,Cs=new Ke,Is=new An;class na extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),rh.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Is.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),sh.multiplyMatrices(n,ji),Cs.matrixWorld=sh,Cs.raycast(e,Cr);for(let a=0,o=Cr.length;a<o;a++){const c=Cr[a];c.instanceId=r,c.object=this,t.push(c)}Cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wu(new Float32Array(i*this.count),i,this.count,Sc,dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ru extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new I,sa=new I,ah=new Pe,Ps=new ma,Ir=new An,oo=new I,oh=new I;class Dc extends lt{constructor(e=new ft,t=new Ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ia.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;ah.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),x=Pr(this,e,Ps,c,p,y);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Pr(this,e,Ps,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Pr(this,e,Ps,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Pr(this,e,Ps,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,r),t.distanceSqToSegment(ia,sa,oo,oh)>n)return;oo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(oo);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ch=new I,lh=new I;class N_ extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ch.fromBufferAttribute(t,i),lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ch.distanceTo(lh);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cu extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hh=new Pe,lc=new ma,Lr=new An,Dr=new I;class O_ extends lt{constructor(e=new ft,t=new Cu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;hh.copy(i).invert(),lc.copy(e.ray).applyMatrix4(hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Dr.fromBufferAttribute(u,m),uh(Dr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Dr.fromBufferAttribute(u,g),uh(Dr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uh(s,e,t,n,i,r,a){const o=lc.distanceSqToPoint(s);if(o<t){const c=new I;lc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gs extends vt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uc extends ft{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new I,d=new ye,f=new I,g=new I,_=new I;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const x=n+y*h*i,M=Math.sin(x),w=Math.cos(x);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*w,a.push(u.x,u.y,u.z),d.x=y/t,d.y=b/(e.length-1),o.push(d.x,d.y);const E=c[3*b+0]*M,C=c[3*b+1],P=c[3*b+0]*w;l.push(E,C,P)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const M=x+y*e.length,w=M,b=M+e.length,E=M+e.length+1,C=M+1;r.push(w,b,C),r.push(E,C,b)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.points,e.segments,e.phiStart,e.phiLength)}}class wi extends ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new I,h=new ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ri extends ft{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function y(){const M=new I,w=new I;let b=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const P=[],v=C/r,S=v*(t-e)+e;for(let D=0;D<=i;D++){const F=D/i,k=F*c+o,j=Math.sin(k),B=Math.cos(k);w.x=S*j,w.y=-v*n+m,w.z=S*B,u.push(w.x,w.y,w.z),M.set(j,E,B).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-v),P.push(g++)}_.push(P)}for(let C=0;C<i;C++)for(let P=0;P<r;P++){const v=_[P][C],S=_[P+1][C],D=_[P+1][C+1],F=_[P][C+1];e>0&&(h.push(v,S,F),b+=3),t>0&&(h.push(S,D,F),b+=3)}l.addGroup(p,b,0),p+=b}function x(M){const w=g,b=new ye,E=new I;let C=0;const P=M===!0?e:t,v=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const S=g;for(let D=0;D<=i;D++){const k=D/i*c+o,j=Math.cos(k),B=Math.sin(k);E.x=P*B,E.y=m*v,E.z=P*j,u.push(E.x,E.y,E.z),d.push(0,v,0),b.x=j*.5+.5,b.y=B*.5*v+.5,f.push(b.x,b.y),g++}for(let D=0;D<i;D++){const F=w+D,k=S+D;M===!0?h.push(k,k+1,F):h.push(k+1,k,F),C+=3}l.addGroup(p,C,M===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends Ri{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new I,M=new I,w=new I;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],M),f(t[b+2],w),c(x,M,w,y)}function c(y,x,M,w){const b=w+1,E=[];for(let C=0;C<=b;C++){E[C]=[];const P=y.clone().lerp(M,C/b),v=x.clone().lerp(M,C/b),S=b-C;for(let D=0;D<=S;D++)D===0&&C===b?E[C][D]=P:E[C][D]=P.clone().lerp(v,D/S)}for(let C=0;C<b;C++)for(let P=0;P<2*(b-C)-1;P++){const v=Math.floor(P/2);P%2===0?(d(E[C][v+1]),d(E[C+1][v]),d(E[C][v])):(d(E[C][v+1]),d(E[C+1][v+1]),d(E[C+1][v]))}}function l(y){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(M,1-w)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],M=a[y+2],w=a[y+4],b=Math.max(x,M,w),E=Math.min(x,M,w);b>.9&&E<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){const y=new I,x=new I,M=new I,w=new I,b=new ye,E=new ye,C=new ye;for(let P=0,v=0;P<r.length;P+=9,v+=6){y.set(r[P+0],r[P+1],r[P+2]),x.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),b.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),w.copy(y).add(x).add(M).divideScalar(3);const S=m(w);_(b,v+0,y,S),_(E,v+2,x,S),_(C,v+4,M,S)}}function _(y,x,M,w){w<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.vertices,e.indices,e.radius,e.details)}}class va extends xa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new va(e.radius,e.detail)}}class Ma extends xa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ma(e.radius,e.detail)}}class $s extends ft{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new I,g=new ye;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,M=y+n+1,w=y+n+2,b=y+1;o.push(x,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fc extends ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const b=w/t;u.x=-e*Math.cos(i+b*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+b*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],M=h[p][y],w=h[p+1][y],b=h[p+1][y+1];(p!==0||a>0)&&f.push(x,M,b),(p!==n-1||c<Math.PI)&&f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oc extends ft{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bc extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wn extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class On extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ur(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function B_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function z_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Iu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class er{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class k_ extends er{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $i:r=e,o=2*t-n;break;case $r:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $i:a=e,c=2*n-t;break;case $r:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[l+w]+x*a[c+w]+M*a[u+w];return r}}class Pu extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class H_ extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new H_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&B_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=qs;class _s extends Rn{constructor(e,t,n){super(e,t,n)}}_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Xs;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Lu extends Rn{}Lu.prototype.ValueTypeName="color";class us extends Rn{}us.prototype.ValueTypeName="number";class G_ extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)It.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ds extends Rn{InterpolantFactoryMethodLinear(e){return new G_(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Rn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Xs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Rn{}fs.prototype.ValueTypeName="vector";class ra{constructor(e="",t=-1,n=[],i=Ac){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(W_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=z_(c);c=dh(c,1,h),l=dh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new us(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Iu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new us(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(fs,f+".position",d,"pos",i),n(ds,f+".quaternion",d,"rot",i),n(fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function V_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Lu;case"quaternion":return ds;case"bool":case"boolean":return _s;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function W_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=V_(s.type);if(s.times===void 0){const t=[],n=[];Iu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class X_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const q_=new X_;class vs{constructor(e){this.manager=e!==void 0?e:q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Y_ extends Error{constructor(e,t){super(e),this.response=t}}class Du extends vs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Nn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,E=h.length;b<E;b++){const C=h[b];C.onProgress&&C.onProgress(w)}p.enqueue(M),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Y_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ti.add(e,l);const h=Nn[e];delete Nn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Nn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class j_ extends vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ys("img");function c(){h(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Uu extends vs{constructor(e){super(e)}load(e,t,n,i){const r=new vt,a=new j_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ya extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class K_ extends ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const co=new Pe,fh=new I,ph=new I;class zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $_ extends zc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Z_ extends ya{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mh=new Pe,Ls=new I,lo=new I;class J_ extends zc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),lo.copy(n.position),lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class Q_ extends ya{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ex extends zc{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tx extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,c),r.manager.itemStart(e)}}class nx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){It.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;It.multiplyQuaternionsFlat(e,a,e,t,e,n),It.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const kc="\\[\\]\\.:\\/",ix=new RegExp("["+kc+"]","g"),Hc="[^"+kc+"]",sx="[^"+kc.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Hc),ax=/(WCOD+)?/.source.replace("WCOD",sx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),lx=new RegExp("^"+rx+ax+ox+cx+"$"),hx=["material","materials","bones","map"];class ux{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(e){const t=lx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=ux;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ki,endingEnd:Ki};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Hd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Ac:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===kd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ru){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$i,i.endingEnd=$i):(e?i.endingStart=this.zeroSlopeAtStart?$i:Ki:i.endingStart=$r,t?i.endingEnd=this.zeroSlopeAtEnd?$i:Ki:i.endingEnd=$r)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const fx=new Float32Array(1);class px extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new nx(Je.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Pu(new Float32Array(2),new Float32Array(2),1,fx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?ra.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ac),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new dx(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ra.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const jt={time:120,gemEvery:7,gemWin:10,countdown:15,respawn:5,regenDelay:3,regenRate:.13,bushSee:2.2,revealAfterShot:1},Sa={dealer:{name:"레이",role:"딜러",ai:"mid",rig:"dealer",color:16752698,hp:3400,speed:2.6,reload:1.4,ammo:3,height:2.05,attack:{kind:"burst",n:4,gap:.07,dmg:300,speed:13.3,range:8.5,spread:.04,size:.17},superCost:3600,super:{kind:"burst",n:12,gap:.05,dmg:320,speed:16,range:10.5,spread:.12,size:.2},gun:"pistol"},tank:{name:"볼트",role:"탱커",ai:"close",rig:"tank",color:13646384,hp:6400,speed:2.75,reload:.95,ammo:3,height:2.3,attack:{kind:"spread",n:5,arc:.55,dmg:390,speed:9.5,range:3.6,size:.18},superCost:3e3,super:{kind:"dash",dist:5.5,time:.38,dmg:1300,push:2.5},gun:"shotgun"},sniper:{name:"미호",role:"저격수",ai:"far",rig:"sniper",color:3130546,hp:2700,speed:2.5,reload:2.1,ammo:3,height:2.05,attack:{kind:"snipe",dmg:1500,near:.55,speed:13.3,range:10,size:.34},superCost:3400,super:{kind:"pierce",dmg:2100,speed:17,range:11,size:.42},gun:"rifle"}},Zs=["dealer","tank","sniper"],gh=[{name:"새싹",think:.9,aim:.32,dodge:0,superUse:.3},{name:"연습생",think:.6,aim:.22,dodge:.25,superUse:.6},{name:"선수",think:.38,aim:.14,dodge:.5,superUse:.85},{name:"고수",think:.22,aim:.08,dodge:.75,superUse:1}],Gc=s=>gh[Math.min(gh.length-1,Math.floor(s/60))],_h={win:8,lose:-4,draw:0,safeUnder:40},xh=["BB.................BB","BB......1.1.1......BB","BBB...............BBB","..###...........###..","..#BBB.........BBB#..","...BBB...###...BBB...",".........BBB.........",".##.....BBBBB.....##.",".BBB....##.##....BBB.",".BBB.............BBB.","......BBB...BBB......","...####.......####...",".....................","..BBB....#.#....BBB..","..BBB..BB...BB..BBB..","........#...#........"],mx=".##.......M.......##.";function gx(){const s=[...xh,mx,...xh.slice().reverse().map(e=>e.replace(/1/g,"2"))];for(const e of s)if(e.length!==21)throw new Error(`맵 줄 길이 ${e.length} ≠ 21: ${e}`);return s.map(e=>e.split(""))}const vh={close:1.3,mid:.72,far:.86};function _x(s,e,t,n,i){const r=s.W,a=s.H,o=Math.floor(e),c=Math.floor(t);let l=Math.max(0,Math.min(r-1,Math.floor(n))),h=Math.max(0,Math.min(a-1,Math.floor(i)));if(vn(s,l,h)){let x=null;for(let M=-1;M<=1;M++)for(let w=-1;w<=1;w++)vn(s,l+w,h+M)||(x=[l+w,h+M]);if(!x)return[];[l,h]=x}const u=(x,M)=>M*r+x,d=new Float32Array(r*a).fill(1/0),f=new Int32Array(r*a).fill(-1),g=new Uint8Array(r*a),_=[[o,c]];d[u(o,c)]=0;const m=(x,M)=>Math.hypot(x-l,M-h);for(;_.length;){let x=0;for(let E=1;E<_.length;E++)d[u(..._[E])]+m(..._[E])<d[u(..._[x])]+m(..._[x])&&(x=E);const[M,w]=_.splice(x,1)[0],b=u(M,w);if(!g[b]){if(g[b]=1,M===l&&w===h)break;for(let E=-1;E<=1;E++)for(let C=-1;C<=1;C++){if(!C&&!E)continue;const P=M+C,v=w+E;if(vn(s,P,v)||C&&E&&(vn(s,M+C,w)||vn(s,M,w+E)))continue;const S=d[b]+(C&&E?1.414:1),D=u(P,v);S<d[D]&&(d[D]=S,f[D]=b,_.push([P,v]))}}}const p=[];let y=u(l,h);if(f[y]<0&&y!==u(o,c))return[];for(;y>=0&&y!==u(o,c);)p.unshift({x:y%r+.5,z:Math.floor(y/r)+.5}),y=f[y];return p}function xx(s){return(s()+s()+s()-1.5)/1.5}function Mh(s,e,t,n){const i=e.c.attack.speed||12,r=Math.hypot(t.x-e.x,t.z-e.z),a=r/i*.8;return Math.atan2(t.z+t.vz*a-e.z,t.x+t.vx*a-e.x)+xx(s.rand)*n.aim}function vx(s,e){for(const t of s.bullets){if(t.team===e.team)continue;const n=e.x-t.x,i=e.z-t.z;if(Math.hypot(n,i)>3.2)continue;const a=Math.hypot(t.vx,t.vz)||1;if((n*t.vx+i*t.vz)/a<=0)continue;if(Math.abs((n*t.vz-i*t.vx)/a)<.8)return t}return null}function Mx(s,e,t){const n=s.tier,i=e.ai??={next:s.rand()*n.think,path:[],strafe:s.rand()<.5?1:-1,goalT:0,dodge:null},r=e.input;if(i.next-=t,i.next<=0&&(i.next=n.think*(.8+s.rand()*.4),yx(s,e,i,n)),i.mode==="walk"){for(;i.path.length&&Math.hypot(i.path[0].x-e.x,i.path[0].z-e.z)<.35;)i.path.shift();if(i.path.length){const a=i.path[0],o=Math.hypot(a.x-e.x,a.z-e.z);r.mx=(a.x-e.x)/o,r.mz=(a.z-e.z)/o}else r.mx=0,r.mz=0}i.dodge&&s.t<i.dodge.until&&(r.mx=i.dodge.x,r.mz=i.dodge.z)}function yx(s,e,t,n){const i=e.input,r=s.units.filter(x=>x.team!==e.team&&bi(s,e.team,x));let a=null,o=1/0;for(const x of r){const M=Math.hypot(x.x-e.x,x.z-e.z);M<o&&(o=M,a=x)}const c=Fu(e),l=e.hp/e.maxHp,h=aa(s,e.team),u=aa(s,e.team==="blue"?"red":"blue"),d=s.spawns[e.team][e.k],f={x:d.x,z:d.z+(e.team==="blue"?-3:3)},g=s.rand()<n.dodge?vx(s,e):null;if(g){const x=Math.hypot(g.vx,g.vz)||1,M=s.rand()<.5?1:-1;t.dodge={x:-g.vz/x*M,z:g.vx/x*M,until:s.t+.3}}a&&o<=c*(e.c.ai==="close"?.95:1)&&e.ammo>=1&&uo(s,e.x,e.z,a.x,a.z)&&(e.ammo>=2||o<c*.75||a.hp<a.maxHp*.3)&&(i.fire=Mh(s,e,a,n)),a&&e.superCharge>=1&&o<=Tx(e)&&s.rand()<n.superUse&&uo(s,e.x,e.z,a.x,a.z)&&(i.superFire=Mh(s,e,a,n));const _=e.gems>=4&&h>=jt.gemWin-2&&h>=u;if(l<.35&&a&&o<c+3||_&&a&&o<c+2)return Ds(s,e,t,f);if(_){const x=(d.z+s.mine.z)/2+(e.team==="blue"?3:-3);return Ds(s,e,t,{x:d.x+(e.k-1)*2+(s.rand()-.5)*4,z:x+(s.rand()-.5)*3})}if(a&&o<c*1.5+2){const x=e.c.ai==="close"?vh.close:c*vh[e.c.ai];if(o>x+.8||!uo(s,e.x,e.z,a.x,a.z))return Ds(s,e,t,a);t.mode="fight",s.rand()<.15&&(t.strafe*=-1);const M=(a.x-e.x)/o,w=(a.z-e.z)/o,b=o<x-.8?-1:0;i.mx=M*b+-w*t.strafe*.85,i.mz=w*b+M*t.strafe*.85;return}let m=null,p=1/0;for(const x of s.gems){const M=Math.hypot(x.x-e.x,x.z-e.z);M<p&&(p=M,m=x)}if(m&&p<14)return Ds(s,e,t,m);const y=(e.k-1)*2.2;return Ds(s,e,t,{x:s.mine.x+y,z:s.mine.z+(e.team==="blue"?2.2:-2.2)})}function Ds(s,e,t,n){t.mode="walk",t.path=_x(s,e.x,e.z,n.x,n.z),t.path.length&&(t.path[t.path.length-1]={x:n.x,z:n.z})}const yh=.38;function Sx(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function bx({picks:s,player:e=0,tier:t,seed:n=1,names:i}){const r=gx(),a=r.length,o=r[0].length,c={blue:[],red:[]};let l={x:o/2,z:a/2};for(let u=0;u<a;u++)for(let d=0;d<o;d++){const f=r[u][d];f==="1"&&c.red.push({x:d+.5,z:u+.5}),f==="2"&&c.blue.push({x:d+.5,z:u+.5}),f==="M"&&(l={x:d+.5,z:u+.5})}const h={t:0,map:r,W:o,H:a,mine:l,spawns:c,units:[],bullets:[],gems:[],events:[],mineT:2,countdown:null,over:!1,winner:null,rand:Sx(n),tier:t,nextId:1};for(const u of["blue","red"])s[u].forEach((d,f)=>{const g=Sa[d],_=c[u][f];h.units.push({id:h.nextId++,team:u,cid:d,c:g,k:f,x:_.x,z:_.z,vx:0,vz:0,face:u==="blue"?-Math.PI/2:Math.PI/2,hp:g.hp,maxHp:g.hp,ammo:g.ammo,superCharge:0,gems:0,alive:!0,respawnT:0,lastHurt:-99,lastShot:-99,revealT:-99,queue:[],dash:null,moved:0,kills:0,isPlayer:u==="blue"&&f===e,name:i?.[u]?.[f]??g.name,input:{mx:0,mz:0,fire:null,superFire:null},ai:null})});return h}const vn=(s,e,t)=>e<0||t<0||e>=s.W||t>=s.H||s.map[t][e]==="#",Ex=(s,e,t)=>s.map[Math.floor(t)]?.[Math.floor(e)]==="B";function Sh(s,e,t,n){for(let i=Math.floor(t-n);i<=Math.floor(t+n);i++)for(let r=Math.floor(e-n);r<=Math.floor(e+n);r++){if(!vn(s,r,i))continue;const a=Math.max(r,Math.min(e,r+1)),o=Math.max(i,Math.min(t,i+1));if((e-a)**2+(t-o)**2<n*n)return!0}return!1}function ho(s,e,t,n){const i=e.x,r=e.z;return Sh(s,e.x+t,e.z,yh)||(e.x+=t),Sh(s,e.x,e.z+n,yh)||(e.z+=n),Math.hypot(e.x-i,e.z-r)}function uo(s,e,t,n,i){const r=Math.hypot(n-e,i-t),a=Math.ceil(r/.2);for(let o=1;o<a;o++){const c=e+(n-e)*o/a,l=t+(i-t)*o/a;if(vn(s,Math.floor(c),Math.floor(l)))return!1}return!0}function bi(s,e,t){return t.alive?t.team===e||!Ex(s,t.x,t.z)||s.t-t.revealT<jt.revealAfterShot?!0:s.units.some(n=>n.alive&&n.team===e&&Math.hypot(n.x-t.x,n.z-t.z)<jt.bushSee):!1}const aa=(s,e)=>s.units.reduce((t,n)=>t+(n.team===e&&n.alive?n.gems:0),0),Fu=s=>s.c.attack.range;function Tx(s){const e=s.c.super;return e.kind==="dash"?e.dist+.5:e.range}function hc(s,e,t,n,i){s.bullets.push({x:e.x+Math.cos(t)*.45,z:e.z+Math.sin(t)*.45,vx:Math.cos(t)*n.speed,vz:Math.sin(t)*n.speed,ang:t,dmg:n.dmg,range:n.range,went:0,size:n.size,team:e.team,owner:e,isSuper:i,kind:n.kind,near:n.near,pierce:n.kind==="pierce",hit:new Set})}function bh(s,e,t,n){const i=n?e.c.super:e.c.attack;if(e.lastShot=s.t,e.revealT=s.t,e.face=t,s.events.push({type:n?"super":"shot",u:e,ang:t}),i.kind==="burst")for(let r=0;r<i.n;r++)e.queue.push({at:s.t+r*i.gap,ang:t+(s.rand()-.5)*2*i.spread,spec:i,isSuper:n});else if(i.kind==="spread")for(let r=0;r<i.n;r++)hc(s,e,t+(r/(i.n-1)-.5)*i.arc,i,n);else i.kind==="dash"?e.dash={left:i.time,vx:Math.cos(t)*i.dist/i.time,vz:Math.sin(t)*i.dist/i.time,hit:new Set,spec:i}:hc(s,e,t,i,n)}function Eh(s,e,t,n,i){e.alive&&(t=Math.round(t),e.hp-=t,e.lastHurt=s.t,n&&!i&&(n.superCharge=Math.min(1,n.superCharge+t/n.c.superCost)),s.events.push({type:"hit",u:e,dmg:t,from:n}),e.hp<=0&&Ax(s,e,n))}function Ax(s,e,t){e.alive=!1,e.hp=0,e.respawnT=jt.respawn,e.queue.length=0,e.dash=null,t&&t.kills++;for(let n=0;n<e.gems;n++){const i=s.rand()*Math.PI*2,r=1.2+s.rand()*1.6;s.gems.push({x:e.x,z:e.z,vx:Math.cos(i)*r,vz:Math.sin(i)*r,age:0})}s.events.push({type:"death",u:e,from:t,gems:e.gems}),e.gems=0}function wx(s,e){const t=s.spawns[e.team][e.k];Object.assign(e,{x:t.x,z:t.z,hp:e.maxHp,ammo:e.c.ammo,alive:!0,lastHurt:-99,lastShot:-99}),s.events.push({type:"spawn",u:e})}function Rx(s,e){if(s.over)return;s.t+=e;for(const r of s.units){if(!r.alive){r.respawnT-=e,r.respawnT<=0&&wx(s,r);continue}r.isPlayer||Mx(s,r,e);const a=r.input;let o=a.mx,c=a.mz;const l=Math.hypot(o,c);l>1&&(o/=l,c/=l);let h;if(r.dash){h=ho(s,r,r.dash.vx*e,r.dash.vz*e);for(const u of s.units)if(u.alive&&u.team!==r.team&&!r.dash.hit.has(u)&&Math.hypot(u.x-r.x,u.z-r.z)<.95){r.dash.hit.add(u),Eh(s,u,r.dash.spec.dmg,r,!0),u.alive&&s.events.push({type:"push",u,from:r});const d=Math.hypot(u.x-r.x,u.z-r.z)||1;ho(s,u,(u.x-r.x)/d*r.dash.spec.push*.5,(u.z-r.z)/d*r.dash.spec.push*.5)}r.dash.left-=e,(r.dash.left<=0||h<1e-4)&&(r.dash=null),r.vx=0,r.vz=0}else h=ho(s,r,o*r.c.speed*e,c*r.c.speed*e),r.vx=o*r.c.speed,r.vz=c*r.c.speed,l>.1&&s.t-r.lastShot>.35&&(r.face=Math.atan2(c,o));for(r.moved+=h,a.superFire!=null&&r.superCharge>=1&&!r.dash?(r.superCharge=0,bh(s,r,a.superFire,!0)):a.fire!=null&&r.ammo>=1&&!r.dash&&!r.queue.length&&(r.ammo-=1,bh(s,r,a.fire,!1)),a.fire=null,a.superFire=null;r.queue.length&&r.queue[0].at<=s.t;){const u=r.queue.shift();hc(s,r,u.ang,u.spec,u.isSuper)}r.ammo<r.c.ammo&&!r.queue.length&&(r.ammo=Math.min(r.c.ammo,r.ammo+e/r.c.reload)),r.hp<r.maxHp&&s.t-r.lastHurt>jt.regenDelay&&s.t-r.lastShot>jt.regenDelay&&(r.hp=Math.min(r.maxHp,r.hp+r.maxHp*jt.regenRate*e))}for(const r of s.bullets){const a=Math.max(1,Math.ceil(Math.hypot(r.vx,r.vz)*e/.2));for(let o=0;o<a&&!r.dead;o++){if(r.x+=r.vx*e/a,r.z+=r.vz*e/a,r.went+=Math.hypot(r.vx,r.vz)*e/a,r.went>=r.range){r.dead=!0,s.events.push({type:"fizzle",b:r});break}if(vn(s,Math.floor(r.x),Math.floor(r.z))){r.dead=!0,s.events.push({type:"wall",b:r});break}for(const c of s.units)if(!(!c.alive||c.team===r.team||r.hit.has(c))&&Math.hypot(c.x-r.x,c.z-r.z)<.42+r.size){r.hit.add(c);const l=r.kind==="snipe"?r.dmg*(r.near+(1-r.near)*Math.min(1,r.went/r.range)):r.dmg;if(Eh(s,c,l,r.owner,r.isSuper),!r.pierce){r.dead=!0;break}}}}if(s.bullets=s.bullets.filter(r=>!r.dead),s.mineT-=e,s.mineT<=0){s.mineT+=jt.gemEvery;const r=s.rand()*Math.PI*2;s.gems.push({x:s.mine.x,z:s.mine.z,vx:Math.cos(r)*1.4,vz:Math.sin(r)*1.4,age:0}),s.events.push({type:"gemspawn"})}for(const r of s.gems){if(r.age+=e,r.vx||r.vz){const a=r.x+r.vx*e,o=r.z+r.vz*e;vn(s,Math.floor(a),Math.floor(o))?r.vx=r.vz=0:(r.x=a,r.z=o);const c=Math.max(0,1-3.5*e);r.vx*=c,r.vz*=c,Math.hypot(r.vx,r.vz)<.05&&(r.vx=r.vz=0)}if(!(r.age<.35)){for(const a of s.units)if(a.alive&&Math.hypot(a.x-r.x,a.z-r.z)<.7){a.gems++,r.taken=!0,s.events.push({type:"gem",u:a});break}}}s.gems=s.gems.filter(r=>!r.taken);const t=aa(s,"blue"),n=aa(s,"red"),i=t>=jt.gemWin&&t>n?"blue":n>=jt.gemWin&&n>t?"red":null;i?!s.countdown||s.countdown.team!==i?(s.countdown={team:i,left:jt.countdown},s.events.push({type:"countdown",team:i})):(s.countdown.left-=e,s.countdown.left<=0&&Th(s,i)):(s.countdown&&s.events.push({type:"countdownStop"}),s.countdown=null),!s.over&&s.t>=jt.time&&Th(s,t>n?"blue":n>t?"red":"draw")}function Th(s,e){s.over=!0,s.winner=e,s.events.push({type:"end",winner:e})}const Us=new I;function Qt(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;Us.copy(e),Us[n]=0,Us.normalize();const l=.5*a/(a+o),h=1-Us.angleTo(s)/c;return Math.sign(Us[t])===1?h*l:o/(a+o)+l+l*(1-h)}class oa extends ps{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Qt(g,c,"z","y",r,n),d[p+1]=1-Qt(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-Qt(g,c,"z","y",r,n),d[p+1]=1-Qt(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-Qt(g,c,"x","z",r,e),d[p+1]=Qt(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Qt(g,c,"x","z",r,e),d[p+1]=1-Qt(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Qt(g,c,"x","y",r,e),d[p+1]=1-Qt(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=Qt(g,c,"x","y",r,e),d[p+1]=1-Qt(g,c,"y","x",r,t);break}}}const Pt={ground:[4168286,3838552],rimDark:3111484,path:15324314,wallSide:13924916,bush:5030462,bushDark:1866292,bushLight:10809450,blue:3711999,red:16730698,gem:11820287,gemGlow:14725375},fo=new Map;function Gs(s,e={}){const t=s+JSON.stringify(e);if(fo.has(t)&&!e.unique)return fo.get(t);const n=new On({color:s,...e.vc?{vertexColors:!0}:{},...e.map?{map:e.map}:{}});return e.emissive&&(n.emissive.setHex(e.emissive),n.emissiveIntensity=e.ei??1),e.opacity!==void 0&&(n.transparent=!0,n.opacity=e.opacity,n.depthWrite=!1),e.unique||fo.set(t,n),n}function Ah(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t);const a=new gs(n);return a.colorSpace=ht,a}function bt(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ca(s,e=64){const t=bt(s),n=Float32Array.from({length:e*e},t),i=(a,o)=>n[(o%e+e)%e*e+(a%e+e)%e],r=a=>a*a*(3-2*a);return(a,o)=>{const c=Math.floor(a),l=Math.floor(o),h=r(a-c),u=r(o-l);return(i(c,l)*(1-h)+i(c+1,l)*h)*(1-u)+(i(c,l+1)*(1-h)+i(c+1,l+1)*h)*u}}function Vc(s){const{W:e,H:t,map:n}=s,i=new Set,r=Math.floor(t/2),a=(o,c)=>{o>=0&&c>=0&&o<e&&c<t&&n[c][o]!=="#"&&n[c][o]!=="B"&&i.add(c*e+o)};for(let o=3;o<e-3;o++)a(o,2),a(o,t-3),a(o,r);for(let o=2;o<t-2;o++)for(const c of[5,e-6])a(c,o);for(let o=r-3;o<=r+3;o++)a(Math.floor(e/2),o);return i}function Cx(s,e,t){const{W:n,H:i}=e,r=Vc(e),a=document.createElement("canvas");a.width=n*t,a.height=i*t;const o=a.getContext("2d");o.fillStyle="#"+Pt.path.toString(16).padStart(6,"0");for(const l of r){const h=l%n,u=Math.floor(l/n);o.fillRect((h+.08)*t,(u+.08)*t,t*.84,t*.84)}for(const l of r){const h=l%n,u=Math.floor(l/n);r.has(l+1)&&h+1<n&&o.fillRect((h+.5)*t,(u+.08)*t,t,t*.84),r.has(l+n)&&o.fillRect((h+.08)*t,(u+.5)*t,t*.84,t)}s.save(),s.filter=`blur(${t*.2}px)`,s.globalAlpha=.3,s.drawImage(a,0,0),s.restore(),s.save(),s.filter=`blur(${t*.06}px)`,s.globalAlpha=.12,s.drawImage(a,0,0),s.restore();const c=bt(77);for(const l of r)for(let h=0;h<3;h++){if(c()<.45)continue;const u=l%n,d=Math.floor(l/n),f=(u+.15+c()*.7)*t,g=(d+.2+c()*.6)*t,_=t*(.04+c()*.05);s.fillStyle="rgba(120,96,60,0.35)",s.beginPath(),s.ellipse(f+_*.3,g+_*.4,_,_*.7,0,0,7),s.fill(),s.fillStyle="rgba(250,240,215,0.8)",s.beginPath(),s.ellipse(f,g,_,_*.7,0,0,7),s.fill()}}function Ix(s,e,t){const{W:n,H:i,map:r}=e,a=bt(913),o=Vc(e);for(let c=0;c<i;c++)for(let l=0;l<n;l++){if(r[c][l]==="#"||o.has(c*n+l)||a()>.22)continue;const h=a(),u=(l+.2+a()*.6)*t,d=(c+.2+a()*.6)*t;if(h<.45){const f=a()<.5?"255,255,245":"255,226,90";for(let g=0;g<3;g++){const _=u+(a()-.5)*t*.3,m=d+(a()-.5)*t*.25;s.fillStyle="rgba(20,80,30,0.25)",s.beginPath(),s.arc(_+1.5,m+2,t*.05,0,7),s.fill(),s.fillStyle=`rgba(${f},0.95)`,s.beginPath(),s.arc(_,m,t*.045,0,7),s.fill(),s.fillStyle="rgba(255,190,40,0.95)",s.beginPath(),s.arc(_,m,t*.017,0,7),s.fill()}}else if(h<.75)s.save(),s.translate(u,d),s.rotate(a()*6.28),s.fillStyle=a()<.5?"rgba(232,170,60,0.85)":"rgba(150,200,70,0.85)",s.beginPath(),s.ellipse(0,0,t*.1,t*.045,0,0,7),s.fill(),s.restore();else for(let f=0;f<6;f++){const g=-1.57+(f-2.5)*.25;s.strokeStyle="rgba(30,110,50,0.5)",s.lineWidth=2.2,s.beginPath(),s.moveTo(u,d),s.lineTo(u+Math.cos(g)*t*.2,d+Math.sin(g)*t*.2),s.stroke()}}}function Px(s){const{W:e,H:t,map:n}=s,i=new Int32Array(e*t).fill(-1),r=new Map;let a=0;for(let o=0;o<t;o++)for(let c=0;c<e;c++){if(n[o][c]!=="#"||i[o*e+c]>=0)continue;const l=[[c,o]],h=[];for(i[o*e+c]=a;l.length;){const[g,_]=l.pop();h.push([g,_]);for(const[m,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=g+m,x=_+p;y>=0&&x>=0&&y<e&&x<t&&n[x][y]==="#"&&i[x*e+y]<0&&(i[x*e+y]=a,l.push([y,x]))}}const u=h.map(([g,_])=>g*97+Math.min(_,t-1-_)*7).reduce((g,_)=>Math.min(g,_),1e9),d=bt(u*2654435761)(),f=h.length<=2?d<.6?"barrel":"stone":d<.3?"stone":"crate";for(const g of h)r.set(g[1]*e+g[0],f);a++}return r}function Lx(){const s=new oa(.96,.92,.96,4,.12).translate(0,.46,0),e=s.attributes.position,t=new Float32Array(e.count*3),n=new re(5857662),i=new re(9082034),r=new re(12897506),a=new re(10134722),o=new re(4541542);for(let c=0;c<e.count;c++){const l=e.getY(c),h=pa.clamp(l/.92,0,1),u=l>.86,f=u&&(Math.abs(e.getX(c))>.36||Math.abs(e.getZ(c))>.36)?a.clone():u?r.clone():n.clone().lerp(i,h);!u&&Math.abs(l-.5)<.04&&f.lerp(o,.6),t.set([f.r,f.g,f.b],c*3)}return s.setAttribute("color",new xt(t,3)),s}function Dx(){const s=[];for(let c=0;c<=12;c++){const l=c/12;s.push(new ye(.36+Math.sin(l*Math.PI)*.07,l*.9))}s.push(new ye(.3,.9),new ye(0,.92));const e=new Uc(s,20),t=e.attributes.position,n=new Float32Array(t.count*3),i=new re(14256702),r=new re(10770982),a=new re(5922670),o=new re(15642736);for(let c=0;c<t.count;c++){const l=t.getX(c),h=t.getY(c),u=t.getZ(c),d=Math.atan2(u,l);let g=(Math.floor((d+Math.PI)/(2*Math.PI)*10)%2?i:r.clone().lerp(i,.55)).clone().lerp(new re(8011800),.25*(1-h/.9));(Math.abs(h-.2)<.05||Math.abs(h-.7)<.05)&&(g=a.clone()),h>.89&&(g=o.clone()),n.set([g.r,g.g,g.b],c*3)}return e.setAttribute("color",new xt(n,3)),e.computeVertexNormals(),e}function Ux(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.fillStyle="#e6eaf4",t.fillRect(0,0,128,128),t.strokeStyle="rgba(70,78,110,0.45)",t.lineWidth=6,t.strokeRect(12,12,104,104),t.strokeStyle="rgba(255,255,255,0.7)",t.lineWidth=2,t.strokeRect(17,17,94,94);const n=(r,a,o)=>{t.fillStyle=o,t.beginPath(),t.ellipse(64+r,72+a,15,12,0,0,7),t.fill();for(const[c,l,h]of[[-17,-12,6],[-6,-22,6.5],[6,-22,6.5],[17,-12,6]])t.beginPath(),t.arc(64+r+c,72+a+l,h,0,7),t.fill()};n(1.5,2,"rgba(255,255,255,0.75)"),n(0,0,"rgba(70,78,110,0.5)");const i=new gs(e);return i.colorSpace=ht,i.anisotropy=8,i}function Nx(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ft;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=wh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=wh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function wh(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new xt(a,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Rh(s,e){if(e===Gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===rc||e===au){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===rc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function bn(s,e,t,n,i){const r=s.attributes.position,a=new Float32Array(r.count*3),o=new re(e),c=new re(t);for(let l=0;l<r.count;l++){const h=pa.clamp((r.getY(l)-n)/(i-n),0,1),u=o.clone().lerp(c,h*h*.7+h*.3);a.set([u.r,u.g,u.b],l*3)}return s.setAttribute("color",new xt(a,3)),s}const Fx=s=>s.index?s.toNonIndexed():s,tr=(...s)=>Nx(s.map(e=>{const t=Fx(e);return t.deleteAttribute("uv"),t}));function Ox(){const s=bn(new Ri(.16,.22,.9,8).translate(0,.45,0),6962718,10511406,0,.9),e=(t,n,i,r)=>bn(new va(t,2).translate(n,i,r),2059830,9363546,i-t,i+t);return tr(s,e(.95,0,1.55,0),e(.7,.55,1.25,.25),e(.65,-.5,1.3,-.2))}function Bx(){const s=bn(new Ri(.13,.17,.6,8).translate(0,.3,0),6962718,9065512,0,.6),e=(t,n,i)=>bn(new Nc(t,n,10).translate(0,i+n/2,0),1662003,6275674,i,i+n);return tr(s,e(.95,1.1,.45),e(.75,.95,1.05),e(.5,.8,1.6))}function zx(s){const e=new va(.5,1),t=e.attributes.position,n=bt(s);for(let i=0;i<t.count;i++){const r=.82+n()*.3;t.setXYZ(i,t.getX(i)*r,Math.max(-.05,t.getY(i)*.7*r),t.getZ(i)*r)}return e.translate(0,.25,0),e.computeVertexNormals(),bn(e,5923456,13160674,0,.6)}function kx(){const s=bn(new Ri(.05,.07,.16,8).translate(0,.08,0),14208176,16774886,0,.16),e=bn(new Fc(.13,10,6,0,Math.PI*2,0,Math.PI/2).scale(1,.75,1).translate(0,.15,0),12068906,16734794,.15,.25);return tr(s,e,s.clone().scale(.7,.7,.7).translate(.15,0,.08),e.clone().scale(.7,.7,.7).translate(.15,0,.08))}function Hx(){const s=bn(new Ri(.24,.3,.26,12).translate(0,.13,0),5911576,10116652,0,.26),e=bn(new wi(.22,12).rotateX(-Math.PI/2).translate(0,.262,0),15253640,15253640,0,1);return tr(s,e)}function Gx(){const s=(e,t,n)=>bn(new oa(e,e*.6,e*.85,2,e*.25).translate(t,e*.3,n),6976144,13949672,0,e*.6);return tr(s(.26,0,0),s(.18,.2,.1),s(.15,-.12,.18))}function Vx(s,e,t,n){const{W:i,H:r,map:a}=e,o=bt(4242),c=(h,u,d,f,g,_)=>{s.save(),s.translate(h,u),s.scale(1,f/d);const m=s.createRadialGradient(0,0,d*.2,0,0,d);m.addColorStop(0,g),m.addColorStop(.7,g),m.addColorStop(1,_),s.fillStyle=m,s.beginPath(),s.arc(0,0,d,0,7),s.fill(),s.restore()},l=Math.ceil(r/2);for(let h=1;h<l;h++)for(let u=1;u<i-1;u++){if(a[h][u]!=="."||n.has(h*i+u))continue;const d=[[1,0],[-1,0],[0,1],[0,-1]].every(([g,_])=>a[h+_]?.[u+g]==="."),f=o();for(const g of h===r-1-h?[h]:[h,r-1-h]){const _=(u+.5)*t,m=(g+.5)*t;if(d&&f<.07){for(let p=0;p<4;p++)c(_+(bt(u*13+p)()-.5)*t*.9,m+(bt(h*17+p)()-.5)*t*.7,t*(.45+bt(u+h*7+p)()*.3),t*.4,"rgba(176,140,84,0.42)","rgba(176,140,84,0)");c(_,m,t*.35,t*.28,"rgba(206,172,110,0.35)","rgba(206,172,110,0)")}else f<.16&&c(_,m,t*(.7+o()*.5),t*.6,"rgba(24,86,44,0.28)","rgba(24,86,44,0)")}}}function Wx(s){const{W:e,H:t,map:n}=s,i=new Ht,r=bt(9090),a=new Pe,o=Gs(16777215,{vc:!0}),c=(m,p,y=!0)=>{if(!p.length)return;const x=new na(m,o,p.length);p.forEach(([M,w,b,E,C=1],P)=>{a.compose(new I(M,0,w),new It().setFromAxisAngle(new I(0,1,0),E),new I(b,b*C,b)),x.setMatrixAt(P,a)}),x.castShadow=y,x.receiveShadow=!0,i.add(x)},l=[],h=[],u=[];for(let m=-7;m<t+7;m+=1.1)for(let p=-7;p<e+7;p+=1.1){const y=Math.max(-1-p,p-e,-1-m,m-t);if(y<.6)continue;const x=p+(r()-.5)*.9,M=m+(r()-.5)*.9;if(r()>.86-y*.04)continue;const b=m>t,E=(.85+r()*.45)*(b?.55:1),C=r();b&&y<1.6||(C<.12||b&&C<.4?u:C<.55||b?l:h).push([x,M,C<.12?E*1.4:E,r()*6.28,b?.6:1])}c(Ox(),l),c(Bx(),h),c(zx(5),u);const d=[],f=[],g=[],_=Math.ceil(t/2);for(let m=0;m<_;m++)for(let p=0;p<e;p++){if(n[m][p]!==".")continue;const y=[[1,0],[-1,0],[0,1],[0,-1]].some(([v,S])=>n[m+S]?.[p+v]==="#"),x=p===0||p===e-1,M=r();if(!(y&&M<.32||x&&M<.28))continue;const w=r(),b=(r()-.5)*.5,E=(r()-.5)*.5,C=r()*6.28,P=.85+r()*.35;for(const v of m===t-1-m?[m]:[m,t-1-m]){const S=[p+.5+b,v+.5+(v===m?E:-E),P,C];(w<.35?g:w<.7?d:f).push(S)}}return c(Gx(),g,!1),c(kx(),d,!1),c(Hx(),f),i}const Xx=(s,e,t)=>{const n=new re(s),i=new re(e);return n.lerp(i,t)};function qx(s){const{W:e,H:t,map:n}=s,i=40,r=document.createElement("canvas");r.width=e*i,r.height=t*i;const a=r.getContext("2d"),o=ca(7),c=ca(31),l=bt(11),h=e*6,u=t*6,d=document.createElement("canvas");d.width=h,d.height=u;const f=d.getContext("2d"),g=f.createImageData(h,u),_=new re(Pt.ground[0]),m=new re(Pt.ground[1]),p=new re(6076532),y=new re(2914888);for(let b=0;b<u;b++)for(let E=0;E<h;E++){const C=Math.floor(E/6),P=Math.floor(b/6),v=C+P&1,S=o(E*.11,b*.11)*.6+c(E*.35,b*.35)*.4,D=(v?m:_).clone().lerp(S>.5?p:y,Math.abs(S-.5)*.55),F=(b*h+E)*4;g.data[F]=D.r*255,g.data[F+1]=D.g*255,g.data[F+2]=D.b*255,g.data[F+3]=255}f.putImageData(g,0,0),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(d,0,0,r.width,r.height);for(let b=0;b<e*t*7;b++){const E=l()*r.width,C=l()*r.height,P=5+l()*6,v=-1.9+l()*.8;a.strokeStyle=l()>.5?"rgba(255,255,200,0.16)":"rgba(30,90,30,0.14)",a.lineWidth=1.6,a.beginPath(),a.moveTo(E,C),a.lineTo(E+Math.cos(v)*P,C+Math.sin(v)*P),a.stroke()}Vx(a,s,i,Vc(s)),Cx(a,s,i),Ix(a,s,i);for(const[b,E,C,P]of[["r",0,6,"255,90,90"],["b",t-6,t,"70,150,255"]]){const v=a.createLinearGradient(0,(b==="r"?E:C)*i,0,(b==="r"?C:E)*i);v.addColorStop(0,`rgba(${P},0.20)`),v.addColorStop(1,`rgba(${P},0)`),a.fillStyle=v,a.fillRect(0,E*i,e*i,(C-E)*i)}const x=(b,E,C,P)=>{const v=a.createRadialGradient((b+.5)*i,(E+.56)*i,2,(b+.5)*i,(E+.56)*i,C);v.addColorStop(0,`rgba(20,50,10,${P})`),v.addColorStop(1,"rgba(20,50,10,0)"),a.fillStyle=v,a.fillRect((b-1.5)*i,(E-1.5)*i,i*4,i*4)};for(let b=0;b<t;b++)for(let E=0;E<e;E++)n[b][E]==="#"?x(E,b,i*1.35,.5):n[b][E]==="B"&&x(E,b,i*1.1,.34);for(const b of["blue","red"])for(const E of s.spawns[b]){const C=a.createRadialGradient(E.x*i,E.z*i,2,E.x*i,E.z*i,i*.62),P=b==="blue"?"70,160,255":"255,90,90";C.addColorStop(0,`rgba(${P},0.10)`),C.addColorStop(.75,`rgba(${P},0.34)`),C.addColorStop(1,`rgba(${P},0)`),a.fillStyle=C,a.beginPath(),a.arc(E.x*i,E.z*i,i*.64,0,7),a.fill()}const M=a.createRadialGradient(r.width/2,r.height/2,r.height*.34,r.width/2,r.height/2,r.height*.72);M.addColorStop(0,"rgba(10,40,10,0)"),M.addColorStop(1,"rgba(10,40,10,0.28)"),a.fillStyle=M,a.fillRect(0,0,r.width,r.height);const w=new gs(r);return w.colorSpace=ht,w.anisotropy=8,w}function Yx(){const e=document.createElement("canvas");e.width=e.height=160;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,160);n.addColorStop(0,"#ffc47a"),n.addColorStop(1,"#e7873a"),t.fillStyle=n,t.fillRect(0,0,160,160),t.fillStyle="rgba(120,56,16,0.18)";for(let a=1;a<5;a++)t.fillRect(0,a*160/5-1,160,3);const i=t.createLinearGradient(0,0,160,160);i.addColorStop(0,"#c4692a"),i.addColorStop(1,"#a8501c"),t.strokeStyle=i,t.lineWidth=16,t.strokeRect(8,8,144,144),t.strokeStyle="rgba(255,214,150,0.55)",t.lineWidth=3,t.strokeRect(17,17,126,126),t.strokeStyle="#b9601f",t.lineWidth=16,t.beginPath(),t.moveTo(14,14),t.lineTo(146,146),t.stroke(),t.strokeStyle="rgba(255,214,150,0.5)",t.lineWidth=3,t.beginPath(),t.moveTo(22,14),t.lineTo(146,138),t.stroke();for(const[a,o]of[[20,20],[140,20],[20,140],[140,140]])t.fillStyle="#7a3c16",t.beginPath(),t.arc(a,o,5,0,7),t.fill(),t.fillStyle="rgba(255,230,180,0.7)",t.beginPath(),t.arc(a-1.5,o-1.5,2,0,7),t.fill();const r=new gs(e);return r.colorSpace=ht,r.anisotropy=8,r}function jx(s,e){const t=bt(s*73856093^e*19349663),n=[],i=[],r=[],a=new re(Pt.bushDark),o=new re(Pt.bush),c=new re(Pt.bushLight),l=Xx(16777215,14221210,t()*.5),h=260;for(let f=0;f<h;f++){const g=t()*Math.PI*2,_=Math.pow(t(),.4)*.5,m=Math.cos(g)*_,p=Math.sin(g)*_,y=_/.5,x=.78+t()*.16-y*.12,M=.1+t()*.05,w=.05+y*.12+t()*.04,b=g+(t()-.5)*.7,E=Math.cos(b),C=Math.sin(b),P=-C,v=E,S=n.length/3,D=(B,Z,W,ee)=>{n.push(B,Z,W),i.push(ee.r,ee.g,ee.b)},F=a.clone().multiply(l),k=o.clone().multiply(l).lerp(c,t()*.25),j=c.clone().multiply(l).lerp(new re(14221194),t()*.3);D(m-P*M,.02,p-v*M,F),D(m+P*M,.02,p+v*M,F),D(m-P*M*.8+E*w*.4,x*.55,p-v*M*.8+C*w*.4,k),D(m+P*M*.8+E*w*.4,x*.55,p+v*M*.8+C*w*.4,k),D(m+E*w,x,p+C*w,j),r.push(S,S+1,S+2,S+1,S+3,S+2,S+2,S+3,S+4)}const u=new ft;u.setAttribute("position",new $e(n,3)),u.setAttribute("color",new $e(i,3)),u.setIndex(r),u.computeVertexNormals();const d=u.attributes.normal;for(let f=0;f<d.count;f++)d.setXYZ(f,d.getX(f)*.35,.9,d.getZ(f)*.35);return u}function Kx(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),n=t.createImageData(256,256),i=ca(101,4),r=ca(202,8);for(let o=0;o<256;o++)for(let c=0;c<256;c++){const l=c/256*4,h=o/256*4,u=i(l,h)*.65+r(l*2,h*2)*.35,d=Math.max(0,u-.52)/.48,f=(o*256+c)*4;n.data[f]=10,n.data[f+1]=30,n.data[f+2]=20,n.data[f+3]=Math.min(255,d*d*255*1.4)}t.putImageData(n,0,0);const a=new gs(e);return a.wrapS=a.wrapT=Mi,a.colorSpace=ht,a}function $x(s,e){const{W:t,H:n,map:i}=e,r=new Ht;s.add(r);const a=new Ke(new $t(t,n),new On({map:qx(e)}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),a.receiveShadow=!0,r.add(a);const o=new Ke(new $t(t+60,n+60),new On({color:Pt.rimDark}));o.rotation.x=-Math.PI/2,o.position.set(t/2,-.02,n/2),o.receiveShadow=!0,r.add(o);const c=new oa(1,1,1,3,.3).translate(0,.5,0);{const v=c.attributes.position,S=new Float32Array(v.count*3),D=new re(Pt.rimDark),F=new re(8372036);for(let k=0;k<v.count;k++){const j=pa.clamp(v.getY(k),0,1),B=D.clone().lerp(F,j*j);S.set([B.r,B.g,B.b],k*3)}c.setAttribute("color",new xt(S,3))}const l=[];for(let v=-1;v<=t;v++)l.push([v,-1],[v,n]);for(let v=0;v<n;v++)l.push([-1,v],[t,v]);const h=new na(c,Gs(16777215,{vc:!0}),l.length),u=new Pe;l.forEach(([v,S],D)=>{const F=.9+(v*7+S*13)%5*.1;u.compose(new I(v+.5,0,S+.5),new It,new I(1.02,F,1.02)),h.setMatrixAt(D,u)}),h.castShadow=!0,h.receiveShadow=!0,r.add(h),r.add(Wx(e));const d=Px(e),f={crate:[],stone:[],barrel:[]};for(let v=0;v<n;v++)for(let S=0;S<t;S++)i[v][S]==="#"&&f[d.get(v*t+S)||"crate"].push([S,v]);const g={crate:new oa(.98,1,.98,4,.1).translate(0,.5,0),stone:Lx(),barrel:Dx()},_={crate:new On({map:Yx()}),stone:new On({vertexColors:!0,map:Ux()}),barrel:Gs(16777215,{vc:!0})},m=bt(5);for(const v of Object.keys(f)){if(!f[v].length)continue;const S=new na(g[v],_[v],f[v].length);f[v].forEach(([D,F],k)=>{const j=new It().setFromAxisAngle(new I(0,1,0),v==="barrel"?m()*6.28:0);u.compose(new I(D+.5,0,F+.5),j,new I(1,v==="barrel"?.95+m()*.1:1,1)),S.setMatrixAt(k,u);const B=.94+m()*.1;S.setColorAt(k,new re(B,B,B))}),S.castShadow=!0,S.receiveShadow=!0,r.add(S)}const p=[],y=new On({vertexColors:!0,side:Kt}),x=new On({vertexColors:!0,side:Kt,transparent:!0,opacity:.42,depthWrite:!1});for(let v=0;v<n;v++)for(let S=0;S<t;S++)if(i[v][S]==="B"){const D=new Ke(jx(S,v),y);D.position.set(S+.5,0,v+.5),D.receiveShadow=!0,r.add(D),p.push({m:D,i:S,j:v,phase:bt(S*31+v)()*6.28,shake:0})}const M=new Ke(new wi(.9,32),new _t({map:Ah("rgba(30,14,48,1)","rgba(30,14,48,0)",128),transparent:!0,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(e.mine.x,.03,e.mine.z),r.add(M);const w=new Ke(new $t(3.4,3.4),new _t({map:Ah("rgba(200,120,255,0.8)","rgba(200,120,255,0)"),transparent:!0,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.set(e.mine.x,.05,e.mine.z),r.add(w);const b=new Ke(new Oc(.92,.13,10,32),new On({color:10123952}));b.rotation.x=-Math.PI/2,b.position.set(e.mine.x,.09,e.mine.z),b.castShadow=!0,b.receiveShadow=!0,r.add(b);const E=bt(3);for(let v=0;v<5;v++){const S=v/5*6.28+.4,D=new Ke(new Ma(.16+E()*.08,0),Gs(12880639,{emissive:8006352,ei:.5}));D.scale.y=1.7,D.position.set(e.mine.x+Math.cos(S)*1.05,.2,e.mine.z+Math.sin(S)*1.05),D.rotation.y=S,D.castShadow=!0,r.add(D)}const C=Kx();C.repeat.set(t/9,n/9);const P=new Ke(new $t(t,n),new _t({map:C,transparent:!0,opacity:.2,depthWrite:!1}));return P.rotation.x=-Math.PI/2,P.position.set(t/2,.025,n/2),P.renderOrder=1,r.add(P),{root:r,glow:w,update(v,S,D){w.material.opacity=.75+Math.sin(v*3)*.2,C.offset.set(v*.006,-v*.004);for(const F of p){let k=!1,j=!1;for(const Z of S)!Z.alive||Math.floor(Z.x)!==F.i||Math.floor(Z.z)!==F.j||(j=!0,Z.team===D&&(k=!0));j?F.shake=Math.min(1,F.shake+.2):F.shake*=.92,F.m.material=k?x:y;const B=Math.sin(v*9+F.phase)*.05*F.shake+Math.sin(v*1.3+F.phase)*.012;F.m.rotation.set(B,0,B*.7),F.m.scale.setScalar(1+Math.sin(v*11+F.phase)*.03*F.shake)}}}}async function Zx(s,e,{base:t="./art/",prefix:n="b3"}={}){const i={},r=new Map,a=o=>(r.has(o)||r.set(o,e(o)),r.get(o));for(const[o,c]of Object.entries(s)){if(c.atlas){const d=(_,m,p,y)=>{const x=M=>m.dirs.indexOf(c.src?c.src[M]:M);return Array.from({length:c.dirs},(M,w)=>Array.from({length:p},(b,E)=>{const C=_.clone();return C.repeat.set(1/p,1/y),C.offset.set(E/p,1-(x(w)+1)/y),C.needsUpdate=!0,C}))},f=await a(`${t}${n}_${o}.webp`),g=c.shAtlas&&await a(`${t}${n}sh_${c.shn}.webp`);i[o]={...c,dirs:d(f,c.atlas,c.n,c.atlas.rows),shDirs:g&&d(g,c.shAtlas,c.n,c.shAtlas.rows)};continue}const l={},h=d=>l[d]||=Promise.all(Array.from({length:c.n},(f,g)=>a(`${t}${n}_${o}_d${d}_f${g}.png`))),u=d=>c.src?c.src[d]:d;i[o]={...c,dirs:await Promise.all(Array.from({length:c.dirs},(d,f)=>h(u(f)))),shDirs:c.sh&&await Promise.all(Array.from({length:c.dirs},(d,f)=>Promise.all(Array.from({length:c.n},(g,_)=>a(`${t}${n}sh_${c.shn}_d${u(f)}_f${_}.png`)))))}}return i}function Jx(s){return s.userData.f={value:0},s.onBeforeCompile=e=>{e.uniforms.uFlash=s.userData.f,e.fragmentShader=`uniform float uFlash;
`+e.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uFlash);
#include <dithering_fragment>`)},s}const uc={flash:.12,flashPeak:.85,shadowAlpha:.34},Ms=55,Ou=Ms*Math.PI/180,Bu=Math.sin(Ou),ba=Math.cos(Ou),dc=Math.PI/180,nr=.75,Ch=uc.shadowAlpha,Ih=.35,Qx=4,ev=new $t(1,1),tv=new $t(1,1).rotateX(-Math.PI/2),nv=new I(0,ba,-Bu),iv=new I(0,Bu,ba);let zn=null;const sv=new Uu,rv=s=>new Promise((e,t)=>sv.load(s,n=>{n.colorSpace=ht,n.generateMipmaps=!1,n.minFilter=n.magFilter=kt,e(n)},void 0,t));let zu=null;const av=s=>{zu=s},Wc=()=>Math.cos((zu??(zn&&zn.dealer?zn.dealer.elev:Ms))*dc)/ba,ov=s=>s.height*nr*Wc()+.2/ba;async function cv(){const s=await(await fetch("./art/bake3d.json")).json();zn=await Zx(s,rv,{base:"./art/",prefix:"b3"})}const lv=(s,e)=>s.speed*(s.h/s.bodyPx)*s.cycle*e,hv=(s,e)=>{const t=s.dirs.length,n=Math.atan2(Math.cos(e),Math.sin(e));return(Math.round(n/(2*Math.PI/t))%t+t)%t};function uv(s,e){const t=e.team==="red"&&zn[e.c.rig+"R"]?e.c.rig+"R":e.c.rig,n=e.c.height*nr,i={walk:zn[t],shoot:zn[t+"_shoot"],idle:zn[t+"_idle"],die:zn[t+"_die"]},r=new Ht;s.add(r);const a=Jx(new _t({transparent:!0,depthWrite:!1,toneMapped:!1}));a.map=i.walk.dirs[0][0];const o=new Ke(ev,a);o.frustumCulled=!1,o.renderOrder=5,s.add(o);const c=new _t({color:0,transparent:!0,opacity:Ch,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.walk.shDirs&&(c.map=i.walk.shDirs[0][0]);const l=new Ke(tv,c);l.frustumCulled=!1,l.renderOrder=2,s.add(l);const h=e.team==="blue"?Pt.blue:Pt.red,u=new Ke(new $s(.5,.7,40),new _t({color:h,transparent:!0,opacity:e.isPlayer?.95:.85,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.03,u.renderOrder=3,r.add(u);const d=new Ke(new wi(.5,40),new _t({color:h,transparent:!0,opacity:.22,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.025,d.renderOrder=3,r.add(d);const f=new Ke(new $s(.66,.76,40),new _t({color:16765498,transparent:!0,opacity:0,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.035,f.renderOrder=3,r.add(f),{u:e,root:r,body:o,ring:u,superRing:f,mats:[a],x:e.x,z:e.z,face:e.face,kick:0,flash:0,pop:1,lastMoved:e.moved,clock:0,phase:0,shotT:-99,dieT:null,bodyScale:1,state:"idle",onShot(){this.shotT=this.clock},update(_,m,p,y){const x=this.u;this.clock+=_;const M=p&&(x.alive||this.dieT!=null&&this.clock-this.dieT<(i.die?i.die.cycle:.9)+Ih);r.visible=o.visible=l.visible=M,x.alive&&this.dieT!=null&&(this.dieT=null,this.pop=0),x.alive?(this.x+=(x.x-this.x)*Math.min(1,_*20),this.z+=(x.z-this.z)*Math.min(1,_*20)):this.dieT==null&&(this.dieT=this.clock),r.position.set(this.x,0,this.z);let w=x.face-this.face;w=Math.atan2(Math.sin(w),Math.cos(w)),this.face+=w*Math.min(1,_*18);const b=x.moved-this.lastMoved,E=b/Math.max(_,1e-4);this.lastMoved=x.moved;const C=x.alive&&E>.3;let P=i.idle||i.walk,v=0,S=1,D="idle";if(!x.alive&&i.die){P=i.die;const V=this.clock-this.dieT;v=Math.min(P.n-1,Math.floor(V/P.cycle*P.n)),S=V<P.cycle?1:Math.max(0,1-(V-P.cycle)/Ih),D="die"}else if(x.alive){const V=i.shoot,K=this.clock-this.shotT+(V?V.hit*V.cycle:0);C?this.run=Math.min(1,(this.run||0)+_*8):this.run=Math.max(0,(this.run||0)-_*8),this.run>.5?(P=i.walk,this.phase=(this.phase+b/lv(P,n))%1,v=Math.floor(this.phase*P.n)%P.n,D="walk"):V&&K<V.cycle*.96?(P=V,v=Math.min(P.n-1,Math.floor(K/P.cycle*P.n)),D="shoot"):i.idle?(P=i.idle,v=Math.floor(this.clock/P.cycle%1*P.n)%P.n):(P=i.walk,v=0)}this.state=D;const F=hv(P,this.face),k=P.dirs[F][v];a.map!==k&&(a.map=k),this.flash=Math.max(0,this.flash-_/uc.flash),a.userData.f.value=this.flash*uc.flashPeak,this.pop=Math.min(1,this.pop+_*Qx);const j=this.pop,Z=(j<1?1+Math.sin(j*Math.PI)*.22:1)*(x.dash?1.1:1)*this.bodyScale,W=(j<1?.6+.4*j:1)*(x.dash?.92:1)*this.bodyScale,ee=Math.sin(P.elev*dc),ae=n*Math.cos(P.elev*dc)/P.bodyPx,X=P.w*ae*Z,ie=P.h*ae*W;o.scale.set(X,ie,1),o.quaternion.copy(s.userData.cam.quaternion);const Ee=(P.ay-P.h/2)*ae*W;if(o.position.set(this.x,0,this.z).addScaledVector(nv,Ee).addScaledVector(iv,.45),a.opacity=y*S,P.shDirs&&P.sh){const V=P.shDirs[F][v];c.map!==V&&(c.map=V);const[K,fe,ce,Ae]=P.sh;l.scale.set(ce*ae*Z,1,Ae*ae*W/ee),l.position.set(this.x+(K+ce/2-P.w/2)*ae*Z,.02,this.z+(fe+Ae/2-P.ay)*ae*W/ee),c.opacity=Ch*y*S,l.visible=M}else l.visible=!1;f.material.opacity=x.superCharge>=1&&x.alive?.55+Math.sin(m*8)*.35:0,u.material.opacity=(x.isPlayer?.95:.7)*(x.alive?1:0),this.bodyScale=1},dispose(){s.remove(o),s.remove(l),s.remove(r),a.dispose(),c.dispose()}}}class dv extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _v(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Pv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Hs.extractUrlBase(e);a=Hs.resolveURL(l,this.path)}else a=Hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Du(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ku){try{a[Ge.KHR_BINARY_GLTF]=new Lv(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Xv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new mv;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new Dv(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new Uv;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new Nv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function fv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pv{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],At);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Nu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Q_(h),l.distance=u;break;case"spot":l=new Z_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class mv{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],At),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(i)}}class gv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(o,o)}return Promise.all(r)}}class xv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Mv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],At)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ht)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(o[0],o[1],o[2],At),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ev{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(o[0],o[1],o[2],At),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ht)),Promise.all(r)}}class Tv{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Av{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class wv{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Rv{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Cv{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Iv{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Pv{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==en.TRIANGLES&&l.mode!==en.TRIANGLE_STRIP&&l.mode!==en.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Pe,m=new I,p=new It,y=new I(1,1,1),x=new na(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(m,p,y));for(const M in c)if(M==="_COLOR_0"){const w=c[M];x.instanceColor=new cc(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);lt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ku="glTF",Ns=12,Ph={JSON:1313821514,BIN:5130562};class Lv{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ku)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ns,r=new DataView(e,Ns);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ph.JSON){const l=new Uint8Array(e,Ns+a,o);this.content=n.decode(l)}else if(c===Ph.BIN){const l=Ns+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=fc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=fc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ns[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,At,d)})})}}class Uv{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Nv{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Hu extends er{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let M=0;M!==o;M++){const w=a[_+M+o],b=a[_+M+c]*h,E=a[g+M+o],C=a[g+M]*h;r[M]=y*w+x*b+m*E+p*C}return r}}const Fv=new It;class Ov extends Hu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Fv.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lh={9728:Nt,9729:kt,9984:Kh,9985:Fr,9986:Os,9987:kn},Dh={33071:ei,33648:Kr,10497:Mi},po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bv={CUBICSPLINE:void 0,LINEAR:qs,STEP:Xs},mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function fi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Hv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gv(s){let e;const t=s.extensions&&s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+go(t.attributes):e=s.indices+":"+go(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+go(s.targets[n]);return e}function go(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function pc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wv=new Pe;class Xv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Uu(this.options.manager):this.textureLoader=new tx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Du(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return fi(r,o,i),Bn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Hs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=po[i.type],o=ns[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new xt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=po[i.type],l=ns[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new l(o,p*f,i.count*f/h),x=new Eu(_,f/h),t.cache.add(y,x)),m=new js(x,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new xt(_,c,g);if(i.sparse!==void 0){const p=po.SCALAR,y=ns[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new y(a[1],x,i.sparse.count*p),b=new l(a[2],M,i.sparse.count*c);o!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=w.length;E<C;E++){const P=w[E];if(m.setX(P,b[E*c]),c>=2&&m.setY(P,b[E*c+1]),c>=3&&m.setZ(P,b[E*c+2]),c>=4&&m.setW(P,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Lh[d.magFilter]||kt,h.minFilter=Lh[d.minFilter]||kn,h.wrapS=Dh[d.wrapS]||Mi,h.wrapT=Dh[d.wrapT]||Mi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new vt(_);m.needsUpdate=!0,d(m)}),t.load(Hs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Bn(u,a),u.userData.mimeType=a.mimeType||Vv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Cu,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ru,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],At),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ht)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Kt);const h=r.alphaMode||mo.OPAQUE;if(h===mo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===mo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==_t&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==_t&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==_t){const u=r.emissiveFactor;o.emissive=new re().setRGB(u[0],u[1],u[2],At)}return r.emissiveTexture!==void 0&&a!==_t&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ht)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Bn(u,r),t.associations.set(u,{materials:e}),r.extensions&&fi(i,u,r),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Uh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Gv(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Uh(new ft,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?zv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=l[f];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new L_(_,y):new Ke(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?p.geometry=Rh(p.geometry,au):m.mode===en.TRIANGLE_FAN&&(p.geometry=Rh(p.geometry,rc));else if(m.mode===en.LINES)p=new N_(_,y);else if(m.mode===en.LINE_STRIP)p=new Dc(_,y);else if(m.mode===en.LINE_LOOP)p=new F_(_,y);else if(m.mode===en.POINTS)p=new O_(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bn(p,r),m.extensions&&fi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&fi(i,u[0],r),u[0];const d=new Ht;r.extensions&&fi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(pa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Lc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){const M=d[y],w=f[y],b=g[y],E=_[y],C=m[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const P=n._createAnimationTracks(M,w,b,E,C);if(P)for(let v=0;v<P.length;v++)p.push(P[v])}return new ra(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Au:l.length>1?h=new Ht:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Bn(h,r),r.extensions&&fi(n,h,r),r.matrix!==void 0){const u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ht;n.name&&(r.name=i.createUniqueName(n.name)),Bn(r,n),n.extensions&&fi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof rn||d instanceof vt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Jn[r.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Jn[r.path]){case Jn.weights:l=us;break;case Jn.rotation:l=ds;break;case Jn.position:case Jn.scale:l=fs;break;default:switch(n.itemSize){case 1:l=us;break;case 2:case 3:default:l=fs;break}break}const h=i.interpolation!==void 0?Bv[i.interpolation]:qs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Jn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ds?Ov:Hu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qv(s,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const h=pc(ns[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=pc(ns[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new An;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Uh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=fc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==At&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Bn(s,e),qv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?kv(s,e.targets,t):s})}function Yv(s){const e=new Map,t=new Map,n=s.clone();return Gu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Gu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Gu(s.children[n],e.children[n],t)}const Vu=20,jv=new Set(["Hips","UpLeg.L","Leg.L","Foot.L","UpLeg.R","Leg.R","Foot.R"].map(s=>Je.sanitizeNodeName(s))),Nh=.1,Kv=.04,$v=9,Zv=22,Nr=1.1,Jv=.1,Qv=.1,eM=.35,tM={dealer:1.6,tank:1.3,sniper:1.6},gn={k:140,c:16,gain:.006,max:25*Math.PI/180},Fh={dealer:{white:{maxSat:.16,minVal:.55},y:[.42,.97],minSat:.75},tank:{hue:[280,330],sat:.35,feather:10,minSat:.75},sniper:{hue:[280,330],sat:.35,feather:10,minSat:.75}},nM={blue:213,red:359},Wu={};async function iM(s){const e=new dv;await Promise.all(s.map(async t=>{const[n,i]=await Promise.all([e.loadAsync(`./art/live/${t}.glb`),fetch(`./art/live/${t}.json`).then(c=>c.json())]),r=new Tn().setFromObject(n.scene),a=r.max.y-r.min.y,o=c=>Object.fromEntries(n.animations.map(l=>[l.name,new ra(l.name,l.duration,l.tracks.filter(h=>c(jv.has(h.name.split(".").slice(0,-1).join(".")))))]));Wu[t]={scene:n.scene,meta:i,h:a,y0:r.min.y,lower:o(c=>c),upper:o(c=>!c),tip:sM(n.scene,i.muzzle)}})),av(Ms-Vu)}function sM(s,e){if(!e)return null;s.updateMatrixWorld(!0);let t=null,n=-1;if(s.traverse(a=>{if(!t&&a.isSkinnedMesh){const o=a.skeleton.bones.findIndex(c=>c.name==="Gun");o>=0&&(t=a,n=o)}}),!t)return null;const i=s.getObjectByName("rig")||s,r=a=>t.worldToLocal(i.localToWorld(new I(...a)));return{name:t.name,gi:n,tip:r(e.tip),back:r(e.back)}}const rM=`
vec3 rgb2hsv(vec3 c){ vec4 K=vec4(0.,-1./3.,2./3.,-1.); vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g)); vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r)); float d=q.x-min(q.w,q.y); float e=1e-10; return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x); }
vec3 hsv2rgb(vec3 c){ vec4 K=vec4(1.,2./3.,1./3.,3.); vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www); return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y); }`;function Oh(s,e,t,n){const i=new On({map:s.map||null,color:s.color?s.color.clone():16777215}),r={uHue:{value:nM[t]/360},uY:{value:new ye(...n)}};return i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform vec2 uY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = (position.y - uY.x) / (uY.y - uY.x);`);const o=e.white?`float w = clamp((${e.white.maxSat.toFixed(3)} - hv.y) / 0.06, 0., 1.) * clamp((hv.z - ${e.white.minVal.toFixed(3)}) / 0.1, 0., 1.) * clamp(min(vBodyY - ${e.y[0].toFixed(3)}, ${e.y[1].toFixed(3)} - vBodyY) / 0.03 + 0.5, 0., 1.);`:`float h = hv.x * 360.; float lo = ${e.hue[0].toFixed(1)}, hi = ${e.hue[1].toFixed(1)};
         float dist = min(abs(mod(h - lo + 180., 360.) - 180.), abs(mod(h - hi + 180., 360.) - 180.));
         float w = (h >= lo && h <= hi ? 1. : clamp(1. - dist / ${e.feather.toFixed(1)}, 0., 1.)) * clamp((hv.y - ${e.sat.toFixed(3)}) / 0.12, 0., 1.) * clamp((hv.z - 0.15) / 0.1, 0., 1.);`;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;
uniform float uHue;
`+rM).replace("#include <map_fragment>",`#include <map_fragment>
      { vec3 s = pow(max(diffuseColor.rgb, 0.), vec3(1. / 2.2)); vec3 hv = rgb2hsv(s); ${o}
        vec3 nc = pow(hsv2rgb(vec3(uHue, max(hv.y, ${e.minSat.toFixed(2)}), hv.z)), vec3(2.2)); diffuseColor.rgb = mix(diffuseColor.rgb, nc, w); }`)},i.customProgramCacheKey=()=>`body-${JSON.stringify(e)}`,i.userData.u=r,i}function aM(s,e){const t=Wu[e.c.rig],n=e.c.height*nr,i=n/t.h,r=new Ht;s.add(r);const a=new Ht;a.rotation.x=-Vu*Math.PI/180,r.add(a);const o=new Ht;a.add(o);const c=Yv(t.scene);c.scale.setScalar(i),c.position.y=-t.y0*i,o.add(c);const l=[],h=[t.y0,t.y0+t.h];c.traverse(X=>{if(X.isMesh){X.material=Array.isArray(X.material)?X.material.map(ie=>Oh(ie,Fh[e.c.rig],e.team,h)):Oh(X.material,Fh[e.c.rig],e.team,h);for(const ie of[].concat(X.material))l.push(ie);X.castShadow=!1,X.receiveShadow=!1,X.frustumCulled=!1}});const u={};c.traverse(X=>{X.isBone&&(u[X.name]=X)});let d=null;t.tip&&c.traverse(X=>{!d&&X.isSkinnedMesh&&X.name===t.tip.name&&(d=X)});const f=new I,g=new Pe,_={p:new I,ax:new I,q:new It,gp:new I,gq:new It,gs:new I,m:new Pe},m=X=>{const ie=_;y.updateWorldMatrix(!0,!1),w.updateWorldMatrix(!0,!1),ie.p.setFromMatrixPosition(y.matrixWorld),ie.ax.setFromMatrixColumn(y.matrixWorld,1).normalize(),ie.q.setFromAxisAngle(ie.ax,X),w.matrixWorld.decompose(ie.gp,ie.gq,ie.gs),ie.gp.sub(ie.p).applyQuaternion(ie.q).add(ie.p),ie.gq.premultiply(ie.q),ie.m.compose(ie.gp,ie.gq,ie.gs).premultiply(g.copy(w.parent.matrixWorld).invert()).decompose(w.position,w.quaternion,ie.gs)},p=(X,ie)=>{const Ee=d,V=t.tip.gi;return g.multiplyMatrices(Ee.skeleton.bones[V].matrixWorld,Ee.skeleton.boneInverses[V]),Ee.localToWorld(ie.copy(X).applyMatrix4(Ee.bindMatrix).applyMatrix4(g).applyMatrix4(Ee.bindMatrixInverse))},y=u.Spine,x=u.Chest,M=u.Head,w=u.Gun,b=[y,x,M,w].filter(Boolean),E=b.map(X=>[X.position.clone(),X.quaternion.clone(),X.scale.clone()]),C=()=>b.forEach((X,ie)=>{X.position.copy(E[ie][0]),X.quaternion.copy(E[ie][1]),X.scale.copy(E[ie][2])}),P=()=>b.forEach((X,ie)=>{E[ie][0].copy(X.position),E[ie][1].copy(X.quaternion),E[ie][2].copy(X.scale)}),v=new Ke(new wi(.28*n,32),new _t({color:0,transparent:!0,opacity:.25,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.scale.set(1,.8,1),v.position.y=.025,v.renderOrder=2,r.add(v);const S=e.team==="blue"?Pt.blue:Pt.red,D=new Ke(new $s(.5,.7,40),new _t({color:S,transparent:!0,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=.03,D.renderOrder=3,r.add(D);const F=new px(c),k=t.meta,j={lower:{},upper:{}};for(const X of["lower","upper"])for(const[ie,Ee]of Object.entries(t[X])){const V=F.clipAction(Ee.clone());k.clips[ie].loop||(V.setLoop(ru,1),V.clampWhenFinished=!0),j[X][ie]=V}const B={lower:null,upper:null},Z=(X,ie,Ee=0,V=Nh)=>{const K=j[X][ie];K&&(B[X]===ie&&K.isRunning()||(K.reset(),K.time=Ee,K.setEffectiveWeight(1),K.fadeIn(V).play(),B[X]&&B[X]!==ie&&j[X][B[X]].fadeOut(V),B[X]=ie))};Z("lower","idle"),Z("upper","idle");const W=k.speed*k.clips.run.dur*i,ee={x:0,vx:0,z:0,vz:0,px:e.x,pz:e.z,pvx:0,pvz:0};return{u:e,root:r,ring:D,mats:l,x:e.x,z:e.z,face:e.face,legFace:e.face,flash:0,lastMoved:e.moved,clock:0,phase:0,shotT:-99,pushT:-99,dead:!1,bodyScale:1,state:"idle",run:0,pop:1,onShot(){const X=this.u;this.face=X.face;const ie=Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace));Math.abs(ie)>Nr&&(this.legFace=this.face-Math.sign(ie)*Nr),this.shotT=this.clock;const Ee=k.clips.shoot;Z("upper","shoot",Ee.hit*Ee.dur,Kv),B.upper==="shoot"&&(j.upper.shoot.time=Ee.hit*Ee.dur)},update(X,ie,Ee,V){const K=this.u;if(this.clock+=X,!K.alive){this.dead=!0,r.visible=!1;return}this.dead&&(this.dead=!1,this.x=K.x,this.z=K.z,this.lastMoved=K.moved,Z("lower","idle"),Z("upper","idle")),r.visible=Ee,this.x+=(K.x-this.x)*Math.min(1,X*20),this.z+=(K.z-this.z)*Math.min(1,X*20),r.position.set(this.x,0,this.z);const fe=(q,Q,$)=>{const xe=Math.atan2(Math.sin(Q-q),Math.cos(Q-q));return q+Math.sign(xe)*Math.min(Math.abs(xe),$*X)};this.face=fe(this.face,K.face,Zv);const ce=K.moved-this.lastMoved,Ae=ce/Math.max(X,1e-4);this.lastMoved=K.moved;const be=Ae>.3;this.run=be?Math.min(1,this.run+X*8):Math.max(0,this.run-X*8);const ze=k.clips.shoot;K.queue.length&&B.upper==="shoot"&&(this.shotT=this.clock,j.upper.shoot.time=ze.hit*ze.dur);const qe=this.clock-this.shotT<ze.dur*.9;this.legFace=fe(this.legFace,be&&!qe?K.face:this.face,$v),o.rotation.y=Math.atan2(Math.cos(this.legFace),Math.sin(this.legFace));let Fe="idle";this.clock-this.pushT<Jv+Nh?(Z("lower","hit"),Z("upper","hit"),Fe="push"):K.dash&&j.lower.dash?(Z("lower","dash"),Z("upper","dash"),Fe="dash"):(this.run>.5?(Z("lower","run"),this.phase=(this.phase+ce/W)%1,Fe="walk"):Z("lower","idle"),qe?(B.upper!=="shoot"&&Z("upper","shoot",k.clips.shoot.hit*k.clips.shoot.dur),Fe=Fe==="walk"?"walk":"shoot"):Z("upper",this.run>.5?"run":"idle")),this.state=Fe;for(const q of["lower","upper"]){const Q=j[q].run;Q.timeScale=0,Q.time=this.phase*k.clips.run.dur}if(C(),F.update(X),P(),y){const q=Math.max(-Nr,Math.min(Nr,Math.atan2(Math.sin(this.face-this.legFace),Math.cos(this.face-this.legFace))));y.rotateY(-q),w&&Math.abs(q)>1e-4&&m(-q)}const wt=(this.x-ee.px)/Math.max(X,1e-4),ke=(this.z-ee.pz)/Math.max(X,1e-4);ee.px=this.x,ee.pz=this.z;const Ve=(wt-ee.pvx)/Math.max(X,1e-4),Te=(ke-ee.pvz)/Math.max(X,1e-4);ee.pvx=wt,ee.pvz=ke;const rt=Math.cos(this.legFace),we=Math.sin(this.legFace),R=Ve*rt+Te*we,T=-Ve*we+Te*rt,z=Math.min(X,1/30);if(ee.vx+=(-140*ee.x-gn.c*ee.vx-gn.gain*gn.k*R)*z,ee.x=Math.max(-gn.max,Math.min(gn.max,ee.x+ee.vx*z)),ee.vz+=(-140*ee.z-gn.c*ee.vz-gn.gain*gn.k*T)*z,ee.z=Math.max(-gn.max,Math.min(gn.max,ee.z+ee.vz*z)),x&&(x.rotateX(-ee.x*.6),x.rotateZ(ee.z*.6)),M&&(M.rotateX(-ee.x*.4),M.rotateZ(ee.z*.4)),w){const q=qe?j.upper.shoot.getEffectiveWeight():0;w.scale.multiplyScalar(1+(tM[K.c.rig]-1)*q)}this.flash=Math.max(0,this.flash-X/Qv),a.scale.setScalar(this.bodyScale);for(const q of l){q.emissive.setScalar(this.flash*eM);const Q=V<.999;q.transparent!==Q&&(q.transparent=Q,q.needsUpdate=!0),q.opacity=V}D.material.opacity=K.isPlayer?.95:.7,this.bodyScale=1},muzzle(X=new I,ie=null){return!d||!r.visible?null:(r.updateMatrixWorld(!0),p(t.tip.tip,X),ie&&(f.subVectors(X,p(t.tip.back,f)).normalize(),ie.x=f.x,ie.y=f.y,ie.z=f.z),X)},onHit(){},onPush(){this.pushT=this.clock},dispose(){s.remove(r),F.stopAllAction();for(const X of l)X.dispose()}}}const Bt=(s,e=s)=>{const t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]},Ut=s=>{const e=new gs(s);return e.colorSpace=ht,e},ni=(s,e,t,n,i,r)=>{const a=s.createRadialGradient(e,t,n,e,t,i);for(const[o,c]of r)a.addColorStop(o,c);return a};function Xu(s,e=128){const[t,n]=Bt(e),i=bt(s);for(let a=0;a<7;a++){const o=i()*6.28,c=i()*.2*e,l=e/2+Math.cos(o)*c,h=e/2+Math.sin(o)*c*.8,u=(.2+i()*.1)*e;n.fillStyle=ni(n,l,h,u*.35,u,[[0,"rgba(255,255,255,1)"],[.55,"rgba(236,246,255,1)"],[.8,"rgba(186,212,238,0.98)"],[1,"rgba(186,212,238,0)"]]),n.beginPath(),n.arc(l,h,u,0,7),n.fill()}n.globalCompositeOperation="source-atop";const r=n.createLinearGradient(e*.25,e*.15,e*.75,e*.9);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(180,200,225,0.25)"),r.addColorStop(1,"rgba(90,120,170,0.8)"),n.fillStyle=r,n.fillRect(0,0,e,e),[t,n]}function oM(){const[s,e]=Xu(11,256),t=256;e.globalCompositeOperation="source-atop";const n=(i,r,a)=>{e.fillStyle="rgba(232,247,255,0.82)",e.beginPath(),e.ellipse(i,r,a,a*.95,0,0,7),e.fill(),e.fillRect(i-a*.5,r+a*.55,a,a*.65),e.fillStyle="rgba(30,60,95,0.92)";for(const o of[-.38,.38])e.beginPath(),e.ellipse(i+o*a,r,a*.24,a*.3,0,0,7),e.fill();e.beginPath(),e.moveTo(i,r+a*.25),e.lineTo(i-a*.1,r+a*.5),e.lineTo(i+a*.1,r+a*.5),e.fill();for(let o=0;o<4;o++)e.fillRect(i-a*.4+o*a*.22,r+a*.8,a*.06,a*.32)};return n(t*.5,t*.38,t*.12),n(t*.28,t*.52,t*.085),n(t*.72,t*.55,t*.085),Ut(s)}function cM(s=8,e=256){const[t,n]=Bt(e),i=e/2;n.fillStyle=ni(n,i,i,4,i,[[0,"rgba(255,255,255,0.9)"],[.5,"rgba(255,255,255,0.18)"],[1,"rgba(255,255,255,0)"]]),n.fillRect(0,0,e,e),n.fillStyle="#fff",n.beginPath();for(let r=0;r<s*2;r++){const a=r*Math.PI/s-Math.PI/2,o=r%2?i*.22:i*.95;n.lineTo(i+Math.cos(a)*o,i+Math.sin(a)*o)}return n.closePath(),n.fill(),Ut(t)}function lM(s=128){const[e,t]=Bt(s),n=s/2;return t.fillStyle=ni(t,n,n,2,n*.5,[[0,"rgba(255,255,255,0.8)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,s,s),t.fillStyle="#fff",t.beginPath(),t.moveTo(n,2),t.quadraticCurveTo(n+5,n-5,s-2,n),t.quadraticCurveTo(n+5,n+5,n,s-2),t.quadraticCurveTo(n-5,n+5,2,n),t.quadraticCurveTo(n-5,n-5,n,2),t.fill(),Ut(e)}function hM(s=64){const[e,t]=Bt(s),n=s/2;t.fillStyle="#fff",t.beginPath();for(let i=0;i<10;i++){const r=i*Math.PI/5-Math.PI/2,a=i%2?n*.42:n*.95;t.lineTo(n+Math.cos(r)*a,n+Math.sin(r)*a)}return t.closePath(),t.fill(),Ut(e)}const Bh=(s,e)=>{const[t,n]=Bt(64),i=32;return n.fillStyle=ni(n,i,i,0,i,[[0,"#fff"],[.36,"#fff"],[.52,s],[.82,e],[.92,e],[1,"rgba(0,0,0,0)"]]),n.fillRect(0,0,64,64),Ut(t)},zh=s=>{const[e,t]=Bt(128,32);t.beginPath(),t.moveTo(0,16),t.quadraticCurveTo(70,5,128,2),t.lineTo(128,30),t.quadraticCurveTo(70,27,0,16),t.closePath();const n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.45,s+"99"),n.addColorStop(1,s),t.fillStyle=n,t.fill(),t.beginPath(),t.moveTo(30,16),t.quadraticCurveTo(90,11,128,9),t.lineTo(128,23),t.quadraticCurveTo(90,21,30,16),t.closePath();const i=t.createLinearGradient(30,0,128,0);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(255,255,255,0.95)"),t.fillStyle=i,t.fill(),Ut(e)};function uM(){const s={};s.puff=[1,2,3,4].map(e=>Ut(Xu(e*17)[0])),s.skull=oM(),s.burst=cM(8),s.twinkle=lM(),s.smallStar=hM();{const[e,t]=Bt(64);t.fillStyle=ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.6,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.dot=Ut(e)}{const[e,t]=Bt(64);t.fillStyle=ni(t,32,32,0,32,[[0,"rgba(255,255,255,1)"],[.82,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,64,64),s.disc=Ut(e)}{const[e,t]=Bt(64,32),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"#9a6a1a"),n.addColorStop(.5,"#fff0a0"),n.addColorStop(1,"#c8962a"),t.fillStyle=n,t.fillRect(6,8,52,16),t.fillStyle="#7a5410",t.fillRect(52,8,6,16),s.shell=Ut(e)}{const[e,t]=Bt(64),n=bt(5);t.fillStyle="#fff",t.beginPath();for(let r=0;r<7;r++){const a=r/7*6.28,o=20+n()*10;t.lineTo(32+Math.cos(a)*o,32+Math.sin(a)*o)}t.closePath(),t.fill(),t.globalCompositeOperation="source-atop";const i=t.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(90,80,70,0.7)"),t.fillStyle=i,t.fillRect(0,0,64,64),s.rock=Ut(e)}{const[e,t]=Bt(128),n=bt(9);t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round";for(let i=0;i<5;i++){let r=i/5*6.28+n()*.5,a=64,o=64;t.lineWidth=6,t.beginPath(),t.moveTo(a,o);for(let c=0;c<4;c++)r+=(n()-.5)*1.1,a+=Math.cos(r)*15,o+=Math.sin(r)*15,t.lineTo(a,o),t.lineWidth=6-c;t.stroke()}s.crack=Ut(e)}{const[e,t]=Bt(128);t.fillStyle=ni(t,64,64,0,64,[[0,"rgba(255,255,255,0)"],[.55,"rgba(255,255,255,0)"],[.74,"rgba(255,255,255,1)"],[.9,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),s.ring=Ut(e)}{const[e,t]=Bt(128);t.fillStyle=ni(t,64,64,0,64,[[0,"rgba(255,255,255,0.06)"],[.78,"rgba(255,255,255,0.16)"],[.92,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]]),t.fillRect(0,0,128,128),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.arc(64,64,44,3.5,4.5),t.stroke(),s.bubble=Ut(e)}{const[e,t]=Bt(128,16),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(1,"rgba(255,255,255,1)"),t.fillStyle=n,t.fillRect(0,0,128,16),t.globalCompositeOperation="destination-in";const i=t.createLinearGradient(0,0,0,16);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,16),s.dash=Ut(e)}return s.ball={blue:Bh("#3aa0ff","#1d5fd0"),red:Bh("#ff5a68","#c8243a")},s.tail={blue:zh("#3aa0ff"),red:zh("#ff5a68")},s}const gt=(s,e)=>s+Math.random()*(e-s),Ne=(s,e)=>s+(Math.random()-.5)*2*e,dM=new $t(1,1).rotateX(-Math.PI/2),fM={tex:null,add:!1,flat:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,dz:0,drag:0,bounce:0,fric:0,floor:!1,delay:0,life:1,size:1,s0:1,s1:1,aspect:1,a0:1,fadeIn:0,fadeOut:.3,rot:0,spin:0,spin1:null,color:16777215,color2:null,ro:0,blink:0,ease:0,kind:"",follow:null,fy:0};function pM(s,{sp:e=260,ad:t=200,fl:n=70}={}){const i={sp:[],ad:[],fl:[]},r=[],a={},o={},c=(f,g,_)=>{const m=g?new _t({transparent:!0,depthWrite:!1}):new Ks({transparent:!0,depthWrite:!1,depthTest:!1,..._?{blending:yo}:{}}),p=g?new Ke(dM,m):new ta(m);p.visible=!1,p.frustumCulled=!1,p.renderOrder=g?4:8,s.add(p),i[f].push({m:p,mat:m,flat:g,list:f,gen:0,c0:new re,c1:new re,has2:!1})};for(let f=0;f<e;f++)c("sp",!1,!1);for(let f=0;f<t;f++)c("ad",!1,!0);for(let f=0;f<n;f++)c("fl",!0,!1);let l=0;function h(f){f.m.visible=!1,r.splice(r.indexOf(f),1),i[f.list].push(f),f.kind&&a[f.kind]--}function u(f){const g=f.flat?"fl":f.add?"ad":"sp",_=i[g].pop();return _?f.kind&&o[f.kind]!==void 0&&(a[f.kind]||0)>=o[f.kind]?(i[g].push(_),null):(Object.assign(_,fM,f),_.gen=++l,_.t=-_.delay,_.vis=!1,_.c0.setHex(_.color),_.has2=_.color2!=null,_.has2&&_.c1.setHex(_.color2),_.mat.map=_.tex,_.mat.color.copy(_.c0),_.mat.opacity=0,_.m.renderOrder=_.ro||(_.flat?4:8),_.flat?_.m.rotation.y=_.rot:_.mat.rotation=_.rot,_.kind&&(a[_.kind]=(a[_.kind]||0)+1),r.push(_),_):null}function d(f){const g=Math.max(1,Math.ceil(f/.0167)),_=f/g;for(let m=r.length-1;m>=0;m--){const p=r[m];if(p.t+=f,p.t<0)continue;let y=p.t/p.life;if(y>=1){h(p);continue}if(p.vis||(p.vis=!0,p.m.visible=!0),p.follow)p.x=p.follow.x,p.z=p.follow.z,p.y=p.fy;else for(let b=0;b<g;b++){if(p.vy+=p.g*_,p.dz&&p.vy>0&&(p.vy=Math.max(0,p.vy-p.dz*_)),p.drag){const E=Math.exp(-p.drag*_);p.vx*=E,p.vz*=E}p.x+=p.vx*_,p.y+=p.vy*_,p.z+=p.vz*_,p.floor&&p.y<.04&&(p.y=.04,p.vy<-.4&&p.bounce?(p.vy=-p.vy*p.bounce,p.vx*=1-p.fric,p.vz*=1-p.fric):(p.vy=0,p.vx*=1-Math.min(1,6*_),p.vz*=1-Math.min(1,6*_)))}p.ease&&(y=1-(1-y)*(1-y));const x=(p.s0+(p.s1-p.s0)*y)*p.size,M=p.t/p.life;let w=p.a0;p.fadeIn&&M<p.fadeIn&&(w*=M/p.fadeIn),p.fadeOut&&M>1-p.fadeOut&&(w*=(1-M)/p.fadeOut),p.blink&&(w*=.5+.5*Math.sin(p.t*p.blink)),p.m.position.set(p.x,p.y,p.z),p.mat.opacity=w,p.has2&&p.mat.color.lerpColors(p.c0,p.c1,M),p.spin&&(p.rot+=(p.spin1==null?p.spin:p.spin+(p.spin1-p.spin)*M)*f,p.flat?p.m.rotation.y=p.rot:p.mat.rotation=p.rot),p.flat?p.m.scale.set(x,1,x*p.aspect):p.m.scale.set(x,x*p.aspect,1)}}return{emit:u,update:d,setCap:(f,g)=>{o[f]=g},count:f=>a[f]||0,clear(){for(;r.length;)h(r[r.length-1])},get alive(){return r.length}}}const mM={dealer:{fwd:.5,up:.449},tank:{fwd:.784,up:.611},sniper:{fwd:.666,up:.416}},is={blue:{gas0:6742271,gas1:3385599,spark:5098751,line:23039,tint:10476799,ball:"blue"},red:{gas0:16744608,gas1:16721472,spark:16731494,line:16711769,tint:16756920,ball:"red"}},Wr=s=>s.c.height*nr*Wc()*.45;function qu(s,e){const t=mM[s.c.rig],n=s.c.height*nr;return{x:s.x+Math.cos(e)*t.fwd*n,y:t.up*n*Wc(),z:s.z+Math.sin(e)*t.fwd*n}}const kh=Math.sin(Ms*Math.PI/180),gM=new $t(1,1).rotateX(-Math.PI/2),_M={dealer:1.3,tank:1,sniper:1},xM={dealer:2.5,tank:2,sniper:2.5},vM=1.2,MM=s=>s*s*(3-2*s);function yM(s,e,t,n,i){const r=new Map,a=[],o=new I;e.setCap("sniperLine",8),e.setCap("sniperSmoke",8),e.setCap("sniperSpark",10);const c=()=>{const l=new ta(new Ks({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));l.renderOrder=9,l.frustumCulled=!1;const h=new ta(new Ks({transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));h.renderOrder=8,h.frustumCulled=!1,h.center.set(1,.5);const u=new Ke(gM,new _t({map:t.disc,color:0,transparent:!0,opacity:102/255,depthWrite:!1}));return u.renderOrder=3,u.frustumCulled=!1,s.add(l,h,u),{spr:l,tail:h,sh:u}};return{update(l,h){for(const u of h.bullets){let d=r.get(u);if(!d){d=a.pop()||c(),d.acc=0,d.spr.visible=d.tail.visible=d.sh.visible=!0,r.set(u,d);const y=u.owner.c.rig,x=2*u.size*(_M[y]??1);d.d=x,d.len=x*(xM[y]??2.5),d.went0=u.went,d.spr.material.map=t.ball[is[u.team].ball],d.tail.material.map=t.tail[is[u.team].ball],d.spr.scale.set(x,x,1);const M=n(u.owner,o)||qu(u.owner,u.ang);d.ox=M.x-u.x,d.oz=M.z-u.z,d.y=M.y,d.sh.scale.set(x*1.6*.66,1,x*1.6*.5),i&&(i.push({k:"bullet",id:u.owner.id,rig:y,x:M.x,y:M.y,z:M.z,t:h.t}),i.length>300&&i.shift())}const f=u.went-d.went0,g=1-MM(Math.min(1,f/vM)),_=u.x+d.ox*g,m=u.z+d.oz*g,p=Math.min(d.len,d.d+f);d.spr.position.set(_,d.y,m),d.tail.position.set(_,d.y,m),d.tail.scale.set(Math.max(.01,p-d.d/2),d.d*.9,1),d.tail.material.rotation=Math.atan2(-u.vz*kh,u.vx),d.sh.position.set(_,.045,m),u.owner.cid==="sniper"&&this.trail(d,u,_,m,l)}for(const[u,d]of r)h.bullets.includes(u)||(d.spr.visible=d.tail.visible=d.sh.visible=!1,a.push(d),r.delete(u))},trail(l,h,u,d,f){const g=Math.hypot(h.vx,h.vz)||1,_=h.vx/g,m=h.vz/g,p=is[h.team],y=l.y;l.acc+=f*10;const x=Math.atan2(-m*kh,_);for(;l.acc>=1;){l.acc-=1;const M=gt(10,15);e.emit({tex:t.dash,add:!0,kind:"sniperLine",x:u,y,z:d,vx:-_*M,vz:-m*M,life:Ne(.15,.02),size:1.1,s0:Ne(.8,.2),aspect:.09,a0:.95,fadeOut:.5,rot:x,color:p.line}),e.emit({tex:t.puff[1],kind:"sniperSmoke",x:u,y,z:d,delay:.1,life:.28,size:.6,s0:.5,s1:.7,a0:.5,fadeIn:.3,fadeOut:.5,color:15922943}),e.emit({tex:t.twinkle,add:!0,kind:"sniperSpark",x:Ne(u,.08),y:Ne(y,.08),z:Ne(d,.08),vy:.5,life:Ne(.7,.3),size:.4,s0:.7,s1:.01,a0:.9,fadeOut:.5,spin:4,color:p.spark})}},clear(){for(const[l,h]of r)h.spr.visible=h.tail.visible=h.sh.visible=!1,a.push(h);r.clear()}}}const SM=16052710,bM=15257510,EM=15790834;function TM(s,e){s.setCap("hitDust",24),s.setCap("frag",60),s.setCap("rock",30),s.setCap("shell",16);const t=()=>e.puff[Math.random()*4|0];function n(a,o,c,l){s.emit({tex:e.burst,add:!0,x:a,y:o,z:c,life:Ne(.045,.015),size:1.2,s0:1,s1:.25,a0:1,fadeOut:0,rot:Math.random()*6.28,color:16773296});const h=Math.random()*6.28,u=gt(.8,1.2);s.emit({tex:t(),kind:"hitDust",x:a,y:o,z:c,vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2.1,life:Ne(.75,.25),size:.8,s0:1.4,s1:.1,a0:.9,fadeOut:.2,rot:Math.random()*6.28,color:l})}function i(a,o,c,l,h,u=1){const d=o+(a.cid==="tank"?100*Math.PI/180:Math.PI/2),f=gt(2.8,4)*u;s.emit({tex:e.shell,kind:"shell",x:(c+a.x)/2,y:l,z:(h+a.z)/2,vx:Math.cos(d)*f,vz:Math.sin(d)*f,vy:gt(2.25,4.5)*u,g:-30,bounce:.65,fric:.35,floor:!0,life:Ne(1.5,.5),size:.2,s0:.6,s1:.7,aspect:.5,a0:1,fadeOut:.25,rot:Math.random()*6.28,spin:gt(-14,14),color:16777215})}function r(a,o,c,l,h,u){s.emit({tex:t(),x:a,y:o,z:c,vy:.4,life:l,size:h,s0:.55,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:16777215,color2:is[u].tint})}return{hit(a){n(Ne(a.x,.12),Wr(a)+gt(-.1,.2),Ne(a.z,.1),SM)},wall(a){n(a.x,.5,a.z,bM);for(let o=0;o<3;o++){const c=Math.random()*6.28,l=gt(.8,1.6);s.emit({tex:e.rock,kind:"rock",x:a.x,y:.5,z:a.z,vx:Math.cos(c)*l,vz:Math.sin(c)*l,vy:gt(2.25,4.5),g:-30,bounce:.3,fric:.4,floor:!0,life:Ne(.55,.45)+.1,size:.24,s0:.75,s1:.4,a0:1,fadeOut:.3,spin:gt(-12,12),color:Pt.wallSide})}},fizzle(a){const o=a.owner.cid==="tank",c=.5,l=a.isSuper?1.2:1;for(let u=0;u<(o?2:1);u++){const d=o?.5:.3;s.emit({tex:t(),x:Ne(a.x,d),y:c,z:Ne(a.z,d),vy:.3,life:.48,size:1.1*l,s0:.6,s1:1,a0:.85,fadeOut:.6,rot:Math.random()*6.28,color:EM})}const h=o?3:7;for(let u=0;u<h;u++)s.emit({tex:e.rock,kind:"frag",x:a.x,y:c,z:a.z,vx:Ne(0,3),vz:Ne(0,3),vy:gt(8,18),g:-105,bounce:.4,fric:.3,floor:!0,life:Ne(.6,.3),size:.55,s0:.4,s1:0,a0:1,fadeOut:.2,spin:7,spin1:0,color:12099696})},muzzle(a,o,c,l){if(a.cid==="sniper"){s.emit({tex:e.burst,add:!0,x:l.x,y:l.y,z:l.z,life:.1,size:c?.9:.5,s0:1,s1:2,a0:1,fadeOut:.5,rot:Math.random()*6.28,color:16773824});for(let h=0;h<7;h++){const u=o+Ne(0,.7),d=gt(4,4.8);s.emit({tex:e.twinkle,add:!0,x:l.x,y:l.y,z:l.z,vx:Math.cos(u)*d,vz:Math.sin(u)*d,vy:gt(.5,2),g:-6,life:Ne(.525,.225),size:.26,s0:.5,s1:.01,a0:1,fadeOut:.4,spin:6,color:16765040})}for(let h=0;h<5;h++)s.emit({tex:t(),x:Ne(l.x,.1),y:l.y,z:Ne(l.z,.1),vx:Math.cos(o)*.6,vz:Math.sin(o)*.6,vy:.5,life:Ne(1.35,.35),size:.9,s0:.5,s1:.1,a0:.5,fadeOut:.8,rot:Math.random()*6.28,color:15659252});i(a,o,l.x,l.y,l.z,1.4)}else r(l.x,l.y,l.z,c?.4:a.cid==="tank"?.42:.3,c?1.9:a.cid==="tank"?1.3:.9,a.team),i(a,o,l.x,l.y,l.z)}}}function AM(s,e){s.setCap("gas",90),s.setCap("twinkle",60),s.setCap("dust20",60),s.setCap("crack",4),s.setCap("drock",10),s.setCap("ddust",20),s.setCap("ready",66);const t=()=>e.puff[Math.random()*4|0],n=(i,r)=>{const a=Ne(0,i),o=Math.random()*6.28;return[Math.sin(a)*r*Math.cos(o),Math.cos(a)*r,Math.sin(a)*r*Math.sin(o)]};return{death(i){const r=is[i.team],a=i.x,o=i.z,c=Wr(i);s.emit({tex:e.skull,x:a,y:c+.45,z:o,ro:9,life:.85,size:2.5*1.425,s0:.8,s1:1.1,a0:.95,fadeOut:.45,color:12119295,color2:9427199}),s.emit({tex:e.burst,add:!0,x:a,y:c,z:o,life:.4,size:2*Ne(1,.15),s0:.6,s1:1.1,a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.tint});for(let l=0;l<30;l++){const h=Math.random()*6.28,u=Ne(2,1)*1.4;s.emit({tex:t(),kind:"gas",delay:Math.random()*.12,x:Ne(a,.25),y:c+gt(-.2,.3),z:Ne(o,.25),vx:Math.cos(h)*u,vz:Math.sin(h)*u,g:2,drag:4.4,life:Ne(.45,.15),size:.7,s0:.8,s1:3.5+Ne(0,.8),a0:.95,fadeOut:.6,rot:Math.random()*6.28,color:r.gas0,color2:r.gas1})}for(let l=0;l<20;l++){const[h,u,d]=n(.35,Ne(12,4));s.emit({tex:e.twinkle,add:!0,kind:"twinkle",x:a,y:c+.1,z:o,vx:h,vy:u,vz:d,g:-28,dz:12,bounce:.45,fric:.3,floor:!0,life:Ne(.9,.4),size:.5,s0:Ne(.7,.3),s1:0,a0:1,fadeOut:.3,spin:gt(-5,5),color:r.spark})}s.emit({tex:e.ring,flat:!0,x:a,y:.4,z:o,vy:7,dz:10,life:1.2,size:4*.35,s0:.7,s1:1.8,a0:.55,fadeOut:.6,color:16777215});for(let l=0;l<20;l++){const[h,u,d]=n(.78,2.5);s.emit({tex:e.smallStar,add:!0,kind:"dust20",delay:Math.random()**2*.35,x:a,y:c+.1,z:o,vx:h,vy:u,vz:d,g:-6,life:Ne(.8,.05),size:.3,s0:Ne(.9,.2),s1:Ne(.9,.2),a0:1,fadeOut:.3,blink:38,spin:gt(-3,3),color:16777215})}},spawn(i,r){const a=is[i.team],o=Wr(i);s.emit({tex:e.bubble,add:!0,x:i.x,y:o,z:i.z,life:2,size:2.6,s0:0,s1:1,ease:1,a0:.85,fadeOut:.4,color:a.tint,follow:i,fy:o});const c=s.emit({tex:e.dot,add:!0,x:i.x,y:o,z:i.z,life:3,size:2,s0:1,s1:1,a0:.2,fadeOut:.15,blink:9,color:16777215,follow:i,fy:o});c&&r.set(i,{gen:c.gen,p:c,t:i.lastShot})},ready(i){const r=Wr(i);for(let a=0;a<33;a++){const o=Math.random()*6.28,c=gt(.8,1.5),l=Ne(.375,.075),h=r+gt(-.5,.6);s.emit({tex:e.dot,add:!0,kind:"ready",x:i.x+Math.cos(o)*c,y:h,z:i.z+Math.sin(o)*c,vx:-Math.cos(o)*c/l,vz:-Math.sin(o)*c/l,vy:(r-h)/l,life:l,size:.3,s0:.7,s1:.01,a0:1,fadeOut:.2,color:16767050})}},dash(i,r,a){for(a.crack=(a.crack||0)+r*14.3,a.rock=(a.rock||0)+r*18,a.dust=(a.dust||0)+r*45;a.crack>=1;)a.crack--,s.emit({tex:e.crack,flat:!0,kind:"crack",x:i.x,y:.05,z:i.z,life:.7,size:1.3,s0:1,s1:1.05,a0:.8,fadeOut:.5,rot:Math.random()*6.28,color:3811866});for(;a.rock>=1;){a.rock--;const o=Math.random()*6.28,c=gt(.5,2);s.emit({tex:e.rock,kind:"drock",x:Ne(i.x,.2),y:.2,z:Ne(i.z,.2),vx:Math.cos(o)*c,vz:Math.sin(o)*c,vy:gt(9,22.5),g:-105,bounce:.3,fric:.4,floor:!0,life:Ne(.55,.25),size:.26,s0:1,s1:.7,a0:1,fadeOut:.2,spin:gt(-12,12),color:13152392})}for(;a.dust>=1;)a.dust--,s.emit({tex:t(),kind:"ddust",x:Ne(i.x,.3),y:.25,z:Ne(i.z,.3),vy:.8,life:Ne(.35,.15),size:.7,s0:1.5,s1:.01,a0:.9,fadeOut:.3,rot:Math.random()*6.28,color:15128240})}}}const wM={dealer:.3,tank:.3,sniper:.4};function RM(s,{muzzleOf:e=()=>null}={}){const t=uM(),n=pM(s),i=[],r=new I,a=[],o=yM(s,n,t,e,i),c=TM(n,t),l=AM(n,t);n.setCap("walk",40);const h=new Map,u=new Map,d=new Map;let f=null;const g=new Ma(.22,0),_=Gs(Pt.gem,{emissive:6955184,ei:.6});function m(){a.length=0,n.clear(),o.clear(),u.clear(),d.clear();for(const x of h.values())s.remove(x);h.clear()}const p=x=>{let M=u.get(x);return M||(M={step:0,moved:x.moved,ready:x.superCharge>=1},u.set(x,M)),M};return{onEvent(x){switch(x.type){case"shot":a.push([x.u,x.ang,!1]);break;case"super":x.u.cid!=="tank"&&a.push([x.u,x.ang,!0]);break;case"hit":c.hit(x.u);break;case"wall":c.wall(x.b);break;case"fizzle":c.fizzle(x.b);break;case"death":l.death(x.u);break;case"spawn":l.spawn(x.u,d);break;case"gem":n.emit({tex:t.dot,add:!0,x:x.u.x,y:.9,z:x.u.z,life:.25,size:1,s0:.5,s1:1.8,a0:.9,fadeOut:1,color:Pt.gemGlow});break}},update(x,M,w){w!==f&&(m(),f=w);for(const[b,E,C]of a.splice(0)){const P=e(b,r)||qu(b,E);c.muzzle(b,E,C,P),i.push({k:"smoke",id:b.id,rig:b.c.rig,x:P.x,y:P.y,z:P.z,t:w.t}),i.length>300&&i.shift()}o.update(x,w);for(const b of w.gems){let E=h.get(b);if(!E){E=new Ht;const C=new Ke(g,_);C.castShadow=!0,E.add(C);const P=new ta(new Ks({map:t.dot,color:Pt.gemGlow,transparent:!0,depthWrite:!1,opacity:.55}));P.scale.setScalar(1.1),E.add(P),s.add(E),h.set(b,E)}E.position.set(b.x,.45+Math.sin(M*4+b.x)*.08,b.z),E.children[0].rotation.y=M*2.5}for(const[b,E]of h)w.gems.includes(b)||(s.remove(E),h.delete(b));for(const b of w.units){const E=p(b);if(!b.alive){E.moved=b.moved;continue}w.t>0&&w.t<.3&&!E.born&&(E.born=!0,l.spawn(b,d));const C=b.moved-E.moved;E.moved=b.moved,b.dash?l.dash(b,x,E):C/Math.max(x,.001)>b.c.speed*.3&&bi(w,"blue",b)?(E.step-=x,E.step<=0&&(E.step+=wM[b.cid]??.3,n.emit({tex:t.puff[Math.random()*4|0],kind:"walk",x:b.x,y:.12,z:b.z,g:1.5,life:1.8+(Math.random()-.5)*1.2,size:.7,s0:.5,s1:1,a0:.26,fadeOut:.8,rot:Math.random()*6.28,color:15328464}))):E.step=0,b.superCharge>=1&&!E.ready&&b.team==="blue"&&l.ready(b),E.ready=b.superCharge>=1}for(const[b,E]of d){if(E.p.gen!==E.gen){d.delete(b);continue}(!b.alive||b.lastShot>E.t)&&(E.p.life=Math.min(E.p.life,E.p.t+.15),d.delete(b))}n.update(x)},dispose(){m(),f=null},log:i}}const Hh=16,CM=62;function IM(s,e){const t={move:null,atk:null,sup:null,mx:0,mz:0,aim:null,aimKind:null,fire:null,superFire:null,keys:new Set};function n(a,o,c){const l=a.clientX-o,h=a.clientY-c,u=Math.hypot(l,h);return{dx:l,dy:h,d:u}}const i=a=>{const o=a.getBoundingClientRect();return[o.left+o.width/2,o.top+o.height/2]};s.addEventListener("pointerdown",a=>{if(!e.active())return;a.preventDefault();const[o,c]=i(e.atkBtn),[l,h]=i(e.supBtn),u=e.atkBtn.getBoundingClientRect().width*.75,d=e.supBtn.getBoundingClientRect().width*.75;Math.hypot(a.clientX-l,a.clientY-h)<d&&!t.sup?t.sup={id:a.pointerId,cx:l,cy:h,t0:performance.now(),d:0}:Math.hypot(a.clientX-o,a.clientY-c)<u&&!t.atk?t.atk={id:a.pointerId,cx:o,cy:c,t0:performance.now(),d:0}:a.clientX<innerWidth*.5&&!t.move&&(t.move={id:a.pointerId,cx:a.clientX,cy:a.clientY},e.showStick(a.clientX,a.clientY)),s.setPointerCapture?.(a.pointerId)},{passive:!1}),s.addEventListener("pointermove",a=>{for(const o of["move","atk","sup"]){const c=t[o];if(!c||c.id!==a.pointerId)continue;const{dx:l,dy:h,d:u}=n(a,c.cx,c.cy),d=Math.min(u,CM)/(u||1);if(c.d=Math.max(c.d,u),o==="move"){const f=u||1,g=Math.min(1,u/30);t.mx=l/f*g,t.mz=h/f*g,e.moveStick(l*d,h*d)}else t.aim=u>Hh?Math.atan2(h,l):null,t.aimKind=o,e.moveKnob(o,l*d,h*d)}});function r(a){t.move?.id===a.pointerId&&(t.move=null,t.mx=t.mz=0,e.hideStick());for(const o of["atk","sup"]){const c=t[o];if(!c||c.id!==a.pointerId)continue;const l=c.d>Hh?t.aim:"auto";o==="atk"?t.fire=l:t.superFire=l,t[o]=null,t.aim=null,t.aimKind=null,e.moveKnob(o,0,0)}}return s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),addEventListener("keydown",a=>{t.keys.add(a.code),a.code==="Space"&&(t.fire="auto"),a.code==="KeyE"&&(t.superFire="auto")}),addEventListener("keyup",a=>t.keys.delete(a.code)),{st:t,move(){const a=t.keys;let o=t.mx,c=t.mz;return(a.has("KeyA")||a.has("ArrowLeft"))&&(o-=1),(a.has("KeyD")||a.has("ArrowRight"))&&(o+=1),(a.has("KeyW")||a.has("ArrowUp"))&&(c-=1),(a.has("KeyS")||a.has("ArrowDown"))&&(c+=1),[o,c]},take(){const a=t.fire,o=t.superFire;return t.fire=null,t.superFire=null,[a,o]}}}const Fs=2;function PM(s,{top:e=0,topW:t=0,cx:n=0,screenW:i=0}={}){const r=[],a=new Map;for(const o of[...s].sort((c,l)=>l.y-c.y)){const c=f=>t&&Math.abs(f-n)<t/2+o.w/2?e+o.h:o.h,l=([f,g])=>g>=c(f)&&(!i||f-o.w/2>=0&&f+o.w/2<=i)&&!r.some(_=>Math.abs(_.x-f)<(_.w+o.w)/2+Fs&&g>_.y-_.h-Fs&&g-o.h<_.y+Fs),h=Math.max(o.y,c(o.x)),u=[[o.x,h]];for(const f of r){const g=(f.w+o.w)/2+Fs;u.push([o.x,f.y-f.h-Fs],[f.x-g,h],[f.x+g,h],[f.x-g,f.y],[f.x+g,f.y])}const d=u.filter(l).sort((f,g)=>Math.hypot(f[0]-o.x,f[1]-o.y)-Math.hypot(g[0]-o.x,g[1]-o.y))[0]||[o.x,h];r.push({x:d[0],y:d[1],w:o.w,h:o.h}),a.set(o.key,d)}return a}const it=(s,e=document)=>e.querySelector(s),Vs=(s,e,t="")=>{const n=document.createElement(s);return e&&(n.className=e),n.innerHTML=t,n};function LM(s){const e=Vs("div","hud");e.innerHTML=`
    <div class="top"><div class="score blue"><i class="gem"></i><b>0</b></div><div class="timer">2:00</div><div class="score red"><b>0</b><i class="gem"></i></div></div>
    <div class="league"></div>
    <div class="banner"></div>
    <div class="bars"></div><div class="nums"></div>
    <div class="stick"><div class="knob"></div></div>
    <div class="btn sup"><div class="fill"></div><div class="knob"></div></div>
    <div class="btn atk"><div class="knob"></div></div>
    <div class="respawn"></div>`,s.appendChild(e);const t=new Map,n=new Map;let i=!1;const r={hud:e,atkBtn:it(".atk",e),supBtn:it(".sup",e),active:()=>i,show(a){i=a,e.classList.toggle("on",a)},showStick(a,o){const c=it(".stick",e);c.style.left=a+"px",c.style.top=o+"px",c.classList.add("on")},moveStick(a,o){it(".stick .knob",e).style.transform=`translate(${a}px,${o}px)`},hideStick(){it(".stick",e).classList.remove("on"),r.moveStick(0,0)},moveKnob(a,o,c){it(`.${a} .knob`,e).style.transform=`translate(${o}px,${c}px)`},setLeague(a){it(".league",e).textContent=a},update(a,o,c,l){const h=a.units.reduce((x,M)=>x+(M.team==="blue"&&M.alive?M.gems:0),0),u=a.units.reduce((x,M)=>x+(M.team==="red"&&M.alive?M.gems:0),0);it(".score.blue b",e).textContent=h,it(".score.red b",e).textContent=u;const d=Math.max(0,Math.ceil(jt.time-a.t));it(".timer",e).textContent=`${Math.floor(d/60)}:${String(d%60).padStart(2,"0")}`;const f=it(".banner",e);a.countdown?(f.className=`banner on ${a.countdown.team}`,f.innerHTML=`<small>${a.countdown.team==="blue"?"우리 팀":"상대 팀"} 승리까지</small><b>${Math.ceil(a.countdown.left)}</b>`):f.className="banner";const g=r.supBtn;g.classList.toggle("ready",o.superCharge>=1),it(".fill",g).style.setProperty("--p",`${Math.round(o.superCharge*100)}%`);const _=it(".respawn",e);o.alive?_.classList.remove("on"):(_.classList.add("on"),_.innerHTML=`다시 나가기까지 <b>${Math.ceil(o.respawnT)}</b>`);const m=[];for(const x of a.units){let M=t.get(x);M||(M=Vs("div",`bar ${x.isPlayer?"me":x.team}`,`<div class="gems"><i class="gem"></i><b></b></div><div class="nm">${x.name}</div><div class="hp"><div class="v"></div><span></span></div>${x.isPlayer?'<div class="ammo"><i></i><i></i><i></i></div>':""}`),it(".bars",e).appendChild(M),t.set(x,M));const w=x.alive&&l(x);if(M.style.display=w?"":"none",!w)continue;const[b,E]=c(x.x,ov(x.c),x.z);M._x=b,M._y=E,m.push(M),it(".v",M).style.width=`${x.hp/x.maxHp*100}%`,it("span",M).textContent=Math.ceil(x.hp);const C=it(".gems",M);C.style.display=x.gems?"":"none",it(".gems b",M).textContent=x.gems,x.isPlayer&&it(".ammo",M).querySelectorAll("i").forEach((P,v)=>P.style.setProperty("--f",Math.max(0,Math.min(1,x.ammo-v))))}const p=it(".top",e).getBoundingClientRect(),y=PM(m.map(x=>({key:x,x:x._x,y:x._y,w:x.offsetWidth,h:x.offsetHeight})),{top:p.bottom+4,topW:p.width,cx:p.left+p.width/2,screenW:innerWidth});for(const x of m){const[M,w]=y.get(x),b=x._sy==null||Math.hypot(x._sx-M,x._sy-w)>80;x._sx=b?M:x._sx+(M-x._sx)*.5,x._sy=b?w:x._sy+(w-x._sy)*.5,x.style.transform=`translate(${x._sx}px,${x._sy}px) translate(-50%,-100%)`}},damage(a,o,c,l,h){const u=performance.now(),d=h&&n.get(h);if(d&&u-d.t<350&&d.d.isConnected){d.n+=c,d.t=u,d.d.textContent=String(d.n),d.d.style.left=a+"px",d.d.style.top=o+"px",d.d.style.animation="none",d.d.offsetWidth,d.d.style.animation="",clearTimeout(d.k),d.k=setTimeout(()=>d.d.remove(),800);return}const f=Vs("div",`num ${l?"mine":""}`,String(c));f.style.left=a+"px",f.style.top=o+"px",it(".nums",e).appendChild(f);const g={d:f,n:c,t:u,k:setTimeout(()=>f.remove(),800)};h&&n.set(h,g)},reset(){t.forEach(a=>a.remove()),t.clear(),n.clear()}};return r}function DM(s,{trophies:e,tierName:t,onPick:n,onStart:i}){const r={hp:6400,range:10,dps:1200},a=l=>{const h=l.attack;return(h.kind==="burst"?h.n*h.dmg:h.kind==="spread"?h.n*h.dmg*.6:h.dmg*.8)/l.reload},o=Vs("div","select");o.innerHTML=`<div class="head"><div class="tro"><i class="cup"></i><b>${e}</b></div><div class="lg">연습 리그 · AI 상대 · ${t}</div></div>
    <div class="cards">${Zs.map(l=>{const h=Sa[l];return`<button class="card" data-id="${l}"><div class="nm">${h.name}</div><div class="role">${h.role}</div>
      <div class="st"><span>체력</span><div class="g"><i style="width:${h.hp/r.hp*100}%"></i></div></div>
      <div class="st"><span>사거리</span><div class="g"><i style="width:${h.attack.range/r.range*100}%"></i></div></div>
      <div class="st"><span>공격</span><div class="g"><i style="width:${Math.min(100,a(h)/r.dps*100)}%"></i></div></div></button>`}).join("")}</div>
    <button class="go">시작</button>`,s.appendChild(o),o.querySelectorAll(".card").forEach(l=>l.addEventListener("click",()=>{c(l.dataset.id),n(l.dataset.id)})),it(".go",o).addEventListener("click",()=>i());function c(l){o.querySelectorAll(".card").forEach(h=>h.classList.toggle("on",h.dataset.id===l))}return{box:o,pick:c,show(l){o.classList.toggle("on",l)},setTrophies(l,h){it(".tro b",o).textContent=l,it(".lg",o).textContent=`연습 리그 · AI 상대 · ${h}`}}}function UM(s,{onAgain:e,onChange:t}){const n=Vs("div","result");return n.innerHTML=`<div class="big"></div><div class="tro"><i class="cup"></i><b></b></div><div class="stats"></div>
    <div class="row"><button class="change">챔피언 바꾸기</button><button class="again">다시 하기</button></div>`,s.appendChild(n),it(".again",n).addEventListener("click",e),it(".change",n).addEventListener("click",t),{show(i,r){n.classList.toggle("on",i),i&&(n.className=`result on ${r.kind}`,it(".big",n).textContent=r.kind==="win"?"승리":r.kind==="lose"?"패배":"무승부",it(".tro b",n).textContent=(r.delta>0?"+":"")+r.delta,it(".stats",n).innerHTML=`<div><span>처치</span><b>${r.kills}</b></div><div><span>모은 보석</span><b>${r.gems}</b></div><div><span>트로피</span><b>${r.total}</b></div>`)}}}function NM(s,e){const t=(d,f)=>Number(e.get(d)??f)*Math.PI/180,n=t("ang",0),i=e.has("run")?t("run",0):null,r=Number(e.get("every")??.9),a=s.units.find(d=>d.team==="blue"&&d.cid===e.get("lab"))||s.units[0],o={x:s.mine.x,z:s.mine.z},c=e.has("nofoe")?null:s.units.find(d=>d.team==="red"&&d.cid===a.cid);for(const d of s.units)d!==a&&d!==c&&(d.alive=!1,d.respawnT=1e9);if(Object.assign(a,{x:o.x,z:o.z,isPlayer:!0,face:n}),c){const d=o.x+Math.cos(n)*5,f=o.z+Math.sin(n)*5;vn(s,Math.floor(d),Math.floor(f))?(c.alive=!1,c.respawnT=1e9):Object.assign(c,{x:d,z:f,isPlayer:!0,hp:1e9,maxHp:1e9,face:n+Math.PI})}s.mineT=1e9;let l=.4,h=1,u=0;return{me:a,tick(d){a.ammo=a.c.ammo,i!=null&&(u+=d,u>1.6&&(u=0,h=-h),a.input.mx=Math.cos(i)*h,a.input.mz=Math.sin(i)*h),l-=d,l<=0&&(l+=r,a.input.fire=n),c&&(c.hp=c.maxHp,c.input.mx=c.input.mz=0)}}}const Vt=new URLSearchParams(location.search),Yu=Vt.get("lab"),Js=Vt.has("auto")||!!Yu,ju=Vt.has("sprites"),Ea={get:(s,e)=>{try{return JSON.parse(localStorage.getItem("chichibrawl."+s))??e}catch{return e}},set:(s,e)=>{try{localStorage.setItem("chichibrawl."+s,JSON.stringify(e))}catch{}}};let Mn=Vt.has("tro")?Number(Vt.get("tro")):Ea.get("trophies",0),Ei=Vt.get("champ")||Ea.get("pick","dealer");Sa[Ei]||(Ei="dealer");const FM=document.getElementById("stage"),mn=new C_({antialias:!0,preserveDrawingBuffer:!0});mn.setPixelRatio(Vt.has("dpr")?Number(Vt.get("dpr")):Math.min(devicePixelRatio||1,2));mn.outputColorSpace=ht;mn.shadowMap.enabled=!0;mn.shadowMap.type=Yh;mn.toneMapping=Gn;FM.appendChild(mn.domElement);const yn=new I_;yn.background=new re(3111484);const Ku=Math.sin(Ms*Math.PI/180),OM=Math.cos(Ms*Math.PI/180),un=new ga(-1,1,1,-1,1,220);yn.userData.cam=un;const mc=Vt.has("view")?Number(Vt.get("view")):26;let xi=mc;yn.add(new K_(16774108,8824160,2.5));const En=new Nu(16773074,2.3);En.castShadow=!0;En.shadow.mapSize.set(2048,2048);Object.assign(En.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:90});En.shadow.bias=-6e-4;En.shadow.normalBias=.04;En.shadow.radius=4;yn.add(En,En.target);function Xc(){mn.setSize(innerWidth,innerHeight);const s=innerWidth/innerHeight;un.left=-xi/2,un.right=xi/2,un.top=xi/s/2,un.bottom=-xi/s/2,un.updateProjectionMatrix()}addEventListener("resize",Xc);Xc();function Gh(s){Math.abs(s-xi)>.001&&(xi=s,Xc())}function Vh(s,e){un.position.set(s,Ku*80,e+OM*80),un.lookAt(s,0,e),un.updateMatrixWorld(),En.position.set(s+.18*30,30,e-.52*30),En.target.position.set(s,0,e)}const _o=new I;function $u(s,e,t){return _o.set(s,e,t).project(un),[(_o.x+1)/2*innerWidth,(1-_o.y)/2*innerHeight]}let He=null,la=null,Sn=[],Ti=null,Ce=null,gc=null,tn="load",xo=0,Ji=0,Xr=28,qr=10.5;const ri=LM(document.body),Yr=IM(mn.domElement,ri),ha=DM(document.body,{trophies:Mn,tierName:Gc(Mn).name,onPick:s=>{Ei=s,Ea.set("pick",s),Qu()},onStart:()=>Yc()}),qc=UM(document.body,{onAgain:()=>Yc(),onChange:()=>ed()}),Zu=new _t({color:16777215,transparent:!0,opacity:.32,depthWrite:!1,side:Kt}),_n=new Ke(new ft,Zu);_n.visible=!1;yn.add(_n);function BM(s){if(s.kind==="spread")return new wi(s.range,24,-s.arc/2,s.arc).rotateX(-Math.PI/2).rotateY(Math.PI/2);const e=s.kind==="dash"?s.dist:s.range,t=s.kind==="dash"?1:s.kind==="burst"?.55:.4;return new $t(t,e).rotateX(-Math.PI/2).translate(0,0,e/2)}function zM(){la&&yn.remove(la.root);for(const s of Sn)s.dispose();Sn=[],Ti&&Ti.dispose?.(),ri.reset()}function Ju(s,e){zM();const t=Gc(Mn),n=(r,a,o)=>r==="blue"&&a===e?"나":`${Sa[o].name} AI`,i={blue:s.blue.map((r,a)=>n("blue",a,r)),red:s.red.map((r,a)=>n("red",a,r))};He=bx({picks:s,player:e,tier:t,seed:Vt.has("seed")?Number(Vt.get("seed")):Math.random()*1e9|0,names:i}),la=$x(yn,He),Ti=Ti||RM(yn,{muzzleOf:(r,a)=>Sn.find(o=>o.u===r)?.muzzle?.(a)??null}),Sn=He.units.map(r=>(ju?uv:aM)(yn,r)),Ce=He.units.find(r=>r.isPlayer)||He.units[0],ri.setLeague(`연습 리그 · AI 상대 · ${t.name}`)}function Qu(){if(!He||tn!=="select")return;const s=He.spawns.blue;He.units.forEach((e,t)=>{const n=Sn[t];if(e.team!=="blue"){n.root.visible=!1;return}e.x=s[t].x,e.z=s[t].z-1,e.face=Math.PI/2,n.x=e.x,n.z=e.z,e.isPlayer=e.cid===Ei,n.ring.material.opacity=e.isPlayer?.95:.25,e.isPlayer&&(n.pop=0)}),ha.pick(Ei)}function ed(){tn="select",qc.show(!1),ri.show(!1),Ju({blue:[...Zs],red:[...Zs]},-1),ha.setTrophies(Mn,Gc(Mn).name),ha.show(!0),Qu()}function Yc(){ha.show(!1),qc.show(!1);const s=Zs.filter(t=>t!==Ei),e=[...Zs].sort(()=>Math.random()-.5);Ju({blue:[Ei,...s],red:e},Js?-1:0),Js&&(Ce=He.units[0]),Yu&&(gc=NM(He,Vt),Ce=gc.me),tn="play",ri.show(!0),Xr=Ce.z,qr=Ce.x}function kM(){tn="result";const s=He.winner==="draw"?"draw":He.winner==="blue"?"win":"lose";let e=_h[s];s==="lose"&&Mn<_h.safeUnder&&(e=0),Mn=Math.max(0,Mn+e),Ea.set("trophies",Mn),ri.show(!1),qc.show(!0,{kind:s,delta:e,total:Mn,kills:Ce.kills,gems:Ce.gemsTaken||0})}function Wh(s,e,t){if(s==null)return null;if(s!=="auto")return s;let n=null,i=1/0;const r=t.kind==="dash"?t.dist+1:(t.range??Fu(e))*1.1;for(const a of He.units)if(a.team!==e.team&&bi(He,e.team,a)){const o=Math.hypot(a.x-e.x,a.z-e.z);o<i&&o<r&&(i=o,n=a)}return n?Math.atan2(n.z-e.z,n.x-e.x):e.face}const vi=1/60;let vo=0,Mo=performance.now(),ua=0;function td(s){if(tn==="play"){if(!Js&&Ce.alive){const[e,t]=Yr.move();Ce.input.mx=e,Ce.input.mz=t;const[n,i]=Yr.take();Ce.input.fire=Wh(n,Ce,Ce.c.attack),Ce.input.superFire=Wh(i,Ce,Ce.c.super)}else Yr.take();gc?.tick(s),Rx(He,s);for(const e of He.events){if(Ti.onEvent(e),(e.type==="super"||e.type==="death")&&window.__brawl.moments.push({t:+ua.toFixed(2),type:e.type,who:e.u.c.name,team:e.u.team,d:Ce.alive||e.u===Ce?+Math.hypot(e.u.x-Ce.x,e.u.z-Ce.z).toFixed(1):99}),e.type==="hit"){const[t,n]=$u(e.u.x,e.u.c.height+.3,e.u.z);bi(He,Ce.team,e.u)&&ri.damage(t,n,e.dmg,e.u===Ce,e.u);const i=Sn.find(r=>r.u===e.u);i&&(i.flash=1,i.onHit?.())}if(e.type==="shot"||e.type==="super"){const t=Sn.find(i=>i.u===e.u);t&&t.onShot();const n=window.__brawl.shots;n.push({id:e.u.id,t:He.t,ang:e.ang}),n.length>400&&n.shift()}e.type==="push"&&Sn.find(t=>t.u===e.u)?.onPush?.(),(e.type==="death"||e.type==="super")&&bi(He,Ce.team,e.u)&&Math.hypot(e.u.x-Ce.x,e.u.z-Ce.z)<9&&(Ji=Math.max(Ji,e.u===Ce||e.from===Ce?.12:.05)),e.type==="gem"&&e.u===Ce&&(Ce.gemsTaken=(Ce.gemsTaken||0)+1),e.type==="end"&&(xo=1.6)}He.events.length=0,He.over&&(xo-=s,xo<=0&&!Js&&kM())}}function nd(s,e){if(!He)return;const t=Ce?Ce.team:"blue";for(const i of Sn){const r=i.u,a=tn==="select"?r.team==="blue":bi(He,t,r),o=r.team===t&&He.map[Math.floor(r.z)]?.[Math.floor(r.x)]==="B";tn==="select"&&(i.bodyScale=r.isPlayer?1.1:.92),i.update(s,e,a,o?.6:1),tn==="select"&&(i.root.visible=r.team==="blue")}if(la.update(e,He.units,t),Ti.update(s,e,He),tn==="select")Gh(10),Vh(He.W/2,He.spawns.blue[1].z-1.2);else{Gh(mc);const i=xi/(innerWidth/innerHeight)/2/Ku-.6,r=Ce.team==="blue"?-1.4:1.4,a=(Ce.alive?Ce.z:He.spawns[Ce.team][Ce.k].z)+r;Xr+=(Math.max(i,Math.min(He.H-i,a))-Xr)*Math.min(1,s*5);const o=mc/2-.4,c=Ce.alive?Ce.x:He.spawns[Ce.team][Ce.k].x;qr+=((o*2>=He.W?He.W/2:Math.max(o,Math.min(He.W-o,c)))-qr)*Math.min(1,s*5),Ji=Math.max(0,Ji-s);const l=(Math.random()-.5)*Ji*.8,h=(Math.random()-.5)*Ji*.8;Vh(qr+l,Xr+h)}const n=Yr.st;if(tn==="play"&&Ce.alive&&n.aimKind&&n.aim!=null){const i=n.aimKind==="sup"?Ce.c.super:Ce.c.attack;_n.userData.spec!==i&&(_n.geometry.dispose(),_n.geometry=BM(i),_n.userData.spec=i),_n.position.set(Ce.x,.04,Ce.z),_n.rotation.y=Math.PI/2-n.aim,_n.visible=!0,Zu.color.setHex(n.aimKind==="sup"?16765498:16777215)}else _n.visible=!1;(tn==="play"||tn==="result")&&ri.update(He,Ce,$u,i=>bi(He,t,i)),mn.render(yn,un)}const jr=[];function id(s){jr.push(s-Mo),jr.length>600&&jr.shift();const e=Math.min(.05,(s-Mo)/1e3);if(Mo=s,!sd){for(vo+=e;vo>=vi;)td(vi),vo-=vi,ua+=vi;nd(e,s/1e3)}requestAnimationFrame(id)}let sd=!1,Xh=0;window.__brawl={ready:!1,moments:[],shots:[],actors:()=>Sn,fxLog:()=>Ti?.log??[],setT(s){for(sd=!0;ua<s;)td(vi),ua+=vi;nd(Math.max(vi,s-Xh),s),Xh=s},state:()=>He,perf(){const s=jr.slice(30).sort((e,t)=>e-t);return{n:s.length,avg:s.reduce((e,t)=>e+t,0)/s.length,p95:s[Math.floor(s.length*.95)],calls:mn.info.render.calls,tris:mn.info.render.triangles}}};ju?await cv():await iM(["dealer","tank","sniper"]);document.querySelector(".loading")?.remove();Js?Yc():(Vt.get("screen"),ed());window.__brawl.ready=!0;requestAnimationFrame(id);
