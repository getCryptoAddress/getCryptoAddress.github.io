import type DownloadPaperWalletType from "@/entities/PaperWallets/types/DownloadPaperWalletType.type";
import downloadHtmlAsPng from "@/entities/PaperWallets/lib/download/downloadHtmlAsPng";

export default function downloadPaperWallet(
  targetElement: HTMLElement,
  type: DownloadPaperWalletType
) {
  switch (type) {
    case "PNG":
      return downloadHtmlAsPng(targetElement, "paper-wallet");
    case "JPEG":
      return downloadHtmlAsPng(targetElement, "paper-wallet");
  }
}
