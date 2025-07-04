import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logoupdated.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    } else {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className={`nav-links ${showMenu ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink to="/" onClick={closeMenuOnMobile}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" onClick={closeMenuOnMobile}>
            About Us
          </NavLink>
        </li>
        <div className="test">
          <li className="nav-item" onClick={toggleDropdown}>
            <NavLink to="/partner" onClick={closeMenuOnMobile}>
              Join Us
            </NavLink>
            <span className="arrow">&#9662;</span> {/* Down arrow */}
          </li>
          {showDropdown && (
            <ul className="dropdown">
              <li>
                <NavLink
                  to="https://forms.gle/twbmnD71RxWiruAXA"
                  target="_blank"
                  onClick={closeMenuOnMobile}
                >
                  Become a Member
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://forms.gle/bagp9eFLcaeskY6x5
"
                  target="balank"
                  onClick={closeMenuOnMobile}
                >
                  Become a Mentor
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" onClick={closeMenuOnMobile}>
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/partner" onClick={closeMenuOnMobile}>
                  Partner with Us
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <li className="nav-item">
          <NavLink to="/community" onClick={closeMenuOnMobile}>
            Community
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" onClick={closeMenuOnMobile}>
            Blog
          </NavLink>
        </li>
        <div></div>
        <li className="nav-item">
          <NavLink to="/partner">
            <button className="donate-btn">Donate</button>
          </NavLink>
        </li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburger} />
      </div>
    </nav>
  );
};

export default Navbar;
