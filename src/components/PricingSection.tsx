interface Service {
  name: string;
  price: number;
  description: string;
}

const services: Service[] = [
  {
    name: "Haircut",
    price: 20.0,
    description: "Our stylist consults & delivers you a precision haircut.",
  },
  {
    name: "Moustache Trim",
    price: 10.0,
    description: "Select & Change your hair color for new experience.",
  },
  {
    name: "Beard Trim",
    price: 15.0,
    description: "Keep your beard clean and sharp with an awesome style.",
  },
  {
    name: "Hair Wash",
    price: 6.0,
    description: "Relax and have a hot towel for cleaning your face.",
  },
  {
    name: "Hair Color",
    price: 18.0,
    description: "Select & Change your hair color for new experience.",
  },
  {
    name: "Face Mask",
    price: 12.0,
    description: "Our stylist consults & delivers you a precision haircut.",
  },
  {
    name: "Men's Facial",
    price: 25.0,
    description: "Relax and have a hot towel for cleaning your face.",
  },
  {
    name: "Line Up",
    price: 13.0,
    description: "Keep your beard clean and sharp with an awesome style.",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-oswald uppercase tracking-wider">
            Our Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Duis aute irure dolor in reprehenderit volupte velit esse cillum
            dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
            <span className="text-primary text-2xl">✂</span>
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-baseline">
              <div className="flex-grow">
                <div className="flex items-baseline">
                  <h3 className="text-xl font-oswald uppercase">
                    {service.name}
                  </h3>
                  <div className="mx-4 flex-grow border-b border-dotted border-muted-foreground/30" />
                  <span className="text-xl font-oswald text-primary">
                    ${service.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
