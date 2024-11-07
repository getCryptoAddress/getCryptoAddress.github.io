import { expect, suite, test } from "vitest";
import WalletsEthereum from "./WalletsEthereum";

const key1 = new Uint8Array([
  132, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
const key2 = new Uint8Array([
  133, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
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

suite("WalletsEthereum", () => {
  test("should generate wallet correctly", async () => {
    const walletGenerator = new WalletsEthereum();
    const wallet1 = await walletGenerator.makeWallet(null, key1);
    expect(JSON.stringify(wallet1)).toMatchSnapshot();

    const wallet2 = await walletGenerator.makeWallet(null, key2);
    expect(JSON.stringify(wallet2)).toMatchSnapshot();
  });

  test("should generate wallet correctly without initialPrivateKey", async () => {
    const walletGenerator = new WalletsEthereum();

    const wallet = await walletGenerator.makeWallet(null);

    expect(typeof wallet.address).toBe("string");
    expect(wallet.address.length).not.toBe(0);
    expect(typeof wallet.privateKey).toBe("string");
    expect(wallet.privateKey.length).not.toBe(0);
  });

  test("should throw error for invalid initialPrivateKey", async () => {
    const walletGenerator = new WalletsEthereum();

    await expect(
      walletGenerator.makeWallet(null, notValidKey1),
    ).rejects.toThrow("Invalid private key");
    await expect(
      walletGenerator.makeWallet(null, notValidKey2),
    ).rejects.toThrow("offset is out of bounds");
  });
});
