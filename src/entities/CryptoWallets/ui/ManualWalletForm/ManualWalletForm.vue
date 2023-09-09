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

  const emit = defineEmits<{
    submit: [];
    "update:secret": [string];
    "update:address": [string];
    "update:platform": [string];
  }>();

  const props = defineProps<{
    secret: string;
    address: string;
    platform: string;
  }>();

  const formModel = computed(() => {
    return {
      secret: props.secret,
      address: props.address,
      platform: props.platform,
    };
  });

  const options = computed<string[]>(() => {
    return ["Bitcoin", "Ethereum"].filter(
      (item) => item.includes(props.platform) && item !== props.platform,
    );
  });

  const formRef = ref<FormInst | null>(null);

  const rules: FormRules = {
    platform: [
      {
        required: true,
        message: "Please input platform",
        trigger: ["blur"],
      },
    ],
    secret: [
      {
        required: true,
        message: "Please input secret field",
        trigger: ["blur"],
      },
    ],
    address: [
      {
        required: true,
        message: "Please input address field",
        trigger: ["blur"],
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
      emit("submit");
    });
  }
</script>

<template>
  <NForm
    @submit.prevent="handleSubmit"
    :model="formModel"
    :rules="rules"
    ref="formRef"
  >
    <NFormItem
      label="Platform"
      path="platform"
    >
      <NAutoComplete
        :options="options"
        :value="platform"
        @update:value="emit('update:platform', $event)"
      />
    </NFormItem>
    <NFormItem
      label="Secret key"
      path="secret"
    >
      <NInput
        :value="secret"
        @update:value="emit('update:secret', $event)"
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
    <NFormItem
      label="Address"
      path="address"
    >
      <NInput
        :value="address"
        @update:value="emit('update:address', $event)"
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
      <NButton
        type="primary"
        attr-type="submit"
      >
        Get Paper Wallets
      </NButton>
      <slot name="actions" />
    </NSpace>
  </NForm>
</template>
