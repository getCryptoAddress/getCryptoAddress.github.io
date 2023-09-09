<script lang="ts" setup>
  import { QrCode20Regular } from "@vicons/fluent";
  import { NButton, NCard, NIcon, NModal, NThing, useMessage } from "naive-ui";
  import { ref } from "vue";
  import downloadHtmlAsImage from "@/shared/lib/downloadHtmlAsImage";
  import QRCode from "@/shared/ui/QRCode/QRCode.vue";

  defineProps<{
    address: string;
    secret: string;
  }>();

  const message = useMessage();

  function downloadSecretQrCode($event: MouseEvent) {
    const { currentTarget } = $event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      message.error("Something went wrong");
      return;
    }
    downloadHtmlAsImage(currentTarget, "PNG", "QRCodeSecret");
  }
  function downloadAddressQrCode($event: MouseEvent) {
    const { currentTarget } = $event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      message.error("Something went wrong");
      return;
    }
    downloadHtmlAsImage(currentTarget, "PNG", "QRCodeAddress");
  }

  const showModal = ref(false);
</script>

<template>
  <NButton @click="showModal = true">
    <template #icon>
      <NIcon>
        <QrCode20Regular />
      </NIcon>
    </template>
    QR Code
  </NButton>

  <NModal v-model:show="showModal">
    <NCard
      title="QR Code"
      :bordered="false"
      role="dialog"
      aria-modal="true"
      style="max-width: 300px"
    >
      <NThing
        title="Secret"
        :description="secret"
      >
        <QRCode
          :text="secret"
          @click="downloadSecretQrCode"
        />
      </NThing>
      <NThing
        title="Address"
        :description="address"
      >
        <QRCode
          :text="address"
          @click="downloadAddressQrCode"
        />
      </NThing>
    </NCard>
  </NModal>
</template>
