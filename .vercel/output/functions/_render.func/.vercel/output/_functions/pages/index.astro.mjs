/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, i as defineScriptVars, d as renderComponent } from '../chunks/astro/server_o7j8RNAz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VL9LN_d4.mjs';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCode, faRobot, faPenFancy } from '@fortawesome/free-solid-svg-icons';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://mattbirch.co");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const testimonials = [
    {
      name: "Dr. Jay Cho",
      business: "Active Care",
      quote: "Matt made a new website for my business. It was the best choice I've made so far, because it looks great. Very reasonable and very professional. And he made it all in time even with an urgent request.",
      photoUrl: "/images/cho-headshot.png"
    },
    {
      name: "Chris Gordon",
      business: "CGN",
      quote: "Excellent work! I have a terrific new website that is everything I wanted. I was guided through the whole process in a collaborative process. Matt Birch was patient and professional. My highest recommendation!",
      photoUrl: "/images/cg-headshot.jpg"
    },
    {
      name: "Bridget Costello",
      business: "Lynch's Landing",
      quote: "I can't say enough about how swift and professional our experience with this company has been. Matt created a beautiful new website for our business. We are very happy with his work.",
      photoUrl: "/images/bc-headshot.jpg"
    },
    {
      name: "Ann Gorman",
      business: "Blacktop Ohio",
      quote: "Matt was great to work with, I love the website he built for me, I have already recommended him to a few of my family members who are also business owners.",
      photoUrl: "/images/ag-headshot.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="swiper-container relative testimonial-container rounded-full transition-all duration-300" data-astro-cid-aadlzisc> <div class="swiper-wrapper" data-astro-cid-aadlzisc> ${testimonials && testimonials.length > 0 ? testimonials.map((testimonial) => renderTemplate`<div class="swiper-slide" data-astro-cid-aadlzisc> <div class="testimonial-card rounded-full p-6 shadow-lg text-white relative overflow-hidden max-w-xs md:max-w-md lg:max-w-lg mx-auto" data-astro-cid-aadlzisc> <div class="testimonial-photo-wrapper" data-astro-cid-aadlzisc> <img${addAttribute(testimonial.photoUrl, "src")}${addAttribute(`Headshot of ${testimonial.name}`, "alt")} class="testimonial-photo w-24 h-24 rounded-full object-cover mx-auto shadow-lg mb-4" loading="lazy" data-astro-cid-aadlzisc> </div> <div class="text-center" data-astro-cid-aadlzisc> <p class="text-2xl font-semibold" data-astro-cid-aadlzisc>${testimonial.name}</p> <p class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-aadlzisc> ${testimonial.business} </p> <p class="text-gray-600 dark:text-gray-200 italic mt-4" data-astro-cid-aadlzisc>
"${testimonial.quote}"
</p> </div> </div> </div>`) : renderTemplate`<p data-astro-cid-aadlzisc>No testimonials available.</p>`} </div> <div class="swiper-button-prev" data-astro-cid-aadlzisc></div> <div class="swiper-button-next" data-astro-cid-aadlzisc></div> <div class="swiper-pagination" data-astro-cid-aadlzisc></div> </div>  `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mattbirch.co");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const lightBackground = "/images/hero-background-light-theme-toggle.png";
  const darkBackground = "/images/hero-background-dark-theme-toggle.png";
  return renderTemplate(_a || (_a = __template(["", '<div class="relative h-screen flex items-center overflow-hidden pb-16" data-astro-cid-bbe6dxrz> <div id="hero-background" class="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300" data-astro-cid-bbe6dxrz> <div class="hero-gradient-overlay" data-astro-cid-bbe6dxrz></div> <div class="hero-dim-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="relative z-10 w-full" data-astro-cid-bbe6dxrz> <div class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-bbe6dxrz> <div class="flex justify-between items-start" data-astro-cid-bbe6dxrz> <div class="max-w-3xl mt-16 sm:mt-32" data-astro-cid-bbe6dxrz> <h1 class="hero-title mt-6 font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-2 opacity-0 transform translate-y-4 transition-all duration-1000 sm:max-w-sm md:max-w-md lg:max-w-full" id="heroTitle" data-astro-cid-bbe6dxrz> <span class="gradient-text bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text" data-astro-cid-bbe6dxrz>\nA Front-End Web Developer\n</span> </h1> <p class="hero-tagline mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 sm:mt-8 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-1000 delay-500" id="heroTagline" data-astro-cid-bbe6dxrz>\nWho can write clean code <span class="hero-pulse text-blue-800 lg:text-blue-600 dark:text-blue-400 font-bold animate-pulse" data-astro-cid-bbe6dxrz>and</span> copy!\n</p> <div class="mt-10 opacity-0 transform translate-y-4 transition-all duration-1000 delay-1000" id="heroCta" data-astro-cid-bbe6dxrz> <a href="#contact" class="inline-block bg-gradient-to-r from-blue-600\n            to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white\n            font-bold py-4 px-8 rounded-full transition-all duration-300\n            transform hover:scale-105 hover:shadow-lg" data-astro-cid-bbe6dxrz>\nGet in Touch\n</a> </div> </div> </div> </div> </div> </div> <script>(function(){', '\n  function updateTheme() {\n    const isDarkMode = document.documentElement.classList.contains("dark");\n    const heroBackground = document.getElementById("hero-background");\n    const isSmallScreen = window.innerWidth <= 1024;\n\n    if (heroBackground) {\n      if (isDarkMode) {\n        heroBackground.style.backgroundImage = `url(${darkBackground})`;\n      } else if (!isSmallScreen) {\n        heroBackground.style.backgroundImage = `url(${lightBackground})`;\n      } else {\n        // For small screens in light mode, let CSS handle it\n        heroBackground.style.backgroundImage = "";\n      }\n    }\n  }\n\n  function debounce(func, wait) {\n    let timeout;\n    return function (...args) {\n      clearTimeout(timeout);\n      timeout = setTimeout(() => func.apply(this, args), wait);\n    };\n  }\n\n  const debouncedUpdateTheme = debounce(updateTheme, 100);\n\n  function animateHeroElements() {\n    const elements = ["heroTitle", "heroTagline", "heroCta"];\n    elements.forEach((id, index) => {\n      const element = document.getElementById(id);\n      if (element) {\n        element.classList.remove("opacity-0", "translate-y-4");\n      }\n    });\n  }\n\n  function init() {\n    updateTheme();\n    animateHeroElements();\n  }\n\n  // Initialize on page load\n  document.addEventListener("DOMContentLoaded", init);\n\n  // Re-initialize when the page content is updated (for Astro view transitions)\n  document.addEventListener("astro:page-load", init);\n\n  // Update theme on resize\n  window.addEventListener("resize", debouncedUpdateTheme);\n\n  // Observe for dark mode changes\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach((mutation) => {\n      if (\n        mutation.type === "attributes" &&\n        mutation.attributeName === "class"\n      ) {\n        debouncedUpdateTheme();\n      }\n    });\n  });\n\n  observer.observe(document.documentElement, {\n    attributes: true,\n    attributeFilter: ["class"],\n  });\n})();<\/script> '], ["", '<div class="relative h-screen flex items-center overflow-hidden pb-16" data-astro-cid-bbe6dxrz> <div id="hero-background" class="absolute inset-0 z-0 bg-cover bg-center transition-all duration-300" data-astro-cid-bbe6dxrz> <div class="hero-gradient-overlay" data-astro-cid-bbe6dxrz></div> <div class="hero-dim-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="relative z-10 w-full" data-astro-cid-bbe6dxrz> <div class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-bbe6dxrz> <div class="flex justify-between items-start" data-astro-cid-bbe6dxrz> <div class="max-w-3xl mt-16 sm:mt-32" data-astro-cid-bbe6dxrz> <h1 class="hero-title mt-6 font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-2 opacity-0 transform translate-y-4 transition-all duration-1000 sm:max-w-sm md:max-w-md lg:max-w-full" id="heroTitle" data-astro-cid-bbe6dxrz> <span class="gradient-text bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text" data-astro-cid-bbe6dxrz>\nA Front-End Web Developer\n</span> </h1> <p class="hero-tagline mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 sm:mt-8 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-1000 delay-500" id="heroTagline" data-astro-cid-bbe6dxrz>\nWho can write clean code <span class="hero-pulse text-blue-800 lg:text-blue-600 dark:text-blue-400 font-bold animate-pulse" data-astro-cid-bbe6dxrz>and</span> copy!\n</p> <div class="mt-10 opacity-0 transform translate-y-4 transition-all duration-1000 delay-1000" id="heroCta" data-astro-cid-bbe6dxrz> <a href="#contact" class="inline-block bg-gradient-to-r from-blue-600\n            to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white\n            font-bold py-4 px-8 rounded-full transition-all duration-300\n            transform hover:scale-105 hover:shadow-lg" data-astro-cid-bbe6dxrz>\nGet in Touch\n</a> </div> </div> </div> </div> </div> </div> <script>(function(){', '\n  function updateTheme() {\n    const isDarkMode = document.documentElement.classList.contains("dark");\n    const heroBackground = document.getElementById("hero-background");\n    const isSmallScreen = window.innerWidth <= 1024;\n\n    if (heroBackground) {\n      if (isDarkMode) {\n        heroBackground.style.backgroundImage = \\`url(\\${darkBackground})\\`;\n      } else if (!isSmallScreen) {\n        heroBackground.style.backgroundImage = \\`url(\\${lightBackground})\\`;\n      } else {\n        // For small screens in light mode, let CSS handle it\n        heroBackground.style.backgroundImage = "";\n      }\n    }\n  }\n\n  function debounce(func, wait) {\n    let timeout;\n    return function (...args) {\n      clearTimeout(timeout);\n      timeout = setTimeout(() => func.apply(this, args), wait);\n    };\n  }\n\n  const debouncedUpdateTheme = debounce(updateTheme, 100);\n\n  function animateHeroElements() {\n    const elements = ["heroTitle", "heroTagline", "heroCta"];\n    elements.forEach((id, index) => {\n      const element = document.getElementById(id);\n      if (element) {\n        element.classList.remove("opacity-0", "translate-y-4");\n      }\n    });\n  }\n\n  function init() {\n    updateTheme();\n    animateHeroElements();\n  }\n\n  // Initialize on page load\n  document.addEventListener("DOMContentLoaded", init);\n\n  // Re-initialize when the page content is updated (for Astro view transitions)\n  document.addEventListener("astro:page-load", init);\n\n  // Update theme on resize\n  window.addEventListener("resize", debouncedUpdateTheme);\n\n  // Observe for dark mode changes\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach((mutation) => {\n      if (\n        mutation.type === "attributes" &&\n        mutation.attributeName === "class"\n      ) {\n        debouncedUpdateTheme();\n      }\n    });\n  });\n\n  observer.observe(document.documentElement, {\n    attributes: true,\n    attributeFilter: ["class"],\n  });\n})();<\/script> '])), maybeRenderHead(), defineScriptVars({ lightBackground, darkBackground }));
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Hero.astro", void 0);

const SkillCard = ({ icon, title, description, color, extraClass }) => /* @__PURE__ */ jsxs("div", { className: `bg-gradient-to-r from-blue-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4 ${color.border} ${extraClass}`, children: [
  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon, className: `${color.icon} w-12 h-12` }),
    /* @__PURE__ */ jsx("div", { className: `${color.text} text-xs font-semibold px-2 py-1 rounded-full bg-opacity-20 ${color.bgOpacity}`, children: "Expert" })
  ] }),
  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 dark:text-white mb-2", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: description }),
  /* @__PURE__ */ jsxs("button", { className: `${color.text} flex items-center hover:underline group`, children: [
    "Learn More",
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronRight, className: "ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })
  ] })
] });
const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const skills = [
    {
      icon: faCode,
      title: "Front-end Web Developer",
      description: "Building responsive and dynamic websites with modern frameworks.",
      color: {
        border: "border-blue-500",
        icon: "text-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        bgOpacity: "bg-blue-500"
      },
      extraClass: ""
    },
    {
      icon: faRobot,
      title: "Prompt Engineer",
      description: "Crafting and optimizing prompts for cutting-edge AI models.",
      color: {
        border: "border-green-500",
        icon: "text-green-500",
        text: "text-green-600 dark:text-green-400",
        bgOpacity: "bg-green-500"
      },
      extraClass: "md:mt-8"
      // Adds margin-top to this card in medium screens and above
    },
    {
      icon: faPenFancy,
      title: "Copywriter",
      description: "Creating compelling and persuasive content that converts.",
      color: {
        border: "border-purple-500",
        icon: "text-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        bgOpacity: "bg-purple-500"
      },
      extraClass: ""
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "skills-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "h2-text  mb-12 pb-2 text-center", children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: skills.map((skill, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `transform transition-all duration-300 ${hoveredIndex === index ? "scale-105 z-20" : hoveredIndex !== null ? "scale-95 opacity-75" : ""}`,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        children: /* @__PURE__ */ jsx(SkillCard, { ...skill })
      },
      index
    )) }) })
  ] }) });
};

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-8 sm:pt-12 md:pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gradient-to-br from-[var(--cta-bg-from)] via-[var(--cta-bg-via)] to-[var(--cta-bg-to)] rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:rotate-1" style="--tw-bg-opacity: var(--cta-bg-opacity);"> <div class="backdrop-blur-sm p-1" style="background-color: rgba(var(--cta-backdrop), var(--cta-backdrop-opacity));"> <div class="bg-[var(--cta-content-bg)] rounded-md"> <div class="max-w-xl mx-auto px-6 py-10 text-center"> <h2 class="text-2xl font-bold text-[var(--cta-heading-text)] mb-4">
Ready to Elevate Your Web Presence?
</h2> <p class="text-lg text-[var(--cta-subtext)] mb-6">
Let's collaborate and bring your vision to life!
</p> <a href="#contact" class="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500] text-[var(--cta-button-text)] font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[var(--cta-button-hover-bg)] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
Get in Touch
</a> </div> </div> </div> </div> </section>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/CTASection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build websites using HTML, CSS and JavaScript."
    },
    {
      title: "Results-Driven Copywriting",
      description: "copy that ACHIEVERS THEIR GOALS."
    },
    {
      title: "Responsive Design",
      description: "Ensure your website looks great and functions flawlessly on all devices."
    },
    {
      title: "*Ongoing Support*",
      description: "Regular maintenance and updates to keep your website secure and up-to-date."
    }
  ];
  const meHeroImg = "/images/matt-hero-image.png";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "fullWidth": true, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} </section>  <section class="py-16 sm:py-24 md:py-32  bg-[#E9EEF4] dark:bg-gray-900 transition-colors duration-300" data-astro-cid-j7pv25f6> <div class="max-w-screen-2xl  mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8" data-astro-cid-j7pv25f6> <!-- Text Column --> <div class="w-full lg:w-3/4 mb-8 lg:mb-0" data-astro-cid-j7pv25f6> <!-- Add mb-8 for spacing between text and image in smaller screens --> <h2 class="h2-text mb-6 text-gray-800 dark:text-gray-100" data-astro-cid-j7pv25f6>
What I Can Do for You
</h2> <p class="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-j7pv25f6>
I help businesses grow their online presence by building user-friendly websites with custom copywriting 
        so they can achieve their goals. My entreprenurial mindset and unique mix of technical and soft skills gets the job done <span class="text-blue-700 italic" data-astro-cid-j7pv25f6>on time</span>. Here's what I deliver for clients:
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8" data-astro-cid-j7pv25f6> ${services.map((service) => renderTemplate`<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300" data-astro-cid-j7pv25f6> <!-- Container for title and icon --> <div class="flex items-center group" data-astro-cid-j7pv25f6> <!-- Hover effect for title --> <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" data-astro-cid-j7pv25f6> ${service.title} </h3> <!-- Hover effect for icon --> ${renderComponent($$result2, "FontAwesomeIcon", FontAwesomeIcon, { "icon": faChevronRight, "className": "w-6 h-6 ml-2 text-blue-500 dark:text-blue-400 p-2 rounded-full transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:scale-110 group-hover:shadow-md", "data-astro-cid-j7pv25f6": true })} </div> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-j7pv25f6> ${service.description} </p> </div>`)} </div> </div> <!-- Image Column --> <div class="w-full lg:w-1/4 flex justify-center" data-astro-cid-j7pv25f6> <img${addAttribute(meHeroImg, "src")} alt="Matt showcasing skills for clients" class="w-4/5 h-auto object-cover" data-astro-cid-j7pv25f6> </div> </div></section> <section class="testimonials-section max-w-7xl pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 mx-auto px-4 sm:px-6" data-astro-cid-j7pv25f6> <h2 class="h2-text text-center mb-16 sm:mb-24 md:mb-32 relative" data-astro-cid-j7pv25f6>
Just ask my clients what they think...
</h2> <div class="testimonial-container overflow-hidden rounded-full max-w-7xl mx-auto" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })} </div> </section>  <section class="pb-16 sm:pb-24 md:pb-32 pt-8 sm:pt-12 md:pt-16 max-w-screen-2xl mx-auto px-4 sm:px-6" data-astro-cid-j7pv25f6> <h2 class="h2-text mb-6 sm:mb-8" data-astro-cid-j7pv25f6>
...They Know What Separates Me From Other Web Developers
</h2> <div class="px-4 sm:px-6 max-w-7xl" data-astro-cid-j7pv25f6> <!-- Reduced max-width for content --> <!-- Flexbox container for the two columns --> <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8" data-astro-cid-j7pv25f6> <!-- Left column: 2 list items --> <ul class="list-disc space-y-4 w-full md:w-1/2" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>A cross-functional expert who understands how systems fit together.</li> <li data-astro-cid-j7pv25f6>*EXPERIENCED*</li> </ul> <!-- Right column: 2 list items --> <ul class="list-disc space-y-4 w-full md:w-1/2" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Strong awareness of how to both fulfill user needs and achieve business goals.</li> <li data-astro-cid-j7pv25f6>Team-focused, collaborative mindset with great communication skills</li> </ul> </div> </div> </section>  <section class="bg-[#e6ebf2] dark:bg-gray-900 py-16 sm:py-24 md:py-32" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SkillsSection", SkillsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/SkillsSection.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </section> <section class="py-16 sm:py-24 md:py-32 max-w-screen-xl mx-auto px-4 sm:px-6 text-center" data-astro-cid-j7pv25f6> <h2 class="h2-text mb-10 text-center text-gray-800 dark:text-gray-100" data-astro-cid-j7pv25f6>
What You See Is What You Get
</h2> <div class="flex justify-center" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center" data-astro-cid-j7pv25f6> <!-- Left Column --> <ul class="space-y-6" data-astro-cid-j7pv25f6> <li class="flex items-start text-lg text-gray-700 dark:text-gray-300 hover:transform hover:scale-110 transition duration-300" data-astro-cid-j7pv25f6> <svg class="icon-checkmark w-6 h-6 mr-3 text-blue-700 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Reliable</span> </li> <li class="flex items-start text-lg text-gray-700 dark:text-gray-300 hover:transform hover:scale-110 transition duration-300" data-astro-cid-j7pv25f6> <svg class="icon-checkmark w-6 h-6 mr-3 text-blue-700 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Multi-skilled</span> </li> </ul> <!-- Right Column --> <ul class="space-y-6" data-astro-cid-j7pv25f6> <li class="flex items-start text-lg text-gray-700 dark:text-gray-300 hover:transform hover:scale-110 transition duration-300" data-astro-cid-j7pv25f6> <svg class="icon-checkmark w-6 h-6 mr-3 text-blue-700 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Experienced</span> </li> <li class="flex items-start text-lg text-gray-700 dark:text-gray-300 hover:transform hover:scale-110 transition duration-300" data-astro-cid-j7pv25f6> <svg class="icon-checkmark w-6 h-6 mr-3 text-blue-700 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Passionate</span> </li> </ul> </div> </div> <!-- Subtle underline effect --> <div class="flex justify-center my-12" data-astro-cid-j7pv25f6> <div class="w-12 border-t-2 border-gray-300 dark:border-gray-600" data-astro-cid-j7pv25f6></div> </div> <!-- CTA Card --> ${renderComponent($$result2, "CTASection", $$CTASection, { "data-astro-cid-j7pv25f6": true })} </section> ` })}`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/mattb/Desktop/Projects/Files/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
