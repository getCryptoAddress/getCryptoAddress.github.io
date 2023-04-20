<script lang="ts" setup>
import { NButton, NSpace } from "naive-ui";
import { ref } from "vue";

const svgRef = ref();

function getSvgElement() {
  return svgRef.value.querySelector("svg");
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

async function downloadPNG() {
  const svgElement = getSvgElement();
  const svgURL = getSvgObjectURL(svgElement);

  const img = new Image();
  img.src = svgURL;

  // Convert SVG to PNG
  await new Promise<void>((resolve) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = svgElement.clientWidth;
      canvas.height = svgElement.clientHeight;
      ctx?.drawImage(img, 0, 0);

      const pngData = canvas.toDataURL("image/png");

      download(pngData, "wallet.png");
      resolve();
    };
  });
}
</script>

<template>
  <n-space vertical :size="12">
    <div class="paper-wallet-wrapper" ref="svgRef">
      <slot />
    </div>
    <n-space :size="5">
      <n-button @click="downloadSVG">Download SVG</n-button>
      <n-button @click="downloadPNG">Download PNG</n-button>
    </n-space>
  </n-space>
</template>

<style lang="scss" scoped>
.paper-wallet-wrapper {
  display: inline-block;
  background: white;
  border: 1px dashed #ccc;
  border-radius: 2px;
}
</style>
