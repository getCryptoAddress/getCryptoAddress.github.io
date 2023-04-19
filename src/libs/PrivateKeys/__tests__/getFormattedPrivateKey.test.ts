import { describe, expect, it } from "vitest";
import getFormattedPrivateKey from "@/libs/PrivateKeys/getFormattedPrivateKey";

const key1 = new Uint8Array([
  132, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
const key2 = new Uint8Array([
  133, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);

describe("[PrivateKeys][Util] getFormattedPrivateKey", () => {
  it("Should return correct formats for key1", async () => {
    const formattedKey1 = await getFormattedPrivateKey(key1);
    expect(JSON.stringify(formattedKey1)).toMatchSnapshot();
  });

  it("Should return correct formats for key2", async () => {
    const formattedKey2 = await getFormattedPrivateKey(key2);
    expect(JSON.stringify(formattedKey2)).toMatchSnapshot();
  });
});
