import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/error-boundary";
import { HelmetProvider } from "react-helmet-async";

import { TempoDevtools } from "tempo-devtools";
import {
  initGA,
  logPageView,
  initScrollTracking,
  trackEvent,
} from "@/lib/analytics";

TempoDevtools.init();
// Initialize analytics
initGA();
logPageView(); // Log initial page view
initScrollTracking(); // Initialize scroll tracking

// Track performance metrics
window.addEventListener("load", () => {
  if ("performance" in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    trackEvent("Performance", "Page Load", window.location.pathname, {
      loadTime: pageLoadTime,
    });
  }
});

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
