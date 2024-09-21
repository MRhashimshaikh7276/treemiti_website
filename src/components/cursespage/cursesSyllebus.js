import Styles from "../../styles/cursesPage.module.css";



import { useState } from "react";
import {
  DesignCourses,
  devlopmentsCourses,
  BusinessCourses,
} from "../../data/AllCoursesData";

function CursesSyllebus() {
  const [activedata, setActivedata] = useState(() => DesignCourses);

  const coursesComponents = {
    DesignCourses: DesignCourses,
    devlopmentsCourses: devlopmentsCourses,
    BusinessCourses: BusinessCourses,
  };
  const Click = (componentKey) => {
    setActivedata(() => coursesComponents[componentKey]);
  };

  return (
    <>
      <div className={Styles.SyllebusMain}>
        {activedata.map((data, index) => (
          <div className={Styles.Wrap}>
            <div className={Styles.left}>
              <div>
                <img src={data.coursesImg} alt="fg" />
              </div>
            </div>
            <div className={Styles.right}>
              <div className={Styles.allWrap}>
                <div className={Styles.text1}>
                  <h3>{data.HeadingText}</h3>
                </div>
                <div className={Styles.row}>
                  <div>{data.day}</div>
                  <div>{data.month}</div>
                  <div>Finance Available</div>
                  <div>1 : 1 Monitoring</div>
                </div>
                <div className={Styles.text2}>
                  <p>{data.p}</p>
                </div>
                <div className={Styles.btnRow}>
                  <button className={Styles.btn1}>View Course</button>
                  <button className={Styles.btn2}>Download syllebus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CursesSyllebus;
