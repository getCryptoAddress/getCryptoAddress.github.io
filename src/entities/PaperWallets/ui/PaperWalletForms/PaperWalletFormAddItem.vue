<script lang="ts" setup>
  import { NButton, NDropdown } from "naive-ui";
  import type {
    PaperWalletItemType,
    PaperWalletItemTypeImage,
    PaperWalletItemTypeQRCode,
    PaperWalletItemTypeText,
  } from "../../types/PaperWallet.types";

  const TYPE_TEXT: PaperWalletItemTypeText = "TEXT";
  const TYPE_QR_CODE: PaperWalletItemTypeQRCode = "QR_CODE";
  const TYPE_IMAGE: PaperWalletItemTypeImage = "IMAGE";

  const options = [
    {
      label: "Add Text",
      key: TYPE_TEXT,
    },
    {
      label: "Add QR Code",
      key: TYPE_QR_CODE,
    },
    {
      label: "Add Image",
      key: TYPE_IMAGE,
    },
  ];

  const emit = defineEmits<{
    addItem: [PaperWalletItemType];
  }>();

  function handleSelect(key: PaperWalletItemType) {
    emit("addItem", key);
  }
</script>

<template>
  <NDropdown
    trigger="hover"
    :options="options"
    @select="handleSelect"
  >
    <NButton>Add Item</NButton>
  </NDropdown>
</template>
