import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { HeaderTheme } from "../../../themes";

type NavTextProps = {
  text: string;
};

export default function NavText(props: NavTextProps) {
  return (
    <ThemeProvider theme={HeaderTheme}>
      <Typography variant="body1" color={COLORS.DARK_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
