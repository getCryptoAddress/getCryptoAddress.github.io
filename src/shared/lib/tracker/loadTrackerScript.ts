let loaded = false;

export default function loadTrackerScript(websiteId: string) {
  if (loaded) {
    throw new Error("Tracker script already loaded");
  }
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://analytics.umami.is/script.js";
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}
