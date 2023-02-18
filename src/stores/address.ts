import { defineStore } from "pinia";
import { computed, readonly } from "vue";
import { usePrivateKeysStore } from "@/stores/privateKeys";
import getAddresses from "@/libs/Address/getAddresses";

export const useAddressStore = defineStore("address", () => {
  const privateKeysStore = usePrivateKeysStore();

  const address = computed(() =>
    privateKeysStore.privateKeys.map((key) => getAddresses(key, false))
  );
  const testAddress = computed(() =>
    privateKeysStore.privateKeys.map((key) => getAddresses(key, true))
  );

  return {
    address: readonly(address),
    testAddress: readonly(testAddress),
  };
});
