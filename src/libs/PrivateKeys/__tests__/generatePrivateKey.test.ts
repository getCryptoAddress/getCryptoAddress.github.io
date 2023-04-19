import { assert, describe, it } from "vitest";
import generatePrivateKey from "../generatePrivateKey";
import { instantiateSecp256k1 } from "@bitauth/libauth";

describe("[Util] generatePrivateKey", () => {
  it("Should generate a valid private key with correct length", async () => {
    const key = await generatePrivateKey();

    assert.equal(
      key.length,
      32,
      "Generated key doesn't have the correct length"
    );

    const secp256k1 = await instantiateSecp256k1();
    assert.isTrue(
      secp256k1.validatePrivateKey(key),
      "Generated key is not a valid private key"
    );
  });

  it("Should generate different private keys on multiple calls", async () => {
    const key1 = await generatePrivateKey();
    const key2 = await generatePrivateKey();

    assert.notEqual(key1, key2, "Generated keys are not unique");
  });
});
