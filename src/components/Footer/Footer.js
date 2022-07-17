import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div data-scroll-section>
      <section className="footer">
        <div className="footerMain">
          <div className="upperText">
            <span className="leftText">
              <p>Let's work</p>
              <p>Together</p>
            </span>
            <span>
              <a href="/" className="contactBtn">
                <p>Contact me</p>
                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
              </a>
            </span>
          </div>
          <div className="creditSection">
            <span className="creditText">
              <p>Designed with</p>
              <FontAwesomeIcon className="heart" icon={faHeart} />
              <p>by&nbsp;</p>
              <a href="/">
                <p className="underline">kushal</p>
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
