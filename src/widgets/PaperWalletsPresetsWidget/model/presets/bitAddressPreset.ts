import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import type Preset from "@/widgets/PaperWalletsPresetsWidget/types/Preset.type";
import getCachedImageLink from "@/shared/lib/images/getCachedImageLink";

async function getDefaultPresetItems(): Promise<PaperWalletItem[]> {
  return [
    {
      id: "background",
      type: "IMAGE",
      src: await getCachedImageLink(
        await import("./images/bitaddress_org.png"),
      ),
      position: {
        x: -3,
        y: 0,
        width: 486,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "qrcode-address",
      type: "QR_CODE",
      text: "{{ Address }}",
      color: "#000000FF",
      background: "#FFFFFFFF",
      position: {
        x: 14,
        y: 52,
        width: 94,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "qrcode-secret",
      type: "QR_CODE",
      text: "{{ SecretKey }}",
      color: "#000000FF",
      background: "#FFFFFFFF",
      position: {
        x: 357,
        y: 104,
        width: 114,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "text-address",
      font: "Courier New",
      type: "TEXT",
      text: "{{ Address }}",
      align: "center",
      alignLast: "auto",
      color: "#333333FF",
      size: 6,
      weight: 700,
      position: {
        x: 14,
        y: 130,
        width: 250,
        rotate: -90,
        transformOrigin: "top center",
      },
    },
    {
      id: "text-secret",
      font: "Courier New",
      type: "TEXT",
      text: "{{ SecretKey }}",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 6,
      weight: 700,
      position: {
        x: 228,
        y: 120,
        width: 230,
        rotate: -90,
        transformOrigin: "top center",
      },
    },
  ];
}

const bitAddressPreset: Preset = {
  name: "BitAddress paper wallet",
  async preloadFn() {
    this.paperWalletItems = await getDefaultPresetItems();
  },
  isShowFn: (platform) => platform === "Bitcoin",
  paperWalletItems: [],
  status: "INIT",
};
export default bitAddressPreset;
