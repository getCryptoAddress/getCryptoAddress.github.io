import { instantiateSecp256k1 } from "@bitauth/libauth";

type Size = 32;

export default async function validatePrivateKey(
  key: Uint8Array,
  size: Size,
): Promise<boolean> {
  if (size === 32) {
    const secp256k1 = await instantiateSecp256k1();
    return secp256k1.validatePrivateKey(key);
  }
  throw new Error("Invalid key size");
}
