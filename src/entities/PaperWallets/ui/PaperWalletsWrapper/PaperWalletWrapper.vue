<script lang="ts" setup>
import { NButton, NSpace } from "naive-ui";
import { ref } from "vue";

defineProps<{
  title: string;
  type: "svg" | "png";
}>();

const walletElementRef = ref();

function getSvgElement() {
  return walletElementRef.value.querySelector("svg");
}

function getCanvasElement() {
  return walletElementRef.value.querySelector("canvas");
}

function getSvgObjectURL(svgElement: SVGElement) {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  return URL.createObjectURL(blob);
}

function download(data: string, filename: string) {
  const link = document.createElement("a");
  link.href = data;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadSVG() {
  const svgElement = getSvgElement();
  const svgURL = getSvgObjectURL(svgElement);
  download(svgURL, "wallet.svg");
}

async function downloadPngFromSvg() {
  const svgElement = getSvgElement();
  const svgURL = getSvgObjectURL(svgElement);

  const img = new Image();
  img.src = svgURL;

  // Convert SVG to PNG
  await new Promise<void>((resolve) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = svgElement.clientWidth * 4;
      canvas.height = svgElement.clientHeight * 4;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      const pngData = canvas.toDataURL("image/png");

      download(pngData, "wallet.png");
      resolve();
    };
  });
}

function downloadPngFromCanvas() {
  const canvas = getCanvasElement();
  const pngData = canvas?.toDataURL("image/png");
  download(pngData, "wallet.png");
}
</script>

<template>
  <div class="paper-wallet-wrapper print-block">
    <n-space vertical :size="12">
      <div class="paper-wallet-wrapper__image" ref="walletElementRef">
        <slot />
      </div>
      <n-space vertical :size="5">
        <div>{{ title }}</div>
        <n-space v-if="type === 'svg'" :size="5">
          <n-button @click="downloadSVG">Download SVG</n-button>
          <n-button @click="downloadPngFromSvg">Download PNG</n-button>
        </n-space>
        <n-space v-if="type === 'png'" :size="5">
          <n-button @click="downloadPngFromCanvas">Download PNG</n-button>
        </n-space>
      </n-space>
    </n-space>
  </div>
</template>

<style lang="scss" scoped>
.paper-wallet-wrapper {
  display: flex;
  justify-content: center;
}

.paper-wallet-wrapper__image {
  display: inline-block;
  background: white;
  border: 1px dashed #ccc;
  border-radius: 4px;
}

html.dark {
  .paper-wallet-wrapper__image {
    border: none;
  }
}
</style>
