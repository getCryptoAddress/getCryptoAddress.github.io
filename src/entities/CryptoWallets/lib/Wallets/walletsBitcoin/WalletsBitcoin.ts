import { getAddress, NETWORK, TEST_NETWORK } from "@scure/btc-signer";
import convertUint8ArrayToHex from "../../PrivateKeys/convertUint8ArrayToHex";
import convertUint8ArrayToWif from "../../PrivateKeys/convertUint8ArrayToWif";
import generatePrivateKey from "../../PrivateKeys/generatePrivateKey";
import validatePrivateKey from "../../PrivateKeys/validatePrivateKey";
import type { Wallet } from "../useWallet.types";
import WalletsAbstract from "../WalletsAbstract";
import type {
  BitcoinPrivateKey,
  BitcoinPrivateKeyFormat,
  BitcoinWalletPayload,
} from "./WalletsBitcoin.types";

export default class WalletsBitcoin extends WalletsAbstract<
  BitcoinWalletPayload,
  BitcoinPrivateKey
> {
  async makeWallet(
    { formatPrivateKey, formatAddress, isTestnet }: BitcoinWalletPayload,
    initialPrivateKey?: BitcoinPrivateKey,
  ): Promise<Wallet> {
    const nextPrivateKey = await this.#getPrivateKey(initialPrivateKey);

    const network = isTestnet ? TEST_NETWORK : NETWORK;
    const address = getAddress(formatAddress, nextPrivateKey, network);
    if (!address) {
      throw new Error("Invalid address");
    }
    const privateKey = await this.#getFormattedPrivateKey(
      nextPrivateKey,
      formatPrivateKey,
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
    format: BitcoinPrivateKeyFormat,
  ): Promise<string> {
    if (format === "hex") {
      return convertUint8ArrayToHex(key);
    }
    return convertUint8ArrayToWif(key, format);
  }
}
