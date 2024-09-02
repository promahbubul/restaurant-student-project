import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import OurMenu from "../pages/OurMenu";
import Error from "../pages/Error";
import Reservation from "../pages/Reservation";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

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
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default routes;
