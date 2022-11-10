import { ServiceDataTypes } from "../../types/ServiceTypes";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceMiniCard = ({ service }: { service: ServiceDataTypes }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
      <PhotoProvider>
        <PhotoView src={service.image}>
          <img
            className="w-full object-cover object-center md:h-36 lg:h-48"
            src={service.image}
            alt="blog"
          />
        </PhotoView>
      </PhotoProvider>
      <div className="p-6">
        <h1 className="title-font mb-1 text-lg font-medium text-gray-900">
          {service.name}
        </h1>
        <p className="mb-2 leading-relaxed text-gray-600">
          {service.description.length > 100
            ? service.description.slice(0, 100) + "..."
            : service.description}
        </p>
        <p className="mb-3 font-medium">Price: {service.price}$</p>
        <div className="flex flex-wrap items-center ">
          <Link
            to={`../services/${service._id}`}
            className="inline-flex items-center text-blue-500 md:mb-2 lg:mb-0"
          >
            View Details
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceMiniCard;
