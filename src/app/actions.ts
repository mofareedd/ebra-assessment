import type { TProduct } from "@/lib/types";

export async function findManyProducts(): Promise<TProduct[] | null> {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      return null;
    }
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function findProductById(
  productId: string,
): Promise<TProduct | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) {
      return null;
    }
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
