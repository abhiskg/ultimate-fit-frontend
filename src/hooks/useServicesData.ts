import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ServiceInputTypes } from "../types/ServiceTypes";


const fetchAllServices = async (page: number, limit: number) => {
  return await axios.get(
    `http://localhost:5000/api/services?page=${page}&limit=${limit}`
  );
};

const addNewService = async (inputData: ServiceInputTypes) => {
  return await axios.post("http://localhost:5000/api/services", inputData);
};

export const useServicesData = (page: number, limit: number) => {
  return useQuery(["services", page], () => fetchAllServices(page, limit), {
    keepPreviousData: true,
  });
};

export const useAddServiceData = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewService);
};
