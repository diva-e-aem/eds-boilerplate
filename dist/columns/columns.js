function t(c){const e=[...c.firstElementChild.children];c.classList.add(`columns-${e.length}-cols`),[...c.children].forEach(i=>{[...i.children].forEach(n=>{const l=n.querySelector("picture");if(l){const s=l.closest("div");s&&s.children.length===1&&s.classList.add("columns-img-col")}})})}export{t as default};
//# sourceMappingURL=columns.js.map
