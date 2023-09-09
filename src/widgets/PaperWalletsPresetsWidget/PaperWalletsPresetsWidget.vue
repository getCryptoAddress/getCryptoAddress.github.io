<script lang="ts" setup>
import {
  PaperWalletCanvas,
  ResizablePaperWalletWrapper,
} from "@/entities/PaperWallets";
import { usePaperWalletPresets } from "@/widgets/PaperWalletsPresetsWidget/model/usePaperWalletPresets";
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
import { ManualWalletForm } from "@/entities/CryptoWallets";
import { RedirectWalletToCreateWallet } from "@/features/RedirectWalletToCreateWallet";

const paperWalletPresets = usePaperWalletPresets();

const secret = ref("");
const address = ref("");
const platform = ref("");

const { SSR } = import.meta.env;

function setWallet() {
  paperWalletPresets.setWallet(secret.value, address.value, platform.value);
}

if (!SSR) {
  secret.value = history.state.secret || secret.value;
  address.value = history.state.address || address.value;
  platform.value = history.state.platform || platform.value;
}
setWallet();

function handleGeneratePaperWallets() {
  setWallet();
}
</script>

<template>
  <div>
    <ManualWalletForm
      v-model:secret="secret"
      v-model:address="address"
      v-model:platform="platform"
      @submit="handleGeneratePaperWallets"
    >
      <template #actions>
        <RedirectWalletToCreateWallet />
      </template>
    </ManualWalletForm>
    <NDivider />
    <NCollapseTransition :show="paperWalletPresets.loadedPresets.length > 0">
      <NList
        :showDivider="false"
        hoverable
      >
        <NListItem
          v-for="preset in paperWalletPresets.loadedPresets"
          :key="preset.name"
        >
          <NThing
            :title="preset.name"
            :description="preset.description"
          >
            <ResizablePaperWalletWrapper bordered>
              <PaperWalletCanvas
                :items="preset.paperWalletItems"
                view="VIEW"
              />
            </ResizablePaperWalletWrapper>
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
