import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <nav id="navmenu" class="navmenu">
        <div className="logo">
          <img src="../public/logo.png" alt="" />
        </div>
        <div class="items"> 
          <ul>
            <li><Link to={"/"} className="active">Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/Menu"}>Menu</Link></li>
            <li><Link to="#specials">Specials</Link></li>
            <li><Link to="#events">Events</Link></li>
            <li><Link to="#chefs">Chefs</Link></li>
            <li><Link to="#gallery">Gallery</Link></li>
        </ul>
        </div>
        <div class="sign">
          <Link to="#signup">SignUp/</Link>
          <Link to="#login">login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
