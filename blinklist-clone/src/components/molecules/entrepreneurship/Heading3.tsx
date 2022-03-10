import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BodyTheme } from "../../../themes";

type Heading3 = {
  text: string;
  color: string;
};

export default function Heading3(props: Heading3) {
  return (
    <ThemeProvider theme={BodyTheme}>
      <Typography variant="h3" color={props.color} sx={{ width: "50%" }}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
