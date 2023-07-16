<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import { onUnmounted } from "vue";
import PaperWalletCanvasText from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasText.vue";
import PaperWalletCanvasImage from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasImage.vue";
import PaperWalletCanvasQrCode from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasQrCode.vue";

const emit = defineEmits<{
  update: [PaperWalletItem[]];
  select: [PaperWalletItem];
}>();

const props = defineProps<{
  items: PaperWalletItem[];
  isEditMode?: boolean;
}>();

let isMoving = false;
let activeItem: PaperWalletItem | null = null;
let xPosition = 0;
let yPosition = 0;

function handleMouseDown(item: PaperWalletItem, e: MouseEvent) {
  isMoving = true;
  activeItem = item;
  emit("select", item);
  xPosition = item.position.x - e.clientX;
  yPosition = item.position.y - e.clientY;
  addEventListener("mouseup", handleMouseUp);
}

function handleMouseUp() {
  isMoving = false;
  activeItem = null;
  removeEventListener("mouseup", handleMouseUp);
}

onUnmounted(() => {
  removeEventListener("mouseup", handleMouseUp);
});

function handleMouseMove(e: MouseEvent) {
  if (!isMoving || !activeItem) {
    return;
  }
  const item = updatePositionInItem(
    xPosition + e.clientX,
    yPosition + e.clientY,
    activeItem
  );

  emit(
    "update",
    props.items.map((i) => (i.id === item.id ? item : i))
  );
}

function updatePositionInItem(x: number, y: number, item: PaperWalletItem) {
  return {
    ...item,
    position: {
      ...item.position,
      x,
      y,
    },
  };
}

function handleUpdateText(item: PaperWalletItem, text: string) {
  const updatedItem = {
    ...item,
    text,
  };
  emit(
    "update",
    props.items.map((i) => (i.id === updatedItem.id ? updatedItem : i))
  );
}

// function updateItemPosition(item: PaperWalletItem) {
// const index = items.findIndex((i) => i.id === item.id);
// items.splice(index, 1, item);
// emit("update", items);
// }
</script>

<template>
  <div
    class="paper-wallet-canvas"
    @mousemove="handleMouseMove"
    :class="{
      'paper-wallet-canvas--edit-mode': isEditMode,
    }"
  >
    <template v-for="item in items" :key="item.id">
      <PaperWalletCanvasText
        v-if="item.type === 'TEXT'"
        :item="item"
        @mousedown="handleMouseDown(item, $event)"
        @updateText="handleUpdateText(item, $event)"
      />
      <PaperWalletCanvasImage
        v-if="item.type === 'IMAGE'"
        :item="item"
        @mousedown="handleMouseDown(item, $event)"
      />
      <PaperWalletCanvasQrCode
        v-else-if="item.type === 'QR_CODE'"
        :item="item"
        @mousedown="handleMouseDown(item, $event)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.paper-wallet-canvas {
  position: relative;
  width: 480px;
  height: 260px;
  overflow: hidden;
  margin: 1px;
  background: white;
  user-select: none;

  &--edit-mode {
    outline: 1px dashed #555;

    & > div {
      outline: 1px dashed rgba(85, 85, 85, 0.5);
    }
  }
}
</style>
