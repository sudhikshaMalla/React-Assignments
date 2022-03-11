import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import { useClockStyles } from "../../../styles/useLogoStyles";
import { COLORS } from "../../../constants";
import { CardTheme } from "../../../themes";
import { ThemeProvider } from "@mui/material";

type ReadingTimeProps = {
  val: number;
};

export default function ReadingTime(props: ReadingTimeProps) {
  const classes = useClockStyles();
  return (
    <ThemeProvider theme={CardTheme}>
      <Typography variant="caption" color={COLORS.GREY}>
        <AccessTime className={classes.clockLogo} />
        {props.val}-minute read
      </Typography>
    </ThemeProvider>
  );
}
