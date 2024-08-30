import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import OurMenu from "../pages/OurMenu";
import Error from "../pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <OurMenu />,
  },
]);

export default routes;
