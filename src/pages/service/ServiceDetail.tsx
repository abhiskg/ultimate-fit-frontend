import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/cards/ReviewCard";
import ReviewInput from "../../components/inputs/ReviewInput";

const fetchService = async (id: string) => {
  return await axios.get(`http://localhost:5000/api/services/${id}`);
};

const ServiceDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["service", id],
    queryFn: () => fetchService(id as string),
  });
  console.log(data);
  return (
    <div>
      <ReviewCard />
      <ReviewInput />
    </div>
  );
};

export default ServiceDetail;
