import Styles from "../../styles/cursesPage.module.css";

import brush from "../../media/Group 1591.png";

function AboutDesignCourses() {
  return (
    <section className={Styles.designMain}>
      <div className={Styles.designWrap}>
        <div className={Styles.designText1}>
          <h2>About Design Courses</h2>
        </div>
        <div className={Styles.designText2}>
          <p>
            Design completes the task in an effective and beautiful way. It
            ranges from graphic design, where images and typography portray the
            message, to user experience design, which guides smooth interaction
            within digital products. From logos and websites to product
            interfaces, design combines aesthetics, functionality, and
            user-centered thinking.
          </p>
        </div>
        <div className={Styles.designText3}>
          <div className="imgFit" >
            
            <img src={brush} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDesignCourses;
