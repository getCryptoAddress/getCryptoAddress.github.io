<script lang="ts" setup>
import type { PaperWalletItemText } from "@/entities/PaperWallets/types/PaperWallet.types";
import { computed, nextTick, ref, type StyleValue } from "vue";

// todo Vue.js is not supporting contenteditable="plaintext-only" yet
const CONTENTEDITABLE_PLAINTEXT: any = "plaintext-only";

const props = defineProps<{
  item: PaperWalletItemText;
}>();

const emit = defineEmits<{
  updateText: [string];
}>();

const styles = computed<StyleValue>(() => {
  return {
    cursor: "move",
    position: "absolute",
    fontSize: props.item.size + "px",
    fontWeight: props.item.weight,
    textAlign: props.item.align,
    textAlignLast: props.item.alignLast,
    color: props.item.color,
    left: props.item.position.x + "px",
    top: props.item.position.y + "px",
    width: props.item.position.width + "px",
    overflowWrap: "anywhere",
    userSelect: "none",
    transform: `rotate(${props.item.position.rotate}deg)`,
    transformOrigin: props.item.position.transformOrigin,
    lineHeight: "normal",
  };
});

const editRef = ref<HTMLDivElement>();
const isEditable = ref(false);
const localText = ref("");
const text = computed(() => props.item.text.replace(/\n/g, "<br>"));

function handleEditText(e: Event) {
  const text = (e.target as HTMLElement)?.textContent || "";
  emit("updateText", text);
}

function handleStartEdit() {
  isEditable.value = true;
  localText.value = props.item.text;
  nextTick(() => {
    const el = editRef.value;
    if (!el) {
      return;
    }
    el.focus();
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
}

function handleCancelEdit() {
  isEditable.value = false;
}
</script>

<template>
  <div
    v-if="!isEditable"
    @dblclick="handleStartEdit"
    :style="styles"
    v-html="text"
  />
  <div
    v-else
    :contenteditable="CONTENTEDITABLE_PLAINTEXT"
    @blur="handleCancelEdit"
    @input="handleEditText"
    :style="styles"
    ref="editRef"
    v-html="localText"
    class="paper-wallet-canvas-text__editable"
  />
</template>

<style lang="scss" scoped>
.paper-wallet-canvas-text__editable {
  cursor: text;
}
</style>
