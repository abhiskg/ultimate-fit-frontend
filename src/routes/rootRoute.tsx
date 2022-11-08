import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Main from "../pages/home/Main";
import ServiceDetail from "../pages/service/ServiceDetail";
import Services from "../pages/service/Services";
const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
      },
    ],
  },
]);

export default rootRoute;
