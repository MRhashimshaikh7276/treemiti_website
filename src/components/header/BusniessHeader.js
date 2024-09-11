import Styles from "../../styles/header.module.css";

import pngWing from "../../media/pngwing.com (18).png";
import digitalMarketing from "../../media/Digital Marketing.png";

export default function BusinessCourses() {
  return (
    <>
      <header className={Styles.bussiness}>
        <div className={Styles.row}>
          <div className={Styles.BussinessLeft}>
            <div className={Styles.cardBussiness}>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                
                    <img src={digitalMarketing} />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                
                    <img src={digitalMarketing} />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </div>
            <div className={Styles.cardBussiness2}>
            <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                
                    <img src={digitalMarketing} />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                
                    <img src={digitalMarketing} />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.BussinessRight}>
            <div className={Styles.bussinessImgWrap}>
              <div className="imgFit"><img src={pngWing} /></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
