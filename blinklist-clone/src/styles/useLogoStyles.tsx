import { makeStyles, Theme } from "@material-ui/core";

export const useClockStyles = makeStyles<Theme, {}, "clockLogo">({
  clockLogo: {
    height: "18px",
    width: "18px",
    verticalAlign: "sub",
    paddingRight: "3px",
  },
});

export const useUserStyles = makeStyles<Theme, {}, "userLogo">({
  userLogo: {
    height: "18px",
    width: "18px",
    verticalAlign: "sub",
    paddingRight: "3px",
  },
});
