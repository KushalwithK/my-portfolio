import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navigation">
        <div className="mainNav">
          <div className="leftArea logoArea">
            <ul>
              <li>
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
