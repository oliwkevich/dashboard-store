import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return toast.error("Товар уже в кошику!");
        }

        set({ items: [...get().items, product] });
        toast.success("Товар добавлений в кошик!");
      },
      removeItem: (productId) => {
        set({
          items: [...get().items.filter((item) => item.id !== productId)],
        });
        toast.success("Товар було вилучено з кошика!");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
