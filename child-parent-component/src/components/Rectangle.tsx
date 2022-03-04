import useRectangleStyles from "../styles/useRectangleStyles";

export default function Rectangle() {
  const classes = useRectangleStyles();
  return <div className={classes.rectangle} />;
}
