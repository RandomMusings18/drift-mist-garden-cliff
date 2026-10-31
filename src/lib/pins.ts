import { create } from "zustand";
import { persist } from "zustand/middleware";

type Pins = {
  ids: string[];
  toggle: (id: string) => void;
  clear: () => void;
};

export const usePins = create<Pins>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const ids = get().ids;
        set({
          ids: ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id],
        });
      },
      clear: () => set({ ids: [] }),
    }),
    { name: "shard-atlas-pins", skipHydration: true },
  ),
);
