import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin ,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to={""}>
          <FaFacebook />
        </Link>
        <Link to={""}>
          <FaYoutube />
        </Link>
        <Link to={""}>
          <FaLinkedin />
        </Link>
        <Link to={""}>
          <FaInstagram />
        </Link>
        
      </footer>
    </>
  );
};

export default Footer;