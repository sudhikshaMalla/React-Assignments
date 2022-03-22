import { UsernameField } from "./UsernameField";

export default {
  title: "UsernameField",
  component: UsernameField,
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};
