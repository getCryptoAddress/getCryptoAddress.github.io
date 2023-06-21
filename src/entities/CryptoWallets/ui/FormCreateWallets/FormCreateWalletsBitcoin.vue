<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { NSwitch, NFormItem, NSelect } from "naive-ui";
import type {
  BitcoinAddressFormat,
  BitcoinPrivateKeyFormat,
  BitcoinWalletPayload,
} from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

type PrivateKeyFormat = "hex" | "wif" | "wifUncompressed";

const emit = defineEmits<{
  update: [BitcoinWalletPayload];
}>();

const keyFormatOptions = [
  { value: "hex", label: "hex" },
  { value: "wif", label: "wif" },
  { value: "wifUncompressed", label: "wif uncompressed" },
];

const addressFormatOptions = [
  { value: "tr", label: "tr" },
  { value: "pkh", label: "pkh" },
  { value: "wpkh", label: "wpkh" },
];

const isTestNet = ref(false);
const selectedKeyFormats = ref<PrivateKeyFormat>("wif");
const selectedAddressFormats = ref<BitcoinAddressFormat>("tr");

const formattedSelectedKeyFormat = computed<BitcoinPrivateKeyFormat>(() => {
  if (selectedKeyFormats.value === "wif") {
    return isTestNet.value ? "testnet" : "mainnet";
  }
  if (selectedKeyFormats.value === "wifUncompressed") {
    return isTestNet.value ? "testnet-uncompressed" : "mainnet-uncompressed";
  }
  return selectedKeyFormats.value;
});

watchEffect(() => {
  emit("update", {
    isTestnet: isTestNet.value,
    formatPrivateKey: formattedSelectedKeyFormat.value,
    formatAddress: selectedAddressFormats.value,
  });
});
</script>

<template>
  <n-form-item label="Is Testnet">
    <n-switch v-model:value="isTestNet" />
  </n-form-item>
  <n-form-item label="Key format">
    <n-select v-model:value="selectedKeyFormats" :options="keyFormatOptions" />
  </n-form-item>
  <n-form-item label="Address format">
    <n-select
      v-model:value="selectedAddressFormats"
      :options="addressFormatOptions"
    />
  </n-form-item>
</template>
