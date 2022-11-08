import { useState } from "react";
import SpinLoader from "../../components/loaders/SpinLoader";

const AddService = () => {
  const [loading, setLoading] = useState(false);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="custom-width mx-auto">
      <h1>Add Service</h1>
      <form
        onSubmit={handleAddProduct}
        className="max-w-md mx-auto space-y-2"
        action=""
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="input-form" />
        </div>
        <div>
          <label htmlFor="name">Price</label>
          <input type="text" className="input-form" />
        </div>
        <div>
          <label htmlFor="name">Image</label>
          <input type="text" className="input-form" />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <input type="text" className="input-form" />
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
