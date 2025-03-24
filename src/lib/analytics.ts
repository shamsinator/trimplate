import ReactGA from "react-ga4";

const TRACKING_ID = "G-XXXXXXXXXX";
ReactGA.initialize(TRACKING_ID);

// Helper: Track events in GA
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  metadata: Record<string, any> = {},
) => {
  ReactGA.event({ category, action, label, ...metadata });
  console.log(`Analytics: ${category} - ${action} - ${label}`, metadata);
};

// Find nearest trackable element
const findTrackableElement = (
  element: HTMLElement | null,
): HTMLElement | null => {
  while (element && element !== document.body) {
    if (element.hasAttribute("data-track")) return element;
    element = element.parentElement;
  }
  return null;
};

// Global Click Tracking
const initGlobalClickTracking = () => {
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement;
      const trackElement = findTrackableElement(target);

      if (trackElement) {
        const category = trackElement.dataset.category || "User Interaction";
        const action = trackElement.dataset.track || "Click";
        const label =
          trackElement.dataset.label ||
          trackElement.textContent?.trim() ||
          "Unknown";

        let metadata = {};
        if (trackElement.dataset.meta) {
          try {
            metadata = JSON.parse(trackElement.dataset.meta);
          } catch (e) {
            console.warn("Invalid JSON in data-meta:", e);
          }
        }

        trackEvent(category, action, label, metadata);
      }
    },
    { passive: true },
  );
};

// Form Input Tracking
const initFormInputTracking = () => {
  document.addEventListener(
    "blur",
    (event) => {
      const target = event.target as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement;
      if (!target || !(target instanceof HTMLElement)) return;

      const trackElement = target.hasAttribute("data-track")
        ? target
        : findTrackableElement(target);

      if (
        trackElement &&
        trackElement.tagName.match(/^(INPUT|SELECT|TEXTAREA)$/i)
      ) {
        const category = trackElement.dataset.category || "Form";
        const action = trackElement.dataset.track || "Input";
        const label =
          trackElement.dataset.label ||
          trackElement.getAttribute("name") ||
          "Unknown Field";

        let metadata = {};
        if (trackElement.dataset.meta) {
          try {
            metadata = JSON.parse(trackElement.dataset.meta);
          } catch (e) {
            console.warn("Invalid JSON in data-meta:", e);
          }
        }

        // Don't track actual values for privacy reasons, just the interaction
        trackEvent(category, action, label, metadata);
      }
    },
    { passive: true },
  );
};

// Form Submission Tracking
const initFormSubmitTracking = () => {
  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target as HTMLFormElement;
      if (!form || !(form instanceof HTMLFormElement)) return;

      const trackElement = form.hasAttribute("data-track") ? form : null;

      if (trackElement) {
        const category = trackElement.dataset.category || "Form";
        const action = trackElement.dataset.track || "Submit";
        const label =
          trackElement.dataset.label ||
          form.getAttribute("name") ||
          "Unknown Form";

        let metadata = {};
        if (trackElement.dataset.meta) {
          try {
            metadata = JSON.parse(trackElement.dataset.meta);
          } catch (e) {
            console.warn("Invalid JSON in data-meta:", e);
          }
        }

        trackEvent(category, action, label, metadata);
      }
    },
    { passive: true },
  );
};

// Page View Tracking
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Scroll Depth Tracking (Optimized with requestAnimationFrame)
export const initScrollTracking = () => {
  let scrollDepths = new Set<number>();
  let ticking = false;

  const calculateScrollDepth = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      [25, 50, 75, 90].forEach((depth) => {
        if (scrollPercentage >= depth && !scrollDepths.has(depth)) {
          scrollDepths.add(depth);
          trackEvent("Scroll", "Depth", `Scrolled ${depth}%`);
        }
      });

      // Stop tracking after reaching 90%
      if (scrollDepths.has(90)) {
        window.removeEventListener("scroll", calculateScrollDepth);
      }

      ticking = false;
    });
  };

  window.addEventListener("scroll", calculateScrollDepth, { passive: true });
  return () => window.removeEventListener("scroll", calculateScrollDepth);
};

// Visibility Tracking (for elements that come into view)
export const initVisibilityTracking = () => {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const element = entry.target;
          const category = element.dataset.category || "Visibility";
          const label =
            element.dataset.label || element.id || "Unknown Element";

          trackEvent(category, "View", label);
          obs.unobserve(element); // Stop tracking this element
        }
      });
    },
    { threshold: 0.5 },
  );

  // Find all elements with data-track-view attribute
  document.querySelectorAll("[data-track-view]").forEach((element) => {
    observer.observe(element);
  });
};

// Error Tracking
export const initErrorTracking = () => {
  window.addEventListener("error", (event) => {
    trackEvent("Error", "JS Error", event.message, {
      source: event.filename,
      line: event.lineno,
      column: event.colno,
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    trackEvent("Error", "Unhandled Promise", String(event.reason));
  });
};

// Initialize GA and tracking
export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
  initGlobalClickTracking();
  initFormInputTracking();
  initFormSubmitTracking();
  initVisibilityTracking();
  initErrorTracking();
};
