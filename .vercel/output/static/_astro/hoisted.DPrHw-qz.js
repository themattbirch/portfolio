function m(){const e=document.getElementById("mobile-menu-button"),o=document.getElementById("mobile-menu"),n=document.querySelector(".astronav-open-icon"),t=document.querySelector(".astronav-close-icon");if(e&&o&&n&&t){e.addEventListener("click",()=>{o.classList.toggle("mobile-menu-open"),n.classList.toggle("hidden"),t.classList.toggle("hidden"),e.setAttribute("aria-expanded",o.classList.contains("mobile-menu-open")?"true":"false")});const s=document.querySelector(".mobile-dropdown-toggle"),c=document.querySelector(".mobile-dropdown-menu");s&&c&&s.addEventListener("click",()=>{c.classList.toggle("hidden");const i=s.querySelector("svg");i&&i.classList.toggle("rotate-180")}),window.addEventListener("resize",a)}}function a(){const e=document.getElementById("mobile-menu"),o=document.querySelector(".astronav-open-icon"),n=document.querySelector(".astronav-close-icon"),t=document.getElementById("mobile-menu-button");e&&o&&n&&t&&window.innerWidth>=768&&(e.classList.remove("mobile-menu-open"),e.classList.add("hidden"),o.classList.remove("hidden"),n.classList.add("hidden"),t.setAttribute("aria-expanded","false"))}document.addEventListener("DOMContentLoaded",m);document.addEventListener("astro:after-swap",m);function b(){const e=document.querySelector("#mobile-menu"),o=document.querySelector("#mobile-menu-button");if(!e||!(e instanceof HTMLElement)){console.error("Mobile menu element not found or is not an HTMLElement");return}const n=e;if(!o||!(o instanceof HTMLElement)){console.error("Mobile menu button element not found or is not an HTMLElement");return}const t=o,s=n.dataset.closeOnClick==="true",c=t.querySelector(".menu-icon"),i=t.querySelector(".close-icon");function l(){n.classList.toggle("hidden");const u=!n.classList.contains("hidden");t.setAttribute("aria-expanded",u.toString()),c&&i&&(c.classList.toggle("hidden"),i.classList.toggle("hidden"))}return t.addEventListener("click",l),s&&n.querySelectorAll("a").forEach(d=>{d.addEventListener("click",l)}),()=>{t.removeEventListener("click",l),s&&n.querySelectorAll("a").forEach(d=>{d.removeEventListener("click",l)})}}const r=b();document.addEventListener("astro:before-swap",()=>{typeof r=="function"&&r()});
