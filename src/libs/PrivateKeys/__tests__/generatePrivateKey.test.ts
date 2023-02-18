import { assert, describe, it } from "vitest";
import generatePrivateKey from "../generatePrivateKey";
import { instantiateSecp256k1 } from "@bitauth/libauth";

describe("[Util] generatePrivateKey", () => {
  it("Generate valid key", async () => {
    const key = await generatePrivateKey();
    assert.equal(key.length, 32, "Array don't have valid length");

    const secp256k1 = await instantiateSecp256k1();
    assert.isTrue(secp256k1.validatePrivateKey(key), "Not valid private key");
  });
});
