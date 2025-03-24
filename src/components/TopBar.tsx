import { Phone, Clock, LogIn, UserPlus } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-black text-white py-2 text-sm" role="banner">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-6">
          <div
            className="hidden sm:flex items-center space-x-2"
            aria-label="Business hours"
          >
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>Mon - Fri 9:00 - 17:00</span>
          </div>
          <div
            className="flex items-center space-x-2"
            aria-label="Contact phone"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <a
              href="tel:0449157110"
              className="hover:text-primary transition-colors"
            >
              (04) 491 570 110
            </a>
          </div>
        </div>
        <nav
          className="flex items-center space-x-4"
          aria-label="User authentication"
        >
          {/* Desktop version */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="/login"
              className="hover:text-primary transition-colors"
              aria-label="Login to your account"
            >
              Login
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="/register"
              className="hover:text-primary transition-colors"
              aria-label="Create a new account"
            >
              Register
            </a>
          </div>

          {/* Mobile version with icons */}
          <div className="flex sm:hidden items-center space-x-3">
            <a
              href="/login"
              className="hover:text-primary transition-colors p-1"
              aria-label="Login to your account"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/register"
              className="hover:text-primary transition-colors p-1"
              aria-label="Create a new account"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
