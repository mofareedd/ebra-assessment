"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import CartProduct from "./cart-product";

export function Cart() {
  const { cart, totalItems, totalPrice } = useCart();
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    setItemCount(totalItems()); // Update only on client
  }, [cart]); // Re-run when cart changes
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="relative cursor-pointer"
          size={"icon"}
          variant={"ghost"}
        >
          <ShoppingBag />
          <span className="absolute top-0 right-0 flex h-4 w-4 text-xs items-center justify-center rounded-full bg-foreground text-background">
            {itemCount}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="min-h-screen overflow-y-scroll overflow-x-hidden py-2">
        <SheetHeader>
          <SheetTitle>
            My Cart <span className="text-muted-foreground">({itemCount})</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col">
          {cart.length ? (
            cart.map((p) => <CartProduct key={p.id} product={p} />)
          ) : (
            <h2 className="text-2xl text-muted-foreground font-bold text-center">
              Empty Cart
            </h2>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-end space-y-3 pb-2 sticky bottom-0 bg-background">
          <div className="flex items-center justify-between p-3 font-bold px-2">
            <p>Total</p>
            <span>${totalPrice().toFixed(2)}</span>
          </div>
          <hr />
          <a href="/cart" className={cn(buttonVariants(), "mx-2")}>
            Checkout <ShoppingBag />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
