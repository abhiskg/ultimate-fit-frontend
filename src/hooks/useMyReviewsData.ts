import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface UpdateDataType {
  id: string;
  review: string;
}

const fetchReviewsByUserEmail = (userEmail: string) => {
  return axios.get(
    `https://cyan-trout-kit.cyclic.app/api/reviews/my-reviews?userEmail=${userEmail}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("service-token")}`,
      },
    }
  );
};

const deleteReviewData = (id: string) => {
  return axios.delete(`https://cyan-trout-kit.cyclic.app/api/reviews/${id}`);
};
const updateReviewData = ({ id, review }: UpdateDataType) => {
  return axios.patch(`https://cyan-trout-kit.cyclic.app/api/reviews/${id}`, {
    review,
  });
};

export const useMyReviewsData = (userEmail: string) => {
  return useQuery(["my-reviews", userEmail], () =>
    fetchReviewsByUserEmail(userEmail)
  );
};

export const useDeleteMyReviewData = (userEmail: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteReviewData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-reviews", userEmail]);
      toast.success("Review deleted successfully");
    },
  });
};

export const useUpdateMyReviewData = (userEmail: string) => {
  const queryClient = useQueryClient();
  return useMutation(updateReviewData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["my-reviews", userEmail]);
      toast.success("Review updated successfully");
    },
  });
};
