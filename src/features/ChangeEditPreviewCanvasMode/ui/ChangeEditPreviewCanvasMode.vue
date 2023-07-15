<script lang="ts" setup>
import { NButton } from "naive-ui";

defineProps<{
  isEditMode: boolean;
}>();
const emit = defineEmits<{
  "update:isEditMode": [boolean];
}>();
</script>
<template>
  <NButton @click="emit('update:isEditMode', !isEditMode)">
    <template v-if="isEditMode"> Preview Mode </template>
    <template v-else> Edit Mode </template>
  </NButton>
</template>
