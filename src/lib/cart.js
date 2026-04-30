import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(persist((set, get) => ({
  items: [],
  add: (p, qty = 1) => set(s => {
    const ex = s.items.find(i => i.id === p.id);
    if (ex) {
      return { items: s.items.map(i => i.id === p.id ? { ...i, qty: i.qty + qty } : i) };
    }
    return { items: [...s.items, { ...p, qty }] };
  }),
  remove: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),
  update: (id, qty) => set(s => ({
    items: qty <= 0 ? s.items.filter(i => i.id !== id) : s.items.map(i => i.id === id ? { ...i, qty } : i)
  })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
  count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
}), { name: "hamza-cart-v1" }));