import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SpinLoader from "../../components/loaders/SpinLoader";

interface InputTypes {
  name: string;
  price: number;
  image: string;
  description: string;
}

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputTypes>();

  const handleAddProduct: SubmitHandler<InputTypes> = async (inputData) => {
    try {
      const data = await axios.post(
        "http://localhost:5000/api/services",
        inputData
      );
      console.log(data);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <div className="custom-width mx-auto">
      <h1>Add Service</h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="max-w-md mx-auto space-y-2"
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
          {loading ? <SpinLoader /> : "login"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
