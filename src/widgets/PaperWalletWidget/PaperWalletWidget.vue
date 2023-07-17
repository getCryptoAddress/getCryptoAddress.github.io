<script lang="ts" setup>
import { NSpace } from "naive-ui";
import {
  PaperWalletCanvas,
  PaperWalletItemProps,
  PaperWalletItems,
  PaperWalletWrapper,
  usePaperWallet,
} from "@/entities/PaperWallets";
import { AddPaperWalletItem } from "@/features/AddPaperWalletItem";
import { ChangeOrderItemList } from "@/features/ChangeOrderItemList";
import { ChangeCanvasMode } from "@/features/ChangeCanvasMode";
import { DownloadPaperWallet } from "@/features/DownloadPaperWallet";
import {
  RedoActionInPaperWallet,
  UndoActionInPaperWallet,
} from "@/features/ConrollHistoryInPaperWallet/";

const paperWalletStore = usePaperWallet();
</script>

<template>
  <PaperWalletWrapper>
    <template #canvas>
      <PaperWalletCanvas
        :items="paperWalletStore.items"
        :view="paperWalletStore.canvasMode"
        :is-edit-mode="true"
        :selected-item-id="paperWalletStore.selectedItemId"
        @updateItem="paperWalletStore.updateItem"
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
        <ChangeCanvasMode />
        <UndoActionInPaperWallet />
        <RedoActionInPaperWallet />
        <DownloadPaperWallet />
      </NSpace>
    </template>
  </PaperWalletWrapper>
</template>
