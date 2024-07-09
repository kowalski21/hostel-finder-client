import { useQuery } from "react-query";
import { directus } from "../lib";
const collection = "tenant";
export const useTenants = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.items(collection).readByQuery(query);
    },
    ...options,
  });
};

export const useTenant = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
