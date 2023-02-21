<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <IconLogo class="page-header-logo" />
</template>

<style scoped>
.page-header-logo {
  margin: 0 auto;
  fill: var(--textColor1);
  opacity: 0.85;
  animation: rotation 30s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
