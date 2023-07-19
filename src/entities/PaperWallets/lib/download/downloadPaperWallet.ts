import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import downloadHtmlAsJpeg from "@/entities/PaperWallets/lib/download/downloadHtmlAsPng";

export default function downloadPaperWallet(
  targetElement: HTMLElement,
  type: DownloadPaperWalletType
) {
  switch (type) {
    case "PNG":
      return downloadHtmlAsJpeg(targetElement);
    case "JPEG":
      return downloadHtmlAsJpeg(targetElement);
  }
}
