import type {
  WalletFactoryPayload,
  WalletFactoryPrivateKey,
} from "./WalletFactory.types";
import type WalletsAbstract from "./WalletsAbstract";
import WalletsBitcoin from "./walletsBitcoin/WalletsBitcoin";
import WalletsEthereum from "./walletsEthereum/WalletsEthereum";

export default function WalletFactory(
  payload: WalletFactoryPayload,
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
