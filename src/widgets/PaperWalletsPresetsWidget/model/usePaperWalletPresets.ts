import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import waitLoadedPage from "@/shared/lib/utils/waitLoadedPage";
import type { Preset } from "../types/PaperWalletsPresetsWidget.types";
import bitAddressPreset from "./presets/bitAddressPreset";
import defaultPreset from "./presets/defaultPreset";
import metamaskPreset from "./presets/metamaskPreset";

export const usePaperWalletPresets = defineStore("presets", () => {
  const presets = ref<Preset[]>([
    defaultPreset,
    bitAddressPreset,
    metamaskPreset,
  ]);
  const secretKey = ref("");
  const address = ref("");
  const platform = ref("");

  function setWallet(
    nextSecretKey: string,
    nextAddress: string,
    nextPlatform: string,
  ) {
    secretKey.value = nextSecretKey;
    address.value = nextAddress;
    platform.value = nextPlatform;
  }

  function replaceVariables(text: string) {
    return text
      .replace(/\{\{ SecretKey }}/g, secretKey.value)
      .replace(/\{\{ Address }}/g, address.value)
      .replace(/\{\{ Platform }}/g, platform.value);
  }

  function replaceVariablesInItem(item: PaperWalletItem): PaperWalletItem {
    if (item.type === "TEXT" || item.type === "QR_CODE") {
      return {
        ...item,
        text: replaceVariables(item.text),
      };
    }
    return item;
  }

  const loadedPresets = computed(() => {
    if (secretKey.value === "" || address.value === "") {
      return [];
    }

    return presets.value
      .filter((preset) => preset.status === "SUCCESS")
      .filter((preset) => preset.isShowFn(platform.value))
      .map((preset) => {
        return {
          ...preset,
          paperWalletItems: preset.paperWalletItems.map(replaceVariablesInItem),
        };
      });
  });

  function _updatePreset(preset: Preset) {
    presets.value = presets.value.map((currentPreset) =>
      currentPreset.name === preset.name ? preset : currentPreset,
    );
  }

  async function preloadImages() {
    const { SSR } = import.meta.env;
    if (SSR) {
      return;
    }

    for (const preset of presets.value) {
      if (preset.status !== "INIT") {
        continue;
      }
      await preset.preloadFn?.();

      _updatePreset({
        ...preset,
        status: "SUCCESS",
      });
    }
  }

  return { presets, loadedPresets, setWallet, preloadImages };
});

const { SSR } = import.meta.env;
if (!SSR) {
  waitLoadedPage(true).then(() => {
    // preload images
    const store = usePaperWalletPresets();
    return store.preloadImages();
  });
}
