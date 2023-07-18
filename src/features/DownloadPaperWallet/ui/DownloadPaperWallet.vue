<script lang="ts" setup>
import {
  NButton,
  NDrawer,
  NDrawerContent,
  NSelect,
  NSpace,
  useMessage,
} from "naive-ui";
import { PaperWalletCanvas, usePaperWallet } from "@/entities/PaperWallets";
import { nextTick, ref } from "vue";
import downloadAs from "@/features/DownloadPaperWallet/lib/downloadPaperWallet/downloadAs";
import type DownloadPaperWalletType from "@/features/DownloadPaperWallet/types/DownloadPaperWalletType.type";
import { PaperWalletCanvasMode } from "@/entities/PaperWallets/types/PaperWallet.types";

const message = useMessage();
const store = usePaperWallet();
const canvasEl = ref();
const isShown = ref(false);
const isLoading = ref(false);
// todo move to entities
const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
const mode = ref<PaperWalletCanvasMode>("EDIT");

const optionsDownloadType: { label: string; value: DownloadPaperWalletType }[] =
  [
    { label: "Download as PNG", value: "PNG" },
    { label: "Download as JPEG", value: "JPEG" },
  ];

const optionsDowloadMode: { label: string; value: PaperWalletCanvasMode }[] = [
  { label: "Edit Mode", value: "EDIT" },
  { label: "Preview Mode", value: "VIEW" },
  { label: "Print Mode", value: "PRINT" },
];

async function handleSelect() {
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

    await downloadAs(targetElement, typeOfDownload.value);
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
      <NSpace>
        <NSelect
          trigger="hover"
          :options="optionsDownloadType"
          v-model:value="typeOfDownload"
          :consistent-menu-width="false"
          :style="{ minWidth: '170px' }"
        />
        <NSelect
          trigger="hover"
          :options="optionsDowloadMode"
          v-model:value="mode"
          :consistent-menu-width="false"
          :style="{ minWidth: '170px' }"
        />
        <NButton @click="handleSelect">Download</NButton>
      </NSpace>
    </NDrawerContent>
  </NDrawer>

  <Teleport to="body">
    <PaperWalletCanvas
      v-if="isLoading"
      :items="store.items"
      :view="mode"
      ref="canvasEl"
    />
  </Teleport>
</template>
