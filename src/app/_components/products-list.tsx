"use client";

import { LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import type { TLayout, TProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

// Sample product data

type IProductsList = {
  products: TProduct[];
};
export function ProductsList({ products }: IProductsList) {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Catrgories</h1>
        <div className="flex items-center space-x-2">
          <Button size="icon" aria-label="Grid view">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant={"outline"} size="icon" aria-label="List view">
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
