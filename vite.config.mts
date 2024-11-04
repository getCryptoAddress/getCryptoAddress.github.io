import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import csp from "vite-plugin-csp-guard";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    csp({
      dev: {
        run: true,
        outlierSupport: ["vue"],
      },
      policy: {
        "style-src": ["'unsafe-inline'"], // todo remove when naive-ui will be fixed
        "style-src-elem": ["'unsafe-inline'"], // todo remove when naive-ui will be fixed
        "img-src": ["data:", "blob:"],
        "script-src": ["'wasm-unsafe-eval'"],
        "script-src-elem": ["https://analytics.umami.is/script.js"],
        "connect-src": [
          "'self'",
          "https://api-gateway.umami.dev/",
          "data:",
          "blob:",
        ],
      },
    }),
  ],
  build: {
    target: "es2022",
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  legacy: {
    // todo  https:// github. com/ vitejs/ vite/ discussions/ 14697 needs for prerender.mjs
    proxySsrExternalModules: true,
  },
});
