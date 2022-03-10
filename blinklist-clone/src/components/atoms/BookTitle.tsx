import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardTheme } from "../../themes";
import { COLORS } from "../../constants";

type BookTitleProps = {
  name: string;
};

export default function BookTitle(props: BookTitleProps) {
  return (
    <ThemeProvider theme={CardTheme}>
      <Typography
        variant="subtitle1"
        color={COLORS.DARK_BLUE}
        sx={{ paddingTop: "5px" }}
      >
        {props.name}
      </Typography>
    </ThemeProvider>
  );
}
