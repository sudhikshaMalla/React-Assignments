import { ReactEventHandler } from "react";

type PasswordFieldProps = {
  value: string;
  handleChange: ReactEventHandler;
};

export const PasswordField = (props: PasswordFieldProps) => {
  return (
    <div>
      Enter your Password:
      <br></br>
      <input
        type="password"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
