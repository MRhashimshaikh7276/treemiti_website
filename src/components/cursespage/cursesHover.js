import Styles from "../../styles/cursesPage.module.css";

function CursesHover() {
  return (
    <>
      <section className={Styles.cursesHover} style={{position:"absolute",top:"45%",left:"0%", marginTop:"1.4rem", zIndex:"1"}}>
        <div className={Styles.HoverWrap}>

          <div className={Styles.first}>
            <div>
              <ul className={Styles.Hovercolum1}>
                <li className={Styles.hoverText1}>Career oriented courses</li>
                <li className={Styles.hoverText2}>Courses</li>
                <li>
                  <p className={Styles.hoverText3}>
                    Our courses offer a unique blend of theory and practical
                    knowledge, ensuring you’re ready to tackle real world
                    challenges. Receive a certificate to showcase your newfound
                    expertise. Start your learning adventure today
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={Styles.second}>
            <div>
              <ul className={Styles.Hovercolum}>
                <div>Design</div>
                <li>Certificate in Graphics Designing</li>
                <li>Certificate in Digital Advertisement</li>
                <li>Certificate in UI\UX Designing </li>
                <li>Certificate in Web Designing</li>
                <li>Advanced Graphics Designing</li>
                <li>Advanced UI/UX Designing</li>
              </ul>
            </div>
          </div>
          <div className={Styles.third}>
            <div>
              <ul className={Styles.Hovercolum}>
                <div>Delopment</div>
                <li>Certificate in Front End Development</li>
                <li>Certificate in Back End Development</li>
                <li>PHP Full Stack Web Development</li>
                <li>Python Full Stack Web Development</li>
                <li>Mean Stack Development</li>
                <li>Mern Stack Development</li>
              </ul>
            </div>
          </div>
          <div className={Styles.four}>
            <div>
              <ul className={Styles.Hovercolum}>
                <div>Business</div>
                <li>Certificate in Digital Marketing</li>
                <li>Certificate in Data Analytics</li>
                <li>Certificate in Data Science </li>
                <li>Certificate in Business Analytics</li>
                <li>Advanced Digital Marketing</li>
                <li>Advanced AI ML Data Science</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CursesHover;
