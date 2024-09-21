console.log("Loading tailwind.config.mjs");

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#FFF8E7",
          100: "#FDF2D0",
          200: "#FAE8B9",
          300: "#F7DE9B",
          400: "#F2CE76",
          500: "#ECC34D",
        },
        darkModeText: "#ffffff",
      },
      aspectRatio: {
        thumbnail: "1.5",
      },
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
        serif: ["PT Serif", "serif"],
      },
    },
  },
 plugins: [
   require('@tailwindcss/typography'),
  ],
     darkMode: "class",
};

console.log("Finished loading tailwind.config.mjs");
