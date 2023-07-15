import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import type Preset from "@/widgets/PaperWalletWidget/types/Preset.type";

const defaultPresetItems: PaperWalletItem[] = [
  {
    id: "1",
    type: "TEXT",
    text: "My text",
    align: "center",
    color: "#710000FF",
    size: 15,
    position: {
      x: 10,
      y: 10,
      width: 100,
    },
  },
  {
    id: "3",
    type: "TEXT",
    text: "My text2",
    align: "center",
    size: 12,
    color: "#710000FF",
    position: {
      x: 100,
      y: 10,
      width: 100,
    },
  },
  {
    id: `${Date.now()}`,
    type: "QR_CODE",
    text: "My text123",
    position: {
      x: 100,
      y: 100,
      width: 100,
    },
  },
];

const defaultPreset: Preset = {
  name: "Default",
  paperWalletItems: defaultPresetItems,
  status: "INIT",
};
export default defaultPreset;