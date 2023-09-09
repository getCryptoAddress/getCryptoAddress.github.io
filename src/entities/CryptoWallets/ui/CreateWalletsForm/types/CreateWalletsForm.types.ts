import type { WalletFactoryPayload } from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";

export type FormCreateWalletsPayload = {
  count: number;
  payload: WalletFactoryPayload;
};
