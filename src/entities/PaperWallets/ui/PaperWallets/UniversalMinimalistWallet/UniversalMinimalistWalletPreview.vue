<script lang="ts" setup>
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletsWrapper/PaperWalletWrapper.vue";
import UniversalMinimalistWallet from "@/entities/PaperWallets/ui/PaperWallets/UniversalMinimalistWallet/UniversalMinimalistWallet.vue";

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
