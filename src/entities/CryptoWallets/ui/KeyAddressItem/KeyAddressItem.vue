<script lang="ts" setup>
  import { NListItem, NSpace, NTimeline, NTimelineItem } from "naive-ui";

  defineProps<{
    address: string;
    keyFormatted: string;
  }>();
</script>

<template>
  <n-list-item>
    <n-timeline>
      <n-timeline-item title="Private Key">
        <n-space
          vertical
          :size="12"
        >
          <div style="word-break: break-all">{{ keyFormatted }}</div>
        </n-space>
      </n-timeline-item>
      <n-timeline-item
        type="success"
        title="Address"
      >
        <n-space
          vertical
          :size="12"
        >
          <div style="word-break: break-all">{{ address }}</div>
        </n-space>
      </n-timeline-item>
    </n-timeline>
    <n-space :size="5">
      <slot name="actions" />
    </n-space>
  </n-list-item>
</template>
