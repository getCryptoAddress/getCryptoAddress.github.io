import { defineStore } from "pinia";
import { computed, readonly } from "vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
import getAddresses from "@/libs/Address/getAddresses";

export const useAddressStore = defineStore("address", () => {
  const privateKeysStore = usePrivateKeysStore();

  const address = computed(() =>
    privateKeysStore.privateKeys.reduce((result, key) => {
      result.set(key, getAddresses(key, false));
      return result;
    }, new Map())
  );
  const testAddress = computed(() =>
    privateKeysStore.privateKeys.reduce((result, key) => {
      result.set(key, getAddresses(key, true));
      return result;
    }, new Map())
  );

  return {
    address: readonly(address),
    testAddress: readonly(testAddress),
  };
});
