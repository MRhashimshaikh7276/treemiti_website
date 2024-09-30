import creactive from "../../../media/creative.png";
import Feedbackman from "../../../media/Frame 572.png";
import Student from "../../../media/Frame 574.png";
import contact from "../../../media/Frame 433.png";
import star from "../../../media/Star 4.png";
import './Feedback.scss';

function Feedback() {
  return (
    <>
      <div className="mainFeedback">
        <div className="rowFeed">
          <div className="leftFeed">
            <div className="Feedtext1">
              <h2>Employers Feedback</h2>
            </div>

            <div className="Feedcard">
              <div className="flexColumnLargeGap">
                <div className="flexColumnMediumGap">
                  <div className="Feedcreate">
                    <img src={creactive} alt="Creative Feedback" />
                  </div>
                  <div className="Feedtext2">
                    <p>
                      We always find talented professionals from <br />
                      Treemiti Informatics. We consider Treemiti as our <br />
                      training partner for latest technologies in our field.
                    </p>
                  </div>
                </div>
                <div className="flexColumnSmallGap">
                  <div className="Feedtext3">
                    <h3>Mr.Ajay Deore</h3>
                  </div>
                  <div className="Feedtext4">
                    <h4>Director, Creative Web Solution</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="seebtn">
                <button>See More</button>
              </div>
              <div className="Employers">
                <img src={Feedbackman} alt="Feedback Image" />
              </div>
            </div>
          </div>

          <div className="rightFeed">
            <div className="Feedtext1">
              <h2>Students Reviews</h2>
            </div>
            <div className="row">
              <div className="ReviewsLeft">
                <div>
                  <img src={Student} alt="Student Feedback" />
                </div>
              </div>

              <div className="ReviewsRight">
                <div className="StudentCard">
                  <div className="card2">
                    <div className="imgFit">
                      <img src={contact} alt="Student Contact" />
                    </div>

                    <span>Lokesh Mahajan</span>
                  </div>
                  <div className="px2">
                    <img src={star} alt="Star Rating" />
                    <img src={star} alt="Star Rating" />
                    <img src={star} alt="Star Rating" />
                    <img src={star} alt="Star Rating" />
                    <img src={star} alt="Star Rating" />
                  </div>
                  <div className="Feedtext5">
                    <p>
                      I am very clear as to why Treemiti <br /> Informatics is
                      the best graphic <br /> designing, web designing, ui/ux{" "}
                      <br /> designing institute in Nashik because <br /> they
                      have the best trainers and the <br /> most up-to-date
                      course material. I am <br /> now confident, competent and
                      skillful <br /> graphic designer, web designer, ui/ux
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="seebtn2">
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
