import type {
  BitcoinWalletPayload,
  CryptoPlatformBitcoin,
} from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

type WalletPayload = {
  platform: CryptoPlatformBitcoin;
  payload: BitcoinWalletPayload;
};

export default WalletPayload;
