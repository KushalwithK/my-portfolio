import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Preloader from "./components/preLoader/Preloader.tsx";
import Nav from "./components/Navigation/Nav";
import HomeTop from "./components/Main Home/HomeTop";
import "./components/Main Home/mediaQueries.scss";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll.ts";
import BigCursor from "./components/Cursor/CursorContext";
import Cursor from "./components/Cursor/Cursor";

function App() {
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);
  const [bigCursor, setCursor] = useState(false);

  useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
    smartphone: {
      smooth: true,
    },
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8500);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Nav />
          <Cursor bigCursor={bigCursor} />
          <BigCursor.Provider value={setCursor}>
            <div data-scroll-container ref={scrollRef}>
              <Routes>
                <Route exact key="home" path="/" element={<HomeTop />} />
                <Route exact key="about" path="/about-me" element={<About />} />
                {/* <Route exact key="projects" path="/projects" element={<Projects />} />
          <Route exact key="contact" path="/contact" element={<Contact />} /> */}
              </Routes>
            </div>
          </BigCursor.Provider>
        </>
      )}
    </>
  );
}

export default App;
