import cacheImage from "./cacheImage";

export default async function getCachedImageLink(
  src: string | { default: string },
): Promise<string> {
  const nextSrc = typeof src === "string" ? src : src?.default || "";
  const imageCache = await cacheImage(nextSrc);
  const blob = await imageCache.blob();
  return URL.createObjectURL(blob);
}
