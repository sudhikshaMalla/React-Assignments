import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "../../constants";

const theme = createTheme({
  typography: {
    body2: {
      fontFamily: "Sans Serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

type FooterTextProps = {
  text: string;
};

export default function FooterText(props: FooterTextProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color={COLORS.GREY}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
