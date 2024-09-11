import Styles from "../../styles/cursesPage.module.css";
import quastionIcon from "../../media/quaction.png";
import ArrowMap from "../../media/streamline_arrow-roadmap.png";
import bulp from "../../media/bulp.png";
import CursesSyllebus from "../cursespage/cursesSyllebus";
import AboutDesignCourses from "../cursespage/aboutDesign";



function CursesSection() {
  return (
    <>
      <section className={Styles.curseswidth}>
        <div className={Styles.cursesWrap}>

        <div className="row">
        <div className={Styles.left}>
          <div className={Styles.abc}>
            <aside className={Styles.divWrap}>
              <div className={Styles.CursesText1}>All Courses</div>
              <div className={Styles.CursesText}>Development</div>
              <div className={Styles.CursesText}>Business</div>
              <div className={Styles.CursesText}>Design</div>
              <div className={Styles.CursesText}>
                <div className="imgFit" style={{paddingRight:".6rem"}}><img src={quastionIcon} /></div>
                <span>About Designing</span>
              </div>
              <div className={Styles.CursesText}>
               <div className="imgFit" style={{paddingRight:".6rem"}}> <img src={ArrowMap} /></div>
                <span>Road Map</span>
              </div>
              <div className={Styles.CursesText}>
              <div className="imgFit" style={{paddingRight:".6rem"}}>  <img src={bulp} /></div>
                <span>Certification</span>
              </div>
            </aside>
          </div>
        </div>

        <div className={Styles.right}>
          <div className={Styles.rightWrap}>
            <div className={Styles.rowWrap}>
              <div className={Styles.left}>
                <h3>Job Oriented Design Courses</h3>
              </div>
              <div className={Styles.right}>
                <h3>Career Oriented Design Courses</h3>
              </div>
            </div>
          </div>
          <CursesSyllebus />
       
        </div>
        </div>
        </div>
        <AboutDesignCourses />
      
      </section>
     
    </>
  );
}

export default CursesSection;
