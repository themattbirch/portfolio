import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), svelte(), react(), icon()],
  site: "https://mattbirch.co",
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  content: {
    fields: [{ name: "slug", type: "string" }],
  },
  build: {
    viewTransitions: true,
  },
  output: "server",
  adapter: vercel(),
});
