// import Styles from "../../../styles/header.module.css";
import storeProduct from "../../../media/pngwing.com (26).png";

import FontDev from '../../../media/FontDev.png';
import BAckEndDev from '../../../media/BackEnd Dev.png';
import fullStackDev from '../../../media/FullStackDev.png';
import meanStack from '../../../media/meanStack.png';
import MarnStackdDev from '../../../media/MernStack.png';

import './Devlopements.scss';

function DevlopmentsCurses() {
  return (
    <>
      <header className="mainDevlopments">
        <div className="row">
          <div className="LeftDesign">
            <div className="CardWrap">
              <div className="CardWrap2">
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={FontDev} alt="Front End Development" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Front End Development</h3>
                  </div>
                </div>

                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={BAckEndDev} alt="Back End Development" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Back End Development</h3>
                  </div>
                </div>
              </div>
              <div className="CardWrap2">
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={fullStackDev} alt="Full Stack Development" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Full Stack Development</h3>
                  </div>
                </div>
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={meanStack} alt="Mean Stack Development" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Mean Stack Development</h3>
                  </div>
                </div>
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={MarnStackdDev} alt="Mern Stack Development" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Mern Stack Development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="RightDesign">
            <div className="BlogImgWrap">
              <div className="imgFit">
                <img src={storeProduct} alt="Store Product" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default DevlopmentsCurses;
