import React from "react";
import "./style.scss";

const About = () => {
  return (
    <>
      <div className="aboutDiv" data-scroll-section>
        <div className="about">
          <div className="aboutLeft">
            <a
              href="/about-me"
              className="moreBtn"
              data-scroll
              data-scroll-speed="3"
            >
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
        <div className="bottomImages">
          <img
            src="https://www.teahub.io/photos/full/27-274683_dark-minimal-wallpaper-phone.jpg"
            alt="achievements"
            className="bottomImage"
            data-scroll
            data-scroll-speed="1"
          ></img>
          <img
            src="https://www.teahub.io/photos/full/27-274683_dark-minimal-wallpaper-phone.jpg"
            alt="achievements"
            className="bottomImage"
            data-scroll
            data-scroll-speed="2"
          ></img>
          <img
            src="https://www.teahub.io/photos/full/27-274683_dark-minimal-wallpaper-phone.jpg"
            alt="achievements"
            className="bottomImage"
            data-scroll
            data-scroll-speed="3"
          ></img>
          <img
            src="https://www.teahub.io/photos/full/27-274683_dark-minimal-wallpaper-phone.jpg"
            alt="achievements"
            className="bottomImage"
            data-scroll
            data-scroll-speed="4"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
