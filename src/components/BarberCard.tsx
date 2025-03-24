import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import MotionWrapper from "@/animations/MotionWrapper";

interface BarberCardProps {
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export default function BarberCard({
  name = "John Smith",
  specialty = "Classic Cuts & Fades",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=barber1",
  rating = 4.8,
  experience = "10+ years",
  social = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
}: BarberCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative bg-muted overflow-hidden">
          <img
            src={image}
            alt={name}
            width="800"
            height="800"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <MotionWrapper.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex space-x-4"
            >
              {social.facebook && (
                <a
                  href={social.facebook}
                  className="text-white hover:text-primary transition-colors p-2"
                  aria-label={`Follow ${name} on Facebook`}
                >
                  <Facebook size={20} aria-hidden="true" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  className="text-white hover:text-primary transition-colors p-2"
                >
                  <Twitter size={20} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  className="text-white hover:text-primary transition-colors p-2"
                >
                  <Instagram size={20} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  className="text-white hover:text-primary transition-colors p-2"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </MotionWrapper.div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <h3 className="font-semibold text-lg mb-1 font-oswald uppercase">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{specialty}</p>
        <div className="flex items-center justify-center space-x-3 text-sm">
          <span>⭐️ {rating}</span>
          <span>•</span>
          <span>{experience}</span>
        </div>
      </CardContent>
    </Card>
  );
}
