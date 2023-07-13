<script lang="ts" setup>
import QRCode from "qrcode";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  text: string;
  width?: number;
  color?: string;
  background?: string;
}>();

const QRCodeEl = ref();

function generateCanvasAddress() {
  if (!props.text) {
    return;
  }

  QRCode.toString(props.text, {
    type: "svg",
    width: props.width,
    color: {
      dark: props.color,
      light: props.background,
    },
  })
    .then((url) => {
      QRCodeEl.value.innerHTML = url;
    })
    .catch((err) => {
      console.error(err);
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
  <div ref="QRCodeEl" />
</template>
