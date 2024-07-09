import { useQuery } from "react-query";
import { directus } from "../lib";

const collection = "room_request";
export const useRoomRequests = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.items(collection).readByQuery(query);
    },
    ...options,
  });
};

export const useRoomRequest = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
