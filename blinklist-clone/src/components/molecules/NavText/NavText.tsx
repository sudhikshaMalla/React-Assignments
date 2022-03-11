import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { HeaderTheme } from "../../../themes";
import "./NavText.css";

type NavTextProps = {
  text: string;
  className?: string;
};

export default function NavText(props: NavTextProps) {
  return (
    <ThemeProvider theme={HeaderTheme}>
      <Typography
        variant="body1"
        color={COLORS.DARK_BLUE}
        className={props.className}
      >
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
