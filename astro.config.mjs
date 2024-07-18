import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mattbirch.co",
  content: {
    // ... other content settings
    fields: [
      { name: "slug", type: "string" }, // Add this line
    ],
  },
});
