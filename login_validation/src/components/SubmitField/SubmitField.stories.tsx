import { SubmitField } from "./SubmitField";

export default {
  title: "SubmitField",
  component: SubmitField,
  argTypes: { handleClick: { action: "clicked" } },
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
