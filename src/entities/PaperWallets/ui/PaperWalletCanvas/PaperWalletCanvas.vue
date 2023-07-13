<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import QRCode from "@/shared/ui/QRCode/QRCode.vue";
import { onUnmounted } from "vue";

const emit = defineEmits<{
  update: [PaperWalletItem[]];
  select: [PaperWalletItem];
}>();

const props = defineProps<{
  items: PaperWalletItem[];
}>();

let isMoving = false;
let activeItem: PaperWalletItem | null = null;
let xPosition = 0;
let yPosition = 0;

function handleMouseDown(item: PaperWalletItem, e: MouseEvent) {
  isMoving = true;
  activeItem = item;
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
// function updateItemPosition(item: PaperWalletItem) {
// const index = items.findIndex((i) => i.id === item.id);
// items.splice(index, 1, item);
// emit("update", items);
// }
</script>

<template>
  <div class="paper-wallet-canvas" @mousemove="handleMouseMove">
    <template v-for="item in items" :key="item.id">
      <div
        @dblclick="emit('select', item)"
        v-if="item.type === 'TEXT'"
        @mousedown="handleMouseDown(item, $event)"
        :style="{
          cursor: 'move',
          position: 'absolute',
          fontSize: item.size + 'px',
          textAlign: item.align,
          color: item.color,
          left: item.position.x + 'px',
          top: item.position.y + 'px',
          width: item.position.width + 'px',
          overflowWrap: 'anywhere',
          userSelect: 'none',
        }"
      >
        {{ item.text }}
      </div>
      <img
        v-else-if="item.type === 'IMAGE'"
        :src="item.src"
        alt=""
        draggable="false"
        @mousedown="handleMouseDown(item, $event)"
        :style="{
          position: 'absolute',
          cursor: 'move',
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
        @mousedown="handleMouseDown(item, $event)"
        :style="{
          cursor: 'move',
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
