// export type CryptoPlatformEthereum = "Ethereum";

import type { CryptoPlatformBitcoin } from "@/entities/CryptoWallets/lib/Wallets/walletsBitcoin/WalletsBitcoin.types";

type CryptoPlatform = CryptoPlatformBitcoin; // | CryptoPlatformEthereum;

export default CryptoPlatform;
