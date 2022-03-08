import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../constants";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Sans Serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

type NavTextProps = {
  text: string;
};

export default function NavText(props: NavTextProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" color={COLORS.DARK_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
