(()=>{"use strict";const t=[{continent:"North America",mail:"na@iron-strategic.com",location:{top:59,left:60}},{continent:"Europe",mail:"eu@iron-strategic.com",location:{top:56,left:235}},{continent:"Middle East",mail:"mideast@iron-strategic.com",location:{top:108,left:260}},{continent:"South America",mail:"latin@iron-strategic.com",location:{top:153,left:107}},{continent:"Africa",mail:"africa@iron-strategic.com",location:{top:131,left:222}},{continent:"Asia",mail:"asia@iron-strategic.com",location:{top:94,left:349}},{continent:"Oceania",mail:"oceania@iron-strategic.com",location:{top:189,left:409}}];window.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelector(".footer-block__selected"),e=(t.querySelector("span"),document.querySelector(".footer-block__list"));let o=!1;const n=()=>{e.style.display="none"};document.body.addEventListener("click",(c=>{o&&c.target!==e&&c.target!==t&&c.target.parentNode!==t&&n()})),document.body.addEventListener("keydown",(t=>{"Escape"===t.code&&n()})),t.addEventListener("click",(()=>{e.style.display="grid",o=!0}))})(),(t=>{const e=document.querySelector(".footer-block__list"),o=document.querySelector(".footer-block__selected span"),n=document.querySelector(".footer-block__email"),c=document.querySelector(".footer-block__email span"),i=document.querySelector(".footer-map");n.addEventListener("click",(()=>{navigator.clipboard.writeText(c.innerText)}));const a=[],l=(e,n,i=null)=>{o.innerHTML=n.continent,c.innerText=n.mail,c.href=`mailto:${n.mail}`,i&&(a.forEach(((e,o)=>{e.classList.remove("footer-map__point_active"),e.style.cssText=`\n          top: ${t[o].location.top}px;\n          left: ${t[o].location.left}px;\n        `})),i.classList.add("footer-map__point_active"),i.style.cssText=`\n      top: ${n.location.top-11}px;\n      left: ${n.location.left-6}px;\n    `)};t.forEach(((t,o)=>{const n=document.createElement("li"),c=document.createElement("div");n.innerHTML=t.continent,n.classList.add("footer-block__item"),n.addEventListener("click",(e=>l(0,t,c))),0===o?(c.classList.add("footer-map__point","footer-map__point_active"),c.style.cssText=`\n      top: ${t.location.top-11}px;\n      left: ${t.location.left-6}px;\n    `):(c.classList.add("footer-map__point"),c.style.cssText=`\n      top: ${t.location.top}px;\n      left: ${t.location.left}px;\n    `),c.addEventListener("click",(e=>{l(0,t,c)})),e.appendChild(n),i.appendChild(c),a.push(c)}))})(t)}))})();
//# sourceMappingURL=bundle.js.map