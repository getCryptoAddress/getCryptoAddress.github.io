import { toJpeg } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default function downloadHtmlAsJpeg(
  targetElement: HTMLElement,
  filename: string
) {
  return toJpeg(targetElement, { quality: 0.95 })
    .then(downloadFileHandler(`${filename}.jpeg`))
    .catch(() => {
      throw "Problem to convert to JPEG";
    });
}
