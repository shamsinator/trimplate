import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import { Helmet } from "react-helmet-async";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | Trimplate</title>
        <meta
          name="description"
          content="Learn about our premium barbershop services and our commitment to quality since 1992."
        />
      </Helmet>
      <TopBar />
      <Header />
      <PageHeader title="About Us" currentPage="ABOUT US" />
      <main className="py-20">
        <div className="container space-y-16">
          <section className="text-center space-y-4">
            <p className="text-4xl font-bold font-oswald uppercase tracking-wider">
              Premium Grooming Since 1992
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Established in 1992, we've been providing premium grooming
              services to gentlemen who appreciate quality and style.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop"
              alt="Barbershop interior"
              className="rounded-lg"
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-oswald">Our Story</h2>
              <p className="text-muted-foreground">
                Starting as a small family business, we've grown into a network
                of premium barbershops while maintaining our commitment to
                quality and personal service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Professional barbers with years of experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Premium grooming products</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Relaxing atmosphere</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
