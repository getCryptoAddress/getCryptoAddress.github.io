<script lang="ts" setup>
  import {
    ClipboardCheckmark24Regular,
    ClipboardError24Regular,
    ClipboardTextRtl24Regular,
  } from "@vicons/fluent";
  import { NButton, NIcon, useMessage } from "naive-ui";
  import { ref } from "vue";
  import type { Wallet } from "@/entities/CryptoWallets";
  import copyToClipboard from "@/shared/lib/utils/copyToClipboard";

  const props = defineProps<{
    wallet: Wallet;
  }>();

  const message = useMessage();

  const status = ref<"initial" | "coped" | "error">("initial");

  async function handleSaveToClipboard() {
    const text = `${props.wallet.privateKey}:${props.wallet.address}`;
    try {
      await copyToClipboard(text);
      message.success("Wallet copied to clipboard");
      status.value = "coped";
    } catch (err) {
      message.error("Wallet copy to clipboard failed");
      console.error("Error in copy to clipboard: ", err);
      status.value = "error";
    }
  }
</script>

<template>
  <NButton
    @click="handleSaveToClipboard"
    data-test-id="button-copy-wallet-to-clipboard"
  >
    <template #icon>
      <NIcon>
        <ClipboardTextRtl24Regular v-show="status === 'initial'" />
        <ClipboardCheckmark24Regular v-show="status === 'coped'" />
        <ClipboardError24Regular v-show="status === 'error'" />
      </NIcon>
    </template>
    Copy
  </NButton>
</template>
