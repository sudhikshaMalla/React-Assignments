import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../constants";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontFamily: "Sans Serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

type CaptionTextProps = {
  text: string;
};

export default function CaptionText(props: CaptionTextProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" color={COLORS.BRIGHT_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
