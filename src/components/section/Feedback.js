import Styles from "../../styles/section.module.css";
import creactive from "../../media/creative.png";
import Feedbackman from "../../media/Frame 572.png";
import Student from "../../media/Frame 574.png";

import contact from "../../media/Frame 433.png";

import star from "../../media/Star 4.png";

function Feedback() {
  return (
    <>
      <div className={Styles.mainFeedback}>
        <div className={Styles.rowFeed}>
          <div className={Styles.leftFeed}>
            <div className={Styles.Feedtext1}>
              <h2>Employers Feedback</h2>
            </div>

            <div className={Styles.Feedcard}>
              <div style={{ display: "flex", flexDirection: "column",gap:"1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column",gap:"1rem" }}>
                <div className={Styles.Feedcreate}>
                  <img src={creactive} alt="dds" />
                </div>
                <div className={Styles.Feedtext2}>
                  <p>
                    We always find talented professionals from <br />
                    Treemiti Informatics. We consider Treemiti as our <br />
                    training partner for latest technologies in our field
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column",gap:".5rem" }}>
                <div className={Styles.Feedtext3}>
                  <h3>Mr.Ajay Deore</h3>
                </div>
                <div className={Styles.Feedtext4}>
                  <h4>Director, Creative Web Solution</h4>
                </div>
              </div>
              </div>
            </div>

            <div className={Styles.row2}>
              <div className={Styles.seebtn}>
                <button>See More</button>
              </div>
              <div className={Styles.Employers}>
                <img src={Feedbackman} alt="du" />
              </div>
            </div>
          </div>
          <div className={Styles.rightFeed}>
            <div className={Styles.Feedtext1}>
              <h2>Students Reviews</h2>
            </div>
            <div className={Styles.row}>
              <div className={Styles.ReviewsLeft}>
                <div>
                  <img src={Student} alt="de" />
                </div>
              </div>

              <div className={Styles.ReviewsRight}>
                <div className={Styles.StudentCard}>
                  <div className={Styles.card2}>
                    <div className="imgFit">
                      <img src={contact} />
                    </div>

                    <span>Lokesh Mahajan</span>
                  </div>
                  <div className={Styles.px2}>
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                  </div>
                  <div className={Styles.Feedtext5}>
                    <p>
                      I am very clear as to why Treemiti <br /> Informatics is
                      the best graphic <br /> designing, web designing, ui/ux{" "}
                      <br /> designing institute in Nashik because <br /> they
                      have the best trainers and the <br /> most up-to-date
                      course material. I am <br /> now confident, competent and
                      skillfulv <br /> graphic designer, web designer, ui/ux
                    </p>
                  </div>                 
                </div>
              

              </div>
              
            </div>
            <div className={Styles.seebtn2}>
                  <button>See More</button>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Feedback;
