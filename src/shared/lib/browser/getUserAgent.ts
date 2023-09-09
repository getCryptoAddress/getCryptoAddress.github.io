import {
  type BotInfo,
  type BrowserInfo,
  parseUserAgent,
  type SearchBotDeviceInfo,
} from "detect-browser";

let userAgent: Readonly<BrowserInfo | SearchBotDeviceInfo | BotInfo | null> =
  null;

export default function getUserAgent() {
  if (!userAgent) {
    userAgent = Object.freeze(parseUserAgent(navigator.userAgent));
  }
  return userAgent;
}
