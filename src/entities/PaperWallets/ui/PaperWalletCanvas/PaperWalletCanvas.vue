<script lang="ts" setup>
import type {
  PaperWalletCanvasMode,
  PaperWalletItem,
} from "@/entities/PaperWallets/types/PaperWallet.types";
import { computed, onUnmounted, ref, watch } from "vue";
import PaperWalletCanvasText from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasText.vue";
import PaperWalletCanvasImage from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasImage.vue";
import PaperWalletCanvasQrCode from "@/entities/PaperWallets/ui/PaperWalletCanvas/PaperWalletCanvasQrCode.vue";

const emit = defineEmits<{
  updateItem: [PaperWalletItem];
  select: [PaperWalletItem];
  load: [];
}>();

const props = defineProps<{
  items: PaperWalletItem[];
  view: PaperWalletCanvasMode;
  isEditMode?: boolean;
  selectedItemId?: string | null;
}>();

const targetElement = ref<HTMLElement | null>(null);
let isMoving = false;
let activeItem: PaperWalletItem | null = null;
let xPosition = 0;
let yPosition = 0;

function handleMouseDown(item: PaperWalletItem, e: MouseEvent) {
  if (!props.isEditMode) {
    return;
  }
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
  emit("updateItem", item);
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
  emit("updateItem", updatedItem);
}

const loadedImages = ref<string[]>([]);

const mapImagesIds = computed(
  () =>
    new Set(
      props.items.filter((item) => item.type === "IMAGE").map((item) => item.id)
    )
);
function handleLoadedImage(item: PaperWalletItem) {
  loadedImages.value = [...loadedImages.value, item.id].filter((id) =>
    mapImagesIds.value.has(id)
  );
}

const isAllImagesLoaded = computed(() => {
  return loadedImages.value.length === mapImagesIds.value.size;
});

watch(
  () => isAllImagesLoaded.value,
  (isAllImagesLoaded) => {
    if (isAllImagesLoaded) {
      emit("load");
    }
  }
);
defineExpose({
  targetElement,
});
</script>

<template>
  <div
    class="paper-wallet-canvas"
    @mousemove="handleMouseMove"
    :class="{
      'paper-wallet-canvas--edit-mode': view === 'EDIT',
      'paper-wallet-canvas--print-mode': view === 'PRINT',
    }"
    ref="targetElement"
  >
    <template v-for="item in items" :key="item.id">
      <PaperWalletCanvasText
        v-if="item.type === 'TEXT'"
        :item="item"
        @mousedown="handleMouseDown(item, $event)"
        @updateText="handleUpdateText(item, $event)"
        :data-selected-item="selectedItemId === item.id"
      />
      <PaperWalletCanvasImage
        v-if="item.type === 'IMAGE'"
        :item="item"
        :data-selected-item="selectedItemId === item.id"
        @mousedown="handleMouseDown(item, $event)"
        @load="handleLoadedImage"
      />
      <PaperWalletCanvasQrCode
        v-else-if="item.type === 'QR_CODE'"
        :item="item"
        @mousedown="handleMouseDown(item, $event)"
        :data-selected-item="selectedItemId === item.id"
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
  background: white;
  user-select: none;

  &--edit-mode {
    & > div {
      outline: 1px dashed rgba(85, 85, 85, 0.5);
      overflow: auto;
    }
    & > div[data-selected-item="true"] {
      outline: 1px dashed #18a058;
    }
  }
  &--print-mode {
    border: 3px dotted #555;
    border-radius: 2px;
  }
}
</style>
