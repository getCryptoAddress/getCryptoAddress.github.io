<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import { NCard, NIcon, NSpace } from "naive-ui";
import {
  Image20Regular,
  QrCode20Regular,
  TextChangeCase20Regular,
} from "@vicons/fluent";

defineProps<{
  items: PaperWalletItem[];
}>();
</script>

<template>
  <NCard v-for="item in items" :key="item.id" size="small" hoverable>
    <NSpace justify="space-between" style="flex-wrap: nowrap">
      <NSpace style="flex-wrap: nowrap">
        <NIcon size="22">
          <TextChangeCase20Regular v-if="item.type === 'TEXT'" />
          <Image20Regular v-if="item.type === 'IMAGE'" />
          <QrCode20Regular v-if="item.type === 'QR_CODE'" />
        </NIcon>
        <div class="paper-wallet-item__id-container">
          <div class="paper-wallet-item__id">
            {{ item.id }}
          </div>
        </div>
      </NSpace>
      <div>
        <slot name="actions" :item="item" />
      </div>
    </NSpace>
  </NCard>
</template>

<style scoped lang="scss">
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
