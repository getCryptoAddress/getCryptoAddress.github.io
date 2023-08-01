<script setup lang="ts">
import {
  type FormInst,
  type FormRules,
  NAutoComplete,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NSpace,
} from "naive-ui";
import { computed, ref } from "vue";

// todo refactoring component

type FormManualWalletPayload = {
  secret: string;
  address: string;
  platform: string;
};

const emit = defineEmits<{
  submit: [FormManualWalletPayload];
}>();

const props = defineProps<{
  defaultValue: FormManualWalletPayload;
}>();

const formValue = ref<FormManualWalletPayload>({
  secret: props.defaultValue.secret || "",
  address: props.defaultValue.address || "",
  platform: props.defaultValue.platform || "Bitcoin",
});

const options = computed<string[]>(() => {
  return ["Bitcoin", "Ethereum"].filter(
    (item) =>
      item.includes(formValue.value.platform) &&
      item !== formValue.value.platform
  );
});

const formRef = ref<FormInst | null>(null);

const rules: FormRules = {
  platform: [
    {
      required: true,
      message: "Please input platform",
      trigger: ["input", "blur"],
    },
  ],
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

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    handleSubmit();
  }
}

function handleSubmit() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return;
    }
    emit("submit", {
      platform: formValue.value.platform,
      secret: formValue.value.secret,
      address: formValue.value.address,
    });
  });
}
</script>

<template>
  <NForm
    @submit.prevent="handleSubmit"
    :model="formValue"
    :rules="rules"
    ref="formRef"
  >
    <NFormItem label="Platform" path="platform">
      <NAutoComplete v-model:value="formValue.platform" :options="options" />
    </NFormItem>
    <NFormItem label="Secret key" path="secret">
      <NInput
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
    </NFormItem>
    <NFormItem label="Address" path="address">
      <NInput
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
    </NFormItem>
    <NSpace>
      <NButton type="primary" attr-type="submit"> Get Paper Wallets </NButton>
      <slot name="actions" />
    </NSpace>
  </NForm>
</template>
