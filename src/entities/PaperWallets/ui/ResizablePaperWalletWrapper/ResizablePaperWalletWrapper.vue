<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
// todo refactoring component, simplify logic

const container = ref<HTMLDivElement>();
const wrapper = ref<HTMLDivElement>();
const scale = ref(1);
const height = ref<string>("auto");
const initialHeight = ref(0);
let resizeObserver: ResizeObserver | null = null;

function updateScale() {
  if (!container.value || !wrapper.value) {
    console.log("Container not found");
    return;
  }
  let scaleValue = container.value.offsetWidth / wrapper.value.offsetHeight;
  scale.value = scaleValue < 1 ? scaleValue : 1;
  height.value = `${initialHeight.value * scale.value}px`;
}

onMounted(() => {
  if (!container.value || !wrapper.value) return;
  initialHeight.value = container.value.offsetHeight;
  let containerWidth = container.value.offsetWidth;
  window.addEventListener("resize", updateScale);

  resizeObserver = new ResizeObserver(() => {
    if (!container.value) return;
    if (containerWidth !== container.value.offsetWidth) {
      containerWidth = container.value.offsetWidth;
      updateScale();
    }
  });

  updateScale();
  resizeObserver.observe(container.value);
});

onBeforeUnmount(() => {
  if (!container.value) return;
  if (resizeObserver) resizeObserver.unobserve(container.value);
  window.removeEventListener("resize", updateScale);
});
</script>

<template>
  <div ref="wrapper" class="wrapper">
    <div ref="container" class="container">
      <div
        class="area"
        :style="{ transform: `scale(${scale})`, height: height }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
}
.container {
  padding: 1px;
  overflow: hidden;
}

.area {
  transform-origin: top left;
  width: fit-content;
}
</style>
