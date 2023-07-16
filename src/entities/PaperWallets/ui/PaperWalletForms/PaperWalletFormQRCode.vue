<script setup lang="ts">
import { NColorPicker, NForm, NFormItem, NInput } from "naive-ui";
import type { PaperWalletItemQRCode } from "@/entities/PaperWallets/types/PaperWallet.types";

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
        @update:value="handleUpdateValue('text', $event.trim())"
      />
    </NFormItem>
    <NFormItem label="Color">
      <NColorPicker
        :modes="['hex']"
        :value="item.color"
        @update:value="handleUpdateValue('color', $event)"
      />
    </NFormItem>
    <NFormItem label="Background Color">
      <NColorPicker
        :modes="['hex']"
        :value="item.background"
        @update:value="handleUpdateValue('background', $event)"
      />
    </NFormItem>
  </NForm>
</template>
