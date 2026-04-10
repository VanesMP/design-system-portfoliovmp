import { useState, useEffect } from "react";
import clsx from "clsx";
import Styles from "./Themes.module.scss";

const portfolioContent = {
  dev: {
    title: "Dev",
    description:
      "A functional and structured aesthetic, optimized for readability and productivity.",
  },
  art: {
    title: "Art",
    description:
      "A more expressive and visual identity, designed to highlight creativity and emotion.",
  },
};

export const Themes = ({ portfolio }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = `${portfolio}-${theme}`;
  }, [portfolio, theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const content = portfolioContent[portfolio];

  return (
    <div className={Styles.themeContainer}>
      <h1 className={Styles.themeTitle}>
        Theme system for {portfolio} portfolio
      </h1>
      <span className={Styles.themeText}>
        Two visual directions are available:
        <span>
          <strong>{content.title}:</strong> {content.description}
        </span>
        Each portfolio adapts the same design tokens to create a distinct
        atmosphere.
      </span>
      <button className={Styles.themeButton} onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};
