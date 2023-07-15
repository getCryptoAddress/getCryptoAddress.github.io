<script setup lang="ts">
import { NForm, NFormItem, NInput } from "naive-ui";
import { PaperWalletItemQRCode } from "@/entities/PaperWallets/types/PaperWallet.types";

const emit = defineEmits<{
  update: [PaperWalletItemQRCode];
}>();

const props = defineProps<{
  item: PaperWalletItemQRCode;
}>();

function handleUpdateValue(key: keyof PaperWalletItemQRCode, value: string) {
  emit("update", {
    ...props.item,
    [key]: value,
  });
}
</script>
<template>
  <NForm
    label-align="left"
    label-placement="left"
    size="small"
    label-width="auto"
    require-mark-placement="right-hanging"
    :style="{
      maxWidth: '500px',
    }"
  >
    <NFormItem label="Text">
      <n-input
        type="text"
        :value="item.text"
        @update:value="handleUpdateValue('text', $event)"
      />
    </NFormItem>
  </NForm>
</template>
