import React from "react";
import "./style.scss";

const About = () => {
  return (
    <>
      <div className="aboutDiv" data-scroll-section>
        <div className="about">
          <div className="aboutLeft">
            <a href="/about-me" className="moreBtn">
              About me
            </a>
          </div>
          <div className="aboutRight">
            <p className="spanText firstText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus, exercitationem at quas maiores cumque quibusdam sit
              voluptatum ex molestiae architecto debitis id? Ad, inventore.
              Earum quas sed quae commodi?
            </p>
            <p className="spanText secondText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus, exercitationem at quas maiores cumque quibusdam sit
              voluptatum ex molestiae architecto debitis id? Ad, inventore.
              Earum quas sed quae commodi?
            </p>
            <span className="signature">Kushal</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
