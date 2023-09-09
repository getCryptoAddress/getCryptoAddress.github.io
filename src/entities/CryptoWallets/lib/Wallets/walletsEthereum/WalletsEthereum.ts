import { keccak256 } from "ethereum-cryptography/keccak";
import { publicKeyCreate } from "ethereum-cryptography/secp256k1-compat";
import convertUint8ArrayToHex from "../../PrivateKeys/convertUint8ArrayToHex";
import generatePrivateKey from "../../PrivateKeys/generatePrivateKey";
import validatePrivateKey from "../../PrivateKeys/validatePrivateKey";
import type { Wallet } from "../useWallet.types";
import WalletsAbstract from "../WalletsAbstract";
import type {
  EthereumPrivateKey,
  EthereumWalletPayload,
} from "./WalletsEthereum.types";

export default class WalletsEthereum extends WalletsAbstract<
  EthereumWalletPayload,
  EthereumPrivateKey
> {
  async makeWallet(
    payload: EthereumWalletPayload,
    initialPrivateKey?: EthereumPrivateKey,
  ): Promise<Wallet> {
    const privateKey = await this.#getPrivateKey(initialPrivateKey);

    const publicKey = publicKeyCreate(privateKey, false).slice(1); // Remove the 04 prefix
    const address = keccak256(publicKey).slice(-20);

    return {
      privateKey: this.#getFormattedPrivateKey(privateKey),
      address: this.#getFormattedAddress(address),
    };
  }

  async #getPrivateKey(initialPrivateKey?: EthereumPrivateKey) {
    if (initialPrivateKey) {
      if (!(await validatePrivateKey(initialPrivateKey, 32))) {
        throw new Error("Invalid private key");
      }
      return initialPrivateKey;
    }
    return generatePrivateKey(32);
  }

  #getFormattedPrivateKey(key: Uint8Array): string {
    return "0x" + convertUint8ArrayToHex(key);
  }
  #getFormattedAddress(key: Uint8Array): string {
    return "0x" + convertUint8ArrayToHex(key);
  }
}
