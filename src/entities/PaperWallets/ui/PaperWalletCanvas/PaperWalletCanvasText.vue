<script lang="ts" setup>
import type { PaperWalletItemText } from "@/entities/PaperWallets/types/PaperWallet.types";
import { computed } from "vue";

const props = defineProps<{
  item: PaperWalletItemText;
}>();

const styles = computed(() => {
  return {
    cursor: "move",
    position: "absolute",
    fontSize: props.item.size + "px",
    textAlign: props.item.align,
    color: props.item.color,
    left: props.item.position.x + "px",
    top: props.item.position.y + "px",
    width: props.item.position.width + "px",
    overflowWrap: "anywhere",
    userSelect: "none",
    transform: `rotate(${props.item.position.rotate}deg)`,
  };
});
</script>

<template>
  <div :style="styles">
    {{ item.text }}
  </div>
</template>
