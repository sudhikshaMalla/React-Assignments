import { makeStyles, Theme } from "@material-ui/core";

const useLogoStyles = makeStyles<Theme, {}, "clockLogo">({
  clockLogo: {
    height: "18px",
    width: "18px",
    verticalAlign: "sub",
    paddingRight: "3px",
  },
});

export default useLogoStyles;
