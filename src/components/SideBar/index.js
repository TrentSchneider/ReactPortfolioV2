import "./index.scss";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeClassName="active"
          to="/"
        >
          <FaIcons.FaHome />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FaIcons.FaUser />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeClassName="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FaIcons.FaFolderOpen />
        </NavLink>
        <IoIcons.IoMdClose
          onClick={() => setShowNav(false)}
          color="#ffd700"
          size="30px"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/trentonschneider/"
          >
            <FaIcons.FaLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/TrentSchneider"
          >
            <FaIcons.FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:trentonschneider@gmail.com">
            <FaIcons.FaEnvelope />
          </a>
        </li>
      </ul>
      <FaIcons.FaBars
        onClick={() => setShowNav(true)}
        className="hamburger-icon"
        color="#ffd700"
        size="30px"
      />
    </div>
  );
}

export default SideBar;
