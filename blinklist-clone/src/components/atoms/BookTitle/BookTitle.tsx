import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardTheme } from "../../../themes";
import "./BookTitle.css";

type BookTitleProps = {
  name: string;
};

export default function BookTitle(props: BookTitleProps) {
  return (
    <ThemeProvider theme={CardTheme}>
      <Typography variant="subtitle1" className="Typography">
        {props.name}
      </Typography>
    </ThemeProvider>
  );
}
