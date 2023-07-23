import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import downloadHtmlAsPng from "@/entities/PaperWallets/lib/download/downloadHtmlAsPng";
import downloadHtmlAsJpeg from "@/entities/PaperWallets/lib/download/downloadHtmlAsJpeg";

export default function downloadPaperWallet(
  targetElement: HTMLElement,
  type: DownloadPaperWalletType
) {
  switch (type) {
    case "PNG":
      return downloadHtmlAsPng(targetElement, "paper-wallet");
    case "JPEG":
      return downloadHtmlAsJpeg(targetElement, "paper-wallet");
  }
}
