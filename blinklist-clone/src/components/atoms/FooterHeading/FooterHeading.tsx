import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { FooterTheme } from "../../../themes";
import "./FooterHeading.css";

type FooterHeadingProps = {
  text: string;
};

export default function FooterHeading(props: FooterHeadingProps) {
  return (
    <ThemeProvider theme={FooterTheme}>
      <Typography variant="body1" className="FooterHeading">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
