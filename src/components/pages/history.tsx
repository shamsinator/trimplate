import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  altText: string; // Added for accessibility
}

const historyEvents: HistoryEvent[] = [
  {
    year: "1989",
    title: "The First Opening Barbershop",
    description:
      "Our humble beginnings as a small corner shop quickly became a favorite spot for local gentlemen seeking quality haircuts and a place for community conversations.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop",
    altText: "Original barbershop location from 1989",
  },
  {
    year: "1996",
    title: "Gentlemen Barber Club",
    description:
      "We expanded our services and introduced the exclusive Gentlemen Barber Club membership, offering premium services and special perks to our loyal customers.",
    image:
      "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?w=800&h=600&fit=crop",
    altText: "The Gentlemen Barber Club establishment",
  },
  {
    year: "1999",
    title: "The First Hot Towel Shaving",
    description:
      "We revolutionized our service offerings by introducing the luxurious hot towel shaving experience, bringing old-world craftsmanship to modern grooming.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop",
    altText: "Barber performing a hot towel shave",
  },
  {
    year: "2004",
    title: "Barbershop Moved to New Store",
    description:
      "Due to increasing demand, we relocated to our current flagship location, providing a more spacious and sophisticated environment while maintaining our traditional values.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    altText: "The new barbershop location established in 2004",
  },
];

// Animation variants for reusability
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function History() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our History | Trimplate Barbershop</title>
        <meta
          name="description"
          content="Learn about the rich history of Trimplate barbershop since 1989. Discover our journey and milestones over the years."
        />
        <meta
          property="og:title"
          content="Our History | Trimplate Barbershop"
        />
        <meta
          property="og:description"
          content="Learn about the rich history of Trimplate barbershop since 1989. Discover our journey and milestones over the years."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/history" />
      </Helmet>

      <TopBar />
      <Header />
      <PageHeader title="Our History" currentPage="HISTORY" />

      <main className="py-20">
        <div className="container">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-primary font-medium tracking-wider uppercase">
              Since 1989
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase tracking-wider">
              GET TO KNOW OUR
              <br />
              BARBERSHOP STORY.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to becoming a premium barbershop
              destination, discover the journey that shaped Trimplate into what
              it is today.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-muted-foreground/20"
              aria-hidden="true"
            />

            {historyEvents.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>

          {/* Stats section */}
          <StatsSection />

          {/* Quote section */}
          <QuoteSection />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function TimelineItem({
  event,
  index,
  isEven,
}: {
  event: HistoryEvent;
  index: number;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative mb-24 last:mb-0"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.2 * index }}
    >
      <div
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
      >
        {/* Year marker */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-10 bg-primary text-black font-bold py-2 px-4 rounded-full"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.2 * index + 0.3 }}
          aria-label={`Year ${event.year}`}
        >
          {event.year}
        </motion.div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <img
              src={event.image}
              alt={event.altText}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading={index > 1 ? "lazy" : "eager"}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop";
                target.alt = "Fallback barbershop image";
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold font-oswald">{event.title}</h2>
          <p className="text-muted-foreground">{event.description}</p>
          {index === 0 && (
            <div className="mt-4 pt-4 border-t border-muted">
              <p className="text-sm italic">
                Where it all started - the foundation of our barbershop legacy.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "25+", label: "Skilled Barbers" },
    { value: "15", label: "Awards Won" },
    { value: "1600+", label: "Happy Clients" },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-32 bg-muted/30 py-16 px-4 rounded-lg shadow-inner"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-oswald uppercase tracking-wider mb-4">
          Our Growth Over The Years
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From a single chair to multiple locations, our journey has been
          remarkable.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-4 rounded-lg bg-background/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <p className="text-4xl md:text-5xl font-bold mb-2 text-primary">
              {stat.value}
            </p>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="mt-20 py-12 px-6 text-center space-y-6 bg-primary/5 rounded-lg"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-5xl text-primary mb-4">"</div>
      <blockquote className="text-2xl md:text-3xl font-medium italic max-w-3xl mx-auto">
        Our mission has always been to provide exceptional grooming services
        while creating a community where men can relax, connect, and leave
        looking and feeling their best.
      </blockquote>
      <div className="flex items-center justify-center mt-6">
        <div className="w-16 h-1 bg-primary"></div>
      </div>
      <p className="text-primary font-medium">— James Wilson, Founder</p>
    </motion.div>
  );
}
