import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] bg-black rounded-lg p-6 z-50"
    >
      <div className="flex items-center gap-2 mb-2">
        <Cookie className="w-5 h-5 text-white" />
        <h2 className="text-xl font-medium text-white">We use cookies</h2>
      </div>
      <p className="text-gray-400 text-sm mb-6">
        We use cookies to ensure you get the best experience on our website. For
        more information on how we use cookies, please see our cookie policy.
      </p>
      <div className="flex gap-2">
        <Button
          onClick={handleAccept}
          className="flex-1 bg-white text-black hover:bg-gray-200"
        >
          accept
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="flex-1 bg-grey border-white text-white hover:bg-white/50"
        >
          decline
        </Button>
      </div>
    </motion.div>
  );
}
