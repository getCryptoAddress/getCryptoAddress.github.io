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
  <n-form
    label-align="left"
    label-placement="left"
    size="small"
    label-width="auto"
    require-mark-placement="right-hanging"
    :style="{
      maxWidth: '500px',
    }"
  >
    <n-form-item label="Text">
      <n-input
        type="text"
        :value="item.text"
        @update:value="handleUpdateValue('text', $event)"
      />
    </n-form-item>
  </n-form>
</template>
