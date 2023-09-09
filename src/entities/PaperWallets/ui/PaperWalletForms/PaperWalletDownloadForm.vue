<script lang="ts" setup>
  import { ArrowDownload16Regular } from "@vicons/fluent";
  import { NButton, NIcon, NSelect, NSpace } from "naive-ui";
  import { ref } from "vue";
  import type {
    DownloadPaperWalletType,
    PaperWalletCanvasMode,
  } from "../../types/PaperWallet.types";

  const emit = defineEmits<{
    submit: [
      {
        typeOfDownload: DownloadPaperWalletType;
        canvasMode: PaperWalletCanvasMode;
      },
    ];
  }>();

  defineProps<{
    loading: boolean;
  }>();
  const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
  const canvasMode = ref<PaperWalletCanvasMode>("PRINT");

  const optionsDownloadType: {
    label: string;
    value: DownloadPaperWalletType;
  }[] = [
    { label: "Download as PNG", value: "PNG" },
    { label: "Download as JPEG", value: "JPEG" },
  ];

  const optionsDownloadMode: { label: string; value: PaperWalletCanvasMode }[] =
    [
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
    <NButton
      :loading="loading"
      @click="handleDownloadButton"
    >
      <template #icon>
        <NIcon>
          <ArrowDownload16Regular />
        </NIcon>
      </template>
      Download
    </NButton>
  </NSpace>
</template>
