import { memo, useCallback } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image?: string;
    quantity: number;
  };
}

const CartItem = memo(({ item }: CartItemProps) => {
  const { removeItem, updateQuantity } = useCart();

  const increaseQuantity = useCallback(() => {
    updateQuantity(item.id, item.quantity + 1);
  }, [item.id, item.quantity, updateQuantity]);

  const decreaseQuantity = useCallback(() => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  }, [item.id, item.quantity, updateQuantity, removeItem]);

  return (
    <div className="flex items-start space-x-4 pb-6 border-b last:border-0">
      {item.image && (
        <img
          src={item.image}
          alt={`Image of ${item.name}`}
          width="80"
          height="80"
          loading="lazy"
          decoding="async"
          className="h-20 w-20 object-cover rounded bg-muted"
        />
      )}
      <div className="flex-1 space-y-1">
        <h3 className="font-medium leading-none">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center space-x-2 pt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={decreaseQuantity}
            aria-label={`Decrease quantity of ${item.name}`}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={increaseQuantity}
            aria-label={`Increase quantity of ${item.name}`}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
});

export default CartItem;
