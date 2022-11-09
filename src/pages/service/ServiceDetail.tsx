import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/cards/ReviewCard";
import ReviewInput from "../../components/inputs/ReviewInput";
import { useServiceData } from "../../hooks/useServiceData";
import { ServiceDataTypes } from "../../types/ServiceTypes";

const ServiceDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useServiceData(id as string);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const service = data?.data.data as ServiceDataTypes;
  return (
    <div className="custom-width mx-auto">
      <h1 className="header-style">{service.name}</h1>
      <div className="grid grid-cols-12 gap-2">
        <section className="col-span-8 w-full">
          <img src={service.image} className="h-96 w-full" alt="" />
          <p>Service Price:{service.price}</p>
          <p>{service.description}</p>
        </section>
        <section className=" col-span-4 w-full">
          <ReviewInput serviceId={service._id} />
        </section>
      </div>

      <div className="">
        <ReviewCard />
      </div>
    </div>
  );
};

export default ServiceDetail;
