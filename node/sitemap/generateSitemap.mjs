import fs from "node:fs";
import path from "node:path";

export default async function generateSitemap(links, origin, pageFolder) {
  const content = links.map(link=>origin + link).join('\n');
  fs.writeFileSync(path.join(pageFolder, "sitemap.txt"), content, 'utf8');
}