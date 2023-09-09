<script setup lang="ts">
  import { useDark } from "@vueuse/core";
  import throttle from "lodash/throttle";
  import { computed, onBeforeUnmount, onMounted, type Ref, ref } from "vue";

  const area = ref<HTMLDivElement>();

  const isDark = useDark() as Ref<boolean>;

  const scale = ref(1);
  const height = ref<string>("auto");

  const props = defineProps<{ bordered?: boolean }>();

  const containerStyles = computed(() => ({
    "resizable-paper-wallet-wrapper__container": true,
    "resizable-paper-wallet-wrapper__bordered": props.bordered,
    "resizable-paper-wallet-wrapper__bordered--dark":
      props.bordered && isDark.value,
  }));

  function getMaxWidthFromChildren(el: HTMLDivElement) {
    return Math.max(
      0,
      ...[...el.children].map((el) =>
        el instanceof HTMLDivElement ? el.offsetWidth : 0,
      ),
    );
  }

  const updateScale = throttle(() => {
    if (!area.value) {
      console.error("Container not found");
      return;
    }

    const maxWidth = getMaxWidthFromChildren(area.value);
    if (!maxWidth) {
      return;
    }

    const scaleValue = area.value.offsetWidth / maxWidth;
    scale.value = scaleValue < 1 ? scaleValue : 1;
    height.value = `${area.value.offsetHeight * scale.value}px`;
  }, 100);

  onMounted(() => {
    window.addEventListener("resize", updateScale);
    updateScale();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateScale);
  });
</script>

<template>
  <div class="resizable-paper-wallet-wrapper">
    <div
      ref="container"
      :class="containerStyles"
      :style="{ height: height }"
    >
      <div
        class="resizable-paper-wallet-wrapper__area"
        ref="area"
        :style="{ transform: `scale(${scale})` }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .resizable-paper-wallet-wrapper {
    display: grid;
  }
  .resizable-paper-wallet-wrapper__container {
    max-width: fit-content;
    overflow: hidden;
  }

  .resizable-paper-wallet-wrapper__bordered {
    border-radius: 4px;
    outline: 1px dashed #ccc;
    &--dark {
      outline: none;
    }
  }

  .resizable-paper-wallet-wrapper__area {
    transform-origin: top left;
  }
</style>
