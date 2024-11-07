const { SSR, MODE } = import.meta.env;

const globalNode = !SSR ? Node : ({ prototype: {} } as typeof Node);
const originalAppendChild = globalNode.prototype.appendChild;
const originalInsertBefore = globalNode.prototype.insertBefore;

const assetsFolder =
  MODE === "production" ? "/assets/" : "/node_modules/.vite/deps/";

/**
 * Check if the current chunk is one of those that do not support nonce
 *
 * [tag-nonce] Search by tag in the code
 */
function isSelectedChunk(chunksWithoutNonce: string[]) {
  const { stack } = new Error();
  const pathOfChunks = chunksWithoutNonce.map(
    (chunk) => window.location.origin + assetsFolder + chunk,
  );

  return !!stack
    ?.split("\n")
    .map((line) => {
      const chromeMatch = line.match(/at.*\((http.+?)\)$/);
      if (chromeMatch) {
        return chromeMatch[1];
      }

      const safariMatch = line.match(/@(http.+?):\d+:\d+/);
      if (safariMatch) {
        return safariMatch[1];
      }
      return null;
    })
    .filter((line) => line && pathOfChunks.some((path) => line.includes(path)))
    .length;
}

/**
 * Add nonce to style elements that do not have it yet for the selected chunks
 */
export function addNonceToStyles(nonce: string, chunksWithoutNonce: string[]) {
  if (SSR) {
    return;
  }
  const addNonceToStyle = (element: Node) => {
    const isStyleElement = element instanceof HTMLStyleElement;
    if (!isStyleElement) {
      return;
    }

    const hasNonce = element.hasAttribute("nonce");
    if (hasNonce) {
      return;
    }

    if (!isSelectedChunk(chunksWithoutNonce)) {
      return;
    }

    element.setAttribute("nonce", nonce);
  };

  globalNode.prototype.appendChild = function <T extends Node>(node: T): T {
    addNonceToStyle(node);
    return originalAppendChild.call(this, node) as T;
  };

  globalNode.prototype.insertBefore = function <T extends Node>(
    node: T,
    referenceNode: Node | null,
  ): T {
    addNonceToStyle(node);
    return originalInsertBefore.call(this, node, referenceNode) as T;
  };
}
