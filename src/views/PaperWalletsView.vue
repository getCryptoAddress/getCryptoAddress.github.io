<script lang="ts" setup>
import { ref } from "vue";
import { NDivider, NInput, NSpace } from "naive-ui";
import UniversalMinimalistWallet from "@/components/PaperWallets/UniversalMinimalistWallet.vue";
import PaperWalletWrapper from "@/components/PaperWalletsWrapper/PaperWalletWrapper.vue";

const secret = ref("");
const address = ref("");
</script>
<template>
  <div class="paper-wallets">
    <h1>Paper Wallets</h1>
  </div>

  <n-space vertical>
    <n-input
      v-model:value="secret"
      placeholder="Secret key"
      type="textarea"
      :autosize="{
        minRows: 1,
        maxRows: 3,
      }"
      maxlength="154"
    />
    <n-input
      v-model:value="address"
      placeholder="Address"
      type="textarea"
      :autosize="{
        minRows: 1,
        maxRows: 3,
      }"
      maxlength="154"
    />
  </n-space>

  <n-divider />
  <div class="print-block">
    <PaperWalletWrapper>
      <UniversalMinimalistWallet :secret="secret" :address="address" />
    </PaperWalletWrapper>
  </div>
</template>
