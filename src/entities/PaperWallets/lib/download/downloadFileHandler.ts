import download from "downloadjs";

export default function downloadFileHandler(fileName: string) {
  return (dataUrl: string) => {
    if (!dataUrl) {
      throw "Canvas not rendered";
    }
    download(dataUrl, fileName);
  };
}
