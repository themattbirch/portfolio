import"./hoisted.DmX9OANV.js";function n(){const r=document.querySelectorAll(".skill-card");function a(){const t=window.innerWidth<=1023;r.forEach(e=>{const s=e.querySelector(".skill-content");s&&s.classList.contains("active")&&s.classList.toggle("mobile-margin",t)}),document.querySelectorAll(".skills-grid").forEach(e=>{t?e.style.gridTemplateColumns="1fr":e.style.gridTemplateColumns="repeat(2, 1fr)"})}r.forEach(t=>{const i=t.querySelector(".skill-header"),e=t.querySelector(".skill-content");!i||!e||i.addEventListener("click",()=>{if(i.getAttribute("aria-expanded")==="true")i.setAttribute("aria-expanded","false"),e.style.maxHeight="0px",e.classList.remove("active","mobile-margin");else{const o=t.closest(".skills-grid");o&&o.querySelectorAll(".skill-card").forEach(c=>{const d=c.querySelector(".skill-header"),l=c.querySelector(".skill-content");d&&l&&(d.setAttribute("aria-expanded","false"),l.style.maxHeight="0px",l.classList.remove("active","mobile-margin"))}),i.setAttribute("aria-expanded","true"),e.style.maxHeight=e.scrollHeight+"px",e.classList.add("active"),window.innerWidth<=1023&&e.classList.add("mobile-margin")}})}),window.addEventListener("resize",a),a()}document.addEventListener("astro:page-load",n);window.addEventListener("themeChange",n);n();
