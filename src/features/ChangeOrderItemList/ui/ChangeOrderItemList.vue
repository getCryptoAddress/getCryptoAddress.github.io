<script lang="ts" setup>
import { VueDraggableNext as Draggable } from "vue-draggable-next";

const emit = defineEmits<{
  update: [unknown[]];
}>();
defineProps<{
  items: unknown[];
}>();

function handleUpdateItems(items: []) {
  emit("update", items);
}
</script>
<template>
  <Draggable
    :model-value="items"
    @update:model-value="handleUpdateItems"
  >
    <slot />
  </Draggable>
</template>
