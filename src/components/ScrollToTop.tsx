import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-50`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
