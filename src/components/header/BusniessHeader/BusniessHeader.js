// import Styles from "../../../styles/header.module.css";

import pngWing from "../../../media/pngwing.com (18).png";
import digitalMarketing from "../../../media/Digital Marketing.png";
import DataAnalist from '../../../media/DataAnalist.png';
import DigitalMarketing from '../../../media/DIgitalMarketing.png';

import './BusniessHeader.scss';

export default function BusinessCourses() {
  return (
    <>
      <header className="bussiness">
        <div className="row">
          <div className="BussinessLeft">
            <div className="cardBussiness">
              <div className="Card">
                <div className="cardcont">
                  <div className="imgFit">
                    <img src={digitalMarketing} alt="Digital Marketing" />
                  </div>
                </div>
                <div className="cardcont">
                  <h3>Digital Marketing</h3>
                </div>
              </div>
              <div className="Card">
                <div className="cardcont">
                  <div className="imgFit">
                    <img src={DataAnalist} alt="Data Analytics" />
                  </div>
                </div>
                <div className="cardcont">
                  <h3>Data Analytics</h3>
                </div>
              </div>
            </div>
            <div className="cardBussiness2">
              <div className="Card">
                <div className="cardcont">
                  <div className="imgFit">
                    <img src={DigitalMarketing} alt="Digital Marketing" />
                  </div>
                </div>
                <div className="cardcont">
                  <h3>Digital Marketing</h3>
                </div>
              </div>
              <div className="Card">
                <div className="cardcont">
                  <div className="imgFit">
                    <img src={digitalMarketing} alt="Digital Marketing" />
                  </div>
                </div>
                <div className="cardcont">
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="BussinessRight">
            <div className="bussinessImgWrap">
              <div className="imgFit">
                <img src={pngWing} alt="Business Image" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
