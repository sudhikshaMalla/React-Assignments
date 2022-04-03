import { PasswordField } from "./PasswordField";

export default {
  title: "PasswordField",
  component: PasswordField,
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
