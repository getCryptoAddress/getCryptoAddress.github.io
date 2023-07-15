<script lang="ts" setup>
import { NButton } from "naive-ui";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import { computed, ref } from "vue";
import html2canvas from "html2canvas";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemProps from "@/entities/PaperWallets/ui/PaperWalletItemProps/PaperWalletItemProps.vue";
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletWrapper/PaperWalletWrapper.vue";
import { AddPaperWalletItemButton } from "@/features/AddPaperWalletItemButton";

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
        :is-edit-mode="true"
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
      <Draggable
        :model-value="paperWalletStore.items"
        @update:model-value="paperWalletStore.setItems($event)"
      >
        <PaperWalletItems
          :items="paperWalletStore.items"
          :selectedItemId="currentItemId"
          @selectItem="handleSelectItem"
        />
      </Draggable>
    </template>
    <template #actions>
      <AddPaperWalletItemButton
        @addImage="handleAddImage"
        @addText="handleAddText"
        @addQrCode="handleAddQRCode"
      />
    </template>
  </PaperWalletWrapper>
  <n-button @click="printPaperWallet" size="large">Print</n-button>
</template>
