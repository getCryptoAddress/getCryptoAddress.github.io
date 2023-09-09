export { default as KeyAddressItem } from "./ui/KeyAddressItem/KeyAddressItem.vue";
export { default as FormCreateWallets } from "./ui/CreateWalletsForm/CreateWalletsForm.vue";
export { default as WalletDetails } from "./ui/WalletDetails/WalletDetails.vue";
export { default as ManualWalletForm } from "./ui/ManualWalletForm/ManualWalletForm.vue";
export { default as useWallet } from "./lib/Wallets/useWallet";

// types
export * from "./ui/CreateWalletsForm/types/CreateWalletsForm.types";

export type { WalletFactoryCryptoPlatform } from "./lib/Wallets/WalletFactory.types";
export type { Wallet } from "./lib/Wallets/useWallet.types";
