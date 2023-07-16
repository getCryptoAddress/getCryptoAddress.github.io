<script lang="ts" setup>
import { NButton } from "naive-ui";
import { usePaperWallet } from "@/entities/PaperWallets";

const store = usePaperWallet();
</script>

<template>
  <NButton @click="store.setIsEditMode(!store.isEditMode)">
    <template v-if="store.isEditMode"> Preview Mode </template>
    <template v-else> Edit Mode </template>
  </NButton>
</template>
