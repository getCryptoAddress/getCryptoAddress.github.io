<script lang="ts" setup>
import QRCode from "qrcode";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  text: string;
}>();

const canvasQRCode = ref();

function generateCanvasAddress() {
  if (!props.text) {
    return;
  }

  // todo or better svg?
  // QRCode.toString(props.text, { type: "svg" })
  //   .then((url) => {
  //     console.log(url);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  QRCode.toCanvas(canvasQRCode.value, props.text, function (error) {
    if (error) console.error(error);
  });
}

onMounted(() => {
  generateCanvasAddress();
});

watch(
  () => props.text,
  () => {
    generateCanvasAddress();
  }
);
</script>

<template>
  <canvas ref="canvasQRCode" />
</template>
