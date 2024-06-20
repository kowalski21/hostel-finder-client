import { client } from "@/sdk";
import { useAuthActions } from "@/store/auth";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const useAuthHook = () => {
  const actions = useAuthActions();
  const router = useRouter();
  return useQuery({
    queryFn: async () => {
      return await client.authUser();
    },
    queryKey: ["AuthUser", client.getToken(), router.pathname],
    onError: (e) => {
      router.push("/login");
    },
    onSuccess: (data) => {
      console.log(data);
      actions.modUser(data.data);
    },
  });
};

export const useAuth = () => {
  //   const { data, isLoading } = useAuthHook();
  return useAuthHook();
};
