import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchService = async (id: string) => {
  return await axios.get(`http://localhost:5000/api/services/${id}`);
};

export const useServiceData = (id: string) => {
  return useQuery(["service", id], () => fetchService(id as string));
};
