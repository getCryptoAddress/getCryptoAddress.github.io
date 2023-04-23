// ref: https://alligatr.co.uk/blog/render-an-svg-using-external-fonts-to-a-canvas/
function getFontsFromGoogleApi(link: string): Promise<string> {
  return fetch(link).then((resp) => resp.text());
}

function removeNonLatinFonts(css: string): string {
  const latinFontFaceRegex = /\/\* latin \*\/\s*@font-face \{[^}]*}/g;
  const latinFontFaces = css.match(latinFontFaceRegex) || [];

  return latinFontFaces.join("\n");
}

function linkToBase64(link: string): Promise<string> {
  return fetch(link)
    .then((resp) => resp.blob())
    .then((blob) => {
      const f = new FileReader();
      f.readAsDataURL(blob);
      return new Promise<string>((resolve) => {
        f.onloadend = () => {
          resolve(f.result as string);
        };
      });
    });
}

async function replaceLinksToBase64(css: string): Promise<string> {
  const urlRegex = /url\(([^)]+.woff2)\)/g;
  const urls = Array.from(css.matchAll(urlRegex)).map((match) => match[1]);

  const base64Urls = await Promise.all(urls.map((url) => linkToBase64(url)));

  return css.replace(urlRegex, (_match, url) => {
    const base64Index = urls.indexOf(url);
    if (base64Index !== -1) {
      return `url(${base64Urls[base64Index]})`;
    }
    return _match;
  });
}

export default function getFonts(link: string): Promise<string> {
  return getFontsFromGoogleApi(link)
    .then(removeNonLatinFonts)
    .then(replaceLinksToBase64);
}
