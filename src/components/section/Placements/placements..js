import { useState } from "react";
import {
  Designersplacement,
  DigitalMarketingplacement,
  WebDeveloperplacement,
  DataScientistplacement,
} from "../../../data/placementData";

import './placements.scss'; // Assume this is where you define the regular CSS classes

function Placements() {
  const [activedata, setActivedata] = useState(() => Designersplacement);

  const headerComponents = {
    Designers: Designersplacement,
    DigitalMarketing: DigitalMarketingplacement,
    WebDeveloper: WebDeveloperplacement,
    DataScientist: DataScientistplacement,
  };

  const handleClick = (componentKey) => {
    setActivedata(() => headerComponents[componentKey]);
  };

  return (
    <>
      <div className="placemenets">
        <div className="PlacementsRow">
          <div className="Placeleft">
            <div className="placeBox">
              <div className="placeText1">
                <h2>Our Proud Placements</h2>
              </div>
              <div className="placeText2">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In cursus <br />
                  facilisis ullamcorper <br /> pellentesque dapibus lorem.
                  <br /> Fermentum nec ac faucibus <br /> nunc massa pretium.
                  Risus <br /> ultrices non auctor sit eros.
                  <br /> Arcu metus sapien diam
                  <br /> elementum ut sit varius
                  <br /> condimentum.
                </p>
              </div>
            </div>
            <div className="placeBtn">
              <button className="place1">See More</button>
              <button className="place2">Get Placed</button>
            </div>
          </div>

          <div className="placeright">
            <div className="bar">
              <ul>
                <li onClick={() => handleClick("Designers")}>#Designers</li>
                <li onClick={() => handleClick("DigitalMarketing")}>
                  #Digital Marketing
                </li>
                <li onClick={() => handleClick("WebDeveloper")}>
                  #Web Developer
                </li>
                <li onClick={() => handleClick("DataScientist")}>
                  #Data Scientist
                </li>
              </ul>
            </div>

            <div className="placeRepet">
              {activedata.map((deta, index) => (
                <div className="placeCard" key={index}>
                  <div className="placeImg">
                    <img src={deta.stduentimg} alt="Student" />
                  </div>
                  <div className="placeCardText">
                    <span className="text1">{deta.course}</span>
                    <span className="text2">{deta.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placements;
