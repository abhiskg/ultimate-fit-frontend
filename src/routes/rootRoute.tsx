import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Blog from "../pages/blog/Blog";
import Main from "../pages/home/Main";
import MyReviews from "../pages/review/MyReviews";
import AddService from "../pages/service/AddService";
import ServiceDetail from "../pages/service/ServiceDetail";
import Services from "../pages/service/Services";
import ErrorPage from "../pages/error/ErrorPage";
const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/home",
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
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default rootRoute;
