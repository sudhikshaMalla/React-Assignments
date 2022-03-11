import Stack from "@mui/material/Stack";
import BannerHeading from "../BannerHeading/BannerHeading";
import BannerSubHeading from "../BannerSubHeading/BannerSubHeading";

export default function BannerText() {
  return (
    <Stack direction="column" spacing={2}>
      <BannerHeading text="Explore Books on entrepreneurship" />
      <BannerSubHeading text="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start." />
    </Stack>
  );
}
