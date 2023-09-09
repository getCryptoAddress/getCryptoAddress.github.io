import type {
  BitcoinPrivateKey,
  BitcoinWalletPayload,
  CryptoPlatformBitcoin,
} from "./walletsBitcoin/WalletsBitcoin.types";
import type {
  CryptoPlatformEthereum,
  EthereumPrivateKey,
  EthereumWalletPayload,
} from "./walletsEthereum/WalletsEthereum.types";

export type WalletFactoryPayload =
  | {
      platform: CryptoPlatformBitcoin;
      payload: BitcoinWalletPayload;
    }
  | {
      platform: CryptoPlatformEthereum;
      payload: EthereumWalletPayload;
    };

export type WalletFactoryCryptoPlatform =
  | CryptoPlatformBitcoin
  | CryptoPlatformEthereum;

export type WalletFactoryPrivateKey = EthereumPrivateKey | BitcoinPrivateKey;
