<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInputNumber,
  NSelect,
  NSlider,
  NSpace,
} from "naive-ui";
import { ref } from "vue";
import type FormCreateWalletsPayload from "@/entities/CryptoWallets/ui/FormCreateWallets/types/FormCreateWalletsPayload.type";
import FormCreateWalletsBitcoin from "@/entities/CryptoWallets/ui/FormCreateWallets/FormCreateWalletsBitcoin.vue";
import type { BitcoinWalletPayload } from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";
import type { WalletFactoryCryptoPlatform } from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";

const count = ref(20);
const platform = ref<WalletFactoryCryptoPlatform>("Ethereum");
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
const bitcoinPayload = ref<BitcoinWalletPayload | null>(null);

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
    <FormCreateWalletsBitcoin
      v-if="platform === 'Bitcoin'"
      @update="updateBitcoinPayload"
    />
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
