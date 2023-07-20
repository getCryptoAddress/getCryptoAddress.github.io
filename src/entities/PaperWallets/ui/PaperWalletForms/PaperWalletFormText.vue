<script setup lang="ts">
import {
  NColorPicker,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NSelect,
} from "naive-ui";
import type { PaperWalletItemText } from "@/entities/PaperWallets/types/PaperWallet.types";

const emit = defineEmits<{
  update: [PaperWalletItemText];
}>();

const props = defineProps<{
  item: PaperWalletItemText;
}>();

function handleUpdateValue<K extends keyof PaperWalletItemText>(
  key: K,
  value: PaperWalletItemText[K]
) {
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
        type="textarea"
        :value="item.text"
        :autosize="{
          minRows: 1,
          maxRows: 3,
        }"
        @update:value="handleUpdateValue('text', $event)"
      />
    </NFormItem>
    <NFormItem label="Font Size">
      <NInputNumber
        :value="item.size"
        :min="5"
        :max="300"
        @update:value="handleUpdateValue('size', $event ?? 16)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Font Weight">
      <NInputNumber
        :value="item.weight"
        :min="100"
        :max="900"
        :step="100"
        @update:value="handleUpdateValue('weight', $event ?? 100)"
      >
        <template #suffix> px </template>
      </NInputNumber>
    </NFormItem>
    <NFormItem label="Align">
      <n-select
        :value="item.align"
        :options="[
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
          { value: 'left', label: 'Left' },
          { value: 'justify', label: 'Justify' },
        ]"
        @update:value="handleUpdateValue('align', $event)"
      />
    </NFormItem>
    <NFormItem label="AlignLast">
      <n-select
        :value="item.alignLast"
        :options="[
          { value: 'auto', label: 'Auto' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
          { value: 'left', label: 'Left' },
          { value: 'justify', label: 'Justify' },
        ]"
        @update:value="handleUpdateValue('alignLast', $event)"
      />
    </NFormItem>
    <NFormItem label="Color">
      <NColorPicker
        :value="item.color"
        @update:value="handleUpdateValue('color', $event)"
      />
    </NFormItem>
  </NForm>
</template>
