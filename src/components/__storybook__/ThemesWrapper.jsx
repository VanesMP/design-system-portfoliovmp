// import { useEffect, useState } from "react";

// export const ThemesWrapper = ({ children }) => {
//   const [portfolio, setPortfolio] = useState("dev");
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     document.documentElement.classList.remove(
//       "art-dark",
//       "art-light",
//       "dev-dark",
//       "dev-light"
//     );

//     document.documentElement.classList.add(`${portfolio}-${theme}`);
//   }, [portfolio, theme]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//       <div style={{ display: "flex", gap: "8px" }}>
//         <button
//           onClick={() => setPortfolio((p) => (p === "dev" ? "art" : "dev"))}
//         >
//           Portfolio : {portfolio}
//         </button>

//         <button
//           onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
//         >
//           {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//         </button>
//       </div>
//       {children}
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import { applyTheme } from "../../utils";

export const ThemeWrapper = ({
  children,
  portfolio = "dev",
  theme = "dark",
}) => {
  useEffect(() => {
    applyTheme(portfolio, theme);
  }, [portfolio, theme]);

  return <>{children}</>;
};

export const ThemeWrapperWithControls = ({ children }) => {
  const [portfolio, setPortfolio] = useState("dev");
  const [theme, setTheme] = useState("dark");

  const togglePortfolio = () =>
    setPortfolio((p) => (p === "dev" ? "art" : "dev"));

  const toggleColorMode = () =>
    setTheme((c) => (c === "dark" ? "light" : "dark"));

  return (
    <ThemeWrapper portfolio={portfolio} theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={togglePortfolio}>Portfolio : {portfolio}</button>
          <button onClick={toggleColorMode}>
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        {children}
      </div>
    </ThemeWrapper>
  );
};

export const withTheme = (Story) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const withThemeControls = (Story) => (
  <ThemeWrapperWithControls>
    <Story />
  </ThemeWrapperWithControls>
);
