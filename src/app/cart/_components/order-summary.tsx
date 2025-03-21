"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";

export function OrderSummary() {
  const [total, setTotal] = useState(0);

  const { cart, totalPrice } = useCart();
  const SHIPPING = 20;
  const TAX = 0.2;

  useEffect(() => {
    setTotal(totalPrice());
  }, [cart]);
  return (
    <section className="lg:col-span-1">
      <div className="border rounded-sm shadow-xs bg-background">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>${SHIPPING}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>${(total * TAX).toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${(total + total * TAX + SHIPPING).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="w-full space-y-4">
            <Button disabled={total < 1} className="w-full">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a href="/products">Continue Shopping</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
