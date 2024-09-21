import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";

console.log("Loading astro.config.js");


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
});

console.log("Finished loading astro.config.js");

