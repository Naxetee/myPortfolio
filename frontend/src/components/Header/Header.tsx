import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div className="category-selectors">
          <Link className="menustyle" to="/about">
            About Me
          </Link>
          <Link className="menustyle" to="/experience">
            Experience
          </Link>
          <Link className="menustyle" to="/projects">
            Projects
          </Link>
          <Link className="menustyle" to="/contact">
            Contact
          </Link>
          {/* <div className="line"></div> */}
          <div className="social">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          {/* <div className="line"></div> */}
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default Header;
