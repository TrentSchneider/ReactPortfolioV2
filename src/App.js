import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/navbar";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  const [lightDark, setLightDark] = useState({
    background: "text-bg-light",
    icon: "#000",
    menuItems: "light"
  });

  const toggleDarkMode = () => setToggleDark(!toggleDark);
  const fill = `App mHeight ${lightDark.background}`;
  return (
    <>
      <Router>
        <div className={fill}>
          <Menu toggleDarkMode={toggleDarkMode} lightDark={lightDark} />
          <Routes>
            <Route path="/" exact element={<Home lightDark={lightDark} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
