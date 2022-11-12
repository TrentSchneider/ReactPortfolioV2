import "./index.scss";
import * as FaIcons from "react-icons/fa";

import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FaIcons.FaHome />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FaIcons.FaUser />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FaIcons.FaEnvelope />
        </NavLink>
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
    </div>
  );
}

export default SideBar;
