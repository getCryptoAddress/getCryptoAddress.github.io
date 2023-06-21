import { ref } from "vue";
import type WalletPayload from "@/entities/CryptoWallets/lib/Wallets/types/WalletPayload.type";
import type Wallet from "@/entities/CryptoWallets/lib/Wallets/types/Wallet.type";
import WalletsBitcoin from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin";

function makeInstance(walletPayload: WalletPayload) {
  if (walletPayload.platform === "Bitcoin") {
    return new WalletsBitcoin();
  }
  throw new Error("Invalid platform");
}
export default function useBitcoinWallet() {
  const wallets = ref<Wallet[]>([]);
  const totalCount = ref(0);
  const count = ref(0);
  const isLoading = ref(false);

  async function makeWallets(
    countWallets: number,
    walletPayload: WalletPayload
  ) {
    if (isLoading.value) {
      return;
    }
    totalCount.value = countWallets;
    isLoading.value = true;
    const instance = makeInstance(walletPayload);

    return instance
      .makeWallets(countWallets, walletPayload.payload, (nextCount) => {
        count.value = nextCount;
      })
      .then(() => {
        setTimeout(() => {
          wallets.value = instance.wallets;
          count.value = instance.count;
          isLoading.value = false;
        }, 0);
      });
  }

  return {
    wallets,
    count,
    totalCount,
    isLoading,
    makeWallets,
  };
}
