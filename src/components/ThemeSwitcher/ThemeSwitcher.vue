<script lang="ts" setup>
import { WeatherMoon24Regular, WeatherSunny24Regular } from "@vicons/fluent";
import { NButton, NIcon } from "naive-ui";

const emit = defineEmits(["switch"]);
defineProps<{
  isDark: boolean;
}>();
</script>

<template>
  <div class="theme-switcher">
    <NButton @click="emit('switch')">
      <NIcon>
        <WeatherMoon24Regular v-show="!isDark" />
        <WeatherSunny24Regular v-show="isDark" />
      </NIcon>
      <span class="theme-switcher__text" v-show="!isDark">Dark Theme</span>
      <span class="theme-switcher__text" v-show="isDark">Light Theme</span>
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher__text {
  margin-left: 0.5rem;
}
</style>
