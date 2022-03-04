import { makeStyles, Theme } from "@material-ui/core";

const useDivStyles = makeStyles<Theme, {}, "div">({
  div: {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #DFE8F6",
  },
});

export default useDivStyles;
