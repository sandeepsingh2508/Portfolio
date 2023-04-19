import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link style={{textDecoration:'none',color:'white' }} to="/">Home</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none',color:'white'}} to="/project">Project</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none',color:'white'}} to="/experience">Education</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
