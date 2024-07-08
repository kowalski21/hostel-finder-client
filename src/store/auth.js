import { create } from "zustand";
import { devtools } from "zustand/middleware";
const useAuthStore = create(
  devtools((set) => ({
    user: null,
    actions: {
      modUser: (payload) => {
        set(() => ({ user: payload }));
      },
      clearUser: () => {
        // client.removeToken()
        set({ user: null });
      },
    },
  }))
);

export const useAuthUser = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => state.actions);
