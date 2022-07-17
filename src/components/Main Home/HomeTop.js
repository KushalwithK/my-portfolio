import React from "react";
import "./style.scss";
import "./mediaQueries.scss";
import Nav from "../Navigation/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "../Projects/Projects";
import BigCursor from "../Cursor/CursorContext";
import { useContext } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Home = (props) => {
  const setCursor = useContext(BigCursor);

  return (
    <>
      <div data-scroll-section>
        <Nav />
        <div className="mainDiv">
          <div className="backgroundParticles">
            <span
              className="openingAnchorBackground particles"
              data-scroll
              data-scroll-speed="4"
            >
              &lt;&gt;
            </span>
            <span
              className="closingAnchorBackground particles"
              data-scroll
              data-scroll-speed="3"
            >
              &lt;/&gt;
            </span>
            <span
              className="classParamBackground particles"
              data-scroll
              data-scroll-speed="5"
            >
              class &#123; ... &#x7D;
            </span>
            <span
              className="funParamBackground particles"
              data-scroll
              data-scroll-speed="2"
            >
              fun ( ... )
            </span>
          </div>

          <div className="mainBox">
            <span className="defSpan">hey</span>
            <div className="topBoxForIM">
              <h1 className="topLeftText">I'M,</h1>
            </div>
            <div className="mainTextBox">
              <h1 className="mainNameText KushalShahText">KUSHAL SHAH</h1>
              <span className="extraCodingText">():</span>
            </div>
            <div className="professionContent">
              <p className="belowTextMain freelancer activeText">FREELANCER</p>
              <p className="belowTextMain webDeveloper dash">WEB DEVELOPER</p>
              <p className="belowTextLast androidDeveloper dash">
                ANDROID DEVELOPER;
              </p>
            </div>
            <div className="exploreContent">
              <div className="exploreInCode">
                <span>
                  <strong>fun</strong> exploreSite() <strong>&#123;</strong>
                </span>
                <br />
                <a className="exploreButton" href="/projects">
                  Explore
                </a>
                <span className="arrowRight"></span>
              </div>
            </div>
          </div>
          <div className="socials" data-scroll data-scroll-speed="6">
            <div className="socialTextBox">
              <span className="socialText">&lt;/ My Social Handles &gt;</span>
            </div>
            <div className="mainSocialBox">
              <a
                href="/"
                className="socialHover"
                onMouseOver={() => {
                  setCursor(true);
                }}
                onMouseOut={() => {
                  setCursor(false);
                }}
              >
                <div className="instagramBox">
                  <FontAwesomeIcon
                    className="instagramIcon"
                    icon={faInstagram}
                  />
                </div>
              </a>
              <a
                href="/"
                className="socialHover"
                onMouseOver={() => {
                  setCursor(true);
                }}
                onMouseOut={() => {
                  setCursor(false);
                }}
              >
                <div className="behanceBox">
                  <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
                </div>
              </a>
              <a
                href="/"
                className="socialHover"
                onMouseOver={() => {
                  setCursor(true);
                }}
                onMouseOut={() => {
                  setCursor(false);
                }}
              >
                <div className="gitHubBox">
                  <FontAwesomeIcon className="githubIcon" icon={faGithub} />
                </div>
              </a>
              <a
                href="/"
                className="socialHover"
                onMouseOver={() => {
                  setCursor(true);
                }}
                onMouseOut={() => {
                  setCursor(false);
                }}
              >
                <div className="twitterBox">
                  <FontAwesomeIcon className="twitterIcon" icon={faTwitter} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default Home;
