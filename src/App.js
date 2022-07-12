import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preLoader/Preloader.tsx";
import Nav from "./components/Navigation/Nav";
import HomeTop from "./components/Main Home/HomeTop";
import "./components/Main Home/mediaQueries.scss";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8500);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
      <>
        <Nav />

        <SmoothScroll>
          <Routes>
            <Route exact key="home" path="/" element={<HomeTop />} />
            <Route exact key="about" path="/about-me" element={<About />} />
            {/* <Route exact key="projects" path="/projects" element={<Projects />} />
          <Route exact key="contact" path="/contact" element={<Contact />} /> */}
          </Routes>
        </SmoothScroll>
      </>
      {/* )} */}
    </>
  );
}

export default App;
