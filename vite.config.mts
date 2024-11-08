import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import csp from "vite-plugin-csp-guard";

process.env.VITE_NONCE = Math.random().toString(36).slice(2);

// https://vitejs.dev/config/
export default defineConfig({
  html: {
    cspNonce: process.env.VITE_NONCE,
  },
  plugins: [
    vue(),
    csp({
      dev: {
        run: true,
        outlierSupport: ["vue"],
      },
      policy: {
        "style-src": ["'self'"],
        "style-src-elem": ["'self'", `'nonce-${process.env.VITE_NONCE}'`],
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
    rollupOptions: {
      output: {
        manualChunks(id) {
          // [tag-nonce]
          // Naive-ui doesn't support nonce, part of logic with workaround
          // Search by tag in the code
          const nativeUiPath = process.cwd() + "/node_modules/naive-ui/";
          if (id.startsWith(nativeUiPath)) {
            return "naive-ui"; // https://github.com/tusen-ai/naive-ui/issues/6356
          }
          const vueUsePath = process.cwd() + "/node_modules/@vueuse/";
          if (id.startsWith(vueUsePath)) {
            return "@vueuse"; // only locale files, but any way
          }
        },
      },
    },
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
