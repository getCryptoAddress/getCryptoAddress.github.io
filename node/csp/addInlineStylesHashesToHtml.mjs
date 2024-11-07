/**
 * Add hashes of inline styles to the CSP policy in the HTML.
 *
 * @description Naive-ui uses inline styles to style components.
 *
 * [tag-nonce]
 * @param {string} html
 * @param {string[]} listOfHashes
 * @returns {*}
 */
export function addInlineStylesHashesToHtml(html, listOfHashes) {
  const hashes = listOfHashes.map((hash) => `'${hash}'`).join(" ");

  return html.replace(
    "style-src 'self'",
    `style-src 'self' 'unsafe-hashes' ${hashes}`,
  );
}
