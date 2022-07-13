import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import BigCursor from "../Cursor/CursorContext";
import { useContext } from "react";

export default function Nav() {
  const setCursor = useContext(BigCursor);

  return (
    <div>
      <nav className="navigation">
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
    </div>
  );
}
