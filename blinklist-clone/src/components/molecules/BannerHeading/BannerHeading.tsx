import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { BannerTheme } from "../../../themes";

type BannerHeadingProps = {
  text: string;
};

export default function BannerHeading(props: BannerHeadingProps) {
  return (
    <ThemeProvider theme={BannerTheme}>
      <Typography variant="h1" color={COLORS.DARK_BLUE} sx={{ width: "50%" }}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
