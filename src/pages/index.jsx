import Footer from "../components/Footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Section from "../components/section";






function Index(){

    let main = {
        width:"1920px",
        position:"absolute",
        overflowX: "hidden",
    }
return(
    <>

    <main style={main}>
    <Navbar/>
    <Header/>
    <Section/>
    <Footer/>
    

    </main>
    </>
)
}

export default Index;