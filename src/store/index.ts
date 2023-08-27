import { create } from 'zustand';

import { Ship } from 'src/utils/types';

type Store = {
  isLoading: boolean;
  ships: Ship[];
  fetchShips: () => Promise<void>;
};

const useStore = create<Store>((set) => ({
  isLoading: false,
  ships: [],
  fetchShips: async () => {
    set({ isLoading: true });
    fetch('http://localhost:3000/ships')
      .then((response) => response.json())
      .then((data) => {
        set({ isLoading: false, ships: data });
      })
      .catch(() => {
        set({ isLoading: false });
      });
  },
}));

export default useStore;
