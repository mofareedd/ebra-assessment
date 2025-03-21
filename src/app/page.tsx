import { ProductSkeleton } from "@/components/products/prdouct-skeleton";
import { buttonVariants } from "@/components/ui/button";
import type { TProduct } from "@/lib/types";
import { Suspense } from "react";
import { Filters } from "./_components/filters";
import { HeroSection } from "./_components/hero";
import { ProductsList } from "./_components/products-list";
import { findManyProducts } from "./actions";

export default async function Home() {
  const products = await findManyProducts();

  if (!products) {
    return (
      <div className="">
        <HeroSection />
        <div className="flex flex-col items-center justify-center py-20 space-y-6">
          <h1 className="text-4xl font-bold">Request Failed</h1>
          <a href="/" className={buttonVariants()}>
            Try again
          </a>
        </div>
      </div>
    );
  }
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="">
      <HeroSection />
      <div className="container mx-auto p-10">
        <div className="flex">
          <Filters categories={categories} />
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
