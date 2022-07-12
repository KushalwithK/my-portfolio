import React from "react";
import "../Navigation/style.scss";

export default function Nav() {
  return (
    <div>
      <nav className="navigation">
        <div className="mainNav">
          <div className="leftArea logoArea">
            <a className="leftText active" href="#">
              Home
            </a>
          </div>
          <div className="rightArea navItems">
            <ul className="rightUl">
              <li className="navRightLi">
                <a href="/projects">Projects</a>
              </li>
              <li className="navRightLi">
                <a href="/about-me">More About</a>
              </li>
              <li className="navRightLi">
                <a href="/contact">Reach Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
