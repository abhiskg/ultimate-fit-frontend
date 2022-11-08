import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loaders/PingLoader";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  if (authContext?.loading) {
    return (
      <div className="mt-20 flex justify-center">
        <PingLoader />
      </div>
    );
  }

  if (!authContext?.user) {
    <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
