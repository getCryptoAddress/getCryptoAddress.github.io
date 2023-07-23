export type PaperWalletItemTypeText = "TEXT";
export type PaperWalletItemTypeImage = "IMAGE";
export type PaperWalletItemTypeQRCode = "QR_CODE";

export type PaperWalletItemType =
  | PaperWalletItemTypeText
  | PaperWalletItemTypeImage
  | PaperWalletItemTypeQRCode;

export type PaperWalletItemPosition = {
  x: number;
  y: number;
  width: number;
  rotate: number;
  transformOrigin: "top center" | "center center" | "bottom center";
};

export type PaperWalletItemText = {
  id: string;
  type: PaperWalletItemTypeText;
  text: string;
  size: number;
  align: "center" | "left" | "right" | "justify";
  alignLast: "auto" | "center" | "left" | "right" | "justify";
  weight: number;
  color: string;
  position: PaperWalletItemPosition;
};

export type PaperWalletItemImage = {
  id: string;
  type: PaperWalletItemTypeImage;
  src: string;
  position: PaperWalletItemPosition;
};
export type PaperWalletItemQRCode = {
  id: string;
  type: PaperWalletItemTypeQRCode;
  text: string;
  position: PaperWalletItemPosition;
  color: string;
  background: string;
};
export type PaperWalletItem =
  | PaperWalletItemText
  | PaperWalletItemImage
  | PaperWalletItemQRCode;

export type PaperWalletCanvasMode = "EDIT" | "VIEW" | "PRINT";
