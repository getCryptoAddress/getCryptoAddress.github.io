<script lang="ts" setup>
import { NButton } from "naive-ui";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import { usePaperWallet } from "@/entities/PaperWallets";
import { useRouter } from "vue-router";
import { ImageEdit16Regular } from "@vicons/fluent";

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
      <ImageEdit16Regular />
    </template>
    Edit
  </NButton>
</template>
