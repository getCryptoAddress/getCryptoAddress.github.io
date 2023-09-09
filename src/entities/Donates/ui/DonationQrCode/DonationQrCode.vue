<script lang="ts" setup>
  import { NCard } from "naive-ui";
  import QRCode from "@/shared/ui/QRCode/QRCode.vue";

  defineProps<{
    title: string;
    qrCodeText: string;
  }>();
</script>
<template>
  <NCard
    :title="title"
    class="donate-qr-code"
  >
    <QRCode
      :text="qrCodeText"
      :width="100"
    />
    {{ qrCodeText }}
  </NCard>
</template>

<style>
  .donate-qr-code {
    width: 200px;
    display: inline-block;
    text-align: center;
    flex-wrap: wrap;
  }
</style>
