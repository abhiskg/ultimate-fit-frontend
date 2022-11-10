import { Link } from "react-router-dom";
import ServiceMiniCard from "../../components/cards/ServiceMiniCard";
import PingLoader from "../../components/loaders/PingLoader";
import useDocTitle from "../../hooks/useDocTitle";
import { useHomePageServicesData } from "../../hooks/useServicesData";
import { ServiceDataTypes } from "../../types/ServiceTypes";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Testimonial from "./sections/Testimonial";

const Main = () => {
  useDocTitle("Home");
  const { data, isLoading } = useHomePageServicesData(0, 3);
  const services = data?.data.data as ServiceDataTypes[];

  if (isLoading) {
    return <PingLoader />;
  }

  return (
    <div className="custom-width mx-auto">
      <div>
        <Hero />
      </div>
      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.length > 0 &&
          services.map((service) => (
            <ServiceMiniCard key={service._id} service={service} />
          ))}
      </div>
      <div className="my-5 flex justify-center rounded">
        <Link
          to="/services"
          className="rounded bg-blue-500 px-3 py-2 font-medium text-white"
        >
          See All
        </Link>
      </div>
      <Process />
      <Testimonial />
    </div>
  );
};

export default Main;
