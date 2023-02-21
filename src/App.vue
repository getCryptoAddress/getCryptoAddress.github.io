<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageTemplate from "@/components/PageTemplate/PageTemplate.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import { computed } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";

import { useDark } from "@vueuse/core";

const isDark = useDark();
const themeProvider = computed(() => (isDark.value ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="themeProvider">
    <PageTemplate>
      <template #navigation>
        <PageHeader />

        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/create-wallet">About</RouterLink>
          </nav>
        </div>
      </template>
      <template #page>
        <RouterView />
      </template>
    </PageTemplate>
  </n-config-provider>
</template>
