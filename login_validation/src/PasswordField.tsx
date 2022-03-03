import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { ReactEventHandler } from "react";
const ariaLabel = { "aria-label": "description" };

type PasswordFieldProps = {
  value: string;
  handleChange: ReactEventHandler;
};

export const PasswordField = (props: PasswordFieldProps) => {
  return (
    <div>
      <Typography variant="h6">Enter your Password:</Typography>
      <Input
        placeholder="Password"
        inputProps={ariaLabel}
        onChange={props.handleChange}
        type="password"
      />
    </div>
  );
};
