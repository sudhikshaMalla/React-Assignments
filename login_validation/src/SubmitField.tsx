type SubmitFieldProps = {
  handleClick: () => void;
};

export const SubmitField = (props: SubmitFieldProps) => {
  return (
    <div>
      <input type="submit" value="Submit" onClick={props.handleClick} />
    </div>
  );
};
