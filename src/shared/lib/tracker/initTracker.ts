import loadTrackerScript from "./loadTrackerScript";

const { VITE_TRACKER_WEBSITE_ID, SSR } = import.meta.env;
export default function initTracker() {
  if (SSR) {
    return;
  }

  if (!VITE_TRACKER_WEBSITE_ID) {
    console.warn("Tracker website ID not set");
    return;
  }

  loadTrackerScript(VITE_TRACKER_WEBSITE_ID);
}
