<script lang="ts" setup>
  import { computed, type StyleValue } from "vue";
  import type { PaperWalletItemImage } from "../../types/PaperWallet.types";

  const emit = defineEmits<{
    load: [PaperWalletItemImage];
  }>();

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
      transformOrigin: props.item.position.transformOrigin,
    };
  });
</script>

<template>
  <img
    :src="item.src"
    alt=""
    draggable="false"
    :style="styles"
    decoding="sync"
    @load="emit('load', item)"
  />
</template>
