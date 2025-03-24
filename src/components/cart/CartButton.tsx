import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { playClickSound } from "@/lib/sound";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback } from "react";

interface CartButtonProps {
  onClick: () => void;
}

export function CartButton({ onClick }: CartButtonProps) {
  const { totalItems } = useCart();
  const itemCount = totalItems();
  const handleClick = useCallback(() => {
    playClickSound();
    onClick();
  }, [onClick]);

  return (
    <motion.button
      className="hover:text-primary transition-colors relative"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      aria-label={`Open shopping cart. ${itemCount} item${itemCount !== 1 ? "s" : ""} in cart.`}
    >
      <ShoppingBag className="h-5 w-5" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            {itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
