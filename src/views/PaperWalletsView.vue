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
} from "naive-ui";
import UniversalMinimalistWallet from "@/components/PaperWallets/UniversalMinimalistWallet.vue";
import PaperWalletWrapper from "@/components/PaperWalletsWrapper/PaperWalletWrapper.vue";

const secret = ref("");
const address = ref("");

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
        placeholder="type secret key"
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
        placeholder="Type address"
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

  <n-divider />
  <div class="print-block">
    <n-collapse-transition :show="!!(secret && address)">
      <PaperWalletWrapper>
        <UniversalMinimalistWallet :secret="secret" :address="address" />
      </PaperWalletWrapper>
    </n-collapse-transition>
  </div>
</template>
