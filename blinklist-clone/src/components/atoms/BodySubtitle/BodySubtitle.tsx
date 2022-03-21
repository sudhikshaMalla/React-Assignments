import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BodyTheme } from "../../../themes";

type BodySubtitleProps = {
  text: string;
  className: string;
};

export default function BodySubtitle(props: BodySubtitleProps) {
  return (
    <ThemeProvider theme={BodyTheme}>
      <Typography variant="subtitle1">{props.text}</Typography>
    </ThemeProvider>
  );
}
