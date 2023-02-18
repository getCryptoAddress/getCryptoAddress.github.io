import { assert, describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePrivateKeysStore } from "../privateKeys";
import { instantiateSecp256k1 } from "@bitauth/libauth";
import type PrivateKeyFormat from "src/libs/PrivateKeys/types/PrivateKeyFormat";

const key1 = new Uint8Array([
  130, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
const key2 = new Uint8Array([
  201, 59, 114, 215, 208, 85, 88, 95, 8, 25, 187, 101, 2, 64, 233, 47, 162, 189,
  25, 66, 185, 4, 61, 245, 90, 86, 229, 154, 136, 217, 111, 133,
]);
const key3 = new Uint8Array([
  2, 241, 8, 120, 165, 66, 56, 141, 45, 212, 113, 234, 18, 6, 90, 33, 190, 120,
  117, 15, 251, 178, 238, 44, 141, 220, 116, 78, 115, 152, 67, 36,
]);

describe("[Store] Wallet", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("generatePrivatesKeys", async () => {
    const COUNT_KEYS = 51;
    const store = usePrivateKeysStore();
    assert.equal(
      store.privateKeys.length,
      0,
      "Initial store count is not empty"
    );

    await store.generatePrivatesKeys(COUNT_KEYS);
    const uniquePrivatesKeys = [
      ...new Set(store.privateKeys.map((item) => item.join())),
    ];
    assert.equal(
      uniquePrivatesKeys.length,
      COUNT_KEYS,
      `Initial store count is not ${COUNT_KEYS}`
    );

    const secp256k1 = await instantiateSecp256k1();

    assert.isTrue(
      store.privateKeys.every((privateKey) =>
        secp256k1.validatePrivateKey(privateKey)
      ),
      "Not all private keys are valid (wtf?)"
    );

    const expectedFormats: PrivateKeyFormat[] = [
      "uint8Array",
      "array",
      "hex",
      "wifMainnet",
      "wifMainnetUncompressed",
      "wifTestnet",
      "wifTestnetUncompressed",
    ];
    assert.isTrue(
      store.formattedPrivateKeys &&
        store.formattedPrivateKeys.every(
          (privateKey) =>
            JSON.stringify(Object.keys(privateKey).sort()) ===
            JSON.stringify(expectedFormats.sort())
        ),
      "Not all private keys have expected formats"
    );
  });

  it("setPrivateKeys", async () => {
    const store = usePrivateKeysStore();
    const customKeys = [key1, key2, key3];
    await store.setPrivateKeys(customKeys);
    assert.equal(
      store.privateKeys.length,
      customKeys.length,
      "Initial store count is not empty"
    );
  });

  it("setPrivateKeys", async () => {
    const store = usePrivateKeysStore();
    const customKeys = [key1, key2, key3];
    await store.setPrivateKeys(customKeys);
    assert.equal(
      store.privateKeys.length,
      customKeys.length,
      "Initial store count is not empty"
    );

    expect(store.privateKeys).toMatchSnapshot();
    expect(store.formattedPrivateKeys).toMatchSnapshot();
  });
});
