<script lang="ts" setup>
  import {
    Image20Regular,
    QrCode20Regular,
    TextChangeCase20Regular,
  } from "@vicons/fluent";
  import { NCard, NEllipsis, NIcon, NSpace } from "naive-ui";
  import { computed } from "vue";
  import type { PaperWalletItem } from "../../types/PaperWallet.types";

  const emit = defineEmits<{
    selectItem: [PaperWalletItem];
  }>();

  const props = defineProps<{
    item: PaperWalletItem;
    isSelected: boolean;
  }>();

  const text = computed(() => {
    if (props.item?.type === "TEXT" || props.item?.type === "QR_CODE") {
      return props.item.text;
    }
    return props.item.id;
  });
</script>

<template>
  <NCard
    size="small"
    class="paper-wallet-layer"
    :class="{ 'paper-wallet-layer--selected': isSelected }"
    @click="emit('selectItem', item)"
    hoverable
  >
    <NSpace style="flex-wrap: nowrap">
      <div style="line-height: 0">
        <NIcon size="22">
          <TextChangeCase20Regular v-if="item.type === 'TEXT'" />
          <Image20Regular v-if="item.type === 'IMAGE'" />
          <QrCode20Regular v-if="item.type === 'QR_CODE'" />
        </NIcon>
      </div>
      <div class="paper-wallet-layer__id-container">
        <NEllipsis
          style="max-width: 100%"
          :tooltip="{ trigger: 'click', placement: 'right' }"
        >
          {{ text }}
        </NEllipsis>
      </div>
    </NSpace>
  </NCard>
</template>

<style scoped lang="scss">
  .paper-wallet-layer {
    margin-bottom: 10px;
    user-select: none;
    cursor: pointer;
    &--selected {
      border-color: var(--n-color-target);
    }
  }

  .paper-wallet-layer__id-container {
    display: grid;
    width: 100%;
  }
  .paper-wallet-layer__id {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
