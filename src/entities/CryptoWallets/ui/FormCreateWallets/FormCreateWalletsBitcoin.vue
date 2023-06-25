<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { NFormItem, NSelect, NSwitch } from "naive-ui";
import type {
  BitcoinAddressFormat,
  BitcoinPrivateKeyFormat,
  BitcoinWalletPayload,
} from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

// todo need to refactor this component

type PrivateKeyFormat = "hex" | "wif" | "wifUncompressed";

const emit = defineEmits<{
  update: [BitcoinWalletPayload];
}>();

const props = defineProps<{
  payload: BitcoinWalletPayload;
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

function convertKeyFormat(format: BitcoinPrivateKeyFormat): PrivateKeyFormat {
  if (format === "mainnet" || format === "testnet") {
    return "wif";
  }
  if (format === "mainnet-uncompressed" || format === "testnet-uncompressed") {
    return "wifUncompressed";
  }
  return format;
}

const isTestNet = ref(props.payload.isTestnet);
const selectedKeyFormats = ref<PrivateKeyFormat>(
  convertKeyFormat(props.payload.formatPrivateKey)
);
const selectedAddressFormats = ref<BitcoinAddressFormat>(
  props.payload.formatAddress
);

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
