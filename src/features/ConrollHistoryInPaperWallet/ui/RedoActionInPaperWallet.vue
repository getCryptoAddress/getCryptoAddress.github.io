<script lang="ts" setup>
  import { ArrowHookDownRight16Regular } from "@vicons/fluent";
  import { NButton, NIcon } from "naive-ui";
  import { usePaperWallet } from "@/entities/PaperWallets";

  const store = usePaperWallet();
</script>

<template>
  <NButton
    :disabled="!store.redoStack.length"
    @click="store.redo()"
  >
    <template #icon>
      <NIcon>
        <ArrowHookDownRight16Regular />
      </NIcon>
    </template>
    Redo
  </NButton>
</template>
