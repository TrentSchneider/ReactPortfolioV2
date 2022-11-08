import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    classN: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsFillPersonFill />,
    classN: "nav-text"
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <FaIcons.FaFolderOpen />,
    classN: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillContacts />,
    classN: "nav-text"
  }
];
