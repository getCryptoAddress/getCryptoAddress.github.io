<script lang="ts" setup>
import { NButton, NSpace } from "naive-ui";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import { computed, ref } from "vue";
import html2canvas from "html2canvas";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemProps from "@/entities/PaperWallets/ui/PaperWalletItemProps/PaperWalletItemProps.vue";
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletWrapper/PaperWalletWrapper.vue";
import { AddPaperWalletItem } from "@/features/AddPaperWalletItem";
import { ChangeOrderItemList } from "@/features/ChangeOrderItemList";
import { ChangeEditPreviewCanvasMode } from "@/features/ChangeEditPreviewCanvasMode";

const paperWalletStore = usePaperWallet();

// todo move to store
const isEditMode = ref<boolean>(true);
// todo move to store
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

// todo move to store
function handleSelectItem(item: PaperWalletItem | null) {
  if (!item) {
    currentItemId.value = null;
    return;
  }
  currentItemId.value = item.id;
}

function handleAddImage(src: string) {
  paperWalletStore.addItemImage(src);
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
  <PaperWalletWrapper>
    <template #canvas>
      <PaperWalletCanvas
        :items="paperWalletStore.items"
        :is-edit-mode="isEditMode"
        ref="canvasEl"
        id="paper-wallet-canvas"
        @update="paperWalletStore.setItems($event)"
        @select="handleSelectItem"
      />
    </template>
    <template #properties>
      <PaperWalletItemProps
        v-if="currentItem"
        :item="currentItem"
        @updateItem="paperWalletStore.updateItem($event)"
        @removeItem="paperWalletStore.removeItem($event)"
      />
    </template>
    <template #items>
      <ChangeOrderItemList
        :items="paperWalletStore.revertedItems"
        @update="paperWalletStore.setRevertedItems($event)"
      >
        <PaperWalletItems
          :items="paperWalletStore.revertedItems"
          :selectedItemId="currentItemId"
          @selectItem="handleSelectItem"
        />
      </ChangeOrderItemList>
    </template>
    <template #actions>
      <NSpace>
        <AddPaperWalletItem
          @addImage="handleAddImage"
          @addText="handleAddText"
          @addQrCode="handleAddQRCode"
        />
        <ChangeEditPreviewCanvasMode v-model:is-edit-mode="isEditMode" />
      </NSpace>
    </template>
  </PaperWalletWrapper>
  <n-button @click="printPaperWallet" size="large">Print</n-button>
</template>
