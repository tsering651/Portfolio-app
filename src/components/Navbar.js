import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../routes/Home";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  //when we click the hamburger it should show the cross icon so set the hamburger to a state
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className= {click ?"nav-menu active  ":"nav-menu "}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}
