<script lang="ts" setup>
import { NButton, NSpace } from "naive-ui";
import PaperWalletCanvas from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvas.vue";
import PaperWalletItems from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItems.vue";
import { ref } from "vue";
import html2canvas from "html2canvas";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";
import PaperWalletItemProps from "@/entities/PaperWallets/ui/PaperWalletItemProps/PaperWalletItemProps.vue";
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletWrapper/PaperWalletWrapper.vue";
import { AddPaperWalletItem } from "@/features/AddPaperWalletItem";
import { ChangeOrderItemList } from "@/features/ChangeOrderItemList";
import { ChangeEditPreviewCanvasMode } from "@/features/ChangeEditPreviewCanvasMode";
import {
  RedoActionInPaperWallet,
  UndoActionInPaperWallet,
} from "@/features/ConrollHistoryInPaperWallet/";

const paperWalletStore = usePaperWallet();

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
        :is-edit-mode="paperWalletStore.isEditMode"
        :selected-item-id="paperWalletStore.selectedItemId"
        ref="canvasEl"
        id="paper-wallet-canvas"
        @update="paperWalletStore.setItems"
        @select="paperWalletStore.setSelectItem"
      />
    </template>
    <template #properties>
      <PaperWalletItemProps
        v-if="paperWalletStore.selectedItem"
        :item="paperWalletStore.selectedItem"
        @updateItem="paperWalletStore.updateItem"
        @removeItem="paperWalletStore.removeItem"
      />
    </template>
    <template #items>
      <ChangeOrderItemList
        :items="paperWalletStore.revertedItems"
        @update="paperWalletStore.setRevertedItems"
      >
        <PaperWalletItems
          :items="paperWalletStore.revertedItems"
          :selectedItemId="paperWalletStore.selectedItemId"
          @selectItem="paperWalletStore.setSelectItem"
        />
      </ChangeOrderItemList>
    </template>
    <template #actions>
      <NSpace>
        <AddPaperWalletItem />
        <ChangeEditPreviewCanvasMode />
        <UndoActionInPaperWallet />
        <RedoActionInPaperWallet />
      </NSpace>
    </template>
  </PaperWalletWrapper>
  <n-button @click="printPaperWallet" size="large">Print</n-button>
</template>
