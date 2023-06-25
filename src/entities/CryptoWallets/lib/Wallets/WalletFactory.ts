import type WalletsAbstract from "@/entities/CryptoWallets/lib/Wallets/WalletsAbstract";
import WalletsBitcoin from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin";
import WalletsEthereum from "@/entities/CryptoWallets/lib/Wallets/walletsEthereum/WalletsEthereum";
import type {
  WalletFactoryPayload,
  WalletFactoryPrivateKey,
} from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";

export default function WalletFactory(
  payload: WalletFactoryPayload
): WalletsAbstract<WalletFactoryPayload["payload"], WalletFactoryPrivateKey> {
  const { platform } = payload;

  switch (platform) {
    case "Bitcoin":
      return new WalletsBitcoin();
    case "Ethereum":
      return new WalletsEthereum();
    default:
      throw new Error(`Unknown platform: ${platform}`);
  }
}
