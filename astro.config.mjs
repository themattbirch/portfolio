import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://mattbirch.co",
  content: {
    // ... other content settings
    fields: [
      { name: "slug", type: "string" }, // Add this line
    ],
  },
});
