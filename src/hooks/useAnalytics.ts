import { trackEvent } from "@/lib/analytics";

export const useAnalytics = () => {
  const logVideoInteraction = (
    action: "play" | "pause" | "complete",
    videoName: string,
    metadata: any = {},
  ) => {
    trackEvent("Video", action, videoName, metadata);
  };

  const logPageView = (pageName: string) => {
    trackEvent("Page", "View", pageName);
  };

  const logUserAction = (action: string, label: string, metadata: any = {}) => {
    trackEvent("User", action, label, metadata);
  };

  return {
    logVideoInteraction,
    logPageView,
    logUserAction,
    trackEvent,
  };
};
