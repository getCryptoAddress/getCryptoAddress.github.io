<script setup lang="ts">
import PageHeaderDescription from "@/entities/PageHeader/ui/PageHeaderDescription/PageHeaderDescription.vue";
import { RouterLink } from "vue-router";
import PageHeaderWrapper from "@/entities/PageHeader/ui/PageHeaderWrapper/PageHeaderWrapper.vue";
import PageHeaderLogo from "@/entities/PageHeader/ui/PageHeaderLogo/PageHeaderLogo.vue";

defineProps<{
  isParanoidMode: boolean;
}>();

const { SSR } = import.meta.env;
</script>

<template>
  <PageHeaderWrapper>
    <PageHeaderLogo v-if="!SSR" :isParanoidModeEnabled="isParanoidMode" />
    <PageHeaderDescription />
    <nav>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      |
      <RouterLink :to="{ name: 'CreateWallet' }"> Create Wallet </RouterLink>
      |
      <RouterLink :to="{ name: 'PaperWallets' }">
        Create Paper Wallet
      </RouterLink>
    </nav>
    <slot />
  </PageHeaderWrapper>
</template>
