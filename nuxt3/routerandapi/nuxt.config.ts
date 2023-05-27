import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    // autoimports
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", "@sidebase/nuxt-auth"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
