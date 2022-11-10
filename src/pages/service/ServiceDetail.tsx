import { useParams } from "react-router-dom";
import ReviewCard from "../../components/cards/ReviewCard";
import ReviewInput from "../../components/inputs/ReviewInput";
import PingLoader from "../../components/loaders/PingLoader";
import useDocTitle from "../../hooks/useDocTitle";
import { useReviewsData } from "../../hooks/useReviewsData";
import { useServiceData } from "../../hooks/useServiceData";
import { ReviewDataTypes } from "../../types/ReviewTypes";
import { ServiceDataTypes } from "../../types/ServiceTypes";

const ServiceDetail = () => {
  useDocTitle("ServiceDetails");

  const { id } = useParams();

  const { data, isLoading } = useServiceData(id as string);
  const { data: reviewsData, isLoading: isReviewLoading } = useReviewsData(
    id as string
  );

  if (isLoading) {
    return <PingLoader />;
  }
  if (isReviewLoading) {
    return <div>Loading</div>;
  }

  const service = data?.data.data as ServiceDataTypes;
  const reviews = reviewsData?.data.data as ReviewDataTypes[];

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
          <ReviewInput serviceName={service.name} />
        </section>
      </div>

      <div className="">
        {reviews.length < 1 && <div>No Review Found</div>}
        {reviews.length > 0 &&
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
