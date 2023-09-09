import { suite, test, expect } from "vitest";

import WalletsBitcoin from "./WalletsBitcoin";
import type {
  BitcoinAddressFormat,
  BitcoinPrivateKeyFormat,
  BitcoinWalletPayload,
} from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

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

const variants: BitcoinWalletPayload[] = [];
for (const formatAddress of ["tr", "pkh", "wpkh"] as BitcoinAddressFormat[]) {
  for (const formatPrivateKey of [
    "hex",
    "array",
    "mainnet",
    "testnet",
    "mainnet-uncompressed",
    "testnet-uncompressed",
  ] as BitcoinPrivateKeyFormat[]) {
    for (const isTestnet of [true, false]) {
      if (formatPrivateKey === "mainnet" && isTestnet) continue;
      if (formatPrivateKey === "mainnet-uncompressed" && isTestnet) continue;
      if (formatPrivateKey === "testnet" && !isTestnet) continue;
      if (formatPrivateKey === "testnet-uncompressed" && !isTestnet) continue;
      variants.push({
        formatAddress,
        formatPrivateKey,
        isTestnet,
      });
    }
  }
}

suite("WalletsBitcoin", () => {
  test.each(variants)(
    "should generate wallet correctly with payload: %o",
    async (payload) => {
      const walletGenerator = new WalletsBitcoin();
      const wallet1 = await walletGenerator.makeWallet(payload, key1);
      expect(JSON.stringify(wallet1)).toMatchSnapshot();

      const wallet2 = await walletGenerator.makeWallet(payload, key2);
      expect(JSON.stringify(wallet2)).toMatchSnapshot();
    },
  );

  test("should generate wallet correctly without initialPrivateKey", async () => {
    const walletGenerator = new WalletsBitcoin();

    const payload: BitcoinWalletPayload = {
      formatPrivateKey: "hex",
      formatAddress: "pkh",
      isTestnet: true,
    };

    const wallet = await walletGenerator.makeWallet(payload);

    expect(typeof wallet.address).toBe("string");
    expect(wallet.address.length).not.toBe(0);
    expect(typeof wallet.privateKey).toBe("string");
    expect(wallet.privateKey.length).not.toBe(0);
  });

  test("should throw error for invalid initialPrivateKey", async () => {
    const walletGenerator = new WalletsBitcoin();

    const payload: BitcoinWalletPayload = {
      formatPrivateKey: "hex",
      formatAddress: "pkh",
      isTestnet: true,
    };

    await expect(
      walletGenerator.makeWallet(payload, notValidKey1),
    ).rejects.toThrow("Invalid private key");
    await expect(
      walletGenerator.makeWallet(payload, notValidKey2),
    ).rejects.toThrow("offset is out of bounds");
  });
});
