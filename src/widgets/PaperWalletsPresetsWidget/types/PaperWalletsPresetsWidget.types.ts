import type { WalletFactoryCryptoPlatform } from "@/entities/CryptoWallets";
import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

export type Preset = {
  name: string;
  description?: string;
  paperWalletItems: PaperWalletItem[];
  status: "INIT" | "PENDING" | "SUCCESS" | "ERROR";
  isShowFn: (platform: WalletFactoryCryptoPlatform | string) => boolean;
  preloadFn?: () => Promise<void>;
};
