import { mapClient } from "@/lib";
import { useQuery } from "react-query";

export const useGetPlaceDetails = (queryKey, place_id, options = {}) => {
  return useQuery({
    queryFn: async () => {
      const response = await fetch(`/api/places?place_id=${place_id}`);
      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        return data;
      } else {
        throw new Error(data?.message || "Error connecting to server");
      }
      //   console.log(response.ok);
    },
    queryKey,
    refetchInterval: 20 * 60 * 1000,
    refetchOnWindowFocus: false,
    ...options,
  });
};
