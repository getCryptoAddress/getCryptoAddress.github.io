<script lang="ts" setup>
  import {
    NButton,
    NCheckbox,
    NCollapseTransition,
    NForm,
    NFormItem,
    NInputNumber,
    NSelect,
    NSlider,
    NSpace,
  } from "naive-ui";
  import { computed, ref } from "vue";
  import type { WalletFactoryCryptoPlatform } from "../../lib/Wallets/WalletFactory.types";
  import type { BitcoinWalletPayload } from "../../lib/Wallets/walletsBitcoin/WalletsBitcoin.types";
  import FormCreateWalletsBitcoin from "./CreateWalletsFormBitcoin.vue";
  import type { FormCreateWalletsPayload } from "./types/CreateWalletsForm.types";

  // todo need to refactor this component
  const count = ref(20);
  const platform = ref<WalletFactoryCryptoPlatform>("Bitcoin");
  const platforms: { label: string; value: WalletFactoryCryptoPlatform }[] = [
    {
      label: "Bitcoin",
      value: "Bitcoin",
    },
    {
      label: "Ethereum",
      value: "Ethereum",
    },
  ];
  const bitcoinPayload = ref<BitcoinWalletPayload>({
    isTestnet: false,
    formatPrivateKey: "mainnet",
    formatAddress: "tr",
  });
  const showAdvanced = ref(false);
  const isAdvancedPlatform = computed(() =>
    ["Bitcoin"].includes(platform.value),
  );

  const emit = defineEmits<{
    submit: [FormCreateWalletsPayload];
  }>();

  function handleForm() {
    if (platform.value === "Bitcoin" && bitcoinPayload.value) {
      emit("submit", {
        count: count.value,
        payload: {
          platform: platform.value,
          payload: bitcoinPayload.value,
        },
      });
    }
    if (platform.value === "Ethereum") {
      emit("submit", {
        count: count.value,
        payload: {
          platform: platform.value,
          payload: null,
        },
      });
    }
  }

  function updateBitcoinPayload(data: BitcoinWalletPayload) {
    bitcoinPayload.value = data;
  }
</script>

<template>
  <NForm>
    <NFormItem
      label="Crypto wallet"
      path="type"
    >
      <n-space
        class="form-create-wallets__space"
        vertical
      >
        <NSelect
          v-model:value="platform"
          :options="platforms"
        />
      </n-space>
    </NFormItem>
    <NFormItem
      label="Count tokens"
      path="count"
    >
      <n-space
        class="form-create-wallets__space"
        vertical
      >
        <n-slider
          v-model:value="count"
          :step="10"
          :min="10"
        />
        <NInputNumber
          v-model:value="count"
          :min="1"
          size="small"
        />
      </n-space>
    </NFormItem>
    <n-collapse-transition :show="isAdvancedPlatform">
      <NFormItem :show-label="false">
        <n-checkbox v-model:checked="showAdvanced">
          Show advanced settings
        </n-checkbox>
      </NFormItem>
    </n-collapse-transition>
    <n-collapse-transition :show="showAdvanced && isAdvancedPlatform">
      <FormCreateWalletsBitcoin
        v-if="platform === 'Bitcoin'"
        :payload="bitcoinPayload"
        @update="updateBitcoinPayload"
      />
    </n-collapse-transition>
    <n-button
      type="primary"
      @click="handleForm"
    >
      Generate new addresses
    </n-button>
  </NForm>
</template>

<style lang="scss" scoped>
  .form-create-wallets__space {
    width: 100%;
  }
</style>
