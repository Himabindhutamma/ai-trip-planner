import React, { useState } from "react";
import "./Dropdown.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default Dropdown;
