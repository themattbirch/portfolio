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
        // Primary and Secondary Colors
        primary: {
          light: "#3b82f6", // Tailwind's blue-500
          DEFAULT: "#2563eb", // Tailwind's blue-600
          dark: "#1d4ed8", // Tailwind's blue-700
        },
        secondary: {
          light: "#60a5fa", // Tailwind's blue-400
          DEFAULT: "#3b82f6", // Tailwind's blue-500
          dark: "#1e40af", // Tailwind's blue-800
        },
        // CTA Gradient Colors
        "cta-gradient-from": "#dbeafe", // blue-100
        "cta-gradient-via": "#e0e7ff", // indigo-100
        "cta-gradient-to": "#f3e8ff", // purple-100
        "cta-gradient-dark-from": "#1e3a8a", // blue-900
        "cta-gradient-dark-via": "#312e81", // indigo-900
        "cta-gradient-dark-to": "#4c1d95", // purple-900
        // CTA Button Colors
        "cta-button": "#2563eb", // blue-600
        "cta-button-hover": "#1d4ed8", // blue-700
        "cta-button-dark": "#3b82f6", // blue-500
        "cta-button-dark-hover": "#2563eb", // blue-600
        // CTA Text Color
        "cta-text": "#ffffff", // white
        // CTA Backdrop and Content Backgrounds
        "cta-backdrop": "rgba(0, 0, 0, 0.5)", // Example RGBA value (adjust as needed)
        "cta-content-bg": "#ffffff", // Adjust based on design
        "cta-subtext": "#4b5563", // gray-600
        // Background Colors
        background: {
          light: "#ffffff",
          dark: "#000000",
          secondary: "#E9EEF4", // For index.astro section
          skills: "#e6ebf2", // For Skills Section
          testimonials: "#f0f4f8", // For Testimonials Section
        },
        // Text Colors
        text: {
          light: "#000000",
          dark: "#ffffff",
          headingLight: "#1f2937", // gray-800
          headingDark: "#f3f4f6", // gray-100
          subtextLight: "#4b5563", // gray-600
          subtextDark: "#d1d5db", // gray-300
          skillsTextLight: "#1f2937", // gray-800
          skillsTextDark: "#f3f4f6", // gray-100
          testimonialTextLight: "#1f2937", // gray-800
          testimonialTextDark: "#f3f4f6", // gray-100
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
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        subtlePulse: "subtle-pulse 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
