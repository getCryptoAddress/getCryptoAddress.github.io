type PrivateKeyFormatted = {
  readonly uint8Array: Uint8Array;
  readonly array: readonly number[];
  readonly hex: string;
  readonly wifMainnet: string;
  readonly wifMainnetUncompressed: string;
  readonly wifTestnet: string;
  readonly wifTestnetUncompressed: string;
};

export default PrivateKeyFormatted;
