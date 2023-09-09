<script lang="ts" setup>
  import { ArrowHookDownLeft16Regular } from "@vicons/fluent";
  import { NButton, NIcon } from "naive-ui";
  import { usePaperWallet } from "@/entities/PaperWallets";

  const store = usePaperWallet();
</script>

<template>
  <NButton
    :disabled="!store.undoStack.length"
    @click="store.undo()"
  >
    <template #icon>
      <NIcon>
        <ArrowHookDownLeft16Regular />
      </NIcon>
    </template>
    Undo
  </NButton>
</template>
