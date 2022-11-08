import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarData } from "./menuData";
import "./navbar.css";
import { IconContext } from "react-icons";

function Menu(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function lightDarkIcon() {
    if (!props.toggleDark) {
      return <BsIcons.BsMoonStarsFill />;
    } else if (props.toggleDark) {
      return <BsIcons.BsFillSunFill />;
    }
  }

  return (
    <>
      <div className="dark">
        {/* <IconContext.Provider value={{ color: props.lightDark.icon }}> */}
        <div className="navMenu mb-1">
          <Link to="#" className="menu-bars bars-margin text-light">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items dark" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
                <Link to="#" onClick={props.toggleDarkMode} className="ms-4">
                  {props.toggleDark ? (
                    <BsIcons.BsFillSunFill />
                  ) : (
                    <BsIcons.BsMoonStarsFill />
                  )}
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.classN}>
                    <Link to={item.path} className="link-light">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Menu;
