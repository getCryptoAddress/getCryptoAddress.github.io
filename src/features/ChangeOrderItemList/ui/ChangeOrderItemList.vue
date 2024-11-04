<script lang="ts" setup>
  import { VueDraggableNext as Draggable } from "vue-draggable-next";
  import { usePaperWallet } from "@/entities/PaperWallets";
  import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

  const paperWalletStore = usePaperWallet();
  const items = paperWalletStore.revertedItems;

  function handleUpdateItems(items: PaperWalletItem[]) {
    paperWalletStore.setRevertedItems(items);
  }
</script>
<template>
  <Draggable
    :model-value="items"
    @update:model-value="handleUpdateItems"
  >
    <slot />
  </Draggable>
</template>
