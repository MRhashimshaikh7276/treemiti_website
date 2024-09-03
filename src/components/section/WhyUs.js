import Styles from '../../styles/section.module.css';

import fareme1 from '../../media/Frame 456.png';
import Man from '../../media/Frame 633.png'

function WhyUs() {
    return (
        <>
            <div className={Styles.WhyUs}>

                <div className={Styles.leftWhy}>
                    <div className={Styles.WhyUSTEXT}>
                        <h2>Why </h2>
                        <span>US</span>
                    </div>
                    <div className={Styles.WhyWrap}>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1}  alt='dw'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1} alt='dd'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1} alt='ds'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1} alt='ds'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1} alt='dd'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                        <div className={Styles.WhyCard}>
                            <div className={Styles.WhyImg}>
                                <img src={fareme1} alt='ds'/>
                            </div>
                            <div className={Styles.WhyText1}>
                                <h3>Career Guidance</h3>
                            </div>
                            <div className={Styles.WhyText2}>
                                <p>Lorem ipsum dolor sit amet consectetur. Elementum mauris felis fermentum egestas magnis porttitor ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.rightWhy}>
                    <div className={Styles.WhyMan}>
                        <img src={Man} alt='ds'/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default WhyUs;
