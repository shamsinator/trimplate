import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { useCart } from "@/lib/cart";
import { useToast } from "@/components/ui/use-toast";
import ProductCard from "@/components/cart/ProductCard";
import { products } from "@/data/products";

export default function Shop() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(
    (product: (typeof products)[0]) => {
      addItem(product);
      // Analytics handled via data attributes
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        className: "bg-green-500 text-white border-none",
      });
    },
    [addItem, toast],
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shop | Trimplate</title>
        <meta
          name="description"
          content="Shop our premium collection of hair care products, grooming tools, and styling essentials."
        />
      </Helmet>
      <TopBar />
      <Header />
      <PageHeader title="Shop" currentPage="SHOP" />
      <main
        className="py-20"
        data-track="View"
        data-category="Page"
        data-label="Shop"
      >
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold font-oswald uppercase tracking-wider">
              Featured Products
            </h1>
            <p className="text-muted-foreground">
              Professional grooming products for the modern gentleman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
