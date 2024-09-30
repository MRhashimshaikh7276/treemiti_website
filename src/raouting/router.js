import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Index from "../pages";
import Curses from "../pages/curses";
import Guidance from "../pages/Guidance";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Footer from "../components/Footer/Footer";

function Raouting() {
  const Route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Index />
          <Footer />
        </>
      ),
    },

    {
      path: "/Courses",
      element: (
        <>
          <Navbar />
          <Curses />
          <Footer />
        </>
      ),
    },

    {
      path: "/Guidance",
      element: (
        <>
          <Navbar />
          <Guidance />
          {/* <Footer /> */}
        </>
      ),
    },

    {
      path: "/AboutUs",
      element: (
        <>
          <Navbar />
          <AboutUs />
        </>
      ),
    },

    {
      path: "/ContactUs",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
  ]);

  return <RouterProvider router={Route} />;
}

export default Raouting;
