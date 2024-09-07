import Footer from "../components/Footer";
import PhilosferHeader from "../components/header/PhilosferHeader.js";
import Navbar from "../components/navbar";
import Section from "../components/section";
import DesignHeader from '../components/header/DesignHeader.js';
import DevlopmentsCurses from "../components/header/DevlopemetsCurses.js";






function Index(){

    let main = {
        width:"1920px",
        position:"absolute",
        overflowX: "hidden",
    }

return(
    <>

    <main style={main}>
    <DevlopmentsCurses/>
    <Section/>
    <Footer/>
    

    </main>
    </>
)
}

export default Index;