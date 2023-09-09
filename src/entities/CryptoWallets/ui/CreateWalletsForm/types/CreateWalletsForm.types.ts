import type { WalletFactoryPayload } from "../../../lib/Wallets/WalletFactory.types";

export type FormCreateWalletsPayload = {
  count: number;
  payload: WalletFactoryPayload;
};
