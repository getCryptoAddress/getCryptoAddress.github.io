<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui";
import { usePaperWallet } from "@/entities/PaperWallets/model/paperWallet";
import { ArrowHookDownLeft16Regular } from "@vicons/fluent";

const store = usePaperWallet();
</script>

<template>
  <NButton :disabled="!store.undoStack.length" @click="store.undo()">
    <template #icon>
      <NIcon>
        <ArrowHookDownLeft16Regular />
      </NIcon>
    </template>
    Undo
  </NButton>
</template>
