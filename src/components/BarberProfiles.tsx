import BarberCard from "./BarberCard";

const barbers = [
  {
    name: "James Wilson",
    specialty: "Classic Cuts & Fades",
    image:
      "https://images.unsplash.com/photo-1618499890638-3a0dd4b54103?w=800&h=800&fit=crop",
    rating: 4.8,
    experience: "10+ years",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Brown",
    specialty: "Modern Styles & Beards",
    image:
      "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&h=800&fit=crop",
    rating: 4.9,
    experience: "8 years",
  },
  {
    name: "David Clark",
    specialty: "Precision Cuts & Shaves",
    image:
      "https://images.unsplash.com/photo-1534959165765-13681e1cec5b?w=800&h=800&fit=crop",
    rating: 4.7,
    experience: "15+ years",
  },
  {
    name: "Robert Taylor",
    specialty: "Contemporary Styles",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    rating: 4.9,
    experience: "12 years",
  },
];

export default function BarberProfiles() {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-oswald uppercase tracking-wider">
            Meet Our Barbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of skilled barbers brings years of experience and passion
            to every cut. Each specialist is trained in both classic and modern
            techniques.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
            <span className="text-primary text-2xl">✂</span>
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber) => (
            <BarberCard key={barber.name} {...barber} />
          ))}
        </div>
      </div>
    </div>
  );
}
