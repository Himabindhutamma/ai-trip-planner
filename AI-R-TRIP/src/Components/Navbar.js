import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link, useLocation } from "react-router-dom";
import DropdownwithImage from "./DropdownwithImage";
import Rupee from "../../src/assets/Rupee.png";
import profile from "../../src/assets/profile.png";

const options = [
  { img: profile, text: "INR", currency: "INR" },
  { img: profile, text: "INR", currency: "INR" },
  { img: profile, text: "INR", currency: "INR" },
  { img: profile, text: "INR", currency: "INR" },
];
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccountOpen = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <div className="topbar-area topbar-style-one">
        <div className="container top-navbar-container">
          <div className="topbar-contact-left">
            <ul class="contact-list">
              <li class="phone-number">
                <i class="fa-solid fa-mobile"></i>
                <a href="tel:9912349980">9912349980</a>
              </li>
              <li class="email-address">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:biz@goodplacestovisit.com">
                  biz@goodplacestovisit.com
                </a>
              </li>
            </ul>
          </div>
          <div className="topbar-right">
            <div className={`dropdown ${isAccountOpen ? "open" : ""}`}>
              <div className="dropdown-button" onClick={toggleAccountOpen}>
                <div className="dropdown-div">
                  <img className="my-acc-img" src={profile} />
                  <p>Himabindhu</p>
                  <i class="fa-solid fa-caret-down" />
                </div>
              </div>

              {isAccountOpen && (
                <ul className="my-account-dropdown-content">
                  <li>My Account</li>
                  <li>Change Password</li>
                  <li>Logout</li>
                </ul>
              )}
            </div>
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
              <div className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption ? (
                  <div className="selected-option">
                    <img
                      src={selectedOption.img}
                      alt={selectedOption.text}
                      className="dropdown-image"
                    />
                    <span style={{ marginRight: "5px" }}>
                      {selectedOption.text}
                    </span>
                  </div>
                ) : (
                  "Select an option"
                )}
                <i class="fa-solid fa-caret-down" />
              </div>

              {isOpen && (
                <ul className="dropdown-content">
                  {options.map((option, index) => (
                    <li
                      class="currency_li "
                      key={index}
                      onClick={() => handleSelect(option)}
                    >
                      <span>
                        <img className="curncy_img" src={option.img} />
                        <span class="name_currency"> {option.text}</span>
                      </span>
                      <span class="side_curency">{option.currency}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        {/* <Link to="/" className="navbar-logo">
          Tripplan
        </Link> */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times " : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/flight"
              className={`nav-links ${
                location.pathname === "/flight" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Flights
            </Link>
          </li>
          {/* <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services{" "}
            </Link>
            <i
              class="fa-solid fa-chevron-down"
              onClick={() => {
                console.log("dropdown");
                setDropdown(true);
              }}
            />
            {dropdown && <Dropdown />}
          </li> */}
          <li className="nav-item">
            <Link
              to="/hotel"
              className={`nav-links ${
                location.pathname === "/hotel" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Hotels
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bus"
              className={`nav-links ${
                location.pathname === "/bus" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Buses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/activity"
              className={`nav-links ${
                location.pathname === "/activity" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Activities
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};
export default Navbar;
