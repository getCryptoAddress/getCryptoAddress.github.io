<script lang="ts" setup>
  import { ArrowDownload16Regular } from "@vicons/fluent";
  import mobile from "is-mobile";
  import {
    NButton,
    NDrawer,
    NDrawerContent,
    NIcon,
    useMessage,
  } from "naive-ui";
  import { nextTick, ref } from "vue";
  import {
    PaperWalletCanvas,
    PaperWalletDownloadForm,
  } from "@/entities/PaperWallets";
  import type {
    DownloadPaperWalletType,
    PaperWalletCanvasMode,
    PaperWalletItem,
  } from "@/entities/PaperWallets/types/PaperWallet.types";
  import isSafariOrIos from "@/shared/lib/browser/isSafariOrIos";
  import downloadHtmlAsImage from "@/shared/lib/downloadHtmlAsImage";

  defineProps<{
    items: PaperWalletItem[];
  }>();
  const message = useMessage();
  const canvasEl = ref();
  const isShown = ref(false);
  const isLoading = ref(false);
  const typeOfDownload = ref<DownloadPaperWalletType>("PNG");
  const canvasMode = ref<PaperWalletCanvasMode>("PRINT");
  const isSafariBrowser = isSafariOrIos();
  async function handleSubmitForm(payload: {
    typeOfDownload: DownloadPaperWalletType;
    canvasMode: PaperWalletCanvasMode;
  }) {
    canvasMode.value = payload.canvasMode;
    typeOfDownload.value = payload.typeOfDownload;
    isLoading.value = true;
  }
  async function handleDownload() {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, mobile() ? 500 : 1));

    try {
      let targetElement: HTMLElement | null = canvasEl.value?.targetElement;
      if (!targetElement) {
        isLoading.value = false;
        message.error("Problem with canvas element");
        return;
      }

      await downloadHtmlAsImage(
        targetElement,
        typeOfDownload.value,
        "paper-wallet",
        true,
      );
    } catch (e) {
      message.error(typeof e === "string" ? e : "Something went wrong");
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <NButton @click="isShown = !isShown">
    <template #icon>
      <NIcon>
        <ArrowDownload16Regular />
      </NIcon>
    </template>
    Download Image
  </NButton>

  <NDrawer
    v-model:show="isShown"
    :height="320"
    placement="bottom"
  >
    <NDrawerContent
      title="Download paper wallet"
      closable
    >
      <PaperWalletDownloadForm
        :loading="isLoading"
        @submit="handleSubmitForm"
      />
      <p v-if="isSafariBrowser">
        NB: <strong>IOS</strong> and <strong>Safari</strong> may not render
        images as expected the first time. If you encounter with current
        problem, just try downloading the image a second time.
      </p>
    </NDrawerContent>
  </NDrawer>

  <Teleport to="body">
    <div
      v-if="isLoading"
      style="
        position: fixed;
        overflow: hidden;
        display: grid;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      "
    >
      <div style="overflow: scroll">
        <PaperWalletCanvas
          :items="items"
          :view="canvasMode"
          @load="handleDownload"
          ref="canvasEl"
        />
      </div>
    </div>
  </Teleport>
</template>
