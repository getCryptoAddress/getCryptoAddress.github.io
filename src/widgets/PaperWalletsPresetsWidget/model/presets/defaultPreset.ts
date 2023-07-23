import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import type Preset from "@/widgets/PaperWalletsPresetsWidget/types/Preset.type";
import getCachedImageLink from "@/shared/lib/utils/getCachedImageLink";

async function getDefaultPresetItems(): Promise<PaperWalletItem[]> {
  return [
    {
      id: "secret-title",
      type: "TEXT",
      text: "Secret",
      align: "center",
      alignLast: "auto",
      size: 22,
      color: "#333333",
      weight: 700,
      position: {
        x: 30,
        y: 40,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "address-title",
      type: "TEXT",
      text: "Address",
      align: "center",
      alignLast: "auto",
      color: "#333333",
      size: 22,
      weight: 700,
      position: {
        x: 330,
        y: 40,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "address-qr-code",
      type: "QR_CODE",
      text: "{{ Address }}",
      color: "#000000FF",
      background: "#6A6A6A00",
      position: {
        x: 335,
        y: 67,
        width: 110,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "secret-qr-code",
      type: "QR_CODE",
      text: "{{ SecretKey }}",
      color: "#000000FF",
      background: "#00000000",
      position: {
        x: 35,
        y: 67,
        width: 110,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "type-title",
      type: "TEXT",
      text: "{{ Platform }}",
      align: "center",
      alignLast: "auto",
      color: "#333333FF",
      size: 26,
      weight: 700,
      position: {
        x: 150,
        y: 30,
        width: 180,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "secret-text",
      type: "TEXT",
      text: "{{ SecretKey }}",
      align: "center",
      alignLast: "center",
      color: "#333333FF",
      size: 10,
      weight: 300,
      position: {
        x: 30,
        y: 180,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "address-text",
      type: "TEXT",
      text: "{{ Address }}",
      align: "center",
      alignLast: "center",
      color: "#333333FF",
      size: 10,
      weight: 300,
      position: {
        x: 330,
        y: 180,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "wallet-title",
      type: "TEXT",
      text: "Wallet",
      align: "center",
      alignLast: "auto",
      color: "#333333FF",
      size: 26,
      weight: 700,
      position: {
        x: 150,
        y: 200,
        width: 180,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "1689855959723",
      type: "IMAGE",
      src: await getCachedImageLink(await import("./logo.svg")),
      position: {
        x: 180,
        y: 70,
        width: 120,
        rotate: 90,
        transformOrigin: "center center",
      },
    },
  ];
}

const defaultPreset: Preset = {
  name: "Default",
  async preloadFn() {
    this.paperWalletItems = await getDefaultPresetItems();
  },
  paperWalletItems: [],
  status: "INIT",
};
export default defaultPreset;