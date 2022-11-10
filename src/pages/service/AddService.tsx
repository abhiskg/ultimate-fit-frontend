import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SpinLoader from "../../components/loaders/SpinLoader";
import useDocTitle from "../../hooks/useDocTitle";
import { useAddServiceData } from "../../hooks/useServicesData";
import { ServiceInputTypes } from "../../types/ServiceTypes";

const AddService = () => {
  useDocTitle("AddService");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceInputTypes>();

  const { mutate, isLoading } = useAddServiceData();

  const handleAddProduct: SubmitHandler<ServiceInputTypes> = (inputData) => {
    mutate(inputData);
  };

  return (
    <div className="custom-width mx-auto">
      <h1 className="header-style">Add a new service</h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="mx-auto mb-10 max-w-md space-y-2"
      >
        <div>
          <label htmlFor="name">Service Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="input-form"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            {...register("price")}
            className="input-form"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            {...register("image")}
            className="input-form"
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <input
            type="text"
            {...register("description")}
            className="input-form"
          />
        </div>
        <button
          type="submit"
          className={`auth-button grid place-items-center ${
            loading && "cursor-not-allowed"
          }`}
        >
          {isLoading ? <SpinLoader /> : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
