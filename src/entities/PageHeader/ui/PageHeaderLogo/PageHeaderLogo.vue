<script setup lang="ts">
import IconLogo from "@/shared/ui/icons/IconLogo.vue";
import IconParanoidLogo from "@/shared/ui/icons/IconParanoidLogo.vue";

defineProps<{
  isParanoidModeEnabled: boolean;
}>();
</script>

<template>
  <IconLogo
    v-show="!isParanoidModeEnabled"
    class="page-header-logo"
  />
  <IconParanoidLogo
    v-show="isParanoidModeEnabled"
    class="page-header-logo page-header-logo--paranoid"
  />
</template>

<style lang="scss" scoped>
.page-header-logo {
  margin: 0 auto;
  fill: var(--textColor1);
  opacity: 0.85;
  animation: rotation 30s infinite linear;

  &--paranoid {
    fill: #b84b4b;
    animation: rotation 30s reverse infinite linear;
  }
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
