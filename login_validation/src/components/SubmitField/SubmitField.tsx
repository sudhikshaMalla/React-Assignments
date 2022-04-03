import Button from "@material-ui/core/Button";

export type SubmitFieldProps = {
  handleClick: () => void;
  variant: "primary" | "secondary";
};

export const SubmitField = (props: SubmitFieldProps) => {
  return (
    <div>
      <Button
        onClick={props.handleClick}
        style={{
          backgroundColor: props.variant === "primary" ? "gray" : "pink",
          color: props.variant === "primary" ? "white" : "black",
          borderRadius: props.variant === "primary" ? 100 : 0,
        }}
      >
        Submit
      </Button>
    </div>
  );
};
