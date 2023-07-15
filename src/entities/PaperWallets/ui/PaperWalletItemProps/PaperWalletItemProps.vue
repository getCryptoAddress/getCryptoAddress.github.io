<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletFormPosition from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormPosition.vue";
import PaperWalletFormText from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormText.vue";
import PaperWalletFormQRCode from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormQRCode.vue";
import { NButton, NIcon } from "naive-ui";
import { Delete20Regular } from "@vicons/fluent";

const emit = defineEmits<{
  updateItem: [PaperWalletItem];
  removeItem: [PaperWalletItem];
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
    <n-button @click="emit('removeItem', item)">
      <template #icon>
        <NIcon>
          <Delete20Regular />
        </NIcon>
      </template>
      Remove
    </n-button>
  </div>
</template>
