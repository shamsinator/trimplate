import { Play } from "lucide-react";
import { useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "1992", label: "Sinces" },
  { value: "15", label: "Awards" },
  { value: "25+", label: "Salons" },
  { value: "1600+", label: "Happy Customers" },
];

export default function AboutBarber() {
  const [isOpen, setIsOpen] = useState(false);
  const { logVideoInteraction } = useAnalytics();

  return (
    <section className="w-full py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-primary uppercase font-medium tracking-wide">
              About Barber
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              35 YEARS OF EXPERIENCE IN HAIRCUT!
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We established Carlos as a couple of grand slam organizations to
                the expert hair and excellence in 1992, and right up 'til the
                present time we are pleased to state that our organization still
                stays company with client's interests near our heart.
              </p>
              <p>
                We currently have more than 80 individuals from staff working
                for us overall divisions and in spite of the development that we
                have encountered despite everything we keep up our center family
                esteems and client-centered rationality.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <blockquote className="text-xl md:text-2xl font-medium border-l-4 border-primary pl-4 italic">
                Remember... it's not just a haircut, it's an experience.
              </blockquote>
            </div>
            <p className="text-sm text-muted-foreground">
              - PHILLIPS LEWIS / JENNA WILSON
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
                alt="Barber working"
                width="2070"
                height="1380"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-lg"
              />
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 hover:bg-primary transition-colors wave-pulse"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8" />
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="sm:max-w-[850px] p-0"
                  onPlay={() =>
                    logVideoInteraction("play", "About Barber Video")
                  }
                >
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
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
