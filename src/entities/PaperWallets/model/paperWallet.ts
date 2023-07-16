import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import getImage from "@/shared/lib/utils/getImage";
import debounce from "lodash/debounce";

export const usePaperWallet = defineStore("paperWallet", () => {
  // todo temp place
  const prepareForChange = debounce(_prepareForChange, 200, {
    leading: true,
    trailing: false,
  });

  ////////// Items
  const items = ref<PaperWalletItem[]>([]);

  function setItems(newItems: PaperWalletItem[]) {
    prepareForChange();
    items.value = [...newItems];
  }

  function updateItem(item: PaperWalletItem) {
    prepareForChange();
    items.value = items.value.map((currentItem) =>
      currentItem.id === item.id ? item : currentItem
    );
  }

  function removeItem(item: PaperWalletItem) {
    prepareForChange();
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

    prepareForChange();
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

    prepareForChange();
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

    prepareForChange();
    items.value.push(item);
  }

  ////////// Reverted items
  const revertedItems = computed(() => {
    return [...items.value].reverse();
  });
  function setRevertedItems(newItems: PaperWalletItem[]) {
    setItems([...newItems].reverse());
  }

  ////////// Edit mode
  const isEditMode = ref(true);

  function setIsEditMode(value: boolean) {
    isEditMode.value = value;
  }

  ////////// Current item
  const selectedItemId = ref<string | null>(null);

  const selectedItem = computed<PaperWalletItem | null>(
    () => items.value.find((item) => item.id === selectedItemId.value) || null
  );
  function setSelectItem(item: PaperWalletItem | null) {
    if (!item) {
      selectedItemId.value = null;
      return;
    }
    selectedItemId.value = item.id;
  }

  ////////// History
  const undoStack = ref<PaperWalletItem[][]>([]);
  const redoStack = ref<PaperWalletItem[][]>([]);

  function undo() {
    if (!undoStack.value.length) {
      return;
    }
    const lastState = undoStack.value.splice(-1)[0];
    if (lastState) {
      redoStack.value.push(items.value);
      items.value = lastState;
    }
  }

  function redo() {
    if (!redoStack.value.length) {
      return;
    }
    const lastState = redoStack.value.splice(-1)[0];
    if (lastState) {
      undoStack.value.push(items.value);
      items.value = lastState;
    }
  }

  function _pushToUndoStack() {
    while (undoStack.value.length >= 15) {
      undoStack.value.shift();
    }
    undoStack.value.push([...items.value]);
  }

  function _clearRedoStack() {
    redoStack.value = [];
  }

  // Call this function before making any changes
  function _prepareForChange() {
    _pushToUndoStack();
    _clearRedoStack();
  }

  return {
    items,
    isEditMode,
    selectedItemId,
    undoStack,
    redoStack,
    selectedItem,
    revertedItems,
    setItems,
    setRevertedItems,
    updateItem,
    addItemText,
    addItemImage,
    addItemQRCode,
    removeItem,
    setIsEditMode,
    setSelectItem,
    undo,
    redo,
  };
});
