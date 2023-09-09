<script lang="ts" setup>
  import { ref } from "vue";
  import { NDrawer, NDrawerContent } from "naive-ui";
  import type { PaperWalletItemType } from "@/entities/PaperWallets/types/PaperWallet.types";
  import {
    PaperWalletFormAddImage,
    PaperWalletFormAddItem,
    usePaperWallet,
  } from "@/entities/PaperWallets";

  const store = usePaperWallet();
  const isShown = ref(false);

  function handleAddItem(item: PaperWalletItemType) {
    switch (item) {
      case "IMAGE":
        isShown.value = true;
        return;
      case "TEXT":
        store.addItemText();
        return;
      case "QR_CODE":
        store.addItemQRCode();
        return;
    }
  }

  function handleAddImage(src: string) {
    store.addItemImage(src);
    isShown.value = false;
  }
</script>

<template>
  <PaperWalletFormAddItem @addItem="handleAddItem" />

  <NDrawer
    v-model:show="isShown"
    :height="320"
    placement="bottom"
  >
    <NDrawerContent
      title="Add image"
      closable
    >
      <PaperWalletFormAddImage @src="handleAddImage" />
    </NDrawerContent>
  </NDrawer>
</template>
