<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import PageTemplate from "@/shared/ui/PageTemplate/PageTemplate.vue";
import { computed, type Ref, ref } from "vue";
import { darkTheme, NConfigProvider, NMessageProvider } from "naive-ui";

import { useDark, useToggle } from "@vueuse/core";
import ThemeSwitcher from "@/entities/ThemeSwitcher/ThemeSwitcher.vue";
import ParanoidMode from "@/entities/ParanoidMode/ui/ParanoidMode.vue";
import { PageHeader } from "@/entities/PageHeader";
import { HeaderMetadata } from "@/entities/HeaderMetadata";

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

const metaDataProvider = computed(() => ({
  title: route.meta.title
    ? `${route.meta.title} - Get Crypto Address`
    : "Get Crypto Address",
  description: route.meta.description as string | undefined,
}));
</script>

<template>
  <HeaderMetadata
    :title="metaDataProvider.title"
    :description="metaDataProvider.description"
  />
  <n-config-provider :theme="themeProvider">
    <n-message-provider>
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
    </n-message-provider>
  </n-config-provider>
</template>
