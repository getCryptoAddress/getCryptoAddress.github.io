import type { WalletImportFormatType } from "@bitauth/libauth/build/module/lib/key/wallet-import-format";

export type CryptoPlatformBitcoin = "Bitcoin";
export type BitcoinPrivateKey = Uint8Array;
export type BitcoinPrivateKeyFormat = "hex" | WalletImportFormatType;
export type BitcoinAddressFormat = "tr" | "pkh" | "wpkh";

export type BitcoinWalletPayload = {
  formatPrivateKey: BitcoinPrivateKeyFormat;
  formatAddress: BitcoinAddressFormat;
  isTestnet: boolean;
};
