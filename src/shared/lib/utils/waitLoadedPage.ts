const { SSR } = import.meta.env;

export default function waitLoadedPage(isMacroTask = false): Promise<void> {
  if (SSR) {
    throw new Error("waitLoadedPage is not supported in SSR");
  }

  return new Promise((resolve) => {
    const fnResolve = isMacroTask
      ? () => setTimeout(() => resolve(), 0)
      : () => resolve();

    if (document.readyState === "complete") {
      fnResolve();
      return;
    }

    const fnResolveCallback = () => {
      window.removeEventListener("load", fnResolveCallback);
      fnResolve();
    };
    window.addEventListener("load", fnResolveCallback);
  });
}
