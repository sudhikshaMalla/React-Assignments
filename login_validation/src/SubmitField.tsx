import Button from "@material-ui/core/Button";

type SubmitFieldProps = {
  handleClick: () => void;
};

export const SubmitField = (props: SubmitFieldProps) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.handleClick}>
        Submit
      </Button>
    </div>
  );
};
