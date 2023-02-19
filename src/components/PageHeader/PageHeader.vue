<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <header class="page-header">
    <IconLogo class="page-header__logo" />
    <div>
      <h1>Get Crypto Address</h1>
      <div>Description description description</div>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  display: grid;
  text-align: center;
  gap: 20px;
}

.page-header__logo {
  margin: 0 auto;
  /*fill: var(--cui-body-color);*/
  fill: rgba(255, 255, 255, 0.87);
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
