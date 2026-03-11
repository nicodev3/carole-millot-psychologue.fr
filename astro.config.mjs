import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://carole-millot-psychologue.fr",
  integrations: [sitemap()],
});
