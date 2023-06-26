import { mount } from "@vue/test-utils";
import RedirectWalletToPaperWallet from "./RedirectWalletToPaperWallet.vue";
import { afterEach, expect, suite, test, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

suite(
  "features/RedirectWalletToPaperWallet/ui/RedirectWalletToPaperWallet",
  () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    test("calls router.push with the correct parameters when the button is clicked", async () => {
      const router = createRouter({
        history: createMemoryHistory(),
        routes: [
          {
            path: "/create-paper-wallet",
            name: "PaperWallets",
            component: {
              render() {
                return "test";
              },
            },
          },
        ],
      });

      const wrapper = mount(RedirectWalletToPaperWallet, {
        global: {
          plugins: [router],
        },
        props: {
          address: "testAddress",
          privateKey: "testPrivateKey",
          platform: "testPlatform",
        },
      });

      const spy = vi.spyOn(router, "push");
      await wrapper.find("button").trigger("click");

      expect(spy).toHaveBeenCalledWith({
        name: "PaperWallets",
        state: {
          address: "testAddress",
          secret: "testPrivateKey",
          platform: "testPlatform",
        },
      });
    });
  }
);
