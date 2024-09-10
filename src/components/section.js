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


import Philosfer from '../components/header/PhilosferHeader';
import Design from '../components/header/DesignHeader';
import Devlopment from '../components/header/DevlopemetsCurses';





function Section() {

    let section = {
        width: "100%",
        backgroundColor: " #FFFFFF",
    }


    return (
        <section style={section}>



            <div className={Styles.weProvide}>
                <div className={Styles.weLeft}>
                    <WeProvide img={pen} text="Design" />
                    <WeProvide img={dev} text="Devlopment" />

                    <WeProvide img={bussines} text="Bussiness" />
                    <WeProvide img={DevOps} text="Cloud & DevOps" />



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
            <Feedback />
            <Placements />
            <WhyUs />
            <Blog />



        </section>
    )
}
export default Section;
