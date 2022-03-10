import { makeStyles, Theme } from "@material-ui/core";
import { COLORS } from "../constants";

const useDivStyles = makeStyles<Theme, {}, "div">({
  div: {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid " + COLORS.SHADOW_GREY,
  },
});

export default useDivStyles;
