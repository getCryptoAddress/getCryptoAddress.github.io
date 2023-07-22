import { createSSRApp, nextTick } from "vue";
import { renderToString, type SSRContext } from "@vue/server-renderer";
import { setup } from "@css-render/vue3-ssr";
import App from "./App.vue";
import router from "./app/router";
import { createPinia } from "pinia";

export const render = async (url: string) => {
  await router.push(url);
  await router.isReady();
  await nextTick();

  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(router);
  setup(app);

  const ctx: SSRContext = {};
  const appHtml = await renderToString(app, ctx);
  return {
    appHtml,
    ctx,
  };
};

export const routes = router.getRoutes();
