import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePrivateKeysStore } from "../privateKeys";
import { useAddressStore } from "../address";
import { privateKey1, privateKey2, privateKey3 } from "./mocks/keys.mock";

describe("[Store] address", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("address generated", async () => {
    const privateKeysStore = usePrivateKeysStore();
    const addressStore = useAddressStore();
    const customKeys = [privateKey1, privateKey2, privateKey3];
    await privateKeysStore.setPrivateKeys(customKeys);

    expect(addressStore.address).toMatchSnapshot();
    expect(addressStore.testAddress).toMatchSnapshot();
  });
});
