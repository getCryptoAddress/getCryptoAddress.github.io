<script lang="ts" setup>
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletsWrapperOld/PaperWalletWrapper.vue";
import UniversalMinimalistWallet from "@/entities/PaperWallets/ui/PaperWalletsOld/UniversalMinimalistWallet/UniversalMinimalistWallet.vue";

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
