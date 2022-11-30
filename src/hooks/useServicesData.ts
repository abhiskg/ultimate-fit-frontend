import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { ServiceInputTypes } from "../types/ServiceTypes";

const fetchAllServices = async (page: number, limit: number) => {
  return await axios.get(
    `https://cyan-trout-kit.cyclic.app/api/services?page=${page}&limit=${limit}`
  );
};

const addNewService = async (inputData: ServiceInputTypes) => {
  return await axios.post(
    "https://cyan-trout-kit.cyclic.app/api/services",
    inputData
  );
};

export const useServicesData = (page: number, limit: number) => {
  return useQuery(["services", page], () => fetchAllServices(page, limit), {
    keepPreviousData: true,
  });
};

export const useHomePageServicesData = (page: number, limit: number) => {
  return useQuery(["home-services"], () => fetchAllServices(page, limit), {
    keepPreviousData: true,
  });
};

export const useAddServiceData = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewService, {
    onSuccess: () => {
      toast.success("Service Added Successfully");
    },
  });
};
