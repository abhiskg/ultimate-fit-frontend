import { useState } from "react";
import ServiceCard from "../../components/cards/ServiceCard";
import { ServiceDataTypes } from "../../types/ServiceTypes";
import { useServicesData } from "../../hooks/useServicesData";
import useDocTitle from "../../hooks/useDocTitle";

const Services = () => {
  useDocTitle("Services");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);

  const { data, isLoading, isError, error } = useServicesData(page, limit);

  const count = Math.ceil(data?.data.count / limit);

  const allServices = data?.data.data as ServiceDataTypes[];

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError && error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="custom-width mx-auto">
      {allServices.map((service) => (
        <div key={service._id}>
          <ServiceCard service={service} />
        </div>
      ))}
      {[...Array(count).keys()].map((num) => (
        <span
          className={`mx-1 bg-slate-500 py-2 px-3 ${
            num === page && "bg-blue-300"
          }`}
          key={num}
          onClick={() => setPage(num)}
        >
          {num + 1}
        </span>
      ))}
    </div>
  );
};

export default Services;
