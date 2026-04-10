import StyleDictionary from "style-dictionary";

const portfolios = ["dev", "art"];
const themes = ["light", "dark"];

async function build() {
  // global tokens
  const sd = new StyleDictionary({
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
  });
  await sd.buildAllPlatforms();

  // all themes and portfolios tokens
  for (const portfolio of portfolios) {
    for (const theme of themes) {
      const key = `${portfolio}-${theme}`;

      const sdTheme = new StyleDictionary({
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
      });
      await sdTheme.buildAllPlatforms();
    }
  }
}

build();
