import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/navbar";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  const [lightDark, setLightDark] = useState({
    background: "text-bg-light",
    border: "border-secondary"
  });

  const toggleDarkMode = () => setToggleDark(!toggleDark);

  useEffect(() => {
    if (!toggleDark) {
      return setLightDark({
        background: "text-bg-light",
        border: "border-secondary"
      });
    } else if (lightDark) {
      return setLightDark({
        background: "text-bg-dark",
        border: "border-light"
      });
    }
  }, [lightDark, toggleDark]);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('toggleDark'));
    if (value) {
     setToggleDark(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toggleDark', JSON.stringify(toggleDark));
  }, [toggleDark]);

  const fill = `App mHeight ${lightDark.background}`;
  return (
    <>
      <Router>
        <div className={fill}>
          <Menu
            toggleDarkMode={toggleDarkMode}
            lightDark={lightDark}
            toggleDark={toggleDark}
          />
          <Routes>
            <Route path="/" exact element={<Home lightDark={lightDark} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
