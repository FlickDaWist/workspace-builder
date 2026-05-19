import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  selections: Record<string, any[]>;
  setSelections: (selections: Record<string, any[]>) => void;
  removeItem: (category: string, itemId: string) => void;
  updateQuantity: (category: string, itemId: string, delta: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      selections: {},
      setSelections: (selections) => set({ selections }),

      removeItem: (category, itemId) =>
        set((state) => ({
          selections: {
            ...state.selections,
            [category]: (state.selections[category] || []).filter(
              (i) => i.id !== itemId,
            ),
          },
        })),

      updateQuantity: (category, itemId, delta) =>
        set((state) => ({
          selections: {
            ...state.selections,
            [category]: (state.selections[category] || []).map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    quantity: Math.max(1, (item.quantity || 1) + delta),
                  }
                : item,
            ),
          },
        })),

      clearCart: () => set({ selections: {} }),
    }),
    { name: "office-rental-storage" },
  ),
);
