<script setup lang="ts">
  import { NForm, NFormItem, NInputNumber, NSelect } from "naive-ui";
  import type {
    PaperWalletItem,
    PaperWalletItemPosition,
  } from "@/entities/PaperWallets/types/PaperWallet.types";

  const emit = defineEmits<{
    update: [PaperWalletItem];
  }>();

  const props = defineProps<{
    item: PaperWalletItem;
  }>();

  function handleUpdatePosition(
    key: keyof PaperWalletItemPosition,
    value: number,
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
        @update:value="handleUpdatePosition('x', $event ?? 0)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Position Y">
      <NInputNumber
        :value="item.position.y"
        @update:value="handleUpdatePosition('y', $event ?? 0)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Width">
      <NInputNumber
        :value="item.position.width"
        :min="0"
        @update:value="handleUpdatePosition('width', $event ?? 0)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Rotate">
      <NInputNumber
        :value="item.position.rotate"
        @update:value="handleUpdatePosition('rotate', $event ?? 0)"
      >
        <template #suffix> deg </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Transform origin">
      <NSelect
        :value="item.position.transformOrigin"
        :options="[
          { value: 'center center', label: 'Center Center' },
          { value: 'top center', label: 'Top Center' },
          { value: 'bottom center', label: 'Bottom Center' },
        ]"
        @update:value="handleUpdatePosition('transformOrigin', $event)"
      />
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
