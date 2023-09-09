import { encodePrivateKeyWif, instantiateSha256 } from "@bitauth/libauth";
import type { WalletImportFormatType } from "@bitauth/libauth/build/module/lib/key/wallet-import-format";

export default async function convertUint8ArrayToWif(
  uint8Array: Uint8Array,
  type: WalletImportFormatType,
): Promise<string> {
  const sha256 = await instantiateSha256();
  return encodePrivateKeyWif(sha256, uint8Array, type);
}
