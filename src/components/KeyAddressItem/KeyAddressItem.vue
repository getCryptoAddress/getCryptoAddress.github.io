<script lang="ts" setup>
import { NListItem } from "naive-ui";
import type AddressFormat from "@/libs/Address/types/AddressFormat";
import type PrivateKeyFormatted from "@/libs/PrivateKeys/types/PrivateKeyFormatted";

defineProps<{
  address: Record<AddressFormat, string>;
  keyFormatted: PrivateKeyFormatted;
}>();
</script>

<template>
  <n-list-item>
    {{ keyFormatted.hex }}:
    {{ address }}
  </n-list-item>
</template>
