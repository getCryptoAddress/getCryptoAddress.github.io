import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./app/router";
import App from "./App.vue";

import "@/shared/assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
