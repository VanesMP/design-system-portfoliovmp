import "../dist/css/global.css";
import "../dist/css/dev-light.css";
import "../dist/css/dev-dark.css";
import "../dist/css/art-light.css";
import "../dist/css/art-dark.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "light",
    toolbar: {
      items: ["light", "dark"],
    },
  },
  portfolio: {
    name: "Portfolio",
    defaultValue: "dev",
    toolbar: {
      items: ["dev", "art"],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { theme, portfolio } = context.globals;

    document.documentElement.className = `${portfolio}-${theme}`;

    return Story();
  },
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export default preview;

/** @type { import('@storybook/react-vite').Preview } */
