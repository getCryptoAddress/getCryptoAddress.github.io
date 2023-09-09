<script setup lang="ts">
defineProps<{
  count: number;
  total: number;
}>();
</script>

<template>
  <div
    class="simple-progress"
    :class="{ 'simple-progress__hidden': !total }"
  >
    <div>{{ count }}</div>
    <div>/</div>
    <div>{{ total }}</div>
  </div>
</template>

<style lang="scss" scoped>
.simple-progress {
  visibility: visible;
  width: 100px;
  padding: 5px 10px;
  display: grid;
  text-align: center;
  grid-template-columns: 3fr 1fr 3fr;
  margin: 1rem auto;
}
.simple-progress__hidden {
  visibility: hidden;
}
</style>
