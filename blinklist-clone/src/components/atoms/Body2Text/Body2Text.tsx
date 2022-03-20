import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BodyTheme } from "../../../themes";

type Body2TextProps = {
  text: string;
};

export default function Body2Text(props: Body2TextProps) {
  return (
    <ThemeProvider theme={BodyTheme}>
      <Typography variant="body2">{props.text}</Typography>
    </ThemeProvider>
  );
}
