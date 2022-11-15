const ReviewLoader = () => {
  return (
    <div className="my-5 w-full animate-pulse divide-y divide-gray-300 rounded-md bg-gray-100 p-6 text-gray-800">
      <div className="flex items-center gap-4 p-4">
        <div className="h-12 w-12 rounded-full bg-gray-300" />
        <div>
          <div className="h-3 w-32 rounded bg-gray-300"></div>
          <div className="mt-2 h-3 w-28  rounded bg-gray-300"></div>
        </div>
      </div>

      <div className="mt-1 h-4 rounded bg-gray-300 "></div>
      <div className="mt-1 h-4 rounded bg-gray-300 "></div>
    </div>
  );
};

export default ReviewLoader;
