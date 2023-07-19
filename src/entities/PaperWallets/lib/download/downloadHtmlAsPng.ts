import { toPng } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default function downloadHtmlAsJpeg(targetElement: HTMLElement) {
  return toPng(targetElement)
    .then(downloadFileHandler("paper-wallet.png"))
    .catch(() => {
      throw "Problem to convert to PNG";
    });
}
