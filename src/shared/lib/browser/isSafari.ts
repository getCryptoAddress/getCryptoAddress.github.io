import getUserAgent from "@/shared/lib/browser/getUserAgent";

export default function isSafari() {
  const userAgent = getUserAgent();
  return userAgent?.name === "safari";
}
