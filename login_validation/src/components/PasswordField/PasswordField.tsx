import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { ReactEventHandler } from "react";
const ariaLabel = { "aria-label": "description" };

type PasswordFieldProps = {
  value: string;
  handleChange: ReactEventHandler;
  variant: "primary" | "secondary";
};

export const PasswordField = (props: PasswordFieldProps) => {
  return (
    <div>
      {props.variant === "primary" ? (
        <Typography variant="h6">Enter your Password:</Typography>
      ) : (
        <Typography variant="subtitle1">Enter your Password:</Typography>
      )}
      <Input
        placeholder="Password"
        inputProps={ariaLabel}
        onChange={props.handleChange}
        type="password"
        style={{
          backgroundColor: props.variant === "primary" ? "lightgrey" : "white",
          borderLeft: props.variant === "primary" ? "1px solid black" : "",
          borderRight: props.variant === "primary" ? "1px solid black" : "",
          borderTop: props.variant === "primary" ? "1px solid black" : "",
        }}
      />
    </div>
  );
};
