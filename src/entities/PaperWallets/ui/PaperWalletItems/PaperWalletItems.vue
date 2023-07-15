<script lang="ts" setup>
import type { PaperWalletItem as PaperWalletItemType } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItem from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItem.vue";

const emit = defineEmits<{
  selectItem: [PaperWalletItemType];
}>();

defineProps<{
  items: PaperWalletItemType[];
  selectedItemId: string | null;
}>();
</script>

<template>
  <PaperWalletItem
    v-for="item in items"
    :key="item.id"
    :item="item"
    :selectedItemId="selectedItemId"
    @selectItem="emit('selectItem', item)"
  />
</template>
