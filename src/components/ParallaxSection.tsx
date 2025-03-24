import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function ParallaxSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521322714240-ee1d383eab62?auto=format&fit=crop&w=2000&q=80')`,
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative h-full container flex flex-col items-center justify-center text-white text-center space-y-8 max-w-3xl">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-8 transition-all duration-300 group wave-pulse"
              aria-label="Play video"
            >
              <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[850px] p-0">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="Barber Shop Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase tracking-wider">
            Experience the Art of Grooming
          </h2>
          <p className="text-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
            gravida nibh vel velit auctor aliquet aenean sollicitudin.
          </p>
        </div>
      </div>
    </section>
  );
}
