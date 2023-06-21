import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { setup } from "@css-render/vue3-ssr";
import App from "./App.vue";
import router from "./app/router";
import { createPinia } from "pinia";

export const render = async (url: string) => {
  await router.push(url);
  await router.isReady();

  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(router);
  setup(app);
  const appHtml = await renderToString(app);
  return {
    appHtml,
  };
};
