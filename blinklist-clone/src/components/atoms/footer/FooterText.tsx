import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { FooterTheme } from "../../../themes";
import { COLORS } from "../../../constants";

type FooterTextProps = {
  text: string;
};

export default function FooterText(props: FooterTextProps) {
  return (
    <ThemeProvider theme={FooterTheme}>
      <Typography variant="body2" color={COLORS.GREY}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
