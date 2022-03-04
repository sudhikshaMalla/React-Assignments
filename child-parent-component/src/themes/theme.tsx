import { createTheme } from "@mui/material";
import { COLORS } from "../constants";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.ALPHA_PRIMARY_700,
    },
    secondary: {
      main: COLORS.ALPHA_PRIMARY_GREY,
    },
    info: {
      main: COLORS.ALPHA_PRIMARY_500,
    },
  },
  typography: {
    fontFamily: "sans-serif",
    subtitle1: {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "23px",
      textAlign: "left",
      paddingBottom: "8px",
    },
    subtitle2: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500px",
      lineHeight: "20px",
      textAlign: "left",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    h6: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "18px",
      textAlign: "left",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  },
});
