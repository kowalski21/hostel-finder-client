import { useMutation, useQuery } from "react-query";
import { directus } from "../lib";
const collection = "room";
export const useRooms = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.items(collection).readByQuery(query);
    },
    ...options,
  });
};

export const useRoom = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};

export const useNewRoomMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return directus.items(collection).createOne(payload);
    },
  });
};

export const useUpdateRoomMutation = () => {
  return useMutation({
    mutationFn: async ({ id, payload }) => {
      return directus.items(collection).updateOne(id, payload);
    },
  });
};
