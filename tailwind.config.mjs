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

  theme: {
    extend: {
      aspectRatio: {
        thumbnail: "1.5",
      },
      fontFamily: {
        sans: ["Cabin", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // You can add custom colors for dark mode here if needed
        dark: {
          bg: "#1a202c",
          text: "#f7fafc",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
