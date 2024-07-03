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

export const useHostel = ({ queryKey, id } = {}) => {
  return useQuery({
    queryFn: async () => await client.request("get", `/hostels/${id}`),
    queryKey: queryKey,
    enabled: id ? true : false,
  });
};

export const useHostelRooms = ({ queryKey, hostelId, queryParams } = {}) => {
  return useQuery({
    queryFn: async () => await client.request("get", `/hostels/${hostelId}/rooms`, { params: queryParams }),
    queryKey: queryKey,
  });
};
