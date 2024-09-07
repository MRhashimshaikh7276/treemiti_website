import Styles from '../styles/section.module.css';


// components//
import WeProvide from './section/weProvide';
import Feedback from './section/Feedback';

// images //
import pen from '../media/graphic-design-pen 1.png';
import dev from '../media/devlopment.png';
import bussines from '../media/bussiness.png'
import DevOps from '../media/clud&Ops.png'
import man from '../media/3d-rendering-cartoon-like-boy 1.png'
import Placements from './section/placements.';
import WhyUs from './section/WhyUs';
import Blog from './section/blog';


import  Philosfer from '../components/header/PhilosferHeader';
import  Design from '../components/header/DesignHeader';
import  Devlopment from '../components/header/DevlopemetsCurses';





function Section() {

let section = {
    width:"100%",
    backgroundColor: " #FFFFFF",
}
let absulote = {
    

    width: "90%",
    padding: "1.3rem 0rem",
    boxShadow: "0px 3px 7px 0px #3c012850",
   backgroundColor:"#E3E3E3",
   position:"absolute",
   top: "46.1rem",
   marginLeft: "6rem",
}

    return (
        <section style={section}>

            <div style={absulote}>
                <ul className={Styles.row}>
                    <li onClick={Philosfer}>Our Philosophy</li>
                    <li onClick={Design}>Design Courses</li>
                    <li onClick={Devlopment}>Devlopment Courses</li>
                    <li onClick={Devlopment}>Bussiness Courses</li>
                </ul>
            </div>

            <div className={Styles.weProvide}>
                <div className={Styles.weLeft}>
                <WeProvide img={pen} text="Design"/>
                <WeProvide img={dev} text="Devlopment"/>
                <div className={Styles.wrap2}>
                <WeProvide img={bussines} text="Bussiness"/>
                <WeProvide img={DevOps} text="Cloud & DevOps"/>
                </div>

                   
                </div>
                <div className={Styles.weRight}>
                   <div>
                   <div className={Styles.weText1}>
                        <h2>The Courses we Provide</h2>
                    </div>
                    <div className={Styles.manImg}>
                        <img src={man} alt='ssd' />
                    </div>
                   </div>
                </div>

            </div>
            <Feedback/>
            <Placements/>
            <WhyUs/>
            <Blog/>



        </section>
    )
}
export default Section;
