import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { FooterTheme } from "../../../themes";
import { COLORS } from "../../../constants";

type FooterHeadingProps = {
  text: string;
};

export default function FooterHeading(props: FooterHeadingProps) {
  return (
    <ThemeProvider theme={FooterTheme}>
      <Typography variant="body1" color={COLORS.DARK_BLUE}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
