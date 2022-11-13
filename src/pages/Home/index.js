import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";

function Home(props) {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = " Trent S.";
  const nameArray = [...name];
  const job = "web developer.";
  const jobArray = [...job];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Web Developer</h2>
          <a href="mailto:trentonschneider@gmail.com" className="flat-button">
            CONTACT ME
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

export default Home;
