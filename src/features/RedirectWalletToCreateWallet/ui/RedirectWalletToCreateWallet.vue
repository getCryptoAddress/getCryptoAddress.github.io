<script lang="ts" setup>
import { NButton } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();
function handleCreateWallets() {
  router.push({
    name: "CreateWallets",
  });
}
</script>

<template>
  <NButton @click="handleCreateWallets"> Create Wallet </NButton>
</template>
