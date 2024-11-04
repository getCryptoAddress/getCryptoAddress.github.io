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
        "style-src-elem": ["'unsafe-inline'"],
        "img-src": ["data:"],
      },
    }),
  ],
  build: {
    target: "es2022",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
