import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <nav id="navmenu" className="navmenu">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${menuVisible ? "active" : ""}`}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li onClick={toggleDropdown} className="menu-item">
            Menu <span className="arrow">&#9662;</span>
            {dropdownVisible && (
              <ul class="dropdown">
                <div class="dropdown-content">
                  <li><Link to={"/veg"}>VEG</Link></li>
                  <li><Link to={"/nonveg"}>Non-VEG</Link></li>
                </div>
              </ul>
            )}
          </li>
          <li><Link to={"/gallery"}>Gallery</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        <div className="signup">
        <Link to={"/signupForm"} className="button">Sign Up/LogIn</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
