import type {
  CryptoPlatformEthereum,
  EthereumPrivateKey,
  EthereumWalletPayload,
} from "@/entities/CryptoWallets/lib/Wallets/walletsEthereum/WalletsEthereum.types";
import type {
  BitcoinPrivateKey,
  BitcoinWalletPayload,
  CryptoPlatformBitcoin,
} from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

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
