import { client } from "@/sdk";
import { useMutation } from "react-query";

export const useUpdateUserMutation = () =>
  useMutation({
    mutationFn: async ({ id, payload }) => {
      const response = await client.request("patch", `/users/${id}`, { data: payload });
      return response;
    },
  });

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: async ({ payload }) => {
      const response = await client.request("post", `/users`, { data: payload });
      return response;
    },
  });
};
