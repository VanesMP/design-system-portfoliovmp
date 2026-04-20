import "../dist/css/global.css";
import "../dist/css/dev-light.css";
import "../dist/css/dev-dark.css";
import "../dist/css/art-light.css";
import "../dist/css/art-dark.css";
import "../docs.scss";

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
