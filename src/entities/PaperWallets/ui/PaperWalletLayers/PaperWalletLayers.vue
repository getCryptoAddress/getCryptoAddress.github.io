<script lang="ts" setup>
  import type { PaperWalletItem } from "../../types/PaperWallet.types";
  import PaperWalletLayer from "./PaperWalletLayer.vue";

  const emit = defineEmits<{
    selectItem: [PaperWalletItem];
  }>();

  defineProps<{
    items: PaperWalletItem[];
    selectedItemId: string | null;
  }>();
</script>

<template>
  <PaperWalletLayer
    v-for="item in items"
    :key="item.id"
    :item="item"
    :isSelected="selectedItemId === item.id"
    @selectItem="emit('selectItem', item)"
  />
</template>
