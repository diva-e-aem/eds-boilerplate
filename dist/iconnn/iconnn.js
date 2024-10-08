import{PLUGIN_EVENTS as i}from"https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/events/events.js";function r(t,s){return s?t.filter(n=>n.tag.toLowerCase().includes(s.toLowerCase())):t}const l=t=>new Promise(s=>{const n=new Image;n.src=`/public/icons/${t}.svg`,n.onload=()=>s(!0),n.onerror=()=>s(!1)}),d=async(t,s)=>{const a=r(t,s).map(async c=>{const o=await l(c.tag)?`/public/icons/${c.tag}.svg`:"";return`
      <div class="icons-item">
        ${o?`<img src="${o}" alt="${c.tag} icon" class="tag-icon" />`:""}
        <span class="icon-title">${c.tag}</span>
      </div>
    `});return(await Promise.all(a)).join("")};async function m(t,s,n){const a=await d(s,n),e=document.createElement("div");e.classList.add("container-icon"),e.innerHTML=a,t.append(e),document.dispatchEvent(new CustomEvent(i.TOAST,{detail:{message:"Icons loaded successfully!"}}))}const p={title:"Icons",searchEnabled:!0};export{m as decorate,p as default};
//# sourceMappingURL=iconnn.js.map
