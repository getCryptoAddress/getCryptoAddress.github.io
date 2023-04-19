<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NSwitch, NForm, NFormItem, NSelect } from "naive-ui";

const emit = defineEmits<{
  (
    e: "update",
    payload: {
      isTestNet: boolean;
      isPaper: boolean;
      selectedKeyFormats: string;
      selectedAddressFormats: string;
    }
  ): void;
}>();

const isTestNet = ref(false);
const isPaper = ref(false);
const keyFormatOptions = [
  { value: "hex", label: "hex" },
  { value: "wif", label: "wif" },
  { value: "wifUncompressed", label: "wif uncompressed" },
];
// todo typing
const selectedKeyFormats = ref("wif");
const addressFormatOptions = [
  { value: "tr", label: "tr" },
  { value: "pkh", label: "pkh" },
  { value: "wpkh", label: "wpkh" },
];
const selectedAddressFormats = ref("tr");

watchEffect(() => {
  let nextSelectedKeyFormats = selectedKeyFormats.value;
  if (nextSelectedKeyFormats === "wif") {
    nextSelectedKeyFormats = isTestNet.value ? "wifTestnet" : "wifMainnet";
  }
  if (nextSelectedKeyFormats === "wifUncompressed") {
    nextSelectedKeyFormats = isTestNet.value
      ? "wifTestnetUncompressed"
      : "wifMainnetUncompressed";
  }

  emit("update", {
    isTestNet: isTestNet.value,
    isPaper: isPaper.value,
    selectedKeyFormats: nextSelectedKeyFormats,
    selectedAddressFormats: selectedAddressFormats.value,
  });
});
</script>

<template>
  <n-form
    label-placement="left"
    require-mark-placement="right-hanging"
    label-width="auto"
  >
    <n-form-item label="Is Testnet" path="createWallets.isTestNet">
      <n-switch v-model:value="isTestNet" />
    </n-form-item>
    <!--    <n-form-item label="Is Paper Wallet" path="createWallets.isPaper">-->
    <!--      <n-switch v-model:value="isPaper" />-->
    <!--    </n-form-item>-->
    <n-form-item label="Key format" path="createWallets.addressFormat">
      <n-select
        v-model:value="selectedKeyFormats"
        :options="keyFormatOptions"
      />
    </n-form-item>
    <n-form-item label="Address format" path="createWallets.addressFormat">
      <n-select
        v-model:value="selectedAddressFormats"
        :options="addressFormatOptions"
      />
    </n-form-item>
  </n-form>
</template>
