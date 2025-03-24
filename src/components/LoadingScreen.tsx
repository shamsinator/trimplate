import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Create a live region for screen readers
    const liveRegion = document.createElement("div");
    liveRegion.setAttribute("role", "status");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.className = "sr-only";
    document.body.appendChild(liveRegion);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 100 ? 100 : prev + 10;
        // Update the announcement for screen readers
        liveRegion.textContent = `Loading ${newProgress}%`;
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      document.body.removeChild(liveRegion);
    };
  }, []);

  if (skipped) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/10 backdrop-blur-[20rem] animate-blur-transition will-change-[backdrop-filter]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label="Page loading progress"
      tabIndex={0}
    >
      <div
        className="flex items-center space-x-2 text-4xl font-oswald italic mb-8"
        aria-label="Trimplate Logo"
      >
        <span className="text-primary" aria-hidden="true">
          ✂
        </span>
        <span>Trimplate</span>
      </div>

      <div
        className="w-48 h-1 bg-muted overflow-hidden rounded-full"
        role="presentation"
      >
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-hidden="true">
        {progress}%
      </p>

      <Button
        className="mt-8"
        variant="ghost"
        size="sm"
        onClick={() => setSkipped(true)}
        aria-label="Skip loading animation"
      >
        Skip Loading
      </Button>

      {/* Hidden text for screen readers */}
      <div className="sr-only" role="status" aria-live="polite">
        {progress === 100 ? "Loading complete" : `Loading ${progress} percent`}
      </div>
    </motion.div>
  );
}
