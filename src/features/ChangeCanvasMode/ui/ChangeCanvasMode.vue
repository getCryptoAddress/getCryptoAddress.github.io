<script lang="ts" setup>
  import { NSelect } from "naive-ui";
  import { usePaperWallet } from "@/entities/PaperWallets";
  import type { PaperWalletCanvasMode } from "@/entities/PaperWallets/types/PaperWallet.types";

  const store = usePaperWallet();

  const options: { label: string; value: PaperWalletCanvasMode }[] = [
    { label: "Edit Mode", value: "EDIT" },
    { label: "Preview Mode", value: "VIEW" },
    { label: "Print Mode", value: "PRINT" },
  ];
</script>

<template>
  <NSelect
    :value="store.canvasMode"
    @update:value="store.setCanvasMode"
    :options="options"
    :consistent-menu-width="false"
    :style="{ minWidth: '130px' }"
  />
</template>
