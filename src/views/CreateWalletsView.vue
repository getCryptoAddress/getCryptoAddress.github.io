<script setup lang="ts">
import FormCreateWallets from "@/components/FormCreateWallets/FormCreateWallets.vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
// import { useAddressStore } from "@/stores/address";

const privateKeysStore = usePrivateKeysStore();

// const addressStore = useAddressStore();

function handleForm({ count }: { count: number }) {
  privateKeysStore.generatePrivatesKeys(count);
}
</script>

<template>
  <FormCreateWallets @submit="handleForm" />

  WIP code:
  <pre>
  {{ privateKeysStore.formattedPrivateKeys }}
  </pre>
  <pre></pre>
</template>
