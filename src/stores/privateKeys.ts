import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import generatePrivateKey from "@/libs/PrivateKeys/generatePrivateKey";
import isValidPrivateKeys from "@/libs/PrivateKeys/isValidPrivateKeys";
import type PrivateKeyFormatted from "@/libs/PrivateKeys/types/PrivateKeyFormatted";
import getFormattedPrivateKey from "@/libs/PrivateKeys/getFormattedPrivateKey";

export const usePrivateKeysStore = defineStore("privateKeys", () => {
  const privateKeys = ref<Uint8Array[]>([]);
  const formattedPrivateKeys = ref<PrivateKeyFormatted[]>();

  async function _generatePrivateKeys() {
    formattedPrivateKeys.value = await Promise.all(
      privateKeys.value.map((key) => getFormattedPrivateKey(key))
    );
  }

  async function setPrivateKeys(keys: (number[] | Uint8Array)[]) {
    const copyKeys = keys.map((key) => new Uint8Array([...key]));

    if (!(await isValidPrivateKeys(copyKeys))) {
      throw new Error("Not valid private keys");
    }
    privateKeys.value = copyKeys;
    await _generatePrivateKeys();
  }

  async function generatePrivatesKeys(count: number) {
    const keys = [];
    for (let i = 0; i < count; i += 1) {
      keys.push(await generatePrivateKey());
    }
    privateKeys.value = keys;
    await _generatePrivateKeys();
  }

  return {
    privateKeys: readonly(privateKeys),
    formattedPrivateKeys: readonly(formattedPrivateKeys),
    generatePrivatesKeys,
    setPrivateKeys,
  };
});
