import { getAddress } from "micro-btc-signer";
import { NETWORK, TEST_NETWORK } from "micro-btc-signer";
export default function getAddresses(
  privateKey: Uint8Array,
  isTestnet = false
) {
  const cache: any = {};

  const network = isTestnet ? TEST_NETWORK : NETWORK;

  return Object.freeze({
    get tr() {
      if (!cache["tr"]) {
        cache["tr"] = getAddress("tr", privateKey, network);
      }
      return cache["tr"];
    },
    get pkh() {
      if (!cache["pkh"]) {
        cache["pkh"] = getAddress("pkh", privateKey, network);
      }
      return cache["pkh"];
    },
    get wpkh() {
      if (!cache["wpkh"]) {
        cache["wpkh"] = getAddress("wpkh", privateKey, network);
      }
      return cache["wpkh"];
    },
  });
}
