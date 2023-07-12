<script lang="ts" setup>
import type { PaperWalletItemImage } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletFormPosition from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormPosition.vue";
import PaperWalletItemWrapper from "@/entities/PaperWallets/ui/PaperWalletItemWrapper/PaperWalletItemWrapper.vue";

const emit = defineEmits<{
  update: [PaperWalletItemImage];
}>();

defineProps<{
  item: PaperWalletItemImage;
}>();

function handleUpdatePosition(item: PaperWalletItemImage) {
  emit("update", item);
}
</script>

<template>
  <PaperWalletItemWrapper :type="item.type" :id="item.id">
    <template #actions><slot /></template>
    <PaperWalletFormPosition :item="item" @update="handleUpdatePosition" />
  </PaperWalletItemWrapper>
</template>
