import { Stack, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../../constants";
import { FooterTheme } from "../../../themes";

type SiteMapProps = {
  text: string;
};

export default function SiteMap(props: SiteMapProps) {
  return (
    <Stack direction="row" justifyContent="center">
      <ThemeProvider theme={FooterTheme}>
        <Typography variant="caption" color={COLORS.GREY}>
          {props.text}
        </Typography>
      </ThemeProvider>
    </Stack>
  );
}
