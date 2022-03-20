import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BodyTheme } from "../../../themes";

type BodyTextProps = {
  text: string;
};

export default function BodyText(props: BodyTextProps) {
  return (
    <ThemeProvider theme={BodyTheme}>
      <Typography variant="body1">{props.text}</Typography>
    </ThemeProvider>
  );
}
