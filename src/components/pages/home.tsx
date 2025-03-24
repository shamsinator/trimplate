import { useEffect } from "react";
import { Divider } from "@/components/ui/divider";
import TopBar from "../TopBar";
import HeroSlider from "../HeroSlider";
import Header from "../Header";
import AboutBarber from "../AboutBarber";
import ServiceMenu from "../ServiceMenu";
import BarberProfiles from "../BarberProfiles";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import PricingSection from "../PricingSection";
import ClientReviews from "../ClientReviews";

import PageTransition from "../PageTransition";
import ParallaxSection from "../ParallaxSection";

import { updateMetaTags } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    updateMetaTags({
      title: "Home",
      description:
        "Premium barbershop services with expert barbers. Book your appointment today for haircuts, beard trims, and grooming services.",
    });
  }, []);
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <HeroSlider />
          <Divider />
          <AboutBarber />
          <Divider />
          <PricingSection />
          <Divider />
          <ServiceMenu />
          <Divider />
          <BarberProfiles />
          <Divider />
          <ParallaxSection />
          <Divider />
          <ClientReviews />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
}
