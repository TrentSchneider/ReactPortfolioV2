import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu">
      <h1>Menu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        eligendi provident.
      </p>
      <button onClick={closeMenu}>
        <i className="bi bi-x-lg closeMenu text-white" />
      </button>
    </div>
  );
}

export default Menu;
