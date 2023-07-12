<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import QRCode from "@/shared/ui/QRCode/QRCode.vue";

defineProps<{
  items: PaperWalletItem[];
}>();
</script>

<template>
  <div class="paper-wallet-canvas">
    <template v-for="item in items" :key="item.id">
      <div
        v-if="item.type === 'TEXT'"
        :style="{
          position: 'absolute',
          fontSize: item.size + 'px',
          textAlign: item.align,
          color: item.color,
          left: item.position.x + 'px',
          top: item.position.y + 'px',
          width: item.position.width + 'px',
          overflowWrap: 'anywhere',
        }"
      >
        {{ item.text }}
      </div>
      <img
        v-else-if="item.type === 'IMAGE'"
        :src="item.src"
        alt=""
        :style="{
          position: 'absolute',
          display: 'block',
          left: item.position.x + 'px',
          top: item.position.y + 'px',
          width: item.position.width + 'px',
          height: 'auto',
        }"
      />
      <QRCode
        v-else-if="item.type === 'QR_CODE'"
        :text="item.text"
        :style="{
          position: 'absolute',
          display: 'block',
          left: item.position.x + 'px',
          top: item.position.y + 'px',
          width: item.position.width + 'px',
          height: 'auto',
        }"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.paper-wallet-canvas {
  position: relative;
  width: 480px;
  height: 260px;
  border: 1px dashed #555;
  overflow: hidden;
}
</style>
