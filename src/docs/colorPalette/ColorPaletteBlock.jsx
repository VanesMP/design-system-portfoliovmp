import { ColorItem } from "@storybook/addon-docs/blocks";
import { sortPalette } from "./utils";

export function ColorPaletteBlock({ data }) {
  const sorted = sortPalette(data);

  return (
    <div className="colorPalette">
      {sorted.map((c) => (
        <ColorItem
          key={c.title}
          title={c.title}
          subtitle={`--color-${c.title.toLowerCase().replace(" ", "-")}`}
          colors={[c.value]}
        />
      ))}
    </div>
  );
}
