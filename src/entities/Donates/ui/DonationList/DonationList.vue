<script setup lang="ts">
import BitcoinQrCode from "@/entities/Donates/ui/BitcoinQrCode/BitcoinQrCode.vue";
import EthereumQrCode from "@/entities/Donates/ui/EthereumQrCode/EthereumQrCode.vue";
</script>

<template>
  <div class="donation-list">
    <EthereumQrCode />
    <BitcoinQrCode />
  </div>
</template>

<style scoped lang="scss">
.donation-list {
  display: flex;
  gap: 1rem;
}
</style>
