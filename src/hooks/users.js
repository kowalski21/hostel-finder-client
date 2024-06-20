import { client } from "@/sdk";
import { useQuery } from "react-query";
import qs from "qs";
const filterQuery = {
  OR: [
    {
      username: {
        contains: "logan",
        mode: "insensitive",
      },
    },
  ],
};

export const useUsers = ({ queryParams, queryKey } = {}) => {
  return useQuery({
    queryFn: async () => {
      return await client.request("get", "/users", { params: queryParams });
    },
    queryKey: queryKey,
  });
};

export const useUser = ({ queryParams, queryKey, userId } = {}) => {
  return useQuery({
    queryFn: async () => {
      return await client.request("get", `/users/${userId}`);
    },
    queryKey: queryKey,
  });
};
