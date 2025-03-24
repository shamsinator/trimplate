import TopBar from "./TopBar";
import PageHeader from "./PageHeader";
import Header from "./Header";
import BookingModule from "./BookingModule";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function BookOnline() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <PageHeader title="Book Online" currentPage="BOOK ONLINE" />
      <main>
        <section className="py-20 bg-muted/50">
          <div className="container relative">
            <p className="text-4xl font-bold text-center mb-12 font-oswald uppercase tracking-wider">
              Schedule Your Visit
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <BookingModule />
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop"
                  alt="Barber Chair"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
