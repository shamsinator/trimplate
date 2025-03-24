import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import MotionWrapper from "@/animations/MotionWrapper";
import { playClickSound, initSound } from "@/lib/sound";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Cart } from "./cart";
import { CartButton } from "./cart/CartButton";
import { NavLinks } from "./navigation/NavLinks";

// Custom Hook for Sticky Header
function useStickyHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isSticky, headerRef };
}

// Custom Hook for Cart State & Key Events
function useCart() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [cartOpen]);

  return { cartOpen, setCartOpen };
}

export default function Header() {
  const { isSticky, headerRef } = useStickyHeader();
  const { cartOpen, setCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleFirstInteraction = () => {
      initSound();
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    return () => document.removeEventListener("click", handleFirstInteraction);
  }, []);

  const handleCartToggle = useCallback(() => {
    setCartOpen((prev) => !prev);
  }, []);

  const handleBookOnline = useCallback(() => {
    navigate("/book-online");
  }, [navigate]);

  return (
    <header
      ref={headerRef}
      className={`w-full bg-white dark:bg-background py-6 border-b transition-all duration-300 ${
        isSticky
          ? "lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 lg:shadow-md lg:animate-slideDown"
          : ""
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-oswald italic flex items-center space-x-2 hover:opacity-80 transition-opacity"
          aria-label="Hairy - Home"
        >
          <span className="text-primary" aria-hidden="true">
            ✂
          </span>
          <span className="font-bold">Trimplate</span>
        </Link>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-4">
          <CartButton onClick={handleCartToggle} />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open main menu"
                onClick={playClickSound}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <MotionWrapper.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <NavLinks isMobile />
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-primary uppercase px-6 w-full mt-4"
                  onClick={handleBookOnline}
                >
                  Book Online
                </Button>
              </MotionWrapper.div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <NavLinks />
          <div className="flex items-center space-x-4 ml-4">
            <CartButton onClick={handleCartToggle} />
            <Button
              variant="default"
              className="bg-black text-white hover:bg-primary uppercase px-6"
              onClick={handleBookOnline}
            >
              Book Online
            </Button>
          </div>
        </div>
      </div>

      <Cart open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
