import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type Preset from "@/widgets/PaperWalletsPresetsWidget/types/Preset.type";
import defaultPreset from "@/widgets/PaperWalletsPresetsWidget/model/presets/defaultPreset";
import bitAddressPreset from "@/widgets/PaperWalletsPresetsWidget/model/presets/bitAddressPreset";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

export const usePaperWalletPresets = defineStore("presets", () => {
  const presets = ref<Preset[]>([defaultPreset, bitAddressPreset]);
  const secretKey = ref("");
  const address = ref("");
  const platform = ref("");

  function setWallet(
    nextSecretKey: string,
    nextAddress: string,
    nextPlatform: string
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
      .map((preset) => {
        return {
          ...preset,
          paperWalletItems: preset.paperWalletItems.map(replaceVariablesInItem),
        };
      });
  });

  function _updatePreset(preset: Preset) {
    presets.value = presets.value.map((currentPreset) =>
      currentPreset.name === preset.name ? preset : currentPreset
    );
  }

  async function _lazyLoadAllPreset() {
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
  _lazyLoadAllPreset().then();

  return { presets, loadedPresets, setWallet };
});
