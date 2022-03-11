import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import FooterContainer from "../../molecules/FooterContainer/FooterContainer";
import SiteMap from "../../molecules/SiteMap/SiteMap";

export default function Footer() {
  return (
    <Stack
      sx={{
        height: "25%",
        width: "100%",
        position: "fixed",
        bottom: "0",
        bgcolor: COLORS.MINT_CREAM,
        paddingTop: "1%",
      }}
      direction="column"
      spacing={2}
    >
      <FooterContainer />
      <SiteMap text="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies" />
    </Stack>
  );
}
