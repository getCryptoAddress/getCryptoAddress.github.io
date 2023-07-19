<script lang="ts" setup>
import { NButton, NDrawer, NDrawerContent, useMessage } from "naive-ui";
import {
  downloadPaperWallet,
  PaperWalletCanvas,
  PaperWalletDownloadForm,
} from "@/entities/PaperWallets";
import { ref } from "vue";
import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import type {
  PaperWalletCanvasMode,
  PaperWalletItem,
} from "@/entities/PaperWallets/types/PaperWallet.types";

defineProps<{
  items: PaperWalletItem[];
}>();
const message = useMessage();
const canvasEl = ref();
const isShown = ref(false);
const isLoading = ref(false);
const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
const canvasMode = ref<PaperWalletCanvasMode>("PRINT");

async function handleSubmitForm(payload: {
  typeOfDownload: DownloadPaperWalletType;
  canvasMode: PaperWalletCanvasMode;
}) {
  canvasMode.value = payload.canvasMode;
  typeOfDownload.value = payload.typeOfDownload;
  isLoading.value = true;
}
async function handleDownload() {
  try {
    let targetElement: HTMLElement | null = canvasEl.value?.targetElement;
    if (!targetElement) {
      isLoading.value = false;
      message.error("Problem with canvas element");
      return;
    }

    await downloadPaperWallet(targetElement, typeOfDownload.value);
  } catch (e) {
    message.error(typeof e === "string" ? e : "Something went wrong");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <NButton @click="isShown = !isShown">Download Image</NButton>

  <NDrawer v-model:show="isShown" :height="320" placement="bottom">
    <NDrawerContent title="Download paper wallet" closable>
      <PaperWalletDownloadForm @submit="handleSubmitForm" />
    </NDrawerContent>
  </NDrawer>

  <Teleport to="body">
    <PaperWalletCanvas
      v-if="isLoading"
      :items="items"
      :view="canvasMode"
      ref="canvasEl"
      @load="handleDownload"
    />
  </Teleport>
</template>
