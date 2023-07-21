export default async function cacheImage(src: string) {
  if (!("caches" in window)) {
    return fetch(src);
  }

  const cache = await caches.open("images-cache");

  const cachedResponse = await cache.match(src);
  if (cachedResponse) {
    return cachedResponse;
  }

  const fetchResponse = await fetch(src);
  await cache.put(src, fetchResponse.clone());

  return fetchResponse;
}
