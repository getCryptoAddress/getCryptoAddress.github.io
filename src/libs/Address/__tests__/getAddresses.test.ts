import { describe, it, expect } from "vitest";
import getAddresses from "../getAddresses";

const key1 = new Uint8Array([
  232, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
const key2 = new Uint8Array([
  233, 205, 117, 44, 180, 113, 245, 200, 213, 19, 97, 187, 70, 157, 86, 111, 19,
  131, 14, 18, 196, 57, 9, 203, 64, 196, 19, 26, 73, 35, 126, 80,
]);
describe("[Address][Util] getAddresses", () => {
  describe("Main-net", () => {
    it("Should return correct addresses for key1", async () => {
      expect(JSON.stringify(getAddresses(key1))).toMatchSnapshot();
    });

    it("Should return correct addresses for key2", async () => {
      expect(JSON.stringify(getAddresses(key2))).toMatchSnapshot();
    });
  });

  describe("Test-net", () => {
    it("Should return correct test-net addresses for key1", async () => {
      expect(JSON.stringify(getAddresses(key1, true))).toMatchSnapshot();
    });

    it("Should return correct test-net addresses for key2", async () => {
      expect(JSON.stringify(getAddresses(key2, true))).toMatchSnapshot();
    });
  });
});
