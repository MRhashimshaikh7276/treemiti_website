import Styles from "../../styles/header.module.css";
import storeProduct from "../../media/pngwing.com (7).png";
import Computer from "../../media/Digital Graphics 1.png";

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
                      {" "}
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
                      {" "}
                      <img src={Computer} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Digital Graphics</h3>
                  </div>
                </div>
              </div>
              <div className={Styles.CardWrap2}>
                <div className={Styles.Card}>
                  <div className={Styles.cardcont}>
                    <div className="imgFit">
                      {" "}
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
                      {" "}
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
                      {" "}
                      <img src={Computer} alt="dd" />
                    </div>
                  </div>
                  <div className={Styles.cardcont}>
                    <h3>Digital Graphics</h3>
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
