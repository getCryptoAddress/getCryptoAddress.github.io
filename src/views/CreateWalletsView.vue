<script setup lang="ts">
import FormCreateWallets from "@/components/FormCreateWallets/FormCreateWallets.vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
import { useAddressStore } from "@/stores/address";
import KeyAddressItem from "@/components/KeyAddressItem/KeyAddressItem.vue";
import { NList } from "naive-ui";
import { ref } from "vue";
import type AddressFormat from "@/libs/Address/types/AddressFormat";
import type PrivateKeyFormatted from "@/libs/PrivateKeys/types/PrivateKeyFormatted";

const privateKeysStore = usePrivateKeysStore();
const addressStore = useAddressStore();
const { SSR } = import.meta.env;
const result = ref<
  {
    address: Record<AddressFormat, string>;
    keyFormatted: PrivateKeyFormatted;
  }[]
>([]);

async function handleForm({ count }: { count: number }) {
  await privateKeysStore.generatePrivatesKeys(count);
  if (!privateKeysStore.formattedPrivateKeys) {
    result.value = [];
    return;
  }
  result.value = privateKeysStore.formattedPrivateKeys.map((key) => ({
    keyFormatted: key,
    address: addressStore.address.get(key.uint8Array),
  }));
}
</script>

<template>
  <FormCreateWallets @submit="handleForm" />

  <n-list v-if="!SSR" hoverable>
    <KeyAddressItem
      v-for="keyAddress in result"
      :key="keyAddress.keyFormatted.hex"
      :key-formatted="keyAddress.keyFormatted"
      :address="keyAddress.address"
    />
  </n-list>
</template>
