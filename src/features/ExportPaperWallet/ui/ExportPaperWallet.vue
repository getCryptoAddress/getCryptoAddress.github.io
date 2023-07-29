<script lang="ts" setup>
import {
  NButton,
  NCard,
  NCode,
  NConfigProvider,
  NIcon,
  NModal,
  NSpace,
  useMessage,
} from "naive-ui";
import {
  ArrowExportUp20Regular,
  ClipboardCheckmark24Regular,
  ClipboardError24Regular,
  ClipboardTextRtl24Regular,
} from "@vicons/fluent";
import { computed, ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import highlight from "highlight.js/lib/core";
import jsonStyle from "highlight.js/lib/languages/json";
import copyToClipboard from "@/shared/lib/utils/copyToClipboard";

// todo simplify this component, move templates to entities
const props = defineProps<{
  items: PaperWalletItem[];
}>();

highlight.registerLanguage("json", jsonStyle);

const showModal = ref(false);

const code = computed(() => {
  return JSON.stringify(props.items, null, 2);
});

const message = useMessage();

const status = ref<"initial" | "coped" | "error">("initial");

// todo make common function
async function handleSaveToClipboard() {
  try {
    await copyToClipboard(code.value);
    message.success("Wallet code copied to clipboard");
    status.value = "coped";
  } catch (err) {
    message.error("Wallet code copy to clipboard failed");
    console.error("Error in copy to clipboard: ", err);
    status.value = "error";
  }
}
</script>

<template>
  <NButton @click="showModal = true">
    <template #icon>
      <NIcon>
        <ArrowExportUp20Regular />
      </NIcon>
    </template>
    Export
  </NButton>

  <NModal v-model:show="showModal">
    <NCard
      title="Export Paper Wallet design"
      :bordered="false"
      role="dialog"
      aria-modal="true"
      style="max-width: 600px"
    >
      <NSpace size="large" vertical>
        <div>
          You can export design for
          <a
            href="https://github.com/getCryptoAddress/getCryptoAddress.github.io/tree/master/src/widgets/PaperWalletsPresetsWidget/model/presets"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paper Wallets Presets
          </a>
          <p>P.s. Images need to be uploaded separately</p>
          <NButton @click="handleSaveToClipboard">
            <template #icon>
              <NIcon>
                <ClipboardTextRtl24Regular v-show="status === 'initial'" />
                <ClipboardCheckmark24Regular v-show="status === 'coped'" />
                <ClipboardError24Regular v-show="status === 'error'" />
              </NIcon>
            </template>
            Copy
          </NButton>
        </div>
        <NConfigProvider :hljs="highlight">
          <div class="export-paper-wallet__code">
            <NCode :code="code" language="json" show-line-numbers />
          </div>
        </NConfigProvider>
      </NSpace>
    </NCard>
  </NModal>
</template>

<style lang="scss" scoped>
.export-paper-wallet__code {
  overflow: auto;
  max-height: 315px;
  border: 1px solid var(--borderColor);
  border-radius: 5px;
  padding: 10px 15px;
}
</style>
