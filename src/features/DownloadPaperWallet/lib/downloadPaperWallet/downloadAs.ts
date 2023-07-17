import download from "downloadjs";
import { toJpeg, toPng } from "html-to-image";
import type DownloadPaperWalletType from "@/features/DownloadPaperWallet/types/DownloadPaperWalletType.type";

function downloadHandler(fileName: string) {
  return (dataUrl: string) => {
    if (!dataUrl) {
      throw "Canvas not rendered";
    }
    download(dataUrl, fileName);
  };
}

function downloadAsPNG(targetElement: HTMLElement) {
  return toPng(targetElement)
    .then(downloadHandler("paper-wallet.png"))
    .catch(() => {
      throw "Problem to convert to PNG";
    });
}
function downloadAsJPEG(targetElement: HTMLElement) {
  return toJpeg(targetElement, { quality: 0.95 })
    .then(downloadHandler("paper-wallet.jpeg"))
    .catch(() => {
      throw "Problem to convert to JPEG";
    });
}

export default function downloadAs(
  targetElement: HTMLElement,
  type: DownloadPaperWalletType
) {
  switch (type) {
    case "PNG":
      return downloadAsPNG(targetElement);
    case "JPEG":
      return downloadAsJPEG(targetElement);
  }
}
