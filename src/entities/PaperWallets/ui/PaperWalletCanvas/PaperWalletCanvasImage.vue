<script lang="ts" setup>
import type { PaperWalletItemImage } from "@/entities/PaperWallets/types/PaperWallet.types";
import { computed, type StyleValue } from "vue";

const props = defineProps<{
  item: PaperWalletItemImage;
}>();

const styles = computed<StyleValue>(() => {
  return {
    cursor: "move",
    position: "absolute",
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
  <img :src="item.src" alt="" draggable="false" :style="styles" />
</template>
