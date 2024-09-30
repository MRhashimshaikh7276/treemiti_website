import Styles from "../../styles/section.module.css";

// components//
import WeProvide from "./weProvide/weProvide";
import Feedback from "./Feedback/Feedback";

import Placements from "./Placements/placements.";
import WhyUs from "./WhyUs/WhyUs";
import Blog from "./blog/blog";

// images //
import pen from "../../media/graphic-design-pen 1.png";
import dev from "../../media/OBJECTS.svg";
import bussines from "../../media/bussiness.png";
import DevOps from "../../media/clud&Ops.png";
import man from "../../media/3d-rendering-cartoon-like-boy 1.png";



function Section() {
  let section = {
    width: "100%",
    backgroundColor: " #FFFFFF",
  };

  return (
    <section style={section}>
      <div className={Styles.weProvide}>
        <div className={Styles.weLeft}>
          <div className={Styles.WeProvideWrap}>
            <div className={Styles.weProvideRow1}>
              <WeProvide img={pen} text="Design" />
              <WeProvide img={dev} text="Devlopment" />
            </div>
            <div className={Styles.weProvideRow2}>
              <WeProvide img={bussines} text="Bussiness" />
              <WeProvide img={DevOps} text="Cloud & DevOps" />
            </div>
          </div>
        </div>
        <div className={Styles.weRight}>
          <div className={Styles.weImgWrap}>
            <div className={Styles.weText1}>
              <h2>The Courses we Provide</h2>
            </div>
            <div className={Styles.manImg}>
              <img src={man} alt="ssd" />
            </div>
          </div>
        </div>
      </div>
      <Feedback />
      <Placements />
      <WhyUs />
      <Blog />
    </section>
  );
}
export default Section;
