import { suite, test, expect } from "vitest";
import validatePrivateKey from "@/entities/CryptoWallets/lib/PrivateKeys/validatePrivateKey";

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
  255, 19, 131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 81,
]);
const notValidKey2 = new Uint8Array([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1,
]);

suite("validatePrivateKey", () => {
  test("should validate a correct private key", async () => {
    const result1 = await validatePrivateKey(validKey1, 32);
    expect(result1).toBe(true);

    const result2 = await validatePrivateKey(validKey2, 32);
    expect(result2).toBe(true);
  });

  test("should throw error for an oversized private key", async () => {
    await expect(validatePrivateKey(notValidKey2, 32)).rejects.toThrow(
      "offset is out of bounds",
    );
  });

  test("should not validate a private key of correct size but invalid value", async () => {
    const result1 = await validatePrivateKey(notValidKey1, 32);
    expect(result1).toBe(false);
  });

  test("should throw error when key size argument is incorrect", async () => {
    await expect(validatePrivateKey(notValidKey2, 33 as any)).rejects.toThrow(
      "Invalid key size",
    );
  });
});
