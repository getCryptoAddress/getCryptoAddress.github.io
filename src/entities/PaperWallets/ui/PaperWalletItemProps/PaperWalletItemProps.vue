<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletFormPosition from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormPosition.vue";
import PaperWalletFormText from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormText.vue";
import PaperWalletFormQRCode from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormQRCode.vue";

const emit = defineEmits<{
  updateItem: [PaperWalletItem];
}>();

defineProps<{
  item: PaperWalletItem;
}>();

function handleUpdate(item: PaperWalletItem) {
  emit("updateItem", item);
}
</script>

<template>
  <div>
    <PaperWalletFormPosition :item="item" @update="handleUpdate" />
    <PaperWalletFormText
      v-if="item.type === 'TEXT'"
      :item="item"
      @update="handleUpdate"
    />
    <PaperWalletFormQRCode
      v-if="item.type === 'QR_CODE'"
      :item="item"
      @update="handleUpdate"
    />
  </div>
</template>
