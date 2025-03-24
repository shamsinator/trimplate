import { useMemo } from "react";
import { useCart } from "@/lib/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EmptyCart from "@/components/pages/empty-cart";
import CartItem from "@/components/cart/CartItem";

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Cart({ open, onOpenChange }: CartProps) {
  const { items, totalPrice } = useCart();

  const subtotal = useMemo(() => totalPrice().toFixed(2), [totalPrice, items]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-full sm:max-w-md border-l overflow-y-auto !pr-0"
        side="right"
      >
        <SheetHeader className="space-y-4 pb-4 border-b">
          <SheetTitle className="text-xl font-oswald uppercase">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div aria-live="polite">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between font-medium">
                  <span className="text-base">SUBTOTAL:</span>
                  <span className="text-base">${subtotal}</span>
                </div>
                <div className="grid gap-2">
                  <Button
                    className="w-full bg-white hover:bg-gray-100 text-black border border-gray-200"
                    variant="ghost"
                  >
                    View Cart
                  </Button>
                  <Button className="w-full bg-black hover:bg-gray-900 text-white">
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
