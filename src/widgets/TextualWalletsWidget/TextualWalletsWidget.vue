<script setup lang="ts">
import { NList, NDivider } from "naive-ui";
import SimpleProgress from "@/shared/ui/SimpleProgress/SimpleProgress.vue";
import CollapseTransition from "@/shared/ui/CollapseTransition/CollapseTransition.vue";
import {
  useWallet,
  KeyAddressItem,
  FormCreateWallets,
  type FormCreateWalletsPayload,
} from "@/entities/CryptoWallets";

const { SSR } = import.meta.env;

const { wallets, makeWallets, isLoading, count, totalCount } = useWallet();

function handleForm({ count, payload }: FormCreateWalletsPayload) {
  makeWallets(count, payload);
}
</script>

<template>
  <h1>Generate Secret keys and Address</h1>
  <FormCreateWallets @submit="handleForm" />
  <simple-progress :total="totalCount" :count="count" />
  <CollapseTransition
    v-if="!SSR"
    :show="wallets.length > 0"
    :loading="isLoading"
  >
    <n-divider />

    <n-list hoverable>
      <KeyAddressItem
        v-for="wallet in wallets"
        :key="wallet.privateKey"
        :key-formatted="wallet.privateKey"
        :address="wallet.address"
        :is-shown-qr-code="false"
      />
    </n-list>
  </CollapseTransition>
</template>
