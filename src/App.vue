<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import PageTemplate from "@/shared/ui/PageTemplate/PageTemplate.vue";
import { computed, type Ref, ref } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";

import { useDark, useToggle } from "@vueuse/core";
import ThemeSwitcher from "@/entities/ThemeSwitcher/ThemeSwitcher.vue";
import ParanoidMode from "@/entities/ParanoidMode/ui/ParanoidMode.vue";
import { PageHeader } from "@/entities/PageHeader";

const isDark = useDark() as Ref<boolean>;
const themeProvider = computed(() => (isDark.value ? darkTheme : null));
const toggleDark = useToggle(isDark);

const route = useRoute();
const showParanoidMode = computed(() => !!route.meta.withParanoidMode);
const isParanoidMode = ref(false);
const isParanoidModeEnabled = ref(false);

function switchTheme() {
  toggleDark();
}
</script>

<template>
  <n-config-provider :theme="themeProvider">
    <PageTemplate>
      <template #navigation>
        <PageHeader :is-paranoid-mode="isParanoidModeEnabled">
          <ThemeSwitcher :is-dark="isDark" @switch="switchTheme" />
          <div>
            <ParanoidMode
              :showParanoidMode="showParanoidMode"
              @is-paranoid-mode="isParanoidMode = $event"
              @is-paranoid-mode-enabled="isParanoidModeEnabled = $event"
            />
          </div>
        </PageHeader>
      </template>
      <template #page>
        <RouterView />
      </template>
    </PageTemplate>
  </n-config-provider>
</template>
