import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import CreateWalletsView from "../views/CreateWalletsView.vue";
import PaperWalletsView from "../views/PaperWalletsView.vue";

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/create-wallet",
      name: "CreateWallet",
      component: CreateWalletsView,
      meta: {
        withParanoidMode: true,
      },
    },
    {
      path: "/create-paper-wallet",
      name: "PaperWallets",
      component: PaperWalletsView,
      meta: {
        withParanoidMode: true,
      },
    },
  ],
});

export default router;
