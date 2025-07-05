import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
