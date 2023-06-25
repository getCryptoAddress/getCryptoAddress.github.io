<script lang="ts" setup>
import { NListItem, NSpace, NTimeline, NTimelineItem } from "naive-ui";
import { onMounted, ref, watch } from "vue";
import QRCode from "qrcode";

const canvasAddress = ref();
const canvasPrivateKey = ref();
const props = defineProps<{
  address: string;
  keyFormatted: string;
  isShownQrCode?: boolean;
}>();

function generateCanvasAddress() {
  if (!props.isShownQrCode) {
    return;
  }
  QRCode.toCanvas(canvasAddress.value, props.address, function (error) {
    if (error) console.error(error);
  });
}

function generateCanvasPrivateKey() {
  if (!props.isShownQrCode) {
    return;
  }
  QRCode.toCanvas(canvasPrivateKey.value, props.keyFormatted, function (error) {
    if (error) console.error(error);
  });
}

// function handleGeneratePaperWallets() {
//   router.push({
//     name: "PaperWallets",
//     state: {
//       address: props.address,
//       secret: props.keyFormatted,
//       type: "Bitcoin", // todo
//     },
//   });
// }

onMounted(() => {
  generateCanvasAddress();
  generateCanvasPrivateKey();
});

watch(
  () => props.isShownQrCode,
  (value) => {
    if (!value) {
      return;
    }
    generateCanvasAddress();
    generateCanvasPrivateKey();
  }
);
watch(
  () => props.address,
  () => {
    generateCanvasAddress();
  }
);
watch(
  () => props.keyFormatted,
  () => {
    generateCanvasPrivateKey();
  }
);
</script>

<template>
  <n-list-item>
    <n-timeline>
      <n-timeline-item title="Private Key">
        <n-space vertical :size="12">
          <div style="word-break: break-all">{{ keyFormatted }}</div>
          <div v-show="isShownQrCode">
            <canvas ref="canvasPrivateKey"></canvas>
          </div>
        </n-space>
      </n-timeline-item>
      <n-timeline-item type="success" title="Address">
        <n-space vertical :size="12">
          <div style="word-break: break-all">{{ address }}</div>
          <div v-show="isShownQrCode">
            <canvas ref="canvasAddress"></canvas>
          </div>
        </n-space>
      </n-timeline-item>
    </n-timeline>
    <n-space :size="5">
      <slot name="actions" />
    </n-space>
  </n-list-item>
</template>
