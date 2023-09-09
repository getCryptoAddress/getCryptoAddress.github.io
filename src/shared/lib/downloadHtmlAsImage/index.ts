import convertHtmlToCanvas from "@/shared/lib/downloadHtmlAsImage/convertHtmlToCanvas";
import isSafariOrIos from "@/shared/lib/browser/isSafariOrIos";
import getPngDataUrl from "@/shared/lib/downloadHtmlAsImage/getPngDataUrl";
import getJpegDataUrl from "@/shared/lib/downloadHtmlAsImage/getJpegDataUrl";
import download from "downloadjs";

export default async function downloadHtmlAsImage(
  targetElement: HTMLElement,
  type: "JPEG" | "PNG",
  fileName: string,
  hasImages = false
) {
  const canvas =
    hasImages && isSafariOrIos()
      ? await convertHtmlToCanvas(targetElement, 10, 150) // safari loves pain
      : await convertHtmlToCanvas(targetElement);

  switch (type) {
    case "PNG":
      return download(getPngDataUrl(canvas), `${fileName}.png`);
    case "JPEG":
      return download(getJpegDataUrl(canvas), `${fileName}.jpeg`);
  }
}
