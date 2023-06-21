import type WalletPayload from "@/entities/CryptoWallets/lib/Wallets/types/WalletPayload.type";

type FormCreateWalletsPayload = {
  count: number;
  payload: WalletPayload;
};
export default FormCreateWalletsPayload;
