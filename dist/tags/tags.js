import{PLUGIN_EVENTS as b}from"https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js";const e=[];function u(){return e.length>0?`${e.length} tag${e.length>1?"s":""} selected`:"No tags selected"}function E(t,c){return c?t.filter(a=>a.tag.toLowerCase().includes(c.toLowerCase())):t}async function h(t,c,a){const p=()=>E(c,a).map(n=>{const l=e.includes(n.tag);return`
        <sp-menu-item value="${n.tag}" ${l?"selected":""}>
          ${n.tag}
        </sp-menu-item>
      `}).join(""),m=o=>{const n=o.target,{value:l,selected:v}=n;if(v){const r=e.indexOf(l);r>-1&&e.splice(r,1)}else e.push(l);const d=t.querySelector(".selectedLabel");d&&(d.textContent=u())},g=()=>{navigator.clipboard.writeText(e.join(", ")),t.dispatchEvent(new CustomEvent(b.TOAST,{detail:{message:"Copied Tags"}}))},f=`
    <sp-menu
      label="Select tags"
      selects="multiple"
      data-testid="taxonomy"
    >
      ${p()}
    </sp-menu>
    <sp-divider size="s"></sp-divider>
    <div class="footer">
      <span class="selectedLabel">${u()}</span>
      <sp-action-button label="Copy" quiet>
        <sp-icon-copy slot="icon"></sp-icon-copy>
      </sp-action-button>
    </div>
  `,s=document.createElement("div");s.classList.add("container"),s.innerHTML=f,t.append(s),s.querySelectorAll("sp-menu-item").forEach(o=>{o.addEventListener("click",m)});const i=s.querySelector("sp-action-button");i&&i.addEventListener("click",g)}const y={title:"Tags",searchEnabled:!0};export{h as decorate,y as default};
//# sourceMappingURL=tags.js.map
