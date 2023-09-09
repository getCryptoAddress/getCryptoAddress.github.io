<script lang="ts" setup>
  import { ImageEdit16Regular } from "@vicons/fluent";
  import { NButton, NIcon } from "naive-ui";
  import { useRouter } from "vue-router";
  import { usePaperWallet } from "@/entities/PaperWallets";
  import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

  const props = defineProps<{
    items: PaperWalletItem[];
  }>();
  const store = usePaperWallet();
  const router = useRouter();
  function handleEditPaperWallet() {
    store.setItems(props.items);
    router.push({ name: "PaperWalletEditor" });
  }
</script>

<template>
  <NButton @click="handleEditPaperWallet">
    <template #icon>
      <NIcon>
        <ImageEdit16Regular />
      </NIcon>
    </template>
    Edit
  </NButton>
</template>
