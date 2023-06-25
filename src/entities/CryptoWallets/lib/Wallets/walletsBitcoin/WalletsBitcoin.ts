import WalletsAbstract from "@/entities/CryptoWallets/lib/Wallets/WalletsAbstract";
import type Wallet from "@/entities/CryptoWallets/lib/Wallets/useWallet.types";
import generatePrivateKey from "@/entities/CryptoWallets/lib/PrivateKeys/generatePrivateKey";
import { getAddress, NETWORK, TEST_NETWORK } from "micro-btc-signer";
import convertUint8ArrayToHex from "@/entities/CryptoWallets/lib/PrivateKeys/convertUint8ArrayToHex";
import convertUint8ArrayToWif from "@/entities/CryptoWallets/lib/PrivateKeys/convertUint8ArrayToWif";
import type {
  BitcoinPrivateKey,
  BitcoinPrivateKeyFormat,
  BitcoinWalletPayload,
} from "./WalletsBitcoin.types";
import validatePrivateKey from "@/entities/CryptoWallets/lib/PrivateKeys/validatePrivateKey";

export default class WalletsBitcoin extends WalletsAbstract<
  BitcoinWalletPayload,
  BitcoinPrivateKey
> {
  async makeWallet(
    { formatPrivateKey, formatAddress, isTestnet }: BitcoinWalletPayload,
    initialPrivateKey?: BitcoinPrivateKey
  ): Promise<Wallet> {
    const nextPrivateKey = await this.#getPrivateKey(initialPrivateKey);

    const network = isTestnet ? TEST_NETWORK : NETWORK;
    const address = getAddress(formatAddress, nextPrivateKey, network);
    if (!address) {
      throw new Error("Invalid address");
    }
    const privateKey = await this.#getFormattedPrivateKey(
      nextPrivateKey,
      formatPrivateKey
    );

    return {
      privateKey,
      address,
    };
  }

  async #getPrivateKey(initialPrivateKey?: BitcoinPrivateKey) {
    if (initialPrivateKey) {
      if (!(await validatePrivateKey(initialPrivateKey, 32))) {
        throw new Error("Invalid private key");
      }
      return initialPrivateKey;
    }
    return generatePrivateKey(32);
  }

  async #getFormattedPrivateKey(
    key: Uint8Array,
    format: BitcoinPrivateKeyFormat
  ): Promise<string> {
    if (format === "hex") {
      return convertUint8ArrayToHex(key);
    }
    return convertUint8ArrayToWif(key, format);
  }
}
