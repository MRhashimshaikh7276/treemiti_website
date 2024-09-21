
import styles from '../../styles/header.module.css';


import lion from '../../media/pngwing.com (13) 2.png';


export default function PhilosferHeader() {
    return (
        <header className={`${styles.PhilosferMain} PhilosferMain`}>
            <div className={`${styles.row} row`}>
                <div className={`${styles.left} left`}>
                    <div className={`${styles.lion} lion`}>
                        <img src={lion} alt='dnsn'/>
                    </div>
                </div>
                <div className={`${styles.right} right`}>
                    <div className={styles.text1}>
                        <h1 >Creating Professionals</h1>
                    </div>
                    <div className={styles.text2}>
                        <p>When your basics are clear, you can comfortably fit yourself  with evolving technology </p>
                    </div>
                    <div className={styles.text3}>
                    <p>For instance, if you know how to drive a manual car, you won’t  need any time to learn  the automatic car</p>
                    </div>
                </div>
            </div>

        </header>
    )
}

