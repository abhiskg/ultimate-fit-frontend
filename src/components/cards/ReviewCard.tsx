import { ReviewDataTypes } from "../../types/ReviewTypes";

const ReviewCard = ({ review }: { review: ReviewDataTypes }) => {
  return (
    <div className=" mx-auto my-5 flex flex-col divide-y divide-gray-300 rounded-md bg-gray-100 p-6 text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={
                review.userImage ||
                "https://source.unsplash.com/100x100/?portrait"
              }
              alt=""
              className="h-12 w-12 rounded-full bg-gray-500 object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{review.userName}</h4>
            <span className="text-xs text-gray-600">{review.userEmail}</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4 text-sm text-gray-600">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
