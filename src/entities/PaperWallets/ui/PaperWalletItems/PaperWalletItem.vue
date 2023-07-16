<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import { NCard, NEllipsis, NIcon, NSpace } from "naive-ui";
import {
  Image20Regular,
  QrCode20Regular,
  TextChangeCase20Regular,
} from "@vicons/fluent";
import { computed } from "vue";

const emit = defineEmits<{
  selectItem: [PaperWalletItem];
}>();

const props = defineProps<{
  item: PaperWalletItem;
  selectedItemId: string | null;
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
    class="paper-wallet-item"
    :class="{ 'paper-wallet-item--selected': selectedItemId === item.id }"
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
      <div class="paper-wallet-item__id-container">
        <NEllipsis style="max-width: 100%" :tooltip="{ trigger: 'click' }">
          {{ text }}
        </NEllipsis>
      </div>
    </NSpace>
  </NCard>
</template>

<style scoped lang="scss">
.paper-wallet-item {
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
  &--selected {
    border-color: var(--n-color-target);
  }
}

.paper-wallet-item__id-container {
  display: grid;
  width: 100%;
}
.paper-wallet-item__id {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
