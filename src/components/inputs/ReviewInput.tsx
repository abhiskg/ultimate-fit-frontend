import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ReviewInput = ({ serviceId }: { serviceId: string }) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            alt="profile-picture"
            className="w-10 h-10 border rounded-full bg-gray-500 border-gray-300"
            src={
              authContext?.user?.photoURL ||
              "https://source.unsplash.com/40x40/?portrait?1"
            }
          />
          <div>{authContext?.user?.displayName}</div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows={3}
            placeholder="Message..."
            className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
          ></textarea>
          <button
            type="button"
            disabled={!authContext?.user?.uid}
            className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600"
          >
            Leave feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewInput;
