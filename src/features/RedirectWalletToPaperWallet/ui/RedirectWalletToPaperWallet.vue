<script lang="ts" setup>
  import { Print24Regular } from "@vicons/fluent";
  import { NButton, NIcon } from "naive-ui";
  import { useRouter } from "vue-router";

  const props = defineProps<{
    address: string;
    privateKey: string;
    platform: string;
  }>();

  const router = useRouter();
  function handleGeneratePaperWallets() {
    router.push({
      name: "PaperWallets",
      state: {
        address: props.address,
        secret: props.privateKey,
        platform: props.platform,
      },
    });
  }
</script>

<template>
  <NButton @click="handleGeneratePaperWallets">
    <template #icon>
      <NIcon>
        <Print24Regular />
      </NIcon>
    </template>
    Paper Wallet
  </NButton>
</template>
