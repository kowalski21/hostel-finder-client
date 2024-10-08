import { useMutation, useQuery } from "react-query";
import { directus } from "../lib";

const collection = "hostel";
export const useHostels = (queryKey, query, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return directus.items(collection).readByQuery(query);
    },
    ...options,
  });
};

export const useHostel = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};

export const useNewHostelMutation = () => {
  return useMutation({
    mutationFn: async ({ payload, file }) => {
      const _res = await directus.files.createOne(file);
      payload.thumbnail = _res.id;
      const res = await directus.items(collection).createOne(payload);
      return res;
    },
  });
};

export const useUpdateHostelMutation = () => {
  return useMutation({
    mutationFn: async ({ id, payload, file }) => {
      if (file) {
        const _res = await directus.files.createOne(file);
        payload.thumbnail = _res.id;
      }

      const res = await directus.items(collection).updateOne(id, payload);
      return res;
    },
  });
};

export const useHostelDistance = (queryKey, query, options = {}) => {
  // let url = `/map/search`
  let queryParams;
  if (query) {
    queryParams = `/map/search?lat=${query.lat}&lng=${query.lng}`;
  } else {
    queryParams = `/map/search`;
  }
  return useQuery({
    queryFn: async () => {
      const response = await directus.transport.get(queryParams);
      // response.
      return response.data;
    },
    queryKey,
    ...options,
  });
};
