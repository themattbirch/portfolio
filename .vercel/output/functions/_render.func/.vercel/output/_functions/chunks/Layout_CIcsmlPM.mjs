import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, i as defineScriptVars, j as renderSlot, m as maybeRenderHead, s as spreadAttributes, d as renderComponent, k as renderHead } from './astro/server_BdPs8nE1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect as useEffect$1 } from 'react';

const $$Astro$5 = createAstro("https://mattbirch.co");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://mattbirch.co");
const $$PortfolioNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PortfolioNav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " <script>(function(){", `
  ["DOMContentLoaded", "astro:after-swap"].forEach((event) => {
    document.addEventListener(event, addListeners);
  });

  function cloneAndReplace(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
  }
  function addListeners() {
    const oldMenuButton = document.getElementById("astronav-menu");
    if (oldMenuButton) {
      cloneAndReplace(oldMenuButton);
    }

    const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");
    oldDropdownMenus.forEach((menu) => {
      cloneAndReplace(menu);
    });

    // Mobile nav toggle
    const menuButton = document.getElementById("astronav-menu");
    menuButton && menuButton.addEventListener("click", toggleMobileNav);

    // Dropdown menus
    const dropdownMenus = document.querySelectorAll(".astronav-dropdown");
    dropdownMenus.forEach((menu) => {
      const button = menu.querySelector("button");
      button &&
        button.addEventListener("click", (event) =>
          toggleDropdownMenu(event, menu, dropdownMenus)
        );

      // Handle Submenu Dropdowns
      const dropDownSubmenus = menu.querySelectorAll(
        ".astronav-dropdown-submenu"
      );

      dropDownSubmenus.forEach((submenu) => {
        const submenuButton = submenu.querySelector("button");
        submenuButton &&
          submenuButton.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            toggleSubmenuDropdown(event, submenu);
          });
      });
    });

    // Clicking away from dropdown = remove dropdown class
    document.addEventListener("click", closeAllDropdowns);

    if (closeOnClick) {
      handleCloseOnClick();
    }
  }

  function toggleMobileNav() {
    [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {
      el.classList.toggle("hidden");
    });
  }

  function toggleDropdownMenu(event, menu, dropdownMenus) {
    toggleMenu(menu);

    // Closes one dropdown when I'm selecting another
    Array.from(dropdownMenus)
      .filter((el) => el !== menu && !menu.contains(el))
      .forEach(closeMenu);

    event.stopPropagation();
  }

  function toggleSubmenuDropdown(event, submenu) {
    event.stopPropagation();
    toggleMenu(submenu);

    // Close sibling submenus @ same nesting level
    const siblingSubmenus = submenu
      .closest(".astronav-dropdown")
      .querySelectorAll(".astronav-dropdown-submenu");
    Array.from(siblingSubmenus)
      .filter((el) => el !== submenu && !submenu.contains(el))
      .forEach(closeMenu);
  }

  function closeAllDropdowns(event) {
    const dropdownMenus = document.querySelectorAll(".dropdown-toggle");
    const dropdownParent = document.querySelectorAll(
      ".astronav-dropdown, .astronav-dropdown-submenu"
    );
    const isButtonInsideDropdown = [
      ...document.querySelectorAll(
        ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"
      ),
    ].some((button) => button.contains(event.target));
    if (!isButtonInsideDropdown) {
      dropdownMenus.forEach((d) => {
        // if (!d.contains(event.target)) {
        d.classList.remove("open");
        d.removeAttribute("open");
        d.classList.add("hidden");
        // }
      });
      dropdownParent.forEach((d) => {
        d.classList.remove("open");
        d.removeAttribute("open");
        d.setAttribute("aria-expanded", "false");
      });
    }
  }

  function toggleMenu(menu) {
    menu.classList.toggle("open");
    const expanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", expanded ? "false" : "true");
    menu.hasAttribute("open")
      ? menu.removeAttribute("open")
      : menu.setAttribute("open", "");

    const dropdownToggle = menu.querySelector(".dropdown-toggle");
    const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");
    dropdownToggle.classList.toggle("hidden");
    dropdownToggle.setAttribute(
      "aria-expanded",
      dropdownExpanded === "true" ? "false" : "true"
    );
  }

  function closeMenu(menu) {
    menu.classList.remove("open");
    menu.removeAttribute("open");
    menu.setAttribute("aria-expanded", "false");
    const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  function handleCloseOnClick() {
    const navMenuItems = document.querySelector(".astronav-items");
    const navToggle = document.getElementById("astronav-menu");
    const navLink = navMenuItems && navMenuItems.querySelectorAll("a");

    const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");

    navLink &&
      navLink.forEach((item) => {
        item.addEventListener("click", () => {
          navMenuItems?.classList.add("hidden");
          MenuIcons.forEach((el) => {
            el.classList.toggle("hidden");
          });
        });
      });
  }
})();<\/script>`])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/PortfolioNav.astro", void 0);

const $$Astro$3 = createAstro("https://mattbirch.co");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon", className], "class:list")}${spreadAttributes(rest)}> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </span>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/OpenIcon.astro", void 0);

const $$Astro$2 = createAstro("https://mattbirch.co");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon", className], "class:list")}${spreadAttributes(rest)}> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </span>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/CloseIcon.astro", void 0);

const LogTestComponent = () => {
  useEffect(() => {
    try {
      const React = require("react");
      console.log("React loaded successfully:", React.version);
    } catch (error) {
      console.error("Error loading React:", error);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { children: "Check console for logs." });
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  const applyTheme = useCallback((newTheme) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    if (window.initializeSkillToggles) {
      requestAnimationFrame(() => {
        console.log("Reinitializing skill toggles after theme change");
        window.initializeSkillToggles();
      });
    }
  }, []);
  useEffect$1(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }, []);
  const LightModeIcon = () => /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 theme-toggle-icon",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        }
      )
    }
  );
  const DarkModeIcon = () => /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 theme-toggle-icon",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
        /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
        /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
        /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
        /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
      ]
    }
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleTheme,
        className: "theme-toggle bg-transparent border-none cursor-pointer p-2 transition-colors",
        "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        children: theme === "light" ? /* @__PURE__ */ jsx(LightModeIcon, {}) : /* @__PURE__ */ jsx(DarkModeIcon, {})
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(LogTestComponent, {}) })
  ] });
};

const $$Astro$1 = createAstro("https://mattbirch.co");
const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { menuItems } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PortfolioNav", $$PortfolioNav, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-2xl mx-auto px-4 sm:px-6"> <div class="flex justify-between items-center h-16"> <!-- Enhanced Logo --> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center p-2 rounded-lg logo-container"> <span class="text-xl lg:text-2xl font-semibold logo-text"> <span class="bracket">&lt;</span> <span class="name">matt birch</span> <span class="bracket">&gt;</span> </span> </a> </div> <!-- Desktop menu --> <div class="hidden md:block"> <nav> <ul class="flex items-center space-x-2 lg:space-x-4"> <li class="mr-4"> ${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/ThemeToggle.jsx", "client:component-export": "default" })} </li> ${menuItems.map((item) => renderTemplate`<li class="relative group"> ${!item.children ? renderTemplate`<a${addAttribute(item.path, "href")} class="text-gray-300 hover:text-white px-4 py-2 rounded-lg inline-flex items-center h-full transition-all duration-200 neumorphic-button"> <span class="relative z-10">${item.title}</span> </a>` : renderTemplate`<div class="relative inline-flex items-center h-full"> <button class="text-gray-300 hover:text-white px-4 py-2 rounded-lg inline-flex items-center transition-all duration-200 neumorphic-button"> <span>${item.title}</span> <svg class="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> <ul class="absolute left-0 top-full mt-2 w-48 rounded-lg shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 neumorphic-dropdown"> ${item.children.map((child) => renderTemplate`<li> <a${addAttribute(child.path, "href")} class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150 rounded-lg"> ${child.title} </a> </li>`)} </ul> </div>`} </li>`)} </ul> </nav> </div> <!-- Mobile menu and ThemeToggle --> <div class="md:hidden flex items-center"> <!-- ThemeToggle Button moved to the left --> ${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/ThemeToggle.jsx", "client:component-export": "default" })} <!-- Mobile menu button moved to the right --> <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200 neumorphic-button ml-4" aria-expanded="false"> <span class="sr-only">Open main menu</span> ${renderComponent($$result2, "OpenIcon", $$OpenIcon, { "class": "astronav-open-icon block h-6 w-6" })} ${renderComponent($$result2, "CloseIcon", $$CloseIcon, { "class": "astronav-close-icon hidden h-6 w-6" })} </button> </div> <!-- Mobile menu --> <div class="md:hidden hidden" id="mobile-menu"> <div class="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2"> ${menuItems.map((item, index) => renderTemplate`<div class="mobile-menu-item"${addAttribute(`animation-delay: ${index * 0.1}s;`, "style")}> ${!item.children ? renderTemplate`<a${addAttribute(item.path, "href")} class="mobile-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"> <span class="mobile-link-text">${item.title}</span> </a>` : renderTemplate`<div class="relative"> <button class="mobile-dropdown-toggle w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-all duration-200" aria-expanded="false"> <span class="mobile-link-text">${item.title}</span> <svg class="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> <div class="mobile-dropdown-menu hidden mt-2 pl-4 space-y-1"> ${item.children && item.children.map((child, childIndex) => renderTemplate`<a${addAttribute(child.path, "href")} class="mobile-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"${addAttribute(`animation-delay: ${index * 0.1 + (childIndex + 1) * 0.05}s;`, "style")}> <span class="mobile-link-text">${child.title}</span> </a>`)} </div> </div>`} </div>`)} </div> </div> </div> </div> ` })} `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/NavBar.astro", void 0);

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },

  {
    title: "Skills",
    children: [
      { title: "EQ", path: "/skills/soft-skills" },
      { title: "Technical", path: "/skills/technical-skills" },
    ],
  },
  { title: "Work", path: "/projects" },
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const typedMenuItems = menuItems;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-20 transition-all bg-gradient-to-r from-gray-800 to-blue-950 dark:bg-gradient-to-r dark:from-black dark:to-gray-900" data-astro-cid-3ef6ksr2> <div class="py-5" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavBar", $$NavBar, { "menuItems": typedMenuItems, "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-r from-gray-800 to-blue-950 mt-auto"> <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <div class="p-3 rounded-lg"> <p class="text-sm text-gray-400">
&copy; ${currentYear} Matt Birch. All rights reserved.
</p> </div> <nav class="flex space-x-6"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="neumorphic-button p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-200"${addAttribute(link.name, "aria-label")}> <span class="sr-only">${link.name}</span> <i${addAttribute(`fab fa-${link.icon} text-xl`, "class")} aria-hidden="true"></i> </a>`)} </nav> </div> </div> </footer>`;
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mattbirch.co");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Matt Birch | Web Developer",
    description = "Transforming ideas into powerful web experiences. I combine technical expertise with creative problem-solving to deliver websites that not only look great but perform exceptionally.",
    ogImage = "/images/default-og-image.jpg",
    fullWidth = false
  } = Astro2.props;
  const canonicalURL = Astro2.url.href;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="min-h-screen"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/mb-favicon.png" type="image/png"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', `><!-- Preload critical FontAwesome stylesheet --><link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style" onload="this.rel='stylesheet'" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">`, '<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></noscript><!-- Preconnect to Google Fonts for faster loading --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Load Google Fonts asynchronously --><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet" media="print"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<!-- JSON-LD --><script type="application/ld+json">(function(){', `
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Matt Birch"
    },
    "image": {
      "@type": "ImageObject",
      "url": new URL(ogImage, url).toString(),
      "width": 1200,
      "height": 630
    }
  }
})();<\/script><!-- Prevent flash of incorrect theme --><script>
  (function() {
    function getInitialTheme() {
      let theme;
      try {
        theme = localStorage.getItem('theme');
      } catch (err) {
        console.error('Error accessing localStorage:', err);
      }
      
      if (theme === 'dark' || theme === 'light') {
        return theme;
      }
      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      
      return 'light'; // Default fallback
    }

    function applyTheme(theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    }

    const theme = getInitialTheme();
    applyTheme(theme);

    // Allow external control for theme updates
    window.updateTheme = function(newTheme) {
      applyTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {
        console.error('Error setting localStorage:', err);
      }
    };

    // Listen for system preference changes if localStorage is not set
    if (!localStorage.getItem('theme') && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {
        window.updateTheme(e.matches ? 'dark' : 'light');
      });
    }
  })();
<\/script>`, "", "</head> <body> ", " <main", "> ", " </main> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), maybeRenderHead(), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.url), "content"), renderSlot($$result, $$slots["head"]), defineScriptVars({ url: Astro2.url.href, title, description, ogImage }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(fullWidth ? "w-full" : "max-w-8xl mx-auto", "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mattb/Desktop/Projects/Files/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
