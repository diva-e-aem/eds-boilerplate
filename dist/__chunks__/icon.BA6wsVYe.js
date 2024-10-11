import{u as K,f as W,e as X,a as x,i as Y,t as Z,w as M,b as G,s as J,x as tt,_ as d}from"./unsafe-html.C6MCOLWk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:W},ot=(t=nt,e,n)=>{const{kind:o,metadata:s}=n;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(n.name,t),o==="accessor"){const{name:i}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,l,t)},init(a){return a!==void 0&&this.P(i,void 0,t),a}}}if(o==="setter"){const{name:i}=n;return function(a){const l=this[i];e.call(this,a),this.requestUpdate(i,l,t)}}throw Error("Unsupported decorator location: "+o)};function st(t){return(e,n)=>typeof n=="object"?ot(t,e,n):((o,s,r)=>{const i=s.hasOwnProperty(r);return s.constructor.createProperty(r,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(s,r):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends X{};b.directiveName="unsafeSVG",b.resultType=2;const rt=x(b);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=t=>t===null||typeof t!="object"&&typeof t!="function",at=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=(t,e)=>{var o;const n=t._$AN;if(n===void 0)return!1;for(const s of n)(o=s._$AO)==null||o.call(s,e,!1),p(s,e);return!0},m=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},R=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),ut(e)}};function ct(t){this._$AN!==void 0?(m(this),this._$AM=t,R(this)):this._$AM=t}function lt(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)p(o[r],!1),m(o[r]);else o!=null&&(p(o,!1),m(o));else p(this,t)}const ut=t=>{t.type==Z.CHILD&&(t._$AP??(t._$AP=lt),t._$AQ??(t._$AQ=ct))};let ht=class extends Y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),R(this),this.isConnected=e._$AU}_$AO(e,n=!0){var o,s;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(s=this.disconnected)==null||s.call(this)),n&&(p(this,e),m(this))}setValue(e){if(at(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dt=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},ft=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>!it(t)&&typeof t.then=="function",P=1073741823;let pt=class extends ht{constructor(){super(...arguments),this._$Cwt=P,this._$Cbt=[],this._$CK=new dt(this),this._$CX=new ft}render(...e){return e.find(n=>!E(n))??M}update(e,n){const o=this._$Cbt;let s=o.length;this._$Cbt=n;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!E(l))return this._$Cwt=a,l;a<s&&l===o[a]||(this._$Cwt=P,s=0,Promise.resolve(l).then(async F=>{for(;i.get();)await i.get();const f=r.deref();if(f!==void 0){const $=f._$Cbt.indexOf(l);$>-1&&$<f._$Cwt&&(f._$Cwt=$,f.setValue(F))}}))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const mt=x(pt);var C={},N;function q(t){return function(...e){return function(n,o,s){return Object.assign(Object.assign({},s),{value:t(s.value,...e)})}}}Object.defineProperty(C,"__esModule",{value:!0});const gt=q(function(t,e=0){let n=-1;const o=function(...s){clearTimeout(n),n=window.setTimeout(()=>{t.call(this,...s)},e)};return o.cancel=function(){clearTimeout(n)},o}),vt=q(function(t,e=0){let n,o=[];const s=function(...r){o=r,n===void 0&&(n=window.setTimeout(()=>{n=void 0,t.call(this,...o)},e))};return s.cancel=function(){clearTimeout(n),n=void 0},s});C.debounce=gt,N=C.throttle=vt;var c={},Q,A;Object.defineProperty(c,"__esModule",{value:!0});const D=(t,e)=>t===null?[]:t instanceof Document||t.shadowRoot===null||t.shadowRoot===void 0?Array.from(t.querySelectorAll(e)):Array.from(t.shadowRoot.querySelectorAll(e)),O=(t,...e)=>{if(t!==void 0&&e.length!==0&&t!==null){t instanceof Element&&(t=[t]),t instanceof NodeList&&(t=Array.from(t));for(const n of t)n.classList.remove(...e)}},w=(t,...e)=>{if(t!==void 0&&e.length!==0&&t!==null){t instanceof Element&&(t=[t]),t instanceof NodeList&&(t=Array.from(t));for(const n of t)n.classList.add(...e)}},S=(t,e)=>t.classList.contains(e);function g(t){return Symbol.iterator in t}function H(t){return"length"in t?t.length>0:!t[Symbol.iterator]().next().done}const V=(t,e,n,o,s)=>{if(t==null||g(t)&&!H(t))return;if(g(t)&&!(t instanceof HTMLElement)){for(const i of t)V(i,e,n,o,s);return}let r;r=typeof e=="string"?e.trim().split(" "):e,r.forEach(i=>{const a=U(t,i,n,o);if(!o.eventBindingMap[a]){const l=n.bind(o);return o.eventBindingMap[a]=l,t.addEventListener(i.trim(),l,s)}})};function U(t,e,n,o){return`${_(t,o)}#
          ${e.trim()}#
          ${_(n,o)}#
          ${_(o,o)}`.replace(/\n/gm,"").replace(/\s/g,"")}function _(t,e){let n;if(e.eventIdMap.has(t))n=e.eventIdMap.get(t);else{const o="xxxxxxxx".replace(/x/g,$t).toLowerCase();e.eventIdMap.set(t,o),n=o}return n}function $t(){return(100*Math.random()%36|0).toString(36)}const k=(t,e,n,o,s)=>{if(t==null||g(t)&&!H(t))return;if(g(t)&&!(t instanceof HTMLElement)){for(const i of t)k(i,e,n,o,s);return}let r;r=typeof e=="string"?e.trim().split(" "):e,r.forEach(i=>{const a=U(t,i,n,o),l=o.eventBindingMap[a];l&&(delete o.eventBindingMap[a],t.removeEventListener(i,l,s))})},L=(t,e)=>{D(t,e).forEach(n=>t.removeChild(n))},j=(t,e,n)=>new Promise(o=>{n!==void 0&&setTimeout(()=>o(),n),t.addEventListener(e,()=>o())});c.addClass=w,c.find=(t,e)=>t===null?null:t instanceof Document||t.shadowRoot===null||t.shadowRoot===void 0?t.querySelector(e):t.shadowRoot.querySelector(e),c.findAll=D,c.forEachNode=(t,e,n=window)=>{for(let o=0;o<t.length;o++)e.call(n,t[o],o,t)},A=c.getCurrentMQ=t=>{let e="";return t.forEach(n=>{!e.length&&window.matchMedia(n.query).matches&&(e=n.name)}),e},c.getInnerText=t=>t.innerText||t.textContent||"",c.getParent=(t,e)=>t.closest(e),c.getUniqueID=()=>Math.random().toString(36).substr(2,9),c.hasChild=(t,e)=>t.shadowRoot!==null&&t.shadowRoot!==void 0?t.shadowRoot.querySelector(e)!==null:t.querySelector(e)!==null,c.hasClass=S,c.inViewport=(t,e)=>{const n=t.getBoundingClientRect();let o={top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0};return e!==void 0&&(o=e.getBoundingClientRect()),n.top>=o.top&&n.right<=o.right&&n.bottom<=o.bottom&&n.left>=o.left},c.isNodeList=t=>!(t instanceof HTMLElement||t instanceof Window),Q=c.onEvent=V,c.removeChildren=L,c.removeChilds=L,c.removeClass=O,c.removeEvent=k,c.toggleClass=(t,e,n)=>{if(t!=null){t instanceof Element&&(t=[t]),t instanceof NodeList&&(t=Array.from(t));for(const o of t)n===!0?w(o,e):S(o,e)||n===!1?O(o,e):w(o,e)}},c.waitFor=t=>new Promise(e=>{setTimeout(()=>e(),t)}),c.waitForAnimationEnd=function(t,e){return new Promise((n,o)=>{t.addEventListener("animationend",function s(r){r.target===t&&(e&&r.animationName!==e||(t.removeEventListener("animationend",s),n(r)))})})},c.waitForEvent=j,c.waitForInitialization=t=>{var e;return((e=t.state)===null||e===void 0?void 0:e.initialized)===!0?Promise.resolve():j(t,"kl-component-initialized",3e3)},c.waitForTransitionEnd=function(t,e){return new Promise((n,o)=>{t.addEventListener("transitionend",function s(r){r.target===t&&(e&&r.propertyName!==e||(t.removeEventListener("transitionend",s),n(r)))})})};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.fetchJSON=(t,e)=>new Promise((n,o)=>{fetch(t,e).then(s=>{s.ok?n(s.json()):o(s)}).catch(s=>o(s))});var h={};Object.defineProperty(h,"__esModule",{value:!0});const y=t=>typeof t=="object"&&t!==null?JSON.stringify(t):String(t);h.getValue=(t={},e="")=>{const n=e.split(".");let o=0,s=t;for(;s&&o<n.length;)s=s[n[o]],o++;return s},h.isEqual=(t,e)=>typeof t==typeof e&&(typeof t=="object"?y(t).localeCompare(y(e))===0:t===e),h.isFilledObject=function(t){return typeof t=="object"&&t!==null&&Object.keys(t).length>0},h.naiveClone=function t(e){return typeof e!="object"?e:e===null?null:Array.isArray(e)?e.map(n=>t(n)):Object.entries(e).reduce((n,[o,s])=>(n[o]=t(s),n),{})},h.toArray=t=>Array.isArray(t)?t:[t],h.toString=y;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */class u{constructor(){this.eventIdMap=new WeakMap,this.eventBindingMap={},this.lastMQ=A(u.mediaQuerys),Q(window,"resize",this.handleMQChange,this)}static getInstance(e){return u.instance===void 0&&(u.mediaQuerys=e,u.instance=new u),u.instance}handleMQChange(){const e=A(u.mediaQuerys);e!==this.lastMQ&&(window.dispatchEvent(new CustomEvent("kl-mq-change",{detail:{newMQ:e,oldMQ:this.lastMQ}})),this.lastMQ=e)}}(function(t,e,n,o){var s,r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);r>3&&i&&Object.defineProperty(e,n,i)})([N(100)],u.prototype,"handleMQChange",null);var wt=new class{constructor(){this.urlSearchParams=new URLSearchParams(window.location.search)}get(t){return this.urlSearchParams.get(t)}getAll(t){return this.urlSearchParams.getAll(t)}getAllKeys(){return Array.from(this.urlSearchParams.keys())}set(t,e){this.urlSearchParams.set(t,e),this.updateUrl()}delete(t){this.urlSearchParams.delete(t),this.updateUrl()}getString(){return this.urlSearchParams.toString()}get curUrl(){return`${window.location.protocol}//${window.location.host}${window.location.pathname}`}updateUrl(){const t=this.getString(),e=this.curUrl,n=window.location.hash,o=t!==""?`${e}?${t}`:e;window.history.replaceState({path:o},"",o),n!==""&&(window.location.hash=n)}},_t=new Proxy(console,{get:(t,e)=>wt.get("js-debug")!==null?t[e]:()=>{}});new class{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersectionChange(t),{rootMargin:"500px 0px"})}subscribe(t,e){this.componentMap.set(t,e),this.intersectionObserver.observe(t)}unsubscribe(t){this.intersectionObserver.unobserve(t),this.componentMap.delete(t)}handleIntersectionChange(t){t.forEach(e=>{const n=e.target;if(!e.isIntersecting||!this.componentMap.has(n))return;const o=this.componentMap.get(n);this.unsubscribe(n),o()})}};const I="/public/icons";var yt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,B=(t,e,n,o)=>{for(var s=o>1?void 0:o?bt(e,n):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(s=(o?i(e,n,s):i(s))||s);return o&&s&&yt(e,n,s),s};const T=Object.assign({"/public/icons/angle-left.svg":()=>d(()=>import("./angle-left.CuEqyOC8.js"),[]).then(t=>t.default),"/public/icons/angle-right.svg":()=>d(()=>import("./angle-right.Ke48OV-s.js"),[]).then(t=>t.default),"/public/icons/hamburger.svg":()=>d(()=>import("./hamburger.DXUzfmtf.js"),[]).then(t=>t.default),"/public/icons/home.svg":()=>d(()=>import("./home.CfzaHiPS.js"),[]).then(t=>t.default),"/public/icons/rocket-lunch.svg":()=>d(()=>import("./rocket-lunch.C6eRDqkd.js"),[]).then(t=>t.default),"/public/icons/twitter.svg":()=>d(()=>import("./twitter.d5w0828a.js"),[]).then(t=>t.default)});let v=class extends J{constructor(){super(...arguments),this.name=""}async getSvg(t){const n=T[`${I}/${t}.svg`]??T[`${I}/cross.svg`];try{const o=await n();return rt(o)}catch(o){_t.error(`Icon Component: SVG icon: ${o.message}`,o);return}}render(){const t=this.getSvg(this.name);return tt`${mt(t)}`}};v.styles=G`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;B([st({type:String})],v.prototype,"name",2);v=B([et("icon-component")],v);export{_t as m};
//# sourceMappingURL=icon.BA6wsVYe.js.map