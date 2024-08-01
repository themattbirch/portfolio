import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://mattbirch.co",
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  content: {
    // ... other content settings
    fields: [{ name: "slug", type: "string" }],
  },
});
