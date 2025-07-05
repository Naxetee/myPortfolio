import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <label
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <span style={{ marginRight: 8 }}>{theme === "dark" ? "🌙" : "☀️"}</span>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          style={{ display: "none" }}
          aria-label="Toggle dark mode"
        />
        <span
          style={{
            width: 40,
            height: 20,
            background: theme === "dark" ? "#555" : "#aaa",
            borderRadius: 20,
            position: "relative",
            display: "inline-block",
            transition: "background 0.3s",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: theme === "dark" ? 20 : 2,
              top: 2,
              width: 16,
              height: 16,
              background: "#fff",
              borderRadius: "50%",
              transition: "left 0.3s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          />
        </span>
      </label>
    </>
  );
};

export default ThemeSwitcher;
