const { client } = require("@/sdk");
const { useQuery } = require("react-query");

export const useHostels = ({ queryParams, queryKey } = {}) => {
  return useQuery({
    queryFn: async () => {
      return await client.request("get", "/hostels", { params: queryParams });
    },
    queryKey: queryKey,
  });
};
