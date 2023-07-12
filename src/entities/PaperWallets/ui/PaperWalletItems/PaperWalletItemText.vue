<script lang="ts" setup>
import type { PaperWalletItemText } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemWrapper from "@/entities/PaperWallets/ui/PaperWalletItemWrapper/PaperWalletItemWrapper.vue";
import PaperWalletFormPosition from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormPosition.vue";
import PaperWalletFormText from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormText.vue";

const emit = defineEmits<{
  update: [PaperWalletItemText];
}>();

defineProps<{
  item: PaperWalletItemText;
}>();

function handleUpdate(item: PaperWalletItemText) {
  emit("update", item);
}
</script>

<template>
  <PaperWalletItemWrapper :type="item.type" :id="item.id">
    <template #actions><slot /></template>
    <PaperWalletFormPosition :item="item" @update="handleUpdate" />
    <PaperWalletFormText :item="item" @update="handleUpdate" />
  </PaperWalletItemWrapper>
</template>
