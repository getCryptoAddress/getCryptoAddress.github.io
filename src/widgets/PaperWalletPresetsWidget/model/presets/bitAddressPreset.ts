import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import type Preset from "@/widgets/PaperWalletPresetsWidget/types/Preset.type";
import getImage from "@/shared/lib/utils/getImage";

async function getDefaultPresetItems(): Promise<PaperWalletItem[]> {
  const background = await import("./bitaddress_org.png");
  await getImage(background.default);
  return [
    {
      id: "background",
      type: "IMAGE",
      src: background.default,
      position: { x: -3, y: 0, width: 486, rotate: 0 },
    },
    {
      id: "qrcode-address",
      type: "QR_CODE",
      text: "{{ Address }}",
      color: "#000000FF",
      background: "#FFFFFFFF",
      position: { x: 14, y: 52, width: 94, rotate: 0 },
    },
    {
      id: "qrcode-secret",
      type: "QR_CODE",
      text: "{{ SecretKey }}",
      color: "#000000FF",
      background: "#FFFFFFFF",
      position: { x: 357, y: 104, width: 114, rotate: 0 },
    },
    {
      id: "text-address",
      type: "TEXT",
      text: "{{ Address }}",
      align: "center",
      color: "#333333FF",
      size: 10,
      weight: 800,
      position: { x: 17, y: 122, width: 250, rotate: -90 },
    },
    {
      id: "text-secret",
      type: "TEXT",
      text: "{{ SecretKey }}",
      align: "center",
      color: "#333333FF",
      size: 8,
      weight: 800,
      position: { x: 231, y: 116, width: 236, rotate: -90 },
    },
  ];
}

const bitAddressPreset: Preset = {
  name: "BitAddress",
  async preloadFn() {
    this.paperWalletItems = await getDefaultPresetItems();
  },
  paperWalletItems: [],
  status: "INIT",
};
export default bitAddressPreset;
