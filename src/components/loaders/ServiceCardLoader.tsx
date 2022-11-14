const ServiceCardLoader = () => {
  return (
    <div className="animate-pulse">
      <div className=" grid grid-cols-12 rounded bg-gray-50">
        <div className=" col-span-full cursor-pointer bg-gray-700 lg:col-span-5 xl:col-span-4">
          <div className="h-64 w-full bg-gray-300"></div>
        </div>

        <div className="col-span-full flex flex-col p-6 lg:col-span-7 lg:p-10 xl:col-span-8">
          <div className="h-4 rounded bg-gray-300"></div>
          <div className="mt-4 h-20 rounded bg-gray-300"></div>
          <div className="mt-4 h-4 w-1/4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardLoader;
