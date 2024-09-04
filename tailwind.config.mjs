import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FFF8E7',
          100: '#FDF2D0',
          200: '#FAE8B9',
          300: '#F7DE9B',
          400: '#F2CE76',
          500: '#ECC34D',
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

  plugins: [require("@tailwindcss/typography")],
};
