<script lang="ts" setup>
  import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
  import PaperWalletLayer from "@/entities/PaperWallets/ui/PaperWalletLayers/PaperWalletLayer.vue";

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
