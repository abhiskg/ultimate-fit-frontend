import { useState } from "react";
import ServiceCard from "../../components/cards/ServiceCard";
import { ServiceDataTypes } from "../../types/ServiceTypes";
import { useServicesData } from "../../hooks/useServicesData";
import useDocTitle from "../../hooks/useDocTitle";
import PingLoader from "../../components/loaders/PingLoader";

const Services = () => {
  useDocTitle("Services");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);

  const { data, isLoading, isError, error } = useServicesData(page, limit);

  const count = Math.ceil(data?.data.count / limit);

  const allServices = data?.data.data as ServiceDataTypes[];

  if (isLoading) {
    return <PingLoader />;
  }

  if (isError && error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="custom-width mx-auto">
      <h1 className="header-style">Services</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
        {allServices.map((service) => (
          <div className="mb-5" key={service._id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="mb-10 flex justify-end">
        {[...Array(count).keys()].map((num) => (
          <span
            className={`mx-1 cursor-pointer  py-2 px-3 font-medium text-white ${
              num === page ? "bg-blue-500" : "bg-blue-300"
            }`}
            key={num}
            onClick={() => setPage(num)}
          >
            {num + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;
