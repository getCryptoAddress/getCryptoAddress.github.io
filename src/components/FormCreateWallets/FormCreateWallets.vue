<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NSlider,
  NSpace,
} from "naive-ui";
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const count = ref(20);

function handleForm() {
  emit("submit", { count: count.value });
}
</script>

<template>
  <n-form>
    <n-form-item label="Crypto wallet" path="type">
      <n-input value="Bitcoin" disabled />
    </n-form-item>
    <n-form-item label="Count tokens" path="count">
      <n-space class="form-create-wallets__space" vertical>
        <n-slider v-model:value="count" :step="10" :min="10" />
        <n-input-number v-model:value="count" :min="1" size="small" />
      </n-space>
    </n-form-item>
    <n-button type="primary" @click="handleForm">Generate tokens</n-button>
  </n-form>
</template>

<style lang="scss" scoped>
.form-create-wallets__space {
  width: 100%;
}
</style>
