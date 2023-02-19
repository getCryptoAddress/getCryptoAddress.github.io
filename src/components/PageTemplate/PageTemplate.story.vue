<script setup lang="ts">
import PageTemplate from "./PageTemplate.vue";
</script>

<template>
  <Story>
    <PageTemplate>
      <template #navigation>
        <div class="block">🐱</div>
      </template>
      <template #page>
        <div class="block">🐱</div>
      </template>
    </PageTemplate>
  </Story>
</template>

<style lang="scss" scoped>
.block {
  background: #06b981;
  position: relative;
  height: 100%;
}
</style>
