import { directus } from "@/lib";
import { useAuthActions } from "@/store/auth";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useAuthHook = () => {
  const actions = useAuthActions();
  const router = useRouter();
  return useQuery({
    queryFn: async () => {
      return await directus.users.me.read({ fields: "*,role.id,role.name" });
    },
    queryKey: ["AuthUser", router.pathname],
    onError: (e) => {
      router.push("/auth/login");
    },
    onSuccess: (data) => {
      actions.modUser(data);
    },
  });
};

export const useAuth = () => {
  return useAuthHook();
};
