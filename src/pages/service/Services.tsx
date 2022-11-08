import ServiceCard from "../../components/cards/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ServiceTypes } from "../../types/ServiceTypes";

const fetchAllServices = async () => {
  return await axios.get("http://localhost:5000/api/services");
};

const Services = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: fetchAllServices,
  });

  const allServices = data?.data.data as ServiceTypes[];

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
    </div>
  );
};

export default Services;
