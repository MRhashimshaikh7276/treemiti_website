


import Styles from '../../styles/header.module.css';
import storeProduct from '../../media/pngwing.com (7).png';
import Computer from '../../media/Digital Graphics 1.png';


function DesignHeader() {

    return (
        <>
            <header className={Styles.DesignHeader}>
                <div className={Styles.row}>
                    <div className={Styles.LeftDesign}>
                        <div className={Styles.CardWrap}>
                            <div className={Styles.Card}>
                                <div >
                                    <img src={Computer} alt='dd'/>
                                </div>
                                <div>
                                        <h3>Digital Graphics</h3>
                                   
                                </div>
                            </div>
                            <div className={Styles.Card}>
                                <div >
                                    <img src={Computer} alt='dd'/>
                                </div>
                                <div>
                                        <h3>Digital Graphics</h3>
                                   
                                </div>
                            </div>
                            <div className={Styles.Card}>
                                <div >
                                    <img src={Computer} alt='dd'/>
                                </div>
                                <div>
                                        <h3>Digital Graphics</h3>
                                   
                                </div>
                            </div>
                            <div className={Styles.Card}>
                                <div >
                                    <img src={Computer} alt='dd'/>
                                </div>
                                <div>
                                        <h3>Digital Graphics</h3>
                                   
                                </div>
                            </div>
                            <div className={Styles.Card}>
                                <div >
                                    <img src={Computer} alt='dd'/>
                                </div>
                                <div>
                                        <h3>Digital Graphics</h3>
                                   
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div className={Styles.RightDesign}>
                        <div className={Styles.BlogImgWrap}>
                            <img src={storeProduct} alt='djdb' />


                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default DesignHeader