import styles from "../styles/navbar.module.css";
import treemiti from "../media/Logo-Treemiti 1.png";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import CursesHover from "./cursespage/cursesHover";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  // const toggleArrow = () => {
  //   setIsActive((prevState) => !prevState);
  // };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <div>
              <img src={treemiti} alt="Treemiti Logo" />
            </div>
          </div>
          <div className={styles.navbarli}>
            <ul className={styles.row2}>
              <NavLink to={"/Courses"} style={{ textDecoration: "none", }}>
                <li>
                  Courses
                  <span
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                  >
                    {isActive ? (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ height: "1rem", paddingLeft: ".4rem" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        style={{ height: "1rem", paddingLeft: ".4rem" }}
                      />
                    )}
                    {isActive ? <CursesHover /> : null}
                  </span>
                </li>
              </NavLink>
              <NavLink to={"/Guidance"} style={{ textDecoration: "none" }}>
                <li>Guidance</li>
              </NavLink>
              <NavLink to={"/AboutUs"} style={{ textDecoration: "none" }}>
                <li>About Us</li>
              </NavLink>
              <NavLink to={"/ContactUs"} style={{ textDecoration: "none" }}>
                <li>Contact Us</li>
              </NavLink>
              <Outlet />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
