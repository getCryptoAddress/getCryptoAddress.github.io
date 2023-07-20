<script lang="ts" setup>
import { NButton, NSelect, NSpace } from "naive-ui";
import { ref } from "vue";
import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import type { PaperWalletCanvasMode } from "@/entities/PaperWallets/types/PaperWallet.types";

const emit = defineEmits<{
  submit: [
    {
      typeOfDownload: DownloadPaperWalletType;
      canvasMode: PaperWalletCanvasMode;
    }
  ];
}>();
const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
const canvasMode = ref<PaperWalletCanvasMode>("PRINT");

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

async function handleDownloadButton() {
  emit("submit", {
    typeOfDownload: typeOfDownload.value,
    canvasMode: canvasMode.value,
  });
}
</script>

<template>
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
      v-model:value="canvasMode"
      :consistent-menu-width="false"
      :style="{ minWidth: '170px' }"
    />
    <NButton @click="handleDownloadButton">Download</NButton>
  </NSpace>
</template>
