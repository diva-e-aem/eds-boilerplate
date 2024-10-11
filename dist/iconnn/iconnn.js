import{PLUGIN_EVENTS as a}from"https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js";function r(s,n){return n?s.filter(c=>c.icon.toLowerCase().includes(n.toLowerCase())):s}const l=s=>new Promise(n=>{const c=new Image;c.src=`/public/icons/${s}.svg`,c.onload=()=>n(!0),c.onerror=()=>n(!1)}),d=async(s,n)=>{const o=r(s,n).map(async t=>{const i=await l(t.icon)?`/public/icons/${t.icon}.svg`:"";return`
      <div class="icons-item">
        ${i?`<img src="${i}" alt="${t.icon} icon" class="icon-icon" />`:""}
        <span class="icon-title">${t.icon}</span>
      </div>
    `});return(await Promise.all(o)).join("")};async function p(s,n,c){const o=await d(n,c),e=document.createElement("div");e.classList.add("container-icon"),e.innerHTML=o,s.append(e),document.dispatchEvent(new CustomEvent(a.TOAST,{detail:{message:"Icons loaded successfully!"}}))}const f={title:"Iconnn",searchEnabled:!0};export{p as decorate,f as default};
//# sourceMappingURL=iconnn.js.map
