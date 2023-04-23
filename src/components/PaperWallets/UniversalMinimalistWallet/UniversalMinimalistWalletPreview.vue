<script lang="ts" setup>
import PaperWalletWrapper from "@/components/PaperWalletsWrapper/PaperWalletWrapper.vue";
import UniversalMinimalistWallet from "@/components/PaperWallets/UniversalMinimalistWallet/UniversalMinimalistWallet.vue";

defineProps<{
  secret: string;
  address: string;
}>();
</script>
<template>
  <PaperWalletWrapper title="Universal Minimalist Wallet" type="svg">
    <UniversalMinimalistWallet :secret="secret" :address="address" />
  </PaperWalletWrapper>
</template>
