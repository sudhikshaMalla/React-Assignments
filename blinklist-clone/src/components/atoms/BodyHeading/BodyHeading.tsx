import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BodyTheme } from "../../../themes";

type BodyHeadingProps = {
  text: string;
};

export default function BodyHeading(props: BodyHeadingProps) {
  return (
    <ThemeProvider theme={BodyTheme}>
      <Typography variant="h1">{props.text}</Typography>
    </ThemeProvider>
  );
}
