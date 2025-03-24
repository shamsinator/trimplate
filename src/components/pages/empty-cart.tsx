import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
        <ShoppingCart className="w-12 h-12 text-muted-foreground" />
      </div>
      <h1 className="text-2xl font-bold">Your cart is currently empty</h1>
      <p className="text-muted-foreground max-w-md">
        I think the below button is important. Hit this button and you will find
        a lot of interesting products on our "Shop" page
      </p>
      <Button asChild className="bg-primary hover:bg-primary/90 text-black">
        <Link to="/shop">Back to Shop</Link>
      </Button>
    </div>
  );
}
