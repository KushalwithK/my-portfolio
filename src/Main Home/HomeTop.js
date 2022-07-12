import React from "react";
import "../Main Home/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = (props) => {
  return (
    <div>
      <div className="mainDiv">
        <div className="backgroundParticles">
          <span className="openingAnchorBackground">&lt;&gt;</span>
          <span className="closingAnchorBackground">&lt;/&gt;</span>
          <span className="classParamBackground">class &#123; ... &#x7D;</span>
          <span className="funParamBackground">fun ( ... )</span>
        </div>
        <span className="defSpan">def</span>
        <div className="mainBox">
          <div className="topBoxForIM">
            <h1 className="topLeftText">I'M,</h1>
          </div>
          <div className="mainTextBox">
            <h1 className="mainNameText KushalShahText">KUSHAL SHAH</h1>
            <span className="extraCodingText">():</span>
          </div>
          <div className="professionContent">
            <p className="belowTextMain freelancer">FREELANCER</p>
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
        <div className="socials">
          <div className="socialTextBox">
            <span className="socialText">&lt;/ My Social Handles &gt;</span>
          </div>
          <div className="mainSocialBox">
            <a href="/">
              <div className="instagramBox">
                <FontAwesomeIcon className="instagramIcon" icon={faInstagram} />
              </div>
            </a>
            <a href="/">
              <div className="behanceBox">
                <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
              </div>
            </a>
            <a href="/">
              <div className="gitHubBox">
                <FontAwesomeIcon className="githubIcon" icon={faGithub} />
              </div>
            </a>
            <a href="/">
              <div className="twitterBox">
                <FontAwesomeIcon className="twitterIcon" icon={faTwitter} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
