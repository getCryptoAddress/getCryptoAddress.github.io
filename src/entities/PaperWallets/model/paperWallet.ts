import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import getImage from "@/shared/lib/utils/getImage";

export const usePaperWallet = defineStore("paperWallet", () => {
  const items = ref<PaperWalletItem[]>([]);

  function setItems(newItems: PaperWalletItem[]) {
    items.value = [...newItems];
  }
  function updateItem(item: PaperWalletItem) {
    items.value = items.value.map((currentItem) =>
      currentItem.id === item.id ? item : currentItem
    );
  }

  function removeItem(item: PaperWalletItem) {
    items.value = items.value.filter(
      (currentItem) => currentItem.id !== item.id
    );
  }

  async function addItemText(text = "Text") {
    const item: PaperWalletItem = {
      id: `${Date.now()}`,
      type: "TEXT",
      text,
      align: "center",
      color: "#333333FF",
      size: 16,
      position: {
        x: 10,
        y: 10,
        width: 300,
      },
    };

    items.value.push(item);
  }

  async function addItemImage(src = "") {
    const { width } = await getImage(src);

    const item: PaperWalletItem = {
      id: `${Date.now()}`,
      type: "IMAGE",
      src,
      position: {
        x: 0,
        y: 0,
        width,
      },
    };

    items.value.push(item);
  }

  async function addItemQRCode(text = " ") {
    const item: PaperWalletItem = {
      id: `${Date.now()}`,
      type: "QR_CODE",
      text,
      position: {
        x: 0,
        y: 0,
        width: 100,
      },
    };

    items.value.push(item);
  }

  return {
    items: readonly(items),
    setItems,
    updateItem,
    addItemText,
    addItemImage,
    addItemQRCode,
    removeItem,
  };
});
