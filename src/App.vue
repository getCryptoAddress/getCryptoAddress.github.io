<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import PageTemplate from "@/components/PageTemplate/PageTemplate.vue";
import PageHeaderDescription from "@/components/PageHeaderDescription/PageHeaderDescription.vue";
import { computed, ref } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";

import { useDark, useToggle } from "@vueuse/core";
import PageHeaderWrapper from "@/components/PageHeaderWrapper/PageHeaderWrapper.vue";
import PageHeaderLogo from "@/components/PageHeaderLogo/PageHeaderLogo.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.vue";
import ParanoidMode from "@/components/ParanoidMode/ParanoidMode.vue";

const isDark = useDark();
const themeProvider = computed(() => (isDark.value ? darkTheme : null));
const toggleDark = useToggle(isDark);

const route = useRoute();
const showParanoidMode = computed(() => !!route.meta.withParanoidMode);
const isParanoidMode = ref(false);
const isParanoidModeEnabled = ref(false);

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
          <PageHeaderLogo
            v-if="!SSR"
            :isParanoidModeEnabled="isParanoidModeEnabled"
          />
          <PageHeaderDescription />
          <nav>
            <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
            |
            <RouterLink :to="{ name: 'CreateWallet' }">
              Create Wallet
            </RouterLink>
            |
            <RouterLink :to="{ name: 'PaperWallets' }">
              Create Paper Wallet
            </RouterLink>
          </nav>
          <ThemeSwitcher :is-dark="isDark" @switch="switchTheme" />
          <div>
            <ParanoidMode
              :showParanoidMode="showParanoidMode"
              @is-paranoid-mode="isParanoidMode = $event"
              @is-paranoid-mode-enabled="isParanoidModeEnabled = $event"
            />
          </div>
        </PageHeaderWrapper>
      </template>
      <template #page>
        <RouterView />
      </template>
    </PageTemplate>
  </n-config-provider>
</template>
