<script lang="ts" setup>
  import { NCollapseTransition } from "naive-ui";

  defineProps<{
    show: boolean;
    loading: boolean;
  }>();
</script>

<template>
  <div
    class="collapse-transition"
    :class="{ 'collapse-transition__loading': loading }"
  >
    <n-collapse-transition :show="show">
      <slot />
    </n-collapse-transition>
  </div>
</template>

<style lang="scss" scoped>
  .collapse-transition {
    transition: pointer-events 0.3s ease-in-out;
  }

  .collapse-transition__loading {
    opacity: 0.3;
    pointer-events: none;
  }
</style>
