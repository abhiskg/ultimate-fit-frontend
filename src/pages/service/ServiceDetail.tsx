import { useParams } from "react-router-dom";
import ReviewCard from "../../components/cards/ReviewCard";
import ReviewInput from "../../components/inputs/ReviewInput";
import PingLoader from "../../components/loaders/PingLoader";
import ReviewLoader from "../../components/loaders/ReviewLoader";
import ServiceDetailsLoader from "../../components/loaders/ServiceDetailsLoader";
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

  // if (isLoading) {
  //   return <PingLoader />;
  // }
  // if (isReviewLoading) {
  //   return <div>Loading</div>;
  // }

  const service = data?.data.data as ServiceDataTypes | undefined;
  const reviews = reviewsData?.data.data as ReviewDataTypes[] | undefined;

  return (
    <div className="custom-width mx-auto">
      <h1
        className={`${
          isLoading
            ? "mb-14 mt-4 flex h-7 w-1/3 animate-pulse justify-center rounded bg-gray-300"
            : "header-style"
        }`}
      >
        {service && service.name}
      </h1>
      <div className="grid grid-cols-12 gap-5">
        {isLoading && <ServiceDetailsLoader />}
        {service && (
          <section className="col-span-full w-full lg:col-span-7 xl:col-span-8">
            <img src={service.image} className="h-96 w-full" alt="" />
            <p className="my-2 text-lg font-medium">
              Service Price: {service.price}$
            </p>
            <p className="text-gray-800">Description: {service.description}</p>
          </section>
        )}
        <section className=" col-span-full w-full lg:col-span-5 xl:col-span-4">
          <ReviewInput serviceName={service?.name} />
        </section>
      </div>

      <div className="my-10">
        {reviews && reviews.length < 1 && (
          <div className="my-10 text-center text-2xl font-medium">
            No Review Found
          </div>
        )}
        <div className="grid gap-4 lg:grid-cols-2">
          {isReviewLoading &&
            [...Array(4).keys()].map((num) => <ReviewLoader key={num} />)}
          {reviews &&
            reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
