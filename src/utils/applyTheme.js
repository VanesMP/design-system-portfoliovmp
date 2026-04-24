export const applyTheme = (portfolio, theme) => {
  const root = document.documentElement;
  root.classList.remove("art-dark", "art-light", "dev-dark", "dev-light");
  root.classList.add(`${portfolio}-${theme}`);
};
