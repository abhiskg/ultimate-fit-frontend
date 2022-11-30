import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchService = async (id: string) => {
  return await axios.get(
    `https://cyan-trout-kit.cyclic.app/api/services/${id}`
  );
};

export const useServiceData = (id: string) => {
  return useQuery(["service", id], () => fetchService(id as string));
};
