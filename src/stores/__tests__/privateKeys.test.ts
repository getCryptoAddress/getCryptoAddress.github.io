import { assert, describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePrivateKeysStore } from "../privateKeys";
import { instantiateSecp256k1 } from "@bitauth/libauth";
import type PrivateKeyFormat from "src/libs/PrivateKeys/types/PrivateKeyFormat";
import { privateKey1, privateKey2, privateKey3 } from "./mocks/keys.mock";

describe("[Store] privateKeys", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("privatesKeys generated", async () => {
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

  it("privateKeys set", async () => {
    const store = usePrivateKeysStore();
    const customKeys = [privateKey1, privateKey2, privateKey3];
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
