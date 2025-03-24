import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Scissors, ScissorsLineDashed, Armchair, Brush } from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  price: number;
  duration: string;
}

const services: Service[] = [
  {
    id: "hot-shave",
    name: "HOT SHAVE",
    icon: <ScissorsLineDashed className="w-12 h-12" />,
    description:
      "Experience the ultimate in relaxation with our traditional hot towel shave service.",
    price: 35,
    duration: "45 min",
  },
  {
    id: "beard-trim",
    name: "BEARD TRIM",
    icon: <Scissors className="w-12 h-12" />,
    description:
      "Keep your beard looking sharp and well-maintained with our professional trimming service.",
    price: 25,
    duration: "30 min",
  },
  {
    id: "haircut",
    name: "HAIRCUT",
    icon: <Armchair className="w-12 h-12" />,
    description:
      "Get a precision haircut tailored to your style and preferences.",
    price: 30,
    duration: "45 min",
  },
  {
    id: "face-mask",
    name: "FACE MASK",
    icon: <Brush className="w-12 h-12" />,
    description: "Rejuvenate your skin with our premium face mask treatment.",
    price: 40,
    duration: "30 min",
  },
];

export default function ServiceMenu() {
  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-oswald uppercase tracking-wider">
            EXPLORE OUR SERVICES
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
            <span className="text-primary text-2xl">✂</span>
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
          </div>
        </div>

        <Tabs defaultValue={services[0].id} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto p-0 mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center gap-4 p-6 data-[state=active]:bg-primary/20 hover:bg-muted transition-colors rounded-lg"
              >
                {service.icon}
                <span className="font-oswald text-lg">{service.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="mt-8 text-center space-y-6"
            >
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {service.description}
              </p>
              <div className="flex justify-center items-center gap-4">
                <span className="text-2xl font-oswald">${service.price}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {service.duration}
                </span>
              </div>
              <Button
                size="lg"
                onClick={() => (window.location.href = "/book-online")}
                className="mt-4"
              >
                BOOK AN APPOINTMENT
              </Button>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
