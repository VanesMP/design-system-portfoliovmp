import { useEffect, useState } from "react";

export const ThemesWrapper = ({ children }) => {
  const [portfolio, setPortfolio] = useState("dev");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.remove(
      "art-dark",
      "art-light",
      "dev-dark",
      "dev-light"
    );

    document.documentElement.classList.add(`${portfolio}-${theme}`);
  }, [portfolio, theme]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setPortfolio((p) => (p === "dev" ? "art" : "dev"))}
        >
          Portfolio : {portfolio}
        </button>

        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      {children}
    </div>
  );
};

export const withTheme = (Story) => <ThemesWrapper children={<Story />} />;
