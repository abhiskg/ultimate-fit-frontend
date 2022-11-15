import { ReviewDataTypes } from "../../types/ReviewTypes";

const ReviewCard = ({ review }: { review: ReviewDataTypes }) => {
  return (
    <div className="my-5 w-full divide-y divide-gray-300 rounded-md bg-gray-100 p-6 text-gray-800">
      <div className="flex items-center gap-4 p-4">
        <img
          src={
            review.userImage || "https://source.unsplash.com/100x100/?portrait"
          }
          alt=""
          className="h-12 w-12 rounded-full bg-gray-500 object-cover"
        />
        <div>
          <h4 className="font-bold">{review.userName}</h4>
          <span className="text-xs text-gray-600">{review.userEmail}</span>
        </div>
      </div>

      <p className="space-y-2 p-4 text-sm text-gray-600">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
