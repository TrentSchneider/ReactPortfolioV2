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
  const menuItems = `nav-menu-items ${props.lightDark.menuItems}`;
  return (
    <>
      <div className={props.lightDark.background}>
        <IconContext.Provider value={{ color: props.lightDark.icon }}>
          <div className="navMenu">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className={menuItems} onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
                <Link to="#" onClick={props.toggleDarkMode}>
                  <BsIcons.BsMoonStarsFill />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                const textC = `${item.classN} ${props.lightDark.menuItems}Text`;
                return (
                  <li key={index} className={textC}>
                    <Link to={item.path}>
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
