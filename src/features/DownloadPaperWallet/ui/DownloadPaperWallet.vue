<script lang="ts" setup>
import { NButton, NDropdown, useMessage } from "naive-ui";
import { PaperWalletCanvas, usePaperWallet } from "@/entities/PaperWallets";
import { nextTick, ref } from "vue";
import downloadAs from "@/features/DownloadPaperWallet/lib/downloadPaperWallet/downloadAs";
import type DownloadPaperWalletType from "@/features/DownloadPaperWallet/types/DownloadPaperWalletType.type";

const message = useMessage();
const store = usePaperWallet();
const canvasEl = ref();
const isLoading = ref(false);

const options: { label: string; key: DownloadPaperWalletType }[] = [
  { label: "Download as PNG", key: "PNG" },
  { label: "Download as JPEG", key: "JPEG" },
];

async function handleSelect(key: DownloadPaperWalletType) {
  try {
    isLoading.value = true;

    let targetElement: HTMLElement | null = null;
    for (let i = 0; i < 10; ++i) {
      await nextTick();
      targetElement = canvasEl.value?.targetElement;
      if (targetElement) {
        break;
      }
    }
    if (!targetElement) {
      message.error("Problem with canvas element");
      return;
    }

    await downloadAs(targetElement, key);
  } catch (e) {
    message.error(typeof e === "string" ? e : "Something went wrong");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <NDropdown trigger="hover" :options="options" @select="handleSelect">
    <NButton>Download Image</NButton>
  </NDropdown>

  <Teleport to="body">
    <PaperWalletCanvas
      v-if="isLoading"
      :items="store.items"
      view="PRINT"
      ref="canvasEl"
    />
  </Teleport>
</template>
