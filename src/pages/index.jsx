
import Navbar from "../components/navbar";
import Header from "../components/header/header.js";
import Section from "../components/section";
import Footer from "../components/Footer";

function Index(){

    let main = {
        width:"1920px",
        position:"absolute",
        overflowX: "hidden",
    }

return(
    <>

    <main style={main}>
    
  
    <Header/>
    <Section/>
    <Footer/>

    </main>
    </>
)
}

export default Index;