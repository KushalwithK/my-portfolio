import logo from "./logo.svg";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import React, { useState, useEffect } from "react";
import Preloader from "./preLoader/Preloader.tsx";
import Nav from "./Navigation/Nav";
import HomeTop from "./Main Home/HomeTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      new LocomotiveScroll(
        {
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        },
        []
      );
    }, 8600);
  });

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : (
        <> */}
      <Nav />
      <HomeTop />
      <div data-scroll-container></div>
    </>
    // )}
    // </>
  );
}

export default App;
