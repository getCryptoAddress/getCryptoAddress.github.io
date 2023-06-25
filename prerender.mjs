import fs from "node:fs";
import path from "node:path";

const routes = ["/", "/create-wallet", "/create-paper-wallet"];

import { createServer } from "vite";

const vite = await createServer({
  server: { middlewareMode: "custom" },
});

const template = fs.readFileSync("dist/index.html", "utf-8");
const { render } = await vite.ssrLoadModule("/src/entry-server.ts");

for (const route of routes) {
  const { appHtml } = await render(route);
  const pageHtml = template.replace("<!--app-html-->", appHtml);
  const pageFolder = path.join("dist", route);
  fs.mkdirSync(pageFolder, {
    recursive: true,
  });
  fs.writeFileSync(path.join(pageFolder, "index.html"), pageHtml);
}
vite.close();
