import Styles from "../../styles/header.module.css";
import storeProduct from "../../media/pngwing.com (26).png";

import FontDev from '../../media/FontDev.png';
import BAckEndDev from '../../media/BackEnd Dev.png';
import fullStackDev from '../../media/FullStackDev.png'
import  meanStack from '../../media/meanStack.png';
import MarnStackdDev from '../../media/MernStack.png'

function DevlopmentsCurses() {
  return (
    <>
      <header className={Styles.mainDevlopments}>
        <div className={Styles.row}>
          <div className={Styles.LeftDesign}>
            <div className={Styles.CardWrap}>
              <div className={Styles.CardWrap2}>
                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                     
                      <img src={FontDev} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Front End Development</h3>
                  </div>
                </div>

                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                     
                      <img src={BAckEndDev} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Back End Development</h3>
                  </div>
                </div>
              </div>
              <div className={Styles.CardWrap2}>
                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                    
                      <img src={fullStackDev} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Full Stack Development</h3>
                  </div>
                </div>
                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                   
                      <img src={meanStack} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Mean Stack Development</h3>
                  </div>
                </div>
                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                     
                      <img src={MarnStackdDev} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Mern Stack Development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.RightDesign}>
            <div className={Styles.BlogImgWrap}>
              <div className="imgFit">
            
                <img src={storeProduct} alt="djdb" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default DevlopmentsCurses;
