import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import { Helmet } from "react-helmet-async";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1519019121902-78eab0c0c2a7?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=800&fit=crop",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const showNext = () => {
    setSelectedImage((prev) =>
      prev === null || prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  const showPrevious = () => {
    setSelectedImage((prev) =>
      prev === null || prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gallery | Trimplate</title>
        <meta
          name="description"
          content="View our portfolio of haircuts, styles, and grooming work. See the quality and craftsmanship of our expert barbers."
        />
      </Helmet>
      <TopBar />
      <Header />
      <PageHeader title="Gallery" currentPage="GALLERY" />
      <main className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold font-oswald uppercase tracking-wider">
              Latest Work
            </h1>
            <p className="text-muted-foreground">
              Take a look at our work and atmosphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
                role="button"
                aria-label={`View gallery image ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(index);
                  }
                }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[90vw] h-[90vh] p-0">
          <div className="relative w-full h-full flex items-center justify-center bg-black/90">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {selectedImage !== null && (
              <img
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            )}

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === selectedImage ? "bg-white w-4" : "bg-white/50"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
