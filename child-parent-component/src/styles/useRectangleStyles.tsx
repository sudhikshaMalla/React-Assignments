import { makeStyles, Theme } from "@material-ui/core";

const useRectangleStyles = makeStyles<Theme, {}, "rectangle">({
  rectangle: {
    height: "15px",
    backgroundColor: "#DFE8F6",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
});

export default useRectangleStyles;
