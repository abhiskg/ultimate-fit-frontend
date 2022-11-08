import { Link } from "react-router-dom";
import { ServiceTypes } from "../../types/ServiceTypes";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }: { service: ServiceTypes }) => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <div className=" grid grid-cols-12  bg-gray-50">
        <div className=" bg-gray-700 col-span-full lg:col-span-4">
          <img src="https://source.unsplash.com/random/640x480" alt="" />
        </div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <h1 className="text-3xl font-semibold">{service.name}</h1>
          <p className="flex-1 pt-2">{service.description}</p>
          <Link
            rel="noopener noreferrer"
            to={`../service/${service._id}`}
            className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-600"
          >
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="flex items-center justify-between pt-2">
            <div className="font-medium">Price: {service.price}$</div>
            <span className="text-xs">3 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
