"use client";
import { useCart } from "@/hooks/use-cart";
import type { TLayout, TProduct } from "@/lib/types";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Rating } from "../rating";
import { Button } from "../ui/button";

type IProductCard = {
  product: TProduct;
};
export function ProductCard({ product }: IProductCard) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col space-y-2 group">
      <div className="relative w-full h-72 border overflow-hidden">
        <a
          href={`/${product.id}`}
          className="relative block w-full h-72 overflow-hidden"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover absolute "
          />
        </a>
        <Button
          className="absolute w-full h-10 -bottom-10 group-hover:bottom-0 transform duration-300 rounded-none z-20"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add To Cart <ShoppingBag />
        </Button>
      </div>

      <div className="flex flex-col space-y-1 p-2">
        <div className="flex items-center space-x-1">
          <Rating
            rating={product.rating.rate}
            showText={false}
            disabled
            size={16}
          />
        </div>
        <a
          href={`/${product.id}`}
          className="text-sm font-bold hover:underline"
        >
          {product.title}
        </a>
        <span className="font-medium text-sm">${product.price}</span>
      </div>
    </div>
  );
}
