import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useAddReviewData } from "../../hooks/useReviewsData";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReviewInputTypes } from "../../types/ReviewTypes";

const ReviewInput = ({ serviceName }: { serviceName: string | undefined }) => {
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
    if (!serviceName) {
      return;
    }
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
    reset();
  };

  return (
    <div className="flex flex-col rounded-xl bg-gray-100 p-4 text-gray-800 shadow-sm lg:p-8">
      <div className="flex w-full flex-col ">
        <div className="flex flex-col items-center space-y-2 py-4">
          <span className="text-center text-2xl  font-semibold">
            How was your experience?
          </span>
        </div>
        {authContext?.user && (
          <div className="my-3 flex items-center gap-2">
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
        )}

        <form
          onSubmit={handleSubmit(handleAddReview)}
          className="flex w-full flex-col"
        >
          <textarea
            rows={3}
            disabled={!authContext?.user?.uid}
            {...register("review")}
            placeholder="Message..."
            className="resize-none rounded-md border bg-gray-50 p-4 text-gray-800"
          ></textarea>
          <button
            type="submit"
            disabled={!authContext?.user?.uid}
            className="auth-button mt-5"
          >
            {authContext?.user ? "Leave feedback" : "Login to give feedback"}
          </button>
        </form>
        {!authContext?.user && (
          <Link
            to="/login"
            className="mt-4 text-center font-medium text-blue-500 hover:text-blue-600"
          >
            Login here
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReviewInput;
