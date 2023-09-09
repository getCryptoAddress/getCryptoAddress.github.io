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
  { value: "hex", label: "Hexadecimal" },
  { value: "wif", label: "Wallet Import Format" },
  { value: "wifUncompressed", label: "Wallet Import Format Uncompressed" },
];

const addressFormatOptions = [
  { value: "tr", label: "Taproot" },
  { value: "pkh", label: "P2PKH (Pay-to-Public-Key-Hash)" },
  { value: "wpkh", label: "P2WPKH (Pay-to-Witness-Public-Key-Hash)" },
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
  convertKeyFormat(props.payload.formatPrivateKey),
);
const selectedAddressFormats = ref<BitcoinAddressFormat>(
  props.payload.formatAddress,
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
  <NFormItem label="Is Testnet">
    <n-switch v-model:value="isTestNet" />
  </NFormItem>
  <NFormItem label="Key format">
    <NSelect
      v-model:value="selectedKeyFormats"
      :options="keyFormatOptions"
    />
  </NFormItem>
  <NFormItem label="Address format">
    <NSelect
      v-model:value="selectedAddressFormats"
      :options="addressFormatOptions"
    />
  </NFormItem>
</template>
