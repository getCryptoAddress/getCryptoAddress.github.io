import { encodePrivateKeyWif, instantiateSha256 } from "@bitauth/libauth";
import type PrivateKeyFormatted from "./types/PrivateKeyFormatted";

export default async function getFormattedPrivateKey(
  randomArray: Uint8Array
): Promise<PrivateKeyFormatted> {
  const sha256 = await instantiateSha256();

  const cache: any = {};

  return Object.freeze({
    get uint8Array() {
      if (!cache["uint8Array"]) {
        cache["uint8Array"] = randomArray;
      }
      return cache["uint8Array"];
    },
    get array() {
      if (!cache["array"]) {
        cache["array"] = Object.freeze(Array.from(randomArray));
      }
      return cache["array"];
    },
    get hex() {
      if (!cache["hex"]) {
        cache["hex"] = Array.from(randomArray, function (byte) {
          return ("0" + (byte & 0xff).toString(16)).slice(-2);
        }).join("");
      }
      return cache["hex"];
    },
    get wifMainnet() {
      if (!cache["wifMainnet"]) {
        cache["wifMainnet"] = encodePrivateKeyWif(
          sha256,
          randomArray,
          "mainnet"
        );
      }
      return cache["wifMainnet"];
    },
    get wifMainnetUncompressed() {
      if (!cache["wifMainnetUncompressed"]) {
        cache["wifMainnetUncompressed"] = encodePrivateKeyWif(
          sha256,
          randomArray,
          "mainnet-uncompressed"
        );
      }
      return cache["wifMainnetUncompressed"];
    },
    get wifTestnet() {
      if (!cache["wifTestnet"]) {
        cache["wifTestnet"] = encodePrivateKeyWif(
          sha256,
          randomArray,
          "testnet"
        );
      }
      return cache["wifTestnet"];
    },
    get wifTestnetUncompressed() {
      if (!cache["wifTestnetUncompressed"]) {
        cache["wifTestnetUncompressed"] = encodePrivateKeyWif(
          sha256,
          randomArray,
          "testnet-uncompressed"
        );
      }
      return cache["wifTestnetUncompressed"];
    },
  });
}
