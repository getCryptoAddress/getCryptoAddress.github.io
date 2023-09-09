<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui";
import { usePaperWallet } from "@/entities/PaperWallets";
import { ArrowHookDownRight16Regular } from "@vicons/fluent";

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
