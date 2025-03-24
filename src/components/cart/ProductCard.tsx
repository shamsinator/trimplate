import { memo } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = memo(({ product, onAddToCart }: ProductCardProps) => {
  return (
    <article className="group">
      <div
        className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted"
        data-track="View"
        data-category="Product"
        data-label={product.name}
        data-meta={`{"productId":"${product.id}","price":${product.price}}`}
      >
        <img
          src={product.image}
          alt={`Image of ${product.name}`}
          width="300"
          height="300"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-medium mb-2">{product.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          ${product.price.toFixed(2)}
        </span>
        <Button
          onClick={() => onAddToCart(product)}
          variant="outline"
          aria-label={`Add ${product.name} to cart`}
          data-track="Click"
          data-category="Ecommerce"
          data-label={`Add to Cart - ${product.name}`}
          data-meta={`{"productId":"${product.id}","price":${product.price}}`}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
});

export default ProductCard;
