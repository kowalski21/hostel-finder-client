import { create } from "zustand";
import { devtools } from "zustand/middleware";
const useLocationStore = create(
  devtools((set) => ({
    location: null,
    actions: {
      modLocation: (payload) => {
        set(() => ({ location: payload }));
      },
      clearLocation: () => {
        // client.removeToken()
        set({ location: null });
      },
    },
  }))
);

export const useLocation = () => useLocationStore((state) => state.location);
export const useLocationActions = () => useLocationStore((state) => state.actions);
