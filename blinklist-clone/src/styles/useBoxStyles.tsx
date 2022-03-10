import { makeStyles, Theme } from "@material-ui/core";

const useBoxStyles = makeStyles<Theme, {}, "box">({
  box: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "23px",
    textAlign: "right",
  },
});

export default useBoxStyles;
