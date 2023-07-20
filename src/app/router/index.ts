import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import CreateWalletsPage from "../../pages/CreateWalletsPage/CreateWalletsPage.vue";
import PaperWalletEditorPage from "@/pages/PaperWalletEditorPage/PaperWalletEditorPage.vue";
import PaperWalletsPage from "@/pages/PaperWalletsPage/PaperWalletsPage.vue";

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/HomePage/HomePage.vue"),
      meta: {
        title: "Home",
        description: "Home page",
      },
    },
    {
      path: "/create-wallet",
      name: "CreateWallet",
      component: CreateWalletsPage,
      meta: {
        title: "Create Wallet",
        description: "Create Wallet",
        withParanoidMode: true,
      },
    },
    {
      path: "/paper-wallet-editor",
      name: "PaperWalletEditor",
      component: PaperWalletEditorPage,
      meta: {
        title: "Paper Wallet Editor",
        description: "Create Paper Wallet",
        withParanoidMode: true,
      },
    },
    {
      path: "/paper-wallets",
      name: "PaperWallets",
      component: PaperWalletsPage,
      meta: {
        title: "Create Paper Wallet",
        description: "Create Paper Wallet",
        withParanoidMode: true,
      },
    },
  ],
});

export default router;
