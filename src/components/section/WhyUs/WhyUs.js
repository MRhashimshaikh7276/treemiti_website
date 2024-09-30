import fareme1 from '../../../media/Frame 456.png';
import Man from '../../../media/Frame 633.png';

import './WhyUs.scss';  // Assuming your regular CSS classes are defined here

function WhyUs() {
    return (
        <>
            <div className="WhyUs">

                <div className="leftWhy">
                    <div className="WhyUSTEXT">
                        <h2>Why </h2>
                        <span>US</span>
                    </div>
                    <div className="WhyWrap">
                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='dw' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>

                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='dd' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>

                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='ds' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>

                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='ds' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>

                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='dd' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>

                        <div className="WhyCard">
                            <div className="WhyImg">
                                <img src={fareme1} alt='ds' />
                            </div>
                            <div className="WhyText1">
                                <h3>Career Guidance</h3>
                            </div>
                            <div className="WhyText2">
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightWhy">
                    <div className="WhyMan">
                        <img src={Man} alt='ds' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyUs;
