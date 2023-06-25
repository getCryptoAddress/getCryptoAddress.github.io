import type { WalletFactoryPayload } from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";

type FormCreateWalletsPayload = {
  count: number;
  payload: WalletFactoryPayload;
};
export default FormCreateWalletsPayload;
