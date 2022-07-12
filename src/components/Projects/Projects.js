import React from "react";
import "../Projects/style.scss";

const Projects = () => {
  return (
    <>
      <div className="main">
        <div className="topTextDiv">
          <h1 className="awsomeText topText topLeftText">Awesome</h1>
          <h1 className="worksText bottomText topLeftText">
            <span className="worksTextSpan">Works</span>
          </h1>
        </div>
        <div className="projectSection">
          <div className="firstProjectSection">
            <div className="projectFirstMain">
              <div className="projectFirst"></div>
              <div className="infoProject">
                <div className="leftSide">
                  <h3 className="titleText">Project Title Here</h3>
                  <p className="descriptionText">App Development /{">"}</p>
                </div>
                <div className="rightSide">
                  <a href="/">
                    <span className="moreBtn">More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="secondProjectSection">
            <div className="projectSecondMain">
              <div className="projectSecond"></div>
              <div className="infoProject">
                <div className="leftSide">
                  <h3 className="titleText">Project Title Here</h3>
                  <p className="descriptionText">App Development /{">"}</p>
                </div>
                <div className="rightSide">
                  <a href="/">
                    <span className="moreBtn">More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ThirdProjectSection">
            <div className="projectThirdMain">
              <div className="projectThird"></div>
              <div className="infoProject">
                <div className="leftSide">
                  <h3 className="titleText">Project Title Here</h3>
                  <p className="descriptionText">App Development /{">"}</p>
                </div>
                <div className="rightSide">
                  <a href="/">
                    <span className="moreBtn">More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="FourthProjectSection">
            <div className="projectFourthMain">
              <div className="projectFourth"></div>
              <div className="infoProject">
                <div className="leftSide">
                  <h3 className="titleText">Project Title Here</h3>
                  <p className="descriptionText">App Development /{">"}</p>
                </div>
                <div className="rightSide">
                  <a href="/">
                    <span className="moreBtn">More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
