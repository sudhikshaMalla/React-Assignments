import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const ariaLabel = { "aria-label": "description" };

type UsernameFieldProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UsernameField = (props: UsernameFieldProps) => {
  return (
    <div>
      <Typography variant="h6">Enter your Username:</Typography>
      <Input
        placeholder="Username"
        inputProps={ariaLabel}
        onChange={props.handleChange}
      />
    </div>
  );
};
