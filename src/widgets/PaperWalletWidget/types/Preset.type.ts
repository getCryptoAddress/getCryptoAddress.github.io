import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";

type Preset = {
  name: string;
  paperWalletItems: PaperWalletItem[];
  status: "INIT" | "PENDING" | "SUCCESS" | "ERROR";
};

export default Preset;
