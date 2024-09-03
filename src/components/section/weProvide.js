import Styles from '../../styles/section.module.css';




function WeProvide({img ,text}) {


    return (
        <>
            <div className={Styles.repetCard}>
                <div className={Styles.card}>
                    <img src={img} alt='dsjss' />
                </div>
                <div className={Styles.weBtn}><h2>{text}</h2></div>
            </div>
           
        </>
    )
}

export default WeProvide;
