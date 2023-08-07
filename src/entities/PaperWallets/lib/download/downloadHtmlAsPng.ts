import { toCanvas } from "html-to-image";
import downloadFileHandler from "@/entities/PaperWallets/lib/download/downloadFileHandler";

export default async function downloadHtmlAsPng(
  targetElement: HTMLElement,
  filename: string
) {
  try {
    const canvas = await toCanvas(targetElement);
    await new Promise((resolve) => setTimeout(resolve, 1));

    const dataURL = canvas.toDataURL();
    downloadFileHandler(`${filename}.png`)(dataURL);
  } catch {
    throw "Problem to convert to PNG";
  }
  // todo https://github.com/bubkoo/html-to-image/issues/420
  // return toPng(targetElement)
  //   .then(downloadFileHandler(`${filename}.png`))
  //   .catch(() => {
  //     throw "Problem to convert to PNG";
  //   });
}
