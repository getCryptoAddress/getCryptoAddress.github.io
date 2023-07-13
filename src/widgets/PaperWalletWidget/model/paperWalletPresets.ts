import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type Preset from "@/widgets/PaperWalletWidget/types/Preset.type";
import defaultPreset from "@/widgets/PaperWalletWidget/model/presets/defaultPreset";

export const useCounterStore = defineStore("counter", () => {
  const presets = ref<Preset[]>([defaultPreset]);

  const loadedPresets = computed(() =>
    presets.value.filter((preset) => preset.status === "SUCCESS")
  );

  function _updatePreset(preset: Preset) {
    presets.value.map((currentPreset) =>
      currentPreset.name === preset.name ? preset : currentPreset
    );
  }

  function _lazyLoadAllPreset() {
    for (const preset of presets.value) {
      if (preset.status !== "INIT") {
        continue;
      }
      // todo loading images

      _updatePreset({
        ...preset,
        status: "SUCCESS",
      });
    }
  }
  _lazyLoadAllPreset();

  return { presets, loadedPresets };
});
