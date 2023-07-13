<script lang="ts" setup>
import { NButton, NIcon, NSpace, NUpload, NUploadDragger } from "naive-ui";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import { computed, ref } from "vue";
import html2canvas from "html2canvas";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";
import { ArrowMove20Filled, Delete20Regular } from "@vicons/fluent";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemProps from "@/entities/PaperWallets/ui/PaperWalletItemProps/PaperWalletItemProps.vue";

const paperWalletStore = usePaperWallet();

const currentItemId = ref<string | null>(null);
const currentItem = computed<PaperWalletItem | null>(() => {
  if (!currentItemId.value) {
    return null;
  }
  return (
    paperWalletStore.items.find((item) => item.id === currentItemId.value) ||
    null
  );
});

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
        @select="currentItemId = $event?.id || null"
      />
    </div>
  </div>
  <PaperWalletItemProps
    v-if="currentItem"
    :item="currentItem"
    @updateItem="paperWalletStore.updateItem($event)"
  />
  <Draggable
    :model-value="paperWalletStore.items"
    @update:model-value="paperWalletStore.setItems($event)"
    handle="[data-drag]"
  >
    <PaperWalletItems :items="paperWalletStore.items">
      <template #actions="{ item }">
        <n-space size="small" style="align-items: center">
          <n-button
            size="small"
            @click="paperWalletStore.removeItem(item)"
            circle
          >
            <template #icon>
              <NIcon>
                <Delete20Regular />
              </NIcon>
            </template>
          </n-button>
          <n-button size="small" circle data-drag>
            <template #icon>
              <NIcon>
                <ArrowMove20Filled />
              </NIcon>
            </template>
          </n-button>
        </n-space>
      </template>
    </PaperWalletItems>
  </Draggable>
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
