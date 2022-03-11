import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { FooterTheme } from "../../../themes";

type CaptionTextProps = {
  text: string;
};

export default function CaptionText(props: CaptionTextProps) {
  return (
    <ThemeProvider theme={FooterTheme}>
      <Typography variant="subtitle1" color={COLORS.BRIGHT_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
