<script lang="ts" setup>
import {
  NButton,
  NDrawer,
  NDrawerContent,
  NSelect,
  NSpace,
  useMessage,
} from "naive-ui";
import { PaperWalletCanvas } from "@/entities/PaperWallets";
import { ref } from "vue";
import downloadAs from "@/features/DownloadPaperWallet/lib/downloadPaperWallet/downloadAs";
import type DownloadPaperWalletType from "@/features/DownloadPaperWallet/types/DownloadPaperWalletType.type";
import {
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
// todo move to entities
const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
const mode = ref<PaperWalletCanvasMode>("PRINT");

const optionsDownloadType: { label: string; value: DownloadPaperWalletType }[] =
  [
    { label: "Download as PNG", value: "PNG" },
    { label: "Download as JPEG", value: "JPEG" },
  ];

const optionsDownloadMode: { label: string; value: PaperWalletCanvasMode }[] = [
  { label: "Print Mode", value: "PRINT" },
  { label: "Preview Mode", value: "VIEW" },
  { label: "Edit Mode", value: "EDIT" },
];

async function handleSelect() {
  isLoading.value = true;
}
async function handleDownload() {
  try {
    let targetElement: HTMLElement | null = canvasEl.value?.targetElement;
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
          :options="optionsDownloadMode"
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
      :items="items"
      :view="mode"
      ref="canvasEl"
      @load="handleDownload"
    />
  </Teleport>
</template>
