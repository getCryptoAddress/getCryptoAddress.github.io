<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NSlider,
  NSpace,
} from "naive-ui";
import { ref } from "vue";
import type FormCreateWalletsPayload from "@/entities/CryptoWallets/ui/FormCreateWallets/types/FormCreateWalletsPayload.type";
import type CryptoPlatform from "@/entities/CryptoWallets/lib/Wallets/types/CryptoPlatform.type";
import FormCreateWalletsBitcoin from "@/entities/CryptoWallets/ui/FormCreateWallets/FormCreateWalletsBitcoin.vue";
import type { BitcoinWalletPayload } from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

const count = ref(20);
const platform = ref<CryptoPlatform>("Bitcoin");
const platforms: CryptoPlatform[] = ["Bitcoin"];
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
}

function updateBitcoinPayload(data: BitcoinWalletPayload) {
  bitcoinPayload.value = data;
}
</script>

<template>
  <n-form>
    <n-form-item label="Crypto wallet" path="type">
      <n-input
        v-for="platform in platforms"
        :key="platform"
        :value="platform"
        disabled
      />
    </n-form-item>
    <n-form-item label="Count tokens" path="count">
      <n-space class="form-create-wallets__space" vertical>
        <n-slider v-model:value="count" :step="10" :min="10" />
        <n-input-number v-model:value="count" :min="1" size="small" />
      </n-space>
    </n-form-item>
    <FormCreateWalletsBitcoin @update="updateBitcoinPayload" />
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
