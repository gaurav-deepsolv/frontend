import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Competitors</Link>
      <Link to="/contents">Contents</Link>
    </nav>
  );
};

export default Navbar;
