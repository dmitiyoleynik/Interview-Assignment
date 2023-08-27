import { create } from 'zustand';

import { ship } from 'src/utils/types';

type store = {
  isLoading: boolean;
  ships: ship[];
  fetchShips: () => Promise<void>;
};

const useStore = create<store>((set) => ({
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
