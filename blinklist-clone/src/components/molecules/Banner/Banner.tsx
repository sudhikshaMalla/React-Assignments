import Stack from "@mui/material/Stack";
import BannerImage from "../../../resources/BannerImage.png";
import { COLORS } from "../../../constants";
import BannerText from "../BannerText/BannerText";

export default function Banner() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ bgcolor: COLORS.MINT_CREAM, padding: "5%" }}
    >
      <BannerText />
      <img src={BannerImage} alt="banner_img" width="25%" />
    </Stack>
  );
}
