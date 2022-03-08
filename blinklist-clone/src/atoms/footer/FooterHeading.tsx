import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "../../constants";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Sans Serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

type FooterHeadingProps = {
  text: string;
};

export default function FooterHeading(props: FooterHeadingProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" color={COLORS.DARK_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
