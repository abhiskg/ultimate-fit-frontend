import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default rootRoute;
