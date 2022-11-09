import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useAddReviewData } from "../../hooks/useReviewsData";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReviewInputTypes } from "../../types/ReviewTypes";

const ReviewInput = ({ serviceName }: { serviceName: string }) => {
  const { id } = useParams();
  const { mutate } = useAddReviewData(id as string);

  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewInputTypes>();

  const handleAddReview: SubmitHandler<ReviewInputTypes> = (data) => {
    const review = data.review;
    const userName = authContext?.user?.displayName as string;
    const userImage = authContext?.user?.photoURL as string;
    const userEmail = authContext?.user?.email as string;
    const serviceId = id as string;
    const reviewInputData = {
      review,
      userName,
      userImage,
      userEmail,
      serviceName,
      serviceId,
    };
    mutate(reviewInputData);
  };

  return (
    <div className="flex max-w-xl flex-col rounded-xl bg-gray-50 p-8 text-gray-800 shadow-sm lg:p-12">
      <div className="flex w-full flex-col items-center">
        <h2 className="text-center text-3xl font-semibold">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center space-y-3 py-6">
          <span className="text-center">How was your experience?</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            alt="profile-picture"
            className="h-10 w-10 rounded-full border border-gray-300 bg-gray-500"
            src={
              authContext?.user?.photoURL ||
              "https://source.unsplash.com/40x40/?portrait?1"
            }
          />
          <div>{authContext?.user?.displayName}</div>
        </div>
        <form
          onSubmit={handleSubmit(handleAddReview)}
          className="flex w-full flex-col"
        >
          <textarea
            rows={3}
            {...register("review")}
            placeholder="Message..."
            className="resize-none rounded-md bg-gray-50 p-4 text-gray-800"
          ></textarea>
          <button
            type="submit"
            disabled={!authContext?.user?.uid}
            className="my-8 rounded-md bg-violet-600 py-4 font-semibold text-gray-50"
          >
            Leave feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewInput;
