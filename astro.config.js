import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [
    tailwind({
      config: { path: "./tailwind.config.js" },
    }),
    react(),
    icon(),
  ],
  site: "https://mattbirch.co",
  output: "static",
  adapter: vercel(),
  server: {
    port: 3000,
  },
});
