<script lang="ts" setup>
import { PaperWalletCanvas } from "@/entities/PaperWallets";
import { usePaperWalletPresets } from "@/widgets/PaperWalletsPresetsWidget/model/paperWalletPresets";
import { ref } from "vue";
import {
  NCollapseTransition,
  NDivider,
  NList,
  NListItem,
  NSpace,
  NThing,
} from "naive-ui";
import { DownloadPaperWallet } from "@/features/DownloadPaperWallet";
import { EditPaperWalletPreset } from "@/features/EditPaperWalletPreset";
import ManualWalletForm from "@/entities/CryptoWallets/ui/ManualWalletForm/ManualWalletForm.vue";

// todo refactoring component
const paperWalletPresets = usePaperWalletPresets();

const { SSR } = import.meta.env;

const formValue = ref<{
  secret: string;
  address: string;
  platform: string;
}>({
  secret: "",
  address: "",
  platform: "",
});

if (!SSR) {
  formValue.value = {
    secret: history.state.secret || formValue.value.secret,
    address: history.state.address || formValue.value.address,
    platform: history.state.platform || formValue.value.platform,
  };
}
paperWalletPresets.setWallet(
  formValue.value.secret,
  formValue.value.address,
  formValue.value.platform
);

function handleGeneratePaperWallets(payload: {
  secret: string;
  address: string;
  platform: string;
}) {
  formValue.value.secret = payload.secret;
  formValue.value.address = payload.address;
  formValue.value.platform = payload.platform;

  paperWalletPresets.setWallet(
    formValue.value.secret,
    formValue.value.address,
    formValue.value.platform
  );
}
</script>

<template>
  <div>
    <h1>Generate Paper Wallets</h1>
    <ManualWalletForm
      :default-value="formValue"
      @submit="handleGeneratePaperWallets"
    />
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