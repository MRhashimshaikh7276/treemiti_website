import Styles from "../../styles/header.module.css";
import storeProduct from "../../media/pngwing.com (7).png";
import Computer from "../../media//DisignGraphic.png";
import Printer from '../../media/Print 1.png';
import UIUX from '../../media/UIUX.png';
import UIUXCOMPUTER from '../../media/UIUX +CUOMPUter.png';
import FontDevloper from '../../media/FontDevloper.png';


function DesignHeader() {
  return (
    <>
      <header className={Styles.DesignHeader}>
        <div className={Styles.row}>
          <div className={Styles.LeftDesign}>
            <div className={Styles.CardWrap}>
            <div className={Styles.CardWrap2}>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                    <img src={Computer} alt="dd" />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Digital Graphics</h3>
                </div>
              </div>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                    <img src={Printer} alt="dd" />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Print Graphics</h3>
                </div>
              </div>
            </div>
            <div className={Styles.CardWrap2}>
            <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                    <img src={UIUX} alt="dd" />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>UI / UX Designing</h3>
                </div>
              </div>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                    <img src={UIUXCOMPUTER} alt="dd" />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>Advance Graphics</h3>
                </div>
              </div>
              <div className={Styles.Card}>
                <div className={Styles.cardcont}>
                  <div className="imgFit">
                    <img src={FontDevloper} alt="dd" />
                  </div>
                </div>
                <div className={Styles.cardcont}>
                  <h3>UI / UX Developer</h3>
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

export default DesignHeader;
