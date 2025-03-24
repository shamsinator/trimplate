import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { GradientSection } from "@/components/ui/gradient-section";

interface Review {
  text: string;
  author: string;
  image: string;
}

interface ClientReviewsProps {
  /** Array of review objects to display */
  reviews?: Review[];
  /** Auto-play interval in milliseconds. Set to 0 to disable. */
  autoPlayInterval?: number;
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
}

// Default reviews if none provided
const DEFAULT_REVIEWS: Review[] = [
  {
    text: "Proin gravida nibh vel velit auctor aliquet aenean sollicidin, lorem quis bibendum auctor nisi elit.",
    author: "Ryan Printz",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
  },
  {
    text: "Duis sed odio site amet nibh vuutate cursus site amet mauris morbie accumsan ipsum velit nam tellus.",
    author: "Mark Smith",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
  },
  {
    text: "Class aptent taciti soclosqu ad litora torquente per conubia nostraey per inceptos himenaeos mauris.",
    author: "Steve Martin",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
];

export default function ClientReviews({
  reviews = DEFAULT_REVIEWS,
  autoPlayInterval = 5000,
  title = "Clients Say",
  subtitle = "Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.",
}: ClientReviewsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlayInterval > 0);
  const [canUseDom, setCanUseDom] = useState(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Wait for component to be mounted to use browser APIs
  useEffect(() => {
    setCanUseDom(true);
  }, []);

  // Cleanup function for autoplay
  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  }, []);

  // Start autoplay
  const startAutoPlay = useCallback(() => {
    if (autoPlayInterval <= 0 || !emblaApi) return;
    stopAutoPlay();
    setIsPlaying(true);
    autoPlayIntervalRef.current = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, autoPlayInterval);
  }, [autoPlayInterval, emblaApi, stopAutoPlay]);

  // Toggle autoplay state
  const toggleAutoPlay = useCallback(() => {
    if (isPlaying) {
      stopAutoPlay();
      setIsPlaying(false);
    } else {
      startAutoPlay();
    }
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      stopAutoPlay();
      setIsPlaying(false);
      emblaApi.scrollPrev();
    }
  }, [emblaApi, stopAutoPlay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      stopAutoPlay();
      setIsPlaying(false);
      emblaApi.scrollNext();
    }
  }, [emblaApi, stopAutoPlay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        stopAutoPlay();
        setIsPlaying(false);
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, stopAutoPlay],
  );

  // Update selected index when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up and clean up event listeners
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect(); // Initialize with current state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Handle autoplay initialization and cleanup
  useEffect(() => {
    if (autoPlayInterval > 0 && isPlaying) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [autoPlayInterval, isPlaying, startAutoPlay, stopAutoPlay]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!canUseDom) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          scrollPrev();
          break;
        case "ArrowRight":
          scrollNext();
          break;
        case "p":
          toggleAutoPlay();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [canUseDom, scrollNext, scrollPrev, toggleAutoPlay]);

  // Error handling for images
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/100?text=Error";
    target.alt = "Image failed to load";
  };

  return (
    <GradientSection className="py-20" intensity="strong">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-oswald uppercase tracking-wider">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
            <span className="text-primary text-2xl" aria-hidden="true">
              ✂
            </span>
            <div className="h-[1px] w-12 bg-muted-foreground/30" />
          </div>
        </div>

        <div
          className="relative max-w-5xl mx-auto px-10"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
            className="overflow-hidden"
            ref={emblaRef}
            tabIndex={0}
            aria-live="polite"
          >
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${reviews.length}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                >
                  <div className="text-center space-y-6 px-4 md:px-8 lg:px-16">
                    {canUseDom ? (
                      <img
                        src={review.image}
                        alt={`${review.author}`}
                        width={100}
                        height={100}
                        loading="lazy"
                        decoding="async"
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto bg-muted" />
                    )}
                    <p className="text-muted-foreground text-lg italic">
                      "{review.text}"
                    </p>
                    <p className="font-oswald text-lg">{review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous review"
              className="focus-visible:ring-2 focus-visible:ring-primary rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollNext}
              aria-label="Next review"
              className="focus-visible:ring-2 focus-visible:ring-primary rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-8">
            <div className="flex justify-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${
                    index === selectedIndex
                      ? "bg-primary w-4"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                />
              ))}
            </div>

            {autoPlayInterval > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="ml-2 h-8"
                onClick={toggleAutoPlay}
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 mr-1" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-1" /> Play
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </GradientSection>
  );
}
