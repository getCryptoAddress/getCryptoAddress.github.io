<script lang="ts" setup>
import type { PaperWalletItemQRCode } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemWrapper from "@/entities/PaperWallets/ui/PaperWalletItemWrapper/PaperWalletItemWrapper.vue";
import PaperWalletFormPosition from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormPosition.vue";
import PaperWalletFormQRCode from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormQRCode.vue";

const emit = defineEmits<{
  update: [PaperWalletItemQRCode];
}>();

defineProps<{
  item: PaperWalletItemQRCode;
}>();

function handleUpdate(item: PaperWalletItemQRCode) {
  emit("update", item);
}
</script>

<template>
  <PaperWalletItemWrapper :type="item.type" :id="item.id">
    <template #actions><slot /></template>
    <PaperWalletFormPosition :item="item" @update="handleUpdate" />
    <PaperWalletFormQRCode :item="item" @update="handleUpdate" />
  </PaperWalletItemWrapper>
</template>
