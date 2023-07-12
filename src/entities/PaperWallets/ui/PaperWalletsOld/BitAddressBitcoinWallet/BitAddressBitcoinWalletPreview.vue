<script lang="ts" setup>
import PaperWalletWrapper from "@/entities/PaperWallets/ui/PaperWalletsWrapperOld/PaperWalletWrapper.vue";
import BitAddressBitcoinWallet from "@/entities/PaperWallets/ui/PaperWalletsOld/BitAddressBitcoinWallet/BitAddressBitcoinWallet.vue";

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
