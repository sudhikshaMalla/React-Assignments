import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { COLORS } from "../../../constants";
import { CardTheme } from "../../../themes/index";
import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useUserStyles } from "../../../styles/useLogoStyles";

type ReadCountProps = {
  val: string;
};

export default function ReadCount(props: ReadCountProps) {
  const classes = useUserStyles();
  return (
    <ThemeProvider theme={CardTheme}>
      <Typography variant="caption" color={COLORS.GREY}>
        <PermIdentityIcon className={classes.userLogo} />
        {props.val} reads
      </Typography>
    </ThemeProvider>
  );
}
