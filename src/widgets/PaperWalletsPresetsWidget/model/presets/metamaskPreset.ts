import type { PaperWalletItem } from "@/entities/PaperWallets/types/PaperWallet.types";
import type Preset from "@/widgets/PaperWalletsPresetsWidget/types/Preset.type";
import getCachedImageLink from "@/shared/lib/images/getCachedImageLink";

async function getDefaultPresetItems(): Promise<PaperWalletItem[]> {
  return [
    {
      id: "QR_SecretKey",
      type: "QR_CODE",
      text: "{{ SecretKey }}",
      color: "#000000FF",
      background: "#00000000",
      position: {
        x: 10,
        y: 130,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "QR_Address",
      type: "QR_CODE",
      text: "{{ Address }}",
      color: "#000000FF",
      background: "#00000000",
      position: {
        x: 10,
        y: 10,
        width: 120,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Text_Address",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "{{ Address }}",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 8,
      weight: 400,
      position: {
        x: 130,
        y: 40,
        width: 50,
        rotate: 0,
        transformOrigin: "top center",
      },
    },
    {
      id: "Text_SecretKey",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "{{ SecretKey }}",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 8,
      weight: 400,
      position: {
        x: 130,
        y: 160,
        width: 50,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Title_MetaMask",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "MetaMask",
      align: "center",
      alignLast: "auto",
      color: "#333333FF",
      size: 19,
      weight: 400,
      position: {
        x: 243,
        y: 118,
        width: 200,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "QR_CODE_LINK",
      type: "QR_CODE",
      text: "https://metamask.io/",
      color: "#000000FF",
      background: "#00000000",
      position: {
        x: 343,
        y: 15,
        width: 100,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Text_MetaMask_Info",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "1. Download MetaMask from the link above\n2. Scan the Secret Key in the application and import the account\n3. Transfer money to your personal account",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 12,
      weight: 400,
      position: {
        x: 243,
        y: 143,
        width: 200,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "MetaMaskLogo",
      type: "IMAGE",
      src: await getCachedImageLink(await import("./images/metamask.svg")),
      position: {
        x: 241,
        y: 17,
        width: 100,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Text_Link",
      font: "Courier New",
      type: "TEXT",
      text: "https://metamask.io/",
      align: "center",
      alignLast: "auto",
      color: "#333333FF",
      size: 6,
      weight: 400,
      position: {
        x: 343,
        y: 15,
        width: 100,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Text_Address_title",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "Address",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 16,
      weight: 400,
      position: {
        x: 130,
        y: 20,
        width: 100,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
    {
      id: "Text_Secret_title",
      font: "Trebuchet MS",
      type: "TEXT",
      text: "Secret",
      align: "left",
      alignLast: "auto",
      color: "#333333FF",
      size: 16,
      weight: 400,
      position: {
        x: 130,
        y: 140,
        width: 100,
        rotate: 0,
        transformOrigin: "center center",
      },
    },
  ];
}

const metamaskPreset: Preset = {
  name: "Metamask",
  async preloadFn() {
    this.paperWalletItems = await getDefaultPresetItems();
  },
  isShowFn: (platform) => platform === "Ethereum",
  paperWalletItems: [],
  status: "INIT",
};
export default metamaskPreset;
