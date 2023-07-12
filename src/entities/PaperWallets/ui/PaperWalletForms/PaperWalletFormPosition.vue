<script setup lang="ts">
import { NForm, NFormItem, NInputNumber } from "naive-ui";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import { PaperWalletItemPosition } from "@/entities/PaperWallets/types/PaperWallet.types";

const emit = defineEmits<{
  update: [PaperWalletItem];
}>();

const props = defineProps<{
  item: PaperWalletItem;
}>();

function handleUpdatePosition(
  key: keyof PaperWalletItemPosition,
  value: number
) {
  emit("update", {
    ...props.item,
    position: {
      ...props.item.position,
      [key]: value,
    },
  });
}
</script>
<template>
  <n-form
    inline
    size="small"
    label-width="auto"
    :style="{
      maxWidth: '500px',
    }"
  >
    <n-form-item label="Position X">
      <n-input-number
        :value="item.position.x"
        @update:value="handleUpdatePosition('x', $event)"
      >
        <template #suffix> px </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Position Y">
      <n-input-number
        :value="item.position.y"
        @update:value="handleUpdatePosition('y', $event)"
      >
        <template #suffix> px </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Width">
      <n-input-number
        :value="item.position.width"
        @update:value="handleUpdatePosition('width', $event)"
      >
        <template #suffix> px </template>
      </n-input-number>
    </n-form-item>
  </n-form>
</template>
