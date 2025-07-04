import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logoupdated.png";

const Footer = () => {
  const location = useLocation();
  const blackFooterPages = ["/partner", "/events", "/blog", "/article/id"];
  const isBlackBackground = blackFooterPages.includes(location.pathname);
  console.log(isBlackBackground);

  return (
    <footer
      className={`${isBlackBackground ? "footer-black" : "footer-white"}`}
    >
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Women Bitcoin Club Logo" />
        </div>
        <div className="footer-quicklinks">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/partner">Partner with Us</a>
            </li>
            <li>
              <a href="https://forms.gle/XLfBQT5tyGKQJw966" target="_blank">
                Start a Chapter in Your School
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="/community">Join Our Community</a>
            </li>
          </ul>
          <div className="social-media">
            <a
              href="https://www.instagram.com/women_bitcoin_club?igsh=MWhkaHkwcWFqMnpmNA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://x.com/womenbtcclub?s=21&t=1EJLAscd_yq-Ctl2vsfXbQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a href="mailto:Womenbitcoinclub@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/company/women-bitcoin-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright © 2024 Women Bitcoin Club - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
