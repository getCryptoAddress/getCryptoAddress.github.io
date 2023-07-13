<script lang="ts" setup>
import { NButton, NSpace, NUpload, NUploadDragger } from "naive-ui";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import { ref } from "vue";
import html2canvas from "html2canvas";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";

const paperWalletStore = usePaperWallet();

function handleChange({ file }: any) {
  paperWalletStore.addItemImage(URL.createObjectURL(file.file));
}

function handleAddText() {
  paperWalletStore.addItemText();
}
function handleAddQRCode() {
  paperWalletStore.addItemQRCode();
}

const canvasEl = ref();

// todo
function printPaperWallet() {
  if (!canvasEl.value) {
    return;
  }

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
        :items="paperWalletStore.items"
        ref="canvasEl"
        id="paper-wallet-canvas"
        @update="paperWalletStore.setItems($event)"
      />
    </div>
  </div>
  <PaperWalletItems
    :items="paperWalletStore.items"
    @update="paperWalletStore.setItems($event)"
  />
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
