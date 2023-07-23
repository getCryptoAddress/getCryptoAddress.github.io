<script lang="ts" setup>
import { NButton, NDrawer, NDrawerContent, NIcon, useMessage } from "naive-ui";
import {
  downloadPaperWallet,
  PaperWalletCanvas,
  PaperWalletDownloadForm,
} from "@/entities/PaperWallets";
import { nextTick, ref } from "vue";
import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import type {
  PaperWalletCanvasMode,
  PaperWalletItem,
} from "@/entities/PaperWallets/types/PaperWallet.types";
import { ArrowDownload16Regular } from "@vicons/fluent";
import mobile from "is-mobile";

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
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, mobile() ? 500 : 1));

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
  <NButton @click="isShown = !isShown">
    <template #icon>
      <NIcon>
        <ArrowDownload16Regular />
      </NIcon>
    </template>
    Download Image
  </NButton>

  <NDrawer v-model:show="isShown" :height="320" placement="bottom">
    <NDrawerContent title="Download paper wallet" closable>
      <PaperWalletDownloadForm
        :loading="isLoading"
        @submit="handleSubmitForm"
      />
    </NDrawerContent>
  </NDrawer>

  <Teleport to="body">
    <div
      v-if="isLoading"
      style="
        position: fixed;
        overflow: hidden;
        display: grid;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      "
    >
      <div style="overflow: scroll">
        <PaperWalletCanvas
          :items="items"
          :view="canvasMode"
          @load="handleDownload"
          ref="canvasEl"
        />
      </div>
    </div>
  </Teleport>
</template>
