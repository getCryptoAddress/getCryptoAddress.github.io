<script lang="ts" setup>
import PaperWalletWrapper from "@/old/components/PaperWalletsWrapper/PaperWalletWrapper.vue";
import BitAddressBitcoinWallet from "@/old/components/PaperWallets/BitAddressBitcoinWallet/BitAddressBitcoinWallet.vue";

defineProps<{
  secret: string;
  address: string;
}>();
</script>
<template>
  <PaperWalletWrapper
    title="BitAddress Bitcoin Wallet (Work in progress)"
    type="png"
  >
    <BitAddressBitcoinWallet :secret="secret" :address="address" />
  </PaperWalletWrapper>
</template>
