import fs from "node:fs";
import path from "node:path";
import { addSection } from "./addSection.mjs";

export default async function generateHumans(pageFolder) {
  const content = [
    addSection("TEAM", [
      [
        "Developer: Get Crypto Address",
        "Site: https://getcryptoaddress.github.io",
        "GitHub: https://github.com/getCryptoAddress/",
      ],
    ]),
    addSection("SITE", [
      [
        `Last build: ${new Date().toUTCString()}`,
        "Programming languages: JavaScript, TypeScript",
        "Technologies: Vite, Vue, Playwright, Vitest",
      ],
    ]),
  ].join("\n\n");
  fs.writeFileSync(path.join(pageFolder, "humans.txt"), content, "utf8");
}
