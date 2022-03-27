import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import useLogoStyles from "../styles/useLogoStyles";

export default function Readingtime() {
  const classes = useLogoStyles();
  return (
    <Typography variant="h6" color="secondary">
      <AccessTime className={classes.clockLogo} />
      13-minute read
    </Typography>
  );
}
