import type { TProduct } from "@/lib/types";
import { create } from "zustand";

import { persist } from "zustand/middleware";
// Define the type for a cart items
interface CartState {
  cart: TProduct[];
  addToCart: (item: TProduct) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

// Zustand store with persistence
export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id,
          );
          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? {
                      ...cartItem,
                      quantity:
                        item.quantity > 1
                          ? cartItem.quantity + item.quantity
                          : cartItem.quantity + 1,
                    }
                  : cartItem,
              ),
            };
          }
          return {
            cart: [
              ...state.cart,
              { ...item, quantity: item.quantity > 1 ? item.quantity : 1 },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0), // Remove item if quantity is 0
        })),

      clearCart: () => set({ cart: [] }),

      totalItems: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().cart.reduce(
          (total, item) => total + item.quantity * item.price,
          0,
        ) ?? 0,
    }),

    {
      name: "cart-storage",
    },
  ),
);
