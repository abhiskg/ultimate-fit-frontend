import { useContext } from "react";
import PingLoader from "../../components/loaders/PingLoader";
import ConfirmationModal from "../../components/modals/ConfirmationModat";
import EditModal from "../../components/modals/EditModal";
import { AuthContext } from "../../context/AuthContext";
import useDocTitle from "../../hooks/useDocTitle";
import { useMyReviewsData } from "../../hooks/useMyReviewsData";
import { ReviewDataTypes } from "../../types/ReviewTypes";

const MyReviews = () => {
  useDocTitle("MyReviews");
  const authContext = useContext(AuthContext);
  const userEmail = authContext?.user?.email as string;
  const { data, isLoading, isError, error } = useMyReviewsData(userEmail);

  if (isLoading) {
    return <PingLoader />;
  }
  if (isError) {
    return authContext?.logOut();
  }
  const reviews = data?.data.data as ReviewDataTypes[];

  if (reviews.length < 1) {
    return (
      <div className="header-style -mt-16 flex h-screen items-center justify-center">
        No Reviews Were Added
      </div>
    );
  }

  return (
    <div className="custom-width mx-auto  text-gray-800 ">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-60" />
            <col />
            <col className="w-24" />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Service Name</th>
              <th className="p-3">Reviews</th>
              <th className="p-3 text-right">Edit Review</th>
              <th className="p-3 text-right">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr
                key={review._id}
                className="border-b border-gray-300 border-opacity-20 bg-gray-50"
              >
                <td className="p-3">
                  <p>{review.serviceName}</p>
                </td>
                <td className="p-3">
                  <p>{review.review}</p>
                </td>
                <td className="p-3 text-center">
                  <EditModal review={review} />
                </td>
                <td className="p-3 text-right">
                  <ConfirmationModal id={review._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
