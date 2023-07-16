<script lang="ts" setup>
import type { PaperWalletItemQRCode } from "@/entities/PaperWallets/types/PaperWallet.types";
import { computed } from "vue";
import QRCode from "@/shared/ui/QRCode/QRCode.vue";

const props = defineProps<{
  item: PaperWalletItemQRCode;
}>();

const styles = computed(() => {
  return {
    cursor: "move",
    position: "absolute",
    left: props.item.position.x + "px",
    top: props.item.position.y + "px",
    width: props.item.position.width + "px",
    overflowWrap: "anywhere",
    userSelect: "none",
    transform: `rotate(${props.item.position.rotate}deg)`,
    lineHeight: 0,
  };
});
</script>

<template>
  <QRCode
    :text="item.text"
    :width="item.position.width"
    :style="styles"
    :background="item.background"
    :color="item.color"
  />
</template>
