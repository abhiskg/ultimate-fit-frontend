import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReviewInputTypes } from "../types/ReviewTypes";

const fetchReviewsByServiceId = (serviceId: string) => {
  return axios.get(
    `https://cyan-trout-kit.cyclic.app/api/reviews?serviceId=${serviceId}`
  );
};

const addNewReview = (reviewInputData: ReviewInputTypes) => {
  return axios.post(
    "https://cyan-trout-kit.cyclic.app/api/reviews",
    reviewInputData
  );
};

export const useReviewsData = (serviceId: string) => {
  return useQuery(["reviews", serviceId], () =>
    fetchReviewsByServiceId(serviceId)
  );
};

export const useAddReviewData = (serviceId: string) => {
  const queryClient = useQueryClient();
  return useMutation(addNewReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews", serviceId]);
    },
  });
};
