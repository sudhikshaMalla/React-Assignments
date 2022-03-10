import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardTheme } from "../../themes";

type BookAuthorProps = {
  name: string;
  color: string;
};

export default function CardBody1(props: BookAuthorProps) {
  return (
    <ThemeProvider theme={CardTheme}>
      <Typography variant="body1">{props.name}</Typography>
    </ThemeProvider>
  );
}
