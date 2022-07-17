import React from "react";
import "../Projects/style.scss";
import images from "../../data";
import BigCursor from "../Cursor/CursorContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [firstUrl, secondUrl] = images;
  const setCursor = useContext(BigCursor);

  return (
    <>
      <div className="projects" data-scroll-section>
        <div className="title">
          <span>
            <span>Awesome</span>
            <span>Projects</span>
          </span>
        </div>

        <section className="projects-section">
          <a
            href="#"
            className="projectsCard"
            onMouseOver={() => {
              setCursor(true);
            }}
            onMouseOut={() => {
              setCursor(false);
            }}
          >
            <img src={firstUrl} alt="failed to load" data-scroll />
            <div className="mainInfo">
              <div className="projectTitle">
                <h1>
                  <span>Project 1 Title Here</span>
                  <span>UI/UX Designing</span>
                </h1>
              </div>
              <div className="arrow">
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="projectsCard"
            onMouseOver={() => {
              setCursor(true);
            }}
            onMouseOut={() => {
              setCursor(false);
            }}
          >
            <img src={secondUrl} alt="failed to load" data-scroll />
            <div className="mainInfo">
              <div className="projectTitle">
                <h1>
                  <span>Project 2 Title Here</span>
                  <span>Web Designing</span>
                </h1>
              </div>
              <div className="arrow">
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="projectsCard"
            onMouseOver={() => {
              setCursor(true);
            }}
            onMouseOut={() => {
              setCursor(false);
            }}
          >
            <img src={secondUrl} alt="failed to load" data-scroll />
            <div className="mainInfo">
              <div className="projectTitle">
                <h1>
                  <span>Project 3 Title Here</span>
                  <span>Android App</span>
                </h1>
              </div>
              <div className="arrow">
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="projectsCard"
            onMouseOver={() => {
              setCursor(true);
            }}
            onMouseOut={() => {
              setCursor(false);
            }}
          >
            <img src={secondUrl} alt="failed to load" data-scroll />
            <div className="mainInfo">
              <div className="projectTitle">
                <h1>
                  <span>Project 3 Title Here</span>
                  <span>Android App</span>
                </h1>
              </div>
              <div className="arrow">
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
            <span data-scroll data-scroll-speed="1">
              <p className="clickHereToSee">Click here to see</p>
              <a href="#" className="moreBtnPc">
                More
                <br />
                Projects
              </a>
            </span>
          </a>
        </section>
      </div>
    </>
  );
};

export default Projects;
