import { Link } from "react-router-dom";
import { ServiceDataTypes } from "../../types/ServiceTypes";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }: { service: ServiceDataTypes }) => {
  return (
    <div className=" bg-gray-100 text-gray-900">
      <div className=" grid grid-cols-12 rounded bg-gray-50">
        <PhotoProvider>
          <PhotoView src={service.image}>
            <div className=" col-span-full cursor-pointer bg-gray-700 lg:col-span-5 xl:col-span-4">
              <img
                src={service.image}
                className="h-64 w-full"
                alt={service.name}
              />
            </div>
          </PhotoView>
        </PhotoProvider>
        <div className="col-span-full flex flex-col p-6 lg:col-span-7 lg:p-10 xl:col-span-8">
          <h1 className="text-3xl font-semibold">{service.name}</h1>
          <p className="flex-1 pt-2">
            {service.description.length > 100
              ? service.description.slice(0, 100) + "..."
              : service.description}
          </p>
          <div className="pt-2 font-medium">Price: {service.price}$</div>
          <Link
            rel="noopener noreferrer"
            to={`${service._id}`}
            className="inline-flex items-center space-x-2 pt-2 pb-2 text-sm text-blue-500"
          >
            <span>View Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
