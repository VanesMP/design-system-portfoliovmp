const StyleDictionary = require("style-dictionary").default;

const portfolios = ["dev", "art"];
const themes = ["light", "dark"];

// global tokens
new StyleDictionary({
  source: ["tokens/global.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "global.css",
          format: "css/variables",
          options: { selector: ":root" },
        },
      ],
    },
  },
}).buildAllPlatforms();

// all themes and portfolios tokens
portfolios.forEach((portfolio) => {
  themes.forEach((theme) => {
    const key = `${portfolio}-${theme}`;

    new StyleDictionary({
      source: [`tokens/${portfolio}/${theme}.json`],
      platforms: {
        css: {
          transformGroup: "css",
          buildPath: "dist/css/",
          files: [
            {
              destination: `${key}.css`,
              format: "css/variables",
              options: { selector: `:root.${key}` },
            },
          ],
        },
      },
    }).buildAllPlatforms();
  });
});
