import { assert, describe, it } from "vitest";
import validatePrivateKeys from "@/libs/PrivateKeys/isValidPrivateKeys";

const validKey1 = new Uint8Array([
  130, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
const validKey2 = new Uint8Array([
  130, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);

const notValidKey1 = new Uint8Array([
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
  255, 19, 131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);

const notValidKey2 = new Uint8Array([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1,
]);

describe("[PrivateKeys][Util] isValidPrivateKeys", () => {
  it("Validate keys", async () => {
    assert.isTrue(
      await validatePrivateKeys([validKey1]),
      "[validKey1] should be valid"
    );
    assert.isTrue(
      await validatePrivateKeys([validKey1, validKey2]),
      "[validKey1,validKey2] should be valid"
    );
    assert.isFalse(
      await validatePrivateKeys([notValidKey1]),
      "[notValidKey1] should be invalid"
    );
    assert.isFalse(
      await validatePrivateKeys([notValidKey2]),
      "[notValidKey2] should be invalid"
    );
    assert.isFalse(
      await validatePrivateKeys([validKey1, notValidKey1]),
      "[validKey1, notValidKey1] should be invalid"
    );
  });
});
