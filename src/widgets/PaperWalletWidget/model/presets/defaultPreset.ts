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
    weight: 400,
    position: {
      x: 10,
      y: 10,
      width: 100,
      rotate: 0,
    },
  },
  {
    id: "3",
    type: "TEXT",
    text: "My text2",
    align: "center",
    size: 12,
    color: "#710000FF",
    weight: 400,
    position: {
      x: 100,
      y: 10,
      width: 100,
      rotate: 0,
    },
  },
  {
    id: `${Date.now()}`,
    type: "QR_CODE",
    text: "My text123",
    color: "#000000FF",
    background: "#00000000",
    position: {
      x: 100,
      y: 100,
      width: 100,
      rotate: 0,
    },
  },
];

const defaultPreset: Preset = {
  name: "Default",
  paperWalletItems: defaultPresetItems,
  status: "INIT",
};
export default defaultPreset;
