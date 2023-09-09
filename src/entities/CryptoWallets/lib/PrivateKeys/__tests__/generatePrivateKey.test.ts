import { assert, suite, test } from "vitest";
import generatePrivateKey from "../generatePrivateKey";
import { instantiateSecp256k1 } from "@bitauth/libauth";

suite("[Util] generatePrivateKey (size 32)", () => {
  test("Should generate a valid private key with correct length", async () => {
    const key = await generatePrivateKey(32);

    assert.equal(
      key.length,
      32,
      "Generated key doesn't have the correct length",
    );

    const secp256k1 = await instantiateSecp256k1();
    assert.isTrue(
      secp256k1.validatePrivateKey(key),
      "Generated key is not a valid private key",
    );
  });

  test("Should generate different private keys on multiple calls", async () => {
    const key1 = await generatePrivateKey(32);
    const key2 = await generatePrivateKey(32);

    assert.notEqual(key1, key2, "Generated keys are not unique");
  });
});
