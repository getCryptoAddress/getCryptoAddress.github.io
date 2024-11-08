const newLine = "\n";
const newParagraph = "\n\n";

/**
 * Add spaces to the beginning of a string
 * @param {string} str
 * @returns {string}
 */
function addSpaces(str) {
  return " ".repeat(2) + str.trim();
}

/**
 * Add a section to the humans.txt file
 * @example
 * ```js
 * addSection("Site", [
 *  ["Site: Get Crypto Address", "URL: https://getcryptoaddress.github.io"],
 *  ]),
 *  ```
 * @param {string} title
 * @param {string[][]} content
 */
export function addSection(title, content) {
  return (
    `/* ${title} */` +
    newLine +
    content
      .filter(Boolean)
      .map((contentLine) =>
        contentLine.filter(Boolean).map(addSpaces).join(newLine),
      )
      .join(newParagraph)
  );
}
