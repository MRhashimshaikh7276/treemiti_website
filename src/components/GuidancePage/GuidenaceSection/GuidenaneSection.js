import "./GuidenceSection.scss";

import CarrerGuid from "../../../media/CaeererGuidencse.png";

import GuidDevlopments from '../../../media/GuidenceDevlopments.png'

function GuidenceSection() {








  return (
    <>
      <section className="GuidenceSec">
        <div className="rowGuid">
          <div className="leftGuid">
            <div className="carrerGuid">
            <div className="imgFit">
              <img src={CarrerGuid} alt="fdf" />
            </div>
            </div>
            <div className="GuidText1">
              <h3>CAREER GUIDANCE</h3>
            </div>  
          </div>
          <div className="rightGuid">
            <div className="DevlopGuid">
            <div className="imgFit">
              <img src={GuidDevlopments} alt="fdf" />
            </div>
            </div>
            <div className="GuidText1">
              <h3>PERSONALITY
              DEVELOPMENT</h3>
            </div>
          </div>
        </div>


{/* contect change */}


<></>

      </section>
    </>
  );
}

export default GuidenceSection;
