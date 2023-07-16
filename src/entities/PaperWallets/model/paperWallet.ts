import { defineStore } from "pinia";
import { computed, readonly, ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import getImage from "@/shared/lib/utils/getImage";

export const usePaperWallet = defineStore("paperWallet", () => {
  const items = ref<PaperWalletItem[]>([]);

  const revertedItems = computed(() => {
    return [...items.value].reverse();
  });

  function setItems(newItems: PaperWalletItem[]) {
    items.value = [...newItems];
  }

  function setRevertedItems(newItems: PaperWalletItem[]) {
    setItems([...newItems].reverse());
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
      weight: 400,
      position: {
        x: 10,
        y: 10,
        width: 300,
        rotate: 0,
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
        rotate: 0,
      },
    };

    items.value.push(item);
  }

  async function addItemQRCode(text = "QrCode") {
    const item: PaperWalletItem = {
      id: `${Date.now()}`,
      type: "QR_CODE",
      text,
      color: "#000000FF",
      background: "#00000000",
      position: {
        x: 0,
        y: 0,
        width: 100,
        rotate: 0,
      },
    };

    items.value.push(item);
  }

  return {
    items: readonly(items),
    revertedItems,
    setItems,
    setRevertedItems,
    updateItem,
    addItemText,
    addItemImage,
    addItemQRCode,
    removeItem,
  };
});
