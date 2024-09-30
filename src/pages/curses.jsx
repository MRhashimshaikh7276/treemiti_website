

import CursesHeader from '../components/cursespage/cursesHeader';
import CursesSection from '../components/cursespage/cursesSection';




function Curses() {
    

    let main ={
        width:"1920px",
        overflowX:"hidden"
    }


    return(
        <>
       <main style={main}>
         <CursesHeader/>
         <CursesSection/>
      
         
      
       </main>

        </>
    )
}

export default Curses;
