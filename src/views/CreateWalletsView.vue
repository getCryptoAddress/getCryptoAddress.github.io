<script setup lang="ts">
import FormCreateWallets from "@/components/FormCreateWallets/FormCreateWallets.vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
import { useAddressStore } from "@/stores/address";

const privateKeysStore = usePrivateKeysStore();

const addressStore = useAddressStore();

function handleForm({ count }: { count: number }) {
  privateKeysStore.generatePrivatesKeys(count);
}
</script>

<template>
  <FormCreateWallets @submit="handleForm" />

  WIP code:
  <div v-for="key in privateKeysStore.formattedPrivateKeys" :key="key.hex">
    {{ key.hex }}: {{ addressStore.address.get(key.uint8Array) }}
  </div>
  <pre></pre>
</template>
