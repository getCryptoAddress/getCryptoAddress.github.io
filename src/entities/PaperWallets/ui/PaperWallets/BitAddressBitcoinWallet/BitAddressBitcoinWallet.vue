<script setup lang="ts">
import backgroundURL from "./bitaddress_org.png";
import { onMounted, ref, watch } from "vue";
import QRCode from "qrcode";

const props = defineProps<{
  secret: string;
  address: string;
}>();

function loadImg(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

const canvasEl = ref();

async function drownWallet() {
  if (!canvasEl.value) {
    return;
  }
  const ctx = canvasEl.value.getContext("2d");
  if (!ctx) {
    return;
  }

  const backgroundImage = await loadImg(backgroundURL);
  canvasEl.value.width = backgroundImage.width;
  canvasEl.value.height = backgroundImage.height;

  const address = await QRCode.toCanvas(props.address, { width: 95 });
  const secret = await QRCode.toCanvas(props.secret, { width: 110 });
  ctx.drawImage(backgroundImage, 0, 0);
  ctx.drawImage(address, 15, 45);
  ctx.drawImage(secret, 360, 105);
  ctx.font = "8px Inter";
  ctx.fillStyle = "black";
  ctx.save();

  ctx.textAlign = "center";
  ctx.translate(150, backgroundImage.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(props.address, 0, 0, 250);
  ctx.restore();

  ctx.translate(352, backgroundImage.height - 25);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(props.secret, 0, 0, backgroundImage.height - 30);
}

onMounted(() => {
  drownWallet();
});
watch(
  () => props.address,
  () => {
    drownWallet();
  }
);
watch(
  () => props.secret,
  () => {
    drownWallet();
  }
);
</script>
<template>
  <canvas ref="canvasEl" style="max-width: 100%; display: block" />
</template>

<style scoped></style>
