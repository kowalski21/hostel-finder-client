import { client } from "@/sdk";
import { useMutation } from "react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await client.authenticateUser(payload);
      return response;
    },
  });
};
