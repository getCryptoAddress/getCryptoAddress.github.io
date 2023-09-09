<script lang="ts" setup>
  import { NDescriptions, NDescriptionsItem } from "naive-ui";
  import { computed } from "vue";

  const props = defineProps<{
    platform: string;
    walletDetails: { label: string; data: string }[];
  }>();

  // todo typed and move to utils or component with translations
  const titles: Record<string, string> = {
    isTestnet: "Testnet",
    formatPrivateKey: "Private Key",
    formatAddress: "Address",
  };
  // todo typed and move to utils or component with translations
  const data: Record<string, string> = {
    mainnet: "WIF",
    testnet: "WIF",
    "mainnet-uncompressed": "WIF Uncompressed",
    "testnet-uncompressed": "WIF Uncompressed",
    hex: "HEX",
    false: "no",
    true: "yes",
  };

  const formattedWalletDetails = computed(() => {
    return props.walletDetails.map((detail) => ({
      label: titles[detail.label] || detail.label,
      data: data[detail.data] || detail.data,
    }));
  });
</script>
<template>
  <n-descriptions
    label-placement="top"
    title="Wallets"
  >
    <n-descriptions-item label="Platform">
      {{ platform }}
    </n-descriptions-item>
    <n-descriptions-item
      v-for="detail in formattedWalletDetails"
      :key="detail.label"
      :label="detail.label"
    >
      {{ detail.data }}
    </n-descriptions-item>
  </n-descriptions>
</template>
