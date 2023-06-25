import type Wallet from "@/entities/CryptoWallets/lib/Wallets/useWallet.types";
import lazyLoop from "@/shared/lib/utils/lazyLoop";

export default abstract class WalletsAbstract<Payload, PrivateKey> {
  #wallets: Wallet[] = [];
  #count = 0;
  #callback?: (count: number, wallets: Wallet[]) => void;

  get wallets() {
    return this.#wallets;
  }
  get count() {
    return this.#count;
  }

  #saveWallet(wallet: Wallet) {
    this.#wallets.push(wallet);
    this.#count += 1;
    this.#callback?.(this.#count, this.#wallets);
  }

  // should be implemented
  abstract makeWallet(
    payload: Payload,
    privateKey?: PrivateKey
  ): Promise<Wallet>;

  makeWallets(
    count: number,
    payload: Payload,
    callback?: (count: number, wallets: Wallet[]) => void
  ) {
    this.#callback = callback;
    // Calculate wallet is too slow, so we should use lazyLoop for clear stack
    return lazyLoop(count, async () =>
      this.#saveWallet(await this.makeWallet(payload))
    );
  }
}
