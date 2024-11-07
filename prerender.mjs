import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import { addInlineStylesHashesToHtml } from "./node/csp/addInlineStylesHashesToHtml.mjs";
import { getInlineStylesHashes } from "./node/csp/getInlineStylesHashes.mjs";
import generateSitemap from "./node/sitemap/generateSitemap.mjs";

// todo refactor file, separate into functions

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  mode: "production",
});

const template = fs.readFileSync("dist/index.html", "utf-8");
const { render, routes } = await vite.ssrLoadModule("/src/entry-server.ts");

const routerPaths = routes.map((route) => route.path);

generateSitemap(routerPaths, "https://getcryptoaddress.github.io", "dist");

for (const routerPath of routerPaths) {
  const { appHtml, ctx } = await render(routerPath);

  let pageHtml = template;

  const styleHashes = getInlineStylesHashes(appHtml);
  pageHtml = addInlineStylesHashesToHtml(pageHtml, styleHashes);

  pageHtml = pageHtml
    .replace("<!--app-head-->", ctx?.teleports?.head || "")
    .replace("<!--app-html-->", appHtml)
    .replace(/<!--.*?-->/g, "")
    .replaceAll(' data-vm-ssr="true"', "");

  const pageFolder = path.join("dist", routerPath);
  fs.mkdirSync(pageFolder, {
    recursive: true,
  });
  fs.writeFileSync(path.join(pageFolder, "index.html"), pageHtml);
  console.log("Generated:", path.join(pageFolder, "index.html"));
  await new Promise((resolve) => setTimeout(resolve, 300));
}
await vite.close();
