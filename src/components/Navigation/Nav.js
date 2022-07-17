import { React, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import BigCursor from "../Cursor/CursorContext";
import { useContext } from "react";

export default function Nav() {
  function OpenMenu() {
    setActive(!isActive);
  }
  const setCursor = useContext(BigCursor);

  const [isActive, setActive] = useState(false);
  return (
    <div>
      <nav className="navigation" data-scroll-section>
        <div className="mainNav">
          <div className="leftArea logoArea">
            <ul>
              <li
                onMouseOver={() => {
                  setCursor(true);
                }}
                onMouseOut={() => {
                  setCursor(false);
                }}
              >
                <NavLink className="leftText" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="rightArea navItems">
            <ul className="rightUl">
              <li className="navRightLi">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="navRightLi">
                <NavLink to="/about-me">More About</NavLink>
              </li>
              <li className="navRightLi">
                <NavLink to="/contact">Reach Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hamburger-icon" onClick={OpenMenu}>
        <div className={`line ${isActive ? "active1" : ""}`}></div>
        <div className={`line ${isActive ? "active2" : ""}`}></div>
      </div>
      <div className={`mobileNav ${isActive ? "isOpen" : ""}`}>
        <ul>
          <li className="li activeLi">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="li">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className="li">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="li">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
