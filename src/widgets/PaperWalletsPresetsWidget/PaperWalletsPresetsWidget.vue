<script lang="ts" setup>
import { PaperWalletCanvas } from "@/entities/PaperWallets";
import { usePaperWalletPresets } from "@/widgets/PaperWalletsPresetsWidget/model/paperWalletPresets";
import { ref } from "vue";
import type { FormInst, FormRules } from "naive-ui";
import {
  NButton,
  NCollapseTransition,
  NDivider,
  NForm,
  NFormItem,
  NInput,
  NList,
  NListItem,
  NSpace,
  NThing,
} from "naive-ui";
import { DownloadPaperWallet } from "@/features/DownloadPaperWallet";
import { EditPaperWalletPreset } from "@/features/EditPaperWalletPreset";

const paperWalletPresets = usePaperWalletPresets();

const { SSR } = import.meta.env;

const formRef = ref<FormInst | null>(null);

const formValue = ref({
  secret: "",
  address: "",
});

if (!SSR) {
  formValue.value = {
    secret: history.state.secret || formValue.value.secret,
    address: history.state.secret || formValue.value.address,
  };
  history.replaceState(
    { ...history.state, address: null, secret: null, walletType: null },
    ""
  );
}
paperWalletPresets.setWallet(
  formValue.value.secret,
  formValue.value.address,
  "test" // todo
);

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
    paperWalletPresets.setWallet(
      formValue.value.secret,
      formValue.value.address,
      "test"
    );
  });
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    handleGeneratePaperWallets();
  }
}
</script>

<template>
  <div>
    <h1>Generate Paper Wallets</h1>

    <NForm
      @submit.prevent="handleGeneratePaperWallets"
      :model="formValue"
      :rules="rules"
      ref="formRef"
    >
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
      <NButton type="primary" attr-type="submit">
        Generate paper wallets
      </NButton>
    </NForm>

    <NDivider />
    <NCollapseTransition :show="paperWalletPresets.loadedPresets.length > 0">
      <NList :showDivider="false" hoverable>
        <NListItem
          v-for="preset in paperWalletPresets.loadedPresets"
          :key="preset.name"
        >
          <NThing :title="preset.name" :description="preset.description">
            <PaperWalletCanvas
              :items="preset.paperWalletItems"
              view="PREVIEW"
            />
            <template #action>
              <NSpace>
                <DownloadPaperWallet :items="preset.paperWalletItems" />
                <EditPaperWalletPreset :items="preset.paperWalletItems" />
              </NSpace>
            </template>
          </NThing>
        </NListItem>
      </NList>
    </NCollapseTransition>
  </div>
</template>
