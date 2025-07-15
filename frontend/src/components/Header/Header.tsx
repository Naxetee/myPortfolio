import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.css";

const Header: React.FC = () => {
const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleDropdown = () => setDropdownOpen((open) => !open);
  return (
    <>
      <div className="header">
        <Link className="logo" to="/"></Link>

        {/* Selector de Categorías */}
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
          <div className="line"></div>
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
          <div className="line"></div>
          <ThemeSwitcher />
        </div>

        {/* Icono hamburguesa */}
        <div className="hamburger" onClick={handleDropdown} ref={hamburgerRef}>
          <span />
          <span />
          <span />
        </div>

        {/* Menú desplegable */}
        {dropdownOpen && (
          <div className="category-dropdown" ref={dropdownRef}>
            <Link className="menustyle" to="/about" onClick={handleDropdown}>
              About Me
            </Link>
            <Link
              className="menustyle"
              to="/experience"
              onClick={handleDropdown}
            >
              Experience
            </Link>
            <Link className="menustyle" to="/projects" onClick={handleDropdown}>
              Projects
            </Link>
            <Link className="menustyle" to="/contact" onClick={handleDropdown}>
              Contact
            </Link>
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
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
