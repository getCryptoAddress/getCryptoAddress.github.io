<script lang="ts" setup>
  import {
    ChevronCircleDown20Regular,
    ChevronCircleUp20Regular,
    Delete20Regular,
  } from "@vicons/fluent";
  import { NButton, NIcon, NSpace } from "naive-ui";
  import { computed } from "vue";
  import type { PaperWalletItem } from "../../types/PaperWallet.types";
  import PaperWalletFormPosition from "./PaperWalletFormPosition.vue";
  import PaperWalletFormQRCode from "./PaperWalletFormQRCode.vue";
  import PaperWalletFormText from "./PaperWalletFormText.vue";

  const emit = defineEmits<{
    updateItem: [PaperWalletItem];
    removeItem: [PaperWalletItem];
    upItem: [PaperWalletItem];
    downItem: [PaperWalletItem];
  }>();

  const props = defineProps<{
    items: PaperWalletItem[];
    item: PaperWalletItem;
  }>();

  const itemIndex = computed(() => props.items.indexOf(props.item));
  const isLastItem = computed(() => itemIndex.value === props.items.length - 1);
  const isFirstItem = computed(() => itemIndex.value === 0);

  function handleUpdate(item: PaperWalletItem) {
    emit("updateItem", item);
  }
</script>

<template>
  <div>
    <PaperWalletFormPosition
      :item="item"
      @update="handleUpdate"
    />
    <PaperWalletFormText
      v-if="item.type === 'TEXT'"
      :item="item"
      @update="handleUpdate"
    />
    <PaperWalletFormQRCode
      v-if="item.type === 'QR_CODE'"
      :item="item"
      @update="handleUpdate"
    />
    <NSpace>
      <NButton @click="emit('removeItem', item)">
        <template #icon>
          <NIcon>
            <Delete20Regular />
          </NIcon>
        </template>
        Remove
      </NButton>
      <NButton
        @click="emit('upItem', item)"
        :disabled="isLastItem"
      >
        <template #icon>
          <NIcon>
            <ChevronCircleUp20Regular />
          </NIcon>
        </template>
        Up layer
      </NButton>
      <NButton
        @click="emit('downItem', item)"
        :disabled="isFirstItem"
      >
        <template #icon>
          <NIcon>
            <ChevronCircleDown20Regular />
          </NIcon>
        </template>
        Down layer
      </NButton>
    </NSpace>
  </div>
</template>
