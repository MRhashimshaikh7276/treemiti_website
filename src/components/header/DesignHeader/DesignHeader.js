// import Styles from "../../../styles/header.module.css";
import storeProduct from "../../../media/pngwing.com (7).png";
import Computer from "../../../media/DisignGraphic.png";
import Printer from '../../../media/Print 1.png';
import UIUX from '../../../media/UIUX.png';
import UIUXCOMPUTER from '../../../media/UIUX +CUOMPUter.png';
import FontDevloper from '../../../media/FontDevloper.png';
import './DesignHeader.scss';

function DesignHeader() {
  return (
    <>
      <header className="DesignHeader">
        <div className="row">
          <div className="LeftDesign">
            <div className="CardWrap">
              <div className="CardWrap2">
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={Computer} alt="Digital Graphics" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Digital Graphics</h3>
                  </div>
                </div>
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={Printer} alt="Print Graphics" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Print Graphics</h3>
                  </div>
                </div>
              </div>
              <div className="CardWrap2">
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={UIUX} alt="UI / UX Designing" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>UI / UX Designing</h3>
                  </div>
                </div>
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={UIUXCOMPUTER} alt="Advance Graphics" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>Advance Graphics</h3>
                  </div>
                </div>
                <div className="Card">
                  <div className="cardcont">
                    <div className="imgFit">
                      <img src={FontDevloper} alt="UI / UX Developer" />
                    </div>
                  </div>
                  <div className="cardcont">
                    <h3>UI / UX Developer</h3>
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

export default DesignHeader;
