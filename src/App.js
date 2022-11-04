import React, { useContext, useState } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { toggleMenu } = useContext(MenuContext);
  const [toggleDark, setToggleDark] = useState(false);

  function toggleDarkMode() {
    if (toggleDark === false) {
      setToggleDark(true);
    } else if (toggleDark === true) {
      setToggleDark(false);
    }
  }
  return (
    <div className="App">
      <div className="bg-dark">
        <button onClick={toggleMenu} className="btn btn-dark">
          <i className="bi bi-house-door-fill" />
        </button>
        <button onClick={toggleDarkMode} className="btn btn-dark">
          <i className="bi bi-moon-stars-fill" />
        </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
