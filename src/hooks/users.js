import { useQuery } from "react-query";
import { directus } from "../lib";

export const useUsers = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.users.readByQuery(query);
    },
    ...options,
  });
};

export const useUser = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.users.readOne(id, query),
    queryKey,
    ...options,
  });
};

export const useRoles = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.roles.readByQuery(query);
    },
    ...options,
  });
};
