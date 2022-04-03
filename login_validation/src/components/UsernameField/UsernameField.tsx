import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const ariaLabel = { "aria-label": "description" };

type UsernameFieldProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant: "primary" | "secondary";
};

export const UsernameField = (props: UsernameFieldProps) => {
  return (
    <div>
      {props.variant === "primary" ? (
        <Typography variant="h6">Enter your Username:</Typography>
      ) : (
        <Typography variant="subtitle1">Enter your Username:</Typography>
      )}
      <Input
        placeholder="Username"
        inputProps={ariaLabel}
        onChange={props.handleChange}
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
