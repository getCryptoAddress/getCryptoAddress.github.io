<script lang="ts" setup>
  import { NSpace } from "naive-ui";
  import { AddPaperWalletItem } from "@/features/AddPaperWalletItem";
  import { ChangeCanvasMode } from "@/features/ChangeCanvasMode";
  import { ChangeOrderItemList } from "@/features/ChangeOrderItemList";
  import {
    RedoActionInPaperWallet,
    UndoActionInPaperWallet,
  } from "@/features/ConrollHistoryInPaperWallet/";
  import { DownloadPaperWallet } from "@/features/DownloadPaperWallet";
  import { ExportPaperWallet } from "@/features/ExportPaperWallet";
  import {
    PaperWalletCanvas,
    PaperWalletEditorWrapper,
    PaperWalletItemPropsForm,
    PaperWalletLayers,
    usePaperWallet,
  } from "@/entities/PaperWallets";
  import { ResizablePaperWalletWrapper } from "@/entities/PaperWallets/";

  const paperWalletStore = usePaperWallet();
</script>

<template>
  <PaperWalletEditorWrapper>
    <template #canvas>
      <ResizablePaperWalletWrapper :key="paperWalletStore.canvasMode">
        <PaperWalletCanvas
          :items="paperWalletStore.items"
          :view="paperWalletStore.canvasMode"
          :is-edit-mode="true"
          :selected-item-id="paperWalletStore.selectedItemId"
          @updateItem="paperWalletStore.updateItem"
          @select="paperWalletStore.setSelectItem"
        />
      </ResizablePaperWalletWrapper>
    </template>
    <template #properties>
      <PaperWalletItemPropsForm
        v-if="paperWalletStore.selectedItem"
        :items="paperWalletStore.items"
        :item="paperWalletStore.selectedItem"
        @updateItem="paperWalletStore.updateItem"
        @removeItem="paperWalletStore.removeItem"
        @upItem="paperWalletStore.moveItemUp"
        @downItem="paperWalletStore.moveItemDown"
      />
    </template>
    <template #items>
      <ChangeOrderItemList
        :items="paperWalletStore.revertedItems"
        @update="paperWalletStore.setRevertedItems"
      >
        <PaperWalletLayers
          :items="paperWalletStore.revertedItems"
          :selectedItemId="paperWalletStore.selectedItemId"
          @selectItem="paperWalletStore.setSelectItem"
        />
      </ChangeOrderItemList>
    </template>
    <template #actions>
      <NSpace>
        <AddPaperWalletItem />
        <ChangeCanvasMode />
        <UndoActionInPaperWallet />
        <RedoActionInPaperWallet />
        <DownloadPaperWallet :items="paperWalletStore.items" />
        <ExportPaperWallet :items="paperWalletStore.items" />
      </NSpace>
    </template>
  </PaperWalletEditorWrapper>
</template>
