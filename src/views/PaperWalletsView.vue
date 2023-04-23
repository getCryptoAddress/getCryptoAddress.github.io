<script lang="ts" setup>
import { ref } from "vue";
import {
  type FormInst,
  type FormRules,
  NButton,
  NCollapseTransition,
  NDivider,
  NForm,
  NFormItem,
  NInput,
  NSpace,
} from "naive-ui";
import UniversalMinimalistWalletPreview from "@/components/PaperWallets/UniversalMinimalistWallet/UniversalMinimalistWalletPreview.vue";
import BitAddressBitcoinWalletPreview from "@/components/PaperWallets/BitAddressBitcoinWallet/BitAddressBitcoinWalletPreview.vue";

const { SSR } = import.meta.env;

const secret = ref("");
const address = ref("");

if (!SSR) {
  secret.value = history.state.secret || secret.value;
  address.value = history.state.address || address.value;
  history.replaceState({ ...history.state, address: null, secret: null }, "");
}

const formRef = ref<FormInst | null>(null);

const formValue = ref({
  secret: "",
  address: "",
});

const rules: FormRules = {
  secret: [
    {
      required: true,
      message: "Please input secret field",
      trigger: ["input", "blur"],
    },
  ],
  address: [
    {
      required: true,
      message: "Please input address field",
      trigger: ["input", "blur"],
    },
  ],
};

function handleGeneratePaperWallets() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return;
    }
    secret.value = formValue.value.secret;
    address.value = formValue.value.address;
  });
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    handleGeneratePaperWallets();
  }
}
</script>
<template>
  <h1>Generate Paper Wallets</h1>

  <n-form
    @submit.prevent="handleGeneratePaperWallets"
    :model="formValue"
    :rules="rules"
    ref="formRef"
  >
    <n-form-item label="Secret key" path="secret">
      <n-input
        v-model:value="formValue.secret"
        placeholder="Input secret key"
        type="textarea"
        :autosize="{
          minRows: 1,
          maxRows: 3,
        }"
        @keydown.enter.space.prevent="handleKeydown"
        maxlength="154"
      />
    </n-form-item>
    <n-form-item label="Address" path="address">
      <n-input
        v-model:value="formValue.address"
        placeholder="Input address"
        type="textarea"
        @keydown.enter.space.prevent="handleKeydown"
        :autosize="{
          minRows: 1,
          maxRows: 3,
        }"
        maxlength="154"
      />
    </n-form-item>
    <n-button type="primary" attr-type="submit">
      Generate paper wallets
    </n-button>
  </n-form>

  <n-collapse-transition :show="!!(secret && address)">
    <n-divider />
    <n-space vertical :size="24">
      <UniversalMinimalistWalletPreview :address="address" :secret="secret" />
      <BitAddressBitcoinWalletPreview :address="address" :secret="secret" />
    </n-space>
  </n-collapse-transition>
</template>
