import styles from '../styles/navbar.module.css';

import treemiti from '../media/Logo-Treemiti 1.png'

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.row}>
                    <div className={styles.logo}>
                        <div><img src={treemiti} alt='dedjw' /></div>
                    </div>
                    <div className={styles.navbarli}>
                        <ul className={styles.row2}>
                            <li>Courses </li>
                            <li>Guidence</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar