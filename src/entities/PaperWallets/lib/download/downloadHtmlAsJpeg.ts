import { toCanvas } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default async function downloadHtmlAsJpeg(
  targetElement: HTMLElement,
  filename: string
) {
  try {
    const canvas = await toCanvas(targetElement);
    await new Promise((resolve) => setTimeout(resolve, 1));

    const dataURL = canvas.toDataURL("image/jpeg", 1);
    downloadFileHandler(`${filename}.png`)(dataURL);
  } catch {
    throw "Problem to convert to JPEG";
  }
  // todo https://github.com/bubkoo/html-to-image/issues/420
  // return toJpeg(targetElement, { quality: 0.95 })
  //   .then(downloadFileHandler(`${filename}.jpeg`))
  //   .catch(() => {
  //     throw "Problem to convert to JPEG";
  //   });
}
