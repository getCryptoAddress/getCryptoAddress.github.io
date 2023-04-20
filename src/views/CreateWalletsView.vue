<script setup lang="ts">
import FormCreateWallets from "@/components/FormCreateWallets/FormCreateWallets.vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
import { useAddressStore } from "@/stores/address";
import KeyAddressItem from "@/components/KeyAddressItem/KeyAddressItem.vue";
import { NList, NDivider, NCollapseTransition } from "naive-ui";
import { nextTick, ref } from "vue";
import type AddressFormat from "@/libs/Address/types/AddressFormat";
import type PrivateKeyFormatted from "@/libs/PrivateKeys/types/PrivateKeyFormatted";
import FilterCreateWallets from "@/components/FilterCreateWallets/FilterCreateWallets.vue";
// import type AddressFormat from "@/libs/Address/types/AddressFormat";
// import type PrivateKeyFormatted from "@/libs/PrivateKeys/types/PrivateKeyFormatted";

const privateKeysStore = usePrivateKeysStore();
const addressStore = useAddressStore();
const { SSR } = import.meta.env;
const result = ref<
  {
    address: Record<AddressFormat, string>;
    testAddress: Record<AddressFormat, string>;
    keyFormatted: PrivateKeyFormatted;
  }[]
>([]);

type Filter = {
  isTestNet: boolean;
  isShownQRCode: boolean;
  isPaper: boolean;
  selectedKeyFormats: keyof PrivateKeyFormatted;
  selectedAddressFormats: AddressFormat;
};
const filter = ref<Filter>({
  isTestNet: false,
  isShownQRCode: false,
  isPaper: false,
  selectedKeyFormats: "wifMainnet",
  selectedAddressFormats: "tr",
});

function setFilter(payload: Filter) {
  filter.value = payload;
}

async function handleForm({ count }: { count: number }) {
  result.value = [];
  await nextTick();
  // out of scope
  setTimeout(async () => {
    await privateKeysStore.generatePrivatesKeys(count);
    if (!privateKeysStore.formattedPrivateKeys) {
      result.value = [];
      return;
    }
    result.value = privateKeysStore.formattedPrivateKeys.map((key) => ({
      keyFormatted: key,
      address: addressStore.address.get(key.uint8Array),
      testAddress: addressStore.testAddress.get(key.uint8Array),
    }));
  }, 10);
}

function getKeyFormatted(keyFormatted: PrivateKeyFormatted): string {
  return keyFormatted[filter.value.selectedKeyFormats].toString();
}

function getAddresses(
  addresses: Record<AddressFormat, string>,
  testAddresses: Record<AddressFormat, string>
): string {
  const nextAddresses = filter.value.isTestNet ? testAddresses : addresses;
  return nextAddresses[filter.value.selectedAddressFormats];
}
</script>

<template>
  <h1>Generate Secret keys and Address</h1>
  <FormCreateWallets @submit="handleForm" />
  <n-collapse-transition v-if="!SSR" :show="result.length > 0">
    <n-divider />
    <FilterCreateWallets :results-count="result.length" @update="setFilter" />

    <n-list hoverable>
      <KeyAddressItem
        v-for="keyAddress in result"
        :key="keyAddress.keyFormatted.hex"
        :key-formatted="getKeyFormatted(keyAddress.keyFormatted)"
        :address="getAddresses(keyAddress.address, keyAddress.testAddress)"
        :is-shown-qr-code="filter.isShownQRCode"
      />
    </n-list>
  </n-collapse-transition>
</template>
