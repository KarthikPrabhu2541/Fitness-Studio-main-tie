
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/OIP2.png";
import "./Header.css";

const Header = () => {
  const navRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		};
  const closeNav = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <img src={logo} className="HeaderLogo" alt="logo" />
      </a>
      <nav ref={navRef}>
        <NavLink to="/" onClick={closeNav}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeNav}>
          About
        </NavLink>
        
          <NavLink to="/classes">
            Classes
          </NavLink>
          
        
        <NavLink to="/contact" onClick={closeNav}>
          Contact
        </NavLink>
        <NavLink className="enrollNowBTN" to="/enroll" onClick={closeNav}>
          Enroll Now
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={closeNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;

