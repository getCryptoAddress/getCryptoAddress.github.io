import { mount } from "@vue/test-utils";
import { NMessageProvider } from "naive-ui";
import { afterEach, expect, suite, test, vi } from "vitest";
import { h } from "vue";
import CopyWalletToClipboard from "./CopyWalletToClipboard.vue";

suite("features/CopyWalletToClipboard/ui/CopyWalletToClipboard", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders without errors and triggers copy on click", async () => {
    const writeText = vi.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });
    const wrapper = mount(NMessageProvider, {
      slots: {
        default: [
          h(CopyWalletToClipboard, {
            wallet: {
              privateKey: "testPrivateKey",
              address: "testAddress",
            },
          }),
        ],
      },
    });

    await wrapper.find("button").trigger("click");
    expect(writeText).toHaveBeenCalledWith("testPrivateKey:testAddress");
  });
});
