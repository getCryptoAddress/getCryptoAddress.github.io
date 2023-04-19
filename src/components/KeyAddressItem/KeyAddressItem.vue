<script lang="ts" setup>
import { NListItem, NTimeline, NTimelineItem } from "naive-ui";

defineProps<{
  address: string;
  keyFormatted: string;
}>();
</script>

<template>
  <n-list-item>
    <n-timeline>
      <n-timeline-item title="Private Key" :content="keyFormatted" />
      <n-timeline-item type="success" title="Address">
        {{ address }}
      </n-timeline-item>
    </n-timeline>
  </n-list-item>
</template>
