<script setup lang="ts">
  import { NDivider, NList } from "naive-ui";
  import { ref } from "vue";
  import { CopyWalletToClipboard } from "@/features/CopyWalletToClipboard";
  import { RedirectWalletToPaperWallet } from "@/features/RedirectWalletToPaperWallet";
  import { ShowQrCodes } from "@/features/ShowQrCodes";
  import {
    FormCreateWallets,
    type FormCreateWalletsPayload,
    KeyAddressItem,
    useWallet,
    WalletDetails,
  } from "@/entities/CryptoWallets";
  import CollapseTransition from "@/shared/ui/CollapseTransition/CollapseTransition.vue";
  import SimpleProgress from "@/shared/ui/SimpleProgress/SimpleProgress.vue";

  const { SSR } = import.meta.env;

  const { wallets, makeWallets, isLoading, count, totalCount } = useWallet();
  const selectedPlatform = ref("");
  const walletDetailsPayload = ref<{ label: string; data: string }[]>([]);

  function handleForm({ count, payload }: FormCreateWalletsPayload) {
    makeWallets(count, payload);
    selectedPlatform.value = payload.platform;
    const walletPayload = payload.payload;
    if (!walletPayload) {
      walletDetailsPayload.value = [];
    } else {
      walletDetailsPayload.value = (
        Object.keys(walletPayload) as Array<keyof typeof walletPayload>
      ).map((key) => ({
        label: key.toString(),
        data: walletPayload[key] as string,
      }));
    }
  }
</script>

<template>
  <FormCreateWallets @submit="handleForm" />
  <simple-progress
    :total="totalCount"
    :count="count"
  />
  <CollapseTransition
    v-if="!SSR"
    :show="wallets.length > 0"
    :loading="isLoading"
  >
    <WalletDetails
      :platform="selectedPlatform"
      :wallet-details="walletDetailsPayload"
    />
    <n-divider />

    <n-list hoverable>
      <KeyAddressItem
        v-for="wallet in wallets"
        :key="wallet.privateKey"
        :key-formatted="wallet.privateKey"
        :address="wallet.address"
      >
        <template #actions>
          <CopyWalletToClipboard :wallet="wallet" />
          <RedirectWalletToPaperWallet
            :private-key="wallet.privateKey"
            :address="wallet.address"
            :platform="selectedPlatform"
          />
          <ShowQrCodes
            :address="wallet.address"
            :secret="wallet.privateKey"
          />
        </template>
      </KeyAddressItem>
    </n-list>
  </CollapseTransition>
</template>
