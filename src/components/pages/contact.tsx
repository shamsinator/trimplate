import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

import TopBar from "@/components/TopBar";
import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useContactForm } from "@/hooks/useContactForm";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

// Lazy load the map component to improve initial page load
const Map = lazy(() => import("@/components/ui/map"));

export default function Contact() {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Trimplate</title>
        <meta
          name="description"
          content="Get in touch with Trimplate. Contact us for appointments, inquiries, or feedback about our premium barbershop services."
        />
      </Helmet>

      <TopBar />
      <Header />
      <PageHeader title="Contact Us" currentPage="CONTACT" />

      <main
        className="py-20"
        data-track="View"
        data-category="Page"
        data-label="Contact"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold font-oswald uppercase tracking-wider">
                Get In Touch
              </h1>
              <p className="text-muted-foreground">
                Get in touch with us for any questions or concerns.
              </p>
            </div>

            {/* Contact Form Component */}
            <ContactForm
              form={form}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
            />

            {/* Contact Information Section */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
              role="complementary"
              aria-label="Contact Information"
            >
              <ContactInfo
                title="Address"
                content="1220 Petersham town, Wardll St"
                icon="map-pin"
              />
              <ContactInfo
                title="Phone"
                content={{
                  text: "(04) 491 570 110",
                  href: "tel:0449157110",
                  trackingLabel: "Phone",
                }}
                icon="phone"
              />
              <ContactInfo
                title="Email"
                content={{
                  text: "contact@trimplate.com",
                  href: "mailto:contact@trimplate.com",
                  trackingLabel: "Email",
                }}
                icon="mail"
              />
            </div>
          </div>

          {/* Lazy-loaded Map with Suspense Fallback */}
          <div className="mt-20 w-full h-96 bg-muted rounded-lg overflow-hidden">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              }
            >
              <Map />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
