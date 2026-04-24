import { useState } from "react";
import { SwitchToggle } from "./SwitchToggle";
import { Code2, Palette } from "lucide-react";
import { withThemeControls } from "../__storybook__/ThemesWrapper";

export default {
  title: "Components/SwitchToggle",
  component: SwitchToggle,
  parameters: {
    layout: "centered",
  },
  decorators: [withThemeControls],
};

const OPTIONS = [
  {
    value: "dev",
    label: "Developer & UX",
    iconName: Code2,
  },
  {
    value: "art",
    label: "Art & Illustration",
    iconName: Palette,
  },
];

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return <SwitchToggle {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  options: OPTIONS,
  value: "dev",
};
