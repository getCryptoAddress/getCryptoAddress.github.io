<script lang="ts" setup>
  defineProps<{
    title: string;
    description?: string;
  }>();
</script>
<template>
  <Teleport to="head">
    <title>{{ title }}</title>
    <meta
      v-if="description"
      name="description"
      :content="description"
    />
  </Teleport>
</template>
