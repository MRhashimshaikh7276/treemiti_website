

import Header from "../components/header/header.js";
import Section from "../components/section/section.js";

import { height } from "@fortawesome/free-solid-svg-icons/fa0";

function Index(){

    let main = {
        width:"1920px",
        overflowX: "hidden",
    }

return(
    <>

    <main style={main}>
    <Header/>
    <Section/> 
    
    </main>
    </>
)
}

export default Index;