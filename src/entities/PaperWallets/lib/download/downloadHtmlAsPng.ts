import { toPng } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default function downloadHtmlAsPng(
  targetElement: HTMLElement,
  filename: string
) {
  return toPng(targetElement)
    .then(downloadFileHandler(`${filename}.png`))
    .catch(() => {
      throw "Problem to convert to PNG";
    });
}
