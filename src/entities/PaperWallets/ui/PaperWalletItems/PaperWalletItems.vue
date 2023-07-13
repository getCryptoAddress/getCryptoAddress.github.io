<script lang="ts" setup>
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import PaperWalletItemText from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItemText.vue";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import PaperWalletItemImage from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItemImage.vue";
import { NButton, NIcon, NSpace } from "naive-ui";
import { ArrowMove20Filled, Delete20Regular } from "@vicons/fluent";
import PaperWalletItemQRCode from "@/entities/PaperWallets/ui/PaperWalletItems/PaperWalletItemQRCode.vue";

const emit = defineEmits<{
  update: [PaperWalletItem[]];
}>();

const props = defineProps<{
  items: PaperWalletItem[];
}>();

function handleUpdateValue(item: PaperWalletItem) {
  const nextItems = props.items.map((i) => {
    if (i.id === item.id) {
      return item;
    }
    return i;
  });
  emit("update", nextItems);
}

function removeItem(item: PaperWalletItem) {
  emit(
    "update",
    props.items.filter((currentItem) => currentItem.id !== item.id)
  );
}

function handleChangeListOrder(items: PaperWalletItem[]) {
  emit("update", items);
}
</script>

<template>
  <div class="paper-wallet-canvas">
    <Draggable
      :model-value="items"
      @update:model-value="handleChangeListOrder"
      handle="[data-drag]"
    >
      <template v-for="item in items" :key="item.id">
        <PaperWalletItemText
          v-if="item.type === 'TEXT'"
          :item="item"
          @update="handleUpdateValue"
        >
          <n-space size="small" style="align-items: center">
            <n-button size="small" @click="removeItem(item)" circle>
              <template #icon>
                <NIcon>
                  <Delete20Regular />
                </NIcon>
              </template>
            </n-button>
            <div
              style="
                cursor: move;
                padding: 6px;
                border: 1px solid #7777;
                display: flex;
                border-radius: 30px;
              "
              data-drag
            >
              <NIcon>
                <ArrowMove20Filled />
              </NIcon>
            </div>
          </n-space>
        </PaperWalletItemText>
        <PaperWalletItemImage
          v-if="item.type === 'IMAGE'"
          :item="item"
          @update="handleUpdateValue"
        >
          <n-space size="small" style="align-items: center">
            <n-button size="small" @click="removeItem(item)" circle>
              <template #icon>
                <NIcon>
                  <Delete20Regular />
                </NIcon>
              </template>
            </n-button>
            <div
              style="
                cursor: move;
                padding: 6px;
                border: 1px solid #7777;
                display: flex;
                border-radius: 30px;
              "
              data-drag
            >
              <NIcon>
                <ArrowMove20Filled />
              </NIcon>
            </div>
          </n-space>
        </PaperWalletItemImage>
        <PaperWalletItemQRCode
          v-if="item.type === 'QR_CODE'"
          :item="item"
          @update="handleUpdateValue"
        >
          <n-space size="small" style="align-items: center">
            <n-button size="small" @click="removeItem(item)" circle>
              <template #icon>
                <NIcon>
                  <Delete20Regular />
                </NIcon>
              </template>
            </n-button>
            <div
              style="
                cursor: move;
                padding: 6px;
                border: 1px solid #7777;
                display: flex;
                border-radius: 30px;
              "
              data-drag
            >
              <NIcon>
                <ArrowMove20Filled />
              </NIcon>
            </div>
          </n-space>
        </PaperWalletItemQRCode>
      </template>
    </Draggable>
  </div>
</template>

<style scoped lang="scss"></style>
