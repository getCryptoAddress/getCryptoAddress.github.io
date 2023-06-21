<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import PageTemplate from "@/shared/ui/PageTemplate/PageTemplate.vue";
import PageHeaderDescription from "@/old/components/PageHeaderDescription/PageHeaderDescription.vue";
import { computed, Ref, ref } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";

import { useDark, useToggle } from "@vueuse/core";
import PageHeaderWrapper from "@/old/components/PageHeaderWrapper/PageHeaderWrapper.vue";
import PageHeaderLogo from "@/old/components/PageHeaderLogo/PageHeaderLogo.vue";
import ThemeSwitcher from "@/entities/ThemeSwitcher/ThemeSwitcher.vue";
import ParanoidMode from "@/old/components/ParanoidMode/ParanoidMode.vue";

const isDark = useDark() as Ref<boolean>;
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
