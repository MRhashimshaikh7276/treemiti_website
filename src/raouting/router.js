
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/navbar";
import Index from "../pages";
import Curses from "../pages/curses";
import Guidance from "../pages/Guidance";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


function Raouting() {

const Route = createBrowserRouter([
    {
 path: "/", element:(<><Navbar/><Index/></>)
    },
    {
        path: "/Curses", element:(<><Navbar/><Curses/></>)
    },
    {
        path:"/Guidance", element:(<><Navbar/><Guidance/></>)
    },
    {
        path:"/AboutUs", element:(<><Navbar/><AboutUs/></>)
    },
    {
        path:"/ContactUs", element:(<><Navbar/><ContactUs/></>)
    }
])


    return(
        <RouterProvider router={Route}/>
    )
}

export default Raouting;