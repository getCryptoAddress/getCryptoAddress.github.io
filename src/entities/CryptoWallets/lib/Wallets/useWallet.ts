import { ref } from "vue";
import type { WalletFactoryPayload } from "@/entities/CryptoWallets/lib/Wallets/WalletFactory.types";
import type Wallet from "@/entities/CryptoWallets/lib/Wallets/useWallet.types";
import WalletFactory from "@/entities/CryptoWallets/lib/Wallets/WalletFactory";

export default function useBitcoinWallet() {
  const wallets = ref<Wallet[]>([]);
  const totalCount = ref(0);
  const count = ref(0);
  const isLoading = ref(false);

  async function makeWallets(
    countWallets: number,
    walletPayload: WalletFactoryPayload
  ) {
    if (isLoading.value) {
      return;
    }
    totalCount.value = countWallets;
    isLoading.value = true;
    const instance = WalletFactory(walletPayload);

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
