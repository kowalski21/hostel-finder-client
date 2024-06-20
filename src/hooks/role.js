import { client } from "@/sdk";
import { useQuery } from "react-query";

export const useRoles = ({ queryKey } = { queryKey: ["UseRoles"] }) => {
  return useQuery({
    queryFn: async () => {
      const response = await client.request("get", "/roles");
      return response.data;
    },
    queryKey,
  });
};
