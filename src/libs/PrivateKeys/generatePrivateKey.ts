import { instantiateSecp256k1 } from "@bitauth/libauth";

export default async function generatePrivateKey(): Promise<Uint8Array> {
  // create a typed array of 32 bytes (256 bits)
  const randomArray = new Uint8Array(32);
  // populate array with cryptographically secure random numbers
  window.crypto.getRandomValues(randomArray);

  const secp256k1 = await instantiateSecp256k1();

  if (!secp256k1.validatePrivateKey(randomArray)) {
    return generatePrivateKey();
  }
  return Object.seal(randomArray);
}
