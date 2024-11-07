import crypto from "crypto";

/**
 * Calculates SHA-256 hash of the given style content and returns it in base64 format.
 *
 * ```
 * # Input
 * max-width:250px;text-align:left;margin:0 auto;width:100%;
 * # output
 * sha256-O5IIiIzIB9wS0DmNOhwTAp7C6vPXN8QJ3R0ZS+HTUNM=
 * ```
 *
 * @param {string} styleContent
 * @returns {string}
 */
function calculateStyleHash(styleContent) {
  console.log(styleContent);
  const hash = crypto
    .createHash("sha256")
    .update(styleContent, "utf8")
    .digest("base64");
  console.log(`sha256-${hash}`);
  return `sha256-${hash}`;
}

/**
 * Extracts inline styles from the given HTML content.
 *
 * @param {string} appHtml - The HTML content to extract inline styles from.
 * @returns {string[]} An array of inline style strings.
 */
function getInlineStyles(appHtml) {
  return (
    appHtml
      .match(/ style=".*?"/g)
      ?.map((line) => line.replace(/^ style="/, "").replace(/"$/, "")) || []
  );
}

/**
 * Generates an array of unique SHA-256 hashes for all inline styles found in the given HTML content.
 *
 * @param {string} appHtml - The HTML content to extract and hash inline styles from.
 * @returns {string[]} An array of unique SHA-256 hashes in base64 format.
 */
export function getInlineStylesHashes(appHtml) {
  return [...new Set(getInlineStyles(appHtml).map(calculateStyleHash))];
}
