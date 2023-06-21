export default function convertUint8ArrayToHex(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");
}
