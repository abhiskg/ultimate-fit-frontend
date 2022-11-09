import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ReviewInputTypes } from "../types/ReviewTypes";

const fetchReviewsByServiceId = () => {
  return axios.get(`http://localhost:5000/api/services`);
};

const addNewReview = (reviewInputData: ReviewInputTypes) => {
  return axios.post("http://localhost:5000/api/services", reviewInputData);
};

export const useReviewsData = () => {};

export const useAddReviewData = () => {
  return useMutation(addNewReview);
};
