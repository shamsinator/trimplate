import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface NavLinkProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile }: NavLinkProps) {
  const [pagesOpen, setPagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const pageLinks = [
    { href: "/about", label: "About Us" },
    { href: "/history", label: "History" },
    { href: "/typography", label: "Typography" },
    { href: "/book-online", label: "Book Online" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/404", label: "Page 404" },
  ];

  const togglePages = () => {
    setPagesOpen(!pagesOpen);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPagesOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (pagesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesOpen]);

  return (
    <nav
      role="navigation"
      aria-label={isMobile ? "Mobile navigation" : "Main navigation"}
      className={`${isMobile ? "flex flex-col space-y-4 mt-6" : "hidden md:flex items-center space-x-8"}`}
    >
      {links.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors uppercase"
          aria-current={
            link.href === window.location.pathname ? "page" : undefined
          }
          data-track="Click"
          data-category="Navigation"
          data-label={link.label}
        >
          {link.label}
        </a>
      ))}

      {/* Pages dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={togglePages}
          className="text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors uppercase flex items-center gap-1"
          aria-expanded={pagesOpen}
          aria-haspopup="true"
          data-track="Click"
          data-category="Navigation"
          data-label="Pages"
        >
          Pages{" "}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown menu */}
        {pagesOpen && (
          <div
            className={`${isMobile ? "pl-4 mt-2 space-y-2" : "absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 min-w-[160px] z-50"}`}
          >
            {pageLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${isMobile ? "block" : "block px-4 py-2 hover:bg-muted"} text-sm hover:text-primary transition-colors`}
                aria-current={
                  link.href === window.location.pathname ? "page" : undefined
                }
                data-track="Click"
                data-category="Navigation"
                data-label={`Pages - ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
