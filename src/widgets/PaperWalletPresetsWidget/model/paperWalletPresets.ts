import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type Preset from "@/widgets/PaperWalletPresetsWidget/types/Preset.type";
import defaultPreset from "@/widgets/PaperWalletPresetsWidget/model/presets/defaultPreset";
import bitAddressPreset from "@/widgets/PaperWalletPresetsWidget/model/presets/bitAddressPreset";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

export const usePaperWalletPresets = defineStore("presets", () => {
  const presets = ref<Preset[]>([defaultPreset, bitAddressPreset]);
  const secretKey = ref("");
  const address = ref("");
  const type = ref("");

  function setWallet(
    nextSecretKey: string,
    nextAddress: string,
    nextType: string
  ) {
    secretKey.value = nextSecretKey;
    address.value = nextAddress;
    type.value = nextType;
  }

  function replaceVariables(text: string) {
    return text
      .replace(/\{\{ SecretKey }}/g, secretKey.value)
      .replace(/\{\{ Address }}/g, address.value)
      .replace(/\{\{ WalletType }}/g, type.value);
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
