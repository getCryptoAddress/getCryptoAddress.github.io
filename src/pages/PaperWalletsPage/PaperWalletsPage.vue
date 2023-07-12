<script lang="ts" setup>
import PaperWalletVariantsWidget from "@/widgets/PaperWalletVariantsWidget/PaperWalletVariantsWidget.vue";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import { NButton, NSpace, NUpload, NUploadDragger } from "naive-ui";
import { ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import html2canvas from "html2canvas";

// todo MVP
const items = ref<PaperWalletItem[]>([
  {
    id: "1",
    type: "TEXT",
    text: "My text",
    align: "center",
    color: "#710000FF",
    size: 15,
    position: {
      x: 10,
      y: 10,
      width: 100,
    },
  },
  {
    id: "3",
    type: "TEXT",
    text: "My text2",
    align: "center",
    size: 12,
    color: "#710000FF",
    position: {
      x: 100,
      y: 10,
      width: 100,
    },
  },
  {
    id: `${Date.now()}`,
    type: "QR_CODE",
    text: "My text123",
    position: {
      x: 100,
      y: 100,
      width: 100,
    },
  },
]);

function handleChange({ file }: any) {
  items.value.unshift({
    id: `${file.file.id}_${file.file.name}`,
    type: "IMAGE",
    src: URL.createObjectURL(file.file),
    position: {
      x: 0,
      y: 0,
      width: 480,
    },
  });
}

function handleAddText() {
  items.value.unshift({
    id: `${Date.now()}`,
    type: "TEXT",
    text: "My text",
    align: "center",
    color: "#710000FF",
    size: 15,
    position: {
      x: 10,
      y: 10,
      width: 100,
    },
  });
}
function handleAddQRCode() {
  items.value.unshift({
    id: `${Date.now()}`,
    type: "QR_CODE",
    text: "My text",
    position: {
      x: 10,
      y: 10,
      width: 100,
    },
  });
}

const canvasEl = ref();
function printPaperWallet() {
  if (!canvasEl.value) {
    return;
  }
  debugger;
  const data = window.document.querySelector(
    "#paper-wallet-canvas"
  ) as HTMLElement;
  if (!data) {
    return;
  }
  html2canvas(data).then(function (canvas) {
    document.body.appendChild(canvas);
  });
}
</script>

<template>
  <PaperWalletVariantsWidget />
  <div
    style="
      overflow: hidden;
      position: relative;
      width: 100%;
      max-width: 100%;
      display: grid;
    "
  >
    <div style="overflow-x: scroll; width: 100%">
      <PaperWalletCanvas
        :items="items"
        ref="canvasEl"
        id="paper-wallet-canvas"
      />
    </div>
  </div>
  <PaperWalletItems :items="items" @update="items = $event" />
  <n-space style="align-items: center">
    <n-upload
      :default-upload="false"
      :show-file-list="false"
      @change="handleChange"
    >
      <n-upload-dragger> Add image </n-upload-dragger>
    </n-upload>
    <n-button size="large" @click="handleAddText">Add text</n-button>
    <n-button size="large" @click="handleAddQRCode">Add QR code</n-button>
  </n-space>

  <n-button @click="printPaperWallet" size="large">Print</n-button>
</template>
