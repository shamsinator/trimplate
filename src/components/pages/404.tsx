import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=80&sat=-100')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="relative w-full max-w-2xl mx-auto text-center p-8 rounded-lg overflow-hidden">
        {/* Overlay with grain texture */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E')`,
            opacity: "0.15",
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-center">
            <div className="bg-primary rounded-full p-4 animate-bounce">
              <Scissors className="w-12 h-12 text-black" />
            </div>
          </div>
          <h1 className="text-8xl font-bold text-primary font-oswald">404</h1>
          <h2 className="text-3xl font-bold text-white font-oswald uppercase tracking-wider">
            Page Not Found
          </h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Looks like you've wandered into the wrong barbershop. Let's get you
            back to the right chair.
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-medium"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
