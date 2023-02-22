<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageTemplate from "@/components/PageTemplate/PageTemplate.vue";
import PageHeaderDescription from "@/components/PageHeaderDescription/PageHeaderDescription.vue";
import { computed } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";

import { useDark, useToggle } from "@vueuse/core";
import PageHeaderWrapper from "@/components/PageHeaderWrapper/PageHeaderWrapper.vue";
import PageHeaderLogo from "@/components/PageHeaderLogo/PageHeaderLogo.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.vue";

const isDark = useDark();
const themeProvider = computed(() => (isDark.value ? darkTheme : null));
const toggleDark = useToggle(isDark);

const { SSR } = import.meta.env;

function switchTheme() {
  toggleDark();
}
</script>

<template>
  <n-config-provider :theme="themeProvider">
    <PageTemplate>
      <template #navigation>
        <PageHeaderWrapper>
          <PageHeaderLogo v-if="!SSR" />
          <PageHeaderDescription />
          <nav>
            <RouterLink to="/">Home</RouterLink>
            |
            <RouterLink to="/create-wallet">Create Wallet</RouterLink>
          </nav>
          <ThemeSwitcher :is-dark="isDark" @switch="switchTheme" />
        </PageHeaderWrapper>
      </template>
      <template #page>
        <RouterView />
      </template>
    </PageTemplate>
  </n-config-provider>
</template>
