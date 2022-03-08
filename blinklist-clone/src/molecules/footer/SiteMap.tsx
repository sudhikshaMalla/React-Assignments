import { createTheme, Stack, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../constants";

const theme = createTheme({
  typography: {
    caption: {
      fontFamily: "Sans Serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

type SiteMapProps = {
  text: string;
};

export default function SiteMap(props: SiteMapProps) {
  return (
    <Stack direction="row" justifyContent="center">
      <ThemeProvider theme={theme}>
        <Typography variant="caption" color={COLORS.GREY}>
          {props.text}
        </Typography>
      </ThemeProvider>
    </Stack>
  );
}
