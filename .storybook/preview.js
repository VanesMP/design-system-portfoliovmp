import "../dist/css/global.css";
import "../dist/css/dev-light.css";
import "../dist/css/dev-dark.css";
import "../dist/css/art-light.css";
import "../dist/css/art-dark.css";

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
