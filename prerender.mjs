import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const routes = ["/", "/create-wallet", "/create-paper-wallet"];

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  mode: "production",
});

const template = fs.readFileSync("dist/index.html", "utf-8");
const { render } = await vite.ssrLoadModule("/src/entry-server.ts");

for (const route of routes) {
  const { appHtml, ctx } = await render(route);

  const pageHtml = template
    .replace("<!--app-head-->", ctx?.teleports?.head || '')
    .replace("<!--app-html-->", appHtml)
    .replace(/<!--.*?-->/g, '')
    .replaceAll(' data-vm-ssr="true"', '');

  const pageFolder = path.join("dist", route);
  fs.mkdirSync(pageFolder, {
    recursive: true,
  });
  fs.writeFileSync(path.join(pageFolder, "index.html"), pageHtml);
}
vite.close();
