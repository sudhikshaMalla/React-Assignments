import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { BannerTheme } from "../../../themes";

type BannerSubHeadingProps = {
  text: string;
};

export default function BannerSubHeading(props: BannerSubHeadingProps) {
  return (
    <ThemeProvider theme={BannerTheme}>
      <Typography variant="subtitle2" color={COLORS.GREY} sx={{ width: "50%" }}>
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
