// app/zustand/store.js
import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  double: 0,
  increase: () =>
    set((state) => {
      const newCount = state.count + 1;
      return { count: newCount, double: newCount * 2 };
    }),
}));

export const useCount = () => useCountStore((s) => s.count);
export const useIncrement = () => useCountStore((s) => s.increase);
export const useDouble = () => useCountStore((s) => s.double);
