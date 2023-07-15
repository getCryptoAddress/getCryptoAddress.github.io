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
  <NForm
    size="small"
    label-width="auto"
    :style="{
      maxWidth: '500px',
    }"
    class="paper-wallet-form-position"
  >
    <NFormItem label="Position X">
      <NInputNumber
        :value="item.position.x"
        @update:value="handleUpdatePosition('x', $event)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Position Y">
      <NInputNumber
        :value="item.position.y"
        @update:value="handleUpdatePosition('y', $event)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Width">
      <NInputNumber
        :value="item.position.width"
        @update:value="handleUpdatePosition('width', $event)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Rotate">
      <NInputNumber
        :value="item.position.rotate"
        @update:value="handleUpdatePosition('rotate', $event)"
      >
        <template #suffix> deg </template>
      </NInputNumber>
    </NFormItem>
  </NForm>
</template>

<style>
.paper-wallet-form-position {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 1rem;
}
</style>
