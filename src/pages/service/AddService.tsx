import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import SpinLoader from "../../components/loaders/SpinLoader";
import useDocTitle from "../../hooks/useDocTitle";
import { useAddServiceData } from "../../hooks/useServicesData";
import { ServiceInputTypes } from "../../types/ServiceTypes";

const ServiceSchema = z.object({
  name: z.string().min(1, { message: "Please enter service name" }),
  price: z.string().min(1, { message: "Please enter service price" }),
  image: z
    .string()
    .url({ message: "Enter a valid url" })
    .min(1, { message: "Please enter the picture url" }),
  description: z
    .string()
    .min(1, { message: "Please enter service description" }),
});

const AddService = () => {
  useDocTitle("AddService");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceInputTypes>({ resolver: zodResolver(ServiceSchema) });

  const { mutate, isLoading } = useAddServiceData();

  const handleAddProduct: SubmitHandler<ServiceInputTypes> = (inputData) => {
    try {
      mutate(inputData);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
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
          {errors.name?.message && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            {...register("price")}
            className="input-form"
          />
          {errors.price?.message && (
            <p className="error-message">{errors.price.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            {...register("image")}
            className="input-form"
          />
          {errors.image?.message && (
            <p className="error-message">{errors.image.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="input-form"
          />
          {errors.description?.message && (
            <p className="error-message">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`auth-button grid place-items-center ${
            isLoading && "cursor-not-allowed"
          }`}
        >
          {isLoading ? <SpinLoader /> : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
