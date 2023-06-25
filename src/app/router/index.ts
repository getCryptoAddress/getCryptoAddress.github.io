import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import CreateWalletsView from "../../pages/CreateWalletsPage/CreateWalletsPage.vue";
import PaperWalletsView from "../../pages/PaperWalletsPage/PaperWalletsPage.vue";

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/HomePage/HomePage.vue"),
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
