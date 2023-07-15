<script lang="ts" setup>
import PaperWalletFormAddItem from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormAddItem.vue";
import type { PaperWalletItemType } from "@/entities/PaperWallets/types/PaperWallet.types";
import { NDrawer, NDrawerContent } from "naive-ui";
import { ref } from "vue";
import PaperWalletFormAddImage from "@/entities/PaperWallets/ui/PaperWalletForms/PaperWalletFormAddImage.vue";

const isShown = ref(false);
const emit = defineEmits<{
  addText: [];
  addQrCode: [];
  addImage: [string];
}>();

function handleAddImage(src: string) {
  emit("addImage", src);
  isShown.value = false;
}

function handleAddItem(item: PaperWalletItemType) {
  switch (item) {
    case "IMAGE":
      isShown.value = true;
      return;
    case "TEXT":
      emit("addText");
      return;
    case "QR_CODE":
      emit("addQrCode");
      return;
  }
}
</script>
<template>
  <PaperWalletFormAddItem @addItem="handleAddItem" />

  <NDrawer v-model:show="isShown" :height="320" placement="bottom">
    <NDrawerContent title="Add image" closable>
      <PaperWalletFormAddImage @src="handleAddImage" />
    </NDrawerContent>
  </NDrawer>
</template>
