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
import type FormCreateWalletsPayload from "@/entities/CryptoWallets/ui/FormCreateWallets/types/FormCreateWalletsPayload.type";
import FormCreateWalletsBitcoin from "@/entities/CryptoWallets/ui/FormCreateWallets/FormCreateWalletsBitcoin.vue";
import type { BitcoinWalletPayload } from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";
import type { WalletFactoryCryptoPlatform } from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";

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
const isAdvancedPlatform = computed(() => ["Bitcoin"].includes(platform.value));

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
  <n-form>
    <n-form-item label="Crypto wallet" path="type">
      <n-space class="form-create-wallets__space" vertical>
        <n-select v-model:value="platform" :options="platforms" />
      </n-space>
    </n-form-item>
    <n-form-item label="Count tokens" path="count">
      <n-space class="form-create-wallets__space" vertical>
        <n-slider v-model:value="count" :step="10" :min="10" />
        <n-input-number v-model:value="count" :min="1" size="small" />
      </n-space>
    </n-form-item>
    <n-collapse-transition :show="isAdvancedPlatform">
      <n-form-item :show-label="false">
        <n-checkbox v-model:checked="showAdvanced">
          Show advanced settings
        </n-checkbox>
      </n-form-item>
    </n-collapse-transition>
    <n-collapse-transition :show="showAdvanced && isAdvancedPlatform">
      <FormCreateWalletsBitcoin
        v-if="platform === 'Bitcoin'"
        :payload="bitcoinPayload"
        @update="updateBitcoinPayload"
      />
    </n-collapse-transition>
    <n-button type="primary" @click="handleForm">
      Generate new addresses
    </n-button>
  </n-form>
</template>

<style lang="scss" scoped>
.form-create-wallets__space {
  width: 100%;
}
</style>
