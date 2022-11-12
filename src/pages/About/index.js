import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import * as FaIcons from "react-icons/fa";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const aboutString = "About Me";
  const aboutArray = aboutString.split("");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
        </h1>
        <p> test test test</p>
        <p>test test test</p>
        <p>test test test</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FaIcons.FaReact color="#5ED4F4" />
          </div>
          <div className="face2">
            <FaIcons.FaJsSquare color="#EFD81D" />
          </div>
          <div className="face3">
            <FaIcons.FaCss3 color="#28A4D9" />
          </div>
          <div className="face4">
            <FaIcons.FaHtml5 color="#F06529" />
          </div>
          <div className="face5">
            <FaIcons.FaGitAlt color="#EC4D28" />
          </div>
          <div className="face6">
            <FaIcons.FaNodeJs color="#7CC03B" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
