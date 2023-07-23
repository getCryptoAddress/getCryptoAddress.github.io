import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import waitLoadedPage from "@/shared/lib/utils/waitLoadedPage";

function getHomePage() {
  return import("@/pages/HomePage/HomePage.vue");
}
function getCreateWalletsPage() {
  return import("@/pages/CreateWalletsPage/CreateWalletsPage.vue");
}
function getPaperWalletEditorPage() {
  return import("@/pages/PaperWalletEditorPage/PaperWalletEditorPage.vue");
}
function getPaperWalletsPage() {
  return import("@/pages/PaperWalletsPage/PaperWalletsPage.vue");
}

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // always scroll to top
    return { top: 0 };
  },
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: getHomePage,
      meta: {
        title: "Home",
        description: "Home page",
      },
    },
    {
      path: "/create-wallets",
      name: "CreateWallets",
      component: getCreateWalletsPage,
      meta: {
        title: "Generate Crypto Address",
        description:
          "Get Crypto Address without registration or personal data disclosure. Free and secure generate address online. Bitcoin, Ethereum, and others",
        withParanoidMode: true,
      },
    },
    {
      path: "/paper-wallet-editor",
      name: "PaperWalletEditor",
      component: getPaperWalletEditorPage,
      meta: {
        title: "Paper Wallet Editor",
        description: "Create Paper Wallet",
        withParanoidMode: true,
      },
    },
    {
      path: "/paper-wallets",
      name: "PaperWallets",
      component: getPaperWalletsPage,
      meta: {
        title: "Create Paper Wallets",
        description:
          "How to make paper wallet? Free and secure creation of cryptocurrency paper wallets online. Bitcoin, Ethereum, and others",
        withParanoidMode: true,
      },
    },
  ],
});

const { SSR } = import.meta.env;
if (!SSR) {
  // load all pages, because we need to work offline without service-worker
  waitLoadedPage().then(() =>
    Promise.resolve()
      // first priority
      .then(() =>
        Promise.all([
          getCreateWalletsPage(),
          getPaperWalletEditorPage(),
          getPaperWalletsPage(),
        ])
      )
      // second priority
      .then(() => getHomePage())
  );
}
export default router;
