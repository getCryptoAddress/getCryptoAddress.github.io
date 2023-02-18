import { instantiateSecp256k1 } from "@bitauth/libauth";

export default async function isValidPrivateKeys(keys: Uint8Array[]) {
  const secp256k1 = await instantiateSecp256k1();
  try {
    return keys.every(secp256k1.validatePrivateKey);
  } catch (e) {
    return false;
  }
}
