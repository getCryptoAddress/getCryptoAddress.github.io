import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create-wallet",
      name: "CreateWallet",
      component: () => import("../views/CreateWalletsView.vue"),
    },
  ],
});

export default router;
