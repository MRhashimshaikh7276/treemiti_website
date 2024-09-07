import { useState } from "react";
import DesignHeader from "./DesignHeader";
import DevlopmentsCurses from "./DevlopemetsCurses";
import PhilosferHeader from "./PhilosferHeader";
import BusinessCourses from "./BusniessHeader";
import Styles from "../../styles/header.module.css";

export default function Header() {
  const [activeComponent, setActiveComponent] = useState(() => PhilosferHeader);

  let absulote = {
    width: "90%",
    padding: "1.9rem 0rem",
    boxShadow: "0px 3px 7px 0px #3c012850",
    backgroundColor: "#E3E3E3",
    position: "absolute",
    top: "46.1rem",
    marginLeft: "6rem",
  };

  const headerComponents = {
    Philosophy: PhilosferHeader,
    Design: DesignHeader,
    Development: DevlopmentsCurses,
    Busniess:BusinessCourses
  };

  const handleClick = (componentKey) => {
    setActiveComponent(() => headerComponents[componentKey]);
  };

  const ActiveHeaderComponent = activeComponent; 

  return (
    <>
      <ActiveHeaderComponent /> 
      <div style={absulote}>
        <ul className={Styles.row}>
          <li onClick={() => handleClick("Philosophy")}>Our Philosophy</li>
          <li onClick={() => handleClick("Design")}>Design Courses</li>
          <li onClick={() => handleClick("Development")}>Development Courses</li>
          <li onClick={() => handleClick("Busniess")}>Business Courses</li>
        </ul>
      </div>
    </>
  );
}
