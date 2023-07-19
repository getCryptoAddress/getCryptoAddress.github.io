import { toJpeg } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default function downloadHtmlAsJpeg(targetElement: HTMLElement) {
  return toJpeg(targetElement, { quality: 0.95 })
    .then(downloadFileHandler("paper-wallet.jpeg"))
    .catch(() => {
      throw "Problem to convert to JPEG";
    });
}
