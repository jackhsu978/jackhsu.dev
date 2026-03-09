// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  site: "https://jackhsu.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});