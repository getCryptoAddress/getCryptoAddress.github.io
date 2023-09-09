import { ref } from "vue";
import type { Wallet } from "./useWallet.types";
import WalletFactory from "./WalletFactory";
import type { WalletFactoryPayload } from "./WalletFactory.types";

export default function useWallet() {
  const wallets = ref<Wallet[]>([]);
  const totalCount = ref(0);
  const count = ref(0);
  const isLoading = ref(false);

  async function makeWallets(
    countWallets: number,
    walletPayload: WalletFactoryPayload,
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
        wallets.value = instance.wallets;
        count.value = instance.count;
        isLoading.value = false;
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
