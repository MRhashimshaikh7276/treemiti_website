
import Styles from '../../styles/section.module.css';
import { useState } from 'react';
import { Designersplacement,DigitalMarketingplacement,WebDeveloperplacement,DataScientistplacement } from '../../data/placementData';

function Placements() {

    const [activedata, setActivedata] = useState(() => Designersplacement);
    
    const headerComponents = {
        Designers: Designersplacement,
        DigitalMarketing: DigitalMarketingplacement,
        WebDeveloper: WebDeveloperplacement,
        DataScientist:DataScientistplacement
      };
    
    const handleClick = (componentKey) => {
        setActivedata(() => headerComponents[componentKey]);
      };
    
    return (
        <>


            <div className={Styles.placemenets}>
                <div className='row'>
                    <div className={Styles.Placeleft}>
                        <div className={Styles.placeBox}>
                            <div className={Styles.placeText1}>
                                <h2>Our Proud Placements</h2>
                            </div>
                            <div className={Styles.placeText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. In cursus <br /> facilisis ullamcorper <br /> pellentesque dapibus lorem.<br /> Fermentum nec ac faucibus <br /> nunc massa pretium. Risus <br /> ultrices non auctor sit eros.<br /> Arcu metus sapien diam<br /> elementum ut sit varius<br /> condimentum.</p>
                            </div>

                        </div>
                        <div className={Styles.placeBtn}>
                            <button className={Styles.place1}>See More</button>
                            <button className={Styles.place2}>Get Placed</button>
                        </div>

                    </div>

                    <div className={Styles.placeright}>
                        <div className={Styles.bar}>
                            <ul >
                                <li onClick={() => handleClick("Designers")}>#Designers</li>
                                <li onClick={() => handleClick("DigitalMarketing")}>#Digital Marketing</li>
                                <li onClick={() => handleClick("WebDeveloper")}>#Web Developer</li>
                                <li onClick={() => handleClick("DataScientist")}>#Data Scientist</li>
                            </ul>
                        </div>

                        <div className={Styles.placeRepet}>
                        
                        {activedata.map((deta,index)=>(
                            <div className={Styles.placeCard}>
                                <div className={Styles.placeImg}>
                                    <img src={deta.stduentimg} />
                                </div>
                                <div className={Styles.placeCardText}>
                                    <span className={Styles.text1}>{deta.course}</span>
                                    <span className={Styles.text2}>{deta.name}</span>
                                </div>
                            
                            </div>
                        ))}
                            
                        </div>
                        
                    </div>

                </div>
            </div>


        </>
    )
}

export default Placements;
