import validatePrivateKey from "@/entities/CryptoWallets/lib/PrivateKeys/validatePrivateKey";

type Size = 32;

export default async function generatePrivateKey(
  size: Size
): Promise<Uint8Array> {
  // create a typed array of 32 bytes (256 bits)
  const randomArray = new Uint8Array(size);
  // populate array with cryptographically secure random numbers
  window.crypto.getRandomValues(randomArray);

  if (!(await validatePrivateKey(randomArray, size))) {
    return generatePrivateKey(size);
  }
  return randomArray;
}
