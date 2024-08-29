import{_ as b}from"./preload-helper.DX1wzJSG.js";import{u as P,f as O,w as f,i as M,s as N,x as I}from"./lit-element.BYUc91cE.js";import{e as S,a as g,i as x,t as T}from"./unsafe-html.CzzwY3gx.js";import{m as j}from"./index.module.DQI0LCqS.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O},E=(t=D,e,s)=>{const{kind:n,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,t),n==="accessor"){const{name:r}=s;return{set(c){const h=e.get.call(this);e.set.call(this,c),this.requestUpdate(r,h,t)},init(c){return c!==void 0&&this.P(r,void 0,t),c}}}if(n==="setter"){const{name:r}=s;return function(c){const h=this[r];e.call(this,c),this.requestUpdate(r,h,t)}}throw Error("Unsupported decorator location: "+n)};function V(t){return(e,s)=>typeof s=="object"?E(t,e,s):((n,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends S{}_.directiveName="unsafeSVG",_.resultType=2;const H=g(_);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=t=>t===null||typeof t!="object"&&typeof t!="function",U=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),d(i,e);return!0},$=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},A=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function X(t){this._$AN!==void 0?($(this),this._$AM=t,A(this)):this._$AM=t}function Y(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)d(n[o],!1),$(n[o]);else n!=null&&(d(n,!1),$(n));else d(this,t)}const Z=t=>{t.type==T.CHILD&&(t._$AP??(t._$AP=Y),t._$AQ??(t._$AQ=X))};class k extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),A(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(d(this,e),$(this))}setValue(e){if(U(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class z{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class G{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=t=>!K(t)&&typeof t.then=="function",m=1073741823;class L extends k{constructor(){super(...arguments),this._$Cwt=m,this._$Cbt=[],this._$CK=new z(this),this._$CX=new G}render(...e){return e.find(s=>!p(s))??f}update(e,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const h=s[c];if(!p(h))return this._$Cwt=c,h;c<i&&h===n[c]||(this._$Cwt=m,i=0,Promise.resolve(h).then(async w=>{for(;r.get();)await r.get();const a=o.deref();if(a!==void 0){const l=a._$Cbt.indexOf(h);l>-1&&l<a._$Cwt&&(a._$Cwt=l,a.setValue(w))}}))}return f}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const F=g(L),v="/public/icons";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,y=(t,e,s,n)=>{for(var i=n>1?void 0:n?R(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(n?r(e,s,i):r(i))||i);return n&&i&&Q(e,s,i),i};const C=Object.assign({"/public/icons/rocket-lunch.svg":()=>b(()=>import("./rocket-lunch.C6eRDqkd.js"),__vite__mapDeps([])).then(t=>t.default)});let u=class extends N{constructor(){super(...arguments),this.name=""}async getSvg(t){const s=C[`${v}/${t}.svg`]??C[`${v}/cross.svg`];try{const n=await s();return H(n)}catch(n){j.error(`Icon Component: SVG icon: ${n.message}`,n);return}}render(){const t=this.getSvg(this.name);return I`${F(t)}`}};u.styles=M`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;y([V({type:String})],u.prototype,"name",2);u=y([q("icon-component")],u);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.6HWMj7N2.js.map
