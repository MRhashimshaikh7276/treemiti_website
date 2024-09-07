import styles from "../styles/navbar.module.css";

import treemiti from "../media/Logo-Treemiti 1.png";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <div>
              <img src={treemiti} alt="dedjw" />
            </div>
          </div>
          <div className={styles.navbarli}>
            <ul className={styles.row2}>
              <NavLink to={"/Curses"}>
                <li>Courses </li>
              </NavLink>
              <NavLink to={"/Guidance"}>
                <li>Guidence</li>
              </NavLink>
              <NavLink to={'/AboutUs'}>
                <li>About Us</li>
              </NavLink>
              <NavLink to={'/ContactUs'}><li>Contact Us</li></NavLink>
              <Outlet/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
