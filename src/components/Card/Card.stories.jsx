import { Card } from "./Card";
import { withTheme } from "../__storybook__/ThemesWrapper";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [withTheme],
};

export const Default = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    description:
      "This is a description of the card content. \n It provides more details about the card.",
    date: "2026-04-01",
  },
};
